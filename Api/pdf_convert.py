import os
import json
import tabula as tb

## Adicionar comentários depois

def transform_data(data):
    if isinstance(data["Unnamed: 0"], str) and isinstance(data["Unnamed: 1"], str) and isinstance(data["Unnamed: 2"], str) and isinstance(data["Unnamed: 6"], str):
        if data["Unnamed: 0"].strip() != "" and data["Unnamed: 1"].strip() != "" and data["Unnamed: 2"].strip() != "" and data["Unnamed: 6"].strip() != "":
            try:
                consumption_value = float(data["Unnamed: 6"].split()[0].replace(',', '.'))
                manufacturer_value = data["Unnamed: 0"]
                brand_value = data["Unnamed: 1"]
                model_value = data["Unnamed: 2"].split()[0] 
                new_data = {
                    "manufacturer": manufacturer_value,
                    "brand": brand_value,
                    "model": model_value,
                    "consumption": consumption_value
                }
                return new_data
            except ValueError:
                pass
    return None




def convert_pdf_to_json(pdf_file, output_file):
    dfs = tb.read_pdf(pdf_file, pages='1')
    transformed_data = []

    for df in dfs:
        data_dict = df.to_dict(orient='records')
        for data in data_dict:
            if "Unnamed: 0" in data and "Unnamed: 6" in data:
                transformed_entry = transform_data(data)
                if transformed_entry is not None:
                    transformed_data.append(transformed_entry)

    with open(output_file, 'w', encoding='utf-8') as json_file:
        json.dump(transformed_data, json_file, indent=4, ensure_ascii=False)

    print(f"Converted PDF to JSON: {output_file}")

output_dir = 'database/json_file/'

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

pdf_file = 'database/<pdf_aqui>'
output_file = os.path.join(output_dir, 'output.json')

convert_pdf_to_json(pdf_file, output_file)
