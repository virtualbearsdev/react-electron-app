import React, { useEffect, useState } from 'react';
import ScreenShot from '../../assets/images/screenshots/shot.png';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const [screenshot, setScreenshot] = useState(null);

  const captureScreen = () => {
    // Send a message to the main process to capture the screen
    window.electron.ipcRenderer.sendMessage('capture-screen');
  };

  useEffect(() => {
    setInterval(function(){
      captureScreen();
      console.log("Screenshot captured");

      // Listen for the response from the main process
      window.electron.ipcRenderer.on('screenshot-captured', (event, dataURL) => {
        // console.log(event);
        setScreenshot(true);
      });

    }, 10000)
    return () => {
    };
  }, []);



  return (
    <Container>
      <Row>
        <Col lg={12}>
          <h1>Home</h1>
          {screenshot && <img style={{ width: '100%', display: 'block' }} src={ScreenShot} alt="Screenshot" />}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
