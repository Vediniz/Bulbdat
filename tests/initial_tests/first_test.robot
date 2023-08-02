*** Settings ***
Library    SeleniumLibrary
Resource    ../resource/resource.robot


*** Test Cases ***
Check home page
    Open Site Domain   ${local_host}     ${browser}
    Wait Until Page Contains    Bulbdat

Create a user
    Check signUp page
    Input Text    ${tf_username}    test_user
    Input Text    ${tf_email}       automation@test.com
    Input Text    ${tf_password}    Bulbdat@test123
    ${bt_cadastrar}    Replace String    ${bt_generic}    generic    Cadastrar
    Wait and Click Element    ${bt_cadastrar}

Login as a user
    Check login page
    Input Text    ${tf_username}    test_user
    Input Text    ${tf_password}    Bulbdat@test123
    ${bt_entrar}    Replace String    ${bt_generic}    generic    Entrar
    Wait and Click Element    ${bt_entrar}
    Wait Until Page Contains    Controle     20s
    
Incorrect Password Login
    Check login page
    Input Text    ${tf_username}    test_user
    Input Text    ${tf_password}    123456
    ${bt_entrar}    Replace String    ${bt_generic}    generic    Entrar
    Wait and Click Element    ${bt_entrar}
    Sleep    5s
    Wait Until Page Contains Element  //*[@class="css-1crpcyg"]
