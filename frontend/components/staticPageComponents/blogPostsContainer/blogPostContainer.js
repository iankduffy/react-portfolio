import Block from '../../../lib/blockContent'
import styles from './blogPostContainer.module.scss'
import Link from 'next/link'


const BlogLink = ({blog}) => {
  console.log(blog)
  let publishedAt = new Date(blog.publishedAt).toDateString()
  return(
    <Link href={blog.slug.current}>
      <a className={styles.cArticleLink}>
        <div className="c-project__image">
          <img src={blog.image ? blog.image : "/slash.jpg"} lazy="true" alt={blog.title ? blog.title : "code on the screen"} />
        </div>
        <div className='u-pad-h-md u-pad-v-sm'>
          <h3>{blog.title}</h3>
          <p>{publishedAt}</p>
        </div>
      </a>
    </Link>
  )
}

const BlogPostContainer = ({heading, text, blogs, ...props}) => {
	return(
    <section className={`u-pad-v-md u-pad-h-md ${styles.container}`}>
      <div>
        <div>
          <h3>{heading}</h3>
          <p><Block blocks={text}/></p>
        </div>
        <div>Search</div>
      </div>
      <div className={styles.cArticleContainer}>
        {blogs.map((blog) => <BlogLink blog={blog} />)}
      </div>
    </section>
  )
}

export default BlogPostContainer
