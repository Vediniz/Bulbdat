*** Settings ***
Resource    ../resource/resource.robot

*** Variables *** 

*** Test Cases ***
Open Browser and go to google Page
    Open Browser    ${local_host}     ${browser}
    Sleep    10
    