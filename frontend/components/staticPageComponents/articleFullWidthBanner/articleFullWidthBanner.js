import Block from '../../../lib/blockContent'
import styles from './articleFullWidthBanner.module.scss'
import urlFor from '../../../lib/image'
import srcSet from '../../../lib/srcset'
import Link from 'next/link';

const ArticleFullWidthBanner = ({ blogPost, ...props}) => {
  console.log(blogPost.slug.current)
	return(
    <section className={styles.articleContainer}>
		  <img alt={blogPost.title} src={urlFor(blogPost.mainImage).width(400).height(700).quality(80).auto('format').url()} srcSet={srcSet(blogPost.mainImage, 1000)}/>
      <div className="u-pad-h-md u-pad-v-md">
        <h2>{blogPost.title}</h2>
        <Block blocks={blogPost.body[0]} />
        <Link href={blogPost.slug.current}>
          <a className='c-btn u-mar-v-md'>Read Now</a>
        </Link>
      </div>
    </section>
  )
}

export default ArticleFullWidthBanner
