
# 🧪 PetStore API Test Automation Project

This project contains end-to-end API tests for the [Swagger Petstore](https://petstore.swagger.io/) API using [Cypress](https://www.cypress.io/).  
All scenarios were implemented based on the **User endpoints**.

> 💡 Author: Senanur Tekinay

---

## ✅ Project Structure

```
PetStoreAutomation/
├── cypress/
│   └── e2e/
│       └── user_api_test.cy.js
├── cypress.config.js
├── package.json
└── .gitignore
```

---

## 🧪 Test Scenarios

This project automates 6 main user flows of the Petstore API:

| Method | Endpoint                                | Description                    |
|--------|------------------------------------------|--------------------------------|
| POST   | `/user`                                  | Create a new user             |
| GET    | `/user/login`                            | Login with username/password  |
| GET    | `/user/{username}`                       | Fetch user info               |
| PUT    | `/user/{username}`                       | Update user info              |
| GET    | `/user/logout`                           | Log out                       |
| DELETE | `/user/{username}`                       | Delete the user               |

---

## 🚀 How to Run the Tests

### 1. Install dependencies

```bash
npm install
```

### 2. Run tests with Cypress GUI

```bash
npx cypress open
```

### 3. Or run headlessly (CLI)

```bash
npx cypress run
```

---

## ✅ Sample Result Screenshots

Test execution in Cypress:

![Test Summary](Ekran%20Al%C4%B1nt%C4%B1s%C4%B11.PNG)

Detailed test body and assertions:

![Test Body](Ekran%20Al%C4%B1nt%C4%B1s%C4%B12.PNG)

---

## 📦 Notes

- `node_modules/`, `screenshots/`, `videos/` are excluded via `.gitignore`.
- This project is ready for extension with Allure or Mochawesome reporting.

---
