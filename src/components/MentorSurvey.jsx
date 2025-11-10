import { MessageCircle, Code, Users, Bot, ChevronRight, ChevronLeft, Check } from 'lucide-react'

const mentorCategories = [
  {
    id: 'soft-skills',
    title: 'Soft Skills & Confidence',
    description: 'Enhance your communication, leadership, and confidence to perform better in interviews and teamwork.',
    icon: MessageCircle,
    color: 'from-purple-600 to-blue-600'
  },
  {
    id: 'technical',
    title: 'Technical Mentorship (Coding)',
    description: 'Get guidance on coding projects, problem-solving, and learning best practices from experienced developers.',
    icon: Code,
    color: 'from-purple-600 to-pink-600'
  },
  {
    id: 'networking',
    title: 'Networking & Advanced Internships',
    description: 'Connect with professionals who can help you find internships and opportunities to grow your career.',
    icon: Users,
    color: 'from-purple-600 to-purple-800'
  },

]

const surveyQuestions = {
  'soft-skills': [
    {
      id: 'confidence-level',
      question: 'How would you rate your current confidence in professional settings?',
      type: 'scale',
      options: ['1 - Not Confident', '2', '3', '4', '5 - Very Confident']
    },
    {
      id: 'communication-challenge',
      question: 'What communication challenge do you face most often?',
      type: 'multiple',
      options: [
        'Public speaking and presentations',
        'Writing professional emails',
        'Networking conversations',
        'Team collaboration',
        'Handling feedback'
      ]
    },
    {
      id: 'leadership-experience',
      question: 'Have you had any leadership experience?',
      type: 'single',
      options: ['Yes, extensive', 'Some experience', 'Very little', 'None at all']
    },
    {
      id: 'goals',
      question: 'What soft skills would you most like to develop? (Select all that apply)',
      type: 'checkbox',
      options: [
        'Public speaking',
        'Emotional intelligence',
        'Time management',
        'Conflict resolution',
        'Professional networking',
        'Personal branding'
      ]
    },
    {
      id: 'mentorship-style',
      question: 'What mentorship style would work best for you?',
      type: 'single',
      options: [
        'Regular scheduled check-ins',
        'Flexible, as-needed support',
        'Project-based guidance',
        'Workshop and group sessions'
      ]
    }
  ],
  'technical': [
    {
      id: 'experience-level',
      question: 'What is your current technical skill level?',
      type: 'single',
      options: ['Beginner', 'Intermediate', 'Advanced', 'Expert']
    },
    {
      id: 'tech-focus',
      question: 'Which technical area are you most interested in?',
      type: 'multiple',
      options: [
        'Web Development (Frontend)',
        'Web Development (Backend)',
        'Mobile Development',
        'Data Science & Analytics',
        'Machine Learning & AI',
        'Cloud Computing',
        'Cybersecurity',
        'DevOps'
      ]
    },
    {
      id: 'languages',
      question: 'Which programming languages do you currently know? (Select all that apply)',
      type: 'checkbox',
      options: ['JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Go', 'Swift', 'None yet']
    },
    {
      id: 'learning-goals',
      question: 'What is your primary technical goal?',
      type: 'single',
      options: [
        'Learn a new programming language',
        'Build a complete project',
        'Prepare for technical interviews',
        'Master algorithms and data structures',
        'Learn best practices and code quality'
      ]
    },
    {
      id: 'learning-style',
      question: 'How do you learn best?',
      type: 'single',
      options: [
        'Hands-on coding projects',
        'Video tutorials and courses',
        'Pair programming sessions',
        'Code reviews and feedback',
        'Reading documentation'
      ]
    },
    {
      id: 'time-commitment',
      question: 'How many hours per week can you dedicate to technical learning?',
      type: 'single',
      options: ['1-5 hours', '5-10 hours', '10-15 hours', '15+ hours']
    }
  ],
  'networking': [
    {
      id: 'networking-experience',
      question: 'How much networking experience do you have?',
      type: 'single',
      options: ['None - I\'m just starting', 'Some events attended', 'Moderate experience', 'Very experienced']
    },
    {
      id: 'career-stage',
      question: 'What stage are you at in your career?',
      type: 'single',
      options: [
        'Student (undergraduate)',
        'Student (graduate)',
        'Recent graduate',
        'Career switcher',
        'Early career (1-3 years)'
      ]
    },
    {
      id: 'target-companies',
      question: 'What type of companies are you targeting?',
      type: 'checkbox',
      options: [
        'Big tech (FAANG)',
        'Startups',
        'Mid-size companies',
        'Non-profits',
        'Government/Public sector',
        'Remote-first companies'
      ]
    },
    {
      id: 'internship-experience',
      question: 'Have you completed any internships?',
      type: 'single',
      options: ['Yes, multiple', 'Yes, one', 'No, but actively searching', 'No, not yet looking']
    },
    {
      id: 'networking-goals',
      question: 'What are your primary networking goals? (Select all that apply)',
      type: 'checkbox',
      options: [
        'Find internship opportunities',
        'Build professional connections',
        'Learn about different career paths',
        'Get referrals to companies',
        'Find a long-term mentor',
        'Practice interview skills'
      ]
    },
    {
      id: 'help-needed',
      question: 'What do you need most help with?',
      type: 'single',
      options: [
        'Resume and LinkedIn optimization',
        'Interview preparation',
        'Finding the right opportunities',
        'Making meaningful connections',
        'Following up with contacts'
      ]
    }
  ]
}

