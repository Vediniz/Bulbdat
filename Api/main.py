from typing import Union
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import json
import os

def read_devices_from_file(filename):
    devices_data = []
    for filename in filename:
        with open(filename, "r", encoding='utf-8') as file:
            data = json.load(file)
            devices_data.extend(data)
    return devices_data

def process_device_name(device_name):
    processed_name = device_name.replace(" ", "_").replace("/", "-").lower()
    return processed_name

file_paths = [
    "database/json_db/lavadora/lavadora_e_secadora_de_roupas_automatica_com_abertura_frontal_lava_e_seca.json",
    "database/json_db/lavadora/lavadoras_de_roupa_automaticas_abertura_frontal.json",
    "database/json_db/lavadora/lavadoras_de_roupa_semi-automáticas.json",
    "database/json_db/lavadora/lavadoras_de_roupas_automatica_abertura_superior.json",
    # "database/json_db/generic/generic_devices.json",
]

devices_data = read_devices_from_file(file_paths)

devices = {}
for device in devices_data:
    device_model = device["model"]
    processed_name = process_device_name(device_model)
    devices[processed_name] = {
        "manufacturer": device["manufacturer"],
        "brand": device["brand"],
        "model": device_model,
        "consumption": device["consumption"]
    }

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/devices")
def get_devices():
    return devices

@app.get("/devices/{device_name}")
def read_item(device_name: str, q: Union[str, None] = None):
    processed_name = process_device_name(device_name)
    if processed_name in devices:
        return devices[processed_name]
    raise HTTPException(status_code=404, detail="Device not found")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
