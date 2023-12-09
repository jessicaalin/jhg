import RadioButtons from '../RadioButtons/RadioButtons'

interface RadioButtonsGroupProps {
    variant: string;
}

export default function RadioButtonsGroup({ variant }: RadioButtonsGroupProps) {
    if (variant === 'split') {
        return (
            <RadioButtons label='Split schedule using social distancing?' optOneValue='yes' optOneLabel='Yes' optTwoValue='no' optTwoLabel='No' />
        )
    }
    if (variant === 'client') {
        return (
            <RadioButtons label='Client:' optOneValue='single' optOneLabel='Single' optTwoValue='multiple' optTwoLabel='Multiple' />
        )
    }
}