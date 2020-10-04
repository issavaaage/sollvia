import React from 'react';
import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import photo from '../assets/img/bob.png';

function Cards() {

    const items = [
        {
            "id": 0,
            "imgUrl": "./assets/img/zern.png",
            "title": "Зерновые",
            "text": "Микроэлементы необходимы, так как пшеница заново укореняется вторичной корневой"
        },
        {
            "id": 1,
            "imgUrl": "./assets/img/reps.png",
            "title": "Рапс",
            "text": "Микроэлементы необходимы, так как пшеница заново укореняется вторичной корневой"
        },
        {
            "id": 2,
            "imgUrl": "./assets/img/kukur.png",
            "title": "Кукуруза",
            "text": "Микроэлементы необходимы, так как пшеница заново укореняется вторичной корневой"
        },
        {
            "id": 3,
            "imgUrl": "./assets/img/vegetab.png",
            "title": "Овощи",
            "text": "Микроэлементы необходимы, так как пшеница заново укореняется вторичной корневой"
        },
        {
            "id": 4,
            "imgUrl": "./assets/img/podsoln.png",
            "title": "Подсолнечник",
            "text": "Микроэлементы необходимы, так как пшеница заново укореняется вторичной корневой"
        },
        {
            "id": 5,
            "imgUrl": "./assets/img/bob.png",
            "title": "Бобовые",
            "text": "Микроэлементы необходимы, так как пшеница заново укореняется вторичной корневой"
        }
    ]

    const Gallery = () => {
        const handleOnDragStart = (e) => e.preventDefault()
        return (
          <AliceCarousel 
            responsive={
                {
                    1500: {
                        items: 6
                    },
                    1250: {
                        items: 5
                    },
                    992: {
                        items: 4
                    },
                    768: {
                        items: 3
                    },
                    450: {
                        items: 2
                    },
                    0: {
                        items: 1
                    }
                }
            }
            buttonsDisabled={true}
          mouseTrackingEnabled>
            {items&&
                items.map((el, i) => {
                    return (
                        <div key={i} className="card" onDragStart={handleOnDragStart}>
                            <div className="card__text">
                                <h3>{el.title}</h3>
                                <p>{el.text}</p>
                            </div>
                            <img src={el.imgUrl} alt=""/>
                        </div>
                    )
                })
            }
           
          </AliceCarousel>
        )
      }

    return (
        <section className="cards">
              <div className="cards-content">
                  <div className="cards-content__cards">
                    {Gallery()} 
                  </div>
              </div>
      </section>
    )
}

export default Cards
