import React, {Component} from 'react';
import { Grid, Icon } from 'semantic-ui-react';

import { Container } from 'semantic-ui-react'

const scheduleItems = [
    {
        fullDate: "January 19, 2019 (Saturday)"
    },
    {
        title: "Doors open for Hackers",
        date: "Saturday 10:00am - Saturday 11:00am",
        icon: "lock open"
    },
    {
        title: "Opening Ceremonies Begin",
        date: "Saturday 11:00am - Saturday 12:00am",
        icon: 'star'
    },
    {
        title: "Hacking Begins",
        date: "Saturday 12:00pm - Sunday 1:30pm",
        icon: 'hourglass start'
    },
    {
        title: "Team Finding workshop",
        date: "Saturday 1:30pm - Saturday 2:30pm",
        icon: 'pencil alternate'
    },
    {
        title: "Workshop TBD",
        date: "Saturday 2:30pm - Saturday 4:00pm",
        location: "DICE 8-207",
        icon: 'pencil alternate'
    },
    {
        title: "Willowglen Systems Workshop",
        date: "Saturday 4:00pm - Saturday 5:30pm",
        location: "DICE 8-207",
        icon: 'pencil alternate'
    },
    {
        title: "Dinner",
        date: "Saturday 5:30pm",
        icon: 'food'
    },
    {
        title: "Workshop TBD",
        date: "Saturday 5:30pm - Saturday 7:00pm",
        location: "DICE 8-207",
        icon: 'pencil alternate'
    },
    {
        title: "Workshop TBD",
        date: "Saturday 7:00pm - Saturday 8:00pm",
        location: "DICE 8-207",
        icon: 'pencil alternate'
    },
    {
        title: "Hardware Debugging",
        date: "Saturday 8:00pm - Saturday 9:30pm",
        location: "DICE 8-207",
        icon: 'pencil alternate'
    },
    {
        title: "Workshop TBD",
        date: "Saturday 9:30pm - Saturday 10:30pm",
        location: "DICE 8-207",
        icon: 'pencil alternate'
    },
    {
        title: "MLH Cup Stacking",
        date: "Saturday 10:30pm",
        location: "Solarium",
        icon: 'gamepad'
    },
    {
        fullDate: "January 20, 2019 (Sunday)"
    },
    {
        title: "Midnight Snack",
        date: "Sunday 12:00am",
        icon: 'food'
    },
    {
        title: "Breakfast is served",
        date: "Sunday 7:30am",
        icon: 'food'
    },
    {
        title: "Submissions Due",
        date: "Sunday 12:00pm",
        icon: 'exclamation triangle'
    },
    {
        title: "Hacking Ends",
        date: "Sunday 12:00pm",
        icon: 'hourglass end'
    },
    {
        title: "Lunch",
        date: "Sunday 12:00pm",
        icon: 'food'
    },
    {
        title: "Judging",
        date: "Sunday 12:30pm - Sunday 2:30pm",
        icon: 'winner'
    },
    {
        title: "Closing Ceremony",
        date: "Sunday 3:00pm - Sunday 4:30pm",
        icon: 'star'
    },
    {
        title: "Event Ends",
        date: "Sunday 4:30pm",
        icon: 'clock'
    },
    {
        title: "Venue closes for participants",
        date: "Sunday 5:30pm",
        icon: 'lock'
    },
];

class Schedule extends Component {

    dateHeaderStyle = {
        backgroundColor: '#D02120',
        color: 'white'
    };

    renderScheduleItem(item){
        if (item.fullDate){
            return <li style={this.dateHeaderStyle} className="list-group-item" key={item.fullDate}><b>{item.fullDate}</b></li>;
        }
        else if (item.location){
            return (
                <li className="list-group-item" key={item.title}>
                    <Grid columns={2} divided>
                        <Grid.Column width={1}>
                            <Icon size="big" name={item.icon}/>
                        </Grid.Column>
                        <Grid.Column width={15}>
                            <b>{item.title}</b><p>{item.date}</p>
                        </Grid.Column>
                    </Grid>
                </li>
                );
        }
        else{
            return (
            <li className="list-group-item" key={item.title}>
                <Grid columns={2} divided>
                    <Grid.Column width={1}>
                        <Icon size="big" name={item.icon}/>
                    </Grid.Column>
                    <Grid.Column width={15}>
                        <b>{item.title}</b>
                        <p>{item.date}</p>
                    </Grid.Column>
                </Grid>
            </li>
            );
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <br/>
                    <h1 style={{textAlign: 'center'}}>Schedule</h1>
                    <br/>
                    <ul className="list-group"> 
                        {scheduleItems.map(item => this.renderScheduleItem(item))}
                    </ul>
                </Container>
            </div>
        );
    }
}

export default Schedule;