// Chatbot.js

import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Your Botpress script injection code here
    const botpressScript = document.createElement('script');
    botpressScript.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    document.head.appendChild(botpressScript);

    const configScript = document.createElement('script');
    configScript.src = 'https://mediafiles.botpress.cloud/0728d667-44d3-4e60-9a0b-03fb7e37ab7e/webchat/config.js';
    configScript.defer = true;
    document.head.appendChild(configScript);

    // Clean up the scripts when the component is unmounted
    return () => {
      document.head.removeChild(botpressScript);
      document.head.removeChild(configScript);
    };
  }, []);

  return <div id="webchat"></div>;
};

export default Chatbot;
