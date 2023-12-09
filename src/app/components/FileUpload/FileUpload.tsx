import Button from '../Button/Button';
import Divider from '../Divider/Divider';
import ProgressBar from '../ProgressBar/ProgressBar';
import DescriptionIcon from '@mui/icons-material/Description';
import TaskIcon from '@mui/icons-material/Task';
import { useDropzone, FileWithPath } from 'react-dropzone';
import styles from './FileUpload.module.css';

export default function FileUpload() {

    const convertToMB = (bytes: any) => {
        return Number(bytes / Math.pow(1024, 2)).toFixed(2)
    }

    const Basic = () => {
        const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

        const fileUploadInfo = acceptedFiles.map((file: FileWithPath) => (
            <div className={styles.fileUploadInfoContainer}>
                <Divider variant="wide" />
                <div className={styles.fileUploadInfo}>
                    <TaskIcon className={styles.icon} />
                    <div className={styles.fileUploadInfoData}>
                        <div className={styles.fileUploadInfoText}>
                            <p className={styles.fileName}>{file.path}</p>
                            <p className={styles.unit}>{convertToMB(file.size)} MB</p>
                        </div>
                        <ProgressBar />
                    </div>
                </div>
                <Divider variant="wide" />
            </div>
        ));

        return (
            <>
                <section className={styles.container}>
                    <div {...getRootProps({ className: 'dropzone' })} className={styles.field}>
                        <input {...getInputProps()} />
                        <DescriptionIcon className={styles.icon} />
                        <p className={styles.placeholder}>Drag & Drop Here Or <b>Browse</b></p>
                    </div>
                    <Button variant="upload" text="Upload Manifest" />
                </section>
                {fileUploadInfo}
            </>
        );
    }

    return (
        <>
            <Basic />
        </>

    );
}
