import React, { Component } from 'react';
import { Grid, Image, Button } from 'semantic-ui-react'
import HackEDLogo from './logos/HackED.png';
import About from './Components/About'
import WhereToGo from './Components/WhereToGo'
import Faq from './Components/Faq'
import Footer from './Components/Footer'
import Sponsors from './Components/Sponsors'
import Header from './Components/NavigationBar'
import Schedule from './Components/Schedule'
import PresentationSchedule from './Components/PresentationSchedule'
import './App.css';

class App extends Component {

  redirectToExternalUrl(url, e) {
    window.open(url, '_blank');
  };

  render() {
    return (
      <div className="App">
        <Header/>
        <Grid 
          verticalAlign='top'
          centered 
          style={{height: '100vh', background: "linear-gradient(180deg, #FFFFFF 70%, #d02120 90%)"}}>
          <Grid.Row>
            <Grid.Column width={10} textAlign='center' style={{paddingTop: "5vh"}}>
              <Image src={HackEDLogo} fluid />
              <h2>Alberta's Largest Student Run Hackathon</h2>
              <h3>January 19 - 20 @ The Donadeo Innovation Centre for Engineering</h3>
              <Button onClick={(e) => this.redirectToExternalUrl('https://www.eventbrite.ca/e/hacked-2019-tickets-52785383503', e)} color='hackedred' size='huge'>Register Here!</Button>
              <Button onClick={(e) => this.redirectToExternalUrl('https://docs.google.com/forms/d/e/1FAIpQLScLH936Ut2-lLYn7iGQkLk4tGyq8iKvezEddD3D8l_QDSLGdw/viewform', e)} color='hackedred' size='huge'>Volunteer Here!</Button>
              <Button onClick={(e) => this.redirectToExternalUrl('https://docs.google.com/forms/d/e/1FAIpQLSefcoKHHs-TQd9AHdF_b1lKlyzXUdOPS0M7jUEwGds77cZo6A/viewform', e)} color='hackedred' size='huge'>Mentor Here!</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <About/>
        <WhereToGo/>
        <Faq/>
        {/* <PresentationSchedule/> */}
        <Schedule/>
        <Sponsors/>
        <Footer/>
      </div>
    );
  }
}

export default App;
