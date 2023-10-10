import './ItemDetail.css';

function ItemDetail() {
    return (
        <div class="main">
            <div class="item-detail-container">
                <div class="item-detail-title">
                    <span class="item-detail-title-msg">상품 상세</span>
                </div>
                <div class="item-detail-row">
                    <div class="item-detail-left">
                        <div className="item-detail-img"></div>
                    </div>
                    <div class="item-detail-right">
                        <div class="item-detail-name">
                            <span class="item-detail-name-text">나이키2</span>
                        </div>
                        <div class="item-detail-price">
                            <span class="item-detail-price-text">210,000원</span>
                        </div>
                        <div class="item-detail-quantity">
                            {/* <div class="e41_233">
                                <div class="ei41_233_1000_735">
                                    <div class="ei41_233_1000_735_1000_748">
                                        <div class="ei41_233_1000_735_1000_748_996_685"></div>
                                    </div>
                                </div>
                                <div class="ei41_233_1000_736">
                                    <span class="ei41_233_1000_736_1000_762">1</span>
                                </div>
                                <div class="ei41_233_1000_737">
                                    <div class="ei41_233_1000_737_1000_748">
                                        <div class="ei41_233_1000_737_1000_748_996_667"></div>
                                    </div>
                                </div>
                            </div> */}
                            <input className='item-detail-quantity-input' type='number'></input>
                        </div>
                        <div class="item-detail-button">
                            <div class="button-cart">
                                <span class="button-cart-text">장바구니</span>
                            </div>
                            <div class="button-buy">
                                <span class="button-buy-text">구매하기</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="item-detail-bottom">
                    <div className='item-detail-hr'></div>
                    <div class="item-detail-lowprice">
                        <div class="item-detail-lowprice-text">
                            <span>네이버 최저가</span>
                        </div>
                        <div class="item-detail-lowprice-wrap">
                            <div class="item-detail-lowprice-wrap-left">
                                <div className='item-detail-lowprice-img'></div>
                            </div>
                            <div class="item-detail-lowprice-wrap-right">
                                <div class="item-detail-lowprice-name">
                                    <span class="item-detail-name-text">나이키2</span>
                                </div>
                                <div class="item-detail-lowprice-price">
                                    <span class="item-detail-price-text">210,000원</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;