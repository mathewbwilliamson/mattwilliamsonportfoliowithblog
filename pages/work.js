import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'

export default function Work() {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
            <div>
            <h1>Work History 👨‍💻</h1>
            
            <h3>Software Engineer @ Bank OZK <span className={utilStyles.smaller}>(Sep 2019 to Current)</span></h3>
            <p><span className={utilStyles.highlight}><span>Relevant Tech:</span></span> Typescript, React, Node, Express, Koa, SQL, C#, .Net Core, HTML/CSS</p>
            <p>
                <ul>
                    <li>Collaborated on a team of four people that later grew into eight people, <span className={utilStyles.highlight}><span>supporting 4 products for Bank OZK</span></span>, including building two entirely new products.</li>
                    <li>Two of the four products support the bank's large commercial real estate lending unit. The commercial loan construction deals that flow through these two products make up 65% of the bank's total revenue. One product is a complete asset management solution for these loans, and the other is a checklist application to ensure every loan closes with the documents that it requires.</li>
                    <li>Helped lead the effort to <span className={utilStyles.highlight}><span>reduce production incidents 50%</span></span> in one year.</li>
                    <li>Part of a team of four that made a new loan approval product. Every commercial loan funnels through this product, and the C-Suite uses it weekly to approve all +$20MM loans through the bank. We <span className={utilStyles.highlight}><span>built this in a speedy 4 months</span></span> with React/OvermindJS on the front end, with a C# .Net backend from start to finish.</li>
                    <li>Built a <span className={utilStyles.highlight}><span>new proof of concept in a record 1 week</span></span> to enable my team lead to successfully make a case for our team to take on a new large Commercial Lending project.</li>
                    <li>I am currently building the frontend of the new Commercial Lending platform with a team of four others. I chose the technologies, planned and built the overall frontend infrastructure, and <span className={utilStyles.highlight}><span>mentored other developers</span></span> to encourage best practices for performance and long-term stability.</li>
                </ul>
            </p>

            <h3>Lead Developer @ Eyes Open Studio <span className={utilStyles.smaller}>(Jun 2019 to Sep 2019)</span></h3>
            <p><span className={utilStyles.highlight}><span>Relevant Tech:</span></span> GatsbyJS, GraphQL, HTML/CSS</p>
            <p>
                <ul>
                    <li>Worked with a team for Vin di Bona Productions to develop the <span className={utilStyles.highlight}><span>new America’s Funniest Videos (AFV) website</span></span> in time for their 30th Anniversary. </li>
                </ul>
            </p>

            <h3>Website Developer @ 64 Labs <span className={utilStyles.smaller}>(Dec 2018 to Sep 2019)</span></h3>
            <p><span className={utilStyles.highlight}><span>Relevant Tech:</span></span> React/Redux, Node, jQuery, HTML/CSS</p>
            <p>
                <ul>
                    <li><span className={utilStyles.highlight}><span>Lead Developer</span></span> for the September 2019 Pandora Refresh, a rebranding of the entire Pandora Jewelry UK and US PWA Application.</li>
                    <li>In a 90-day turnaround, collaborated with the team to build the <span className={utilStyles.highlight}><span>Progressive Web App (PWA) for Pandora Jewelry UK</span></span> along with the later phases of the Pandora US PWA application under budget and on-time.</li>
                    <li><span className={utilStyles.highlight}><span>Mentored a team of junior developers</span></span> and helped delegate responsibilities while working closely with the Project Team to ensure quality and consistency of deliverables to clients.</li>
                    <li>In a 30-day turnaround, collaborated with the team to build the PWA for Pandora Jewelry DE (Germany).</li>
                    <li>Built and refactored various components (carousels, sliders, swipers, etc) for PWA applications utilizing React, Redux, and jQuery that enabled the mobile versions of those websites to be more <span className={utilStyles.highlight}><span>UX-friendly and more performant.</span></span></li>
                </ul>
            </p>

            <h3>Full Stack Apprentice @ Thinkful <span className={utilStyles.smaller}>(Aug 2018 to Dec 2018)</span></h3>
            <p><span className={utilStyles.highlight}><span>Relevant Tech:</span></span> React/Redux, Node, SQL, MongoDB, jQuery, HTML/CSS</p>
            <p>
                <ul>
                    <li>Built 3 projects along with a <a href="https://mattwilliamsonportfolio.netlify.app/">Personal Website</a>.</li>
                    <li>Taught coding workshops covering HTML, CSS, jQuery, ES6+, Git / GitHub, APIs, Data Structures.</li>
                    <li>Worked one-on-one with students on code challenges to bridge gaps in understanding.</li>
                </ul>
            </p>

            <h3>Franchise Business Consultant @ Mathnasium LLC <span className={utilStyles.smaller}>(May 2011 to Mar 2018)</span></h3>
            <p>
                <ul>
                    <li>Guided the growth of Florida from 5 franchise locations in 2011 to 64 franchise locations in 2018.</li>
                    <li>Awarded <span className={utilStyles.highlight}><span>Top FBC for 2016</span></span> due to best revenue growth in the company <span className={utilStyles.highlight}><span>(31% increase overall in 2016, 15% same-store sales increase in 2016)</span></span> along with a 23% increase in 2017.</li>
                    <li>Started as the <span className={utilStyles.highlight}><span>first of two Franchise Business Consultants</span></span> at Mathnasium and helped develop systems to help other team members, including general business Key Performance Indicator systems and Education Key Performance Indicator systems.</li>
                    <li>Developed and led breakout sessions and regional meetings for franchise partners, with topics such as <span className={utilStyles.highlight}><span>marketing, lead generation, lead conversion, education, training instructors/staff, controlling expenses</span></span>, etc. </li>
                </ul>
            </p>

            <h3>Owner/Operator @ Mathnasium of New Tampa <span className={utilStyles.smaller}>(Oct 2017 to Aug 2018)</span></h3>
            <p>
                <ul>
                    <li>Mathnasium is an international chain of more than 850 learning centers. Since I bought the center in 2007, it consistently achieved <span className={utilStyles.highlight}><span>double-digit growth every year</span></span>.</li>
                    <li>Running the business included marketing, sales, teaching mathematics to students, training instructors, training other franchisees, goal planning, and strategy.</li>
                    <li>Led Mathnasium of New Tampa to be in the <span className={utilStyles.highlight}><span>top 75 of Mathnasium centers (out of more than 800)</span></span>.</li>
                    <li>Personally <span className={utilStyles.highlight}><span>trained over 500 instructors</span></span> to become experts in the Mathnasium method of teaching.</li>
                </ul>
            </p>
        </div>
      </Layout>
    )
  }