# E-COMMERCE APPLICATION BACKEND API

*COMPANY* : CODTECH IT SOLUTIONS

*NAME* : ROHAN KUMAR GUPTA

*INTERN ID* : CT4MKNM

*DOMAIN* : BACKEND WEB DEVELOPMENT

*DURATION* : 4 WEEKS

*MENTOR* : NEELA SANTOSH

## DESCRIPTION OF TASK

The E-Commerce Application Backend API is designed to support a scalable and efficient online shopping platform. It provides essential features such as user authentication, product management, cart and order management, secure payments, and seamless API performance. The backend integrates **MongoDB** for database storage, **Cloudinary** for media storage, **Google OAuth** for authentication, **Razorpay** for transactions, **Redis** for caching API responses, and an **email client** for user notifications and order updates.

### Project Overview

The project is built using **Node.js** and **Express.js** to provide a RESTful API for frontend applications. The backend handles user authentication, product catalog management, order processing, and payment integration securely and efficiently.

### Technologies Used

1. **Node.js & Express.js:** Framework for building API endpoints.
2. **MongoDB & Mongoose:** NoSQL database for storing products, users, and order details.
3. **Cloudinary:** Stores product images and user profile pictures.
4. **Google OAuth:** Allows users to sign in securely using their Google accounts.
5. **Email Client (Nodemailer):** Sends order confirmations and notifications.
6. **Razorpay:** Handles secure online transactions.
7. **Redis:** Enhances API performance by caching frequently accessed data.

### Features

1. **User Authentication:**
   - Supports registration and login via email/password.
   - Google OAuth integration for easy login.
   - JWT-based authentication for secure API calls.

2. **Product Management:**
   - CRUD operations for products.
   - Cloudinary integration for storing product images.

3. **Cart and Orders:**
   - Users can add/remove products from the cart.
   - Orders are processed and stored in MongoDB.
   - Email confirmation is sent for successful orders.

4. **Payment Processing:**
   - Razorpay integration for secure payments.
   - Stores transaction details for tracking.

5. **Optimized Performance with Redis:**
   - Caches API responses to enhance performance and reduce database queries.

6. **Email Notifications:**
   - Users receive emails for order updates and verification.
   - Admins receive notifications for new orders.

### Working of the System

1. Users register/login using email/password or Google OAuth Client.
2. Authenticated users can browse products, add them to the cart, and proceed to checkout.
3. Upon checkout, the order is stored in MongoDB and payment is processed via Razorpay.
4. Cloudinary is used to store product images and user profile pictures.
5. Redis caches frequently requested API responses to optimize speed.
6. Email notifications are sent for verification, order confirmation, and updates.

### How to Use

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```
2. Set up a `.env` file with MongoDB, Cloudinary, Google OAuth, Razorpay, Redis, and Mailtrap credentials.

3. Start the API server:
   ```bash
   npm run dev
   ```
4. Access API documentation at `http://127.0.0.1:8000/docs`.

5. Example request to register a new user:
   ```bash
   curl -X POST "http://127.0.0.1:8000/users/register" -H "Content-Type: application/json" -d '{"email":"user@example.com", "password":"securepassword"}'
   ```

### Example API Response

```json
{
  "message": "Registration successful! Please check your email for verification.",
  "success": true
}
```

### Conclusion

This E-Commerce API provides a robust and scalable backend for managing online shopping applications. It ensures high performance, secure transactions, and a smooth user experience by integrating MongoDB, Cloudinary, Google OAuth client, Razorpay, Redis, and an email client. Future enhancements could include AI-driven recommendations, a loyalty program, and advanced analytics.

# OUTPUT

Upon running the API and making requests, the system will:
- Authenticate users via email/password or Google OAuth.
- Manage products and orders efficiently.
- Process secure payments via Razorpay.
- Optimize API performance using Redis.
- Send email notifications for transactions and updates.

![Image](https://github.com/user-attachments/assets/054d2741-ef7a-4d53-8242-9bc932a82a32)

