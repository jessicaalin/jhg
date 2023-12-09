import Text from "../Text/Text";
import FileUpload from "../FileUpload/FileUpload";

export default function ManifestImport() {
    return (
        <>
            <Text variant="label" text="Select a manifest you'd like to import" />
            <FileUpload />
        </>

    )
}