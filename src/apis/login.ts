import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080", // 백엔드 서버의 기본 URL
  withCredentials: true, // 모든 요청에 쿠키 포함
});

// OAuth2 로그인
export const showKakaoLoginPage = async () => {
  try {
    const response = await apiClient.get("/api/v1/auth/oauth2/kakao");
    console.log(response.data);
    // 필요한 경우 URL로 리다이렉트
    window.location.href = response.data.url;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const showGoogleLoginPage = async () => {
  // const response = await get(`/api/v1/auth/oauth2/google`, {
  //   headers: {
  //     "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
  //   },
  // });
};
