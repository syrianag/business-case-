<<<<<<< HEAD
import { useMemo, useState, useEffect } from 'react';
import JobCard from '../components/JobCard'; // This path is now correct
import Modal from '../components/Modal';
import { sampleJobs } from "../assets/jobs.js"
import PageLayout from './PageLayout.jsx';
import { MapPin, Building2, DollarSign, Clock, X, Star, Sparkles } from 'lucide-react';
import PA3DMap from '../components/PA3DMap';
=======
import { useMemo, useState } from 'react';
import JobCard from '../components/JobCard'; // This path is now correct
import Modal from '../components/Modal';
import { sampleJobs } from "../jobs.js"
import PageLayout from '../components/PageLayout';
import { MapPin, Building2, DollarSign, Clock } from 'lucide-react';
>>>>>>> cb641bbe46de0a9575d2212fd8ee6a7777c5df19

export default function JobsPage() {
  const [query, setQuery] = useState('');
  const [selectedCareer, setSelectedCareer] = useState('All');
  const [selectedRole, setSelectedRole] = useState('All');
  const [selectedJobTitle, setSelectedJobTitle] = useState('All Jobs');
  const [selectedJob, setSelectedJob] = useState(null);
<<<<<<< HEAD
  const [recommendedJobs, setRecommendedJobs] = useState([]);
  const [aiRecommendedJobs, setAiRecommendedJobs] = useState([]);
  const [isFetchingAiRecs, setIsFetchingAiRecs] = useState(false);
=======
>>>>>>> cb641bbe46de0a9575d2212fd8ee6a7777c5df19

  const careers = useMemo(() => ['All', ...Array.from(new Set(sampleJobs.map(j => j.career)))], []);
  const roles = useMemo(() => ['All', ...Array.from(new Set(sampleJobs.map(j => j.role)))], []);
  const jobTitles = useMemo(() => {
    const uniq = Array.from(new Set(sampleJobs.map(j => j.title)));
    return ['All Jobs', ...uniq.slice(0, 5)];
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

<<<<<<< HEAD
  useEffect(() => {
    const userSkills = JSON.parse(localStorage.getItem('userSkills')) || [];
    if (userSkills.length > 0) {
      const recommendations = sampleJobs
        .map(job => {
          const matchingSkills = job.skills.filter(skill => userSkills.includes(skill));
          return { ...job, matchScore: matchingSkills.length };
        })
        .filter(job => job.matchScore > 0)
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 3); // Get top 3 recommendations

      setRecommendedJobs(recommendations);
    }
  }, []);

=======
>>>>>>> cb641bbe46de0a9575d2212fd8ee6a7777c5df19
  function handleApply(job) {
    alert(`Apply clicked for ${job.title} at ${job.company}`);
  }

<<<<<<< HEAD
  async function getAiRecommendations() {
    const userSkills = JSON.parse(localStorage.getItem('userSkills')) || [];
    if (userSkills.length === 0) {
      alert("Please add some skills to your profile to get AI recommendations!");
      return;
    }

    setIsFetchingAiRecs(true);
    setAiRecommendedJobs([]);

    const jobsForPrompt = sampleJobs.map(({ id, title, description, skills }) => ({ id, title, description, skills }));

    const prompt = `
      Based on the following user skills, recommend the 3 best jobs from the provided list.
      User Skills: ${userSkills.join(', ')}
      
      Available Jobs:
      ${JSON.stringify(jobsForPrompt, null, 2)}

      Return a JSON object with a single key "recommendations" which is an array of the recommended job IDs. For example: {"recommendations": [1, 5, 10]}
    `;

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [{ role: "user", content: prompt }],
          response_format: { type: "json_object" },
        }),
      });
      const data = await response.json();
      const { recommendations: recommendedIds } = JSON.parse(data.choices[0].message.content);
      
      const recs = sampleJobs.filter(job => recommendedIds.includes(job.id));
      setAiRecommendedJobs(recs);
    } catch (error) {
      console.error("AI Recommendation Error:", error);
      alert("Sorry, there was an error getting AI recommendations. Please try again.");
    } finally {
      setIsFetchingAiRecs(false);
    }
  }

=======
>>>>>>> cb641bbe46de0a9575d2212fd8ee6a7777c5df19
  return (
    <>
      <PageLayout 
        title="Jobs & Internships" 
        subtitle="Explore opportunities across Pennsylvania with our interactive map"
      >
        <div className="max-w-7xl mx-auto">
          
<<<<<<< HEAD
          {/* 3D Map Section */}
          <div className="mb-8 bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">3D Interactive Map - Pennsylvania</h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* 3D Map */}
              <div className="lg:col-span-2">
                <PA3DMap 
                  jobs={filtered} 
                  selectedJob={selectedJob}
                  onJobSelect={setSelectedJob}
                />
