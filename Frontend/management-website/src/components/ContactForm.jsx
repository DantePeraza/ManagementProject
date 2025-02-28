"use client"

import { useState } from "react"

export default function ContactForm(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("Data", name, email, message)
  }

  return(
    <>
      <div className="flex justify-center items-center text-center">
        
        <div className="Form">
          <form onSubmit={onSubmit}>
            <div className="form-header">
              <h1>Contact Form</h1>
            </div>
            <div>
              
              <input id="submit-name" onChange={(e) => setName(e.target.value)}placeholder="Name" type="text" value={name} />
            </div>
            <div>
              
              <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" name="email" id="submit-email" value={email}/>
            </div>
            <div>
              
              <textarea name="message" onChange={(e) => setMessage(e.target.value)}placeholder="Message" id="submit-area" value={message}></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
} 