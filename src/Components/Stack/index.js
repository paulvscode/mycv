import React from "react";
import ReactIcon from "../../assets/images/react.svg";
import HtmlIcon from "../../assets/images/htmllogo.svg";
import ReduxIcon from "../../assets/images/redux.png";
import ScssIcon from "../../assets/images/scss.svg";
import NodeJsIcon from "../../assets/images/nodejs.png";
import ExpressIcon from "../../assets/images/expressjs.png";
import SequelizeIcon from "../../assets/images/sequelize.svg";
import PostgresqlIcon from "../../assets/images/postgresql.png";
import MaterialuiIcon from "../../assets/images/material-ui.svg";
import FlatuiIcon from "../../assets/images/flatui.png";
import GridIcon from "../../assets/images/grid.png";
import GitIcon from "../../assets/images/gitlogo.png";
import NpmIcon from "../../assets/images/npm.png";
import SlackIcon from "../../assets/images/slack.svg";
import GithubIcon from "../../assets/images/github.png";

import "./styles.css";

const Stack = () => {
  return (
    <div className='container-stack'>
      <div className='positionning-div-stack'>Stack</div>
      <div className='content-stack'></div>
      <div className='stacks'>
        <div className='grid-container'>
          <div className='front-end-title'>Front-end</div>
          <div className='front-end-container'>
            <div className='html'>
              <div className='logo-box'>
                <img
                  className='miniature added-styling height-icon'
                  src={HtmlIcon}
                  alt=''
                />
                <div className='logo-caption'>Html</div>
              </div>
            </div>
            <div className='react'>
              <div className='logo-box'>
                <img
                  className='miniature added-styling height-icon'
                  src={ReactIcon}
                  alt=''
                />
                <div className='logo-caption'>React</div>
              </div>
            </div>
            <div className='scss'>
              <div className='logo-box'>
                <img
                  className='miniature added-styling height-icon'
                  src={ScssIcon}
                  alt=''
                />
                <div className='logo-caption'>Sass</div>
              </div>
            </div>
            <div className='redux'>
              <div className='logo-box'>
                <img
                  className='miniature added-styling height-icon'
                  src={ReduxIcon}
                  alt=''
                />
                <div className='logo-caption'>Redux</div>
              </div>
            </div>
          </div>

          <div className='back-end-title'>Back-end</div>
          <div className='back-end-container'>
            <div className='node-js'>
              <div className='logo-box'>
                <img
                  className='miniature added-styling height-icon'
                  src={NodeJsIcon}
                  alt=''
                />
                <div className='logo-caption'>Node Js</div>
              </div>
            </div>
            <div className='express-js'>
              <div className='logo-box'>
                <img
                  className='miniature added-styling height-icon'
                  src={ExpressIcon}
                  alt=''
                />
                <div className='logo-caption'>Express Js</div>
              </div>
            </div>
            <div className='sequelize'>
              <div className='logo-box'>
                <img
                  className='miniature added-styling height-icon'
                  src={SequelizeIcon}
                  alt=''
                />
                <div className='logo-caption'>sequelize</div>
              </div>
            </div>
            <div className='postgresql'>
              <div className='logo-box'>
                <img
                  className='miniature added-styling height-icon'
                  src={PostgresqlIcon}
                  alt=''
                />
                <div className='logo-caption'>postgresql</div>
              </div>
            </div>
          </div>
          <div className='others-title'>Others</div>
          <div className='others-container'>
            <div className='material-ui'>
              <div className='logo-box'>
                <img
                  className='miniature added-styling height-icon'
                  src={MaterialuiIcon}
                  alt=''
                />
                <div className='logo-caption'>material ui</div>
              </div>
            </div>
            <div className='flat-ui'>
              <div className='logo-box'>
                <img
                  className='miniature added-styling height-icon'
                  src={FlatuiIcon}
                  alt=''
                />
                <div className='logo-caption'>flat ui</div>
              </div>
            </div>
            <div className='grid'>
              <div className='logo-box'>
                <img
                  className='miniature added-styling height-icon'
                  src={GridIcon}
                  alt=''
                />
                <div className='logo-caption'>grid</div>
              </div>
            </div>
          </div>
          <div className='frameworks-title'>Frameworks</div>
          <div className='frameworks-container'>
            <div className='git'>
              <div className='logo-box'>
                <img
                  className='miniature added-styling height-icon'
                  src={GitIcon}
                  alt=''
                />
                <div className='logo-caption'>git</div>
              </div>
            </div>
            <div className='npm'>
              <div className='logo-box'>
                <img
                  className='miniature added-styling height-icon'
                  src={NpmIcon}
                  alt=''
                />
                <div className='logo-caption'>npm</div>
              </div>
            </div>
            <div className='slack'>
              <div className='logo-box'>
                <img
                  className='miniature added-styling height-icon'
                  src={SlackIcon}
                  alt=''
                />
                <div className='logo-caption'>slack</div>
              </div>
            </div>
            <div className='github'>
              <div className='logo-box'>
                <img
                  className='miniature added-styling height-icon'
                  src={GithubIcon}
                  alt=''
                />
                <div className='logo-caption'>github</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
