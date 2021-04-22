import { SiLinkedin, SiGithub } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import styles from './Navbar.module.css'

export default function ContactGroup({ includeEmail }) {
    const contactStyles = includeEmail ? styles.pageContactGroup : styles.contactGroup

    return (
        <div className={contactStyles}>
            {!!includeEmail && <a href='mailto:mathewbwilliamson@gmail.com'><HiOutlineMail size={'1.5rem'} /></a>}
            <a href='https://www.linkedin.com/in/matt-b-williamson/'><SiLinkedin size={'1.5rem'} /></a>
            <a href='https://github.com/mathewbwilliamson'><SiGithub size={'1.5rem'} /></a>
        </div>
        );
    };