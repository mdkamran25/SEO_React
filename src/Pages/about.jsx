import Cookies from 'js-cookie';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ReactGA from 'react-ga4'
const About = () => {
  const [utm_id, setUtm_id] = useState();

  useEffect(() => {
    if (Cookies.get("utm")) {
      setUtm_id(Cookies.get("utm"));
    }
  }, []);
    ReactGA.send({
        hitType: "pageview",
        page: window.location.pathname,
        title: "/about"
      });

      const eventTime = new Date().toISOString();
      window.dataLayer.push({'event':"About page visited", action: "about_page_visited",'label': utm_id, "eventTime": eventTime,})

  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default About
