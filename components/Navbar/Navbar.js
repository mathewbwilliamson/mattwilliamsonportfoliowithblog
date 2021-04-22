import Link from 'next/link'
import styles from './Navbar.module.css'
import NavbarLinkContainer from './NavbarLinkContainer'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <h2><Link href='/'>Matt Williamson</Link></h2>
            <NavbarLinkContainer />
        </div>
    )
}