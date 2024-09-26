import Logo from "../assets/images/logo.svg"
import Avatr from "../assets/images/avatar.svg"

function Header(){
    const navbarList =[
        {
          id:1,
          title:"Movies",
          path:"#"
        },
        {
          id:2,
          title:"Series",
          path:"#"
        },
        {
          id:3,
          title:"Channels",
          path:"#"
        },
        {
          id:4,
          title:"Music",
          path:"#"
        },
      ]
    return (
    <header className='site-header'>
        <div className='container'>
          <div className='header'>
            <div className='header__wrapper'>
            <a href='/'>
             <img src={Logo} alt='logo' width={95} height={51}/>
            </a>
            <ul className='header__list'>
              {
              navbarList.map(item => (
                <li key={item.id}>
                  <a className='header__link' href={`${item.path}`}>{item.title}</a>
                </li>
              ))
              }
            </ul>
            </div>
            <div className='header__content'>
              <input className='header__input' placeholder='Search' name='searching' autoComplete='off' type='text'/>
              <button className='header__button'>
                <img src={Avatr} alt='avatar' width={24} height={24}/>
                <span>Profile</span>
              </button>
            </div>
          </div>
        </div>
    </header>
    )
}

export default Header