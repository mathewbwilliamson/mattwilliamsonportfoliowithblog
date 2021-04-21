import NavbarLinkContainer from './NavbarLinkContainer'
import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <h2>Matt Williamson</h2>
            <NavbarLinkContainer />
        </div>
    )
}