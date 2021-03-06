import { isEvenMonth } from "./TimeTravel";
import {useState} from 'react';

const Day = (props) => {
  const [isSuccess, setIsSuccess] = useState(false)

  function clickHandler() {
    if (isSuccess) {setIsSuccess(false)}
    else {setIsSuccess(true)}
  }

  const isToday = (date) => { return date.toDateString() === new Date().toDateString();}
  let classes = "";
  classes += " day";
  classes += isEvenMonth(props.date) ? " even-month" : " odd-month";
  classes += isSuccess ? " success" : "";

  return (
    <div 
      className= {classes}
      id={isToday(props.date) ?"today": null}
      key = {props.date.getDate()}
      onClick = {clickHandler}
    > 
        {props.date.getMonth() + " / "  + props.date.getDate()} 
    </div>
  );
}

export default Day;
