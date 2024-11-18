import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (city) {
        try {
          const res = await fetch(
            "https://api.weatherapi.com/v1/current.json?key=d2ca01bd63884707a12161434241811&q=" +
              city
          );
          const Data = await res.json();
          setData(Data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchData();
  }, [city]);

  const handleCity = (e) => {
    e.preventDefault();
    setCity(e.target.elements[0].value);
  };

  console.log(city, data);
  return (
    <div className="App">
      <h1>Weather App</h1>
      <form action="submit" onSubmit={(e) => handleCity(e)}>
        <input type="text" placeholder="Enter city for weather details" />
        <button>Search</button>
      </form>
      <br />
      {data && (
        <div style={{ width: "fit-content", margin: "0 auto" }}>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              // justifyContent: "center",
              borderRadius: "10px",
              background: "lightblue",
              padding:'10px 20px'
            }}
          >
            <img
              src={data.current.condition.icon}
              alt={data.current.condition.text}
            />
            <span style={{ fontWeight: "bold", fontSize: "16px" }}>
              {data.current.condition.text.toUpperCase()}
            </span>
          </p>
          <div>
            <p>
              <strong>Location: </strong>
              {data.location.name}, {data.location.country}
            </p>
            <p>
              <strong>Temperature: </strong>
              {data.current.temp_c} ℃
            </p>
            <p>
              <strong>Precipitation: </strong>
              {data.current.precip_mm} mm
            </p>
            <p>
              <strong>Wind: </strong>
              {data.current.wind_kph} km/h
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// :
// cloud
// :
// 0
// condition
// :
// code
// :
// 1000
// icon
// :
// "//cdn.weatherapi.com/weather/64x64/night/113.png"
// text
// :
// "Clear"
// [[Prototype]]
// :
// Object
// dewpoint_c
// :
// 6.4
// dewpoint_f
// :
// 43.6
// feelslike_c
// :
// 20.9
// feelslike_f
// :
// 69.7
// gust_kph
// :
// 16.6
// gust_mph
// :
// 10.3
// heatindex_c
// :
// 20.9
// heatindex_f
// :
// 69.7
// humidity
// :
// 39
// is_day
// :
// 0
// last_updated
// :
// "2024-11-18 21:45"
// last_updated_epoch
// :
// 1731946500
// precip_in
// :
// 0
// precip_mm
// :
// 0
// pressure_in
// :
// 29.97
// pressure_mb
// :
// 1015
// temp_c
// :
// 20.9
// temp_f
// :
// 69.7
// uv
// :
// 0
// vis_km
// :
// 10
// vis_miles
// :
// 6
// wind_degree
// :
// 86
// wind_dir
// :
// "E"
// wind_kph
// :
// 7.9
// wind_mph
// :
// 4.9
// windchill_c
// :
// 20.9
// windchill_f
// :
// 69.7
// [[Prototype]]
// :
// Object
// location
// :
// country
// :
// "India"
// lat
// :
// 18.5333
// localtime
// :
// "2024-11-18 21:58"
// localtime_epoch
// :
// 1731947302
// lon
// :
// 73.8667
// name
// :
// "Pune"
// region
// :
// "Maharashtra"
// tz_id
// :
// "Asia/Kolkata"

export default App;
