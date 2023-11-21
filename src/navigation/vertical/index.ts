// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'mdi:home-outline'
    },
    {
      title: 'Nouveau colis',
      path: '/orders/create',
      icon: 'mdi:email-outline'
    },
    {
      title: 'Liste des colis',
      path: '/orders',
      icon: 'mdi:email-outline'
    },

    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Les Gouvernorats',
      icon: 'mdi:shield-outline'
    },
    {
      title: 'livreurs',
      path: '/livreur/livreur',
      icon: 'mdi:email-outline'
    }
  ]
}

export default navigation
