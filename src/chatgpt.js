// import OpenAI from "openai";

// // Initialize the OpenAI client with your API key
// const openai = new OpenAI({
//   apiKey: import.meta.env.VITE_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true, // This is required for client-side usage
// });

// export const getChatCompletion = async (prompt) => {
//   const completion = await openai.chat.completions.create({
//     messages: [{ role: "user", content: prompt }],
//     model: "gpt-3.5-turbo",
//   });

//   return completion.choices[0].message.content;
// };

export const getChatCompletion = async (prompt) => {
  console.log("API CALL::::", prompt)
  // try {
  //     const response = await fetch("https://api.openai.com/v1/chat/completions", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
  //       },
  //       body: JSON.stringify({
  //         model: "gpt-4o-mini",
  //         messages: [
  //           { 
  //             role: "system", 
  //             content: "You are an AI Mentor for 'Beyond The Code', a platform for people entering the tech industry without a traditional degree. Your tone is encouraging, knowledgeable, and supportive. You provide advice on soft skills, technical topics, and networking. Put a header and then bullet points of the best ways to reach that goal, then at the end ask if the user needs anymore assistance." 
  //           },
  //           { role: "user", content: input }
  //         ]
  //       })
  //     });
  //     const data = await response.json();
  //     const aiText = data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content
  //       ? data.choices[0].message.content.trim()
  //       : "Hmm, I'm not sure how to answer that.";
  //     const aiMsg = { sender: "ai", text: aiText };
  //     setMessages(prev => [...prev, aiMsg]);
  //   } catch (err) {
  //     console.error(err)
  //     setMessages(prev => [...prev, { sender: "ai", text: ":warning: Error: Unable to reach AI server." }])
  //   } finally {
  //     setLoading(false)
  //   }
}