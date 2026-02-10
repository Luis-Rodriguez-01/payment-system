# Payment System – Backend Technical Test

## Overview

This project implements a basic payment system exposing a RESTful API using **Node.js**, **PostgreSQL**, and **Python**, as required in the technical test.

The system allows:
- User creation
- Credit card registration (fake data only)
- Payment processing
- Payment history retrieval per user

A separate Python microservice simulates payment approval or rejection.

---

## Technologies Used

- **Node.js** (Express)
- **PostgreSQL**
- **Python** (FastAPI)
- **Sequelize ORM**
- **Axios**
- **Postman**
- **Git**

---

## Environment Setup

This project requires Node.js, Python, and PostgreSQL to be installed locally.

---

### 1. Code Editor

Recommended editor:
- **Visual Studio Code**

https://code.visualstudio.com/

---

### 2. Recommended VS Code Extensions

#### General
- ESLint — JavaScript code quality
- Prettier – Code formatter
- EditorConfig for VS Code
- DotENV — `.env` file support

#### Node.js / JavaScript
- JavaScript (ES6) code snippets
- npm Intellisense

#### Python
- Python (Microsoft)
- Pylance

#### Database
- PostgreSQL
- SQLTools

---

### 3. Node.js Installation

- **Node.js v18 or higher** (LTS recommended)

https://nodejs.org/

Verify installation:
```bash
node -v
npm -v
```

---

### 4. Python Installation

- **Python v3.10 or higher**

https://www.python.org/downloads/

Make sure to enable **Add Python to PATH** during installation.

Verify:
```bash
python --version
pip --version
```

---

### 5. PostgreSQL Installation

- **PostgreSQL v14 or higher**

https://www.postgresql.org/download/

During installation:
- Set a password for the `postgres` user
- Default port: `5432`

Verify access:
```bash
psql -U postgres
```

---

### 6. Additional Tools

- **Postman** — API testing  
  https://www.postman.com/downloads/

---

### 7. Version Control

- **Git**

https://git-scm.com/

Verify:
```bash
git --version
```

---

## Environment Variables

Create a file at:
```
backend-node/.env
```

Example:
```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=payments_db
DB_USER=postgres
DB_PASSWORD=your_password

PYTHON_PAYMENT_SERVICE_URL=http://127.0.0.1:8000
```

---

## Project Structure

```text
payment-system/
├── backend-node/
|           └── payment-service-python/
├── database/
├── postman/
└── README.md
```

---

## Database Setup

```sql
CREATE DATABASE payments_db;
```

```bash
psql -U postgres -d payments_db -f database/schema.sql
```

---

## Backend API Setup (Node.js)

```bash
cd backend-node
npm install
npm run dev
```

Health check:
```
http://localhost:3000/health
```

---

## Payment Processing Service (Python)

```bash
cd payment-service-python
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

Swagger UI:
```
http://localhost:8000/docs
```

---

## API Endpoints

- `POST /users`
- `POST /cards`
- `POST /payments`
- `GET /payments/user/{userId}`

---

## Postman Collection

Located at:
```
postman/payment-system.postman_collection.json
```

---

## Notes

- Credit card data is fake and used only for testing.
- `.env` files are not committed.
