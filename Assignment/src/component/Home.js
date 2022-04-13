import { useEffect, useState } from 'react'
import React from 'react'
import './home.css'
import ReactCardFlip from 'react-card-flip'
import Liked from './Liked'
function Home() {
  const [character, setCharacter] = useState([])
  const [isFlip, setIsFlip] = useState(false)

  const handleLike = (character) => {
    const cards = localStorage.getItem('likeCard');
    if (cards) {
      if (cards.includes(JSON.stringify(character))) {
        alert(" Card already liked")
      } else {
        const newLike = JSON.parse(cards);


        newLike.push(character);
        localStorage.setItem('likeCard', JSON.stringify(newLike));
        alert("cards liked");
      }

















      return;
    }
    localStorage.setItem('likeCard', JSON.stringify([character]));
    alert('Card Liked');
  };

  const handleFlip = () => {
    {
      setIsFlip(!isFlip)
    }



  }

  useEffect(() => {
    const getData = async () => {
      const allData = await fetch("https://rickandmortyapi.com/api/character")
      const res = await allData.json()
      const data = res.results
      setCharacter(data)


    }
    getData()
  }, [character])










  return (
    <>
      <div className='main'>
        {character.map((ele,) => (
          <div className='main-Container' >
            <div className="card">
              <ReactCardFlip isFlipped={isFlip} flipDirection="horizontal">
                <div onClick={() => handleFlip()}>
                  <img src={ele.image} alt="Avatar" />

                </div>

                <div onClick={() => handleFlip()} >
                  <h3>Name:{ele.name}</h3>
                  <h3>Status:{ele.status}</h3>
                  <h3>Gender:{ele.gender}</h3>
                  <h3>Species:{ele.species}</h3>

                </div>

              </ReactCardFlip>

            </div>
            <button onClick={() => handleLike(ele)} >Like</button>
          </div>

        ))}


      </div>

    </>
  )
}

export default Home