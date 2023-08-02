import os
import json
import tabula as tb

# Aqui eu vendi minha alma, não aguento mais, olha esse monstro, tem necessidade disso? Tinha que ser pdf? Não podia ser excel? eu aceitava até txt ... agora pdf? 
def transform_data(data):
    if isinstance(data["Unnamed: 0"], str) and isinstance(data["Unnamed: 1"], str) and isinstance(data["Unnamed: 2"], str) and isinstance(data["Unnamed: 4"], str) and isinstance(data["Unnamed: 6"], str):
        if data["Unnamed: 0"].strip() != "" and data["Unnamed: 1"].strip() != "" and data["Unnamed: 2"].strip() != "" and data["Unnamed: 4"].strip() != "" and data["Unnamed: 6"].strip() != "":
            try:
                consumption_value = float(data["Unnamed: 6"].split()[0].replace(',', '.'))
                manufacturer_value = data["Unnamed: 0"]
                brand_value = data["Unnamed: 1"]
                model_values = data["Unnamed: 2"].split()
                model_value = data["Unnamed: 2"] if model_values[0] != "0" else model_values[1:]
                volts = data["Unnamed: 4"]
                new_data = {
                    "manufacturer": manufacturer_value,
                    "brand": brand_value,
                    "model": model_value,
                    "consumption": consumption_value,
                    "volts": volts
                }
                return new_data
            except ValueError:
                pass
    return None


def convert_pdf_to_json(pdf_file, output_file):
    dfs = tb.read_pdf(pdf_file, pages='2-5')
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

#PDF Fonte: https://www.gov.br/inmetro/pt-br/assuntos/avaliacao-da-conformidade/programa-brasileiro-de-etiquetagem/tabelas-de-eficiencia-energetica
pdf_file = 'database/pdf_file/lavadouras_de_roupas_automatica_abertura_superior.pdf'
output_file = os.path.join(output_dir, 'lavadouras_de_roupas_automatica_abertura_superior.json')

convert_pdf_to_json(pdf_file, output_file)
