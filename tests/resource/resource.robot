*** Settings ***
Library    SeleniumLibrary
Library    String


*** Variables ***

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



### Auxiliar Keywords
Wait and Click Element
    [Arguments]    ${button}
    Wait Until Page Contains Element    ${button}
    Click Element    ${button}
