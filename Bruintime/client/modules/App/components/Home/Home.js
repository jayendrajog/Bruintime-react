import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import Particles from 'react-particles-js';
// Import Style
import styles from './Home.css';

export function Home() {

  return (
    <div className={styles["container"]}>
      <div className={styles["background"]}>
        <Particles params={{
            particles: {
               number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 1500
                }
              },
              color: {
                value: "#ffb300"
              },
              size: {
                value: 3.945738208161363,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false
                }
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
              },
              move: {
                  enable: true,
                  speed: 3,
                  direction: "none",
                  random: false,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 1200,
                    rotateY: 1200
                  }
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "grab"
                  },
                  onclick: {
                    enable: true,
                    mode: "push"
                  },
                  resize: true
                },
                modes: {
                  grab: {
                    distance: 200,
                    line_linked: {
                      opacity: 1
                    }
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4
                  },
                  push: {
                    particles_nb: 4
                  },
                  remove: {
                    particles_nb: 2
                  }
                }
              },
              retina_detect: true
              }
        }}/>
      </div>
      <div className={styles["title"]}>
        <h1> BruinTime </h1>
      </div>
    </div>
  );
}

export default Home;
