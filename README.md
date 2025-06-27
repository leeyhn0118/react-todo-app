# React Todo App

A clean and interactive **Todo List** built with **React** and styled using **Tailwind CSS**.  
This project is frontend-only and includes drag-and-drop reordering, inline editing, and persistent storage using localStorage.

## ✨ Features

- Add new todos with the **Add** button
- Edit todos inline by clicking **Edit → Save**
- Delete individual todos with the **X** button
- Mark todos as completed using **Checkbox** (adds strikethrough line)
- Drag & drop to reorder items (via `react-beautiful-dnd`)
- Clear all todos with the **Delete All** button
- Data persists via **localStorage**

## 🛠 Tech Stack

- **React 18**
- **Tailwind CSS**
- **react-beautiful-dnd**
- **LocalStorage**
- Functional components & React Hooks (`useState`, `useCallback`)

## 📁 Project Structure

react-todo-app/
├── public/
│ └── index.html
├── src/
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ ├── index.css
│ ├── components/
│ │ ├── Form.js
│ │ ├── List.js
│ │ └── Lists.js
│ ├── App.test.js
│ ├── reportWebVitals.js
│ └── setupTests.js
├── tailwind.config.js
├── package.json
├── package-lock.json
└── .gitignore

## 🚀 Getting Started

Clone the repository and run the app locally:

```bash
git clone https://github.com/leeyhn0118/react-todo-app.git
cd react-todo-app
npm install
npm start
```
