import React from "react";
import {useRef} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Founder from "../../Assets/imgs/Founder.png";
import Platform from "../../Assets/imgs/platfoem.png";
import Security from '../../Assets/imgs/Security.png';
import project from '../../Assets/imgs/project.png';
import build from '../../Assets/imgs/build.png';
import presence from '../../Assets/imgs/presence.png';
import leftshawdo from '../../Assets/imgs/leftshawdo.png';

const About = () => {

  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 17/15,
    // slidesToShow:1,
        slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
<>
    
    <div className="md:p-32 padding-sm px-6 pt-28 md:pb-10 pb-20 relative" id="about">
      <div>
      <img src={leftshawdo} alt="" className="-mt-[57rem] absolute -left-[44rem] -top-96 w-full -z-10 opacity-100"/>
</div>
      <div className="text-center space-y-10 text-blue-950 pb-14">
        {/* <h4 className="tracking-wide">ABOUT US</h4> */}
        <h2 className="text-4xl">Who Are We?</h2>
      </div>

      <div className="hidden md:block">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 p-4">
          <div className="card_bg shadow-md p-5 h-auto md:h-[28rem] z-20 border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium mb-2 tab_font" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Founder <br />Credentials</h2>
              <img src={Founder} alt="" className="md:w-28  lg:w-32 w-28 tab_image"/>
            </div>
            <div className="pt-24 pb-5 leading-7" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <p>
                Founded by <span className="font-medium">Mohit Malhotra, ex MD & CEO of Godrej Properties</span>,
                who transformed Godrej Properties into a market leader in his 12
                years journey
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="card_bg shadow-md p-5 h-auto md:h-[28rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium mb-2 tab_font" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                Integrated
                <br />
                Platform
              </h2>
              <img src={Platform} alt="" className="md:w-28  lg:w-32 w-28 tab_image"/>
            </div>
            <div className="pt-24 pb-5 leading-7" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <p>
                A unique&nbsp; integrated residential <br /> platform with both fund
                management business and its own development arm
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="card_bg shadow-md p-5 h-auto md:h-[28rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium mb-2 tab_font" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                Financial
                <br />
                Strength
              </h2>
              <img src={Security} alt="" className="md:w-28  lg:w-32 w-28 tab_image"/>
            </div>
            <div className="pt-24 pb-5 leading-7" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            <p>
            The platform has secured funding from <span className="font-medium">UHNI family offices and 360 ONE</span> - India’s leading wealth management firm with more than <span className="font-medium">USD 65 Bn AUM</span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="card_bg shadow-md p-5 h-auto md:h-[28rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium mb-2 tab_font" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Delivery <br />Assurance </h2>
              <img src={project} alt="" className="md:w-28  lg:w-32 w-28 tab_image"/>
            </div>
            <div className="pt-24 pb-5 leading-7" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <p>
                All projects are backed by SEBI approved equity AIF Fund
                ensuring financial security and assurance of timely delivery
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="card_bg shadow-md p-5 h-auto md:h-[28rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium mb-2 tab_font"  data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                Professionally
                <br />
                Built
              </h2>
              <img src={build} alt="" className="md:w-28  lg:w-32 w-28 tab_image"/>
            </div>
            <div className="pt-24 pb-5 leading-7" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <p>
                Built by industry experts with 150+ years of experience of
                capital raise, land investments & 200 Mn Sq ft project execution
                in Indian real estate space
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-4">
          <div className="card_bg shadow-md p-5 h-auto md:h-[28rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium mb-2 tab_font" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Multi-City <br />Presence</h2>
              <img src={presence} alt="" className="md:w-28  lg:w-32 w-28 tab_image"/>
            </div>
            <div className="pt-24 pb-5 leading-7" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <p>
                Opened offices and setup teams in Mumbai and Delhi NCR with
                focus on premium residential projects in both markets
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="slider-container text-center md:hidden">
      <Slider   {...settings}>
      <div className="px-2 ml-10">
      <div className="card_bg shadow-md py-5 px-4 h-[25rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-normal mb-2" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Founder <br />Credentials</h2>
              <img src={Founder} alt="" className="md:w-32 w-16"/>
            </div>
            <div className="pt-20 pb-5 leading-7 text-left" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            <p>
                Founded by <span className="font-medium">Mohit Malhotra, ex MD & CEO of Godrej Properties</span>,
                who transformed Godrej Properties into a market leader in his 12
                years journey
              </p>
            </div>
          </div>
      </div>
         <div className="px-2 ml-10">
         <div className="card_bg shadow-md py-5 px-4 h-[25rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-normal mb-2" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                Integrated
                <br />
                Platform
              </h2>
              <img src={Platform} alt="" className="md:w-32 w-16"/>
            </div>
            <div className="pt-20 pb-5 leading-7 text-left" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <p>
                A unique integrated <br /> residential platform with both fund
                management business and its own development arm
              </p>
            </div>
          </div>
         </div>
         <div className="px-5 ml-8">
         <div className="card_bg shadow-md py-5 px-4 h-[25rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-normal mb-2" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                Financial
                <br />
                Strength
              </h2>
              <img src={Security} alt="" className="md:w-32 w-16"/>
            </div>
            <div className="pt-20 pb-5 leading-7 text-left" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
            <p>
            The platform has secured funding from <span className="font-medium">UHNI family offices and 360 ONE</span> - India’s leading wealth management firm with more than <span className="font-medium">USD 50 Bn AUM</span>
              </p>
            </div>
          </div>
         </div>
         <div className="px-5 ml-8">
         <div className="card_bg shadow-md py-5 px-4 h-[25rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-normal mb-2" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Delivery <br /> Assurance</h2>
              <img src={project} alt="" className="md:w-32 w-16"/>
            </div>
            <div className="pt-20 pb-5 leading-7 text-left" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <p>
                All projects are backed by SEBI approved equity AIF Fund
                ensuring financial security and assurance of timely delivery
              </p>
            </div>
        </div>
         </div>
       <div className="px-5 ml-8">
       <div className="card_bg shadow-md py-5 px-4 h-[25rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-normal mb-2" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                Professionally
                <br />
                Built
              </h2>
              <img src={build} alt="" className="md:w-32 w-16"/>
            </div>
            <div className="pt-20 pb-5 leading-7 text-left" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <p>
                Built by industry experts with 150+ years of experience of
                capital raise, land investments & 200 Mn Sq ft project execution
                in Indian real estate space
              </p>
            </div>
          </div>
       </div>
       
         <div className="px-5 ml-8">
         <div className="card_bg shadow-md py-5 px-4 h-[25rem] border border-indigo-300" data-aos="zoom-out" data-aos-delay="300" data-aos-duration="1000">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-normal mb-2" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">Multi-City <br />Presence</h2>
              <img src={presence} alt="" className="md:w-32 w-16"/>
            </div>
            <div className="pt-20 pb-5 leading-7 text-left" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <p>
              Opened offices and setup teams in Mumbai and Delhi NCR with
                focus on premium residential projects in both markets
              </p>
            </div>
          </div>
         </div>
      </Slider>
    </div>
      
      {/* <div className="py-10">
      <p className='text-center md:px-44 px-2 tab_padding md:py-8 py-4 text-gray-600 leading-10 font-medium text-xl' data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">"The residential real estate sector in India has been affected with distrust & conflict-driven relationships. The whole experience is stressful and far from being a joyous relationship. Moreover, lack of transparency, secure funding, and corporate governance issues have resulted in loss of credibility."</p>
      </div> */}

    <div className="pt-10">
       <div className="relative mx-auto my-8 max-w-[95vw] md:max-w-4xl px-2 md:px-6 pt-20 md:pt-24 pb-8 md:pb-10 rounded-3xl shadow-2xl card_bg overflow-hidden z-10">
  {/* Decorative Accent Graphic */}
  <img 
    src={project} 
    alt="Project Hero" 
    className="absolute right-2 top-4 w-28 md:w-40 opacity-15 pointer-events-none" 
    style={{maxWidth:'40vw'}}
  />
  {/* Animated Badge Overlay */}
  <div className="absolute top-6 left-2 md:top-6 md:left-8 z-20 bg-green-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-lg text-base md:text-lg font-bold tracking-wider animate-bounce whitespace-nowrap">
    🚀 100% SOLD IN 6 HOURS!
  </div>
  {/* Main Content */}
  <div className="relative z-30 flex flex-col items-center">
    <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-blue-950 text-center mb-4 drop-shadow-lg">NeoLiv Grand Park</h2>
    <p className="max-w-xs md:max-w-xl text-[1rem] md:text-xl text-gray-900 text-center mb-6 md:mb-8 font-medium">
      <span className="font-semibold text-blue-950">06 luxury projects signed in NCR & MMR.</span><br />
      May 2025 launch: <span className="font-bold text-green-600">100% inventory sold out within 6 hours of opening</span>.
    </p>
    {/* Feature Stats Row */}
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center mt-4 w-full">
      <div className="bg-white shadow-md rounded-2xl px-7 py-4 md:px-8 md:py-6 flex flex-col items-center w-full md:w-auto">
        <span className="text-2xl md:text-3xl font-bold text-blue-950 mb-2">06</span>
        <span className="text-sm text-gray-700">Projects Signed</span>
      </div>
      <div className="bg-gradient-to-r from-green-400 to-green-200 shadow-md rounded-2xl px-7 py-4 md:px-8 md:py-6 flex flex-col items-center w-full md:w-auto animate-pulse">
        <span className="text-2xl md:text-3xl font-bold text-blue-950 mb-2">6 hrs</span>
        <span className="text-sm text-blue-950">Sell Out Speed</span>
      </div>
      <div className="bg-white shadow-md rounded-2xl px-7 py-4 md:px-8 md:py-6 flex flex-col items-center w-full md:w-auto">
        <span className="text-lg md:text-xl font-bold text-green-700 mb-2">NCR & MMR</span>
        <span className="text-sm text-gray-700">Regions Covered</span>
      </div>
    </div>
    {/* Progress Bar */}
    <div className="mt-6 md:mt-8 w-full max-w-xs md:max-w-md mx-auto">
      <div className="bg-gray-200 rounded-full h-4 md:h-5">
        <div className="bg-green-600 h-4 md:h-5 rounded-full animate-[progress_2s_linear_forwards]" style={{ width: '100%' }}></div>
      </div>
      <div className="text-right text-green-700 text-xs md:text-sm font-bold mt-2 tracking-wide">Sold Out — 100%</div>
    </div>
  </div>
</div>
    </div>

    </div>
    </>
  );
};

export default About;
