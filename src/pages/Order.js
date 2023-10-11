import './Order.css';

function Order() {
    return (
        <div className="order">
            <div className="wrapper">
                <div className="main">
                    <div className="container-2">
                        <div className="title">
                            <div className="title-msg">주문</div>
                        </div>
                        <div className="row">
                            <div className="item-order-left">
                                <ul>
                                    <li className='item-order-item'>
                                        <div className="item-order-item-img" />
                                        <div className="item-order-item-info">
                                            <div className="item-order-item-name">나이키2</div>
                                            <div className="item-order-item-2">수량 : 1</div>
                                            <div className="item-order-item-2">210,000원</div>
                                        </div>
                                    </li>
                                    <li className='item-order-item'>
                                        <div className="item-order-item-img" />
                                        <div className="item-order-item-info">
                                            <div className="item-order-item-name">나이키2</div>
                                            <div className="item-order-item-2">수량 : 1</div>
                                            <div className="item-order-item-2">210,000원</div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="item-order-item-name-wrapper">
                                    <div className="item-order-item-name-2">합계 금액 : 420,000원</div>
                                </div>
                            </div>
                            <div className="item-order-right">
                                <div className="div-2">
                                    <div className="text-wrapper-2">수령인</div>
                                    <div className="order-input">
                                        <input className='order-input-tag'></input>
                                    </div>
                                </div>
                                <div className="div-2">
                                    <div className="text-wrapper-2">전화번호</div>
                                    <div className="order-input">
                                        <input className='order-input-tag'></input>
                                    </div>
                                </div>
                                <div className="item-order-user">
                                    <div className="text-wrapper-2">주소</div>
                                    <div className="order-input">
                                        <input className='order-input-tag-mini' readOnly></input>
                                    </div>
                                    <button className='order-find-zipcode-button'>우편번호 찾기</button>
                                    <div className="order-input">
                                        <input className='order-input-tag' readOnly></input>
                                    </div>
                                    <div className="order-input">
                                        <input className='order-input-tag' placeholder='상세주소를 입력해주세요.'></input>
                                    </div>
                                </div>
                                <div className="item-detail-hr" />
                                <div className="order-button-wrap">
                                    <button className='order-button'>주문하기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;