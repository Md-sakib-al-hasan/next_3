"use client"
import { useState } from 'react';
import sendMessage from './Sendmessage';

function ChatComponent() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        const newMessage = { role: 'user', content: input };
        const updatedMessages = [...messages, newMessage];
        setMessages(updatedMessages);

        const response = await sendMessage(updatedMessages);
        setMessages([...updatedMessages, ...response]);
        setInput('');
    };


    return (
        <div>
            <div>
                {messages.map((message, index) => (
                    <p key={index}>{message.content}</p>
                ))}
            </div>
            <input className='text-black'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
}

export default ChatComponent;
