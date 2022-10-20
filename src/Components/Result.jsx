import React from 'react'

export default function Result({ weatherData, historyData , historySearch }) {

    const historyItems = historyData.map(
        (item, index) => {
            return <li onClick={() => historySearch(item)} className='text-xl cursor-pointer' key={index}>{item}</li>
        }
    )
    return (
        <div className='grid grid-cols-4 shadow-xl mt-5 p-2 border bg-indigo-300 rounded'>
            <div className="col-span-1 border-r-2">
                <span className='text-center block font-bold text-blue-800'>History</span>
                <ul className='text-capitalize ' >
                    <li>{historyItems}</li>
                </ul>
            </div>
            <div className="col-span-3">
                {
                    weatherData.length !== 0
                        ?
                        <>
                            <h2 className='text-4xl text-center text-blue-800'>{weatherData.name}</h2>
                            <div className='text-2xl flex justify-around my-2'>
                                <div className='text-purple-800'>Max Temp: {weatherData.main.temp_max} deg</div>
                                <div className='text-purple-800'>Min Temp: {weatherData.main.temp_min} deg</div>
                            </div>
                            <div className='text-2xl flex justify-around my-2 items-center'>
                                <div>
                                    <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="" />
                                </div>
                                <div className='text-cyan-800'>{weatherData.weather[0].main}</div>
                            </div>
                        </>
                        :
                        <>
                            <h3 className='text-center p-3 text-5xl text-blue-800'>Weather info</h3>
                        </>
                }
            </div>


        </div>
    )
}
