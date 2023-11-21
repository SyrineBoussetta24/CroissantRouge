import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import classes from './index.module.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Icon } from '@iconify/react'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },

  { field: 'nomdegouvernorat', headerName: 'Nom de gouvernorat', width: 250 }
]

const rows = [
  { id: 1, nomdegouvernorat: 'NABEUL' },
  { id: 2, nomdegouvernorat: 'TUNIS' },
  { id: 3, nomdegouvernorat: 'ARIANA' },
  { id: 4, nomdegouvernorat: 'BEJA' },
  { id: 5, nomdegouvernorat: 'BEN AROUS' },
  { id: 6, nomdegouvernorat: 'BIZERTE' },
  { id: 7, nomdegouvernorat: 'GABES' },
  { id: 8, nomdegouvernorat: 'GAFSA' },
  { id: 9, nomdegouvernorat: 'JENDOUBA' },
  { id: 10, nomdegouvernorat: 'KAIROUAN' },
  { id: 11, nomdegouvernorat: 'KASSERINE' },
  { id: 12, nomdegouvernorat: 'GEBILI' },
  { id: 13, nomdegouvernorat: 'KEF' },
  { id: 14, nomdegouvernorat: 'MAHDIA' },
  { id: 15, nomdegouvernorat: 'MANOUBA' },
  { id: 16, nomdegouvernorat: 'MEDENINE' },
  { id: 17, nomdegouvernorat: 'MONASTIR' },
  { id: 18, nomdegouvernorat: 'SFAX' },
  { id: 19, nomdegouvernorat: 'SIDI BOUZID' },
  { id: 20, nomdegouvernorat: 'SILIANA' },
  { id: 21, nomdegouvernorat: 'SOUSSE' },
  { id: 22, nomdegouvernorat: 'TATAOUINE' },
  { id: 23, nomdegouvernorat: 'ZAGHOUAN' },
  { id: 24, nomdegouvernorat: 'TOZEUR' }
]
const ACLPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item md={6} xs={12}>
        <Card className={classes.card}>
          <CardHeader></CardHeader>
          <div className={classes.b}>Nos comités</div>
        </Card>
        <Card className={classes.card}>
          <div className={classes.button}>
            <Stack direction='row' spacing={2}>
              <Button variant='outlined'>
                <Icon icon='ooui:add' />
                Ajouter{' '}
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