=======
          {/* Map Section */}
          <div className="mb-8 bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Jobs Map - Pennsylvania</h2>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Interactive Map */}
              <div className="lg:col-span-2">
                <div className="relative bg-slate-700/30 rounded-lg overflow-hidden" style={{ paddingTop: '60%' }}>
                  {/* PA State Outline */}
                  <svg 
                    viewBox="0 0 100 60" 
                    className="absolute inset-0 w-full h-full"
                    style={{ filter: 'drop-shadow(0 0 10px rgba(168, 85, 247, 0.3))' }}
                  >
                    <path
                      d="M 5,40 L 15,25 L 30,20 L 50,18 L 70,20 L 85,25 L 95,35 L 90,50 L 70,55 L 50,58 L 30,55 L 10,48 Z"
                      fill="rgba(168, 85, 247, 0.1)"
                      stroke="rgba(168, 85, 247, 0.4)"
                      strokeWidth="0.5"
                    />
                  </svg>

                  {/* Job Pins */}
                  {filtered.map(job => (
                    <button
                      key={job.id}
                      onClick={() => setSelectedJob(job)}
                      className="absolute transform -translate-x-1/2 -translate-y-full group z-10"
                      style={{ 
                        left: `${job.coordinates.x}%`, 
                        top: `${job.coordinates.y}%` 
                      }}
                    >
                      <MapPin 
                        className={`w-8 h-8 transition-all ${
                          selectedJob?.id === job.id 
                            ? 'text-purple-400 scale-125' 
                            : 'text-purple-500 group-hover:text-purple-300 group-hover:scale-110'
                        }`}
                        fill="currentColor"
                      />
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-purple-500/20">
                        {job.title}
                        <div className="text-xs text-gray-400">{job.company}</div>
                      </div>
                    </button>
                  ))}
                </div>
