
export default class Timer extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       minutes: 0,
       seconds: 0   //Изначальное состояние счетчика
     };
   }
componentDidMount ()
{
  this.getData();
}

getData = () => {
  let TimerJSON = localStorage.getItem("timer");
  let Timer = JSON.parse(TimerJSON);
  this.setState (
    {
      minutes: Number (Timer.minutes),
      seconds: Number (Timer.seconds)
    }
  );
}

render(){

  
}

   
  }
