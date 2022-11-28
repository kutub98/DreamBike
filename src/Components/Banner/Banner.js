import React from "react";
import './Banner.css'
import slide1 from '../../Asset/Banner/banner_1(1).jpg'
import slide2 from '../../Asset/Banner/banner_1(2).jpg'
import slide3 from '../../Asset/Banner/banner_1(3).jpg'
import slide4 from '../../Asset/Banner/banner_1(1).jpg'
const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={slide1}  alt="/" className="w-full h-[550px] relative" />
          <div className="absolute textBanner h-full w-full">
                <div className="text mt-16 ml-32 w-1/2 hide bannerText">
                    <h1 className="text-red-500 text-2xl mb-4 font-extrabold">Dreams will comes true</h1>
                    <h1 className="text-5xl text-white font-extrabold">EVERYONE HAS A DREAM</h1>
                    <p className="mt-10 text-white">For making your dreams comes true <span className="text-red-700 font-bold">YDBIKE</span> will best option for you because <span className="text-red-700 font-bold">YDBIKE</span> is have a special affordable price in multiple brands bike, you can buy brand new motor used or used bike  </p>

                    <div className="button mt-8">
                        <button type="btn" className=" btn mr-4 py-3 px-5 bg-red-700">Buy now</button>
                        <button type="btn" className=" btn  py-3 px-5 bg-white text-red-700">Know more</button>
                    </div>
                </div>
          </div>
          <div className="absolute bg-red flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
         
            <a href="#slide4" className="btn btn-circle bg-red-700 text-white">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-red-700 text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={slide2}  alt="/" className="w-full h-[550px] relative" />
          <div className="absolute textBanner h-full w-full">
                <div className="text mt-16 ml-32 w-1/2 hide bannerText">
                    <h1 className="text-red-500 text-2xl mb-4 font-extrabold">Dreams will comes true</h1>
                    <h1 className="text-5xl text-white font-extrabold">EVERYONE HAS A DREAM</h1>
                    <p className="mt-10 text-white">For making your dreams comes true <span className="text-red-700 font-bold">YDBIKE</span> will best option for you because <span className="text-red-700 font-bold">YDBIKE</span> is have a special affordable price in multiple brands bike, you can buy brand new motor used or used bike  </p>

                    <div className="button mt-8">
                        <button type="btn" className=" btn mr-4 py-3 px-5 bg-red-700">Buy now</button>
                        <button type="btn" className=" btn  py-3 px-5 bg-white text-red-700">Know more</button>
                    </div>
                </div>
          </div>
          <div className="absolute bg-red flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
         
            <a href="#slide1" className="btn btn-circle bg-red-700 text-white">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-red-700 text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={slide3}  alt="/" className="w-full h-[550px] relative" />
          <div className="absolute textBanner h-full w-full">
                <div className="text mt-16 ml-32 w-1/2 hide bannerText">
                    <h1 className="text-red-500 text-2xl mb-4 font-extrabold">Dreams will comes true</h1>
                    <h1 className="text-5xl text-white font-extrabold">EVERYONE HAS A DREAM</h1>
                    <p className="mt-10 text-white">For making your dreams comes true <span className="text-red-700 font-bold">YDBIKE</span> will best option for you because <span className="text-red-700 font-bold">YDBIKE</span> is have a special affordable price in multiple brands bike, you can buy brand new motor used or used bike  </p>

                    <div className="button mt-8">
                        <button type="btn" className=" btn mr-4 py-3 px-5 bg-red-700">Buy now</button>
                        <button type="btn" className=" btn  py-3 px-5 bg-white text-red-700">Know more</button>
                    </div>
                </div>
          </div>
          <div className="absolute bg-red flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
         
            <a href="#slide2" className="btn btn-circle bg-red-700 text-white">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-red-700 text-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={slide1}  alt="/" className="w-full h-[550px] relative" />
          <div className="absolute textBanner h-full w-full">
                <div className="text mt-16 ml-32 w-1/2 hide bannerText">
                    <h1 className="text-red-500 text-2xl mb-4 font-extrabold">Dreams will comes true</h1>
                    <h1 className="text-5xl text-white font-extrabold">EVERYONE HAS A DREAM</h1>
                    <p className="mt-10 text-white">For making your dreams comes true <span className="text-red-700 font-bold">YDBIKE</span> will best option for you because <span className="text-red-700 font-bold">YDBIKE</span> is have a special affordable price in multiple brands bike, you can buy brand new motor used or used bike  </p>

                    <div className="button mt-8">
                        <button type="btn" className=" btn mr-4 py-3 px-5 bg-red-700">Buy now</button>
                        <button type="btn" className=" btn  py-3 px-5 bg-white text-red-700">Know more</button>
                    </div>
                </div>
          </div>
          <div className="absolute bg-red flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
         
            <a href="#slide3" className="btn btn-circle bg-red-700 text-white ">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-red-700 text-white">
              ❯
            </a>
          </div>
        </div>

        
        
        
      </div>
    </div>
  );
};

export default Banner;
