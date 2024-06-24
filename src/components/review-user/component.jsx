/* eslint-disable react/jsx-key */
import styles from './styles.module.scss';

export const ReviewUser = ({ user }) => {
    const { name } = user;
    return (
        <div className={styles.user}>
            {name}
        </div>
    );
};