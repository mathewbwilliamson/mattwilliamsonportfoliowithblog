import Layout from '../components/Layout'
import ContactGroup from '../components/Navbar/ContactGroup'

export default function Contact() {
    return (
      <Layout>
        <h1>Contact Me 📫</h1>
        <h2>Get in touch.</h2>
        <p>Want to work with me, be a guest on a podcast, or speak at your event? Send me a message via LinkedIn or email! I look forward to hearing from you.</p>
        <ContactGroup includeEmail={true} />
      </Layout>
    )
  }