>>>>>>> cb641bbe46de0a9575d2212fd8ee6a7777c5df19
              </div>

              {/* Selected Job Details */}
              <div>
                {selectedJob ? (
                  <div className="bg-slate-700/30 border border-purple-500/20 rounded-lg p-4 h-full">
<<<<<<< HEAD
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{selectedJob.title}</h3>
                      <button 
                        onClick={() => setSelectedJob(null)}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
=======
                    <h3 className="text-xl font-bold text-white mb-3">{selectedJob.title}</h3>
>>>>>>> cb641bbe46de0a9575d2212fd8ee6a7777c5df19
                    <div className="space-y-3 text-sm mb-4">
                      <div className="flex items-center gap-2 text-gray-300">
                        <Building2 className="w-4 h-4 text-purple-400" />
                        {selectedJob.company}
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        {selectedJob.location}
                      </div>
<<<<<<< HEAD
                      {selectedJob.salary && (
                        <div className="flex items-center gap-2 text-gray-300">
                          <DollarSign className="w-4 h-4 text-purple-400" />
                          {selectedJob.salary}
                        </div>
                      )}
                      {selectedJob.type && (
                        <div className="flex items-center gap-2 text-gray-300">
                          <Clock className="w-4 h-4 text-purple-400" />
                          {selectedJob.type}
                        </div>
                      )}
=======
                      <div className="flex items-center gap-2 text-gray-300">
                        <DollarSign className="w-4 h-4 text-purple-400" />
                        {selectedJob.salary}
                      </div>
                      <div className="flex items-center gap-2 text-gray-300">
                        <Clock className="w-4 h-4 text-purple-400" />
                        {selectedJob.type}
                      </div>
>>>>>>> cb641bbe46de0a9575d2212fd8ee6a7777c5df19
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{selectedJob.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {selectedJob.skills.map((skill, idx) => (
                        <span key={idx} className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <button 
                      onClick={() => handleApply(selectedJob)}
                      className="w-full bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-all font-semibold"
                    >
                      Apply Now
                    </button>
                  </div>
                ) : (
<<<<<<< HEAD
                  <div className="bg-slate-700/30 border border-purple-500/20 rounded-lg p-4 h-full flex items-center justify-center text-center text-gray-400">
                    <div>
                      <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>Click a pin on the map to see job details!</p>
                    </div>
=======
                  <div className="bg-slate-700/30 border border-purple-500/20 rounded-lg p-4 h-full flex items-center justify-center text-gray-400">
                    Click a pin on the map to see job details
>>>>>>> cb641bbe46de0a9575d2212fd8ee6a7777c5df19
                  </div>
                )}
              </div>
            </div>
          </div>

<<<<<<< HEAD
          {/* Recommended Jobs Section */}
          {recommendedJobs.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Recommended For You</h2>
              </div>
              <p className="text-gray-400 mb-6">Based on the skills from your profile.</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommendedJobs.map(job => (
                  <div
                    key={`rec-${job.id}`}
                    onClick={() => setSelectedJob(job)}
                    className="cursor-pointer"
                  >
                    <JobCard job={job} onApply={handleApply} selected={selectedJob?.id === job.id} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI-Generated Job Recommendations Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">AI-Powered Recommendations</h2>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <p className="text-gray-400 flex-1">Click the button to get job recommendations tailored to your profile, powered by AI.</p>
              <button
                onClick={getAiRecommendations}
                disabled={isFetchingAiRecs}
                className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-all disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isFetchingAiRecs ? 'Generating...' : 'Get AI Recommendations'}
              </button>
            </div>
            {aiRecommendedJobs.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {aiRecommendedJobs.map(job => (
                  <div
                    key={`ai-rec-${job.id}`}
                    onClick={() => setSelectedJob(job)}
                    className="cursor-pointer"
                  >
                    <JobCard job={job} onApply={handleApply} selected={selectedJob?.id === job.id} />
                  </div>
                ))}
              </div>
            )}
          </div>

=======
>>>>>>> cb641bbe46de0a9575d2212fd8ee6a7777c5df19
          {/* Original Search Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Search & Filter Jobs</h2>
            
            {/* Careers chips */}
            <div className="flex gap-2 mb-6 flex-wrap">
              {careers.map(c => (
                <button
                  key={c}
                  onClick={() => setSelectedCareer(c)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    selectedCareer === c 
                      ? 'bg-purple-500 text-white' 
                      : 'bg-slate-800/50 text-gray-300 border border-purple-500/20 hover:bg-slate-700/50'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Job select + Role filter */}
            <div className="flex gap-4 mb-8">
              <select 
                value={selectedJobTitle} 
                onChange={e => {
                  if (e.target.value === 'Other jobs...') setModalOpen(true);
                  else setSelectedJobTitle(e.target.value);
                }} 
                className="flex-1 bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-400"
              >
                {jobTitles.map(t => <option key={t} value={t}>{t}</option>)}
                <option>Other jobs...</option> 
              </select>
              <select 
                value={selectedRole} 
                onChange={e => setSelectedRole(e.target.value)} 
                className="bg-slate-800/50 border border-purple-500/20 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-400"
              >
                {roles.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
          </div>

          {/* Job List */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Available Positions ({filtered.length})
            </h2>
            <div className="grid gap-6">
              {filtered.length === 0 && <p className="text-gray-400 text-center py-8">No jobs found.</p>}
              {filtered.map(job => (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className="cursor-pointer"
                >
                  <JobCard job={job} onApply={handleApply} selected={selectedJob?.id === job.id} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageLayout>

      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <div className="bg-slate-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3 text-white">Search jobs</h3>
            <input 
              value={modalQuery} 
              onChange={e => setModalQuery(e.target.value)} 
              placeholder="Search all jobs..." 
              className="w-full bg-slate-700/50 border border-purple-500/20 text-white placeholder-gray-400 px-4 py-3 rounded-lg mb-3 focus:border-purple-400 focus:ring-2 focus:ring-purple-500" 
            />

            <div className="space-y-2 max-h-64 overflow-auto">
              {sampleJobs.filter(j => (`${j.title} ${j.company} ${j.role} ${j.career}`).toLowerCase().includes(modalQuery.toLowerCase())).map(j => (
                <button 
                  key={j.id} 
                  onClick={() => { 
                    setSelectedJobTitle(j.title); 
                    setModalOpen(false); 
                    setModalQuery(''); 
                  }} 
                  className="w-full text-left p-3 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 border border-purple-500/20 hover:border-purple-400/40 transition-all"
                >
                  <div className="font-medium text-white">{j.title}</div>
                  <div className="text-sm text-gray-400">{j.company} — {j.career} • {j.role}</div>
                </button>
              ))}
              {sampleJobs.filter(j => (`${j.title} ${j.company} ${j.role} ${j.career}`).toLowerCase().includes(modalQuery.toLowerCase())).length === 0 && (
                <p className="text-gray-400 text-center py-4">No jobs match.</p>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}
