import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="wrapper">
        <div className="main">
          <div className="container-2">
            <div className="title">
              <div className="title-msg">로그인</div>
            </div>
            <div className="order-check-pre">
              <div className="button-confirm">
                <div className="button-confirm-text">카카오 로그인</div>
              </div>
            </div>
            <div className="title">
              <div className="title-msg">회원이 아니시라면...?</div>
            </div>
            <div className="button-confirm">
              <div className="button-confirm-text">카카오로 시작하기</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
