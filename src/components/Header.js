import './Header.css';

function Header() {
    return (
        <div className="header-wrap">
            <div className="header-container">
                <div className="home-header">
                    <div className="logo-icon">
                        <div className="logo-img"></div>
                        <span className="logo-text">HowMuch</span>
                    </div>
                    <div className="search-input">
                        <div className="search-input-icon"></div>
                    </div>
                    <ul className='main-menu-ul'>
                       <li className='menu-item-li'>
                           <p className='menu-text'>장바구니</p>
                       </li>
                       <li className='menu-item-li'>
                           <p className='menu-text'>주문조회</p>
                       </li>
                   </ul>
                </div>
                
            </div>
        </div>
    );
}

export default Header;