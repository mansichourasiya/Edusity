import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

export default function Testimonials() {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
        tx += 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} className="next-btn" onClick={slideForward} />
      <img src={back_icon} className="back-btn" onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
        <li>
  <div className="slide">
    <div className="user-info">
      <img src={user_1} />
      <div>
        <h3>Emma Wilson</h3>
        <span>TechVision University, Canada</span>
      </div>
    </div>
    <p>
      Attending TechVision University has been a life-changing experience for me. The innovative curriculum, cutting-edge research opportunities, and collaborative atmosphere have opened up numerous opportunities for my future.
    </p>
  </div>
</li>
<li>
  <div className="slide">
    <div className="user-info">
      <img src={user_2} />
      <div>
        <h3>James Anderson</h3>
        <span>Innovate Institute, UK</span>
      </div>
    </div>
    <p>
      Innovate Institute has given me the skills and knowledge I need to excel in the tech industry. The focus on hands-on learning and industry partnerships has been invaluable in shaping my career.
    </p>
  </div>
</li>
<li>
  <div className="slide">
    <div className="user-info">
      <img src={user_3} />
      <div>
        <h3>Olivia Martinez</h3>
        <span>Global University, Australia</span>
      </div>
    </div>
    <p>
      Studying at Global University has been a rewarding journey. The diverse and inclusive environment, combined with world-class faculty, has helped me grow both personally and professionally.
    </p>
  </div>
</li>
<li>
  <div className="slide">
    <div className="user-info">
      <img src={user_4} />
      <div>
        <h3>Michael Thompson</h3>
        <span>FutureTech University, Germany</span>
      </div>
    </div>
    <p>
      Choosing FutureTech University was the best decision I made for my career. The university's emphasis on research and technology innovation has equipped me with the tools I need to succeed in the rapidly changing world of tech.
    </p>
  </div>
</li>

        </ul>
      </div>
    </div>
  );
}
