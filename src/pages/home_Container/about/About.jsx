import React from 'react';

const About = () => {
  const styles = {
    container: {
    //   backgroundColor: '#000000', // Black background
    //   color: '#8A2BE2', // violet text color
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
    },
    header: {
      fontSize: '36px',
      marginBottom: '20px',
    },
    content: {
      fontSize: '18px',
      lineHeight: '1.6',
    },
    highlight: {
    //   color: '#EE82EE', // Light violet for highlights
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header }> </h1>
      <div style={styles.content}>
        <p>
          <span style={styles.highlight}> Y_Bus,</span>
        </p>
        <br/>
        <p>Live Bus Tracking :
            <br/> 
        We have integrated this great technology of live bus tracking in almost all of our buses. This helps the passengers to be informed about the live position of the bus, thus helping them in planning their commute to the bus stand. It also prevents the unwanted stress of missing or waiting for the bus in case of delays.
        </p>
        <p>
            <br/>
        Our Customer Support :
        <br/> 
        To render the best service we strive to provide the best customer support. We have an attentive customer support team to which the passengers can report any issues regarding the journey. This team addresses all the issues of the passengers and comes out with a solution in the shortest possible time. This creates a warm feeling in the customers thus pushing them to be our regular customers.
        </p>
        <br/>
        <p>
        Great Comfort  
        Now, once a passenger boards the bus he will be surprised by the inner comfort of the bus. The buses have all the latest amenities like WiFi, charging point, water bottle and central TV. The seats are really very comfortable and create a feeling of a cosy bedroom. We have almost all the luxury brand buses in our fleet. Our luxurious fleet includes Mercedes Benz Multi-axle buses, Volvo Multi-axle buses, and Scania Multi-axle comfort buses. These buses help in smoothening the journey. Our motto to change the perception of bus travel makes us enhance our luxury levels regularly.
        </p>
        <br/>
        <p>
        Safety :
        <br/> 
        Safety is one of the most important criteria we look for while planning a bus route. We have the best drivers who completely understand the importance of safety and follow all the safety rules.
        </p>
        <br/>
        <p>
        Regular Offers :
        <br/> 
        We at SPS Travels strive to maintain the most reasonable rates in the market. This also makes our passengers happy and thus we further give them discount offers on a regular basis to enhance their happiness.
        </p>
      </div>
    </div>
  );
};

export default About;
