import Link from 'next/link'
import ContactGroup from './ContactGroup'
import styles from './Navbar.module.css'

export default function NavbarLinkContainer() {
    return (
        <div className={styles.linkContainer}>
            <Link href='/work'>Work</Link>
            <Link href='/writings'>Writing</Link>
            <Link href='/contact'>Contact</Link>
            <ContactGroup />
        </div>
    )
}