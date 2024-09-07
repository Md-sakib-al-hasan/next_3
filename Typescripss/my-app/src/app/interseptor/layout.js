'use client'

import { useSelectedLayoutSegment } from 'next/navigation'

const Interseptorlayout = ({ children }) => {
    const loginSegment = useSelectedLayoutSegment('auth')
    console.log(loginSegment)
    return (
        <div>
            {
                children
            }
        </div>
    );
};

export default Interseptorlayout;