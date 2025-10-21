import { useState } from 'react';
import PageLayout from './PageLayout';
import { User, Mail, Phone, MapPin, Briefcase, CheckCircle, XCircle, Upload, X } from 'lucide-react';

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
  const [validation, setValidation] = useState({});
  const [dragActive, setDragActive] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  // Skill suggestions list
  const skillSuggestions = [
    'Python', 'TypeScript', 'Vue.js', 'Angular', 'Java', 'C++', 'SQL', 
    'MongoDB', 'Docker', 'AWS', 'Git', 'Redux', 'Next.js', 'Express.js',
    'PHP', 'Ruby', 'Swift', 'Kotlin', 'Go', 'Rust'
  ];

  // Validation functions
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^\d{3}-\d{3}-\d{4}$/;
    return re.test(phone);
  };

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({ ...prev, [name]: value }));

    // Real-time validation
    let isValid = true;
    if (name === 'email') {
      isValid = validateEmail(value);
    } else if (name === 'phone') {
      isValid = validatePhone(value);
    } else if (name === 'name' || name === 'headline' || name === 'location') {
      isValid = value.trim().length > 0;
    }
    setValidation({ ...validation, [name]: isValid });
  };

  const handleSkillInput = (value) => {
    setNewSkill(value);
    
    if (value.length > 0) {
      const filtered = skillSuggestions.filter(
        skill => skill.toLowerCase().includes(value.toLowerCase()) && !skills.includes(skill)
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleAddSkill = (skillToAdd = newSkill) => {
    const skill = skillToAdd.trim();
    if (skill !== '' && !skills.includes(skill)) {
      setSkills(prevSkills => [...prevSkills, skill]);
      setNewSkill('');
      setFilteredSuggestions([]);
    } else if (skill === '') {
      alert('Cannot add an empty skill');
    }
  };

  // Drag and drop handlers
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (validTypes.includes(file.type) && file.size <= 10 * 1024 * 1024) {
      setResumeFile(file);
    } else {
      alert('Please upload a PDF, DOC, or DOCX file under 10MB');
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

  return (
    <PageLayout 
      title="Your Profile" 
      subtitle="Manage your personal information and showcase your skills"
    >
      {/* Animated gradient background */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            25% { transform: translate(20px, -50px) scale(1.1); }
            50% { transform: translate(-20px, 20px) scale(0.9); }
            75% { transform: translate(50px, 50px) scale(1.05); }
          }
          .animate-blob {
            animation: blob 15s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-10px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .skill-tag {
            animation: slideIn 0.3s ease-out;
          }
        `}
      </style>

      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <form onSubmit={handleSubmit} className="space-y-8 bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 p-8 rounded-xl">
          
          {/* Personal Information Section */}
          <div className="border-b border-purple-500/20 pb-8">
            <h3 className="text-lg font-semibold leading-6 text-white">Personal Information</h3>
            <p className="mt-1 text-sm text-gray-400">Use a permanent address where you can receive mail.</p>
            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
              
              {/* Full Name */}
              <div className="relative">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  <User className="inline w-4 h-4 mr-2" />
                  Full name
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={personalInfo.name} 
                    onChange={handleInfoChange} 
                    className="mt-1 block w-full rounded-md bg-slate-800/50 border-2 border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all duration-300 focus:shadow-lg focus:shadow-purple-500/20 focus:-translate-y-0.5 sm:text-sm px-3 py-2" 
                  />
                  {validation.name !== undefined && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 mt-0.5">
                      {validation.name ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Headline */}
              <div className="relative">
                <label htmlFor="headline" className="block text-sm font-medium text-gray-300">
                  <Briefcase className="inline w-4 h-4 mr-2" />
                  Headline
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    name="headline" 
                    id="headline" 
                    value={personalInfo.headline} 
                    onChange={handleInfoChange} 
                    className="mt-1 block w-full rounded-md bg-slate-700/50 border-2 border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all duration-300 focus:shadow-lg focus:shadow-purple-500/20 focus:-translate-y-0.5 sm:text-sm px-3 py-2" 
                  />
                  {validation.headline !== undefined && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 mt-0.5">
                      {validation.headline ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="relative">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  <Mail className="inline w-4 h-4 mr-2" />
                  Email address
                </label>
                <div className="relative">
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={personalInfo.email} 
                    onChange={handleInfoChange} 
                    className="mt-1 block w-full rounded-md bg-slate-700/50 border-2 border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all duration-300 focus:shadow-lg focus:shadow-purple-500/20 focus:-translate-y-0.5 sm:text-sm px-3 py-2" 
                  />
                  {validation.email !== undefined && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 mt-0.5">
                      {validation.email ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                  )}
                </div>
                {validation.email === false && (
                  <p className="text-red-400 text-xs mt-1">Please enter a valid email address</p>
                )}
              </div>

              {/* Phone */}
              <div className="relative">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                  <Phone className="inline w-4 h-4 mr-2" />
                  Phone
                </label>
                <div className="relative">
                  <input 
                    type="tel" 
                    name="phone" 
                    id="phone" 
                    value={personalInfo.phone} 
                    onChange={handleInfoChange} 
                    className="mt-1 block w-full rounded-md bg-slate-700/50 border-2 border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all duration-300 focus:shadow-lg focus:shadow-purple-500/20 focus:-translate-y-0.5 sm:text-sm px-3 py-2" 
                    placeholder="123-456-7890"
                  />
                  {validation.phone !== undefined && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 mt-0.5">
                      {validation.phone ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                  )}
                </div>
                {validation.phone === false && (
                  <p className="text-red-400 text-xs mt-1">Format: 123-456-7890</p>
                )}
              </div>

              {/* Location */}
              <div className="sm:col-span-2 relative">
                <label htmlFor="location" className="block text-sm font-medium text-gray-300">
                  <MapPin className="inline w-4 h-4 mr-2" />
                  Location
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    name="location" 
                    id="location" 
                    value={personalInfo.location} 
                    onChange={handleInfoChange} 
                    className="mt-1 block w-full rounded-md bg-slate-700/50 border-2 border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all duration-300 focus:shadow-lg focus:shadow-purple-500/20 focus:-translate-y-0.5 sm:text-sm px-3 py-2" 
                  />
                  {validation.location !== undefined && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 mt-0.5">
                      {validation.location ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                  )}
                </div>
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
                  <div 
                    key={index} 
                    className="skill-tag bg-purple-500/20 text-purple-300 text-sm font-medium px-4 py-1 rounded-full inline-flex items-center border border-purple-500/30 hover:bg-purple-500/30 hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                    <button
                      type="button"
                      onClick={() => setSkills(prevSkills => prevSkills.filter((_, i) => i !== index))}
                      className="ml-2 text-purple-400 hover:text-red-400 focus:outline-none transition-colors duration-200"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="relative">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input 
                      type="text" 
                      id="new-skill" 
                      name="new-skill" 
                      value={newSkill} 
                      onChange={(e) => handleSkillInput(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddSkill();
                        }
                      }}
                      className="mt-1 block w-full rounded-md bg-slate-700/50 border-2 border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 outline-none transition-all duration-300 sm:text-sm px-3 py-2" 
                      placeholder="Add a skill" 
                    />
                    
                    {/* Skill Suggestions Dropdown */}
                    {filteredSuggestions.length > 0 && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-purple-500/30 rounded-lg shadow-xl max-h-48 overflow-y-auto z-10">
                        {filteredSuggestions.map((suggestion) => (
                          <button
                            key={suggestion}
                            type="button"
                            onClick={() => handleAddSkill(suggestion)}
                            className="w-full text-left px-4 py-2 text-white hover:bg-purple-600/40 transition-colors duration-150"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <button 
                    type="button" 
                    onClick={() => handleAddSkill()} 
                    className="px-4 py-2 mt-1 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Resume Upload Section */}
          <div>
            <h3 className="text-lg font-semibold leading-6 text-white">Resume</h3>
            
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`mt-6 relative border-2 border-dashed rounded-lg p-8 transition-all duration-300 ${
                dragActive
                  ? 'border-purple-400 bg-purple-500/20 scale-105'
                  : 'border-purple-500/30 bg-slate-800/30'
              }`}
            >
              <input
                type="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="hidden"
                id="resume-upload"
              />
              
              {resumeFile ? (
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-600 p-3 rounded-lg">
                      <Upload className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{resumeFile.name}</p>
                      <p className="text-purple-300 text-sm">
                        {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setResumeFile(null)}
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              ) : (
                <label htmlFor="resume-upload" className="cursor-pointer block text-center">
                  <Upload className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <p className="text-white font-medium mb-1">
                    Drop your resume here or <span className="text-purple-400">browse</span>
                  </p>
                  <p className="text-purple-300 text-sm">PDF, DOC, DOCX up to 10MB</p>
                </label>
              )}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-6">
            <button 
              type="submit" 
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-md font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50"
            >
              Save Profile
            </button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
}