import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import { ActiveLink } from "./active-link/ActiveLink"

const navItems: NavItem[] = [
  { path: '/about', text: 'About'},
  { path: '/pricing', text: 'Pricing'},
  { path: '/contact', text: 'Contact'},
  
]

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={'/'} className="flex items-center">
        <HomeIcon className="mr-2"></HomeIcon>
        <span>Home</span>
      </Link>

        <div className="flex flex-1"></div>

        {
          navItems.map((navItem: NavItem ) => (

            <ActiveLink key={navItem.path} {...navItem} />


          ))
        }

    </nav>
  )
}


export interface NavItem {
  path: string,
  text: string
}
