import React from 'react';
import './team_links.css'
import NeilPic from '../../assets/neil_img.png';
import GeorgePic from '../../assets/george_img.jpeg';
import JortzPic from '../../assets/jortz_img.jpg';

class TeamLinks extends React.Component{
  render() {
    return (
      <div className="cards-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={NeilPic} alt="Neil_Avatar" />
            </div>
            <div className="flip-card-back">
              <h4>Neil Pandya</h4>
              <p className="team">Frontend Lead</p>
              <div className='links-container'>
                <a href="https://www.linkedin.com/in/neil-pandya-610588187/">
                  {/* <i class="fab fa-linkedin"></i> */}
                  LinkedIn
                </a>
                <a href="https://github.com/NeilyWitches">
                  {/* <i class="fab fa-github"></i> */}
                  Github
                </a>
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
                <a href="https://www.linkedin.com/in/george-tsimis-a5986224/">
                  {/* <i class="fab fa-linkedin"></i> */}
                  LinkedIn
                </a>
                <a href="https://github.com/GGMU1986">
                  {/* <i class="fab fa-github"></i> */}
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={JortzPic} alt="Jortz_Avatar" />
            </div>
            <div className="flip-card-back">
              <h4>Jonathan D. Ortiz</h4>
              <p className="team">Team Lead</p>
              <div className='links-container'>
                <a href="https://www.linkedin.com/in/jonathan-ortiz-634b66a3/">
                  {/* <i class="fab fa-linkedin"></i> */}
                  LinkedIn
                </a>
                <a href="https://github.com/JortzFromSchool">
                  {/* <i class="fab fa-github"></i> */}
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TeamLinks;
