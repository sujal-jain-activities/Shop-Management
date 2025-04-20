import React, { useEffect, useRef } from 'react'
import { FaArrowRight } from "react-icons/fa6";
const About = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleLoadedMetadata = () => {
      video.currentTime = 12;
      video.play();
    };

    const handleTimeUpdate = () => {
      if (video.currentTime >= 39) {
        video.pause() // Loop back to start time
      }
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);
  return (
    <>
    <div className=' w-full sm:flex sm:justify-center sm:overflow-x-hidden   '>
      <div className='w-full sm:flex sm:w-[65rem] sm:justify-center sm:mt-2 '>
        <div className=''>
      <video ref={videoRef} autoPlay  muted playsInline  src="/Video/nikevideo2.mp4" className='max-w-full sm:rounded-2xl  object-cover'></video>
      <h3 className='text-center mt-10 text-xl font-semibold'><span className='text-amber-400'>Join</span> us on this journey and step into a world where style meets <span className='text-amber-400'>comfort</span>.</h3>
      <div className='stats mt-25  sm:flex sm:justify-between sm:items-center gap-2'>
        <div className='w-full flex  mt-5 justify-between sm:items-center sm:justify-between'>
          <div className='w-[49%] h-30 bg-zinc-900 rounded'>
            <h1 className='text-2xl text-center font-bold mt-3 '>10,000+</h1>
            <p className='text-center font-semibold text-sm mt-3 '><span className='text-amber-400'>Happy customers</span> trust Sujal Shoes </p>
          </div>
          <div className='w-[49%] h-30 bg-zinc-900 rounded'>
            <h1 className='text-2xl text-center font-bold mt-3 '>35 years+</h1>
            <p className='text-center font-semibold text-sm mt-3'> Of expertise, we bring <span className='text-amber-400'> trusted quality</span> to every step you take. </p>
          </div>
        </div>
        <div className='w-full flex mt-2  justify-between sm:items-center sm:justify-between sm:mt-5'>
        <div className='w-[49%] h-30 bg-zinc-900 rounded'>
            <h1 className='text-2xl text-center font-bold mt-3 '>15+</h1>
            <p className='text-center font-semibold text-sm mt-3'>Types of shoes and sandels of <span className='text-amber-400'> men and women</span> </p>
          </div>
          <div className='w-[49%] h-30 bg-zinc-900 rounded'>
            <h1 className='text-2xl text-center font-bold mt-3 '>No.1</h1>
            <p className='text-center font-semibold text-sm mt-3'>Shop among the <span className='text-amber-400'>market </span>  providing varities of Footware </p>
          </div>
        </div>
      </div>
      <p className='text-center mt-10 font-semibold text-lg mb-15'>At Sujal Shoes, we craft premium, trend-forward footwear combining bold style with all-day comfort. Trusted by over 10,000+ customers, our designs are made for everyday wear that stands out.</p>
      </div>
      </div>
    </div>
      <div className='relative owner-intro w-full h-180 sm:h-110 mt-10 flex justify-center items-center'>
        <div className='w-full h-full sm:w-[65rem]  sm:flex sm:justify-center sm:items-center'>
          <div className='relative flex justify-center  w-full  h-full'>
                <h1 className='absolute top-8 font-semibold text-4xl'>Meet the Owner</h1>
                <img className='object-cover w-60 h-80 absolute top-24 rounded-xl sm:right-30' src="/Images/papaji.jpg" alt="" />
                <p className='absolute top-110 text-center text-lg font-semibold sm:left-5 sm:top-34 sm:w-130 sm:text-2xl'>
                Our shop is proudly owned and managed by <span className="font-bold italic text-lg text-amber-400 sm:text-2xl">Mr.Nitin Kumar Jain</span>, 
                a passionate entrepreneur with over 35+ of experience in the footwear industry. 
                His dedication to quality, customer satisfaction, and honest pricing is what sets our store apart. 
                Every pair of shoes you see here is personally curated by him with care and expertise.
                </p>
          </div>
        </div>

      </div>
      <div className='relative owner-intro w-full h-180 sm:h-110 mb-10  flex justify-center items-center'>
        <div className='w-full h-full sm:w-[65rem]  sm:flex sm:justify-center sm:items-center'>
          <div className='relative flex justify-center  w-full  h-full'>
                <h1 className='absolute top-8 font-semibold text-4xl text-center'>A Message to Our Valued Customers</h1>
                <img className='object-cover w-80 h-60 absolute top-34 rounded-xl sm:left-30' src="/Images/shop.jpg" alt="" />
                <p className='absolute top-100 text-center text-lg font-semibold sm:right-5 sm:top-34 sm:w-130 sm:text-2xl'>
                Thank you for visiting our online store. We are truly grateful for your support and trust.
                Your satisfaction is our priority, and we hope you find the perfect pair that suits your style and comfort. 
                Whether you're shopping for yourself or a loved one, we promise quality, affordability, and a touch of personal care in every purchase.
                <br/><br/>
                – <span className="italic font-medium text-amber-400">Mr. NITIN KUMAR JAIN</span>
                </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default About
