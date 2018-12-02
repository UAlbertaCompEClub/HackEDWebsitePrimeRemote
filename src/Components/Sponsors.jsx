import React, {Component} from 'react';

import { Grid, Image, Divider } from 'semantic-ui-react'

import IntuitLogo from '../logos/Intuit.png'

import StartupEdmontonLogo from '../logos/StartupEdmonton.png'
import ServusLogo from '../logos/Servus.jpg'
import DevFactoLogo from '../logos/DevFacto.png'

import JobberLogo from '../logos/Jobber.jpg'

class Sponsors extends Component {
    
    render() {
        return (
            <Grid 
                centered
                style={{
                background: "#FFFFFF",
                marginTop: 40,
                marginBottom: 40
            }}
            columns={3}
            container
            stackable
            relaxed='very'>
                <Grid.Row centered>
                    <Grid.Column>
                        <h1 style={{textAlign: "center", color: "#d02120"}}>SPONSORS</h1>
                    </Grid.Column>
                </Grid.Row>
                <Divider horizontal>TITLE</Divider>
                <Grid.Row verticalAlign='middle' centered>
                    <Grid.Column>
                        <Image
                            src={IntuitLogo}
                            fluid
                            as='a'
                            href='https://www.intuit.com/'
                            target='_blank'/>
                    </Grid.Column>
                </Grid.Row>
                <Divider horizontal>GOLD</Divider>
                <Grid.Row verticalAlign='middle' centered>
                    <Grid.Column>
                        <Image
                            src={ServusLogo}
                            fluid
                            as='a'
                            href='https://www.servus.ca/life'
                            target='_blank'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image
                            src={StartupEdmontonLogo}
                            fluid
                            as='a'
                            href='https://www.startupedmonton.com/'
                            target='_blank'/>
                    </Grid.Column>
                    <Grid.Column>
                        <Image
                            src={DevFactoLogo}
                            fluid
                            as='a'
                            href='https://www.devfacto.com/'
                            target='_blank'/>
                    </Grid.Column>
                </Grid.Row>
                <Divider horizontal>SILVER</Divider>
                <Grid.Row verticalAlign='middle' centered>
                    <Grid.Column>
                        <Image
                            src={JobberLogo}
                            fluid
                            as='a'
                            href='https://getjobber.com/'
                            target='_blank'/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered columns={1}>
                    <Grid.Column>
                        <h2>SPONSOR A SPECIAL WEEKEND</h2>
                        <h4>Each year, our sponsors help us unite our community of emerging developers, designers, 
                            makers and learners. Our sponsors empower our hackers to build something they're 
                            proud of.<br/><br/>
                            The HackED sponsorship team can be reached at: <a href='mailto:hacked@compeclub.com'>hacked@compeclub.com</a></h4>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default Sponsors;