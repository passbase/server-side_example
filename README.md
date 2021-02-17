![alt text](https://passbase.com/assets-v2/images/meta.jpg "Passbase Header")

# Official Passbase React Web Demo App

This App shows an example integration of the Passbase Node.js server-side library. Before your try to run the App please sign up on our [developer platform](https://app.passbase.com/signup) and use **your own secret API key**, which you can find in the [API settings](https://app.passbase.com/settings/api) section. 

Please follow our integration guide in our [official developer documentation](https://docs.passbase.com/server/api) to install all dependencies first in a correct way.

## Requirements

Ensure that you have an up to date version of node installed. This means, that you will also need to have `npm` installed. If you haven't, please follow [this guide here](https://www.pluralsight.com/guides/getting-started-with-nodejs) first to install everything correctly.

## Install & Run

In the project directory you can run:

1. Run `npm install` inside the project directory in terminal in order to install the Passbase Package
2. Go into the file `index.js` and exchange `SECRET_API_KEY` with your own secret API key in line 16
3. Run `nodemon index.js` in terminal
4. Navigate to the [official developer dashboard](https://app.passbase.com/) and add webbhook endpoint (you can use a CLI tool such as `ngrok` to forward the requests to your local development server)
5. Within the [developer dashboard](https://app.passbase.com/) approve or decline an existing verification

This runs the app in the development mode. Open your terminal to see the verification information logged in the console.
