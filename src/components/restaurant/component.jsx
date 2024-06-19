/* eslint-disable react/jsx-key */

import { MenuContainer } from '../menu/container';
import { NewReviewFormContainer } from '../new-review-form/container';
import { ReviewsContainer } from '../reviews/container';
import { Tab } from '../tab/component';

export const Restaurant = ({ restaurant }) => {
    const {
        id,
        name,
        img,
        description,
    } = restaurant;

    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            {img && <img src={img} width="400"/>}

            <div>
                <Tab title='Mеню' to={`/restaurants/${id}/menu`} />
                <Tab title='Отзывы' to={`/restaurants/${id}/reviews`} />
            </div>
        </div>
    );
};
