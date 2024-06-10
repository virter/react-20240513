/* eslint-disable react/jsx-key */

import { ReviewUserContainer } from '../review-user/container';
import styles from './styles.module.scss';

export const Review = ({ review }) => {
    const { text, userId } = review;
    console.log('review user id', userId);

    return (
        <div className={styles.root}>
            <div className={styles.text}>
                {text}
            </div>
            <ReviewUserContainer id={userId} />
        </div>
    );
};