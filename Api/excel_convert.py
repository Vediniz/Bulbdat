import pandas as pd
import json
import os

df = pd.read_excel('database/pdf_file/refrigeradores/Refrigeradores-e-assemelhados_2023-01-31.ods')
output_dir = 'database/json_file/'

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

output_file = os.path.join(output_dir, 'Refrigeradores-e-assemelhados.json')

columns_to_remove = ['CÒDIGO DE BARRAS', 'TIPO', 'VIDA (horas)', 'Unnamed: 0', "Unnamed: 5", "Unnamed: 6","CLASSE DE EFICIÊNCIA ENERGÉTICA", "EFICIÊNCIA ENERGÉTICA(lm/W )", "FLUXO LUMINOSO  (lm )"]
existing_columns = df.columns.tolist()
columns_to_drop = [col for col in columns_to_remove if col in existing_columns]
df = df.drop(columns=columns_to_drop)


columns_to_rename = { 
        "FORNECEDOR": "manufacturer",
        "MARCA": "brand",
        "TENSÃO": "volts",
        "MODELO": "model",
        "POTÊNCIA DECLARADA   ( W )": "consumption",
        "CONSUMO DE ENERGIA (kWh/mês) - 127 V" : "consumption-127",
        "CONSUMO DE ENERGIA (kWh/mês) - 220 V" : "consumption-220"
}

df = df.rename(columns=columns_to_rename)
data = df.to_dict(orient='records')

with open(output_file, 'w') as json_file:
    json.dump(data, json_file, indent=4, ensure_ascii=False)

print(f"Converted PDF to JSON: {output_file}")
