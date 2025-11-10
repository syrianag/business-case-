import { useNavigate } from 'react-router-dom';
import PageLayout from './PageLayout';

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <PageLayout 
      title="Welcome to Beyond The Code" 
      subtitle="Your Tech Career Is Awaiting!"
    >
      <div className="py-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">
            Find Your First Tech Job Without a Degree
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Connect with internships and entry-level opportunities that value skills over credentials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card
            title="Build Your Profile"
            description="Showcase your skills, projects, and motivation."
            buttonLabel="Create Profile"
            onClick={() => navigate('/profile')}
          />
          <Card
            title="Browse Opportunities"
            description="Explore internships and entry-level positions."
            buttonLabel="View Jobs"
            onClick={() => navigate('/search')}
          />
          <Card
            title="Get Certified"
            description="Earn industry-recognized certifications to boost your resume."
            buttonLabel="Browse Certifications"
            onClick={() => navigate('/certifications')}
          />
          <Card
            title="Mentor Match"
            description="Not confident in your technical, networking & soft skills?"
            buttonLabel="Find Your Mentor Today!"
            onClick={() => navigate('/MentorMatch')}
          />
        </div>
      </div>
    </PageLayout>
  );
}

function Card({ title, description, buttonLabel, onClick }) {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 p-8 rounded-xl hover:border-purple-400/40 transition-all">
      <h3 className="text-2xl font-semibold mb-4 text-purple-400">
        {title}
      </h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <button
        type="button"
        onClick={onClick}
        className="w-full bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-all font-semibold"
      >
        {buttonLabel}
      </button>
    </div>
  );
}
