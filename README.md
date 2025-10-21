# Beyond The Code
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> cb641bbe46de0a9575d2212fd8ee6a7777c5df19
Welcome to "Beyond The Code," a modern web application designed to help individuals, particularly those without traditional college degrees, find opportunities in the tech industry. It features a job search platform and an integrated AI assistant to help with career-related questions.

## ✨ Features

<<<<<<< HEAD
- **Interactive 3D Job Map**: Visualize job opportunities across Pennsylvania on a 3D map.
- **Advanced Job Search**: Filter jobs by career path, role, and title.
- **Certification Hub**: Browse, enroll, and track progress on professional certifications.
- **AI-Powered Parsing**: Add custom-earned certifications using natural language, powered by AI.
- **Mentor Matching**: Connect with industry professionals for mentorship.
=======
- **Job Listings**: Browse and search for entry-level and internship positions.
- **AI Chat Assistant**: Get career advice and answers to your questions using an integrated OpenAI-powered chat.
>>>>>>> cb641bbe46de0a9575d2212fd8ee6a7777c5df19
- **Modern UI**: A clean and responsive user interface built with Tailwind CSS.
- **Client-Side Routing**: Seamless navigation between pages using React Router.
- **Mentor Matching**: Connect with industry professionals for mentorship in soft skills, technical guidance, and networking.

## 🚀 Tech Stack

- **Frontend**: [React](https://reactjs.org/), [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing**: [React Router](https://reactrouter.com/)
- **AI Integration**: [OpenAI API](https://openai.com/docs)
<<<<<<< HEAD

---

## Getting Started

Follow these instructions to get a local copy of the project up and running.
=======
- **Linting & Formatting**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)

---

## ⚙️ Getting Started

Follow these instructions to get a local copy up and running.
>>>>>>> cb641bbe46de0a9575d2212fd8ee6a7777c5df19

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or newer recommended)
- `npm` or your preferred package manager

<<<<<<< HEAD
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
=======
### ⚙️ Installation & Setup

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
>>>>>>> cb641bbe46de0a9575d2212fd8ee6a7777c5df19

The `main.js` script is a simple way to test your API key from your terminal without running the full React application.

1.  Ensure your `.env` file exists.
2.  Add your OpenAI API key **without** the `VITE_` prefix for this script to use. You can have both variables in the same file.

    ```env
    # For the Node.js test script (server-side)
    OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    
    # For the React Frontend (client-side)
    VITE_OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    ```
<<<<<<< HEAD
    *Note: The project also references a Node.js test script (`main.js`) which would require a separate `OPENAI_API_KEY` without the prefix. If you use it, add it to the same `.env` file.*
=======
>>>>>>> cb641bbe46de0a9575d2212fd8ee6a7777c5df19

## 📜 Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`
<<<<<<< HEAD
Runs the app in development mode. Open http://localhost:5173 (or the port specified in your terminal) to view it in the browser.

### `npm run build`
Builds the app for production to the `dist` folder.

### `npm run preview`
=======

Runs the app in development mode. Open http://localhost:5173 (or the port specified in your terminal) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run preview`

>>>>>>> cb641bbe46de0a9575d2212fd8ee6a7777c5df19
Serves the production build locally to preview it before deployment.

### `npm run lint`

Lints the project files for code quality and style issues.

### `npm run format`

Formats all source files using Prettier.

### `node main.js`

Runs the standalone Node.js script to test the OpenAI API connection. It will use the `OPENAI_API_KEY` from your `.env` file.
=======
<<<<<<< HEAD
=======
# package.json
{
  "name": "beyond-the-code",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview --port 4173",
    "lint": "eslint . --ext .js,.jsx",
    "format": "prettier --write \"src/**/*.{js,jsx,json,css,md}\"",
    "check:types": "tsc --noEmit"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.0",
    "prop-types": "^15.8.1"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^5.0.0",
  "tailwindcss": "^3.4.3",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^9.0.0",
    "eslint-plugin-react": "^7.33.0",
    "prettier": "^2.8.0"
  }
}

# JobsPage.jsx
// using state management and modal for job search 
// Modal is a Ul element for displaying content

import { useMemo, useState } from 'react';
import JobCard from '../components/JobCard';
import Modal from '../components/Modal';
import { sampleJobs } from '../data/jobs';

