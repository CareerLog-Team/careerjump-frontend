import Input from "components/Input";
import Select from "components/Select";
import React, {ChangeEvent} from "react";
import {useNavigate} from "react-router-dom";

export default function IntroGoalPage() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  const goNext = () => {
    console.log("다음으로");
    navigate("/intro/career-pass");
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {};
  const industries = [
    {key: 0, value: "service", name: "서비스업"},
    {key: 1, value: "medical", name: "의료, 제약, 복지"},
    {key: 2, value: "manufacturing", name: "제조, 화학"},
    {key: 3, value: "supply", name: "판매, 유통"},
    {key: 4, value: "IT", name: "IT, 웹, 통신"},
    {key: 5, value: "construction", name: "건설업"},
    {key: 6, value: "education", name: "교육업"},
    {key: 7, value: "media&design", name: "미디어, 디자인"},
    {key: 8, value: "bank", name: "은행, 금융업"},
    {key: 9, value: "institute", name: "기관, 협회"},
  ];
  const positions = [
    {key: 0, value: "strategy", name: "기획, 전략"},
    {key: 1, value: "marketing", name: "마케팅, 홍보, 조사"},
    {key: 2, value: "taxes", name: "회계, 세무, 재무"},
    {key: 3, value: "HR", name: "인사, 노무, HRD"},
    {key: 4, value: "legal", name: "총무, 법무, 사무"},
    {key: 5, value: "IT&Data", name: "IT개발, 데이터"},
    {key: 6, value: "design", name: "디자인"},
    {key: 7, value: "trade", name: "영업, 판매, 무역"},
    {key: 8, value: "telecounseling", name: "고객상담, TM"},
    {key: 9, value: "parchasing", name: "구매, 자재, 물류"},
    {key: 10, value: "MD", name: "상품기획, MD"},
    {key: 11, value: "shiping", name: "운전, 운송, 배송"},
    {key: 12, value: "service", name: "서비스"},
    {key: 13, value: "production", name: "생산"},
    {key: 14, value: "construction", name: "건설, 건축"},
    {key: 15, value: "medical", name: "의료"},
    {key: 16, value: "R&D", name: "연구, R&D"},
    {key: 17, value: "education", name: "교육"},
    {key: 18, value: "media&culture&sports", name: "미디어, 문화, 스포츠"},
    {key: 19, value: "finance&insurance", name: "금융, 보험"},
    {key: 20, value: "public", name: "공공, 복지"},
  ];
  const cultureTypes = [
    {
      key: 0,
      value: "inovative",
      name: "혁신지향 - 유연성있게 성장을 추구하고 창의성을 요구",
    },
    {
      key: 1,
      value: "vertical",
      name: "위계지향 - 규제와 질서를 기반으로 효율성 추구",
    },
    {
      key: 2,
      value: "party",
      name: "집단지향 - 구성원 간의 적극적인 참여를 통한 높은 소속감",
    },
    {
      key: 3,
      value: "goal",
      name: "사명지향 - 명확한 목표 설정과 경쟁을 통한 생산성 강조",
    },
  ];

  return (
    <div className='intro-goal__background'>
      <div className='intro-goal__content-container'>
        <div className='intro-goal__title-container'>
          <span className='intro-goal__title'>이직 목표가 어떻게 되세요?</span>
          <span className='intro-goal__subtitle'>
            이직 로드맵 설정을 위해 이직 목표를 알려주세요
          </span>
        </div>
        <div className='intro-goal__input-container'>
          <Input
            label='이직 희망 회사'
            placeholder='회사명 입력'
            onChange={onChangeInput}
            name='company'
          />
          <Input
            label='희망 연봉 *'
            placeholder='선택'
            onChange={onChangeInput}
            name='pay'
            unit='만원'
          />
          <Select
            label='희망 산업 *'
            placeholder='선택'
            onChange={onChangeSelect}
            name='industry'
            options={industries}
          />
          <Select
            label='희망 직무 *'
            placeholder='선택'
            onChange={onChangeSelect}
            name='position'
            options={positions}
          />
          <Select
            label='희망 조직문화 *'
            placeholder='선택'
            onChange={onChangeSelect}
            name='cultureType'
            options={cultureTypes}
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
