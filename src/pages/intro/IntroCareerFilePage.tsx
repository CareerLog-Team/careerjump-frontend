import Input from "components/Input";
import Select from "components/Select";
import React, {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

type ButtonType = "link" | "file" | "input";

export default function IntroCareerFilePage() {
  const [buttonType, setButtonType] = useState<ButtonType | null>(null);
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/intro/career-pass");
  };

  const goNext = () => {
    console.log("다음으로");
    if (buttonType) {
      navigate(`/intro/career/${buttonType}`);
    } else {
      alert("경력 입력 방법을 선택해주세요.");
    }
  };

  const onButtonClick = (type: ButtonType) => {
    setButtonType(type);
    console.log(type);
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {};

  return (
    <div className='intro-goal__background'>
      <div className='intro-goal__content-container'>
        <div className='intro-goal__title-container'>
          <span className='intro-goal__title'>커리어패스가 어떻게 되세요?</span>
          <span className='intro-goal__subtitle'>
            지금까지 쌓아온 경력을 알려주세요
          </span>
        </div>
        <div className='intro-goal__input-container'>
          <button
            className={`intro-career-pass__btn ${
              buttonType === "input" ? "active" : ""
            }`}
            onClick={() => onButtonClick("input")}>
            <div>🖊️</div>
            <span>직접 입력하기</span>
          </button>
          <button
            className={`intro-career-pass__btn ${
              buttonType === "link" ? "active" : ""
            }`}
            onClick={() => onButtonClick("link")}>
            <div>📎</div>
            <span>링크 첨부하기 (링크드인, 리멤버 등)</span>
          </button>
          <button
            className={`intro-career-pass__btn ${
              buttonType === "file" ? "active" : ""
            }`}
            onClick={() => onButtonClick("file")}>
            <div>📄</div>
            <span>이력서 업로드하기</span>
          </button>
        </div>
      </div>
      <div className='intro-goal__btn-container'>
        <button
          className='intro-goal__btn-back'
          onClick={goBack}>
          ←
        </button>
        <button
          className='intro-goal__btn-next'
          onClick={goNext}>
          다음 →
        </button>
      </div>
    </div>
  );
}
