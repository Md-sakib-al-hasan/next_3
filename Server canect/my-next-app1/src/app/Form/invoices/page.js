// pages/index.js
import { Thread } from '@/components/Thread'

export default function Home() {
    const initialMessages = [
        { message: 'Hello' },
        { message: 'How are you?' }
    ];

    return (
        <div>
            <h1>Message Thread</h1>
            <Thread messages={initialMessages} />
        </div>
    );
}
