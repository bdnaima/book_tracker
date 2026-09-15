# 📚 Book Tracker

A personal book management application built with **React** and **Supabase**. Users can create an account, search for books using the Open Library API, save books to their personal library, and track their reading progress.

The project was created as part of the **Lexicon Fullstack .NET** education program and focuses on building a modern web application with React, authentication, database integration, API integration, routing, and responsive design.

## ✨ Features

- 📖 Create and manage a personal book library
- 🔐 User registration and login
- 🔍 Search for books using the Open Library API
- 💾 Save books to a personal Supabase database
- ✅ Mark books as "Read" or "Want to Read"
- 🗑️ Remove books from the library
- ➕ Add books manually
- 🔒 Protected routes for authenticated users
- 👤 User-specific book libraries
- 🛡️ Row Level Security (RLS) to protect user data
- 🔔 Toast notifications for user actions
- 📱 Responsive design for different screen sizes

## 🛠️ Built With

- React
- React Router
- JavaScript (ES6+)
- CSS
- Supabase
- Supabase Authentication
- PostgreSQL
- Row Level Security (RLS)
- Open Library API
- React Toastify
- React Icons
- Vite
- Vercel

## 📂 Pages

### Landing Page (`/`)

The landing page introduces the Book Tracker application and allows visitors to:

- Learn about the application
- Start their personal library
- Search for books

### Authentication (`/auth`)

Users can:

- Create an account
- Log in
- Receive feedback for invalid login details
- Switch between login and sign-up

### My Library (`/library`)

Authenticated users can:

- View their saved books
- Check reading status
- Change a book between "Want to Read" and "Read"
- Delete books

Each user's library is connected to their own account.

### Add Book (`/add-book`)

Authenticated users can manually add a book by entering:

- Title
- Author
- Description

The book is saved to the user's personal library.

### Search (`/search`)

Users can search for books using the Open Library API.

Visitors can search without creating an account.

Authenticated users can also:

- View book information
- Save books directly to their personal library

If a visitor tries to save a book without being logged in, they are asked to log in first.

## 🔐 Authentication & Data Security

Authentication and database storage are handled using **Supabase**.

Users can create an account and log in before accessing their personal library and other authenticated features.

The application uses **Row Level Security (RLS)** policies to ensure that users can only access and manage books belonging to their own account.

## 💾 Data Storage

Books are stored in a **Supabase PostgreSQL database**.

Each book is associated with the authenticated user's ID. This allows every user to have their own personal library.

The application retrieves the user's books when they log in and keeps the library synchronized with the database when books are added, updated, or deleted.

## 🌐 API

Book search functionality is powered by the **Open Library API**.

The application retrieves information such as:

- Book titles
- Authors
- Cover images

Search is available to visitors without requiring an account, while saving books requires authentication.

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/bdnaima/book_tracker.git
```

### Install dependencies

```bash
npm install
```

### Configure environment variables

Create a `.env` file and add your Supabase project credentials:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

### Start the development server

```bash
npm run dev
```

The application will run locally in your browser.

## 🌐 Live Demo

The application is deployed on **Vercel**.

[Add your Vercel URL here]

## 🔮 Future Improvements

Possible future improvements include:

- ✏️ Edit existing book details
- 🔎 Filter books by reading status
- ↕️ Sort books by title or author
- 📖 Add individual book detail pages
- ⭐ Add personal book ratings or notes

## 👩‍💻 Author

Created by **Naima**

GitHub:

https://github.com/bdnaima
