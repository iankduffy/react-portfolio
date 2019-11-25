import Link from 'next/link'

const FullWidthLink = () => {
  return (
    <Link href={`/`}>
      <a className={`col-12 col-12@md container__row u-mar-v-md flex-column-mobile o-flex-al-stretch c-full-width`}>
        <img className="col-6 col-12@md " src="/slash.jpg" />
        <div className="col-6 col-12@md col-6 u-pad-h-md container__column u-pad-v-md u-font-white">
          <h3>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est</p>
          <button className="c-btn u-mar-t-sm u-flex-self--end h4">Category Name</button>
        </div>
      </a>
	  </Link>
  )
}
  
export default FullWidthLink;