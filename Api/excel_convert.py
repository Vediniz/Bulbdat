import pandas as pd
import json
import os

df = pd.read_excel('database/pdf_file/televisores/televisores.ods')
output_dir = 'database/json_file/'

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

output_file = os.path.join(output_dir, 'televisores.json')

columns_to_remove = ['CHASSIS', 'MÉDIA (W)', 'EM POLEGADAS', 'VISUAL(cm) - NBR 5258', 'FREQUÊNCIA(Hz)', 'kWh/mês', 'CLASSE']
existing_columns = df.columns.tolist()
columns_to_drop = [col for col in columns_to_remove if col in existing_columns]
df = df.drop(columns=columns_to_drop)


columns_to_rename = { 
        "FABRICANTE": "manufacturer",
        "MARCA": "brand",
        "TENSÃO (V)": "volts",
        "MODELO": "model",
        "POTÊNCIA(W)": "consumption",
}

df = df.rename(columns=columns_to_rename)
data = df.to_dict(orient='records')

with open(output_file, 'w') as json_file:
    json.dump(data, json_file, indent=4, ensure_ascii=False)

print(f"Converted PDF to JSON: {output_file}")
