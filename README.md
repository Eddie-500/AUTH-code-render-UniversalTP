# 🔐 Auth Code Generator

A simple authentication code generator that displays a new, random code every time someone accesses the `/auth` route. Perfect for use cases like one-time codes, internal tools, or lightweight validation screens.

---

## 💡 Features

- Generates a **6-character alphanumeric** authentication code.
- Code is regenerated **every time** the `/auth` route is accessed.
- Clean and modern **HTML/CSS UI** for easy viewing.
- Can be deployed on platforms like **Render** or **Railway** in seconds.

---

## ⚙️ Tech Stack

- `Node.js`  
- `Express.js`  
- `crypto` (for secure random code generation)  
- Vanilla HTML + CSS (served from backend)

---

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/auth-code-render.git
cd auth-code-render
npm install
(Optional) Create a .env file to define a custom port:

ini
Copy
Edit
PORT=3000
Run the server:

bash
Copy
Edit
npm start
🌐 How It Works
Visit:

bash
Copy
Edit
http://localhost:3000/auth
You will see a new randomly generated authentication code like:

css
Copy
Edit
🚪 Auth Code: A9F1B2
This code is regenerated on every visit or refresh.

🖼️ Example UI
The /auth page displays the code in a styled box, like this:

css
Copy
Edit
┌──────────────────────────────┐
│  Auth Code:   A9F1B2         │
└──────────────────────────────┘
📤 Deployment
This app can be deployed easily to Render or similar Node.js platforms:

Build command: npm install

Start command: npm start

Port: 3000 or your environment variable

📄 License
This project is licensed under the MIT License.

👨‍💻 Author
Eddie – GitHub
