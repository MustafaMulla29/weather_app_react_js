import React, { useEffect, useState } from "react";
import "./css/style.css";
import { TiWeatherCloudy } from "react-icons/ti";

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      const fetchApi = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${process.env.REACT_APP_WEATHER_API}`;
        const res = await fetch(url);
        const resjson = await res.json();
        // console.log(resjson);
        setCity(resjson);
      };
      fetchApi();
    } catch (error) {
      console.log(error);
    }
  }, [search]);

  const current = new Date();
  const date = `${current.toLocaleString("default", {
    weekday: "long",
  })} ${current.toLocaleString("default", {
    dateStyle: "long",
  })}`;
  const time = `${
    current.getHours() > 12 ? current.getHours() - 12 : current.getHours()
  } : ${
    current.getMinutes() < 10
      ? "0" + current.getMinutes()
      : current.getMinutes()
  } : ${
    current.getSeconds() < 10
      ? "0" + current.getSeconds()
      : current.getSeconds()
  } ${current.getHours() >= 12 ? "PM" : "AM"} `;

  // let emoji = null;
  // if (typeof city?.main !== "undefined") {
  //   if (city?.weather?.[0]?.main == "Clouds") {
  //     emoji = "Cloud";
  //   } else if (city?.weather?.[0]?.main == "Thunderstorm") {
  //     emoji = "Bolt";
  //   } else if (city?.weather?.[0]?.main == "Drizzle") {
  //     emoji = "CloudRain";
  //   } else if (city?.weather?.[0]?.main == "Rain") {
  //     emoji = "RainShower";
  //   } else if (city?.weather?.[0]?.main == "Snow") {
  //     emoji = "SnowFlake";
  //   } else {
  //     emoji = "Smog";
  //   }
  // } else {
  //   return <div>...Loading</div>;
  // }
  //   document.body.style.background = `https://source.unsplash.com/900x900/?${city?.weather?.[0]?.main} no-repeat center center/cover`;
  // let emoji = null;
  // if (typeof city?.main != "undefined") {
  //   if (city?.weather?.[0]?.main === "clouds") {
  //     emoji = <TiWeatherCloudy />;
  //   }
  // } else {
  //   emoji = null;
  // }
  return (
    <>
      {/* {!city ? (
        <img src="" alt="" className="info-img" />
      ) : (
        <img
          src={`https://source.unsplash.com/1200x590/?${city?.weather?.[0]?.main}`}
          alt=""
          className="info-img"
        />
      )} */}
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            className="inputFeild"
            value={search}
            placeholder="Enter city"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <div>
            <div className="info">
              <img
                src="images/weather.png"
                alt="image"
                className="info-image"
              />
              {/* {`<Bi${emoji}/>`} */}
              <h3 className="dateTime">{date}</h3>
              <h3 className="dateTime">{time}</h3>
              <h2 className="location">
                {/* <BiStreetView className="location-icon" /> */}
                {search}
              </h2>

              <h1 className="temp">Temperature °Cel</h1>
              <h2 className="temp">Weather | Description</h2>
              <h3 className="tempmin_max">Min temp : °Cel | Max temp : °Cel</h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        ) : (
          <div>
            <div className="info">
              <img
                src="images/weather.png"
                alt="image"
                className="info-image"
              />
              <h3 className="dateTime">{date}</h3>
              <h3 className="dateTime">{time}</h3>
              <h2 className="location">
                {/* <BiStreetView className="location-icon" /> */}
                {search}, {city?.sys?.country}
              </h2>
              <h1 className="temp">{city?.main?.temp} °Cel</h1>
              {/* <h2 className="">{emoji}</h2> */}
              <h2 className="temp">
                {city?.weather?.[0]?.main} | {city?.weather?.[0]?.description}{" "}
              </h2>

              <h3 className="tempmin_max">
                Min temp : {city.main?.temp_min} °Cel | Max temp :{" "}
                {city.main?.temp_max} °Cel
              </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Tempapp;
