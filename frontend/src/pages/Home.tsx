import React from 'react';

const Home = () => {
  const handleGetStarted = () => {
    // You can navigate or trigger an action here
    alert('Get Started clicked!');
  };

  return (
    <div>
      <h1>Welcome to the Homepage!</h1>
      <p>This is the home page of your app.</p>
      <button onClick={handleGetStarted}>Get Started</button>
    </div>
  );
};

export default Home;
