import classNames from 'classnames';
import { THEMES } from '../../context/theme/constants';
import { useTheme } from '../../context/theme/hooks';

import styles from './styles.module.scss';

export const Button = ({ children, onClick, disabled }) => {
    const { theme } = useTheme();

    return (
        <button
            className={classNames(styles.root, {
                [styles.disabled]: disabled,
                [styles.default]: theme === THEMES.default,
                [styles.alternative]: theme === THEMES.alternative
            })}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};