import os
import json
import pandas as pd

#Fonte dos dados: https://www.gov.br/inmetro/pt-br/assuntos/avaliacao-da-conformidade/programa-brasileiro-de-etiquetagem/tabelas-de-eficiencia-energetica

class ExcelConverter():
    def __init__(self, excel_path):
        self.data = pd.read_excel(excel_path)

    def remove_columns(self, *args):
        for col in args:
            if col in self.data.columns:
                self.data = self.data.drop(columns=col)
            else:
                print(f'Column "{col}" not found in DataFrame')

    def rename_columns(self, **kwargs):
        for old_name, new_name in kwargs.items():
            if old_name in self.data.columns:
                self.data = self.data.rename(columns={old_name: new_name})
            else:
                print(f'Column "{old_name}" not found in DataFrame')

    def to_json(self, output_dir, output_file):
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
        data = self.data.to_dict(orient='records')
        output_path = os.path.join(output_dir, output_file)

        with open(output_path, 'w') as json_file:
            json.dump(data, json_file, indent=4, ensure_ascii=False)

        print(f'Converted Excel to JSON: {output_path}')

def convert_excel_to_json(excel_file, output_file, remove_cols, rename_cols):
    converter = ExcelConverter(excel_file)
    converter.remove_columns(*remove_cols)
    converter.rename_columns(**rename_cols)
    converter.to_json('database/json_file', output_file)

remove_cols = ['Unnamed: 0', 'CÒDIGO DE BARRAS', 'TIPO', 'FLUXO LUMINOSO  ( lm )', 'VIDA (horas)', 'EFICIÊNCIA ENERGÉTICA(lm/W )', 'CLASSE DE EFICIÊNCIA ENERGÉTICA']
rename_cols = {'FORNECEDOR': 'manufacturer', 'MARCA': 'brand', 'TENSÃO': 'volts', 'MODELO': 'model', 'POTÊNCIA DECLARADA ( W )': 'consumption'}

convert_excel_to_json('database/pdf_file/lampada/lampada_incandecente.xlsx', 'lampada_incandecente.json', remove_cols, rename_cols)
convert_excel_to_json('database/pdf_file/lampada/lampada_decorativa.ods', 'lampada_decorativa.json', remove_cols, rename_cols)

## Templatezinho pra copia e cola
# remove_cols = []
# rename_cols = {}

# convert_excel_to_json('database/pdf_file/', '.json', remove_cols, rename_cols)
# convert_excel_to_json('database/pdf_file/', '.json', remove_cols, rename_cols)