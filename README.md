# Grocery Delivery Application

## Overview
The **Grocery Delivery Application** is a full-stack web application that allows users to browse grocery items, add them to their cart, and place orders for delivery. This project demonstrates an end-to-end e-commerce solution with authentication, real-time order tracking, and a user-friendly interface.

## Features
- User authentication (sign-up, login, logout)
- Browse grocery categories and products
- Add items to the cart and place orders
- Order tracking and management
- Admin panel for managing products and orders
- Responsive design for a seamless user experience

## Tech Stack
### Frontend:
- React.js
- CSS 

### Backend:
- Node.js with Express.js
- MongoDB
- JWT for authentication

## Installation
### Prerequisites:
Ensure you have the following installed:
- Node.js
- MongoDB (if using a local database)

### Steps to Run the Project:
1. Clone the repository:
   ```sh
   git clone https://github.com/shrutim250/Grocery-del-application.git
   cd Grocery-del-application
   ```
2. Install dependencies for the backend:
   ```sh
   cd backend
   npm install
   ```
3. Install dependencies for the frontend:
   ```sh
   cd ../frontend
   npm install
   ```
4. Configure environment variables:
   - Create a `.env` file in the `backend` folder and add necessary environment variables (e.g., database URI, JWT secret, etc.)

5. Start the backend server:
   ```sh
   npm start
   ```
6. Start the frontend:
   ```sh
   npm start
   ```
7. Open the application in your browser at `http://localhost:3000`

## API Endpoints (Backend)
| Method | Endpoint            | Description                      |
|--------|---------------------|----------------------------------|
| GET    | `/api/products`     | Get all grocery products        |
| POST   | `/api/auth/signup`  | User registration               |
| POST   | `/api/auth/login`   | User login                      |
| POST   | `/api/orders`       | Place a new order               |
| GET    | `/api/orders/:id`   | Get order details               |

## Contributing
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Push to the branch and create a pull request.

## License
This project is licensed under the MIT License.



To open the frontend folder use npm run dev
To open the backend server use npm run server
To open the admin server use npm run dev
