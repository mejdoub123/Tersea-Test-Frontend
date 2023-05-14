# Mini CRM Application

This is a technical test project designed to evaluate my problem-solving skills and code structuring abilities. The test revolves around a mini CRM (Customer Relationship Management) application that connects a company with its employees. The application allows an administrator to create a company and invite employees to join via email. Once an employee joins, they can access and modify their own data, as well as view information about their company and colleagues. The application consists of two protected areas:

1. Administrator Area
2. Employee Area

## Features

- User authentication and authorization for administrators and employees
- Company creation by the administrator
- Invitation of employees to join a company via email
- Employee access to personal data and the ability to modify it
- Viewing company and colleague data

## Technologies Used

- Vue.js 3: A progressive JavaScript framework for building user interfaces
- Composition API: A new approach to organizing and reusing logic in Vue.js applications
- Pinia: A state management system for Vue.js applications
- Axios: A popular HTTP client for making API requests

## Project Structure

The project follows a modular structure to separate concerns and improve maintainability. Here's an overview of the project structure:

- `/src`
  - `/assets`: Stores static assets like images, fonts, or CSS files.
  - `/components`: Reusable Vue components used throughout the application.
  - `/layouts`: Layout components for different application views.
  - `/router`: Application routing using Vue Router.
  - `/stores`: Pinia store modules for managing application state.
  - `/views`: Main views of the application.

## Getting Started

Follow these steps to set up and run the project locally:

1. Clone the repository: `git clone https://github.com/mejdoub123/Tersea-Test-Frontend.git`
2. Navigate to the project directory: `cd project-directory`
3. Install dependencies: `npm install`
4. Configure the API endpoint in the `.env` file `VITE_BACKEND_URL`
5. Start the development server: `npm run serve`

## Conclusion

This mini CRM application demonstrates the use of Vue.js 3 Composition API, Pinia, and Axios to create a functional and secure system for managing companies and employees. It serves as a foundation for further enhancements and customization based on specific requirements.

Feel free to explore the codebase and adapt it to your needs. Enjoy!
