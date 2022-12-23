import { useContext } from 'react';
import { GenerateContext } from '../generate/GenerateMain';
import { Card, Row, Col } from 'react-bootstrap';
import CardHeader from '../../../components/CardHeader';
import { useSubstrate } from '../../../substrate-lib';
import classes from './BackgroundVideo.module.css'

const BackgroundVideo = () => {

  const videoSource = "https://uploads-ssl.webflow.com/6149bc23effb8c1439e26034/61a020979e8db8c2b0416a0f_New-Futures_MANIFESTO_LR-transcode.mp4"

  return (

    <div className="relative overflow-hidden ">
      <video autoPlay="autoplay" loop="loop" muted className="w-full border-solid border-8 border-opacity-100">
        <source src={videoSource} type="video/mp4" />
        Your Browser does not support the video tag
      </video>
    </div>

    
  
  )
}

export default BackgroundVideo


  