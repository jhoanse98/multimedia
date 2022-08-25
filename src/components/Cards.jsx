import React from 'react'
import Card from './Card'

const Cards = () => {
    const cards = [
        {
          titulo:"horror",
          img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hechos-reales-insipiraron-la-monja2-1537099184.jpg"
        },
        {
          titulo:"child",
          img: "https://tse1.mm.bing.net/th?id=OIP.woHV2BoxjdTwxGtw_gLA4QHaE8&pid=Api&P=0"
        },
        {
          titulo:"comedy",
          img: "https://tse2.mm.bing.net/th?id=OIP.oNFx2CpBpGM4n0AGXPEteQHaEL&pid=Api&P=0"
        },
        {
          titulo:"drama",
          img: "https://1.bp.blogspot.com/-IFnOBbktFGo/XcMKCCqWMHI/AAAAAAAALCg/sv1qOF76N5oY5xqZaJ1voPC-5DxfQedvQCLcBGAsYHQ/w1200-h630-p-k-no-nu/Escalera-al-cielo-horizontal.jpg"
        },
        {
          titulo:"fiction",
          img: "https://www.looper.com/img/gallery/the-matrix-4-will-reportedly-start-something-big/intro-1576775790.jpg"
        }
    ]
  return (
    <>
        <h2 className="my-20 text-center text-white font-bold text-5xl block">Selecciona una categoria</h2>
        <div className=' mt-10 container mx-auto p-5 flex justify-center flex-row flex-wrap gap-5 '>  
            {cards.map(card => (
                <Card  key={card.titulo} card={card} />
            ))}
        </div>    
    </>
  )
}

export default Cards