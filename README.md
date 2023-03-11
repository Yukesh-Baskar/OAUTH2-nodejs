## Table of contents

- [scope](#SCOPE)
- [features](#Features)
- [environment_variable](#env)
- [packages](#packages)

# SCOPE

To login with OAUTH2 - facebook

# Features

Unlike other normal registeration and login, this repo contains the OAuth2 support which means you can login with the help of other major sites like google for example.

# Credentials

You can clone this repo but you need some credentials before doing that, you need API credentials which have been provided by the google for developers.
steps for creating credential- 1. Type google credentials. 2. Get into the API sections and make a oauth credentials from it. 3. Hit the create credentials button. 4. Select the OAuth client from the dropdown. 5. Fill those fields and give your redirect URI.

# env

PORT = YOUR_PORT_NUMBER
DB_CONNECT_URL = YOUR_DB_CONNECTING_URL
GOOGLE_CLIENT_ID = YOUR_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET = YOUR_GOOGLE_CLIENT_SECRET
SESSION_SECRET = YOUR_SESSION_SECRET

# packages

"axios": "^1.3.4"
"body-parser": "^1.20.2"
"cookie-parser": "^1.4.6"
"cors": "^2.8.5"
"dotenv": "^16.0.3"
"ejs": "^3.1.8"
"express": "^4.18.2"
"express-session": "^1.17.3"
"fs": "^0.0.1-security"
"mongoose": "^7.0.1"
"nodemon": "^2.0.21"
"passport": "^0.6.0" 
"passport-google-oauth2": "^0.2.0" // package for oauth.
