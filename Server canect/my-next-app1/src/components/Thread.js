// components/Thread.js
'use client'

import React, { startTransition, useState } from 'react'
import { useOptimistic } from 'react'
import send from './send'

export function Thread({ messages }) {
    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
        messages,
        (state, newMessage) => [...state, { message: newMessage }]
    )
    const [error, setError] = useState(null)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        const message = formData.get('message')

        // Optimistically update state
        startTransition(() => {
            addOptimisticMessage(message)
        })


        await send({ message })
        setError(null) // Clear error if successful

    }

    return (
        <div>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            {optimisticMessages.map((m, index) => (
                <div key={index}>{m.message}</div>
            ))}
            <form onSubmit={handleSubmit}>
                <input type="text" name="message" />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
