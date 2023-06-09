# **Testes automatizados: Bulbdat**

### _Requisitos:_
- Instalar o python: [Python](https://www.python.org/)

- Ambiente virtual: Para criar um ambiente virtual vamos usar o comando no terminal, dentro da pasta de testes.
    
        python -m venv venv

    Para ativar o ambiente virtual, considerando que ainda esteja no diretorio de testes

        Linux: source venv/bin/activate

        Windows: venv/Scripts/activate.bat
    
    

    Para utilizar os testes de front-end é preciso que os drivers de navegador estejam mapeados nas variaveis do sistema, no nosso caso, vamos utilizar o ambiente virtual e mapear nossos webdrivers nele. Primeiro vamos adicionar o webdrivermanager. 

        pip install webdrivermanager

    E em seguida, adicione o webdriver para o seu navegador.

    <br>

    **Chrome:** 
        
        webdrivermanager chrome --linkpath venv/bin/


    **Firefox:**

        webdrivermanager firefox --linkpath venv/bin/

    Note que mediante o sistema operacional termo "bin" será substituido por "Scripts"

<br>
<br>

- Os demais requisitos podem ser instalados utilizando o arquivo txt disponibilizado no diretório. 
         
        pip install -r requirements.txt

    Importante: O comando deve ser executado com o ambiente virtual ativado!!

<br>

## Como usar a automação: 
- Para utilizar a automação podemos utilizar o seguinte comando

        robot -d ./results ./initial_tests

    - a tag _**-d**_ vai armazenar resultados de testes dentro da pasta "results", utilize-a para organização de logs.  

