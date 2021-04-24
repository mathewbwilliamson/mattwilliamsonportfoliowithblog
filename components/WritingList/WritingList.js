import utilStyles from '../../styles/utils.module.css'
import styles from './WritingList.module.css'
import Link from 'next/link'
import Date from '../date'

export default function WritingList({allPostsData}) {
    return (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Writings</h2>
        <ul className={utilStyles.list}>
          {!!allPostsData && allPostsData.length > 0 && allPostsData.map(({ id, date, title, blurb }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <div>{blurb}</div>
            </li>
          ))}
        </ul>
      </section>
    )
  }