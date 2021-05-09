import React from "react";
import ReactIcon from "../../assets/images/react.svg";
import HtmlIcon from "../../assets/images/html.svg";
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
          <div className='front-end'>Front-end</div>
          <div className='back-end'>Back-end</div>
          <div className='others'>Others</div>
          <div className='frameworks'>Frameworks</div>
          <div className='html'>
            <img className='miniature added-styling' src={HtmlIcon} alt='' />
          </div>
          <div className='react'>
            <img className='miniature added-styling' src={ReactIcon} alt='' />
          </div>
          <div className='redux'>
            <img className='miniature added-styling' src={ReduxIcon} alt='' />
          </div>
          <div className='scss'>
            <img className='miniature added-styling' src={ScssIcon} alt='' />
          </div>
          <div className='Node-Js'>
            <img className='miniature added-styling' src={NodeJsIcon} alt='' />
          </div>
          <div className='express-js'>
            <img className='miniature added-styling' src={ExpressIcon} alt='' />
          </div>
          <div className='sequelize'>
            <img
              className='miniature added-styling'
              src={SequelizeIcon}
              alt=''
            />
          </div>
          <div className='postgresql'>
            <img
              className='miniature added-styling'
              src={PostgresqlIcon}
              alt=''
            />
          </div>
          <div className='material-ui'>
            <img
              className='miniature added-styling'
              src={MaterialuiIcon}
              alt=''
            />
          </div>
          <div className='flat-ui'>
            <img className='miniature added-styling' src={FlatuiIcon} alt='' />
          </div>
          <div className='grid'>
            <img className='miniature added-styling' src={GridIcon} alt='' />
          </div>
          <div className='git'>
            <img className='miniature added-styling' src={GitIcon} alt='' />
          </div>
          <div className='npm'>
            <img className='miniature added-styling' src={NpmIcon} alt='' />
          </div>
          <div className='slack'>
            <img className='miniature added-styling' src={SlackIcon} alt='' />
          </div>
          <div className='github'>
            <img className='miniature added-styling' src={GithubIcon} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
