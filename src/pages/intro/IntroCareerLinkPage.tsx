import Input from "components/Input";
import Select from "components/Select";
import React, {ChangeEvent, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function IntroCareerLinkPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/intro/career-pass");
  };

  const goNext = () => {
    console.log("다음으로");
    navigate(`/`);
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {};

  return (
    <div className='intro-goal__background'>
      <div className='intro-goal__content-container'>
        <div className='intro-goal__title-container'>
          <span className='intro-goal__title'>경력 링크를 첨부해 주세요</span>
          <span className='intro-goal__subtitle'>
            ※ 링크 첨부는 로드맵 제작까지 24시간이 소요됩니다
          </span>
        </div>
        <div className='intro-goal__input-container'>
          <Input
            label='Link 1 *'
            placeholder='Link'
            onChange={onChangeInput}
            name='link1'
          />
          <Input
            label='Link 2'
            placeholder='Link'
            onChange={onChangeInput}
            name='link2'
          />
          <Input
            label='Link 3'
            placeholder='Link'
            onChange={onChangeInput}
            name='link3'
          />
          <Input
            label='Link 4'
            placeholder='Link'
            onChange={onChangeInput}
            name='link4'
          />
          <Input
            label='Link 5'
            placeholder='Link'
            onChange={onChangeInput}
            name='link5'
          />
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
