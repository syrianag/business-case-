# Beyond The Code
Welcome to "Beyond The Code," a modern web application designed to help individuals, particularly those without traditional college degrees, find opportunities in the tech industry. It features a job search platform and an integrated AI assistant to help with career-related questions.

## ✨ Features

- **Interactive 3D Job Map**: Visualize job opportunities across Pennsylvania on a 3D map.
- **Advanced Job Search**: Filter jobs by career path, role, and title.
- **Certification Hub**: Browse, enroll, and track progress on professional certifications.
- **AI-Powered Parsing**: Add custom-earned certifications using natural language, powered by AI.
- **Mentor Matching**: Connect with industry professionals for mentorship.
- **Modern UI**: A clean and responsive user interface built with Tailwind CSS.
- **Client-Side Routing**: Seamless navigation between pages using React Router.
- **Mentor Matching**: Connect with industry professionals for mentorship in soft skills, technical guidance, and networking.

## 🚀 Tech Stack

- **Frontend**: [React](https://reactjs.org/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **AI Integration**: [OpenAI API](https://openai.com/docs)

---

## Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or newer recommended)
- `npm` or your preferred package manager

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/beyond-the-code.git
    cd beyond-the-code
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add your OpenAI API key. The `VITE_` prefix is required by Vite to expose the variable to the client-side code.

The `main.js` script is a simple way to test your API key from your terminal without running the full React application.

1.  Ensure your `.env` file exists.
2.  Add your OpenAI API key **without** the `VITE_` prefix for this script to use. You can have both variables in the same file.

    ```env
    # For the Node.js test script (server-side)
    OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    
    # For the React Frontend (client-side)
    VITE_OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    ```
    *Note: The project also references a Node.js test script (`main.js`) which would require a separate `OPENAI_API_KEY` without the prefix. If you use it, add it to the same `.env` file.*

## 📜 Available Scripts

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
=======
