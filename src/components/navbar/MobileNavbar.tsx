import { MobileLinkNavbar } from '@/components'
import { LinkRoutes } from '@/utils'
import clsx from 'clsx'

function MobileNavbar() {
  const classes = {
    items: clsx('grid grid-cols-5 items-end p-4 shadow-xl')
  }

  return (
    <nav className='sm:hidden'>
      <ul className={classes.items}>
        {LinkRoutes.map((link) => (
          <li key={link.id}>
            <MobileLinkNavbar title={link.title} href={link.href}>
              {link.title}
            </MobileLinkNavbar>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default MobileNavbar
