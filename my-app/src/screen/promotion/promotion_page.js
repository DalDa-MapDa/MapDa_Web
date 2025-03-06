import React, { useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import './promotion_landing.css';
import MapDa_Icon from './images/map-da.svg';
import GooglePlay from './images/googleplay.svg';
import AppStore from './images/appstore.svg';
import PhoneImage from './images/Phone.png';
import Circle1 from './images/circle1.svg';

const PromotionPage = () => {
  const apiCalled = useRef(false);

  // API 요청을 처리하는 함수
  const callPromotionAPI = (redirectUrl) => {
    const params = new URLSearchParams(window.location.search);
    const utm_source = params.get('utm_source') || '';
    const utm_medium = params.get('utm_medium') || '';
    const utm_campaign = params.get('utm_campaign') || '';
    const utm_content = params.get('utm_content') || '';

    const apiUrl = `https://api.mapda.site/promotion?utm_source=${encodeURIComponent(utm_source)}&utm_medium=${encodeURIComponent(utm_medium)}&utm_campaign=${encodeURIComponent(utm_campaign)}&utm_content=${encodeURIComponent(utm_content)}`;

    fetch(apiUrl)
      .then((response) => {
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
        // 오류 발생 시 추가 처리 가능 (예: window.close())
      });
  };

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = userAgent.includes('iphone') || userAgent.includes('ipad');
    const isAndroid = userAgent.includes('android');

    let redirectUrl = "";

    if (isIOS) {
      redirectUrl = "https://apps.apple.com/kr/app/%EB%A7%B5%EB%8B%A4-map-da/id6503710373";
    } else if (isAndroid) {
      redirectUrl = "https://play.google.com/store/apps/details?id=com.dalda.mapda&hl=ko";
    } else {
      console.error('해당하는 OS가 없습니다. 브라우저를 닫습니다.');
      return;
    }

    if (!apiCalled.current) {
      apiCalled.current = true;
      callPromotionAPI(redirectUrl);
    }
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Map:Da</title>
        <meta name="description" content="모든 휠체어 사용자가 자유롭게 이동할 수 있는 세상을 만드는 달다 팀의 프로모션 페이지" />
        {/* 필요한 다른 meta 태그들 추가 */}
      </Helmet>
      <body className="gradient" style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div className="global_margin">
          <div className="speech-bubble">
            앗! 위험 구간입니다 주의하세요!
          </div>
          <div className="mapda_title">
            <img src={MapDa_Icon} alt="Map Da" className="mapda_icon" />
            <div className="mapda_title_h1">
              맵다
            </div>
            <div className="mapda_title_small_area">
              <div>
                <div id="circle"></div>
                <div className="mapda_title_small_box1">
                  Map
                </div>
              </div>
              <div className="mapda_title_small_text">
                으로 모두
              </div>
              <div className="mapda_title_small_box2">
                다
              </div>
              <div className="mapda_title_small_text">
                하나되는 세상
              </div>
            </div>
          </div>
          <div className="store_area">
            <a href="https://play.google.com/store/apps/details?id=com.dalda.mapda">
              <img src={GooglePlay} alt="GooglePlay" className="store_icon" />
            </a>
            <a href="https://apps.apple.com/kr/app/%EB%A7%B5%EB%8B%A4-map-da/id6503710373">
              <img src={AppStore} alt="Apple AppStore" className="store_icon" />
            </a>
          </div>
          <div className="center_area">
            {/* 원 배경 */}
            <div className="center_circle_background"></div>
            {/* 이미지 */}
            <img src={PhoneImage} className="phone_image" alt="MapDa Phone" />
          </div>
          <div className="team_vision_area">
            <div className="team_vision_title_area">
              <p className="team_vision_title">
                우리는 지도를 통해 모든 휠체어 사용자가<br />
                어디든 자유롭게 이동할 수 있는 세상을 만들어 나갈 것입니다.
              </p>
              <p className="team_vision_member">
                -달다 팀 일동-
              </p>
            </div>
            <div className="team_vision_circle_area">
              <img src={Circle1} alt="Circle1" className="team_vision_ciecle1" />
              <img src={Circle1} alt="Circle1" className="team_vision_ciecle2" />
            </div>
          </div>
        </div>
        <footer>
          <div className="footer_area">
            <div className="footer_text_area">
              <a className="footer_text" href="https://www.mapda.site/term/service">서비스 이용약관</a>
              <a className="footer_text" href="https://www.mapda.site/term/privacy">개인정보처리방침</a>
            </div>
            <p className="footer_text">Copyright © Team Dal:Da All Rights Reserved</p>
          </div>
        </footer>
      </body>
    </>
  );
};

export default PromotionPage;
