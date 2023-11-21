// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import classes from './create.module.css'
import CardHeader from '@mui/material/CardHeader'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Icon } from '@iconify/react'

const CreateOrder = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader></CardHeader>
          <p className={classes.title}>
            <Icon icon='clarity:document-line' />
            Nouveau Colis
          </p>
        </Card>
        <Card className={classes.card}>
          <CardHeader></CardHeader>
          <div className={classes.h1}>Adresse Email :</div>
          <div className={classes.h2}>
            <TextField id='outlined-basic' label='Adresse Email ' variant='outlined' />
          </div>
          <div className={classes.h1}>
            <label className='form-label'>Mot de passe :</label>
          </div>
          <div className={classes.h2}>
            <TextField id='outlined-basic' label='Mot de passe ' variant='outlined' />
          </div>
          <Stack className={classes.button} direction='row' spacing={2}>
            <Button variant='contained' color='secondary'>
              <Icon icon='ooui:check' />
              Confirmer
            </Button>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  )
}

export default CreateOrder
