
# 📚 Book List Manager (React)

A simple React application that allows users to manage a list of books.
Users can add, view, and delete books while interacting with a local API.

The application demonstrates modern React practices, including component architecture, async data fetching, loading states, error handling, and cross-component communication.

--- 

## 🚀 Features

- Fetch and display books from an API
- Add new books through a modal form
- Delete books from the list
- Toggle visibility of the book list (Show / Hide)
- Loading indicator while fetching data
- Error handling for API requests
- Dynamic success message when a book is added or deleted
- Responsive UI with CSS modules
- Automatic UI updates using React state

...

## 🛠 Technologies Used

- React
- JavaScript (ES6+)
- CSS Modules
- Fetch API
- JSON Server (local API)
...

## 📂 Project Structure

```
src
├── component
│   ├── Book-list-manager
│   ├── eventlist
│   ├── modalBox
│   ├── modal-details
│   ├── handle-show
│   └── title
│
├── App.jsx
└── main.jsx

```
...

## ⚙️ Installation

Clone the repository:

git clone

🔗 
```
https://github.com/your-username/book-list-manager.git

```

---

Navigate into the project:

cd book-list-manager

Install dependencies:

npm install

Running the Project

---

### Start the JSON server (local API):

```bash

npx json-server --watch db.json --port 3000

```

Start the React application:

```bash
npm run dev
```
...

API endpoint used by the app:

```
http://localhost:3000/books

```

## Key React Concepts Demonstrated

This project demonstrates several important React concepts:

State Management

Using useState to manage UI state.

Side Effects

Using useEffect to fetch API data.

Async / Await

Handling asynchronous API requests cleanly.

Error Handling

Using try / catch for API operations.

Conditional Rendering

Displaying loading indicators, messages, and data conditionally.

Component Communication

Using:

- `forwardRef`
- `useImperativeHandle`

to trigger UI updates across components.

Example Flow

Application loads.

Books are fetched from the API.

Loading spinner appears during the request.

Users can:

Add a book via modal form

Delete books from the list

After adding a book:

A success message appears

The message resets automatically after a few seconds.

...

### UI Behavior

Loading spinner during API fetch

Empty list message when no books exist

Success notification after adding a book

Responsive layout for smaller screens

...

### Future Improvements

Possible improvements for the project:

Edit book functionality

Persistent notifications system

Form validation

Backend integration (Node / Express)

Global state management (Context API or Redux)

... 

### Author

Developed as a React learning project to practice component architecture, asynchronous operations, and UI state management.

...

### License

This project is open-source and available under the MIT License.

...

### 📸 Screenshots

![Book List Manager Screenshot](image/book-list.jpg)







;; ===============================

;; # Hi 👋 I'm Sam Anderson

;; Frontend Developer based in the UK 🇬🇧

;; I am a self-taught software developer with a Master's degree in Artificial Intelligence and Robotics.  
;; I enjoy building modern web applications using React, Next.js and TypeScript.

;; My focus is creating **clean, responsive and user-friendly interfaces**.

;; ---

;; ## 🚀 Tech Stack

;; ### Frontend
;; HTML • CSS • JavaScript • TypeScript  
;; React • Next.js • Tailwind CSS

;; ### Backend
;; Python • Node.js

;; ### Database
;; SQL Server

;; ### Machine Learning / AI
;; PyTorch • Scikit-learn

;; ### Tools
;; Git • GitHub

;; ---

;; ## 📌 Featured Projects

;; ### 📚 Online Book Store (React)
;; React • TypeScript • Tailwind CSS  
;; 🔗 Live Demo: LINK  
;; 🔗 Code: https://github.com/your-repo

;; ### 📚 Online Book Store (Next.js)
;; Next.js • TypeScript • Tailwind CSS  
;; 🔗 Live Demo: LINK  
;; 🔗 Code: https://github.com/your-repo

;; ### 🌦 Weather App
;; JavaScript • Weather API  
;; 🔗 Code: https://github.com/your-repo

;; ### Book List

;; ### 📖 Book Management System
;; JavaScript • SQL Server  
;; 🔗 Code: https://github.com/your-repo

;; ---

;; ## 🎯 Career Goal:

;; I am currently looking for a **Frontend Developer position** where I can contribute to building modern web applications and continue improving my development skills.

;; ---

;; ## 📫 Contact

;; 📧 Email: sam-a168@yahoo.com  
;; 💻 GitHub: https://github.com/sam-a168  
;; 🔗 LinkedIn: (LinkedIn address)

;; ---

;; # test
;; evaluate

