import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/api/messages') // will be proxied in dev
      .then(res => setMessages(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Messages</h1>
      <ul>
        {messages.map(msg => <li key={msg.id}>{msg.text}</li>)}
      </ul>
    </div>
  );
}

export default App;
