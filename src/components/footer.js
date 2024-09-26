import Logo from '../assets/images/logo.svg';
import AppStore from '../assets/images/app store.svg';
import GooglePlay from '../assets/images/google.svg';
import Facebook from '../assets/images/facebook.svg';
import Ins from '../assets/images/Instagramm.svg';
import Youtube from '../assets/images/youtube.svg';
import Avatr from '../assets/images/avatar.svg';

function Footer(){
    return (
        <footer className='site-footer'>
        <div className='container'>
        <div className='footer'>
        <div className='footer__wrapper'>
        <a href='/'>
        <img src={Logo} alt='logo' width={96} height={51}/>
        </a>
        <p className='footer__text'>Hot Africa, we offer original, exclusive and premium stories. Everything you want to watch, anytime, anywhere and as much.</p>
        <div className='footer__store-links'>
        <a href='https://www.apple.com/app-store/'>
        <img src={AppStore} alt='app store' width={130} height={37}/>
        </a>
        <a href='https://play.google.com/store/games?device=windows&pli=1'>
        <img src={GooglePlay} alt='play market' width={130} height={37}/>
        </a>
        </div>
        <div className='footer__sayts'>
        <a href='https://www.facebook.com/facebook/' target='blank'>
        <img className='photo' src={Facebook} alt='img' width={40} height={40}/>
        </a>
        <a href='https://www.instagram.com/' target='blank'>
        <img className='photo' src={Ins} alt='img' width={40} height={40}/>
        </a>
        <a href='https://www.youtube.com/' target='blank' >
        <img className='photo' src={Youtube} alt='img' width={40} height={40}/>
        </a>
        </div>
        <p className='footer__subtext'>Terms of use     Privacy Policy     SiteMap</p>
        <p className='footer__subtext'>Copyright © 2022 Hot Africa. All rights reserved.</p>
        </div>
        <ul className='footer__sign'>
        <a className='footer__signin' href='/'>
        <img src={Avatr} alt='avatar' width={24} height={24}/>
        <span>Sign in</span>
        </a>
        <li className='footer__sign-item'>
        <a className='footer__link' href='#'>Personal data</a>
        </li>
        <li className='footer__sign-item'>
        <a className='footer__link' href='#'>Choosing a Plan</a>
        </li>
        <li className='footer__sign-item'>
        <a className='footer__link' href='#'>Payment</a>
        </li>
        </ul>
        <ul className='footer__list'>
        <li className='footer__item'>
        <strong className='footer__strong'>Movies</strong>
        </li>
        <li className='footer__item'>
        <a className='footer__link' href='#'>Lock Upp</a>
        </li>
        <li className='footer__item'>
        <a className='footer__link' href='#'>Pavitra Rishta</a>
        </li>
        <li className='footer__item'>
        <a className='footer__link' href='#'>Girgit</a>
        </li>
        <li className='footer__item'>
        <a className='footer__link' href='#'>Hai Taubba Season 3</a>
        </li>
        <li className='footer__item'>
        <a className='footer__link' href='#'>Cartel</a>
        </li>
        <li className='footer__item'>
        <a className='footer__link' href='#'>Crimes And Confessions</a>
        </li>
        <li className='footer__item'>
        <a className='footer__link' href='#'>Puncch Beat Season 2</a>
        </li>
        <li className='footer__item'>
        <a className='footer__link' href='#'>Broken But Beautiful Season 3</a>
        </li>
        </ul>
        <ul className='footer__list'>
        <li className='footer__item'>
        <strong className='footer__strong'>Series</strong>
        </li>
        <li className='footer__item'>
        <a className='footer__link' href='#'>X.X.X. Season 2</a>
        </li>
        <li className='footer__item'>
        <a className='footer__link' href='#'>Gandii Baat Season 5</a>
        </li>
        <li className='footer__item'>
        <a className='footer__link' href='#'>Gandii Baat Season 6</a>
        </li>
        <li className='footer__item'>
        <a className='footer__link' href='#'>Broken But Beautiful Season 1</a>
        </li>
        <li className='footer__item'>
        <a className='footer__link' href='#'>Broken But Beautiful Season 2</a>
        </li>
        <li className='footer__item'>
        <a className='footer__link' href='#'>Class Of 2020</a>
        </li>
        <li className='footer__item'>
        <a className='footer__link' href='#'>Bekaaboo Season 1</a>
        </li>
        <li className='footer__item'>
        <a className='footer__link' href='#'>Ragini MMS Returns Season 2</a>
        </li>
        </ul>
        </div>
        </div>
        </footer>
    )
}

export default Footer