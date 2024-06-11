import {showKakaoLoginPage} from "apis/login";
import {Link, useNavigate} from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const onKakaoLoginClick = () => {
    console.log("카카오로 로그인!");
    try {
      showKakaoLoginPage();
    } catch (e) {
      console.log("kakao error : ", e);
    }
    // navigate("/intro/goal");
  };

  const onGoogleLoginClick = () => {
    console.log("구글로 로그인!");
    navigate("/intro/goal");
  };

  return (
    <div className='login__page'>
      <div className='login__background'>
        <div className='login__title-container'>
          <span className='login__app-name'>Career Jump</span>
          <span className='login__login-text'>로그인</span>
        </div>
        <div className='login__btn-container'>
          <button
            className='login__btn login__kakao-btn'
            onClick={onKakaoLoginClick}>
            카카오 로그인
          </button>
          <button
            className='login__btn login__google-btn'
            onClick={onGoogleLoginClick}>
            구글 로그인
          </button>
        </div>
      </div>
    </div>
  );
}
