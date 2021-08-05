import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Fetch from './components/Fetch/Fetch';
import Display from './components/Display/Display';
import Error from './components/Error';


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
    let n;
    fetch("http://api.weatherapi.com/v1/current.json?key=f8dafc0bda574e0bb4d154724201308&q=" + city)
      .then(res => res.json())
      .then(
        (result) => {
          try{
            let k = {
              name: result.location.name,
              state: result.location.region,
              country: result.location.country,
              zone: result.location.tz_id,
              time: result.location.localtime,
              temp: result.current.temp_c,
              condition: result.current.condition.text,
              icon: result.current.condition.icon,
              speed: result.current.wind_kph,
              direction: result.current.wind_dir,
              humidity: result.current.humidity,
              feels_like: result.current.feelslike_c
            };
            setData(k);
            setE(true);
          }
          catch(err){
            setE(false);
            console.log("error");
          }
        }
      )
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
