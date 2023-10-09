import { DesktopLinkNavbar } from '@/components'
import { Routes } from '@/utils'

function DesktopNavbar() {
  return (
    <nav className='hidden sm:block'>
      <ul className='flex gap-x-8'>
        <li>
          <DesktopLinkNavbar href={Routes.Discover}>Discover</DesktopLinkNavbar>
        </li>
        <li>
          <DesktopLinkNavbar href={Routes.Designer}>Designer</DesktopLinkNavbar>
        </li>
      </ul>
    </nav>
  )
}

export default DesktopNavbar
