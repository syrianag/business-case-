/**
 * Certificate validation service
 * This is a mock service that simulates certificate validation.
 * In a real application, this would interact with an AI service to validate certificates.
 */

export const validateCertificate = async (file) => {

    try {

        const data = await response.json()
      const aiText = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content
        ? data.choices[0].message.content.trim()
        : "Sorry, I couldn’t generate a response right now."
      setMessages(prev => [...prev, { sender: "ai", text: aiText }])
    } catch (error) {
      console.error("AI Error:", error)
      setMessages(prev => [...prev, { sender: "ai", text: ":warning: Unable to reach the AI right now." }])
    } finally {
      setLoading(false)
    }


async function handleSend (e) {
  if (!input.trim()) return
  console.log("Sending message:", input)
    const userMsg = { sender: "user", text: input }
    setMessages(prev => [...prev, userMsg])
    setInput("")
    setLoading(true)
}

async function handleSend (e) {
  if (!input.trim()) return
  console.log("Sending message:", input)
    const userMsg = { sender: "user", text: input }
    setMessages(prev => [...prev, userMsg])
    setInput("")
    setLoading(true)
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
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
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock successful validation
      resolve({
        isValid: true,
        metadata: {
          title: file.name.replace(/\.[^/.]+$/, ""),
          provider: "Verified Certificate",
          issueDate: new Date().toISOString(),
          validationStatus: "verified",
          confidenceScore: 0.95
        }
      })
    }, 2000)
  })
}

export const createCertificateFromValidation = (validationResult, file) => {
  return {
      id: `upload-${Date.now()}`,
      title: validationResult.metadata.title,
      provider: validationResult.metadata.provider,
      documentUrl: URL.createObjectURL(file),
      validationStatus: validationResult.metadata.validationStatus,
      verificationDate: new Date().toISOString(),
      issueDate: validationResult.metadata.issueDate,
    confidenceScore: validationResult.metadata.confidenceScore,
    isUploaded: true
  }
}



    //  <div className="input-area">
    //           <input
    //             type="text"
    //             placeholder="Ask about Chunking..."
    //             value={input}
    //             onChange={(e) => setInput(e.target.value)}
    //             onKeyDown={(e) => e.key === "Enter" && handleSend()}
    //           />
    //           <button onClick={(e) => handleSend(e)} disabled={loading}>
    //             Send
    //           </button>
    // </div>

   


