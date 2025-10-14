import { useState } from 'react';
import PageLayout from '../components/PageLayout';

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

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting Profile Data:', {
      personalInfo,
      skills: skills.join(', '),
      resume: resumeFile ? resumeFile.name : 'No file chosen',
    });
    alert('Profile has been saved successfully!');
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills(prevSkills => [...new Set([...prevSkills, newSkill.trim()])]);
      setNewSkill('');
    } else {
      alert('Cannot add an empty skill');
    }
  };

  return (
    <PageLayout 
      title="Your Profile" 
      subtitle="Manage your personal information and showcase your skills"
    >
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8 bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 p-8 rounded-xl">
          
          {/* Personal Information Section */}
          <div className="border-b border-purple-500/20 pb-8">
            <h3 className="text-lg font-semibold leading-6 text-white">Personal Information</h3>
            <p className="mt-1 text-sm text-gray-400">Use a permanent address where you can receive mail.</p>
            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  value={personalInfo.name} 
                  onChange={handleInfoChange} 
                  className="mt-1 block w-full rounded-md bg-slate-800/50 border border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 sm:text-sm px-3 py-2" 
                />
              </div>
              <div>
                <label htmlFor="headline" className="block text-sm font-medium text-gray-300">Headline</label>
                <input 
                  type="text" 
                  name="headline" 
                  id="headline" 
                  value={personalInfo.headline} 
                  onChange={handleInfoChange} 
                  className="mt-1 block w-full rounded-md bg-slate-700/50 border border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 sm:text-sm px-3 py-2" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email address</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={personalInfo.email} 
                  onChange={handleInfoChange} 
                  className="mt-1 block w-full rounded-md bg-slate-700/50 border border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 sm:text-sm px-3 py-2" 
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone</label>
                <input 
                  type="tel" 
                  name="phone" 
                  id="phone" 
                  value={personalInfo.phone} 
                  onChange={handleInfoChange} 
                  className="mt-1 block w-full rounded-md bg-slate-700/50 border border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 sm:text-sm px-3 py-2" 
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="location" className="block text-sm font-medium text-gray-300">Location</label>
                <input 
                  type="text" 
                  name="location" 
                  id="location" 
                  value={personalInfo.location} 
                  onChange={handleInfoChange} 
                  className="mt-1 block w-full rounded-md bg-slate-700/50 border border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 sm:text-sm px-3 py-2" 
                />
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="border-b border-purple-500/20 pb-8">
            <h3 className="text-lg font-semibold leading-6 text-white">Skills</h3>
            <p className="mt-1 text-sm text-gray-400">Add or remove your professional skills.</p>
            <div className="mt-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-purple-500/20 text-purple-300 text-sm font-medium px-4 py-1 rounded-full inline-flex items-center border border-purple-500/30">
                    {skill}
                    <button
                      type="button"
                      onClick={() => setSkills(prevSkills => prevSkills.filter((_, i) => i !== index))}
                      className="ml-2 text-purple-400 hover:text-purple-300 focus:outline-none"
                    >
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  id="new-skill" 
                  name="new-skill" 
                  value={newSkill} 
                  onChange={(e) => setNewSkill(e.target.value)} 
                  className="mt-1 block w-full rounded-md bg-slate-700/50 border border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400 sm:text-sm px-3 py-2" 
                  placeholder="Add a skill" 
                />
                <button 
                  type="button" 
                  onClick={handleAddSkill} 
                  className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 font-semibold"
                >
                  Add
                </button>
              </div>
            </div>
          </div>

          {/* Resume Upload Section */}
          <div>
            <h3 className="text-lg font-semibold leading-6 text-white">Resume</h3>
            <div className="mt-6 flex items-center gap-x-4">
              <label htmlFor="resume-upload" className="cursor-pointer rounded-md bg-slate-700/50 border border-purple-500/20 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-slate-600/50 transition-all">
                <span>{resumeFile ? 'Change file' : 'Upload a file'}</span>
                <input id="resume-upload" name="resume-upload" type="file" className="sr-only" onChange={handleFileChange} accept=".pdf,.doc,.docx" />
              </label>
              {resumeFile && <p className="text-sm text-gray-300">{resumeFile.name}</p>}
              {!resumeFile && <p className="text-sm text-gray-400">PDF, DOC, DOCX up to 10MB.</p>}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-6">
            <button 
              type="submit" 
              className="px-6 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 font-semibold transition-all"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
}