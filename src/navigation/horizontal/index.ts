// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => [
  {
    title: 'Home',
    path: '/home',
    icon: 'mdi:home-outline'
  },
  {
    title: 'Qui Sommes Nous',
    path: '/orders',
    icon: 'mdi:email-outline'
  },
  {
    title: 'Nos Principes',
    path: '/orders/create',
    icon: 'mdi:email-outline'
  },
  {
    path: '/acl',
    action: 'read',
    subject: 'acl-page',
    title: 'Nos Comités',
    icon: 'mdi:shield-outline'
  },
  {
    title: 'Contact',
    path: '/Contact/Contact',
    icon: 'mdi:email-outline'
  }
]

export default navigation
