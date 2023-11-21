// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

//import classes from './edit.module.css'
import CardHeader from '@mui/material/CardHeader'

const SecondPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='List des colis 🙌'></CardHeader>
        </Card>
        <Card>
          <CardHeader></CardHeader>
        </Card>
      </Grid>
    </Grid>
  )
}

export default SecondPage
