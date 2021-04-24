import Layout from '../components/Layout'
import { getSortedPostsData } from '../lib/posts'
import WritingList from '../components/WritingList/WritingList'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Writings({allPostsData}) {
    return (
      <Layout>
        <h1>Writings 📫</h1>
        <WritingList allPostsData={allPostsData} />
      </Layout> 
    )
  }