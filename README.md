# Fin Ease

**Fin Ease** is a modern personal finance management web application that helps users efficiently track their income, expenses, and savings. With an intuitive dashboard and visual analytics, Fin Ease makes it easy to stay on top of your financial goals. Users can add, update, and delete transactions while viewing real-time financial insights categorized by income and expenses.

---

## Features

- **User Authentication** – Secure login and registration system
- **Add Transactions** – Record your income and expenses
- **Dashboard Overview** – Visualize your financial data with charts and summaries
- **Transaction Management** – Update or delete transactions seamlessly
- **Category Insights** – Breakdown of spending categories for better analysis
- **Responsive UI** – Works smoothly on desktop and mobile

---

## Technologies Used

**Frontend:**

- React.js
- Tailwind CSS
- Recharts (for charts and analytics)

**Backend:**

- Node.js
- Express.js
- MongoDB

**Other Tools:**

- Firebase Authentication
- React Router
- Toastify & SweetAlert2 (for UI interactions)

---

## Dependencies

### **Frontend Dependencies**

```json
"dependencies": {
      "@tailwindcss/vite": "^4.1.17",
      "firebase": "^12.5.0",
      "react": "^19.1.1",
      "react-dom": "^19.1.1",
      "react-icons": "^5.5.0",
      "react-router": "^7.9.5",
      "react-spinners": "^0.17.0",
      "react-toastify": "^11.0.5",
      "recharts": "^3.4.1",
      "sweetalert2": "^11.26.3",
      "tailwindcss": "^4.1.17"
    },
    "devDependencies": {
      "@eslint/js": "^9.36.0",
      "@types/react": "^19.1.16",
      "@types/react-dom": "^19.1.9",
      "@vitejs/plugin-react": "^5.0.4",
      "daisyui": "^5.4.7",
      "eslint": "^9.36.0",
      "eslint-plugin-react-hooks": "^5.2.0",
      "eslint-plugin-react-refresh": "^0.4.22",
      "globals": "^16.4.0",
      "vite": "^7.1.7"
    }
```

### **Backend Dependencies**

```json
"dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.1.0",
    "firebase-admin": "^13.6.0",
    "mongodb": "^7.0.0",
    "nodemon": "^3.1.10"
  }
```

## Links

- **Live Website:**  
  https://fin-ease-spa-web.netlify.app/

- **Backend Server Repository:**  
  https://github.com/lijanahmmed/Fin-Ease-Server

---

## Clone the Repository

Use the following command to clone the project:

```bash
git clone https://github.com/lijanahmmed/Fin-Ease-Client.git

cd Fin-Ease-Client
```

### Install Dependencies

```bash
cd Fin-Ease-Client
npm install

```

### Start Frontend

```bash
npm run dev
```