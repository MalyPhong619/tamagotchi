import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function Buttons(props){
  let numberOfClicks = 0;

  function click() {
    if (numberOfClicks > 1){
      numberOfClicks = 0;
    } else {
      numberOfClicks++;
    }
  }

  function handleButtonASelect() {
    const { dispatch } = props;
    const action = {
      type: 'SELECT_BUTTON',
      buttonId: numberOfClicks
    };
    dispatch(action);
  }

  function handleButtonCSelect() {
    const { dispatch } = props;
    const action = {
      type: 'CREATE_TAMAGOTCHI',
      chicken: {
        activity: 100,
        hunger: 100,
        happiness: 100,
        health: 300
      }
    };
    dispatch(action);
  }

  return(
    <div className='buttonPosition'>
      <div className='toolTip'>
        <button onClick={click}></button>
        <span className='toolTipText'>A<br/><br/>Toggle Icons</span>
      </div>
      <div className='toolTip secondButton'>
        <button onClick={handleButtonASelect}></button>
        <span className='toolTipText'>B<br/><br/>Select</span>
      </div>
      <div className='toolTip'>
        <button onClick={handleButtonCSelect}></button>
        <span className='toolTipText'>C<br/><br/>Home</span>
      </div>
      <style jsx>{`
          .buttonPosition{
            display: flex;
            justify-content: space-around;
            width: 60%;
            height: 15%;
            margin-top: 1%;
          }
          span{
            font-size: .8em;
          }
          .toolTip{
            position: relative;
            display: inline-block;
            padding: 5px;
            width: 20%;
            height: 65%;
          }
          .toolTipText{
            visibility: hidden;
            width: 100%;
            height: 50%;
            background-color: rgba(251,227,58,.4);
            color: black;
            text-align: center;
            padding: 3% 0;
            border-radius: 8%;
            position: absolute;
            z-index: 1;
          }
          .toolTip:hover .toolTipText{
            visibility: visible;
          }
          button{
            width: 100%;
            height: 100%;
            background-color: blue;
            border: none;
            border-radius: 50%;
            box-shadow: 8px 8px 50px black, inset 5px 2px 5px rgb(104, 91, 255);
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .secondButton{
            display: flex;
            align-self: flex-end;
          }
          button:hover{
            cursor: pointer;
          }
          @media only screen and (max-width: 768px){
            div{
              width: 250px;
              height: 80px;
            }
          }
          @media only screen and (max-width: 425px){
            div{
              width: 150px;
              height: 45px;
              margin-top: 3%;
            }
          }
          `}</style>
    </div>

  );
}

Buttons.propTypes = {
  numberOfClicks: PropTypes.number,
};

export default connect()(Buttons);
