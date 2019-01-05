import React, {Component} from 'react';

import { Container } from 'semantic-ui-react'

const scheduleItems = [
    {
        fullDate: "January 19, 2019 (Saturday)"
    },
    {
        title: "Doors open for Hackers",
        date: "Saturday 10:00am - Saturday 11:00am",
    },
    {
        title: "Opening Ceremonies Begin",
        date: "Saturday 11:00am - Saturday 12:00am",
    },
    {
        title: "Hacking Begins",
        date: "Saturday 12:00pm - Sunday 1:30pm",
    },
    {
        title: "Team Finding workshop",
        date: "Saturday 1:30pm - Saturday 2:30pm",
    },
    {
        title: "Workshop TBD",
        date: "Saturday 2:30pm - Saturday 4:00pm",
        location: "DICE 8-207"
    },
    {
        title: "Willowglen Systems Workshop",
        date: "Saturday 4:00pm - Saturday 5:30pm",
        location: "DICE 8-207"
    },
    {
        title: "Dinner",
        date: "Saturday 5:30pm",
    },
    {
        title: "Workshop TBD",
        date: "Saturday 5:30pm - Saturday 7:00pm",
        location: "DICE 8-207"
    },
    {
        title: "Workshop TBD",
        date: "Saturday 7:00pm - Saturday 8:00pm",
        location: "DICE 8-207"
    },
    {
        title: "Hardware Debugging",
        date: "Saturday 8:00pm - Saturday 9:30pm",
        location: "DICE 8-207"
    },
    {
        title: "Workshop TBD",
        date: "Saturday 9:30pm - Saturday 10:30pm",
        location: "DICE 8-207"
    },
    {
        title: "MLH Cup Stacking",
        date: "Saturday 10:30pm",
        location: "Solarium"
    },
    {
        fullDate: "January 20, 2019 (Sunday)"
    },
    {
        title: "Midnight Snack",
        date: "Sunday 12:00am",
    },
    {
        title: "Breakfast is served",
        date: "Sunday 7:30am",
    },
    {
        title: "Submissions Due",
        date: "Sunday 12:00pm",
    },
    {
        title: "Hacking Ends",
        date: "Sunday 12:00pm",
    },
    {
        title: "Lunch",
        date: "Sunday 12:00pm",
    },
    {
        title: "Judging",
        date: "Sunday 12:30pm - Sunday 2:30pm",
    },
    {
        title: "Closing Ceremony",
        date: "Sunday 3:00pm - Sunday 4:30pm",
    },
    {
        title: "Event Ends",
        date: "Sunday 4:30pm",
    },
    {
        title: "Venue closes for participants",
        date: "Sunday 5:30pm",
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
            return <li className="list-group-item" key={item.title}><b>{item.title}</b><p>{item.date}</p><p>Location: {item.location}</p></li>;
        }
        else{
            return <li className="list-group-item" key={item.title}><b>{item.title}</b><p>{item.date}</p></li>;
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <br/>
                    <h1 style={{textAlign: 'center'}}>Schedule</h1>
                    <h3>Hackathons are for designing, creating, and building awesome projects. HackED is the premiere annual 24-hour hackathon from the Computer Engineering Club of the University of Alberta.</h3>
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