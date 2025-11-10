# Beyond The Code
Welcome to "Beyond The Code," a modern web application designed to help individuals, particularly those without traditional college degrees, find opportunities in the tech industry. It features a job search platform and an integrated AI assistant to help with career-related questions.

## Features

- **Job Listings**: Browse and search for entry-level and internship positions.
- **Profile Building**: Profile + Resume building or uploads
- **AI Chat Assistant**: Get career advice and answers to your questions using an integrated OpenAI-powered chat.
- **Modern UI**: A clean and responsive user interface built with Tailwind CSS.
- **Client-Side Routing**: Seamless navigation between pages using React Router.
- **Mentor Matching**: Connect with industry professionals for mentorship in soft skills, technical guidance networking.
- **Vite Test**: For testing; making sure program is running smoothly everywhere
## Tech Stack

- **Frontend**: [React](https://reactjs.org/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **AI Integration**: [OpenAI API](https://openai.com/docs)
- **Linting & Formatting**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

## Future Improvements 

- **Map**: Make map more visibly appeling with icons that are benefitual 
- **Real-Time Jobs**: Everytime the page refreshes it will show real jobs that are hiring within 30 day time frame
- **Connect With Real Mentors**: Along with AI Mentor having real mentors that can help in that field 

---

## Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or newer recommended)
- `npm` or your preferred package manager

### Installation & Setup

This project contains two main parts: the React frontend and a Node.js script for testing the API.

#### 1. Setting up the React Frontend

To run the main web application, you need to set up a client-safe environment variable.

1.  **Create a `.env` file** in the root of the project.
2.  **Add your OpenAI API key**, prefixed with `VITE_`. Vite requires this prefix to expose the variable to the browser.

    ```env
    # For the React Frontend (client-side)
    VITE_OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    ```

#### 2. Setting up the Node.js Test Script (`main.js`)

The `main.js` script is a simple way to test your API key from your terminal without running the full React application.

1.  Ensure your `.env` file exists.
2.  Add your OpenAI API key **without** the `VITE_` prefix for this script to use. You can have both variables in the same file.

    ```env
    # For the Node.js test script (server-side)
    OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    
    # For the React Frontend (client-side)
    VITE_OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    ```

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Runs the app in development mode. Open http://localhost:5173 (or the port specified in your terminal) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run preview`

Serves the production build locally to preview it before deployment.

### `npm run lint`

Lints the project files for code quality and style issues.

### `npm run format`

Formats all source files using Prettier.

### `node main.js`

Runs the standalone Node.js script to test the OpenAI API connection. It will use the `OPENAI_API_KEY` from your `.env` file.
