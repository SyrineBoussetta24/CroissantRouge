// ** MUI Imports
import { useState } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import TextField from '@mui/material/TextField'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import classes from './index.module.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import DeleteIcon from '@mui/icons-material/Delete'
import { Icon } from '@iconify/react'

const SecondPage = () => {
  const [governorate, setGovernorate] = useState('')

  const handleChange = (event: { target: { value: string } }) => {
    setGovernorate(event.target.value as string)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader></CardHeader>
          <p className={classes.title}>
            {' '}
            <Icon icon='clarity:document-line' />
            Gestion des colis
          </p>
        </Card>
        <Card>
          <CardHeader></CardHeader>
          <div className={classes.c}>Créer un nouveau colis</div>
          <div className={classes.d}>Nom du Client :</div>
          <div className={classes.A}>
            <TextField id='outlined-basic' label='Nom ' variant='outlined' className={classes.A} />
          </div>
          <div className={classes.d}>Prénom :</div>
          <div className={classes.A}>
            <TextField id='outlined-basic' label='Prénom' variant='outlined' className={classes.A} />
          </div>
          <div className={classes.d}>Téléphone :</div>
          <div className={classes.A}>
            <TextField id='outlined-basic' label='Téléphone' variant='outlined' className={classes.A} />
          </div>
          <div className={classes.d}>Gouvernorat :</div>

          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label' className={classes.d}>
                Gouvernorat
              </InputLabel>
              <Select
                className={classes.A}
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={governorate}
                label='Gouvernorat'
                onChange={handleChange}
              >
                <MenuItem value={1}>Nabeul</MenuItem>
                <MenuItem value={2}>Tunis</MenuItem>
                <MenuItem value={3}>Ariana</MenuItem>
                <MenuItem value={4}>Beja</MenuItem>
                <MenuItem value={5}>Ben Arous</MenuItem>
                <MenuItem value={6}>Bizerte</MenuItem>
                <MenuItem value={7}>Gabes</MenuItem>
                <MenuItem value={8}>Gafsa</MenuItem>
                <MenuItem value={9}>Jendouba</MenuItem>
                <MenuItem value={10}>Kairouan</MenuItem>
                <MenuItem value={11}>Kasserine</MenuItem>
                <MenuItem value={12}>Gebili</MenuItem>
                <MenuItem value={13}>Kef</MenuItem>
                <MenuItem value={14}>Mahdia</MenuItem>
                <MenuItem value={15}>Manouba</MenuItem>
                <MenuItem value={16}>Médenine</MenuItem>
                <MenuItem value={17}>Monastir</MenuItem>
                <MenuItem value={18}>Sfax</MenuItem>
                <MenuItem value={19}>Sidi Bouzid</MenuItem>
                <MenuItem value={20}>Siliana</MenuItem>
                <MenuItem value={21}>Sousse</MenuItem>
                <MenuItem value={22}>Tataouine</MenuItem>
                <MenuItem value={23}>Tozeur</MenuItem>
                <MenuItem value={24}>Zaghouan</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <div className={classes.d}>Adresse :</div>
          <div className={classes.A}>
            <TextField id='outlined-basic' label='Adresse' variant='outlined' className={classes.A} />
          </div>
          <div className={classes.d}>Montant total inclut la livraison :</div>
          <div className={classes.A}>
            <TextField id='outlined-basic' label='Montant TTC' variant='outlined' className={classes.A} />
          </div>
          <div className={classes.d}>Mode de paiement :</div>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label' className={classes.A}>
                Espèce
              </InputLabel>
              <Select className={classes.A}>
                <MenuItem value={1}>Espèce</MenuItem>
                <MenuItem value={2}>par chèque</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <FormGroup className={classes.d}>
            <FormControlLabel control={<Switch />} label='Echange' />
            <FormControlLabel control={<Switch />} label='Fragile' />
            <FormControlLabel control={<Switch />} label='Décharge' />
          </FormGroup>
          <div className={classes.p}>Produits</div>
          <div className={classes.v}>veuillez saisir les coordonnées des produits</div>
          <div className={classes.d}>Produit :</div>
          <div className={classes.A}>
            <TextField id='outlined-basic' label='Produit ' variant='outlined' className={classes.A} />
          </div>
          <div className={classes.d}>Quantité :</div>
          <div className={classes.A}>
            <TextField id='outlined-basic' label='Quantité ' variant='outlined' className={classes.A} />
          </div>
          <Stack direction='row' spacing={2} className={classes.button}>
            <Button variant='outlined' startIcon={<DeleteIcon />} color='error'>
              Supprimer
            </Button>
            <Button variant='outlined'>
              <Icon icon='ooui:add' />
              Nouveau produit
            </Button>
          </Stack>
        </Card>
      </Grid>
    </Grid>
  )
}

export default SecondPage
