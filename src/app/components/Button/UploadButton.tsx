import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default function UploadButton() {
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
            Upload Manifest
        </UploadButton>
    )
}