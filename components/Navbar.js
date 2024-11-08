import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../contexts/theme'
import { header, about, projects, skills, contact } from '../data/portfolio'
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import Brightness2Icon from '@material-ui/icons/Brightness2'

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false)
  const { themeName, toggleTheme } = useContext(ThemeContext)
  const { wordmark } = header
  const { names } = about
  const defaultWordmark = 'About Me'

  const toggleNavListOverlay = () => {
    showNavList
      ? document.body.classList.remove('disable-scroll')
      : document.body.classList.add('disable-scroll')
    setShowNavList(!showNavList)
  }

  const hideNavListOverlay = () => {
    document.body.classList.remove('disable-scroll')
    setShowNavList(false)
  }

  useEffect(() => {
    const hideNavListOverlayIfScreenIsTooBig = () =>
      window.innerWidth > 600 ? hideNavListOverlay() : null
    window.addEventListener('resize', hideNavListOverlayIfScreenIsTooBig)
    return () =>
      window.removeEventListener('resize', hideNavListOverlayIfScreenIsTooBig)
  }, [])

  return (
    <nav className='nav container'>
      <ul
        className={`nav__list ${showNavList ? 'nav__list--open' : ''}`}
      >
        <li className='nav__list-item'>
          <strong>
            <a href='#top' onClick={hideNavListOverlay} className='link'>
              {wordmark || names.join(' ') || defaultWordmark}
            </a>
          </strong>
        </li>

        {projects.length && (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={hideNavListOverlay}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        )}

        {skills.length && (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={hideNavListOverlay}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        )}

        {contact.email && (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={hideNavListOverlay}
              className='link link--nav'
            >
              Contact
            </a>
          </li>
        )}
      </ul>

      <button
        type='button'
        onClick={toggleNavListOverlay}
        aria-label='toggle navigation'
        className='btn btn--icon nav__button nav__hamburger'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>

      <button
        type='button'
        onClick={toggleTheme}
        aria-label='toggle theme'
        className='btn btn--icon nav__button'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>
    </nav>
  )
}

export default Navbar
