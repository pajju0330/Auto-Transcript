import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTranscript } from '../actions/FormAction'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Paper from '@mui/material/Paper'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import AddressForm from './AddressForm'
import UploadFiles from './UploadFiles'
import Review from './Review'
import Wcelogo from '../components/wcelogo.png'
import './Checkout.css'
import * as API from '../API/FormRequest'

function Copyright() {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='http://www.walchandsangli.ac.in/'>
        Walchand College of Engineering
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

let steps = ['Application', 'Upload Report Cards', 'Payment Details']

const theme = createTheme()

export default function Checkout() {
  const dispatch = useDispatch()
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    prn: '',
    branch: '',
    yos: '',
    contactNo: '',
    copies: '',
    address: '',
    marksheet: '',
    provisionalCertificate: '',
    degreeCertificate: '',
    yesOrignals: '',
    yesForPhotos: '',
  })
  const [imageData, setImageData] = React.useState([
    {
      name: '',
      yearSem: '',
      image: null,
    },
  ])
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm onFormDataChange={setFormData} />
      case 1:
        return (
          <UploadFiles
            onImageDataChange={setImageData}
            name={formData.firstName}
          />
        )
      case 2:
        return <Review />
      default:
        throw new Error('Unknown step')
    }
  }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  if (screenWidth < 500) {
    steps = ['Application', 'Uploads', 'Payment']
  }
  const [activeStep, setActiveStep] = React.useState(0)

  const UploadImage = async () => {
    console.log(imageData.length);
    for (let i = 1; i < imageData.length; ++i) {
      const formData = new FormData()
      formData.append('image', imageData[i].image)
      formData.append('name', imageData[i].name)
      formData.append('yearSem', imageData[i].yearSem)
      console.log(imageData[i])
      console.log(formData)
      const res = await API.uploadFile(formData)
    }
  }
  const handleNext = () => {
    if (activeStep === 0) dispatch(createTranscript(formData))
    setActiveStep(activeStep + 1)
    if (activeStep === 1) {
      UploadImage()
    }
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <div className='container'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar
          position='absolute'
          color='default'
          elevation={0}
          sx={{
            position: 'relative',
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        >
          <Toolbar id='header'>
            <Typography variant='h6' color='inherit' noWrap>
              <img id='logo' src={Wcelogo} alt='WCE' />
            </Typography>
            <h1 className='heading'>Walchand College of Engineering, Sangli</h1>
          </Toolbar>
        </AppBar>
        <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
          <Paper
            variant='outlined'
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component='h1' variant='h4' align='center'>
              Issue of Transcript
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant='h5' gutterBottom>
                  Thank you for your request.
                </Typography>
                <Typography variant='subtitle1'>
                  Your requrest number is #2001539. We have emailed your request
                  confirmation, and will send you an update when your data is
                  verified
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant='contained'
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Paper>
          <Copyright />
        </Container>
      </ThemeProvider>
    </div>
  )
}