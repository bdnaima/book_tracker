# 📚 Book Tracker

A personal book management application built with **React**. This app allows users to create their own digital library, search for books using the Open Library API, save books, and track their reading progress.

The project was created as part of the JavaScript & React course at **Technigo** and focuses on building a multi-page React application using React Router, state management, API integration, and browser storage.

## ✨ Features

- 📖 View your personal book library
- ➕ Add new books manually
- 🔍 Search for books using the Open Library API
- 💾 Store books using localStorage so your library remains after refreshing
- ✅ Mark books as "Read" or "Want to Read"
- 🗑️ Remove books from your library
- 🔔 Display notifications when books are added successfully
- 📱 Responsive design for different screen sizes

## 🛠️ Built With

- React
- React Router
- JavaScript (ES6+)
- CSS
- LocalStorage API
- Open Library API
- React Toastify
- React Icons
- Vite

## 📂 Pages

### Dashboard (`/`)

Displays all saved books in the user's personal library.

Users can:

- View book details
- Check reading status
- Change status between "Want to Read" and "Read"
- Delete books

### Add Book (`/add-book`)

Allows users to manually add books by entering:

- Title
- Author
- Description

New books are automatically saved to the library.

### Search (`/search`)

Allows users to search for books through the Open Library API.

Users can:

- Search by title or keyword
- View available book results
- Save books directly to their library

## 💾 Data Storage

The application uses **localStorage** to save the user's books.

When the app loads, it retrieves previously saved books from the browser. Any changes to the library are automatically stored so users don't lose their data after refreshing the page.

## 🌐 API

Book search functionality is powered by the Open Library API:

https://openlibrary.org/developers/api

The app fetches book information including:

- Titles
- Authors
- Cover images

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/bdnaima/book_tracker.git
```

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The application will run locally in your browser.

## 🔮 Future Improvements

Possible improvements for future versions:

- User authentication
- Cloud database storage
- Ability to edit book details
- Filter books by reading status
- Sorting options
- Individual book detail pages

## 👩‍💻 Author

Created by **Naima**

GitHub:
https://github.com/bdnaima
