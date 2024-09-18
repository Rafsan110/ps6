import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import black_ps6 from './black ps6.jpg';
import eric from './eric truong.jpeg';
import headset from './headset.webp';
import white_ps6 from './ps66.webp';

const Products = () => {
    const [activeState, setActiveState] = useState('a');
    const productRef = useRef(null); // Reference for the active product

    const animateProduct = () => {
        // Apply GSAP animation on the current product div
        gsap.fromTo(
            productRef.current, 
            { x: 100, opacity: 0 },  // Starting state: slide from the right, invisible
            { x: 0, opacity: 1, duration: 0.5 } // Ending state: slide to position, visible
        );
    };

    useEffect(() => {
        animateProduct(); // Animate whenever the active state changes
    }, [activeState]);

    return (
        <section className='product_section' id='products'>
            {activeState === 'a' && (
                <div className='product1' ref={productRef}>
                    <img src={black_ps6} alt="Black PS6" className='black_ps' />
                    <h2 className='heading'>Black PS6</h2>
                    <p className='para'>
                    A variety of PS5 Console Cover colors for the new model will be available starting in early 2024, including an all-matte Black colorway and the Deep Earth Collection colors in Volcanic Red, Cobalt Blue, and Sterling Silver. Prices for the PS5 Console Covers will start at 54.99 USD.                   
                    </p>
                </div>
            )}
            {activeState === 'b' && (
                <div className='product2' ref={productRef}>
                    <img src={eric} alt="Eric Truong" className='eric' />
                    <h2 className='heading'>Eric Truong</h2>
                    <p className='para'>
                    An attempt at designing the Sony PS6 game console. Something a bit crazy with rotating ear antennas that can transform the design flow of the console.
                    </p>
                </div>
            )}
            {activeState === 'c' && (
                <div className='product3' ref={productRef}>
                    <img src={headset} alt="The Headset" className='headset' />
                    <h2 className='heading'>The Headset</h2>
                    <p className='para'>
                    The PULSE 3D wireless headset features a refined design with dual noise-cancelling microphones, USB Type-C® charging, and an array of easy-access controls.                    
                    </p>
                </div>
            )}
            {activeState === 'd' && (
                <div className='product4' ref={productRef}>
                    <img src={white_ps6} alt="White PS6" className='white_ps' />
                    <h2 className='heading'>White PS6</h2>
                    <p className='para'>
                    When it was first revealed, the PS6 looked like a regular PS5, but black, and then was revealed to have 5K graphics. The PS6 is part of the tenth generation of video game consoles, along with the Xbox 360 classic, which was released the same month.                    
                    </p>
                </div>
            )}

            <div className='the_buttons'>
                <button 
                    onClick={() => setActiveState('a')} 
                    className={`product_button ${activeState === 'a' ? 'active' : ''}`}>
                    Black PS6
                </button>
                <button 
                    onClick={() => setActiveState('b')} 
                    className={`product_button ${activeState === 'b' ? 'active' : ''}`}>
                    Eric Truong
                </button>
                <button 
                    onClick={() => setActiveState('c')} 
                    className={`product_button ${activeState === 'c' ? 'active' : ''}`}>
                    The Headset
                </button>
                <button 
                    onClick={() => setActiveState('d')} 
                    className={`product_button ${activeState === 'd' ? 'active' : ''}`}>
                    White PS6
                </button>
            </div>
        </section>
    );
}

export default Products;
