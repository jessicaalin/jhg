import Typography from '@mui/material/Typography';

interface TextProps {
    variant: string;
    text: string;
}

export default function Text({ variant, text }: TextProps) {
    if (variant === 'label') {
        return (
            <Typography fontSize={14} fontWeight={700} color="#092C4C">{text}</Typography>
        )
    }
    if (variant === 'copy') {
        return (
            <Typography fontSize={14} fontWeight={400} color="#092C4C">{text}</Typography>
        )
    }
    if (variant === 'copy-success') {
        return (
            <Typography fontSize={14} fontWeight={600} color="#32AA51">{text}</Typography>
        )
    }
    if (variant === 'title') {
        return (
            <Typography fontSize={32} fontWeight={700} align="center" color="#092C4C">{text}</Typography>
        )
    }
    if (variant === 'heading') {
        return (
            <Typography fontSize={18} fontWeight={600} align="center" color="#092C4C">{text}</Typography>
        )
    }
    return <></>
}