import { MapPin, Building2, DollarSign, Briefcase } from 'lucide-react'; // Can I delete? 

export default function JobCard({ job, onApply, selected }) { // Jobcard is a reuseable component that gets info from the parent component
  return ( // everything in this return is what gets shown on the page
    <div // showing tailwind css style
      className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 transition-all ${
        selected 
          ? 'border-purple-400/60 shadow-lg shadow-purple-500/20' 
          : 'border-purple-500/20 hover:border-purple-400/40'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
            <Building2 className="w-4 h-4" />
            {job.company}
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <MapPin className="w-4 h-4" />
            {job.location}
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="text-xs font-semibold text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">
            {job.career}
          </span>
          <span className="text-xs font-semibold text-gray-400 bg-slate-700/50 px-3 py-1 rounded-full">
            {job.role}
          </span>
        </div>
      </div>

      {job.description && (
        <p className="text-gray-300 text-sm mb-4">{job.description}</p>
      )}

      {job.skills && (
        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-xs bg-slate-700/50 text-gray-300 px-2 py-1 rounded"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-gray-400">
          {job.salary && (
            <div className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              {job.salary}
            </div>
          )}
          {job.type && (
            <div className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              {job.type}
            </div>
          )}
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onApply(job);
          }}
          className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-all font-semibold"
        >
          Apply
        </button>
      </div>
    </div>
  );
}