export default function MentorSurvey() {
  const [step, setStep] = useState('category') // 'category', 'survey', 'results'
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})

  const handleCategorySelect = (categoryId) => {
    if (categoryId === 'ai-mentor') {
      // Handle AI Mentor differently - could redirect to chat
      alert('Opening AI Mentor chat...')
      return
    }
    setSelectedCategory(categoryId)
    setStep('survey')
    setCurrentQuestion(0)
    setAnswers({})
  }

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }))
  }

  const handleCheckboxChange = (questionId, option) => {
    const currentAnswers = answers[questionId] || []
    const newAnswers = currentAnswers.includes(option)
      ? currentAnswers.filter(a => a !== option)
      : [...currentAnswers, option]
    
    handleAnswer(questionId, newAnswers)
  }

  const handleNext = () => {
    const questions = surveyQuestions[selectedCategory]
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setStep('results')
    }
  }

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    } else {
      setStep('category')
      setSelectedCategory(null)
      setAnswers({})
    }
  }

  const isAnswered = () => {
    const questions = surveyQuestions[selectedCategory]
    const currentQ = questions[currentQuestion]
    const answer = answers[currentQ.id]
    
    if (currentQ.type === 'checkbox') {
      return answer && answer.length > 0
    }
    return answer !== undefined && answer !== null && answer !== ''
  }

  const getCategoryInfo = () => {
    return mentorCategories.find(cat => cat.id === selectedCategory)
  }

  const questions = selectedCategory ? surveyQuestions[selectedCategory] : []
  const progress = selectedCategory ? ((currentQuestion + 1) / questions.length) * 100 : 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-purple-800 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {step === 'category' && (
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-white mb-3">MentorMatch</h1>
            <p className="text-gray-300 text-xl">Connect with professionals or chat with our AI mentor for on-demand guidance.</p>
          </div>
        )}

        {/* Category Selection */}
        {step === 'category' && (
          <div className="flex flex-wrap lg:flex-nowrap gap-4">
            {mentorCategories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/60 hover:border-purple-500/50 transition-all group text-center flex flex-col items-center flex-1 min-w-[250px]"
                >
                  <div className="mb-4">
                    <Icon className="w-16 h-16 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{category.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{category.description}</p>
                </button>
              )
            })}
          </div>
        )}

        {/* Survey Questions */}
        {step === 'survey' && selectedCategory && (
          <div>
            <button
              onClick={handleBack}
              className="mb-6 text-purple-400 hover:text-purple-300 flex items-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to categories
            </button>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 max-w-3xl mx-auto">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                  <span>{getCategoryInfo().title}</span>
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {questions[currentQuestion].question}
                </h2>

                <div className="space-y-3">
                  {questions[currentQuestion].type === 'single' && (
                    questions[currentQuestion].options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleAnswer(questions[currentQuestion].id, option)}
                        className={`w-full p-4 rounded-lg text-left transition-all ${
                          answers[questions[currentQuestion].id] === option
                            ? 'bg-purple-500 text-white border-2 border-purple-400'
                            : 'bg-slate-700/50 text-gray-300 border-2 border-transparent hover:border-purple-400/40'
                        }`}
                      >
                        {option}
                      </button>
                    ))
                  )}

                  {questions[currentQuestion].type === 'multiple' && (
                    questions[currentQuestion].options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleAnswer(questions[currentQuestion].id, option)}
                        className={`w-full p-4 rounded-lg text-left transition-all ${
                          answers[questions[currentQuestion].id] === option
                            ? 'bg-purple-500 text-white border-2 border-purple-400'
                            : 'bg-slate-700/50 text-gray-300 border-2 border-transparent hover:border-purple-400/40'
                        }`}
                      >
                        {option}
                      </button>
                    ))
                  )}

                  {questions[currentQuestion].type === 'scale' && (
                    <div className="flex gap-2">
                      {questions[currentQuestion].options.map((option, idx) => (
                        <button
                          key={option}
                          onClick={() => handleAnswer(questions[currentQuestion].id, option)}
                          className={`flex-1 p-4 rounded-lg text-center transition-all ${
                            answers[questions[currentQuestion].id] === option
                              ? 'bg-purple-500 text-white border-2 border-purple-400'
                              : 'bg-slate-700/50 text-gray-300 border-2 border-transparent hover:border-purple-400/40'
                          }`}
                        >
                          {idx + 1}
                        </button>
                      ))}
                    </div>
                  )}

                  {questions[currentQuestion].type === 'checkbox' && (
                    questions[currentQuestion].options.map((option) => {
                      const isSelected = (answers[questions[currentQuestion].id] || []).includes(option)
                      return (
                        <button
                          key={option}
                          onClick={() => handleCheckboxChange(questions[currentQuestion].id, option)}
                          className={`w-full p-4 rounded-lg text-left transition-all flex items-center gap-3 ${
                            isSelected
                              ? 'bg-purple-500 text-white border-2 border-purple-400'
                              : 'bg-slate-700/50 text-gray-300 border-2 border-transparent hover:border-purple-400/40'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            isSelected ? 'bg-white border-white' : 'border-gray-400'
                          }`}>
                            {isSelected && <Check className="w-4 h-4 text-purple-500" />}
                          </div>
                          {option}
                        </button>
                      )
                    })
                  )}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between">
                <button
                  onClick={handleBack}
                  className="px-6 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-all flex items-center gap-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!isAnswered()}
                  className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-all flex items-center gap-2 disabled:bg-slate-600 disabled:cursor-not-allowed"
                >
                  {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {step === 'results' && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
              <div className="text-center mb-8">
                <div className="bg-gradient-to-br from-green-500 to-teal-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Survey Complete!</h2>
                <p className="text-gray-300">We're matching you with the perfect mentor...</p>
              </div>

              <div className="bg-slate-700/50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-white mb-4">Your Profile Summary</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`bg-gradient-to-br ${getCategoryInfo().color} p-2 rounded`}>
                      {(() => {
                        const Icon = getCategoryInfo().icon
                        return <Icon className="w-5 h-5 text-white" />
                      })()}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Category</p>
                      <p className="text-white font-semibold">{getCategoryInfo().title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-500/20 p-2 rounded">
                      <Check className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Questions Answered</p>
                      <p className="text-white font-semibold">{questions.length} of {questions.length}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setStep('category')
                    setSelectedCategory(null)
                    setAnswers({})
                    setCurrentQuestion(0)
                  }}
                  className="flex-1 px-6 py-3 bg-slate-700 text-white rounded-lg font-semibold hover:bg-slate-600 transition-all"
                >
                  Take Another Survey
                </button>
                <button className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all">
                  View Mentor Matches
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}