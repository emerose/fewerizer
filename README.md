# inbox fewerizer

1. install dependencies
  * install [node](https://nodejs.org/en/download/)
  * install [clasp](https://github.com/google/clasp)

        npm install -g @google/clasp

  * Enable Google Apps Script API: https://script.google.com/home/usersettings

2. deploy to google
  *  log in -- this creates a `~/.clasprc.json` file with credentials

        clasp login

  * create a new google apps script -- this creates a `.clasp.json` file in the current directory

        clasp create --type webapp
    
3. grant permissions

4. test

5. install trigger

6. enjoy
