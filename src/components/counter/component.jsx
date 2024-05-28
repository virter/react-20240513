/* eslint-disable react/jsx-key */

export const Counter = ({ value, min = 0, max = 5, increment, decrement }) => {
    return (
        <div>
            <button onClick={() => decrement() } disabled={value === min}>
                -
            </button>
            {value}
            <button onClick={() => increment() } disabled={value === max}>
                +
            </button>
        </div>
    );
};