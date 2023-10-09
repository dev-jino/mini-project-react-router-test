import './HeaderHome.css';
import { Link } from 'react-router-dom';

function HeaderHome() {
    return (
        <div className="home-header-wrap">
            <div className="home-header-container">
                <div className="home-header">
                    <div className="logo-icon">
                        <div className="logo-img"></div>
                        <span className="logo-text">HowMuch</span>
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
                <div className="cta">
                    <div className="home-search">
                        <span className="home-search-text">원하는 상품을 검색해보세요</span>
                        <div className="home-search-input">
                            <div className="home-search-input-icon"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default HeaderHome;