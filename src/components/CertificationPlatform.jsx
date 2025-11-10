import { useState } from 'react' // import react to store and update data 
<<<<<<< HEAD
import { Award, BookOpen, Clock, ChevronRight, Search, CheckCircle, Play, Download, Sparkles, Share2, FileText } from 'lucide-react' // icons to make the page look cute 
import PageLayout from '../pages/PageLayout'
import CertificateUploader from './CertificateUploader'
=======
import { Award, BookOpen, Clock, ChevronRight, Search, CheckCircle, Play, Download, Sparkles } from 'lucide-react' // icons to make the page look cute 
import PageLayout from '../pages/PageLayout'
>>>>>>> 3e13479b94971f9f44624de982c1434f8ee8c517

// certification platform where users can browse, enroll, track progress and complete certifications

const categories = [ // a list of buttons the user can choose from to filter their certifications 
    { id: 'all', name: 'All Certifications' }, 
    { id: 'webdev', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Development' },
    { id: 'data', name: 'Data Science' },
    { id: 'cloud', name: 'Cloud Computing' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'ai', name: 'AI & Machine Learning' }
  ]

const initialCertifications = [ // example of different certifications (may or may ot be accurate)
    {
      id: 1,
      title: 'Full Stack Web Development',
      provider: 'Beyond The Code Academy',
      category: 'webdev',
      duration: '12 weeks',
      level: 'Intermediate',
      modules: 8,
      description: 'Master front-end and back-end development with React, Node.js, and databases.',
      skills: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
      price: 'Free'
    },
    {
      id: 2,
      title: 'AWS Cloud Practitioner',
      provider: 'Amazon Web Services',
      category: 'cloud',
      duration: '8 weeks',
      level: 'Beginner',
      modules: 6,
      description: 'Learn cloud computing fundamentals and AWS services.',
      skills: ['AWS', 'Cloud Architecture', 'EC2', 'S3'],
      price: 'Free'
    },
    {
      id: 3,
      title: 'Python for Data Science',
      provider: 'Beyond The Code Academy',
      category: 'data',
      duration: '10 weeks',
      level: 'Beginner',
      modules: 7,
      description: 'Analyze data and build machine learning models with Python.',
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
      price: 'Free'
    },
    {
      id: 4,
      title: 'Cybersecurity Fundamentals',
      provider: 'CompTIA Network',
      category: 'security',
      duration: '6 weeks',
      level: 'Beginner',
      modules: 5,
      description: 'Understand security concepts, threats, and protection strategies.',
      skills: ['Network Security', 'Encryption', 'Risk Management'],
      price: 'Free'
    },
    {
      id: 5,
      title: 'React Native Mobile Development',
      provider: 'Beyond The Code Academy',
      category: 'mobile',
      duration: '10 weeks',
      level: 'Intermediate',
      modules: 8,
      description: 'Build cross-platform mobile apps for iOS and Android.',
      skills: ['React Native', 'Mobile UI', 'APIs', 'App Store'],
      price: 'Free'
    },
    {
      id: 6,
      title: 'AI & Machine Learning Basics',
      provider: 'Beyond The Code Academy',
      category: 'ai',
      duration: '14 weeks',
      level: 'Advanced',
      modules: 10,
      description: 'Explore neural networks, deep learning, and AI applications.',
      skills: ['TensorFlow', 'Neural Networks', 'NLP', 'Computer Vision'],
      price: 'Free'
    }
  ]

export default function CertificationPlatform() { // these are state variables that store data 
  const [activeTab, setActiveTab] = useState('browse') // shows which tab is currently being used or shown 
  const [selectedCategory, setSelectedCategory] = useState('all') // which category filter is being selected 
  const [searchQuery, setSearchQuery] = useState('') // giving user access to type in the search bar 
  const [enrolledCourses, setEnrolledCourses] = useState([]) // shows what the user typed in the search box
  const [completedCerts, setCompletedCerts] = useState([]) // shows a list of course IDs the user completed (like a progress tracker)
  const [certifications, setCertifications] = useState(initialCertifications)
<<<<<<< HEAD
  const [selectedCertForDesc, setSelectedCertForDesc] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generateError, setGenerateError] = useState('')

=======
  const [newCertText, setNewCertText] = useState('')
  const [isParsing, setIsParsing] = useState(false)
  const [parseError, setParseError] = useState('')
>>>>>>> 3e13479b94971f9f44624de982c1434f8ee8c517

  const filteredCerts = certifications.filter(cert => { // this takes all the certifications and filters them based on the selected category 
    const matchesCategory = selectedCategory === 'all' || cert.category === selectedCategory
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cert.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const handleEnroll = (certId) => { // when the user clicks enroll now the selected course will be added to the list 
    if (!enrolledCourses.includes(certId)) {
      setEnrolledCourses([...enrolledCourses, certId])
    }
  }

  const handleComplete = (certId) => { // when the course is completed it will be added to this section of the site 
    if (!completedCerts.includes(certId)) {
      setCompletedCerts([...completedCerts, certId])
    }
  }

<<<<<<< HEAD
  const handleCertificateValidated = (newCert) => {
    setCertifications(prev => [...prev, newCert])
    setCompletedCerts(prev => [...prev, newCert.id])
  }

  const handleGenerateDescription = async (certId) => {
    const cert = certifications.find(c => c.id === certId)
    if (!cert) return

    setIsGenerating(true)
    setGenerateError('')
    setSelectedCertForDesc(certId)

    // System prompt for generating descriptions
    const systemPrompt = `You are a professional certification description writer. Generate a compelling, professional description for a certification.
The description should be 2-3 sentences, highlight the key skills and knowledge gained, and sound professional.
Return ONLY a JSON object with a single key "description" containing the generated text.`;

    const userPrompt = `Generate a professional description for this certification:
Title: ${cert.title}
Provider: ${cert.provider}
Skills: ${cert.skills ? cert.skills.join(', ') : 'General skills'}
Level: ${cert.level || 'Professional'}`;

    try {
=======
  const handleAddCustomCert = async (e) => {
    e.preventDefault()
    if (!newCertText.trim()) return

    setIsParsing(true)
    setParseError('')

    const prompt = `
      Parse the following user-provided text about a completed certification and return a JSON object.
      The JSON object must have these exact keys: "title" (string), "provider" (string), "date" (string, e.g., "YYYY-MM-DD").
      If you cannot find a value for a key, use "N/A".
      Do not include any text outside of the JSON object itself.

      User text: "${newCertText}"
    `

    try {
      async function handleSend (e) {
  if (!input.trim()) return
  console.log("Sending message:", input)
    const userMsg = { sender: "user", text: input }
    setMessages(prev => [...prev, userMsg])
    setInput("")
    setLoading(true)
    try {
>>>>>>> 3e13479b94971f9f44624de982c1434f8ee8c517
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
<<<<<<< HEAD
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const data = await response.json();
      const result = JSON.parse(data.choices[0].message.content);

      // Update the certification with the new description
      setCertifications(prev => prev.map(c => 
        c.id === certId 
          ? { ...c, description: result.description, aiGenerated: true }
          : c
      ))
    } catch (error) {
      console.error("AI generation failed:", error)
      setGenerateError("Sorry, couldn't generate a description. Please try again.")
    } finally {
      setIsGenerating(false)
      setSelectedCertForDesc(null)
=======
          messages: [
            { role: "system", content: "You are a helpful assistant that explains Chunking clearly." },
            { role: "user", content: input }
          ]
        })
      });
      const data = await response.json();
      const aiText = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content
        ? data.choices[0].message.content.trim()
        : "Hmm, I’m not sure how to answer that.";
      const aiMsg = { sender: "ai", text: aiText };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      console.error(err)
      setMessages(prev => [...prev, { sender: "ai", text: ":warning: Error: Unable to reach AI server." }])
    } finally {
      setLoading(false)
    }
  }
      const result = await getChatCompletion(prompt)
      const parsedCert = JSON.parse(result)

      // Create a new certification object
      const newCert = {
        id: `custom-${Date.now()}`, // Unique ID for custom certs
        title: parsedCert.title || 'Untitled Certification',
        provider: parsedCert.provider || 'Unknown Provider',
        description: `Completed on ${parsedCert.date || new Date().toLocaleDateString()}`,
        isCustom: true, // Flag to identify custom entries
      }

      setCertifications(prev => [...prev, newCert])
      setCompletedCerts(prev => [...prev, newCert.id])
      setNewCertText('') // Clear the input field
    } catch (error) {
      console.error("AI parsing failed:", error)
      setParseError("Sorry, I couldn't understand that. Please try rephrasing or check the console for more details.")
    } finally {
      setIsParsing(false)
>>>>>>> 3e13479b94971f9f44624de982c1434f8ee8c517
    }
  }

  return ( // pretty part of the site 
    <PageLayout
      title="Certification Hub"
      subtitle="Earn industry-recognized certifications to boost your career"
    >
      {/* Navigation Tabs */}
      <div className="mt-6">
        <div className="flex gap-4 border-b border-purple-500/20">
          <button
            onClick={() => setActiveTab('browse')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'browse'
                ? 'text-purple-400 border-b-2 border-purple-400'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Browse Certifications
          </button>
          <button
            onClick={() => setActiveTab('enrolled')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'enrolled'
                ? 'text-purple-400 border-b-2 border-purple-400'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            My Learning ({enrolledCourses.length})
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'completed'
                ? 'text-purple-400 border-b-2 border-purple-400'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Completed ({completedCerts.length})
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8">
        {activeTab === 'browse' && (
          <>
            {/* Search and Filter */}
            <div className="mb-8">
              <div className="flex gap-4 mb-6">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search certifications or skills..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                  />
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-3">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-purple-500 text-white'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Certification Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCerts.map(cert => (
                <div
                  key={cert.id}
                  className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-400/40 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-purple-500/20 p-3 rounded-lg">
                      <BookOpen className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-xs font-semibold text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">
                      {cert.level}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">{cert.provider}</p>
                  <p className="text-gray-300 text-sm mb-4">{cert.description}</p>

                  <div className="flex gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {cert.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4" />
                      {cert.modules} modules
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleEnroll(cert.id)}
                    disabled={enrolledCourses.includes(cert.id)}
                    className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                      enrolledCourses.includes(cert.id)
                        ? 'bg-green-500/20 text-green-400 cursor-not-allowed'
                        : 'bg-purple-500 text-white hover:bg-purple-600'
                    }`}
                  >
                    {enrolledCourses.includes(cert.id) ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Enrolled
                      </>
                    ) : (
                      <>
                        Enroll Now
                        <ChevronRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'enrolled' && (
          <div className="space-y-6">
            {enrolledCourses.length === 0 ? (
              <div className="text-center py-16">
                <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No enrolled courses yet</h3>
                <p className="text-gray-500 mb-6">Start learning by enrolling in a certification</p>
                <button
                  onClick={() => setActiveTab('browse')}
                  className="bg-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-all"
                >
                  Browse Certifications
                </button>
              </div>
            ) : (
              enrolledCourses.map(certId => {
                const cert = certifications.find(c => c.id === certId)
                const isCompleted = completedCerts.includes(certId)
                return (
                  <div
                    key={certId}
                    className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{cert.title}</h3>
                        <p className="text-gray-400 mb-4">{cert.provider}</p>
                        
                        <div className="mb-4">
                          <div className="flex justify-between text-sm text-gray-400 mb-2">
                            <span>Progress</span>
                            <span>{isCompleted ? '100' : '45'}%</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <div
                              className="bg-purple-500 h-2 rounded-full transition-all"
                              style={{ width: isCompleted ? '100%' : '45%' }}
                            />
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <button className="bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-600 transition-all flex items-center gap-2">
                            <Play className="w-4 h-4" />
                            Continue Learning
                          </button>
                          {!isCompleted && (
                            <button
                              onClick={() => handleComplete(certId)}
                              className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-slate-600 transition-all"
                            >
                              Mark Complete
                            </button>
                          )}
                        </div>
                      </div>
                      {isCompleted && (
                        <div className="ml-4">
                          <CheckCircle className="w-12 h-12 text-green-400" />
                        </div>
                      )}
                    </div>
                  </div>
                )
              })
            )}
          </div>
        )}

        {activeTab === 'completed' && (
          <>
<<<<<<< HEAD
          <CertificateUploader onCertificateValidated={handleCertificateValidated} />

          <div className="space-y-6 mt-8">
=======
          {/* AI-Powered Add Certification Form */}
          <div className="mb-8 bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-bold text-white">Add a Completed Certification with AI</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Simply type or paste details about a certification you've earned. For example: "I finished the Google Data Analytics cert on May 20, 2024". Our AI will handle the rest!
            </p>
            <form onSubmit={handleAddCustomCert}>
              <textarea
                value={newCertText}
                onChange={(e) => setNewCertText(e.target.value)}
                placeholder="Enter certification details here..."
                className="w-full p-3 bg-slate-700/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-400"
                rows="3"
              />
              {parseError && <p className="text-red-400 text-sm mt-2">{parseError}</p>}
              <button
                type="submit"
                disabled={isParsing || !newCertText}
                className="mt-4 w-full sm:w-auto px-6 py-2 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-all disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isParsing ? 'Analyzing...' : 'Add Certification'}
              </button>
            </form>
          </div>

          <div className="space-y-6">
>>>>>>> 3e13479b94971f9f44624de982c1434f8ee8c517
            {completedCerts.length === 0 ? (
              <div className="text-center py-16">
                <Award className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">No completed certifications</h3>
<<<<<<< HEAD
                <p className="text-gray-500">Upload your first certification above!</p>
=======
                <p className="text-gray-500">Keep learning to earn your first certificate!</p>
>>>>>>> 3e13479b94971f9f44624de982c1434f8ee8c517
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {completedCerts.map(certId => {
                  const cert = certifications.find(c => c.id === certId)
                  return (
                    <div
                      key={certId}
                      className="bg-gradient-to-br from-purple-900/50 to-slate-800/50 backdrop-blur-sm border border-purple-400/40 rounded-xl p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
<<<<<<< HEAD
                        {cert.isUploaded ? (
                          <div className="flex items-center gap-2">
                            <FileText className="w-12 h-12 text-purple-400" />
                            <div>
                              <span className="text-xs font-semibold text-green-400 bg-green-500/20 px-3 py-1 rounded-full">
                                Verified
                              </span>
                              <p className="text-xs text-gray-400 mt-1">
                                Verified on {new Date(cert.verificationDate).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Award className="w-12 h-12 text-purple-400" />
                            <span className="text-xs font-semibold text-green-400 bg-green-500/20 px-3 py-1 rounded-full">
                              Completed
                            </span>
                          </div>
                        )}
=======
                        <Award className="w-12 h-12 text-purple-400" />
                        <span className="text-xs font-semibold text-green-400 bg-green-500/20 px-3 py-1 rounded-full">
                          Completed
                        </span> 
>>>>>>> 3e13479b94971f9f44624de982c1434f8ee8c517
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                      <p className="text-gray-400 mb-4">{cert.provider}</p>
                      <p className="text-sm text-gray-300 mb-4">
<<<<<<< HEAD
                        {cert.isCustom ? cert.description : 
                         cert.isUploaded ? 'Document verified by AI' :
                         cert.description}
                      </p>
                      {cert.aiGenerated && (
                        <div className="flex items-center gap-2 mb-4">
                          <Sparkles className="w-4 h-4 text-purple-400" />
                          <span className="text-xs text-purple-400">AI-generated description</span>
                        </div>
                      )}

                      <div className="flex gap-3">
                        <button 
                          onClick={() => handleGenerateDescription(certId)}
                          disabled={isGenerating && selectedCertForDesc === certId}
                          className="flex-1 bg-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-600 transition-all flex items-center justify-center gap-2 disabled:bg-slate-600 disabled:cursor-not-allowed"
                        >
                          <Sparkles className="w-4 h-4" />
                          {isGenerating && selectedCertForDesc === certId ? 'Generating...' : 'Generate Description'}
                        </button>
                        {cert.documentUrl ? (
                          <a 
                            href={cert.documentUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-slate-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-600 transition-all flex items-center justify-center gap-2"
                          >
                            <FileText className="w-4 h-4" />
                            View
                          </a>
                        ) : (
                          <button className="bg-slate-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-600 transition-all flex items-center justify-center gap-2">
                            <Share2 className="w-4 h-4" />
                            Share
                          </button>
                        )}
=======
                        {cert.isCustom ? cert.description : `Completed: ${new Date().toLocaleDateString()}`}
                      </p>

                      <div className="flex gap-3">
                        <button className="flex-1 bg-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-600 transition-all flex items-center justify-center gap-2">
                          <Wishlist className="w-4 h-4" />
                          Add to Wishlist 
                        </button>
                        <button className="bg-slate-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-slate-600 transition-all">
                          Share
                        </button>
>>>>>>> 3e13479b94971f9f44624de982c1434f8ee8c517
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
          </>
        )}
      </div>
    </PageLayout>
  )
}