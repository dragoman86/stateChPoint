import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      show: false,
      fullName: "Yasmine",
      bio: "Bio1",
      imgSrc: "person1.jpg",
      profession: "Software Devloper",
    };
  }

  showProfile=()=>{this.setState({ show: !this.state.show })}

  changeProfile=()=>{
    this.setState(
      {
        fullName:"Maximus",
        bio: "Bio2",
        imgSrc: "person2.jpg",
        profession: "IT Support"
      }
    )
  }

  componentDidMount() {
    this.chgFName = setInterval(
      () => this.changeProfile(),
      10000
    );
  }

  componentWillUnmount() {
    clearInterval(this.chgFName);
  }

  render() {
  return (
      <div className="App">
          <button onClick={this.showProfile} style={{ width:"100%", height:"100px"}}>
          SHOW PROFILES
          </button>
          {
          this.state.show && 
          <div className='Person'>
                <h1>{this.state.fullName}</h1>
                <p>{this.state.bio}</p>
                <p>{this.state.profession}</p>
                <img src={this.state.imgSrc}></img>
          </div>
          }
    </div>
  )
}
}

export default App;