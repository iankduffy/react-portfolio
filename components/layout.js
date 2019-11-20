import Head from 'next/head'
import '../css/styles.css'
import Nav from '../components/nav'

export default ({ children, title = 'Ian Duffy | Web Developer' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <div className="u-bg-grey">
      <Nav/>
      <main>
       {children}
      </main>
    </div>
  </div>
)