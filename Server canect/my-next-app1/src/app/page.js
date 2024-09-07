// app/page.js
'use client';

import { useState } from 'react';

const sendMessage = async (message) => {
  const response = await fetch('/api/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
};

export default function Page() {
  const [messages, setMessages] = useState([]);
  const [optimisticMessages, setOptimisticMessages] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = formData.get('message');

    const newMessage = { message };

    // Optimistically update the state
    setOptimisticMessages((prev) => [...prev, newMessage]);

    try {
      const response = await sendMessage(message);
      // Update messages state with the server response
      // setMessages((prev) => [...prev, response]);
      // Remove the message from optimisticMessages
    } catch (error) {
      console.error('Failed to send message', error);
      // Optionally revert optimistic update in case of error
      setOptimisticMessages((prev) =>
        prev.filter((msg) => msg.message !== message)
      );
    }
  };

  return (
    <div>
      {optimisticMessages.map((m, k) => (
        <div key={k} style={{ opacity: 0.6 }}>{m.message}</div>
      ))}
      {messages.map((m, k) => (
        <div key={k}>{m.message}</div>
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
