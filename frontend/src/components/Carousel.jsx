import { useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

export default function Carousel({ slides }) {
    let [current, setCurrent] = useState(0);
    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    }
    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    }

    return (
        <div className="h-screen w-full flex flex-col justify-center items-center bg-[#1C1E1F]">
            <h1 className="text-5xl text-center mb-40 text-white">Carousel</h1>
            <div className="overflow-hidden h-96 relative mb-20 bg-[#989A99] rounded-lg">
                <div className={`flex transition ease-in-out duration-40`} style={{ transform: `translateX(-${current * 100}%)` }}>
                    {slides.map((s, i) => {
                        return (
                            <div key={i} className="flex flex-shrink-0 mt-20 h-full w-full justify-center items-center">
                                <img src={s} className="object-cover" />
                            </div>
                        )
                    })}
                </div>
                <div className="absolute top-0 h-full w-full justify-between items-center flex text-3xl text-white">
                    <button onClick={previousSlide}><IoIosArrowBack /></button>
                    <button onClick={nextSlide}><IoIosArrowForward /></button>
                </div>
            </div>
        </div>
    )
}