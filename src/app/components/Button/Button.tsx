import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import styles from './Button.module.css';

interface MyButtonProps {
    variant: string;
    text?: string;
}

export default function MyButton({ variant, text }: MyButtonProps) {
    if (variant === 'close') {
        return (
            <button aria-label='close' className={styles.closeButton}>
                <CloseRoundedIcon className={styles.closeIcon} />
            </button>
        )
    }
    if (variant === 'upload') {
        const UploadButton = styled(Button)({
            width: 202,
            height: 33,
            boxShadow: 'none',
            textTransform: 'none',
            fontSize: 14,
            fontWeight: 500,
            padding: '6px 12px',
            border: '1px solid',
            lineHeight: 1.5,
            backgroundColor: '#1C3E6E',
            borderColor: '#1C3E6E',
            '&:hover': {
                boxShadow: 'none',
                backgroundColor: '#254e89',
                borderColor: '#254e89',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#254e89',
                borderColor: '#254e89',
            },
            '&:focus': {
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
            },
        })
        return (
            <UploadButton variant="contained" disableRipple>
                {text}
            </UploadButton>
        )
    }
    if (variant === 'continue') {
        const UploadButton = styled(Button)({
            width: 242,
            height: 48,
            boxShadow: 'none',
            textTransform: 'none',
            fontSize: 14,
            fontWeight: 600,
            padding: '6px 12px',
            border: '1px solid',
            lineHeight: 1.5,
            backgroundColor: '#1C3E6E',
            borderColor: '#1C3E6E',
            borderRadius: '7px',
            '&:hover': {
                boxShadow: 'none',
                backgroundColor: '#254e89',
                borderColor: '#254e89',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#254e89',
                borderColor: '#254e89',
            },
            '&:focus': {
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
            },
        })
        return (
            <UploadButton variant="contained" disableRipple>
                {text}
            </UploadButton>
        )
    }
    if (variant === 'cancel') {
        const UploadButton = styled(Button)({
            width: 242,
            height: 48,
            boxShadow: 'none',
            textTransform: 'none',
            color: '#FA9D26',
            fontSize: 14,
            fontWeight: 600,
            padding: '6px 12px',
            border: '2px solid',
            lineHeight: 1.5,
            backgroundColor: '#FFFFFF',
            borderColor: '#FA9D26',
            borderRadius: '7px',
            '&:hover': {
                boxShadow: 'none',
                backgroundColor: '#FFEDD6',
                borderColor: '#FA9D26',
            },
            '&:active': {
                boxShadow: 'none',
                backgroundColor: '#FFfFFF',
                borderColor: '#254e89',
            },
            '&:focus': {
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
            },
        })
        return (
            <UploadButton variant="contained" disableRipple>
                {text}
            </UploadButton>
        )
    }
}