import { useCallback, useMemo } from 'react';
import { useUpdateReviewMutation } from '../../redux/service/api';
import { ReviewForm } from '../review-form/component';

export const UpdateReviewFormContainer = ({ review, onSave, onCancel }) => {
    const { text, rating } = review;
    const [updateReview] = useUpdateReviewMutation();

    const handleSave = useCallback(
        (form) => {
            updateReview({
                ...review,
                ...form,
            });
            onSave();
        },
        [updateReview]
    );

    const formValue = useMemo(
        () => ({
            text: text,
            rating: rating,
        }),
        [ text, rating ]
    );

    return (
        <ReviewForm
            initialValue={formValue}
            onSaveClick={handleSave}
            onCancelClick={onCancel}
        />
    );
};