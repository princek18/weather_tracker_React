import React from 'react'
import { useState } from 'react'
import './Fetch.css'


export default function Fetch({api}) {
  const[city, setCity] = useState("")
  const handlesubmit = (e)=>{
    e.preventDefault();
    api(city)
    setCity("");
  }
  const put = (e)=>{
    setCity(e.target.value)
  }
    return (
        <div>
          <form action="" onSubmit={handlesubmit}>
          <input placeholder="Enter City" type="text" value={city} onChange={put} required />
          <button className="btn btn-sm btn-primary" >Search</button>
          </form>
        </div>
    )
}
