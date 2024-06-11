import {Route, Routes, Navigate} from "react-router-dom";
import KakaoRedirectHandler from "pages/redirectHandler/KakaoRedirectHandler";
import LoginPage from "pages/login/LoginPage";
import IntroGoalPage from "pages/intro/IntroGoalPage";
import IntroCareerPassPage from "pages/intro/IntroCareerPassPage";
import IntroCareerLinkPage from "pages/intro/IntroCareerLinkPage";
import IntroCareerInputPage from "pages/intro/IntroCareerInputPage";
import IntroCareerFilePage from "pages/intro/IntroCareerFilePage";

interface RouterProps {
  isAuthenticated: boolean;
}

export default function Router({isAuthenticated}: RouterProps) {
  return (
    <>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route
              path='/'
              element={<div>홈화면입니다.</div>}
            />
            <Route
              path='*'
              element={
                <Navigate
                  replace
                  to='/'
                />
              }
            />
          </>
        ) : (
          <>
            <Route
              path='/login'
              element={<LoginPage />}
            />
            <Route
              path='/auth/oauth-response'
              element={<KakaoRedirectHandler />}
            />
            <Route
              path='/intro/goal'
              element={<IntroGoalPage />}
            />
            <Route
              path='/intro/career-pass'
              element={<IntroCareerPassPage />}
            />
            <Route
              path='/intro/career/link'
              element={<IntroCareerLinkPage />}
            />
            <Route
              path='/intro/career/input'
              element={<IntroCareerInputPage />}
            />
            <Route
              path='/intro/career/file'
              element={<IntroCareerFilePage />}
            />
            <Route
              path='*'
              element={<LoginPage />}
            />
          </>
        )}
      </Routes>
    </>
  );
}
