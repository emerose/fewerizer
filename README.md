# inbox fewerizer

## what is it

it's a little google apps function that runs once a day and checks how many emails are in your inbox, how many are unread, etc, and then stores that number.  it has a webapp that serves graphs of your inbox stats, like this:

![example graphs](/example.png)

you can also throw `?json=true` on the end of the URL and get a json blob or your stats, like this:

```json
{
  "2023-07-12": {
    "total": 94,
    "unread": 37,
    "priorityUnread": 17
  },
  "2023-07-14": {
    "total": 14,
    "unread": 1,
    "priorityUnread": 1
  },
  "current": {
    "total": 13,
    "unread": 0,
    "priorityUnread": 0
  },
  "2023-07-13": {
    "total": 82,
    "unread": 27,
    "priorityUnread": 12
  },
  "2023-07-11": {
    "total": 90,
    "unread": 33,
    "priorityUnread": 14
  }
}
```

there's also a 

## who cares

well, mostly me I guess. but I find it motivating: inbox zero feels out of reach, but I can at least aim for inbox fewer

## what do I do with it

hook it up to a graphing library and put the graph somewhere you'll see it.  [Google Charts](https://developers.google.com/chart/interactive/docs) makes this really easy

## help me install it

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
