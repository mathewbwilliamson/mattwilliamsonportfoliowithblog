import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <p>I'm currently <span className={utilStyles.highlight}><span>exploring new opportunities</span></span> and side projects.</p>
      <p>I've been a front-end developer, a mobile front-end developer, and a backend developer.</p>
      <p>In the past, I spent my days building Progressive Web Apps for large companies like Pandora Jewellery and Tommy Bahama, building banking applications for Bank OZK, and quite a few side projects.</p>
      <p>Throughout all, learning has been my passion and I'm most passionate about <span className={utilStyles.highlight}><span>Typescript</span></span>, <span className={utilStyles.highlight}><span>React</span></span>, and <span className={utilStyles.highlight}><span>Node</span></span>!</p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}