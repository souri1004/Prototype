# 🚀 LeMiCi – Frontend Prototype

This is a **modern, responsive frontend** for LeMiCi – a conceptual SaaS or data analytics platform. The project includes a **fixed navigation bar**, a clean **hero (landing) section**, and a fully responsive **pricing page** built using **React** and **Tailwind CSS**.

## 📌 Features

### ✅ Navigation Bar
- Fixed at the top
- Brand/logo placeholder on the left
- Links to "Home" and "Pricing"
- Smooth navigation using **React Router**

### ✅ Hero Section (Home)
- Bold headline and subheadline
- Primary CTA button ("Get Started")
- Placeholder image for illustration
- Clean and professional SaaS-style layout

### ✅ Pricing Page
- Three distinct pricing plans:
  - **Starter**
  - **Professional**
  - **Enterprise**
- Each card includes:
  - Plan name and price
  - 3–4 features
  - CTA button ("Subscribe")
- Visual distinction using shadows, spacing, and borders
- Fully responsive for all screen sizes

---

## 🛠 Tech Stack

| Tool / Library     | Purpose                         |
|--------------------|----------------------------------|
| React              | Component-based UI framework     |
| React Router DOM   | Client-side routing              |
| Tailwind CSS       | Utility-first responsive styling |
| Vite               | Development bundler              |

---

## 📁 Project Structure

Prototype/
│
├── public/
│ └── index.html
│
├── src/
│ ├── assets/ # Placeholder images / logo
│ ├── components/ # Navbar, PricingCard, etc.
│ ├── pages/ # Home.jsx, Pricing.jsx
│ ├── App.jsx # Router setup
│ └── main.jsx # Entry point
│
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md


---

## 📦 Getting Started

### Prerequisites
- Node.js ≥ 16
- npm ≥ 8

### Setup Instructions

```bash
# Clone the repository
git clone https://github.com/souri1004/Prototype.git
cd Prototype

# Install dependencies
npm install

# Run the development server
npm run dev

Open http://localhost:5173 in your browser.
```

🌐 Live Demo https://prototype-iota-amber.vercel.app/


📈 Future Enhancements
Mobile menu for smaller screens


📄 License
This project is for educational/demonstration purposes.

🙌 Acknowledgements
Design inspiration provided by reference images in the assignment brief.
