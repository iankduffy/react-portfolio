import '../stylesheets/styles.scss'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return(
    <Layout >
      <Component {...pageProps} />
    </Layout>
  )
}

// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp