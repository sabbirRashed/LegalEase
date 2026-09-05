# ⚖️ LegalEase — Legal Service Marketplace

LegalEase is a full-stack legal service platform that connects clients with qualified lawyers. Users can explore legal professionals, view their profiles and services, hire lawyers, manage requests, make payments, and leave comments.

Lawyers can manage their legal profiles, services, and hiring requests, while administrators can manage users, transactions, and platform analytics.

---

## 🚀 Live Project

🔗 **Live Website:** https://legalease-chi-one.vercel.app

🔗 **Client Repository:** https://github.com/sabbirRashed/LegalEase.git

---

## 📌 Overview

LegalEase is designed to make finding and hiring legal professionals easier and more accessible.

The platform provides separate experiences for:

- 👤 Clients
- ⚖️ Lawyers
- 🛡️ Administrators

Users can browse lawyers without logging in, while authenticated users can access features based on their assigned role.

---

## ✨ Key Features

### 👤 Client Features

- Create an account with email/password
- Google authentication
- Select user role during registration
- Secure login/logout
- Browse available lawyers
- Search and filter lawyers
- View detailed lawyer profiles
- View lawyer specialization and consultation fees
- Send hiring requests
- View hiring history
- Make payments through Stripe
- View transaction/payment status
- Leave comments/reviews
- Update personal profile
- Protected client dashboard

---

### ⚖️ Lawyer Features

- Lawyer account registration
- Create and manage legal profile
- Add legal specialization
- Add professional biography
- Set hourly and consultation rates
- Set availability status
- Manage hiring requests
- View hiring history
- Access lawyer dashboard
- Protected lawyer routes

---

### 🛡️ Admin Features

- Admin dashboard
- View platform analytics
- Manage users
- Update user roles
- View all transactions
- Monitor platform activity
- Protected admin routes

---

## 🔐 Authentication & Authorization

LegalEase uses **Better Auth** for authentication and session management.

Supported authentication methods:

- Email & Password
- Google OAuth

The application implements role-based access control for:

```text
User
  ↓
Lawyer
  ↓
Admin