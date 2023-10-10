import './Footer.css';

function Footer() {
    return (
        <div className="footer">
          <div className="footer-container">
            <div className="footer-container-row">
              <div className="footer-container-col-left">
                <div className="logo-icon">
                  <div className="logo-img"></div>
                  <span className="logo-text">HowMuch</span>
                </div>
                <span className="footer-container-col-left-text">
                  현재 웹 사이트는 Mini-Project의 일환으로 <br/>실제로 물건을 판매하지 않습니다.
                </span>
              </div>
              <div className="footer-container-col-right">
                <div className="gitbub-icon"></div>
                <span className="footer-container-col-right-text">
                  현재 웹사이트의 소스 코드는 <br/>하단의 Git Hub에서 확인하실 수 있습니다.
                </span>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Footer;