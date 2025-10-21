export default function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-slate-900 border border-purple-500/20 rounded-xl shadow-lg max-w-lg w-full m-4">
        <div className="p-4 sm:p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
