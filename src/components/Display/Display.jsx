import React from 'react'
import './Display.css'
export default function Display({ data}) {
    return (
    <div className="dis">
        <div className="first">
            <img src={data.icon} alt="" />
            <p>City: {data.name}</p>
            <p>State: {data.state}</p>
            <p>Country: {data.country}</p>
        </div>
        <div className="second">
            <p>Time Zone: {data.zone}</p>
            <p>Local Time: {data.time}</p>
            <p>Temperature: {data.temp}&#8451;</p>
            <p>Condition: {data.condition}</p>
        </div>
        <div className="third">
            <p>Wind Speed: {data.speed} kmph</p>
            <p>Wind Direction: {data.direction}</p>
            <p>Humidity: {data.humidity}%</p>
            <p>Feels Like: {data.feels_like}&#8451;</p>
        </div>
    </div>

    )
}
