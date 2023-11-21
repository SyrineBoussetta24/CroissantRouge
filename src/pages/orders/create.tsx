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
            {' '}
            <Icon icon='clarity:document-line' />
            Qui sommes nous ?
          </p>
        </Card>
        <Card>
          <CardHeader></CardHeader>
          <div className={classes.c}>Le Croissant Rouge Tunisien :</div>
          <div>
            est une organisation d’intérêt public, créée le 7 octobre 1956, et reconnue par décret du 6 mai 1957 comme
            organisation bénévole d’aide et de secours auxiliaire des pouvoirs publics dans le domaine humanitaire,
            conformément aux Conventions de Genève de 1949 et ses protocoles additionnels. Le Croissant Rouge Tunisien
            est devenu membre du mouvement International de la Croix Rouge et du Croissant Rouge le 13 septembre 1957.
          </div>
        </Card>
      </Grid>
    </Grid>
  )
}

export default CreateOrder
