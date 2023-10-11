import "./ItemDetail.css";

function ItemDetail() {
  return (
    <div className="item-detail">
      <div className="wrapper">
        <div className="main">
          <div className="container-2">
            <div className="title">
              <div className="title-msg">상품 상세</div>
            </div>
            <div className="row">
              <div className="item-detail-left">
                <div className="item-detail-img" />
              </div>
              <div className="item-detail-right">
                <div className="item-detail-name">
                  <div className="item-detail-name-text">나이키2</div>
                </div>
                <div className="item-detail-price">
                  <div className="item-detail-price-text">210,000원</div>
                </div>
                <div className="item-detail-quantity">
                  <input type="number" className="item-detail-quantity-input"></input>
                </div>
                <div className="item-detail-hr-mini" />
                <div className="item-detail-button">
                  <div className="button-cart">
                    <div className="button-cart-text">장바구니</div>
                  </div>
                  <div className="button-cart">
                    <div className="button-cart-text">구매하기</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="item-detail-hr" />
              <div className="item-detail-lowprice">
                <div className="lowprice-title">네이버 최저가</div>

                {/* <div className="item-detail-lowprice-3">
                  <div className="item-detail-lowprice-4" />
                  <div className="item-detail-lowprice-5">
                    <div className="item-detail-name-wrapper">
                      <div className="item-detail-name-2">나이키2</div>
                    </div>
                    <div className="item-detail-price-wrapper">
                      <div className="item-detail-price-2">210,000원</div>
                    </div>
                  </div>
                </div> */}

                <ul>
                  <li className="item-detail-lowprice-3">
                    <div className="lowprice-img" />
                    <div className="lowprice-info">
                      <div className="lowprice-name-wrapper">
                        <div className="lowprice-name-text">나이키2</div>
                      </div>
                      <div className="lowprice-price-wrapper">
                        <div className="lowprice-price-text">210,000원</div>
                      </div>
                    </div>
                  </li>
                  <li className="item-detail-lowprice-3">
                    <div className="lowprice-img" />
                    <div className="lowprice-info">
                      <div className="lowprice-name-wrapper">
                        <div className="lowprice-name-text">나이키2</div>
                      </div>
                      <div className="lowprice-price-wrapper">
                        <div className="lowprice-price-text">210,000원</div>
                      </div>
                    </div>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
