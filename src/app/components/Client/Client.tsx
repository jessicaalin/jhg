import ClientRadioButtons from "../RadioButtons/ClientRadioButtons";
import MultiSelect from "../MultiSelect/MultiSelect";
import Box from "@mui/material/Box";

export default function Client() {
    return (
        <>
            <ClientRadioButtons />
            <Box>
                <MultiSelect number='1' />
                <MultiSelect number='2' />
                <MultiSelect number='3' />
                <MultiSelect number='4' />
            </Box>
        </>
    )
}