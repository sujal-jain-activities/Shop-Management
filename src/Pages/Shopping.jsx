import React, { useState } from 'react'
import shoeCard from '../Components/Apis/Maleshoe.json'
import { MdClose } from "react-icons/md";

const Shopping = () => {
  const [selectedShoe, setSelectedShoe] = useState(null)
  const [cardPos, setCardPos] = useState(null)
  const [animate, setAnimate] = useState(false)

  const handleCardClick = (shoe, e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setCardPos({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    })
    setSelectedShoe(shoe)
    setTimeout(() => setAnimate(true), 10) // trigger animation
  }

  const handleClose = () => {
    setAnimate(false)
    setTimeout(() => {
      setSelectedShoe(null)
      setCardPos(null)
    }, 300)
  }

  return (
    <>
      <h1 className='text-center text-lg font-semibold mt-3 sm:text-3xl'>
        Shop the <span className='text-amber-400'>Collection</span>
      </h1>

      {/* Overlay and Big Card */}
      {selectedShoe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Acrylic background */}
          <div
            onClick={handleClose}
            className="absolute inset-0 backdrop-blur-md bg-black/30 z-40"
          ></div>

          {/* Big card */}
          <div
            className={`absolute bg-zinc-900 rounded-lg text-white shadow-xl overflow-hidden z-50 transition-all duration-300 ease-in-out`}
            style={{
              top: animate ? '10vh' : cardPos?.top,
              left: animate ? '50%' : cardPos?.left,
              width: animate ? '90%' : cardPos?.width,
              height: animate ? 'auto' : cardPos?.height,
              transform: animate ? 'translateX(-50%)' : 'none',
            }}
          >
            <div className="flex flex-col sm:flex-row p-4 relative">
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded z-50"
              >
                <MdClose />
              </button>
              <img
                src={selectedShoe.img}
                alt={selectedShoe.name}
                className="w-full sm:w-[40%] object-contain rounded"
              />
              <div className="sm:w-[60%] px-4 py-2">
                <h2 className="text-2xl font-bold">{selectedShoe.name}</h2>
                <p className="text-sm mt-2">{selectedShoe.desc}</p>
                <div className="mt-4 flex gap-4 items-center">
                  <p className="text-amber-400 text-xl font-semibold">
                    ₹{selectedShoe.discount_price}
                  </p>
                  <p className="text-zinc-500 line-through">
                    ₹{selectedShoe.original_price}
                  </p>
                  <p className="text-green-400">
                    ({selectedShoe.discount_percent}% off)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Shoe Cards */}
      <div className='flex w-full h-auto justify-center items-center'>
        <div className='w-full h-auto flex flex-col justify-center items-center mt-5 sm:w-[65rem] sm:gap-2 sm:grid sm:grid-cols-3'>
          {shoeCard.map((shoe) => (
            <div
              key={shoe.id}
              onClick={(e) => handleCardClick(shoe, e)}
              className='cards w-[90%] h-45 bg-zinc-900 flex justify-center rounded mb-2 sm:w-[99%] cursor-pointer hover:scale-[1.01] transition-all duration-200 z-10'
            >
              <div className='left w-[40%] h-full flex justify-center items-center'>
                <img className='object-cover rounded max-h-48' src={shoe.img} alt={shoe.name} />
              </div>
              <div className='right w-[60%] h-full p-2 sm:p-1 relative left-0'>
                <h1 className='text-center text-lg font-semibold absolute top-2'>{shoe.name}</h1>
                <p className='desc font-light text-left text-sm m-1 absolute top-[50%] -translate-y-[50%]'>{shoe.desc}</p>
                <div className='flex justify-between items-center absolute bottom-3'>
                  <p className='Price font-semibold text-left mt-2 text-xl text-amber-400'>₹{shoe.discount_price}</p>
                  <p className='discount text-sm text-zinc-600 mt-2 ml-1'>MRP: ₹{shoe.original_price}</p>
                  <p className='text-sm text-zinc-600 mt-2'>({shoe.discount_percent}% off)</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Shopping
