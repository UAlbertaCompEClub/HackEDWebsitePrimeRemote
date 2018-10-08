import React, {Component} from 'react';

import { Grid } from 'semantic-ui-react'

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
            container
            stackable
            relaxed='very'>
                <Grid.Row centered>
                    <Grid.Column>
                        <h1 style={{textAlign: "center", color: "#d02120"}}>SPONSORS</h1>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
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