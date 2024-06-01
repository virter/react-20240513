import { useState } from 'react';
import { useEffect } from 'react';

export const ScrollProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const callback = () => {
            const progress = Math.round(100*window.scrollY/(document.documentElement.scrollHeight - document.documentElement.clientHeight));
            console.log(progress);
            setScrollProgress(progress);
        }

        window.addEventListener('scroll', callback);

        return () => {
            window.removeEventListener('scroll', callback);
        }
    });

    return (
        <div>
            <div style={{ width: `${scrollProgress}%`, height: '9px', backgroundColor: 'forestgreen' }} />
        </div>
    )
};