import './portfolio.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

export function Portfolio(){
    const isMobile = window.innerWidth <= 1024;
    gsap.registerPlugin(ScrollTrigger);

       if(isMobile){
        useGSAP(() => {
            gsap.to(".images", { y:15,ease: "power1.in",stagger:0.1,scrollTrigger: {
                trigger: "#portfolio",
                
              }});
          })
       }else{
        useGSAP(() => {
            gsap.to(".images", { y:40,ease: "power1.in",delay:0.1,stagger:0.2,scrollTrigger: {
                trigger: "#portfolio",
                
              }});
          })
       }

    
    return (
        <section id="portfolio">
            <h2>Selected projects</h2>
           
            <div id='' className='portfolioCont'>
                <h2>portrait</h2>
                <div className='imgCont'>
                <div className='images'>
                    <img src='https://images.squarespace-cdn.com/content/v1/5607a923e4b02ca27d321d51/1601004110095-9LHJYXPGVYT4SG44M0D4/Miwa-200904-98_websize.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/female-face-girl-with-wind-in-hair.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://images.squarespace-cdn.com/content/v1/56dfd5cc9f7266ed7f04b64d/1585743025040-GY3HNPD08I794TTR7O1M/image-asset.jpeg'/>
                </div>
                </div>
            </div>
            

            <div className='portfolioCont'>
            <h2>wildlife</h2>
            <div className='imgCont'>
            <div className='images'>
                    <img src='https://cc-prod.scene7.com/is/image/CCProdAuthor/a-guide-to-wildlife-photography_P1_mobile_360x270?$pjpeg$&jpegSize=200&wid=720'/>
                </div>
                <div className='images'>
                    <img src='https://www.shutterstock.com/image-photo/wildlife-photography-male-lion-haunting-260nw-2296056907.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://thewildlifecollective.com/wp-content/uploads/2020/11/D30I1244-v2-copy-16x9-1-scaled.jpg'/>
                </div>
            </div>
            </div>

            <div className='portfolioCont'>
            <h2>landscapes </h2>
            <div className='imgCont'>
            <div className='images'>
                    <img src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/blogs/18725/images/mM87l2ZsQRSawMLLRlFF_FallLandscape7-.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://cff2.earth.com/uploads/2022/11/08110007/Mountain-landscapes2-scaled.jpg'/>
                </div>
            </div>
            </div>

            <div className='portfolioCont'>
            <h2>nature</h2>
            <div className='imgCont'>
            <div className='images'>
                    <img src='https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://blogs.worldbank.org/sites/default/files/styles/hero/public/2022-12/environment_hero.jpg.webp?itok=Hf8gKgjU'/>
                </div>
                <div className='images'>
                    <img src='https://static.theprint.in/wp-content/uploads/2022/07/Untitled-design-10-1.jpg'/>
                </div>
            </div>
            </div>

            <div className='portfolioCont'>
            <h2>weddings</h2>
            <div className='imgCont'>
            <div className='images'>
                    <img src='https://johnstowncastle.ie/wp-content/uploads/sites/4/2023/07/JC-240_websize-1024x683.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://media.glamourmagazine.co.uk/photos/64c77e65d026779dc4c97d5a/master/pass/LEIGH%20ANNE%20PINNOCK%20310723%20default.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://static01.nyt.com/images/2023/12/31/multimedia/REVAMPED-WEDDING-TRENDS-01-pfct/REVAMPED-WEDDING-TRENDS-01-pfct-superJumbo.jpg'/>
                </div>
            </div>
            </div>
        </section>
    )
}