import React, { useState } from 'react';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      // Replace the URL with your backend API later
      await fetch('http://localhost:5000/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      alert('Error submitting feedback');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {submitted && <p style={{ color: 'green' }}>Thanks for your feedback!</p>}
      <div>
        <label>Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '1rem' }}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          type="email"
          style={{ width: '100%', marginBottom: '1rem' }}
        />
      </div>
      <div>
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          style={{ width: '100%', marginBottom: '1rem' }}
        />
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;
