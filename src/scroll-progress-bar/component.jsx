import { useScrollProgress } from "../hooks/use-scroll"

export const ScrollProgressBar = () => {
    const scrollProgress = useScrollProgress();

    return (
        <div>
            <div
                style={{
                    width: `${scrollProgress}%`,
                    height: '9px',
                    backgroundColor: 'forestgreen'
                }}
            />
        </div>
    )
};