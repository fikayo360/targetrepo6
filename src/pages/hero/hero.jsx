import './hero.css'
import { useState } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect,useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export function Hero(){
    const [navActive,setNavActive] = useState(false)
    const [ref, inView] = useInView();
    const toggleMobileNav = () => {
       setNavActive((prev) => !prev)
    }

    return (
        <section id="hero">
           { navActive? (<div id='navMobile' onClick={toggleMobileNav} ref={ref} className={`${inView?'animate__animated animate__fadeInDown animate__slow ':''}`}>
                <header>
                    <h1>Jennifer</h1>
                    <img src='./close.png'/>
                </header>
                <ul id='navMobileList'>
                            <li className='nmItems'><a href='#contact' >contact</a></li>
                            <li className='nmItems'><a href='#portfolio' >portfolio</a></li>
                            <li className='nmItems'><a href='#testimonials'>testimonials</a></li>   
                            <li className='nmItems'><a href='#about'>about</a></li>
                            <li className='nmItems'><a href='#footer'>footer</a></li> 
                </ul>
            </div>) :null } 

            <nav id='navbar'>
                    <div id='navWrap'>
                        <ul id='navLeft'>
                            <li><a href='#contact'>contact</a></li>
                            <li><a href='#portfolio'>portfolio</a></li>
                            <li><a href='#testimonials'>testimonials</a></li>   
                            <li><a href='#about'>about</a></li>
                            <li><a href='#footer'>footer</a></li>
                        </ul>

                    <h1 id='navCenter'> Jenifer </h1>

                    <div id='socialIcons'>
                        <div className='socialIcon'><img src='./facebook.png' /></div>
                        <div className='socialIcon'><img src='./instagram.png'/></div>
                        <div className='socialIcon'><img src='./twitter.png'/></div>
                    </div>

                    <img id='burger' src='./burger.png' onClick={toggleMobileNav}/>
                    </div>
            </nav>

            <div id='heroOther'>
                <h5 id='heroTxt' ref={ref} className={`${inView?'animate__animated animate__rubberBand animate__slow':''}`}> Jenifer metcalf photo </h5>
                <div id='heroOtherBottom'>
                <p>i am a photographer with a passion for capturing genuine moments in a creative way.
                    Explore my galllery, lets create something beautiful together
                </p>
                <div id='heroBtn'><span>get in touch</span><img src='./right.png'/></div>
                </div>
            </div>
        </section>
    )
}