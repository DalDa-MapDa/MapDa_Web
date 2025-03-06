import React from "react";
import './promotion_landing.css';
import { Helmet } from "react-helmet";
import MapDa_Icon from './images/map-da.svg';
import GooglePlay from './images/googleplay.svg';
import AppStore from './images/appstore.svg';
import PhoneImage from './images/Phone.png';
import Circle1 from './images/circle1.svg';

const PromotionLanding = () => {
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
}

export default PromotionLanding;
