import RadioButtonsGroup from "../RadioButtonsGroup/RadioButtonsGroup";
import MultiSelect from "../MultiSelect/MultiSelect";
import Box from "@mui/material/Box";

export default function Client() {
    return (
        <>
            <RadioButtonsGroup variant='client' />
            <Box>
                <MultiSelect number='1' />
                <MultiSelect number='2' />
                <MultiSelect number='3' />
                <MultiSelect number='4' />
            </Box>
        </>
    )
}