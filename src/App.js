import './App.css';
import React from "react";

export class App extends React.Component {
  render() {
    return (
        <Grid/>
    )
  }
}

class Header extends React.Component {
  render() {
    return (<div className='grid-item grid-item-1'>Header block</div>)
  }
}

class MainContainer extends React.Component {
  render() {
    return (<div className='grid-item grid-item-2'>
      <article className='text'>
        Text block
      </article>
    </div>)
  }
}

class SideNav extends React.Component {
  render() {
    return (
        <div className='grid-item grid-item-3'>
          <div className='sidenav'>
            <a href='#'>Link 1</a>
            <a href='#'>Link 2</a>
            <a href='#'>Link 3</a>
            <a href='#'>Link 4</a>
            <a href='#'>Link 5</a>
            <a href='#'>Link 6</a>
          </div>
        </div>
    )
  }
}

class Grid extends React.Component {
  render() {
    return (
        <div className='grid-container'>
          <Header/>
          <MainContainer/>
          <SideNav/>
        </div>
    )
  }
}