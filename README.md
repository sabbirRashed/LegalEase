# ⚖️ LegalEase — Legal Service Marketplace

LegalEase is a full-stack legal service marketplace that connects clients with qualified lawyers. Users can explore lawyers, view their profiles and services, send hiring requests, make payments, manage their hiring history, and leave reviews.

Lawyers can manage their profiles, services, availability, and hiring requests, while administrators can manage users, transactions, and platform analytics.

---

## 🚀 Live Project

**Live Website:** https://legalease-chi-one.vercel.app

**GitHub Repository:** https://github.com/sabbirRashed/LegalEase.git

---

## ✨ Features

### 👤 Client

- Email/password & Google authentication
- Browse, search, and filter lawyers
- View detailed lawyer profiles
- View specialization and consultation fees
- Send hiring requests
- Manage hiring history
- Make payments through Stripe
- View transaction status
- Leave comments/reviews
- Manage personal profile
- Protected client dashboard

### ⚖️ Lawyer

- Create and manage professional profile
- Add specialization and biography
- Set consultation and hourly rates
- Manage availability status
- Manage hiring requests
- View hiring history
- Protected lawyer dashboard

### 🛡️ Admin

- Admin dashboard
- Platform analytics
- User management
- Update user roles
- Transaction management
- Protected admin routes

---

## 🛠️ Technologies

### Frontend

- **Next.js 16.3.3**
- **React 19.2.8**
- **Tailwind CSS 4**
- **HeroUI**
- **Framer Motion**
- **Recharts**
- **React Icons**
- **Gravity UI Icons**
- **React Hot Toast**
- **React Loader Spinner**

### Backend

- **Node.js**
- **Express.js 5**
- **MongoDB**
- **JOSE / JWT**
- **CORS**
- **dotenv**

### Authentication & Payment

- **Better Auth**
- **Google OAuth**
- **JWT**
- **Stripe**

---

## 🔐 Authentication & Security

LegalEase uses **Better Auth** for authentication and session management.

### Authentication Methods

- Email & Password
- Google OAuth

The application implements **role-based access control (RBAC)** for:

```text
User
 ├── Client
 ├── Lawyer
 └── Admin