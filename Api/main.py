from typing import Union
from fastapi import FastAPI
import json
import os


# def process_device_name(device_name):
#     processed_name = device_name.replace(" ", "_").replace("/", "-").replace("(","_").replace(")","_").lower()
#     return processed_name

def read_files_in_directory(directory: str):
    file_contents = []
    for root, _, files in os.walk(directory): #Hey amigos, o _ parece inutil, mas não tira ele não =D. O os.walk retorna 3 "elementos" e como não vamos usar um deles, o _ ta aí. É convenção usar _ para for, quando não se vai usar esse elemento.
        for file in files: # Aqui vocês já sabem né? Estamos definindo o caminho para os arquivos e abrindo eles em seguida 'o'. Ai a gente lê o arquivo e salva na lista que tá ali em cima, pra poder gerar uma lista de dicionários(nosso arquivo é um json, meu bom)
            file_path = os.path.join(root, file)
            with open(file_path, "r", encoding="utf-8") as file:
                data = json.load(file)
                file_contents.append(data)
    return file_contents

# ----------> Tem umas coisinha comentada porque ainda não decidi a melhor forma de lidar com nossos arquivos, deixa baixo. 

# def read_devices_from_file(filename):
#     devices_data = []
#     for filename in filename:
#         with open(filename, "r", encoding='utf-8') as file:
#             data = json.load(file)
#             devices_data.extend(data)
#     return devices_data

# file_paths = [
#     "database/json_db/lavadora/lavadora_e_secadora_de_roupas_automatica_com_abertura_frontal_lava_e_seca.json",
#     "database/json_db/lavadora/lavadoras_de_roupa_automaticas_abertura_frontal.json",
#     "database/json_db/lavadora/lavadoras_de_roupa_semi-automaticas.json",
#     "database/json_db/lavadora/lavadouras_de_roupas_automatica_abertura_superior.json",
#     "database/json_db/lampada/lampada_decorativa.json",
# ]

# devices_data = read_devices_from_file(file_paths)

# devices = {}
# for device in devices_data:
#     device_model = device["model"]
#     processed_name = process_device_name(device_model)
#     processed_name += "_" + device["volts"]
#     devices[processed_name] = {
#         "manufacturer": device["manufacturer"],
#         "brand": device["brand"],
#         "model": device["model"],
#         "consumption": device["consumption"],
#         "volts": device["volts"]
#     }

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/devices")
def get_all_devices():
    db_directory = "database/json_db"
    all_files = read_files_in_directory(db_directory)
    return all_files

# @app.get("/devices/{device_name}")
# def read_item(device_name: str, q: Union[str, None] = None):
#     processed_name = process_device_name(device_name)
#     if processed_name in devices:
#         return devices[processed_name]
#     raise HTTPException(status_code=404, detail="Device not found")

@app.get("/lavadora")
def get_lavadora_devices():
    lavadora_directory = "database/json_db/lavadora"
    lavadora_files = read_files_in_directory(lavadora_directory)
    return lavadora_files

@app.get("/lampada")
def get_lampada_devices():
    lampada_directory = "database/json_db/lampada"
    lampada_files = read_files_in_directory(lampada_directory)
    return lampada_files

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
