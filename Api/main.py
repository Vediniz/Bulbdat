import json
import os
from fastapi import FastAPI
import uvicorn


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

@app.get("/lavadoras")
def get_lavadora_devices():
    lavadora_directory = "database/json_db/lavadora"
    lavadora_files = read_files_in_directory(lavadora_directory)
    return lavadora_files

@app.get("/lampadas")
def get_lampada_devices():
    lampada_directory = "database/json_db/lampada"
    lampada_files = read_files_in_directory(lampada_directory)
    return lampada_files


@app.get("/refrigeradores")
def get_refrigeradores_devices():
    refrigeradores_directory = "database/json_db/refrigeradores"
    refrigeradores_files = read_files_in_directory(refrigeradores_directory)
    return refrigeradores_files


@app.get("/televisores")
def get_televisores_devices():
    televisores_directory = "database/json_db/televisores"
    televisores_files = read_files_in_directory(televisores_directory)
    return televisores_files

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
