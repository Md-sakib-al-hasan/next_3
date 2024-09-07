'use client'

import { useFormStatus } from 'react-dom'

export function SubmitButton() {
    const { pending } = useFormStatus()
    console.log(pending)

    return (
        <button type="submit" disabled={pending}>
            Add
        </button>
    )
}