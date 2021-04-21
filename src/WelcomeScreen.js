import { Button, Zoom } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Registrar from './Registrar';

const WelcomeScreen = () => {

  return (
      <React.Fragment>
        <div className='welcome-main-container'>
            <DelayedAnimWarning></DelayedAnimWarning>
            <DelayedWoffs></DelayedWoffs>
            <DelayedButton></DelayedButton>
        </div>
      </React.Fragment>

  );
}

const DelayedAnimWarning = () => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 1000)
  }, [show])

  if (show) {
    return(
     
        <React.Fragment>
          <Zoom in={true}>
            <div className="welcome-warning-container">
              <h1>Warning</h1>
              <h2>Beware of dogs</h2>
            </div>

          </Zoom>
        </React.Fragment>
    
    )
  } else {
    return null
  }

}

const DelayedWoffs = () => {
    
    const [show, setShow] = useState(false)
    useEffect(() => {
        setTimeout(() => {
          setShow(true)
        }, 1500)
      }, [show])

      if (show) {
        return(
          <React.Fragment>
                <div className="woff-container">
                    <DelayedAnimWoffFirst></DelayedAnimWoffFirst>
                    <DelayedAnimWoffSecond></DelayedAnimWoffSecond>
                    <DelayedAnimWoffThird></DelayedAnimWoffThird>
                </div>
          </React.Fragment>
        )
      }
      else {
        return null
      }
}


const DelayedAnimWoffFirst = () => {

    const [show, setShow] = useState(false)
  
    useEffect(() => {
      setTimeout(() => {
        setShow(true)
      }, 250)
    }, [show])
  
    if (show) {
      return(
        <React.Fragment>
              <Zoom in={true}>
                <p>Woff</p>
            </Zoom>  
        </React.Fragment>
      )
    }
    else {
      return null
    }
  }

const DelayedAnimWoffSecond = () => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 500)
  }, [show])

  if (show) {
    return(
      <React.Fragment>
            <Zoom in={true}>
              <p>Woff</p>
            </Zoom>  
      </React.Fragment>
    )
  }
  else {
    return null
  }
}

const DelayedAnimWoffThird = () => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 750)
  }, [show])

  if (show) {
    return(
      <React.Fragment>
          <Zoom in={true}>
            <p>Woff</p>
            </Zoom>
      </React.Fragment>
    )
  }
  else {
    return null
  }
}

const DelayedButton = () => {

  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 3500)
  }, [show])

  if (show) {
    return(
      <React.Fragment>
        <Zoom in={true}>
          <Button variant="contained" color="secondary" style={{marginTop: 40}} onClick={RenderRegistrar}>Go to register</Button>
        </Zoom>
      </React.Fragment>
    )
  } else {
    return null
  }

}

function RenderRegistrar() {
  const root = document.getElementById('app-content-view')
  document.title = 'Owner registry'
  ReactDOM.render(<Registrar/>, root)

}

export default WelcomeScreen