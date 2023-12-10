"use client";
import styles from './page.module.css';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CloseButton from './components/Button/CloseButton';
import Text from './components/Text/Text';
import Select from './components/Select/Select';
import Divider from './components/Divider/Divider';
import FileUpload from './components/FileUpload/FileUpload';
import Check from './components/Check/Check';
import ToleranceWindow from './components/ToleranceWindow/ToleranceWindow';
import SplitRadioButtons from './components/RadioButtons/SplitRadioButtons';
import Client from './components/Client/Client';
import Continue from './components/Continue/Continue';

const theme = createTheme({
  typography: {
    fontFamily: ['Raleway', 'arial', 'sans-serif'].join(','),
  },
});

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.modal}>
        <ThemeProvider theme={theme}>
          <CloseButton />
          <Text variant='title' text='Document Upload' />
          <Divider my='10px' mx='auto' />
          <Box mt='30px' mx='68px' display='flex'>
            <Box mr='65px'>
              <Select />
              <Divider my='20px' />
              <FileUpload />
              <Divider my='20px' />
              <Check variant='elapse' />
              <Divider my='20px' />
              <ToleranceWindow />
            </Box>
            <Box>
              <SplitRadioButtons />
              <Divider my='20px' />
              <Check variant='location' />
              <Divider my='20px' />
              <Client />
            </Box>
          </Box>
          <Continue />
        </ThemeProvider>
      </div>
    </main>
  )
}