*** Settings ***
Library    SeleniumLibrary
Resource    ../resource/resource.robot

*** Variables *** 
${local_host}    localhost:3000

*** Test Cases ***
Check home page
    Open Site Domain   ${local_host}     ${browser}
    Wait Until Page Contains    Bulbdat

### Para ser refatorado

Check login page
    Wait and Click Element    //*[contains(text(), 'Login')]
    Wait Until Page Contains Element   //*[@id="username"]
    Log To Console    tf username is visible
    Wait Until Page Contains Element  //*[@id="password"]
    Log To Console    tf password is visible

Check signUp page
    Wait and Click Element     //*[@id="root"]//*[contains(text(), 'Bulbdat')]
    Wait and Click Element     //*[contains(text(), 'Sign up')]
    Wait Until Page Contains Element   //*[@id="username"]
    Log To Console    tf username is visible
    Wait Until Page Contains Element  //*[@id="email"]
    Log To Console    tf email is visible
    Wait Until Page Contains Element  //*[@id="password"]
    Log To Console    tf password is visible
    