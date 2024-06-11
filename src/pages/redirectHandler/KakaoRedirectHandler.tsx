// src/RedirectHandler.js
import {useContext, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";

const KakaoRedirectHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();

  /* eslint-disable */
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const accessToken = urlParams.get("token");
    // accessToken 저장 로직
    navigate("/");
  }, [location]);

  return <div>카카오 리디렉션 처리 중...</div>;
};

export default KakaoRedirectHandler;
