import React, { useState } from 'react'

const ContactPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  const validate = () => {
    const errs = {}
    if (!name.trim()) errs.name = 'Name is required'
    if (!email.trim()) errs.email = 'Email is required'
    else if (!/^\S+@\S+\.\S+$/.test(email)) errs.email = 'Enter a valid email'
    if (!message.trim()) errs.message = 'Message is required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSuccess('')
    if (!validate()) return

    // For now we simulate submit and show a success message.
    // Replace this fetch with a real API endpoint when available.
    const payload = { name, email, message }
    console.log('Submitting contact:', payload)
    setTimeout(() => {
      setSuccess('Thanks! Your message has been sent.')
      setName('')
      setEmail('')
      setMessage('')
      setErrors({})
    }, 600)
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-semibold text-gray-800">Contact Us</h1>
        <p className="mt-2 text-gray-600">Have a question or feedback? We'd love to hear from you.</p>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-medium text-gray-700">Get in touch</h2>
              <p className="text-sm text-gray-500 mt-1">Email us at <span className="font-medium text-indigo-600">support@foodiefrenzy.example</span></p>
            </div>

            <div className="space-y-2">
              <div className="flex items-start">
                <div className="text-gray-700 font-medium">Address</div>
              </div>
              <div className="text-gray-500 text-sm">123 Foodie Lane, Flavor Town</div>
            </div>

            <div className="mt-4">
              <div className="w-full h-40 bg-gray-100 rounded-md flex items-center justify-center text-gray-400">Map placeholder</div>
            </div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            {success && <div className="p-3 text-sm text-green-800 bg-green-50 rounded">{success}</div>}

            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${errors.name ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-indigo-200'}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                className={`mt-1 block w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 ${errors.email ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-indigo-200'}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                type="email"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                className={`mt-1 block w-full rounded-md border px-3 py-2 h-28 resize-y focus:outline-none focus:ring-2 ${errors.message ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-indigo-200'}`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="How can we help?"
              />
              {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
            </div>

            <div className="flex items-center justify-between">
              <button type="submit" className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Send Message</button>
              <button type="button" onClick={() => { setName(''); setEmail(''); setMessage(''); setErrors({}); setSuccess('') }} className="text-sm text-gray-500 hover:underline">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage