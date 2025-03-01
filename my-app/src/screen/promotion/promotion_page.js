import React, { useEffect, useRef } from 'react';

const PromotionPage = () => {
  const apiCalled = useRef(false);

  // API 요청을 처리하는 함수
  const callPromotionAPI = (redirectUrl) => {
    // URL의 쿼리 파라미터 파싱
    const params = new URLSearchParams(window.location.search);
    const utm_source = params.get('utm_source') || '';
    const utm_medium = params.get('utm_medium') || '';
    const utm_campaign = params.get('utm_campaign') || '';
    const utm_content = params.get('utm_content') || '';

    // API 엔드포인트 URL 구성 (파라미터 인코딩)
    const apiUrl = `https://api.mapda.site/promotion?utm_source=${encodeURIComponent(utm_source)}&utm_medium=${encodeURIComponent(utm_medium)}&utm_campaign=${encodeURIComponent(utm_campaign)}&utm_content=${encodeURIComponent(utm_content)}`;

    fetch(apiUrl)
      .then((response) => {
        // HTTP 에러 상태 처리
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // API 요청이 완료되면 리디렉션
        window.location.href = redirectUrl;
      })
      .catch((error) => {
        console.error('프로모션 API 호출 에러:', error);
        // 오류 발생 시 브라우저를 닫도록 함.
        // 실제 브라우저 종료를 원하면 아래 코드를 주석 해제하세요.
        // window.close();
      });
  };

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    // iOS와 Android 여부를 변수로 분리
    const isIOS = userAgent.includes('iphone') || userAgent.includes('ipad');
    const isAndroid = userAgent.includes('android');

    let redirectUrl = '';

    if (isIOS) {
      redirectUrl = "https://apps.apple.com/kr/app/%EB%A7%B5%EB%8B%A4-map-da/id6503710373";
    } else if (isAndroid) {
      redirectUrl = "https://play.google.com/store/apps/details?id=com.dalda.mapda&hl=ko";
    } else {
      console.error('해당하는 OS가 없습니다. 브라우저를 닫습니다.');
      // OS가 해당되지 않으면 API 요청 없이 브라우저 종료 처리 (실제 종료는 주석 처리)
      // window.close();
      return;
    }

    // iOS 또는 Android일 경우에만 API 요청 실행
    if (!apiCalled.current) {
      apiCalled.current = true;
      callPromotionAPI(redirectUrl);
    }
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '30vh' }}>
      <h2>잠시만 기다려주세요...</h2>
      <p>프로모션 정보를 처리 중입니다.</p>
    </div>
  );
};

export default PromotionPage;
