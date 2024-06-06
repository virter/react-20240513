export const Rating = ({ value, maxRating = 5, onChange }) => {
    return (
        <div>
            {new Array(maxRating).fill(null).map((_, index) => (
                <button
                    key={index}
                    disabled={value === index + 1}
                    onClick={() => onChange(index + 1)}>
                    {index + 1}
                </button>
            ))}
        </div>
    );
};