import { useReducer } from 'react';
import { Rating } from '../rating/component';
import { Button } from '../button/component';

function reducer(state, { type, payload } = {}) {
    switch (type) {
        case 'setText':
            return {...state, text: payload };
        case 'setRating':
            return {...state, rating: payload };
        case 'reset':
            return DEFAULT_FORM_VALUE;
        default:
            return state;
    }
}

const DEFAULT_FORM_VALUE = {
    text: '',
    rating: 0
};

const maxRating = 7;

export const ReviewForm = ({
    initialValue = DEFAULT_FORM_VALUE,
    onSaveClick,
    onCancelClick,
}) => {
    const [form, dispatch] = useReducer(
        reducer,
        initialValue
    );

    const onChangeRating = (newRating) => {
        dispatch({ type: 'setRating', payload: newRating });
    };

    return (
        <div>
            <div>
                <span>Text: </span>
                <input
                    type="text"
                    value={form.text}
                    onChange={(event) => 
                        dispatch({ type: 'setText', payload: event.target.value })
                    }
                />
            </div><br/>
            <div>
                <span>Rating:</span>
                <Rating
                    value={form.rating}
                    maxRating={maxRating}
                    onChange={onChangeRating}
                />
                <br/>
            </div>
            <div>
                <Button onClick={() => onSaveClick({ ...initialValue, ...form })}>
                    Save
                </Button>
                {onCancelClick && <Button onClick={onCancelClick}>Cancel</Button>}
            </div>
        </div>
    )
}