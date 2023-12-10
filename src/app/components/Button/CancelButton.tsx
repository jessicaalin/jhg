import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export default function CancelButton() {
    const CancelButton = styled(Button)({
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
        <CancelButton variant="contained" disableRipple>
            Cancel
        </CancelButton>
    )
}
