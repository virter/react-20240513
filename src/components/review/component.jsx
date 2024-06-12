/* eslint-disable react/jsx-key */

import { ReviewUserContainer } from '../review-user/container';
import styles from './styles.module.scss';

export const Review = ({ review }) => {
    if (!review) return;

    const { text, userId } = review;

    return (
        <div className={styles.root}>
            <div className={styles.text}>
                {text}
            </div>
            <ReviewUserContainer id={userId} />
        </div>
    );
};