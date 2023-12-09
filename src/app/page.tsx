"use client";
import styles from './page.module.css';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from './components/Button/Button';
import Text from './components/Text/Text';
import Select from './components/Select/Select';
import Divider from './components/Divider/Divider';
import ManifestImport from './components/ManifestImport/ManifestImport';
import Check from './components/Check/Check';
import ToleranceWindow from './components/ToleranceWindow/ToleranceWindow';
import RadioButtonsGroup from './components/RadioButtonsGroup/RadioButtonsGroup';
import Client from './components/Client/Client';
import Continue from './components/Continue/Continue';

// import { Raleway } from 'next/font/google'
// import CssBaseline from '@mui/material/CssBaseline';

// const raleway = Raleway({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-raleway'
// });

const theme = createTheme({
  typography: {
    fontFamily: ['Raleway', 'arial', 'sans-serif'].join(','),
  },
});

export default function Home() {
  return (
    // <main className={styles.main}>
    //   <div className={styles.center}>

    //   </div>
    // </main>
    // <ThemeProvider theme={theme}>

    <main className={styles.main}>
      <div className={styles.modal}>
        <ThemeProvider theme={theme}>
          {/* <CssBaseline /> */}
          <Button variant='close' />
          <Text variant='title' text='Document Upload' />
          <Divider my='10px' mx='auto' />
          <Box mt='30px' mx='68px' display='flex'>
            <Box mr='65px'>
              <Select />
              <Divider my='20px' />
              <ManifestImport />
              <Divider my='20px' />
              <Check variant='elapse' />
              <Divider my='20px' />
              <ToleranceWindow />
            </Box>
            <Box>
              <RadioButtonsGroup variant='split' />
              <Divider my='20px' />
              <Check variant='location' />
              <Divider my='20px' />
              <Client />
            </Box>
          </Box>
          <Continue />          
        </ThemeProvider>
      </div>
    </main >

  )
}