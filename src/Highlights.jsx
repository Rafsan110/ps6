import VideoCarousel from "./VideoCarousel.jsx"
const Highlights = () => {
  return (
    <section id='highlights' className="highlights_section">
        <div className="screen-max-width">
            <div className="sec">
                <h2 id="title" className="section-heading">
                    Get the highlights
                </h2>

                <div className="links">
                    <p className="link">
                        Watch the film
                    </p>
                    <p className='link'>
                       Watch the event 
                    </p>
                </div>
            </div>
            <VideoCarousel/>
        </div>
    </section>
  )
}

export default Highlights