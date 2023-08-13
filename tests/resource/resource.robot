*** Settings ***
Library    SeleniumLibrary
Library    String

*** Variables *** 
${local_host}     localhost:3000
${tf_username}    //*[@id="username"]
${tf_password}    //*[@id="password"]
${tf_email}       //*[@id="email"]

${bt_home}         //*[@id="root"]//*[contains(text(), 'Bulbdat')]
${ph_generic}      //*[contains(text(), 'generic')]
${bt_generic}      //button[contains(text(), 'generic')]

*** Keywords ***
Open Site Domain
    [Arguments]    ${site_domain}    ${browser}
    IF  '${browser}'=='chrome'  
        ${webdriver}=      Set Variable  "${EXECDIR}/venv/bin/chromedriver"
        ${options}=        Evaluate  sys.modules['selenium.webdriver'].ChromeOptions()  sys, selenium.webdriver
        Call Method  ${options}  add_argument  --disable-dev-shm-usage
        Create Webdriver  Chrome  executable_path=${webdriver}  chrome_options=${options}
    END
  
    IF  '${browser}'=='firefox'    
        ${webdriver}=      Set Variable  "${EXECDIR}/venv/bin/geckodriver"  
        ${options}=        Evaluate  sys.modules['selenium.webdriver'].FirefoxOptions()  sys, selenium.webdriver
        Call Method  ${options}  add_argument  --disable-dev-shm-usage
        Create Webdriver  Firefox  executable_path=${webdriver}  options=${options}
    END
    Maximize Browser Window
    Go To       ${site_domain}


Check login page
    ${bt_login}     Replace String     ${ph_generic}     generic     Entrar
    Wait and Click Element    ${bt_login} 
    Wait Until Page Contains Element   ${tf_username}
    Log To Console    tf username is visible
    Wait Until Page Contains Element   ${tf_password} 
    Log To Console    tf password is visible

Check signUp page
    Wait and Click Element     ${bt_home}
    ${bt_signup}     Replace String     ${ph_generic}     generic     Cadastrar
    Wait and Click Element     ${bt_signup}  
    Wait Until Page Contains Element   ${tf_username}
    Log To Console    tf username is visible
    Wait Until Page Contains Element   ${tf_email}
    Log To Console    tf email is visible
    Wait Until Page Contains Element   ${tf_password} 
    Log To Console    tf password is visible

### Auxiliar Keywords
Wait and Click Element
    [Arguments]    ${button}
    Wait Until Page Contains Element    ${button}
    Click Element    ${button}
