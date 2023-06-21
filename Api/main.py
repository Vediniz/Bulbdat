from typing import Union
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

import json

def read_devices_from_file(filename):
    with open(filename, "r") as file:
        devices_data = json.load(file)
    return devices_data

def process_device_name(device_name):
    processed_name = device_name.replace(" ", "_").replace("/", "-").lower()
    return processed_name


devices_data = read_devices_from_file("devices.json")

devices = {}
for device in devices_data:
    device_name = device["name"]
    processed_name = process_device_name(device_name)
    devices[processed_name] = {
        "name": device_name,
        "power": device["power"],
        "consumption": device["consumption"]
    }



#http://www.procelinfo.com.br/main.asp?View=%7BE6BC2A5F-E787-48AF-B485-439862B17000%7D

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
