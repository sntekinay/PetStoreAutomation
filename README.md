
# 🧪 PetStore API Test Automation Project
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
![Ekran Alıntısı1](https://github.com/user-attachments/assets/933b668d-cab6-4d05-bea1-cf57fb530e70)

Detailed test body and assertions:
![Ekran Alıntısı2](https://github.com/user-attachments/assets/2608b772-5ef2-4bd4-a79c-b20bafc13c12)


## 📦 Notes

- `node_modules/`, `screenshots/`, `videos/` are excluded via `.gitignore`.
---
