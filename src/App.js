import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Fetch from './components/Fetch/Fetch';
import Display from './components/Display/Display';
import Error from './components/Error';
import axios from 'axios';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


function App() {
  const Handle = ({e})=>{
      if(e === true)
      {
        return <Display data={data}/>;
      }
      else{
        return <Error/>;
      }
  }

  const [data, setData] = useState([]);
  const [e, setE] = useState("");

  const api = (city) => {
    axios.get("http://api.weatherapi.com/v1/current.json?key=f8dafc0bda574e0bb4d154724201308&q=" + city)
    .then((response) =>{
      let result = response.data;
      let {location, current} = result;
      let {name, region, country, tz_id, localtime} = location;
      let {temp_c, condition, wind_kph, wind_dir, humidity, feelslike_c} = current;
      let {text, icon} = condition;
      let k = {
        name: name,
        state: region,
        country: country,
        zone: tz_id,
        time: localtime,
        temp: temp_c,
        condition: text,
        icon: icon,
        speed: wind_kph,
        direction: wind_dir,
        humidity: humidity,
        feels_like: feelslike_c
      };
      setData(k);
      setE(true);
    }, (error) =>{
      setE(false);
      console.log(error);
    });
    // fetch("http://api.weatherapi.com/v1/current.json?key=f8dafc0bda574e0bb4d154724201308&q=" + city)
    //   .then(res => res.json())
    //   .then(
    //     (result) => {
    //       try{
    //         // let {name, region, country, tz_id, localtime, temp_c, condition, current} = result

    //       }
        }
  return (
    <div className="App">
      <Header/>
      <Fetch api={api} />
      <Handle e={e}/>
      <Footer/>
    </div>
  );
}

export default App;
