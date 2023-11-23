export const enum Routes {
  Home = '/',
  Discover = '/discover',
  Designer = '/designer',
  Cart = '/cart',
  Profile = '/profile',
  Login = '/login'
}

export const LinkRoutes = [
  { id: crypto.randomUUID(), href: Routes.Home, title: 'Home' },
  { id: crypto.randomUUID(), href: Routes.Discover, title: 'Discover' },
  { id: crypto.randomUUID(), href: Routes.Designer, title: 'Designer' },
  { id: crypto.randomUUID(), href: Routes.Cart, title: 'Cart' },
  { id: crypto.randomUUID(), href: Routes.Profile, title: 'Profile' }
]
