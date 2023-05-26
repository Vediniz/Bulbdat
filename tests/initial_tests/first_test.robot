*** Settings ***
Resource    ../resource/resource.robot

*** Variables *** 
${local_host}    localhost:3000

*** Test Cases ***
Check home page
    Open Browser    ${local_host}     ${browser}
    Wait Until Pages Contain Element    //*[@class="introduction]

