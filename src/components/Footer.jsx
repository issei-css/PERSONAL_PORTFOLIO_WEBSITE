import { FiGithub, FiLinkedin, FiFacebook, FiHeart } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">&lt;<span>Dev</span>/&gt;</span>
            <p>Building the future, one line of code at a time.</p>
          </div>
          <div className="footer__socials">
            <a href="https://github.com/issei-css" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/issei-jansenn-sipagan-131b77378/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://www.facebook.com/jansenn.sipagan.14" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FiFacebook />
            </a>
          </div>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} Portfolio. Made with{' '}
            <FiHeart className="footer__heart" /> using React
          </p>
        </div>
      </div>
    </footer>
  )
}
