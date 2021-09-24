import React, { useState } from 'react';
import './App.css';
import ReactMapGL, { Source, Layer } from "react-map-gl"
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import { heatmapLayer } from './map-style';
import data from './timelineData'

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 51.5074,
    longitude: -0.1278,
    width: '100vw',
    height: '100vh',
    zoom: 12
  })
  const [login, setLogin] = useState({
    loggedIn: false,
    mapLoaded: false,
  })

  const logInUser = () => {
    setLogin({ loggedIn: true })
  }
  const signUp = () => {
      //sign up function
  }
  const loaded = () => {
    setLogin({
      loggedIn: true,
      mapLoaded: true,
    })
  }

  const getLoadingSpinner = () => {
    if (!login.mapLoaded) return <LoadingSpinner />
  }


  return login.loggedIn ? <div>
    <ReactMapGL
      className="map"
      {...viewport}
      onLoad={loaded}
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
      mapStyle="mapbox://styles/teefoles/ckfjr0ztx3fxw19nuqm5dnly9"
      mapboxApiAccessToken={'pk.eyJ1IjoidGVlZm9sZXMiLCJhIjoiY2tmanA3eXcwMTc5bjJxczJoZDYwbjV4bSJ9.3x9lX93u1ghk_gIDIJpGiQ'}>
      <Navbar />
      {getLoadingSpinner()}
      <Source type="geojson" data={data}>
        <Layer {...heatmapLayer} />
      </Source>
    </ReactMapGL>
  </div> : <Login logIn={logInUser} signUp={signUp}></Login>



}
