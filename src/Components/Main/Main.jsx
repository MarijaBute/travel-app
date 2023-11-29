import React from "react";
import './main.css'
import {HiOutlineLocationMarker, HiOutlineClipboardCheck} from 'react-icons/hi'

import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'


const Data = [
    {
        id: 1,
        imgSrc: img,
        destTitle: 'Ohrid',
        location: 'Macedonia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'Nestled on the shores of Lake Ohrid, the town of Ohrid in North Macedonia is a UNESCO World Heritage site renowned for its rich history and stunning natural beauty. Explore ancient churches, a picturesque old town, and crystal-clear waters, making Ohrid a captivating destination for history enthusiasts and nature lovers alike.'
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Barcelona',
        location: 'Spain',
        grade: 'CULTURAL RELAX',
        fees: '$600',
        description: 'Immerse yourself in the vibrant energy of Barcelona, where Gaudís architectural wonders, lively street markets, and sun-soaked beaches create a dynamic blend of culture and leisure.'
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Great Barrier Reef',
        location: 'Australia',
        grade: 'CULTURAL RELAX',
        fees: '$700',
        description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is "lavish" and "beauty". Always interesting to be in this place.'
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Cappadocia',
        location: 'Turkey',
        grade: 'CULTURAL RELAX',
        fees: '$800',
        description: 'According to the World Tourism Ranking, 45 million people visit Turkey each year, and from that about 2 million come to visit Cappadocia. This place is known for its luxurious stays and adventorous activities.'
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Kyoto',
        location: 'Japan',
        grade: 'CULTURAL RELAX',
        fees: '$1100',
        description: 'Tranquil temples, traditional tea houses, and cherry blossom-lined streets await in Kyoto, a city that seamlessly combines ancient traditions with modern elegance, making it a haven for serenity seekers.'
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Cinque Terre',
        location: 'Italy',
        grade: 'CULTURAL RELAX',
        fees: '$840',
        description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!'
    },
    {
        id: 7,
        imgSrc: img7,
        destTitle: 'Angkor Wat',
        location: 'Cambodia',
        grade: 'CULTURAL RELAX',
        fees: '$790',
        description: 'Angkot wat represents the entire range of Khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventorous activities.'
    },
    {
        id: 8,
        imgSrc: img8,
        destTitle: 'Taj Mahal',
        location: 'India',
        grade: 'CULTURAL RELAX',
        fees: '$900',
        description: 'An immense mausoleum of white arble, built-in Agra by Mughal emperor Shah Jahan is memory of his wife umtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventorous activities'
    },
    {
        id: 9,
        imgSrc: img9,
        destTitle: 'Bali Island',
        location: 'Indonesia',
        grade: 'CULTURAL RELAX',
        fees: '$500',
        description: 'Bali is an Indonesian Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.'
    }
]


const Main = () => {
    return (
        <section className="main container section">
            <div className="secTitle">
                <h3 className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
                        return (
                            <div key={id} className="singleDestination">
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>

                                <div className="cardInfo">
                                   <h4 className="destTitle">{destTitle}</h4> 
                                   <span className="continent flex">
                                    <HiOutlineLocationMarker className="icon" />
                                    <span className="name">{location}</span>
                                   </span>

                                   <div className="fees flex">
                                    <div className="grade">
                                        <span>{grade}<small>+1</small></span>
                                    </div>
                                    <div className="price">
                                        <h5>{fees}</h5>
                                    </div>
                                   </div>

                                   <div className="desc">
                                    <p>{description}</p>
                                   </div>

                                   <button className="btn flex">
                                    DETAILS <HiOutlineClipboardCheck className="icon" />
                                   </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Main;