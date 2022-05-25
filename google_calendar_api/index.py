from apiclient.discovery import build
from google_auth_oauthlib.flow import InstalledAppflow

scopes = ["https://www.googleapis.com/auth/calendar"]
flow = InstalledAppflow.from_client_secrets_file("client_secret.json", scopes = scopes)
credentials = flow.run_console()

print(credentials)