import React from 'react';

function Home() {
  return (
    <div>
      <h1 style={{color:"red",backgroundColor:"gray"}}>Home Page</h1>
      <div style={{display:"flex"}}>
      <div style={{backgroundColor:"gray",height:"500px",width:"700px"}}>
        <br></br><h1>Welcome to our Shopping Page</h1><br></br>
        <h3>Ecommerce landing pages play a number of significant roles in ecommerce – they’re often the first impression new shoppers have of your site, and they motivate returning customers to keep participating with your brand and continue making purchases.</h3>
        </div>
      <div>
        <img src='https://dataoptin.com/wp-content/uploads/2021/05/AdobeStock_223290240-1-scaled.jpeg'height="500px" width="700px"></img>
      </div>
      </div>
    </div>
  );
}

export default Home;