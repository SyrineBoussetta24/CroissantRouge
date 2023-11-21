import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import classes from './livreur.module.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Icon } from '@iconify/react'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'nomdulivreur', headerName: 'Nom du livreur', width: 250 },
  { field: 'Gouvernorat', headerName: 'Gouvernorat', width: 250 },
  { field: 'SonTéléphone', headerName: 'Son Téléphone', width: 250 }
]

const rows = [
  { id: 1, nomdulivreur: 'Ahmed', Gouvernorat: 'NABEUL', SonTéléphone: 94563452 },
  { id: 2, nomdulivreur: 'Mohamed', Gouvernorat: 'TUNIS', SonTéléphone: 24532198 },
  { id: 3, nomdulivreur: 'Sami', Gouvernorat: 'ARIANA', SonTéléphone: 98654325 },
  { id: 4, nomdulivreur: 'Youssef', Gouvernorat: 'BEJA', SonTéléphone: 21453768 },
  { id: 5, nomdulivreur: 'mohamed ali', Gouvernorat: 'BEN AROUS', SonTéléphone: 95436750 },
  { id: 6, nomdulivreur: 'Amine', Gouvernorat: 'BIZERTE', SonTéléphone: 96444333 },
  { id: 7, nomdulivreur: 'Salim', Gouvernorat: 'GABES', SonTéléphone: 92315479 },
  { id: 8, nomdulivreur: 'Mohamed', Gouvernorat: 'GAFSA', SonTéléphone: 93564976 },
  { id: 9, nomdulivreur: 'Chokri', Gouvernorat: 'JENDOUBA', SonTéléphone: 92431265 },
  { id: 10, nomdulivreur: 'Nabil', Gouvernorat: 'KAIROUAN', SonTéléphone: 26543345 },
  { id: 11, nomdulivreur: 'Ahmed', Gouvernorat: 'KASSERINE', SonTéléphone: 22986754 },
  { id: 12, nomdulivreur: 'Aziz', Gouvernorat: 'GEBILI', SonTéléphone: 20965487 },
  { id: 13, nomdulivreur: 'Amen', Gouvernorat: 'KEF', SonTéléphone: 22342555 },
  { id: 14, nomdulivreur: 'Youssef', Gouvernorat: 'MAHDIA', SonTéléphone: 21234547 },
  { id: 15, nomdulivreur: 'Louay', Gouvernorat: 'MANOUBA', SonTéléphone: 98654376 },
  { id: 16, nomdulivreur: 'Malek', Gouvernorat: 'MEDENINE', SonTéléphone: 23987654 },
  { id: 17, nomdulivreur: 'Firas', Gouvernorat: 'MONASTIR', SonTéléphone: 23334445 },
  { id: 18, nomdulivreur: 'Hamza', Gouvernorat: 'SFAX', SonTéléphone: 98765433 },
  { id: 19, nomdulivreur: 'Mohamed', Gouvernorat: 'SIDI BOUZID', SonTéléphone: 97659843 },
  { id: 20, nomdulivreur: 'Habib', Gouvernorat: 'SILIANA', SonTéléphone: 28976437 },
  { id: 21, nomdulivreur: 'Anas', Gouvernorat: 'SOUSSE', SonTéléphone: 20132454 },
  { id: 22, nomdulivreur: 'Jamil', Gouvernorat: 'TATAOUINE', SonTéléphone: 97634597 },
  { id: 23, nomdulivreur: 'Mohsenn', Gouvernorat: 'ZAGHOUAN', SonTéléphone: 92345421 },
  { id: 24, nomdulivreur: 'Amine', Gouvernorat: 'TOZEUR', SonTéléphone: 98754356 }
]
const ACLPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item md={6} xs={12}>
        <Card className={classes.card}>
          <CardHeader></CardHeader>
          <div className={classes.b}>LES LIVREURS</div>
        </Card>
        <Card className={classes.card}>
          <div className={classes.button}>
            <Stack className={classes.button} direction='row' spacing={2}>
              <Button variant='contained' color='secondary'>
                <Icon icon='ooui:check' />
                Confirmer
              </Button>
            </Stack>
          </div>
        </Card>
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            className={classes.card}
          />
        </div>
      </Grid>
    </Grid>
  )
}

export default ACLPage
