import React, { useState, useEffect } from 'react'
import ReactCardFlip from 'react-card-flip';
import "./home.css"
function Liked({ value, pass }) {
  const [like, setLike] = useState([]);
  const [isFlip, setIsFlip] = useState(false)
  
  
  
  const handleUnLike = (like) => {
    const cards = localStorage.getItem('likeCard');
    if (cards) {
      const newLike = JSON.parse(cards);
      const unLike = newLike.filter((ele) => ele.id !== like.id);
      localStorage.setItem('likeCard', JSON.stringify(unLike));
      setLike(unLike)
      return;
    }
  };


  useEffect(() => {
    const cards = localStorage.getItem('likeCard');
    if (cards) {

      setLike(JSON.parse(cards));
    }
  }, []);

  const handleFlip = () => {

    setIsFlip(!isFlip)


  }
  return (
    <div className='main' >

      {like.map((ele) => (
        <div className='main-Container' >
          <div className="card">
            <ReactCardFlip isFlipped={isFlip} flipDirection="horizontal">
              <div onClick={handleFlip}>
                <img src={ele.image} alt="Avatar" />

              </div>

              <div onClick={handleFlip} >
                <h3>Name:{ele.name}</h3>
                <h3>Status:{ele.status}</h3>
                <h3>Gender:{ele.gender}</h3>
                <h3>Species:{ele.species}</h3>

              </div>

            </ReactCardFlip>

          </div>
          <button onClick={() => handleUnLike(ele)} >Unlike</button>
        </div>

      ))}


    </div>
  )
}

export default Liked