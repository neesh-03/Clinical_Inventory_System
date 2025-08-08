This project is a full-stack clinic inventory management application with authentication, machine learning-based predictions, and clean modular code. It has a backend built in Python (Flask) with a REST API and a frontend built using React + TypeScript + Tailwind CSS. The goal is to manage clinic items, track orders, monitor low-stock alerts, and use ML to predict future demand.

The folder structure is split into backend/ and frontend/.

Backend contains .env, requirements.txt, run.py for server startup, seed_data.py to load dummy data, and an app/ directory with __init__.py, config.py, models.py, and routes/ for API endpoints.

Routes include alerts.py for low-stock notifications, items.py for inventory operations, orders.py for order handling, auth.py for login/registration, and ml.py for prediction requests.

The backend uses Flask, SQLAlchemy, and an ML library (scikit-learn) for demand prediction.

The frontend contains .env, public/index.html, package.json, tailwind.config.js, tsconfig.json, vite.config.ts, and src/ with App.tsx, main.tsx, index.css, and a lib/ folder holding api.ts for API calls and auth.ts for token handling.

Components include a navbar.tsx and pages like Login.tsx, Register.tsx, Predictions.tsx, and other views for managing items, orders, and alerts.

Setup Backend:

Install Python 3.10+ and pip.

Navigate to backend/ and run:

nginx
Copy
Edit
pip install -r requirements.txt
Create a .env file with database URI, secret key, and any ML model paths.

Run python seed_data.py to populate sample data.

Start the backend with:

arduino
Copy
Edit
python run.py
Setup Frontend:

Install Node.js 18+ and npm or yarn.

Navigate to frontend/ and run:

nginx
Copy
Edit
npm install
Create a .env file with VITE_API_URL pointing to your backend API URL.

Start the development server with:

arduino
Copy
Edit
npm run dev
Usage Flow:

Open the frontend in your browser.

Register or log in using the provided forms.

Once logged in, you can manage inventory items, place and track orders, view alerts for low stock, and access the predictions page to see ML-based demand forecasts.

Authentication is token-based, with the frontend storing tokens locally and sending them with API requests.

ML predictions are powered by a simple regression model trained on dummy historical data, exposed via /ml/predict.

Tech Stack:

Backend: Python, Flask, SQLAlchemy, Flask-JWT-Extended, scikit-learn.

Frontend: React, TypeScript, Tailwind CSS, Axios, Vite.

Database: SQLite by default (configurable to PostgreSQL/MySQL).

Deployment:

For production, build the frontend with npm run build and serve via Nginx or any static hosting.

Deploy backend with Gunicorn + Nginx or use a cloud platform like Render/Heroku, ensuring environment variables are set.

Note:

All modules are integrated, so authentication controls access to routes, ML endpoints respond with predictions, and data updates in the frontend reflect backend changes.

The code is clean, modular, and ready for public GitHub hosting.
