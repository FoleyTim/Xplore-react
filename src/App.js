import React, { useEffect, useRef, useState }from 'react';
import './App.css';
import ReactMapGL, { Source, Layer } from "react-map-gl"
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import { heatmapLayer } from './map-style';
import data from './timelineData'
import Upload from './components/Upload/Upload';
const config = require('./config/config.json');

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
  const [showUpload, setShowUpload] = useState(false)


  const logInUser = () => {
    setLogin({ loggedIn: true })
  }

  const logOutUser = () => {
    setLogin({ loggedIn: false })
  }

  const signUp = () => {
      //sign up function
  }

  const getUpload = () => {
    if(showUpload){
      return <Upload className="upload-modal"/>
    }
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
      mapStyle={config.mapStyle}
      mapboxApiAccessToken={config.mapBoxApiKey}>
      <Navbar logOut={logOutUser} showUpload={setShowUpload}/>
      {getUpload()}
      {getLoadingSpinner()}
      <Source type="geojson" data={data}>
        <Layer {...heatmapLayer} />
      </Source>
    </ReactMapGL>
  </div> : <Login logIn={logInUser} signUp={signUp}></Login>



}
