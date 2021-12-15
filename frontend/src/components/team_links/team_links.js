import React from 'react';
import './team_links.css'
import NeilPic from '../../assets/neil_img.png';
import GeorgePic from '../../assets/george_img.jpeg';
import JortzPic from '../../assets/jortz_img.jpg';
import MatteoPic from '../../assets/matteo_img.jpeg';
import GeorgeFav from '../../assets/george_favicon.png';
import NeilFav from '../../assets/neil_favicon.png';
import MatteoFav from '../../assets/matteo_favicon.png';
import JortzFav from '../../assets/jortz_favicon.png';

class TeamLinks extends React.Component{
  render() {
    return (
      <div className="cards-container">
        <div className="two-devs">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={NeilPic} alt="Neil_Avatar" />
              </div>
              <div className="flip-card-back">
                <h4>Neil Pandya</h4>
                <p className="team">Frontend Lead</p>
                <div className='links-container'>
                  <div className="two-links">
                    <a className="top-link" href="https://www.linkedin.com/in/neil-pandya-610588187/" target="blank">
                      <i className="fab fa-linkedin link" ></i>
                    </a>
                    <a href="https://github.com/NeilyWitches" target="blank">
                      <i className="fa fa-github link"></i>
                    </a>
                  </div>
                  <div className="two-links">
                    <a href="https://angel.co/u/neil-pandya-1" target="blank">
                      <i class="fab fa-angellist link"></i>
                    </a>
                    <a href="https://frosty-fermi-9f5bdd.netlify.app/index.html" target="blank">
                      <img src={NeilFav} className="personal-site-icon"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={GeorgePic} alt="George_Avatar" className='g' />
              </div>
              <div className="flip-card-back">
                <h4>George Tsimis</h4>
                <p className="team">Flex</p>
                <div className='links-container'>
                  <div className="two-links">
                    <a className="LI" href="https://www.linkedin.com/in/george-tsimis-a5986224/" target="blank">
                      <i class="fab fa-linkedin link"></i> 
                    </a>
                    <a href="https://github.com/GGMU1986" target="blank">
                      <i class="fab fa-github link"></i>
                    </a>
                  </div>
                  <div className="two-links">
                    <a href="https://angel.co/u/george-tsimis" target="blank">
                      <i class="fab fa-angellist link"></i>
                    </a>
                    <a href="https://ggmu1986.github.io/" target="blank">
                      <img src={GeorgeFav} className="george-personal-site-icon"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="two-devs">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={JortzPic} alt="Jortz_Avatar" />
              </div>
              <div className="flip-card-back">
                <h4>Jonathan Ortiz</h4>
                <p className="team">Team Lead</p>
                <div className='links-container'>
                  <div className="two-links">
                    <a className="LI" href="https://www.linkedin.com/in/jonathan-ortiz-634b66a3/" target="blank">
                      <i class="fab fa-linkedin link"></i>
                    </a>
                    <a href="https://github.com/JortzFromSchool" target="blank">
                      <i class="fab fa-github link"></i>
                    </a>
                  </div>
                  <div className="two-links">
                    <a href="https://angel.co/u/jonathan-ortiz-1" target="blank">
                      <i class="fab fa-angellist link angel"></i>
                    </a>
                    <a href="https://www.jonathandortiz.com/" target="blank">
                      <img src={JortzFav} className="jortz-personal-site-icon"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={MatteoPic} alt="Jortz_Avatar" />
              </div>
              <div className="flip-card-back">
                <h4>Matteo Rossant</h4>
                <p className="team">Backend Lead</p>
                <div className='links-container'>
                  <div className="two-links">
                    <a className="LI" href="https://www.linkedin.com/in/matteo-rossant-26ab65106/" target="blank">
                      <i class="fab fa-linkedin link"></i>
                    </a>
                    <a href="https://github.com/MRossant" target="blank">
                      <i class="fab fa-github link"></i>
                    </a>
                  </div>
                  <div className="two-links">
                    <a href="https://angel.co/u/matteo-rossant-1" target="blank">
                      <i class="fab fa-angellist link angel"></i>
                    </a>
                    <a href="http://www.matteocodes.com/" target="blank">
                      <img src={MatteoFav} className="matteo-personal-site-icon"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TeamLinks;
