# inbox fewerizer

1. install dependencies
    * install [node](https://nodejs.org/en/download/)
    * install [clasp](https://github.com/google/clasp)
        ```
        npm install -g @google/clasp
        ```
    * Enable Google Apps Script API: https://script.google.com/home/usersettings
2. deploy to google
    *  log in -- this creates a `~/.clasprc.json` file with credentials
        ```
        clasp login
        ```
    *  create a new google apps script -- this creates a `.clasp.json` file in the current directory
        ```
        clasp create --type webapp
        ```
    * push the code to google
        ```
        clasp push
        ```
    *Note* `clasp push` doesn't work too well if you have the script open in a browser. See [here](https://issuetracker.google.com/issues/123311608). Close the tab before you try.
3. test and grant permissions
    * *Note*: There is theoretically a way to do this from the CLI using `clasp login`, but I couldn't figure out where to get a `creds.json` file
    * open the script editor:
        ```
        clasp open
        ```
    * use the toolbar buttons to run the `storeInboxData()` function
    * an oauth dialog should pop up, requesting permission. allow access
    * click the `Project Settings` gear icon on the left and verify that there is now an entry under `Script Properties` toward the bottom of the page
5. install trigger
    * click the `Triggers` clock icon on the left and install a trigger that runs `storeInboxData` from Head as a time-driven trigger on a day timer. Mine runs between midnight and 1am.
6. deploy
    ```
    clasp deploy
    ```
    *Note* If you don't want the URL to change, you will need to specify a `deploymentId`
7. make the numbers go down
    * Stop mucking about and read your email
