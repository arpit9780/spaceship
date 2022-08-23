import React, { useEffect, useState } from 'react'

const Cards = () => {
    const [color, setColor] = useState(0);
    const [power, setPower] = useState(0);
    const [drive, setDrive] = useState(0);
    const [option, setOption] = useState(0);
    const [base, setBase] = useState(1000)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        console.log(123, base + color + power + drive + option)
        setTotal(base + color + power + drive + option)
    })

    return (
        <>
            <div className='container'>
            <div className=' textt'>Spaceship configurator</div>
                <div className='cont1'>
                    
                    <div >
                    <h3>Select Colour </h3>
                        <button className='btn btn-outline-success bt1' onClick={() => setColor(0)}> <div className='inbtwh' ></div> SNOW <p>+0$</p></button>
                        <button className='btn btn-outline-success bt1' onClick={() => setColor(100)} > <div className='inbtor' ></div> VOLCANO <p>+100$</p></button>
                        <button className='btn btn-outline-success bt1' onClick={() => setColor(100)}> <div className='inbtbl' ></div> SKY <p>+100$</p></button>
                    </div>
        
                    <div  >
                    <h3>Select Power </h3>
                        <button className='btn btn-outline-success bt2' onClick={() => setPower(0)} >100 MW <p>+0$</p></button>
                        <button className='btn btn-outline-success bt2' onClick={() => setPower(200)} >150 MW <p>+200$</p></button>
                        <button className='btn btn-outline-success bt2' onClick={() => setPower(500)} >200 MW <p>+500$</p></button>
                    </div>
                    <div  >
                    <h3>Warp Drive </h3>
                        <button className='btn btn-outline-success bt2' onClick={() => setDrive(0)} >NO <p>+0$</p></button>
                        <button className='btn btn-outline-success bt2' onClick={() => setDrive(1000)} >YES <p>+1000$</p></button>
                    </div>
                    <div  >
                    <h3>Select Option Package </h3>
                        <button className='btn btn-outline-success bt3' onClick={() => setOption(0)} > BASIC<p>0$</p></button>
                        <button className='btn btn-outline-success bt3' onClick={() => setOption(100)} > SPORT<p>+100$</p></button>
                        <button className='btn btn-outline-success bt3' onClick={() => setOption(500)} >LUX<p>+500$</p></button>
                    </div>
                </div>
                    <div className='cont2' >
                        <h4> Base Price = {base}</h4>
                        <h4> Colour = {color}</h4>
                        <h4> Power = {power}</h4>
                        <h4> Drive = {drive}</h4>
                        <h4> Option = {option}</h4>
                        <hr/>
                        <h2> Total = {total}</h2>
                    </div>
                
            </div>

        </>
    )
}

export default Cards