// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import classes from './index.module.css'
import { useRouter } from 'next/router'

import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { Icon } from '@iconify/react'

import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography'

const Home = () => {
  const router = useRouter()

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader></CardHeader>
          <div className={classes.b}>Bienvenue au Croissant Rouge </div>

          <Stack className={classes.button} direction='row' spacing={2}>
            <Button type='button' onClick={() => router.push('/orders')} variant='contained' color='secondary'>
              <Icon icon='ooui:article-redirect-rtl' />
              Nos principes{' '}
            </Button>
            <Button type='button' onClick={() => router.push('/orders/create')} variant='contained' color='secondary'>
              <Icon icon='ooui:article-redirect-rtl' />
              Qui sommes nous ?{' '}
            </Button>
            <Button type='button' onClick={() => router.push('/acl/')} variant='contained' color='secondary'>
              <Icon icon='ooui:article-redirect-rtl' />
              Nos comités{' '}
            </Button>
            <Button
              type='button'
              onClick={() => router.push('/livreur/livreur/')}
              variant='contained'
              color='secondary'
            >
              <Icon icon='ooui:article-redirect-rtl' />
              Contact{' '}
            </Button>
          </Stack>
          <div className={classes.avis}>
            <Typography sx={{ fontWeight: 500 }}>Votre avis</Typography>
            <Rating value={null} name='no-value' />
          </div>
        </Card>
      </Grid>
    </Grid>
  )
}
export default Home
