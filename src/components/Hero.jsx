import React from 'react';
import Typewriter from 'typewriter-effect';


function Hero() {



    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">

                <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py6 duration-300">Grow with data.</h1>

                <div className="flex justify-center items-center">

                    <p className="md:text-5xl sm:text-4xl text-xl font-bold duration-[400ms]">Fast, flexible financing for </p>
                    <span className="text-[#00df9a] pt-1 pl-2 md:text-5xl sm:text-4xl text-xl font-bold duration-[400ms]">
                        <Typewriter
                            options={{
                                strings: ['BTC', 'BTB', 'SASS', '...'],  // text
                                autoStart: true,
                                loop: true,
                                delay: 200, // speed
                            }}
                        />
                    </span>
                </div>
                <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor yor data analytics to increase revenue for BTB,BTC & SASS platforms.</p>
                <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Get started</button>
            </div>
        </div>
    );  // coded by: https://divnic-dev.com/
}

export default Hero;