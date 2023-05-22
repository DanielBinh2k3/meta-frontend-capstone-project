import logo from './logo.svg';
import './App.scss';
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom' 
import ButtonToTop from './components/ButtonToTop';
import Footer from './components/common/footer/Footer';
import Header from './components/common/header/Header';
import HomeScreen from './components/HomeScreen';
import NotFoundScreen from './NotFoundScreen';


class App extends React.Component{
  render(){
    return (
    <Router>
      <Header/>
        <Routes>
          <Route exact path='/' element={<HomeScreen/>} />
          <Route path='*' element={<NotFoundScreen/>}/>
        </Routes>
      <ButtonToTop/>
      <Footer/>
    </Router>
    )
  }
}
export default App;
