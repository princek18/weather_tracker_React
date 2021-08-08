import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Fetch from './components/Fetch/Fetch';
import Display from './components/Display/Display';
import Error from './components/Error';
import axios from 'axios';
import 'antd/dist/antd.css';


function App() {
  const Handle = ({e})=>{
      if(e === true)
      {
        return <Display data={data} icon={icon}/>;
      }
      else{
        return <Error/>;
      }
  }

  const [data, setData] = useState([]);
  const [icon, setIcon] = useState();
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
        city: name,
        state: region,
        country: country,
        zone: tz_id,
        time: localtime,
        "temp(°C)": temp_c,
        condition: text,
        "speed(kph)": wind_kph,
        direction: wind_dir,
        "humidity(%)": humidity,
        "feels_like(°C)": feelslike_c
      };
      let l = {icon: icon};
      setData(k);
      setIcon(l);
      setE(true);
    }, (error) =>{
      setE(false);
      console.log(error);
    });

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
