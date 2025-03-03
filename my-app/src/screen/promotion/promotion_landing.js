import React from "react";
import './promotion_landing.css';
import MapDa_Icon from './images/map-da.svg';


const PromotionLanding = () => {
  return (
    <div className="gradient" style={{
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
          <img src={MapDa_Icon} alt="Map Da" style={{ width: '71px' }} />
          <div className="mapda_title_h1">
            맵다
          </div>
          <div className="mapda_title_small_area">
            <div>
              <div id="circle"></div>
              <div className="mapda_title_small_box">
                Map
              </div>
            </div>

            <div className="mapda_title_small_text">
              으로 모두
            </div>
            <div className="mapda_title_small_box">
              다
            </div>
            <div className="mapda_title_small_text">
              하나되는 세상
            </div>
          </div>
        </div>
        <div className="google_play_store">
          
        </div>
      </div>
    </div>
  );
}

export default PromotionLanding;
