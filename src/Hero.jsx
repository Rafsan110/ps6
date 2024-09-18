import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import hero_vid from './Hero video.mp4'
import logo from './PS0_746661b01c04-mobile.jpg';

const Hero = () => {
    useGSAP(() => {
        gsap.to('#hero_p', {
            opacity: 100,
            duration:2,
            delay:1,
            ease: 'power2.inOut'
        })

    })

  return (
    <section className="hero">
        <div className="hero_container">
            <video autoPlay muted  src={hero_vid} className='hero_vid'></video>
            <div className='video_content'>
            <div className='vid_content'>
                <div className='stack'>
                <img src={logo} className='logo_icon' id='hero_p' />
                <h1 className='hero_p' id='hero_p'>PS6</h1>
                
                </div>
                <p className='hero_p' id='hero_p'>
                    Welcome to the future of gaming with the PlayStation 6, where innovation meets imagination. Dive into an unparalleled gaming experience with the next evolution in interactive entertainment.
                </p>
            </div>
            <div className='buttons'>
                    <a className='button1' href='#products'>
                        Buy
                    </a>
                    <a className='button2' href='#service'>
                        Highlights
                    </a>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Hero