
import React from 'react';
import './index.css';
import Counter from '../src/Lesson29/Lesson29';

//import Lesson29 from './Lesson29/Lesson29';


export default function App() {
  return (
    
  <Counter 
  />


  );
}


/*import { Chart } from "react-google-charts";

function App() {
  return (
    <div class="dashboard">
    <div class="container d-grid">
      <section class="main-container">
        
          <h2 class="title">PieChart</h2>
          <div class="group-info card-2">
          <div class="container">
  <Chart
    chartType="PieChart"
    data={[
      ["Task", "Hours per Day"],
      ["Work", 11],
      ["Eat", 2],
      ["Commute", 2],
      ["Watch TV", 2],
      ["Sleep", 7],
    ]}
    options={{
      title: "My Daily Activities",
      is3D: true,
    }}
    width={"600px"}
    height={"400px"}
  />
   </div>
        </div>
        </section>
  </div>
  </div> 
  );
}
class ClassComponent extends React.Component {
constructor(props) {
   super(props);
   this.state = {
     count: 0     //Изначальное состояние счетчика
   };
 }

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
export default App;*/
/*export default class App extends React.Component {
  static defaultProps = {
    checked: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
    };
  };
  handleChange = () => {
  
    console.log(this.state.checked) //#1 false 
    this.setState({
      checked: !this.state.checked, //true
    });
    console.log(this.state.checked) //#2 ?
  };  
  render() {
    const { checked } = this.state;
    return (
      <div className="React__checkbox">
        <label>
          <input 
            type="checkbox"
            className="React__checkbox--input"
            checked={checked}
            onChange={this.handleChange}
          />
          <span 
            className="React__checkbox--span"
          />
        </label>
      </div>
    );
  }
}
*/

/*export default class Transl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       clicked: false
     };

     this.handleClick = this.handleClick.bind(this);
   }

  handleClick() {
    this.setState({
      clicked: true
    });
  }

  render () {
    const {en, tr, ru} = this.props;
    const { clicked } = this.state;
    return (
      <div className={style.card}>
    <div className={style.wordwrap}>      
      <div className={style.item} >{en}</div>
      <div className={style.item}>{tr}</div>
          {this.state.clicked ? (
            <div className={style.item} onClick={this.handleClick} >{ru}</div>
          ) : (
            
            <button className={style.button_tr} onClick={this.handleClick} >Перевод</button>
          )}
        
      </div>
      </div>
    )
  }
}*/
