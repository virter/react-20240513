import { useCallback, useState } from 'react';
import { ReviewUserContainer } from '../review-user/container';
import { UpdateReviewFormContainer } from '../update-review-form/container';

import styles from './styles.module.scss';
import { Button } from '../button/component';

export const Review = ({ review }) => {
    if (!review) return;

    const [ isEditModeOn, setIsEditModeOn ] = useState(false);
    const { text, rating, userId } = review;

    const switchEditMode = useCallback(
        () => setIsEditModeOn((isOn) => !isOn),
        []
    );

    return (
        <div className={styles.root}>
            {isEditModeOn ? (
                <UpdateReviewFormContainer
                    review={review}
                    onSave={switchEditMode}
                    onCancel={switchEditMode}
                />
            ) : (
                <>
                    <div className={styles.text}>{text}</div>
                    <div>{rating}</div>
                    <ReviewUserContainer id={userId} />
                    <Button onClick={switchEditMode}>Edit</Button>
                </>
            )}
        </div>
    );
};