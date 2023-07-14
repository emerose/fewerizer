// called once per day via trigger
function storeInboxData() {
  const props = PropertiesService.getScriptProperties();

  const blob = JSON.stringify(getCurrentStats());
  const today = Utilities.formatDate(new Date(), 'Etc/GMT', 'yyyy-MM-dd');

  props.setProperty(today, blob);
  props.setProperty('current', blob);
}

function getCurrentStats() {
  const total = GmailApp.getInboxThreads().length;
  const unread = GmailApp.getInboxUnreadCount();
  const priorityUnread = GmailApp.getPriorityInboxUnreadCount();

  return {'total': total, 'unread': unread, 'priorityUnread': priorityUnread};
}

function getHistoricalData(props: GoogleAppsScript.Properties.Properties) {
  const ret = {};
  for (const key in props.getProperties()) {
    const data = props.getProperty(key);
    if (data) { 
      ret[key] = JSON.parse(data);
    }
  }

  return ret;
}

function doGet() {
  const props = PropertiesService.getScriptProperties();

  const data = getHistoricalData(props);
  const current = getCurrentStats();
  data['current'] = current;

  return ContentService.createTextOutput(JSON.stringify(data));
}
