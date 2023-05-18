*** Settings ***
Resource    ../resource/resource.robot

*** Test Cases ***
Open Chrome and go to google Page
    Open Chrome Browser    https://www.google.com
    Sleep    10