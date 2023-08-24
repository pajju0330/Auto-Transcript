import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default function UploadFiles({ onImageDataChange, name }) {
  // {
  //   name: '',
  //   yearSem: '',
  //   image: null,

  // }
  const [reExam1, setReExam1] = React.useState('no')
  const [reExam2, setReExam2] = React.useState('no')
  const [reExam3, setReExam3] = React.useState('no')
  const [reExam4, setReExam4] = React.useState('no')
  const [formData,  setFormData] = React.useState([
    {
      name: '',
      yearSem: '',
      image: null,
    },
  ])
  React.useEffect(() => {
    console.log(formData)
  }, [formData])
  console.log(formData);
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Upload your Report cards
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant='subtitle1'>SEM-1</Typography>
          <TextField
            required
            type='file'
            id='Sem1'
            name='sem1'
            fullWidth
            value={formData[0].image}
            onChange={(e) => {
              setFormData([
                ...formData,
                {
                  name: name,
                  yearSem: 'sem1',
                  image: e.target.files[0],
                },
              ])
              onImageDataChange(formData)
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant='subtitle1'>SEM-2</Typography>
          <TextField
            required
            type='file'
            id='Sem2'
            name='sem2'
            fullWidth
            value={formData[0].image}
            onChange={(e) => {
              setFormData([
                ...formData,
                {
                  name: name,
                  yearSem: 'sem2',
                  image: e.target.files[0],
                },
              ])
              onImageDataChange(formData)
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color='secondary'
                name='reExam1'
                value='yes'
                onChange={() => {
                  if (reExam1 === 'no') setReExam1('yes')
                  else setReExam1('no')
                }}
              />
            }
            label='I had appeared for re-examination in my First Year'
          />
          {/* {console.log(reExam1)} */}
        </Grid>
        {reExam1 === 'yes' && (
          <>
            <Grid item xs={12} md={6}>
              <Typography variant='subtitle1'>Re-Exam-1</Typography>
              <TextField
                required
                type='file'
                id='reExam1'
                fullWidth
                value={formData[0].image}
                onChange={(e) => {
                  setFormData([
                    ...formData,
                    {
                      name: name,
                      yearSem: 'reexam1',
                      image: e.target.files[0],
                    },
                  ])
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}></Grid>
          </>
        )}
        <Grid item xs={12} md={6}>
          <Typography variant='subtitle1'>SEM-3</Typography>
          <TextField
            required
            type='file'
            id='Sem3'
            name='sem3'
            fullWidth
            value={formData[0].image}
            onChange={(e) => {
              setFormData([
                ...formData,
                {
                  name: name,
                  yearSem: 'sem3',
                  image: e.target.files[0],
                },
              ])
              onImageDataChange(formData)
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant='subtitle1'>SEM-4</Typography>
          <TextField
            required
            type='file'
            id='Sem4'
            name='sem4'
            fullWidth
            value={formData[0].image}
            onChange={(e) => {
              setFormData([
                ...formData,
                {
                  name: name,
                  yearSem: 'sem4',
                  image: e.target.files[0],
                },
              ])
              onImageDataChange(formData)
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color='secondary'
                name='reExam2'
                value='no'
                onChange={() => {
                  if (reExam2 === 'no') setReExam2('yes')
                  else setReExam2('no')
                }}
              />
            }
            label='I had appeared for re-examination in my Second Year'
          />
        </Grid>
        {reExam2 === 'yes' && (
          <>
            <Grid item xs={12} md={6}>
              <Typography variant='subtitle1'>Re-Exam-2</Typography>
              <TextField
                required
                type='file'
                id='reExam2'
                fullWidth
                value={formData[0].image}
                onChange={(e) => {
                  setFormData([
                    ...formData,
                    {
                      name: name,
                      yearSem: 'reexam2',
                      image: e.target.files[0],
                    },
                  ])
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}></Grid>
          </>
        )}
        <Grid item xs={12} md={6}>
          <Typography variant='subtitle1'>SEM-5</Typography>
          <TextField
            required
            type='file'
            id='Sem5'
            name='sem5'
            fullWidth
            value={formData[0].image}
            onChange={(e) => {
              setFormData([
                ...formData,
                {
                  name: name,
                  yearSem: 'sem5',
                  image: e.target.files[0],
                },
              ])
              onImageDataChange(formData)
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant='subtitle1'>SEM-6</Typography>
          <TextField
            required
            type='file'
            id='Sem6'
            name='sem6'
            fullWidth
            value={formData[0].image}
            onChange={(e) => {
              setFormData([
                ...formData,
                {
                  name: name,
                  yearSem: 'sem6',
                  image: e.target.files[0],
                },
              ])
              onImageDataChange(formData)
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color='secondary'
                name='reExam3'
                value='no'
                onChange={() => {
                  if (reExam3 === 'no') setReExam3('yes')
                  else setReExam3('no')
                }}
              />
            }
            label='I had appeared for re-examination in my Third Year'
          />
        </Grid>
        {reExam3 === 'yes' && (
          <>
            <Grid item xs={12} md={6}>
              <Typography variant='subtitle1'>Re-Exam-3</Typography>
              <TextField
                required
                type='file'
                id='reExam3'
                fullWidth
                value={formData[0].image}
                onChange={(e) => {
                  setFormData([
                    ...formData,
                    {
                      name: name,
                      yearSem: 'reexam3',
                      image: e.target.files[0],
                    },
                  ])
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}></Grid>
          </>
        )}
        <Grid item xs={12} md={6}>
          <Typography variant='subtitle1'>SEM-7</Typography>
          <TextField
            required
            type='file'
            id='Sem7'
            name='sem7'
            fullWidth
            value={formData[0].image}
            onChange={(e) => {
              setFormData([
                ...formData,
                {
                  name: name,
                  yearSem: 'sem7',
                  image: e.target.files[0],
                },
              ])
              onImageDataChange(formData)
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant='subtitle1'>SEM-8</Typography>
          <TextField
            required
            type='file'
            id='Sem8'
            name='sem8'
            fullWidth
            value={formData[0].image}
            onChange={(e) => {
              setFormData([
                ...formData,
                {
                  name: name,
                  yearSem: 'sem8',
                  image: e.target.files[0],
                },
              ])
              onImageDataChange(formData)
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                color='secondary'
                name='reExam4'
                value='no'
                onChange={() => {
                  if (reExam4 === 'no') setReExam4('yes')
                  else setReExam4('no')
                }}
              />
            }
            label='I had appeared for re-examination in my last Year'
          />
        </Grid>
        {reExam4 === 'yes' && (
          <>
            <Grid item xs={12} md={6}>
              <Typography variant='subtitle1'>Re-Exam-4</Typography>
              <TextField
                required
                type='file'
                id='reExam4'
                fullWidth
                value={formData[0].image}
                onChange={(e) => {
                  setFormData([
                    ...formData,
                    {
                      name: name,
                      yearSem: 'reexam4',
                      image: e.target.files[0],
                    },
                  ])
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}></Grid>
          </>
        )}
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color='secondary' name='saveCard' value='yes' />}
            label='I have submitted all the report cards'
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
