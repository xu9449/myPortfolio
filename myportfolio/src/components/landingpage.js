import React, {Component} from 'react';
import { Grid, Cell} from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style = {{width: '100%', margin: 'auto'}}>
        <Grid className = "landing-grid">
          <Cell col= {12}>
            <img
              src = "https://raw.githubusercontent.com/xu9449/myPortfolio/master/myportfolio/public/Avatar.png"
              alt = "avatar"
              className="avatar-img"
            />

            <div className = "banner-text">
              <h1> Software Developer </h1>
              <hr/>
              <p>Java | SQL | C# | Spring | JavaScript | React | NodeJS | Unity</p>

            <div className="social-links">

              {/* LinkedIn */}
              <a  href="https://www.linkedin.com/in/xu9449/" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="false" background="#3B5998"/>
              </a>

              {/* Github */}
              <a href="https://github.com/xu9449" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true" />
              </a>

              {/* Vimeo */}
              <a href="https://vimeo.com/user94263944" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-vimeo-square" aria-hidden="true" />
              </a>

              {/* Youtube */}
              <a href="https://www.youtube.com/channel/UCzgKVLdL08kL9F7BD2IpiBg?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                <i className="fa fa-youtube-square" aria-hidden="true" />
              </a>

            </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
