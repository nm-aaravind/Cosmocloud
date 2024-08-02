# Employee Management CRUD Application
This project is a simple CRUD application developed using ReactJS. The application allows users to manage a list of employees, including viewing employee details, adding new employees, and deleting existing employees. The backend APIs are powered by Cosmocloud.

## Video of the app
[Video of the app](https://www.google.com)

## Prerequisites
### Install Node.js
Refer to https://nodejs.org/en/ to install nodejs

## Setting up the app locally
1. Clone this project
2. Install all the npm packages. Go into the project folder and type the following command to install all npm packages
    ```javascript
    npm install
    ```
3. Set up the .env file. 
   ```javascript
    VITE_ENV_ID="YOUR-COSMOCLOUD-ENVIRONMENT-ID"
    VITE_PROJECT_ID="YOUR-COSMOCLOUD-PROJECT-ID"
    VITE_API_BASE_URL="YOUR-COSMOCLOUD-BASE-ENDPOINT"
    ```
    Refer [Cosmocloud Docs](https://docs.cosmocloud.io/getting-started) to set up backend API
4. In order to run the application, type the following command
   ```javascript
   npm run dev
   ```
   The application will start on localhost:5173