export default function JobsPage() {
  const [query, setQuery] = useState('');
  const [selectedCareer, setSelectedCareer] = useState('All');
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedJobTitle, setSelectedJobTitle] = useState('All Jobs');

  const careers = useMemo(() => ['All', ...Array.from(new Set(sampleJobs.map(j => j.career)))], []);
  const roles = useMemo(() => ['All', ...Array.from(new Set(sampleJobs.map(j => j.role)))], []);
  const jobTitles = useMemo(() => {
    const uniq = Array.from(new Set(sampleJobs.map(j => j.title)));
    return ['All Jobs', ...uniq.slice(0, 5)];
  }, []);

  const jobsByCareer = useMemo(() => {
    const map = {};
    for (const j of sampleJobs) {
      if (!map[j.career]) map[j.career] = [];
      map[j.career].push(j);
    }
    return map;
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalQuery, setModalQuery] = useState('');

  const filtered = useMemo(() => {
    return sampleJobs.filter(job => {
      if (selectedCareer !== 'All' && job.career !== selectedCareer) return false;
      if (selectedRole !== 'All' && job.role !== selectedRole) return false;
      if (selectedJobTitle !== 'All Jobs' && job.title !== selectedJobTitle) return false;
      if (query && !(`${job.title} ${job.company} ${job.role} ${job.career}`).toLowerCase().includes(query.toLowerCase())) return false;
      return true;
    });
  }, [query, selectedCareer, selectedRole, selectedJobTitle]);

  function handleApply(job) {
    // code pattern for demo 
    alert(`Apply clicked for ${job.title} at ${job.company}`);
  }

  return (
    <>
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Jobs & Internships</h2>
        <p className="text-gray-600 mb-6">Search and filter internships and entry-level roles here.</p>

        {/* Careers chips */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {careers.map(c => (
            <button
              key={c}
              onClick={() => setSelectedCareer(c)}
              className={`px-3 py-1 rounded-full border ${selectedCareer === c ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}>
              {c}
            </button>
          ))}
        </div>

          {/* Job select + Role filter */}
          <div className="flex gap-4 mb-8">
            <select value={selectedJobTitle} onChange={e => {
                if (e.target.value === 'Other jobs...') setModalOpen(true);
                else setSelectedJobTitle(e.target.value);
              }} className="flex-1 border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500">
              {jobTitles.map(t => <option key={t} value={t}>{t}</option>)}
              <option>Other jobs...</option> 
            </select>
            <select value={selectedRole} onChange={e => setSelectedRole(e.target.value)} className="border border-gray-300 rounded px-4 py-2 focus:ring-2 focus:ring-blue-500">
              {roles.map(r => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>

        {/* Job List */}
        <div className="grid gap-6">
          {filtered.length === 0 && <p className="text-gray-600">No jobs found.</p>}
          {filtered.map(job => (
            <JobCard key={job.id} job={job} onApply={handleApply} />
          ))}
        </div>
      </div>
    </div>
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <div>
            <h3 className="text-xl font-semibold mb-3">Search jobs</h3>
            <input value={modalQuery} onChange={e => setModalQuery(e.target.value)} placeholder="Search all jobs..." className="w-full border px-3 py-2 rounded mb-3" />

            <div className="space-y-2 max-h-64 overflow-auto">
              {sampleJobs.filter(j => (`${j.title} ${j.company} ${j.role} ${j.career}`).toLowerCase().includes(modalQuery.toLowerCase())).map(j => (
                <button key={j.id} onClick={() => { setSelectedJobTitle(j.title); setModalOpen(false); setModalQuery(''); }} className="w-full text-left p-2 rounded hover:bg-gray-100">
                  <div className="font-medium">{j.title}</div>
                  <div className="text-sm text-gray-500">{j.company} — {j.career} • {j.role}</div>
                </button>
              ))}
              {sampleJobs.filter(j => (`${j.title} ${j.company} ${j.role} ${j.career}`).toLowerCase().includes(modalQuery.toLowerCase())).length === 0 && (
                <p className="text-gray-600">No jobs match.</p>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

# Modal.jsx
export default function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800">Close</button>
        </div>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
}

# JobCard.jsx
export default function JobCard({ job, onApply }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <p className="text-sm text-gray-600">{job.company} — {job.location}</p>
          <p className="mt-2 text-sm text-gray-500">{job.career} • {job.role}</p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <button onClick={() => onApply(job)} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Apply</button>
        </div>
      </div>
    </div>
  );
}
# ProfilePage.jsx
import { useState } from 'react';
// using const to manage personal info throughout the profile page
export default function ProfilePage() {
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    phone: '123-456-7890',
    location: 'San Francisco, CA',
    headline: 'Aspiring Software Engineer',
  });
  const [skills, setSkills] = useState([
    'React', 'JavaScript', 'Node.js', 'HTML', 'CSS', 'Tailwind CSS'
  ]);
  const [newSkill, setNewSkill] = useState('');
  const [resumeFile, setResumeFile] = useState(null);

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({ ...prev, [name]: value }));
  };
// Where you can add or change your resume file 
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend server.
    console.log('Submitting Profile Data:', {
      personalInfo,
      skills: skills.join(', '),
      resume: resumeFile ? resumeFile.name : 'No file chosen',
    });
    alert('Profile has been saved successfully!');
  };
  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills(prevSkills => [...new Set([...prevSkills, newSkill.trim()])]); // Adding new skill to the skills array
      setNewSkill(''); // Clear the input after adding the skill
    } else {
      alert('Cannot add an empty skill');
    }
  };
// layout and structure + editing functionality for users to do manually 
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Your Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow">
          {/* Personal Information Section */}
          <div className="border-b border-gray-200 pb-8">
            <h3 className="text-lg font-semibold leading-6 text-gray-900">Personal Information</h3>
            <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full name</label>
                <input type="text" name="name" id="name" value={personalInfo.name} onChange={handleInfoChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="headline" className="block text-sm font-medium text-gray-700">Headline</label>
                <input type="text" name="headline" id="headline" value={personalInfo.headline} onChange={handleInfoChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <input type="email" name="email" id="email" value={personalInfo.email} onChange={handleInfoChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" name="phone" id="phone" value={personalInfo.phone} onChange={handleInfoChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                <input type="text" name="location" id="location" value={personalInfo.location} onChange={handleInfoChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="border-b border-gray-200 pb-8">
            <h3 className="text-lg font-semibold leading-6 text-gray-900">Skills</h3>
            <p className="mt-1 text-sm text-gray-600">Add or remove your professional skills.</p>
            <div className="mt-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1 rounded-full inline-flex items-center">
                    {skill}
                    <button
                      type="button"
                      onClick={() => setSkills(prevSkills => prevSkills.filter((_, i) => i !== index))}
                      className="ml-2 text-blue-500 hover:text-blue-700 focus:outline-none"
                    >
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input type="text" id="new-skill" name="new-skill" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" placeholder="Add a skill" />
                <button type="button" onClick={handleAddSkill} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Add</button>
              </div>
            </div>
          </div>

          {/* Resume Upload Section */}
          <div>
            <h3 className="text-lg font-semibold leading-6 text-gray-900">Resume</h3>
            <div className="mt-6 flex items-center gap-x-4">
              <label htmlFor="resume-upload" className="cursor-pointer rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                <span>{resumeFile ? 'Change file' : 'Upload a file'}</span>
                <input id="resume-upload" name="resume-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
              </label>
              {resumeFile && <p className="text-sm text-gray-600">{resumeFile.name}</p>}
              {!resumeFile && <p className="text-sm text-gray-500">PDF, DOC, DOCX up to 10MB.</p>}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-6">
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
# App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'; // import css file
import Nav from './components/Nav'; // nav component
import HomePage from './components/Home'; // home component
import ProfilePage from './pages/ProfilePage'; // profile component
import JobsPage from './pages/JobsPage'; // jobs component

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search" element={<JobsPage />} />
        </Routes>
      </main>
    </>
  );
}
# Nav.jsx
import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Nav = () => {
  const navLinkClasses = ({ isActive }) =>
    `hover:text-blue-200 transition-colors ${isActive ? 'text-blue-200' : ''}`;

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg" role="navigation" aria-label="Main">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-blue-200 transition-colors">
          Beyond The Code
        </Link>

        <ul className="flex gap-4 list-none m-0 p-0">
          <li><NavLink to="/" className={navLinkClasses}>Home</NavLink></li>
          <li><NavLink to="/profile" className={navLinkClasses}>Profile</NavLink></li>
          <li><NavLink to="/search" className={navLinkClasses}>Jobs</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
# Home.jsx
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 text-center max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Find Your First Tech Job Without a Degree
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect with internships and entry-level opportunities that value skills over credentials.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card
            title="Build Your Profile"
            description="Showcase your skills, projects, and motivation."
            buttonLabel="Create Profile"
            buttonColor="blue"
            onClick={() => navigate('/profile')}
          />
          <Card
            title="Browse Opportunities"
            description="Explore internships and entry-level positions."
            buttonLabel="View Jobs"
            buttonColor="green"
            onClick={() => navigate('/search')}
          />
        </div>
      </div>
    </div>
  );
}

function Card({ title, description, buttonLabel, buttonColor, onClick }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className={`text-2xl font-semibold mb-4 text-${buttonColor}-600`}>
        {title}
      </h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <button
        type="button"
        onClick={onClick}
        className={`bg-${buttonColor}-600 text-white px-6 py-3 rounded-lg hover:bg-${buttonColor}-700`}
      >
        {buttonLabel}
      </button>
    </div>
  );
}
# main.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
); 
# index.html
<!doctype html> 
<html lang="en">
  <head>
    <meta charset="UTF-8" /> 
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script> 
  </body>
</html>

# jobs.js

export const sampleJobs = [
  { id: 1, title: 'Frontend Intern', company: 'TechCorp', career: 'Engineering', role: 'Frontend', location: 'Remote' },
  { id: 2, title: 'Backend Intern', company: 'DataWorks', career: 'Engineering', role: 'Backend', location: 'Remote' },
  { id: 3, title: 'UI/UX Designer (Entry)', company: 'Designly', career: 'Design', role: 'Designer', location: 'Hybrid' },
  { id: 4, title: 'Product Analyst', company: 'BizOps', career: 'Product', role: 'Analyst', location: 'Onsite' },
  { id: 5, title: 'Fullstack Junior', company: 'StackPoint', career: 'Engineering', role: 'Fullstack', location: 'Remote' },
];

>>>>>>> 371fdc48e36f44eb0588663cb73bf850fb6d9841
>>>>>>> cb641bbe46de0a9575d2212fd8ee6a7777c5df19
