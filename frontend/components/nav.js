import Link from 'next/link'
import HomeIcon from './svg/home-icon'
import AboutIcon from './svg/about-icon'
import WorkIcon from './svg/work-icon'
import CodeIcon from './svg/code-icon'

const Nav = () => {

  let scrollTo = (e, target) => {
    e.preventDefault()
    document.getElementById(target).scrollIntoView({
      behavior: 'smooth'
   })
  }

  return(
    <div className="o-header u-pad-h-sm">
      <Link href="#"><a className="o-header__logo" onClick={(e) => scrollTo(e, "home")}><img className="u-pad-h-sm" src="/Logo.svg" alt="ID logo"/></a></Link>
      <div className="o-header__group">
        <Link href="#"><a onClick={(e) => scrollTo(e, "home")}><div className="o-header__link"><HomeIcon/>Home</div></a></Link>
        <Link href="#about"><a onClick={(e) => scrollTo(e, "about")}><div className="o-header__link"><AboutIcon/>About Me</div></a></Link>
      </div>
      <div className="o-header__group">
        <Link href="#work"><a onClick={(e) => scrollTo(e, "work")}><div className="o-header__link"><WorkIcon/>Work</div></a></Link>
        <Link href="#projects"><a onClick={(e) => scrollTo(e, "projects")}><div className="o-header__link"><CodeIcon/>Projects</div></a></Link>
      </div>
    </div>
  )
}

export default Nav
