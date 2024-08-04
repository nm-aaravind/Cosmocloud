# Employee Management CRUD Application
This project is a simple CRUD application developed using ReactJS. The application allows users to manage a list of employees, including viewing employee details, adding new employees, and deleting existing employees. The backend APIs are powered by Cosmocloud.

## Application Design
[Link to the video of the app](https://www.google.com)

1. Employees Listing Page (Default Page)

- Users can see the list of employees in the system.
- Users can visit Employee Details page to see more information of the employee
- Users can delete an employee from the list.

2. Employee Details Page

- Users can view detailed information about a selected employee
  
3. Add Employee Page

- Users can add a new employee to the system.

## Setup and Installation
### Prerequisites
- Node.js (>= 12.x)
- Cosmocloud account

## Setting up the app locally
### Installation
1. Clone the repository
   ```javascript
   git clone https://github.com/nm-aaravind/Cosmocloud.git
   cd Cosmocloud
   ```
   
2. Install the dependencies
   
    ```javascript
    npm install
    ```
3. Configure Cosmocloud API endpoints and keys in your environment variables. Create a .env file in the root of your project and add the following:
   
   ```javascript
    VITE_ENV_ID="YOUR-COSMOCLOUD-ENVIRONMENT-ID"
    VITE_PROJECT_ID="YOUR-COSMOCLOUD-PROJECT-ID"
    VITE_API_BASE_URL="YOUR-COSMOCLOUD-BASE-ENDPOINT"
    ```

    Refer _[Cosmocloud Docs](https://docs.cosmocloud.io/getting-started)_ to set up backend APIs

### Running the application
1. Start the development server
   ```javascript
   npm run dev
   ```

   Open your browser and navigate to http://localhost:5173.
