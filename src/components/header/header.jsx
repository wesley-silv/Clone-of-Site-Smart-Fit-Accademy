// Styles
import './header.sass'

// Icons
import {GiHamburgerMenu} from 'react-icons/all'


const Header = () => {
  return (
    <div className="header">
      <h2>
        <a href="#" title='Início'>
          Smart<span>fit</span>
        </a>
      </h2>
      <button className='start_button' title='Começe agora'>
        Começe agora
      </button>
      <GiHamburgerMenu className='menu_hamburger' title='Menu'/>
    </div>
  )
}

export default Header