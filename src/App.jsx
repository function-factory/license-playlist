import { useState } from 'react';
import './index.css';

/* ============================================================
   SVG LOGO COMPONENT (TDS & Tech Vibe)
   ============================================================ */
function Logo() {
  return (
    <svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <circle cx="18" cy="18" r="18" fill="url(#logo-grad)" />
      {/* Roadmap path */}
      <path d="M10 24C10 24 13.5 17 18 17C22.5 17 26 24 26 24" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M10 12C10 12 13.5 19 18 19C22.5 19 26 12 26 12" stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" strokeLinecap="round" />
      {/* Arrowhead */}
      <path d="M26 12L28 15M26 12L23 13" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Node dots */}
      <circle cx="14" cy="14.5" r="2.5" fill="#00F0FF" />
      <circle cx="22" cy="21.5" r="2.5" fill="#7B61FF" />
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7B61FF" />
          <stop offset="1" stopColor="#00F0FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ============================================================
   TRACKS DEFINITION
   ============================================================ */
const TRACKS = [
  {
    id: 'coding',
    title: 'Coding',
    fullTitle: 'Coding Track',
    description: '코딩 동아리 기초 빌드업을 위한 실습 중심 프로그래밍 자격증',
    color: '#2D46B9',
    gradient: 'linear-gradient(135deg, #1a2d8f 0%, #2D46B9 60%, #4A6CF7 100%)',
    emoji: '💻',
    certCount: 3,
  },
  {
    id: 'design',
    title: 'Design',
    fullTitle: 'Design Track',
    description: '토스(TDS) 스타일 UI/UX, 그래픽 편집 기술 자격증',
    color: '#C1392B',
    gradient: 'linear-gradient(135deg, #7B1818 0%, #C1392B 60%, #E85D4A 100%)',
    emoji: '🎨',
    certCount: 3,
  },
  {
    id: 'marketing',
    title: 'Marketing',
    fullTitle: 'Marketing Track',
    description: '구글 애널리틱스, 검색광고, 빅데이터 마케팅 기술 증명',
    color: '#0B6E4F',
    gradient: 'linear-gradient(135deg, #054030 0%, #0B6E4F 60%, #16A37A 100%)',
    emoji: '📈',
    certCount: 3,
  },
  {
    id: 'ai',
    title: 'AI & Big Tech',
    fullTitle: 'AI & Big Tech Track',
    description: '구글, 마이크로소프트, 아마존 공식 AI & 클라우드 수료 및 자격',
    color: '#6C3FC5',
    gradient: 'linear-gradient(135deg, #3D1A8A 0%, #6C3FC5 60%, #9B6EF3 100%)',
    emoji: '🤖',
    certCount: 4,
  },
];

const BADGE_MAP = {
  national:  { label: '국가기술자격', cls: 'badge-national' },
  certified: { label: '국가공인',     cls: 'badge-certified' },
  private:   { label: '민간자격',     cls: 'badge-private' },
  global:    { label: '글로벌 수료증', cls: 'badge-global' },
};

/* ============================================================
   ENRICHED CERTS DATA
   ============================================================ */
const CERTS = {
  coding: [
    {
      id: 'c1',
      trackId: 'coding',
      emoji: '🐍',
      name: '파이썬마스터 (코딩활용능력 개편)',
      org: '한국정보통신진흥협회 (KAIT)',
      level: 'private',
      time: '1~2개월',
      passRate: 74,
      fee: '1급 38,000원 / 2급 28,000원 / 3급 18,000원',
      eligible: '제한 없음 (중학생 적극 추천)',
      exam: '필기+실기 통합형 CBT (컴퓨터 시험, 60~80분)',
      certificate: '등록민간자격 (KAIT)',
      tip: '파이썬 기초 문법과 알고리즘을 종합 검증합니다. 2024년부터 KAIT 코딩활용능력(Python)으로 개편/통합되어 시행 중이므로 접수 시 참고하세요!',
      criteria: {
        summary: '파이썬 핵심 문법 이해도 및 실무 개발 알고리즘 구현 능력 평가',
        tools: 'Python 3.x 표준 라이브러리 및 내장 IDLE',
        breakdown: [
          { item: '알고리즘 및 연산', detail: '수치 연산, 논리 연산, 문자열 조작, 복합 대입 연산' },
          { item: '자료구조 활용', detail: '리스트, 튜플, 딕셔너리, 세트의 생성 및 조작 메커니즘' },
          { item: '제어 및 함수', detail: '조건문(if), 반복문(for, while), 내장 함수 및 사용자 정의 함수 설계' },
          { item: '응용 프로그래밍', detail: '클래스와 객체 지향 프로그래밍(OOP) 기초, 파일 입출력(I/O), 예외 처리(try-except)' }
        ]
      },
      pastExams: [
        { title: 'KAIT 자격검정 모의테스트 자료실', type: 'official', url: 'https://www.ihd.or.kr' },
        { title: '코딩활용능력(파이썬) 공식 샘플문제 다운로드', type: 'download', url: 'https://www.ihd.or.kr/guide/codingSample.do' }
      ],
      useCases: [
        { field: '동아리 커리큘럼', benefit: '신입 부원들의 파이썬 기초 완성을 위한 평가 지표로 최적' },
        { field: '생활기록부 반영', benefit: '학교 교육계획에 의거한 교내 동아리 활동 내용으로 자연스럽게 기재 가능' },
        { field: '특성화고/IT고 진학', benefit: '포트폴리오 및 면접 전형 시 자기주도 프로그래밍 학습 증거 자료로 활용 가능' }
      ],
      schedule: [
        { round: '상시 시험', written: '매월 전국 지정 시험장에서 비대면 또는 대면 CBT 시행', practical: '통합 시험 진행' }
      ],
      links: [
        { icon: '🏛️', label: 'KAIT 정보통신기술자격검정 공식 홈페이지', url: 'https://www.ihd.or.kr' }
      ]
    },
    {
      id: 'c2',
      trackId: 'coding',
      emoji: '🖥️',
      name: 'SW코딩자격 1/2/3급',
      org: '한국생산성본부 (KPC)',
      level: 'certified',
      time: '1개월',
      passRate: 65,
      fee: '1급 28,000원 / 2급 23,000원 / 3급 18,000원',
      eligible: '제한 없음 (초/중학생 최다 응시)',
      exam: '실무형 작업식 CBT 시험 (45~60분)',
      certificate: '국가공인 민간자격 (1·2·3급 전체)',
      tip: '2025년 개편으로 기존 필기형 문항이 폐지되고 실무 코딩 실기 100%로 전환되었습니다. 엔트리나 스크래치, 파이썬 중 선택해 응시합니다.',
      criteria: {
        summary: '컴퓨팅 사고력 구조 설계 및 프로그래밍 도구를 활용한 문제 해결력 평가',
        tools: '스크래치(Scratch 3.0) / 엔트리(Entry) / 파이썬(Python)',
        breakdown: [
          { item: '컴퓨팅 사고력 설계', detail: '자료 수집, 분석, 문제 분해, 추상화, 알고리즘 설계' },
          { item: '프로그래밍 구현', detail: '순차, 선택, 반복 구조 활용 및 변수/연산자 활용 코딩' },
          { item: '피지컬 컴퓨팅 (1/2급)', detail: '하드웨어 연결 및 센서 값 제어를 통한 연동 알고리즘 제어' }
        ]
      },
      pastExams: [
        { title: 'KPC 기출/샘플문제 자료실 (SW코딩자격)', type: 'official', url: 'https://license.kpc.or.kr/ncs/q解答/pastExam.do' },
        { title: 'SW코딩자격 공식 모의고사 다운로드', type: 'download', url: 'https://license.kpc.or.kr' }
      ],
      useCases: [
        { field: '국가공인 가산점', benefit: '국가공인 자격증으로 학생부 등재 및 일부 기관 가산점 인정' },
        { field: '알고리즘 입문', benefit: '블록 코딩(스크래치)을 통해 코딩을 처음 접하는 부원의 논리 사고 형성' },
        { field: '교내 정보교과 가산', benefit: '중학교 정보 과목 수행평가 및 교내 대회 대비 기초 체력 강화' }
      ],
      schedule: [
        { round: '정기 시험 (연 6회)', written: '-', practical: '매 짝수 월(2, 4, 6, 8, 10, 12월) 넷째 주 토요일' }
      ],
      links: [
        { icon: '🏛️', label: 'KPC 자격 공식 홈페이지', url: 'https://license.kpc.or.kr' }
      ]
    },
    {
      id: 'c3',
      trackId: 'coding',
      emoji: '⌨️',
      name: 'COS (Coding Specialist)',
      org: 'YBM IT',
      level: 'private',
      time: '1~2개월',
      passRate: 71,
      fee: '1급 25,000원 / 2급 22,000원 / 3급 20,000원',
      eligible: '제한 없음 (상시 응시 가능)',
      exam: '실기 100% 컴퓨터 컴퓨터 평가 (CBT, 40~50분)',
      certificate: '등록민간자격 (YBM)',
      tip: '시험 종료 즉시 성적표가 출력되는 신속한 시험입니다. 스크래치와 엔트리 블록 코딩의 세부 동작 완성도를 꼼꼼히 평가합니다.',
      criteria: {
        summary: '스크래치 및 엔트리 블록 코딩 도구의 종합 활용 능력 측정',
        tools: 'Scratch 3.0 / Entry',
        breakdown: [
          { item: '화면 및 스프라이트 제어', detail: '좌표계, 방향, 움직임, 형태 변경 및 소리 제어' },
          { item: '변수와 연산자', detail: '값 입력 및 보관, 사칙 연산, 비교 및 논리 연산 블록 구성' },
          { item: '동기화 및 제어 구조', detail: '신호 보내고 받기, 무한 반복, 조건 판단 및 논리 블록 조립' }
        ]
      },
      pastExams: [
        { title: 'YBM IT 공식 샘플/기출 테스트 자료실', type: 'official', url: 'https://www.ybmit.com' },
        { title: 'COS 실전 대비 무료 모의평가 링크', type: 'online', url: 'https://www.ybmit.com/cos/cos_test.jsp' }
      ],
      useCases: [
        { field: '상시 합격 확인', benefit: '합격 여부를 현장에서 즉시 확인하여 단기간에 성취감 고취 가능' },
        { field: '동아리 학기말 평가', benefit: '블록 코딩 기초 스터디 후 학기말 공식 인증 수단으로 사용' }
      ],
      schedule: [
        { round: '상시/정기 시험', written: '-', practical: '매주 주말 전국 YBM CBT 센터에서 상시 진행' }
      ],
      links: [
        { icon: '🏛️', label: 'YBM IT 공식 홈페이지', url: 'https://www.ybmit.com' }
      ]
    }
  ],
  design: [
    {
      id: 'd1',
      trackId: 'design',
      emoji: '🖼️',
      name: 'GTQ 포토샵 1급/2급',
      org: '한국생산성본부 (KPC)',
      level: 'certified',
      time: '1~2개월',
      passRate: 48,
      fee: '1급 32,000원 / 2급 22,000원 / 3급 14,000원',
      eligible: '제한 없음 (초/중/고 전 연령 인기 최고)',
      exam: '실기 작업형 시험 (4문항, 90분)',
      certificate: '국가공인 민간자격 (1·2급만 해당, 3급은 민간)',
      tip: '시간 관리 능력이 핵심인 실무 시험입니다. 포토샵의 펜 툴과 패스 저장, 레이어 스타일, 마스크 합성 기능을 기계적으로 빠르게 사용해야 합격합니다.',
      criteria: {
        summary: '포토샵을 활용한 컴퓨터 그래픽 이미지 제작 및 편집 능력 평가',
        tools: 'Adobe Photoshop CS6 / CC (한글/영문 선택 가능)',
        breakdown: [
          { item: '1번 문항 (20점)', detail: '그리드 맞춤, 패스 그리기(펜 툴), 레이어 스타일, 복제 및 변형' },
          { item: '2번 문항 (20점)', detail: '색상 보정, 액자 제작 필터 효과, 클리핑 마스크 합성' },
          { item: '3번 문항 (25점)', detail: '레이어 마스크, 그라디언트 효과, 패턴 정의 및 적용, 문자 효과' },
          { item: '4번 문항 (35점)', detail: '웹 페이지 그래픽 제작, 펜 툴 합성, 쉐이프 도구 복합 배치' }
        ]
      },
      pastExams: [
        { title: 'KPC GTQ 공식 기출/샘플문제 자료실', type: 'official', url: 'https://license.kpc.or.kr/ncs/q解答/pastExam.do' },
        { title: '최근 6개월 정기시험 기출문제집 zip', type: 'download', url: 'https://license.kpc.or.kr' }
      ],
      useCases: [
        { field: '디자이너 기초 스펙', benefit: '모든 디자인 관련 진학 및 포트폴리오의 기초적인 포토샵 기능 숙련도 증명' },
        { field: '동아리 웹진 제작', benefit: '동아리 카드뉴스, 홍보 배너 제작을 위한 포토샵 스킬업 과정으로 연계' },
        { field: '고교/대입 입시 가산점', benefit: '일부 특성화고 디자인과 가산점 및 대학 특별전형 포트폴리오 가산 요소' }
      ],
      schedule: [
        { round: '정기 시험 (매월 1회)', written: '-', practical: '매월 넷째 주 토요일 정기 시행' }
      ],
      links: [
        { icon: '🏛️', label: 'KPC GTQ 공식 사이트', url: 'https://license.kpc.or.kr/kpc/qualifications/index.do' }
      ]
    },
    {
      id: 'd2',
      trackId: 'design',
      emoji: '🌐',
      name: '웹디자인기능사',
      org: '한국산업인력공단 (Q-net)',
      level: 'national',
      time: '3~4개월',
      passRate: 41,
      fee: '필기 14,500원 / 실기 26,200원',
      eligible: '제한 없음 (학력/경력 무관, 중학생 가능)',
      exam: '필기 객관식 60문항 (60분) + 실기 웹퍼블리싱 작업형 (4시간)',
      certificate: '국가기술자격증 (산업통상자원부 주관)',
      tip: '실기 시험에서 HTML/CSS 코딩 외에 jQuery(자바스크립트)를 활용하여 슬라이딩 배너, 드롭다운 메뉴를 구현해야 합니다. 코드 오작동 시 실격(0점) 처리되므로 주의가 필요합니다.',
      criteria: {
        summary: '웹 표준 지침에 맞추어 디자인 시안을 브라우저에 마크업 및 동적 구현하는 능력 검증',
        tools: 'HTML5, CSS3, JavaScript (jQuery), VS Code 또는 Brackets',
        breakdown: [
          { item: '필기 과목 (60문항)', detail: '디자인일반, 인터넷일반, 웹그래픽디자인' },
          { item: '실기 1단계: 레이아웃', detail: '가이드라인에 맞춘 시맨틱 마크업(Header, Section, Footer) 구조 설계' },
          { item: '실기 2단계: 웹 효과 코딩', detail: '마우스 오버 메뉴 드롭다운 효과, 이미지 좌우/상하/페이드 슬라이드 코딩' },
          { item: '실기 3단계: 호환성 및 제출', detail: 'IE/Edge/Chrome 크로스브라우징 체크 및 5MB 미만의 zip 파일 제출' }
        ]
      },
      pastExams: [
        { title: '큐넷 웹디자인기능사 공식 실기 공개문제실', type: 'official', url: 'https://www.q-net.or.kr/crf005.do?id=crf00505&gSite=Q&gId=' },
        { title: '최강 자격증 기출문제 전자문제집 CBT (필기)', type: 'online', url: 'https://www.comcbt.com/xe/web' }
      ],
      useCases: [
        { field: '프론트엔드 기초', benefit: 'HTML/CSS/JS 기초 지식을 국가 공인 라이선스로 정량화하여 이력서에 제시' },
        { field: '공공기관 가산점', benefit: '기술직 공무원 채용 시험 시 가산점 3%~5% 및 기술병 지원 시 우대' },
        { field: '특성화고 기능탑재', benefit: '정보/디자인 특성화고등학교 재학생 의무검정 및 전공 필수 자격' }
      ],
      schedule: [
        { round: '제 1회~4회 정기검정', written: '매년 1, 3, 5, 8월 경 필기시험 접수', practical: '필기 합격자 대상 약 2달 뒤 실기시험 진행' }
      ],
      links: [
        { icon: '🏛️', label: 'Q-net 웹디자인기능사 상세정보', url: 'https://www.q-net.or.kr/crf005.do?id=crf00501&gSite=Q&gId=&jmCd=2470' }
      ]
    },
    {
      id: 'd3',
      trackId: 'design',
      emoji: '🎭',
      name: '컴퓨터그래픽스운용기능사',
      org: '한국산업인력공단 (Q-net)',
      level: 'national',
      time: '3~4개월',
      passRate: 45,
      fee: '필기 14,500원 / 실기 23,700원',
      eligible: '제한 없음 (학력/경력 무관, 중학생 가능)',
      exam: '필기 객관식 60문항 (60분) + 실기 디자인 편집 통합 작업형 (4시간)',
      certificate: '국가기술자격증 (문화체육관광부 주관)',
      tip: '일러스트레이터로 심볼/오브젝트를 제작하고, 포토샵으로 합성/특수효과를 준 뒤, 인디자인으로 텍스트를 정렬하고 재단선(인쇄 기준)을 배치하는 3가지 툴의 복합 응용 시험입니다.',
      criteria: {
        summary: '디자인 기획 시안에 따라 컴퓨터 프로그램들을 혼합 사용하여 인쇄 포맷의 최종 그래픽을 제작하는 업무 능력 검증',
        tools: 'Adobe Illustrator, Photoshop, InDesign CC',
        breakdown: [
          { item: '필기 과목 (60문항)', detail: '산업디자인일반, 색채 및 도법, 시각디자인론, 컴퓨터그래픽스' },
          { item: '실기 1단계: 드로잉', detail: '일러스트레이터를 이용한 상세 로고, 캐릭터, 아이콘 정밀 드로잉 및 패스 작업' },
          { item: '실기 2단계: 효과 및 맵핑', detail: '포토샵으로 가져와 필터 효과, 블렌딩 모드, 질감 처리, 입체감 맵핑 적용' },
          { item: '실기 3단계: 인디자인 편집', detail: '텍스트 배치, 서체 지정, 재단선 설정, 딤프 이미지 배치 후 최종 마운트 파일 제작' }
        ]
      },
      pastExams: [
        { title: '큐넷 컴퓨터그래픽스운용기능사 실기 공개문제실', type: 'official', url: 'https://www.q-net.or.kr/crf005.do?id=crf00505&gSite=Q&gId=' },
        { title: '컴퓨터그래픽스 필기 기출문제 모의고사 (ComCBT)', type: 'online', url: 'https://www.comcbt.com/xe/com' }
      ],
      useCases: [
        { field: '시각디자인 기초', benefit: '인쇄, 광고, 브랜딩, 편집 디자인 업계 진출 시 가장 표준이 되는 그래픽 면허증' },
        { field: '고교 생활기록부 기재', benefit: '국가기술자격으로 중/고등학교 학생부 자격증 취득 상황에 완벽 기재' },
        { field: '시각계열 대입 특기자', benefit: '미대/시각디자인과 수시 입시 지원 시 포트폴리오를 뒷받침할 수 있는 공인 라이선스' }
      ],
      schedule: [
        { round: '제 1회~4회 정기검정', written: '연간 4회 진행 (Q-net 공지 참고)', practical: '필기 합격 발표 후 약 6~8주 뒤 실기 진행' }
      ],
      links: [
        { icon: '🏛️', label: 'Q-net 컴퓨터그래픽스운용기능사 상세정보', url: 'https://www.q-net.or.kr/crf005.do?id=crf00501&gSite=Q&gId=&jmCd=2460' }
      ]
    }
  ],
  marketing: [
    {
      id: 'm1',
      trackId: 'marketing',
      emoji: '🔍',
      name: '검색광고마케터 1급',
      org: '한국정보통신진흥협회 (KAIT)',
      level: 'certified',
      time: '1~2개월',
      passRate: 58,
      fee: '50,000원',
      eligible: '제한 없음 (CBT 자택 온라인 시험 응시 가능)',
      exam: '객관식 및 단답식 필기 통합 시험 (80문항, 90분)',
      certificate: '국가공인 민간자격 (KAIT)',
      tip: '자택에서 캠으로 부정행위를 방지하며 온라인으로 치르는 비대면 시험입니다. 광고 단가 계산 공식(CTR, CPC, CPM, ROAS 등)과 광고 시스템 메뉴 구성을 철저히 암기해야 합니다.',
      criteria: {
        summary: '검색광고 기획, 등록, 운영, 분석 및 대행 관련 전문 마케팅 역량 평가',
        tools: '온라인 화상 모니터링 시스템(CBT), 웹 브라우저 계산 도구',
        breakdown: [
          { item: '디지털 광고 개론', desc: '디지털 마케팅 생태계 트렌드, 광고 대행 구조, 관련 법률 이해' },
          { item: '검색광고 기획 & 등록', desc: '네이버, 카카오 등 주요 검색포털 광고 구조 및 키워드 추출 전략' },
          { item: '검색광고 효과분석 및 계산', desc: '전환율, 노출당 비용, 광고 수익률 계산 공식 및 데이터 성과 리포트 분석법' }
        ]
      },
      pastExams: [
        { title: 'KAIT 자격검정자료실 (검색광고마케터)', type: 'official', url: 'https://www.ihd.or.kr' },
        { title: '기출문제 풀이 및 계산 모의고사 블로그', type: 'online', url: 'https://www.google.com/search?q=검색광고마케터+1급+기출문제+풀이' }
      ],
      useCases: [
        { field: '대행사 취업 프리패스', benefit: '디지털 마케팅 대행사, 미디어렙사 신입 채용 시 필수 우대 조건 항목' },
        { field: '실무 마케팅 적용', benefit: '동아리에서 만든 앱/웹을 실제 소액으로 타겟 광고 집행해 볼 때 필수 지식으로 동작' },
        { field: '학점은행제 인정', benefit: '경영학, 마케팅 전공 학점은행제 학점 취득 시 4학점 인정' }
      ],
      schedule: [
        { round: '정기 시험 (연 4회)', written: '연간 4회 (보통 3, 6, 9, 12월 토요일)', practical: '-' }
      ],
      links: [
        { icon: '🏛️', label: 'KAIT 자격정보 및 시험 접수', url: 'https://www.ihd.or.kr' }
      ]
    },
    {
      id: 'm2',
      trackId: 'marketing',
      emoji: '📊',
      name: 'GAIQ (구글 애널리틱스 개인 자격증)',
      org: 'Google',
      level: 'global',
      time: '2~4주',
      passRate: 85,
      fee: '무료 (0원)',
      eligible: '제한 없음 (구글 계정만 있으면 즉시 응시)',
      exam: '비대면 온라인 퀴즈 (50문항, 75분, 80% 이상 합격)',
      certificate: 'Google 인증 글로벌 공식 자격증 (유효기간 1년)',
      tip: 'GA4 개편 이후 이벤트 모델과 데이터 분석 기법을 묻는 방향으로 시험이 변경되었습니다. 시험은 완전 오픈북 형태이므로 구글 가이드를 옆에 띄우고 풀면 쉽게 취득이 가능합니다.',
      criteria: {
        summary: '웹/앱 방문자의 행동 데이터를 추적하고 분석하는 웹로그 분석 도구(GA4) 활용 능력 측정',
        tools: 'Google Analytics 4, Google Skillshop 플랫폼',
        breakdown: [
          { item: 'GA4 설정 및 데이터 수집', desc: '이벤트, 매개변수, 전환 설정 및 구글 태그(gTag) 구성 이해' },
          { item: '보고서 및 탐색 분석', desc: '유입경로(Funnel), 동질 집단(Cohort), 사용자 유지 보고서 분석' },
          { item: '마케팅 활용 연동', desc: '구글 애즈(Google Ads) 연동을 통한 맞춤 잠재고객 리타겟팅 설정' }
        ]
      },
      pastExams: [
        { title: 'Google Skillshop GA4 학습 코스', type: 'official', url: 'https://skillshop.exceedlms.com/student/path/79381-google-analytics-certification' },
        { title: 'GAIQ 공식 덤프 기출문제 블로그 링크', type: 'online', url: 'https://www.google.com/search?q=GAIQ+GA4+덤프' }
      ],
      useCases: [
        { field: '글로벌 테크 마케팅', benefit: '글로벌 표준 로그분석 자격으로 국내외 IT 기업 마케팅 파트 필수 지식 증명' },
        { field: '동아리 프로젝트 분석', benefit: '동아리 제작 웹에 GA4를 심고 실제 데이터가 쌓이는 과정을 추적하는 실습용' },
        { field: '이력서 포트폴리오 업그레이드', benefit: '이력서 자격사항란 및 링크드인(LinkedIn) 공식 인증 배지 게시 가능' }
      ],
      schedule: [
        { round: '상시 시험', written: '불합격 시 24시간 후 무제한 무료 재응시 가능', practical: '-' }
      ],
      links: [
        { icon: '🔵', label: 'Google Skillshop 공식 인증센터', url: 'https://skillshop.withgoogle.com/' }
      ]
    },
    {
      id: 'm3',
      trackId: 'marketing',
      emoji: '🧮',
      name: 'ADsP (데이터분석 준전문가)',
      org: '한국데이터산업진흥원 (K-DATA)',
      level: 'certified',
      time: '2~3개월',
      passRate: 40,
      fee: '50,000원',
      eligible: '제한 없음 (중학생 수준에는 상당한 공부 요구)',
      exam: '필기 50문항 (객관식 40 + 단답형 10, 90분)',
      certificate: '국가공인 민간자격 (K-DATA)',
      tip: '단답형 10문항의 배점이 큽니다. 단순 기출 암기보다는 3과목 데이터 분석 파트(상관분석, 회귀분석, 의사결정나무 등)의 수학적/통계적 개념을 철저히 잡아야 안전하게 과락을 피할 수 있습니다.',
      criteria: {
        summary: '데이터 이해, 데이터 분석 기획 및 R 프로그래밍 기반의 데이터 수치 분석 실무 역량 평가',
        tools: 'R Studio / R 언어 기반 알고리즘 이해',
        breakdown: [
          { item: '1과목: 데이터의 이해 (10문항)', desc: '데이터와 정보, 데이터베이스 정의, 빅데이터의 가치와 위기' },
          { item: '2과목: 데이터 분석 기획 (10문항)', desc: '분석 방법론, 마스터플랜 수립, 거버넌스 체계 설계' },
          { item: '3과목: 데이터 분석 (30문항)', desc: 'R 기초, 기초통계학, 다변량분석, 시계열분석, 데이터마이닝 모델링 기법' }
        ]
      },
      pastExams: [
        { title: '데이터자격시험 공식 기출 아카이브 사이트', type: 'official', url: 'https://www.dataq.or.kr' },
        { title: 'ADsP 회차별 기출문제 복원 모의고사 (ComCBT)', type: 'online', url: 'https://www.comcbt.com/xe/adsp' }
      ],
      useCases: [
        { field: '공공기관 채용 우대', benefit: '한전, 도로공사 등 수많은 공기업 사무/IT 기술직 서류 전형 가산점 부여' },
        { field: '학점은행제 대박 혜택', benefit: '자격 취득 즉시 학점은행제 전공 학점 **14학점** 무조건 인정' },
        { field: '대학 전공 조기 준비', benefit: '경영학, 통계학, 빅데이터사이언스학과 대학 전공 필수 이론 사전 통달' }
      ],
      schedule: [
        { round: '정기 시험 (연 4회)', written: '매년 3, 5, 8, 10월 경 정기 시험 접수', practical: '-' }
      ],
      links: [
        { icon: '🏛️', label: 'K-DATA 데이터자격검정센터 공식 포털', url: 'https://www.dataq.or.kr' }
      ]
    }
  ],
  ai: [
    {
      id: 'a1',
      trackId: 'ai',
      emoji: '🧠',
      name: 'Google AI Essentials 수료증',
      org: 'Google / Coursera',
      level: 'global',
      time: '2~4주',
      passRate: 90,
      fee: 'Coursera 구독료 ($39~49/월, 재정 지원 신청 시 100% 무료)',
      eligible: '제한 없음 (글로벌 코스)',
      exam: 'Coursera 온라인 동영상 완수 + 각 유닛별 퀴즈 80% 이상 통과',
      certificate: '구글 공식 디지털 수료증 및 뱃지',
      tip: '구글이 제작한 AI 교육입니다. 동영상을 시청하고 중간 퀴즈를 풀며, 실제 구글 제미나이(Gemini)에 적절한 프롬프트를 작성하는 실습형 방식으로 누구나 쉽게 통과 가능합니다.',
      criteria: {
        summary: '생성형 AI 기술의 개념 이해 및 일상/실무에 이를 응용하는 프롬프트 조작 기술 평가',
        tools: 'Google Gemini, Coursera 학습 관리 플랫폼',
        breakdown: [
          { item: '생성형 AI 원리 및 위협', desc: 'AI의 기계학습, 딥러닝 정의 및 환각(Hallucination), 편향에 대처하는 안전 원칙' },
          { item: '생성형 AI 프롬프트 전략', desc: '역할 지정, 타겟 명시, 출력 예시 지정 등 고급 프롬프트 기법 습득' },
          { item: '업무 자동화 및 기획 실습', desc: 'AI를 활용한 코딩 디버깅 보조, 이메일 초안 작성, 회의 요약, 데이터 기획안 도출' }
        ]
      },
      pastExams: [
        { title: 'Coursera Google AI Essentials 상세 정보', type: 'official', url: 'https://www.coursera.org/learn/google-ai-essentials' }
      ],
      useCases: [
        { field: '글로벌 커리어 증명', benefit: '링크드인(LinkedIn) 프로필에 구글 인증 AI 전문가 공식 배지 삽입 가능' },
        { field: 'AI 활용 포토폴리오', benefit: '동아리 산출물 제작 시 AI 기술을 프롬프트 단위에서 어떻게 연동하여 생산성을 높였는지 검증하는 자료' }
      ],
      schedule: [
        { round: '상시 수강', written: '자신의 일정에 맞추어 100% 온라인 자기주도형 학습', practical: '통합 온라인 평가' }
      ],
      links: [
        { icon: '🔵', label: 'Coursera 공식 강좌 사이트', url: 'https://www.coursera.org/learn/google-ai-essentials' }
      ]
    },
    {
      id: 'a2',
      trackId: 'ai',
      emoji: '☁️',
      name: 'MS Azure AI Fundamentals (AI-900)',
      org: 'Microsoft',
      level: 'global',
      time: '3~4주',
      passRate: 72,
      fee: '$165 USD (학생 할인 또는 무료 바우처 이벤트 활용)',
      eligible: '제한 없음',
      exam: '온라인 피어슨뷰(Pearson VUE) 실시간 화상 모니터링 필기시험 (40~50문항, 45분)',
      certificate: 'Microsoft Certified Fundamentals 인증서 (영구)',
      tip: '마이크로소프트의 클라우드 플랫폼인 Azure 환경에서 인공지능이 작동하는 원리와 클라우드 서비스 명칭을 매칭하는 유형입니다. MS 공식 학습 가이드 문서(MS Learn)를 3회독 하면 충분히 통과할 수 있습니다.',
      criteria: {
        summary: '인공지능(AI)과 머신러닝(ML)에 대한 기본적인 지식 및 관련 Microsoft Azure 클라우드 서비스를 구분하는 능력 검증',
        tools: 'MS Azure Portal, MS Learn 학습 플랫폼',
        breakdown: [
          { item: 'AI 워크로드 개요 (15-20%)', desc: 'AI 원칙, 머신러닝 모델, 딥러닝 개념, 책임감 있는 AI 규범 이해' },
          { item: '기초 머신러닝 (30-35%)', desc: '회귀, 분류, 군집화 모델 개념 및 Azure Machine Learning Studio 활용법' },
          { item: '컴퓨터 비전 / 자연어 (15-20%)', desc: 'OCR, 이미지 분석, 안면 인식, 감정 분석, 키워드 추출용 Azure 서비스 매칭' },
          { item: '생성형 AI 워크로드 (10-15%)', desc: 'Azure OpenAI 서비스, 대규모 언어 모델(LLM), 코파일럿 아키텍처 이해' }
        ]
      },
      pastExams: [
        { title: 'Microsoft Learn 공식 무료 AI-900 모의 평가 연습', type: 'official', url: 'https://learn.microsoft.com/ko-kr/credentials/certifications/azure-ai-fundamentals/practice/' },
        { title: 'AI-900 시험 대비 덤프 문제 모음집 사이트 (ExamTopics)', type: 'online', url: 'https://www.examtopics.com/exams/microsoft/ai-900/' }
      ],
      useCases: [
        { field: '빅테크 공식 증명', benefit: '글로벌 소프트웨어 거인인 마이크로소프트 공식 자격번호 부여 및 인증마크 제공' },
        { field: '학생 무료 바우처', benefit: 'MS 주최 대학생/학생 클라우드 챌린지 수료 시 시험 응시료 100% 전액 지원 바우처 획득 가능' }
      ],
      schedule: [
        { round: '상시 예약 시험', written: '자신이 원하는 요일 및 시간을 선택하여 자택이나 오프라인 테스트 센터에서 예약 시험 진행', practical: '-' }
      ],
      links: [
        { icon: '🟦', label: 'MS 공식 AI-900 자격 정보 포털', url: 'https://learn.microsoft.com/ko-kr/credentials/certifications/azure-ai-fundamentals/' }
      ]
    },
    {
      id: 'a3',
      trackId: 'ai',
      emoji: '🌩️',
      name: 'AWS Certified Cloud Practitioner (CLF-C02)',
      org: 'Amazon Web Services (AWS)',
      level: 'global',
      time: '1개월',
      passRate: 68,
      fee: '$100 USD (학생용 50% 할인 혜택 상시 존재)',
      eligible: '제한 없음',
      exam: '비대면 온라인 모니터링 or 오프라인 지정 센터 필기 (65문항, 90분)',
      certificate: 'AWS 공식 인증 자격증 (3년 유효)',
      tip: 'AWS는 클라우드 1위 플랫폼. 가상 서버(EC2), 파일 스토리지(S3), 데이터베이스(RDS), 서버리스(Lambda) 등 수많은 서비스 명칭과 그 역할 및 보안 정책 매칭 문제가 다수 출제됩니다.',
      criteria: {
        summary: 'AWS 클라우드 인프라, 보안, 아키텍처, 빌링 및 가격 모델에 대한 종합 지식 평가',
        tools: 'AWS Console, AWS Skill Builder',
        breakdown: [
          { item: '클라우드 개념 (24%)', desc: '클라우드 아키텍처 원칙, AWS 공동 책임 모델 및 경제성 이해' },
          { item: '보안 및 규정 준수 (30%)', desc: 'AWS IAM 권한 관리, 보안 그룹, 데이터 암호화, 보안 모니터링 인프라' },
          { item: '클라우드 기술 및 서비스 (34%)', desc: '컴퓨팅(EC2, Lambda), 네트워크(VPC, Route53), 스토리지(S3, EBS) 서비스 명칭' },
          { item: '결제 및 과금 (12%)', desc: 'AWS 요금 지불 방식, 비용 모니터링 도구, 가격 모델 옵션 분석' }
        ]
      },
      pastExams: [
        { title: 'AWS Skill Builder 공식 무료 연습 시험 코스', type: 'official', url: 'https://explore.skillbuilder.aws/ko/catalog?q=cloud-practitioner-practice' },
        { title: 'AWS Cloud Practitioner 기출 시험 덤프 사이트 (ExamTopics)', type: 'online', url: 'https://www.examtopics.com/exams/amazon/aws-certified-cloud-practitioner/' }
      ],
      useCases: [
        { field: 'AWS 공식 취업 우대', benefit: '서버 인프라 구축의 근간인 AWS 기본 역량을 증명하여 IT 개발 취업 시 탁월한 우대 가산점 획득' },
        { field: '클라우드 할인 바우처', benefit: '자격 합격 시 다음 등급 시험(AWS Developer 등) 50% 할인 바우처 및 모의고사 바우처 자동 증정' }
      ],
      schedule: [
        { round: '상시 예약 시험', written: '피어슨뷰 시험 플랫폼을 통해 온라인 상시 예약 및 오프라인 주말 센터 응시 가능', practical: '-' }
      ],
      links: [
        { icon: '🟠', label: 'AWS 공식 클라우드 Practitioner 안내', url: 'https://aws.amazon.com/ko/certification/certified-cloud-practitioner/' }
      ]
    },
    {
      id: 'a4',
      trackId: 'ai',
      emoji: '📚',
      name: 'Google Machine Learning Crash Course 수료증',
      org: 'Google Developer',
      level: 'global',
      time: '2~3주',
      passRate: 90,
      fee: '무료 (0원)',
      eligible: '제한 없음',
      exam: '유닛별 핵심 질문 자율 평가 통과 및 Colab 실습 구현 완료',
      certificate: '구글 개발자 교육 수료 인증서',
      tip: '실제 구글 엔지니어들이 머신러닝 기초를 배울 때 사용하는 최고의 무료 온라인 코스입니다. 텐서플로(TensorFlow) 기반으로 작동하는 머신러닝 이론을 심층적으로 정복할 수 있으며 완전 무료입니다.',
      criteria: {
        summary: '경사하강법, 손실 함수, 모델 일반화 등 본격적인 기계학습 모델 설계 능력 측정',
        tools: 'Google Colab, TensorFlow / Keras, Python 3',
        breakdown: [
          { item: '머신러닝 개념 기초', desc: '손실(Loss) 최소화, 선형 회귀, 경사 하강법 학습률 매개변수 설정' },
          { item: '분류 및 정규화', desc: '임계값 설정, 오차행렬 분석(정밀도, 재현율, ROC 곡선), L1/L2 규제화 기법' },
          { item: '신경망(Neural Networks)', desc: '심층 신경망 레이어 설계, 활성화 함수(Relu, Sigmoid) 응용, 모델 다중분류' }
        ]
      },
      pastExams: [
        { title: 'Google 머신러닝 단기집중과정 공식 포털', type: 'official', url: 'https://developers.google.com/machine-learning/crash-course' }
      ],
      useCases: [
        { field: '고급 인공지능 연구', benefit: '단순 사용자가 아닌 딥러닝/머신러닝 알고리즘 수학 구조를 이해하고 있음을 수료 배지로 증명' },
        { field: '동아리 머신러닝 스터디', benefit: '프로그래밍 실습 코드로 구성되어 동아리 내 AI 모델 빌드업 스터디 텍스트로 적격' }
      ],
      schedule: [
        { round: '상시 수강', written: '온라인 오픈 플랫폼에서 24시간 언제든 학습 및 유닛 패스 진행', practical: 'Colab 실무 통합 평가' }
      ],
      links: [
        { icon: '🔵', label: 'Google ML Crash Course 공식 교육 센터', url: 'https://developers.google.com/machine-learning/crash-course' }
      ]
    }
  ]
};

/* ============================================================
   SUB-COMPONENTS
   ============================================================ */
function BadgePill({ level }) {
  const b = BADGE_MAP[level];
  return <span className={`cert-row-badge ${b.cls}`}>{b.label}</span>;
}

function PassRateBar({ rate, color }) {
  return (
    <div className="pass-rate-wrap">
      <div className="pass-rate-label">
        <span>합격률</span><span>{rate}%</span>
      </div>
      <div className="pass-rate-bar">
        <div className="pass-rate-fill" style={{ width: `${rate}%`, background: color }} />
      </div>
    </div>
  );
}

/* ============================================================
   HOME PAGE
   ============================================================ */
function HomePage({ onSelectTrack }) {
  const allCerts = Object.values(CERTS).flat();

  return (
    <div>
      {/* Hero */}
      <div className="home-hero">
        <p className="home-hero-eyebrow">🏅 코딩 동아리 · 자격증 로드맵</p>
        <h1>어떤 역량을 기르고 싶나요?</h1>
        <p>중학생도 6개월 안에 딸 수 있는<br />IT · 디자인 · 마케팅 · AI 자격증 모음</p>
      </div>

      {/* Track Cards */}
      <div className="home-section">
        <div className="section-header">
          <h2>트랙 선택</h2>
        </div>
        <div className="track-grid">
          {TRACKS.map(track => (
            <button
              key={track.id}
              className="track-card"
              style={{ background: track.gradient }}
              onClick={() => onSelectTrack(track)}
              aria-label={`${track.fullTitle} 트랙 보기`}
            >
              <div>
                <span className="track-card-badge">📋 {track.certCount}개</span>
                <h2 className="track-card-title">{track.fullTitle}</h2>
                <p className="track-card-desc">{track.description}</p>
              </div>
              <span className="track-card-emoji" aria-hidden="true">{track.emoji}</span>
            </button>
          ))}
        </div>
      </div>

      {/* All Certs Quick List */}
      <div className="home-section">
        <div className="section-header">
          <h2>전체 자격증 ({allCerts.length}개)</h2>
        </div>
        {allCerts.map((cert, i) => {
          const track = TRACKS.find(t => t.id === cert.trackId);
          return (
            <div
              key={cert.id}
              className="cert-row"
              onClick={() => onSelectTrack(track, cert)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && onSelectTrack(track, cert)}
            >
              <span className="cert-row-num">{i + 1}</span>
              <div className="cert-row-icon" style={{ background: track.gradient }}>
                {cert.emoji}
              </div>
              <div className="cert-row-info">
                <div className="cert-row-name">{cert.name}</div>
                <div className="cert-row-org">{cert.org}</div>
              </div>
              <BadgePill level={cert.level} />
              <div className="cert-row-time">{cert.time}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ============================================================
   TRACK DETAIL PAGE
   ============================================================ */
function TrackDetailPage({ track, onBack, onSelectCert }) {
  const certs = CERTS[track.id];

  return (
    <div>
      {/* Hero */}
      <div className="track-hero">
        <div className="track-hero-bg" style={{ background: track.gradient }} />
        <div className="track-hero-content">
          <div className="track-cover" style={{ background: track.gradient }}>
            {track.emoji}
          </div>
          <div className="track-meta">
            <p className="track-type">자격증 트랙</p>
            <h1>{track.fullTitle}</h1>
            <p>
              <span className="cert-count">{certs.length}개 자격증</span> &nbsp;·&nbsp; {track.description}
            </p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="track-actions">
        <button className="btn-back" onClick={onBack}>
          ← 홈으로
        </button>
      </div>

      {/* List Header */}
      <div className="cert-list-header">
        <span>#</span>
        <span>자격증</span>
        <span>유형</span>
        <span style={{ textAlign: 'right' }}>준비기간</span>
      </div>

      {/* Cert List */}
      <div className="cert-list-body">
        {certs.map((cert, i) => (
          <div
            key={cert.id}
            className="cert-list-row"
            onClick={() => onSelectCert(cert)}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && onSelectCert(cert)}
          >
            <div className="cert-list-index">
              <span className="cert-list-num">{i + 1}</span>
              <span className="cert-list-play">🔍</span>
            </div>
            <div className="cert-list-info">
              <div className="cert-list-icon" style={{ background: track.gradient }}>
                {cert.emoji}
              </div>
              <div>
                <div className="cert-list-name">{cert.name}</div>
                <div className="cert-list-org">{cert.org}</div>
              </div>
            </div>
            <div className="cert-list-level">
              <BadgePill level={cert.level} />
            </div>
            <div className="cert-list-time">{cert.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   CERT DETAIL PAGE (Tabs: 기본정보 / 출제기준 / 기출문제 / 활용사례)
   ============================================================ */
function CertDetailPage({ cert, track, onBack, onBackToTrack }) {
  const [activeTab, setActiveTab] = useState('info'); // 'info' | 'criteria' | 'exams' | 'usecases'

  return (
    <div>
      {/* Hero */}
      <div className="detail-hero">
        <div className="detail-hero-bg" style={{ background: track.gradient }} />
        <div className="detail-hero-content">
          <div className="detail-cover" style={{ background: track.gradient }}>
            {cert.emoji}
          </div>
          <div className="detail-meta">
            <nav className="breadcrumb" aria-label="탐색경로">
              <button onClick={onBack}>홈</button>
              <span>›</span>
              <button onClick={onBackToTrack}>{track.fullTitle}</button>
              <span>›</span>
              <span style={{ color: 'var(--text-primary)' }}>{cert.name}</span>
            </nav>
            <h1>{cert.name}</h1>
            <p className="detail-org">{cert.org}</p>
            <div className="detail-tags">
              <BadgePill level={cert.level} />
              <span className="tag">📅 {cert.time}</span>
              <span className="tag">🪙 {cert.fee.split(' / ')[0]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation & Action Header */}
      <div className="detail-actions" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '0' }}>
        <button className="btn-back" style={{ marginBottom: '16px' }} onClick={onBackToTrack}>
          ← {track.fullTitle}
        </button>

        {/* Tab Buttons (Spotify styled underliner) */}
        <div style={{ display: 'flex', gap: '24px', width: '100%', marginTop: '8px' }}>
          <button 
            onClick={() => setActiveTab('info')}
            style={{ 
              padding: '12px 4px', 
              fontSize: '15px', 
              fontWeight: 700, 
              borderBottom: activeTab === 'info' ? `3px solid ${track.color}` : '3px solid transparent',
              color: activeTab === 'info' ? 'var(--text-primary)' : 'var(--text-secondary)'
            }}
          >
            기본 정보
          </button>
          <button 
            onClick={() => setActiveTab('criteria')}
            style={{ 
              padding: '12px 4px', 
              fontSize: '15px', 
              fontWeight: 700, 
              borderBottom: activeTab === 'criteria' ? `3px solid ${track.color}` : '3px solid transparent',
              color: activeTab === 'criteria' ? 'var(--text-primary)' : 'var(--text-secondary)'
            }}
          >
            출제 기준
          </button>
          <button 
            onClick={() => setActiveTab('exams')}
            style={{ 
              padding: '12px 4px', 
              fontSize: '15px', 
              fontWeight: 700, 
              borderBottom: activeTab === 'exams' ? `3px solid ${track.color}` : '3px solid transparent',
              color: activeTab === 'exams' ? 'var(--text-primary)' : 'var(--text-secondary)'
            }}
          >
            기출문제 & 학습링크
          </button>
          <button 
            onClick={() => setActiveTab('usecases')}
            style={{ 
              padding: '12px 4px', 
              fontSize: '15px', 
              fontWeight: 700, 
              borderBottom: activeTab === 'usecases' ? `3px solid ${track.color}` : '3px solid transparent',
              color: activeTab === 'usecases' ? 'var(--text-primary)' : 'var(--text-secondary)'
            }}
          >
            활용사례 & 혜택
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="detail-body">
        <div>
          {/* TAB 1: 기본 정보 */}
          {activeTab === 'info' && (
            <div>
              {/* Stats */}
              <div className="detail-stats-grid">
                <div className="stat-card">
                  <div className="stat-label">합격률</div>
                  <div className="stat-value">{cert.passRate}%</div>
                  <PassRateBar rate={cert.passRate} color={track.color} />
                </div>
                <div className="stat-card">
                  <div className="stat-label">응시자격</div>
                  <div className="stat-value" style={{ fontSize: '14px', marginTop: '4px' }}>{cert.eligible}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">시험방식</div>
                  <div className="stat-value" style={{ fontSize: '13px', marginTop: '4px', fontWeight: 600 }}>{cert.exam}</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">자격증 종류</div>
                  <div className="stat-value" style={{ fontSize: '14px', marginTop: '4px' }}>{cert.certificate}</div>
                </div>
              </div>

              {/* 팁 */}
              <div className="detail-section">
                <div style={{
                  background: `linear-gradient(135deg, ${track.color}22, ${track.color}11)`,
                  border: `1px solid ${track.color}44`,
                  borderRadius: 'var(--r-md)', padding: '20px 24px',
                }}>
                  <p style={{ fontSize: '13px', fontWeight: 700, color: track.color, marginBottom: '6px' }}>💡 동아리 추천 포인트</p>
                  <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-secondary)' }}>{cert.tip}</p>
                </div>
              </div>

              {/* 시험 일정 */}
              <div className="detail-section">
                <h2>시험 일정</h2>
                <div className="schedule-list">
                  {cert.schedule.map((s, i) => (
                    <div key={i} className="schedule-item">
                      <div className="schedule-round">{s.round}</div>
                      <div className="schedule-info">
                        {s.written !== '-' && (
                          <div className="schedule-title">구분: {s.written}</div>
                        )}
                        {s.practical !== '-' && (
                          <div className="schedule-date">일정: {s.practical}</div>
                        )}
                        {s.written === '-' && s.practical === '-' && (
                          <div className="schedule-title">{s.round}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: 출제 기준 */}
          {activeTab === 'criteria' && (
            <div>
              <div className="detail-section">
                <h2>출제 기준 개요</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '15px' }}>
                  {cert.criteria.summary}
                </p>
                <div style={{ background: 'var(--bg-card)', padding: '16px 20px', borderRadius: 'var(--r-md)', marginBottom: '24px', border: '1px solid rgba(255,255,255,0.04)' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-tertiary)', fontWeight: 700 }}>실무 평가 도구: </span>
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>{cert.criteria.tools}</span>
                </div>
              </div>

              <div className="detail-section">
                <h2>세부 평가 과목</h2>
                <table className="subject-table">
                  <thead>
                    <tr>
                      <th style={{ width: '220px' }}>평가 항목</th>
                      <th>세부 요구 내용</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cert.criteria.breakdown.map((item, i) => (
                      <tr key={i}>
                        <td style={{ fontWeight: 600 }}>{item.item}</td>
                        <td style={{ color: 'var(--text-secondary)' }}>{item.detail || item.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: 기출문제 & 학습링크 */}
          {activeTab === 'exams' && (
            <div>
              <div className="detail-section">
                <h2>기출문제 및 자료실 링크</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '14px' }}>
                  공식적으로 제공되는 공개샘플 및 모의고사를 직접 학습해 볼 수 있는 링크입니다.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {cert.pastExams ? cert.pastExams.map((exam, i) => (
                    <a
                      key={i}
                      href={exam.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: 'var(--bg-card)',
                        padding: '16px 24px',
                        borderRadius: 'var(--r-md)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        transition: 'background var(--transition)'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.background = 'var(--bg-card-hover)'}
                      onMouseOut={(e) => e.currentTarget.style.background = 'var(--bg-card)'}
                    >
                      <div>
                        <span style={{ fontSize: '12px', fontWeight: 600, color: track.color, textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                          {exam.type === 'official' ? '공식 자료실' : exam.type === 'download' ? '직접 다운로드' : '온라인 연습'}
                        </span>
                        <span style={{ fontSize: '15px', fontWeight: 600 }}>{exam.title}</span>
                      </div>
                      <span style={{ fontSize: '16px', color: 'var(--text-tertiary)' }}>바로가기 ↗</span>
                    </a>
                  )) : (
                    <p style={{ color: 'var(--text-secondary)' }}>이 자격증/수료증은 별도의 기출문제가 필요 없는 동영상 이수/오픈북 퀴즈 형태입니다.</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: 활용 사례 & 혜택 */}
          {activeTab === 'usecases' && (
            <div>
              <div className="detail-section">
                <h2>실무 활용 사례 및 혜택</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '14px' }}>
                  자격을 취득할 경우 얻을 수 있는 학교 기록, 대입, 학점 및 실무 적용 방안입니다.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {cert.useCases.map((uc, i) => (
                    <div key={i} style={{ display: 'flex', gap: '16px', background: 'var(--bg-card)', padding: '20px', borderRadius: 'var(--r-md)', border: '1px solid rgba(255,255,255,0.04)' }}>
                      <div style={{
                        width: '40px', height: '40px', borderRadius: 'var(--r-xs)',
                        background: `${track.color}22`, color: track.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '20px', fontWeight: 700, flexShrink: 0
                      }}>
                        {i + 1}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '6px', color: 'var(--text-primary)' }}>{uc.field}</h3>
                        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{uc.benefit}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="detail-sidebar">
          <div className="info-card">
            <div className="info-card-title">기본 검정 정보</div>
            <div className="info-row">
              <span className="info-key">주관 기관</span>
              <span className="info-val">{cert.org}</span>
            </div>
            <div className="info-row">
              <span className="info-key">응시 자격</span>
              <span className="info-val">{cert.eligible}</span>
            </div>
            <div className="info-row">
              <span className="info-key">검정료</span>
              <span className="info-val" style={{ maxWidth: '140px', wordBreak: 'keep-all' }}>{cert.fee}</span>
            </div>
            <div className="info-row">
              <span className="info-key">권장 준비기간</span>
              <span className="info-val">{cert.time}</span>
            </div>
          </div>

          <div className="link-card">
            <div className="link-card-title">🔗 공식 접수 및 안내</div>
            {cert.links.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="official-link"
              >
                <span className="link-icon">{link.icon}</span>
                <span>{link.label}</span>
                <span className="link-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   SIDEBAR
   ============================================================ */
function Sidebar({ currentPage, onNavigate }) {
  return (
    <nav className="sidebar" aria-label="사이드바 내비게이션">
      <div className="sidebar-logo">
        <Logo />
        <div>
          <div className="logo-text">자격증 로드맵</div>
          <div className="logo-sub">코딩 동아리 에디션</div>
        </div>
      </div>

      <div>
        <p className="sidebar-section-title">메인</p>
        <div className="sidebar-nav">
          <button
            className={`sidebar-nav-item ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => onNavigate('home')}
          >
            <span className="nav-icon">🏠</span> 홈
            <span className="nav-dot" />
          </button>
        </div>
      </div>

      <div>
        <p className="sidebar-section-title">자격증 분야</p>
        <div className="sidebar-nav">
          {TRACKS.map(track => (
            <button
              key={track.id}
              className={`sidebar-nav-item ${currentPage === track.id ? 'active' : ''}`}
              onClick={() => onNavigate(track.id)}
            >
              <span className="nav-icon">{track.emoji}</span>
              {track.title}
              <span className="nav-dot" />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ============================================================
   APP ROOT
   ============================================================ */
export default function App() {
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  function goHome() {
    setSelectedTrack(null);
    setSelectedCert(null);
  }

  function goTrack(track) {
    setSelectedTrack(track);
    setSelectedCert(null);
  }

  function goCert(cert) {
    setSelectedCert(cert);
  }

  function handleSidebarNav(id) {
    if (id === 'home') { goHome(); return; }
    const track = TRACKS.find(t => t.id === id);
    if (track) goTrack(track);
  }

  // Determine sidebar active
  const sidebarPage = selectedCert
    ? selectedTrack?.id
    : selectedTrack
    ? selectedTrack.id
    : 'home';

  return (
    <div className="app-wrapper">
      <Sidebar currentPage={sidebarPage} onNavigate={handleSidebarNav} />
      <main className="main-content" id="main">
        {selectedCert ? (
          <CertDetailPage
            cert={selectedCert}
            track={selectedTrack}
            onBack={goHome}
            onBackToTrack={() => goTrack(selectedTrack)}
          />
        ) : selectedTrack ? (
          <TrackDetailPage
            track={selectedTrack}
            onBack={goHome}
            onSelectCert={goCert}
          />
        ) : (
          <HomePage
            onSelectTrack={(track, cert) => {
              if (cert) { setSelectedTrack(track); goCert(cert); }
              else goTrack(track);
            }}
          />
        )}
      </main>
    </div>
  );
}
