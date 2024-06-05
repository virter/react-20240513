import { useReducer } from 'react';
import { Rating } from '../rating/component';
import { Button } from '../button/component';

function reducer(state, { type, payload } = {}) {
    switch (type) {
        case 'setName':
            return {...state, name: payload };
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
    name: '',
    text: '',
    rating: 0
};

const maxRating = 7;

export const NewReviewForm = () => {
    const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    const onChangeRating = (newRating) => {
        dispatch({ type: 'setRating', payload: newRating });
    };

    return (
        <div>
            <div>
                <span>Name: </span>
                <input
                    type="text"
                    value={form.name}
                    onChange={(event) => 
                        dispatch({ type: 'setName', payload: event.target.value })
                    }
                />
            </div><br/>
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
                <Button
                    onClick={(event) => {
                        dispatch({ type: 'reset' });
                    }}
                >
                    Save
                </Button>
            </div>
        </div>
    )
}