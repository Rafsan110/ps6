import { games } from "./index.js"
import { useEffect, useState } from "react"
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

const Games = () => {
  const [movies, setmovies] = useState([])
  useEffect(() => {
    setmovies(games);
  }, [])
  const slideLeft = () => {
    var slider = document.getElementById('boom')
    slider.scrollLeft = slider.scrollLeft - 350}

  const slideRight = () => {
    var slider = document.getElementById('boom')
    slider.scrollLeft = slider.scrollLeft + 350
}
  const handleClick = () => {
    alert('Dont expect anything to happen')
  }

  return (
    <section id="games">
      <h2 className="games_heading">The Games</h2>
      <div className="games_container">
          <MdChevronLeft size={40} className="chevron1" onClick={() => slideLeft()} />
        <div id={'boom'} className="games_yes" >
          {movies.map((item, id) => (
            <div key={id} className="game_container " onClick={() => handleClick()}>
                <img src={item.image} alt={item.text1}  className="game_image"/>
                <div className="game_content">
                    <h3 className="h3">
                      {item.text1}
                    </h3>
                    <p className="p">{item.text2}</p>
                    
                </div>
                
                
            </div>
            
          ))}
        </div>
        <MdChevronRight size={40} className="chevron2"  onClick={() => slideRight()}/>
      </div>
    </section>
  )
}

export default Games