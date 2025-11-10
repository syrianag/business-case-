import { useState, useRef } from 'react' // handles file upload UI and logic 
import { Upload, FileText } from 'lucide-react'

export default function CertificateUploader({ onCertificateValidated }) {
  const [uploadedFile, setUploadedFile] = useState(null)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isValidating, setIsValidating] = useState(false)
  const fileInputRef = useRef(null)

  const handleFileUpload = async (file) => {
    if (!file) return
    setUploadedFile(file)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 10
      })
    }, 200)

    // Simulate file validation
    setIsValidating(true)
    setTimeout(() => {
      setIsValidating(false)
      
      // Create a new certification entry
      const newCert = {
        id: `upload-${Date.now()}`,
        title: file.name.replace(/\.[^/.]+$/, ""), // Remove file extension
        provider: "Uploaded Certificate",
        documentUrl: URL.createObjectURL(file),
        validationStatus: "verified",
        verificationDate: new Date().toISOString(),
        isUploaded: true
      }

      onCertificateValidated(newCert)
      setUploadedFile(null)
      setUploadProgress(0)
    }, 3000)
  }

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileUpload(file)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const file = e.dataTransfer.files?.[0]
    if (file) {
      handleFileUpload(file)
    }
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <Upload className="w-6 h-6 text-purple-400" />
        <h3 className="text-xl font-bold text-white">Upload Certificate</h3>
      </div>
      <p className="text-gray-400 mb-4">
        Upload your certification document for AI verification.
      </p>

      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`border-2 border-dashed border-purple-500/30 rounded-lg p-8 text-center cursor-pointer transition-all
          ${uploadedFile ? 'bg-purple-500/10' : 'hover:border-purple-400/60 hover:bg-purple-500/5'}`}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.jpg,.jpeg,.png"
          onChange={handleFileSelect}
          className="hidden"
        />
        
        {uploadedFile ? (
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2">
              <FileText className="w-6 h-6 text-purple-400" />
              <span className="text-purple-400 font-medium">{uploadedFile.name}</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div
                className="bg-purple-500 h-2 rounded-full transition-all"
                style={{ width: `${uploadProgress}%` }}
              />
            </div>
            {isValidating && (
              <p className="text-purple-400">Validating certificate...</p>
            )}
          </div>
        ) : (
          <div>
            <Upload className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <p className="text-gray-300 font-medium">
              Drag & drop your certificate here
            </p>
            <p className="text-gray-400 text-sm mt-1">
              or click to browse files
            </p>
            <p className="text-gray-500 text-xs mt-4">
              Supported formats: PDF, JPG, PNG
            </p>
          </div>
        )}
      </div>
    </div>
  )
}