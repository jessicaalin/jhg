import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import styles from './CloseButton.module.css';

export default function CloseButton() {
    return (
        <button aria-label='close' className={styles.button}>
            <CloseRoundedIcon className={styles.icon} />
        </button>
    )
}