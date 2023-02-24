//import React, {Component} from 'react';
//import React, { useState, useEffect } from 'react';
/*export default class Counter extends Component {
  state = {
    count: 0
  };
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };
  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}*/
import React, { useState, useEffect } from 'react';

const Counter = () =>{
  const [count, setCount] = useState(0);
  const handleClick = () =>
    setCount(currentCount => currentCount + 1);
    useEffect(() => console.log(count), [
      count,
    ]);
   
    return (
      <button type="button" onClick={handleClick}>
        {count}
      </button>
    );
  };
   
  export default Counter;









/*export default function Lesson29() {
  return (
    <div>Lesson29</div>
  )
}*/

/*export default class Counter extends React.Component {
    render() {
      let {description,title} = this.props;
      console.log(this.props);
      title = title + description; //title = title + descriptiontitle += description
      console.log(description);
       return (
        <> {title}</>
         
      );
  }
}*/
/*export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    count: 0
  }};
  componentDidMount() {
    console.log("Hello"); //Вызовет один раз после монтирорвания компонента
  }
  render() {
    return (
      <div>
        <p>count: {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>
      </div>
    );
  }
 }
const FunctionalComponent = () => {
 const [count, setCount] = React.useState(0); // создаем состояние и метод. 

 React.useEffect(() => {  //Этот хук заменяет сразу несколько методов жизненного цикла
   console.log("Hello");  //его вызов зависит от передаваемых параметров
 }, []);

 return (
   <div>
     <p>count: {count}</p>
     <button onClick={() => setCount(count + 1)}>Click</button> //изменение состояния
   </div>
 );
};

 /*class Counter extends Component {
  state = {
    count: 0
  };
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };
  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}*/
/*const FunctionalComponent = () => {
  const [count, setCount] = React.useState(0);
  

}
*/

 /*import React, { useState, useEffect } from 'react'; // импортируем хуки

const FunctionalComponent = () => {
 const [count, setCount] = useState(0); // создаем состояние и метод. 

 useEffect(() => {  //Этот хук заменяет сразу несколько методов жизненного цикла
   console.log("Hello");  //его вызов зависит от передаваемых параметров
 }, []);

 return (
   <div>
     <p>count: {count}</p>
     <button onClick={() => setCount(count + 1)}>Click</button> //изменение состояния
   </div>
 );
};*/
