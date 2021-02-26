import {useEffect} from 'react'
import groq from 'groq'
import sanity from '../lib/sanity';
import RenderSections from '../components/renderStaticPagesComps'

const StaticPage = ({staticPageContent}) => {
  console.log(staticPageContent)
  return (
    <RenderSections sections={staticPageContent.page.content}/>
  )
}

const staticPageQuery = `*[_type == "routes" && slug.current == $slug][0] {
  page-> {
    ...,
    content[] {
      ...,
      _type == "articleFullWidthBanner" => {
        blogPost->
      },
      _type == "blogPostContainer" => {
        blogs[]-> {
          ...
        }
      },
    }
  }
}`

const homePageQuery = `*[_type == "siteSettings"][0] {
  "page": homePage -> {
    ...,
    content[] {
      ...,
      _type == "articleFullWidthBanner" => {
        blogPost->
      },
      _type == "blogPostContainer" => {
        blogs[]-> {
          ...
        }
      },
    }
  }
}`


StaticPage.getInitialProps = async ({query}) => {
  console.log("gere")
  let { slug = "" } = query
  slug = slug.toLowerCase()


  if (!query) {
    console.error('no query')
    return
  }

  let staticPageContent

  if (slug && slug === '/') { 
    staticPageContent = await sanity.fetch(homePageQuery, {slug})
  } else if (slug && slug !== '/') {
    staticPageContent = await sanity.fetch(staticPageQuery, {slug})
  } else {
    console.log("error")
  }

  
  // const mainMenu = await sanity.fetch(mainMenuQuery);
  // const siteSettings = await sanity.fetch(siteSettingsQuery);
  // // const footerMenu = await sanity.fetch(footerMenuQuery);

  return { 
    staticPageContent
  }
}

export default StaticPage