import React, {Component} from 'react';
import { Grid, Icon } from 'semantic-ui-react';

import { Container } from 'semantic-ui-react'

const PRESENTATION_SCHEDULE_NUM_COLUMNS = 4;

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
        date: "Saturday 12:00pm",
        icon: 'hourglass start'
    },
    {
        title: "SciKit Learn workshop",
        date: "Saturday 1:00pm - Saturday 2:30pm",
        icon: 'pencil alternate',
        location: "ETLC-001",
        description: "Get a primer on classification as well as SciKit Learn. Great for those interested in AI. Part 1 in a 2 part series."
    },
    {
        title: "Intro to git",
        date: "Saturday 1:00pm - Saturday 2:30pm",
        icon: 'pencil alternate',
        location: "ETLC-002",
        description: "Highly recommended for anyone who doesn't know git."
    },
    {
        title: "Team Finding workshop",
        date: "Saturday 1:00pm - Saturday 2:30pm",
        icon: 'pencil alternate',
        location: "DICE 8-207",
        description: "For students who don't have teams yet to find a group."
    },
    {
        title: "Natural Language Processing Primer",
        date: "Saturday 2:00pm - Saturday 3:30pm",
        location: "ETLC-001",
        icon: 'pencil alternate',
        description: "Builds off of material covered in the SciKit Learn workshop. Part 2 of the 2 part series."
    },
    {
        title: "Intro to React",
        date: "Saturday 2:00pm - Saturday 3:30pm",
        location: "ETLC-002",
        icon: 'pencil alternate',
        description: "Great primer for anyone who wants to learn about React."
    },
    {
        title: "Intro to Android",
        date: "Saturday 2:00pm - Saturday 3:30pm",
        location: "DICE 8-207",
        icon: 'pencil alternate',
        description: "Great primer for anyone who wants to learn about Android."
    },
    {
        title: "JavaScript Basics",
        date: "Saturday 2:00pm - Saturday 3:30pm",
        location: "ETLC Solarium",
        icon: 'pencil alternate',
        description: "Great primer for anyone who wants to learn about JavaScript."
    },
    {
        title: "Pitching a Hackathon",
        date: "Saturday 3:30pm - Saturday 4:20pm",
        location: "DICE 8-207",
        icon: 'pencil alternate',
        description: "Getting serious about a hack? Learn how to pitch it to judges!"
    },
    {
        title: "Supervisory control and data acquisition (SCADA)",
        date: "Saturday 4:30pm - Saturday 6:00pm",
        location: "ETLC-001",
        icon: 'pencil alternate',
        description: "Learn what Willowglen does!"
    },
    {
        title: "Realtime traffic sign detection using YOLO",
        date: "Saturday 4:30pm - Saturday 6:00pm",
        location: "ETLC-001",
        icon: 'pencil alternate',
    },
    {
        title: "Introduction to Rx Java",
        date: "Saturday 4:30pm - Saturday 6:00pm",
        location: "ETLC-001",
        icon: 'pencil alternate',
    },
    {
        title: "Coding Quality",
        date: "Saturday 4:30pm - Saturday 6:00pm",
        location: "ETLC-001",
        icon: 'pencil alternate',
    },
    {
        title: "Dinner",
        date: "Saturday 5:30pm",
        icon: 'food'
    },
    {
        title: "Hardware Debugging - Tips & Tricks",
        date: "Saturday 8:00pm - Saturday 9:30pm",
        location: "ETLC-001",
        icon: 'pencil alternate'
    },
    {
        title: "Open Data and API Endpoints For your Apps",
        date: "Saturday 8:00pm - Saturday 9:30pm",
        location: "ETLC-002",
        icon: 'pencil alternate'
    },
    {
        title: "Intro to docker",
        date: "Saturday 8:00pm - Saturday 9:30pm",
        location: "DICE 8-207",
        icon: 'pencil alternate'
    },
    {
        title: "Intuit",
        date: "Saturday 8:00pm - Saturday 9:30pm",
        location: "ETLC-Solarium",
        icon: 'pencil alternate'
    },
    {
        title: "MLH Cup Stacking",
        date: "Saturday 9:00pm",
        location: "Solarium",
        icon: 'gamepad'
    },
    {
        fullDate: "January 20, 2019 (Sunday)"
    },
    {
        title: "Ice Cream Sundays Presented by Intuit",
        date: "Sunday 12:00am",
        icon: 'food'
    },
    {
        title: "Breakfast is served",
        date: "Sunday 7:30am",
        icon: 'food'
    },
    {
        title: "Submissions Due on DevPost",
        date: "Sunday 11:00pm",
        icon: 'exclamation triangle',
        description: "Hacking hasn't ended yet!"
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
        date: "Sunday 4:45pm",
        icon: 'clock'
    },
    {
        title: "Venue closes for participants",
        date: "Sunday 5:30pm",
        icon: 'lock'
    },
];

const presentationSchedule = [
    // {
    //     header: true,
    //     team: 'Team',
    //     time: 'Time',
    //     room: 'Location'
    // },
    [
        {
        },
        {
            header: "true",
            room: "ETLC E1 013"
        },
        {
            header: "true",
            room: "ETLC E1 015"
        },
        {
            header: "true",
            room: "ETLC E1 017"
        },
        {
            header: "true",
            room: "ETLC E1 021"
        },
        {
            header: "true",
            room: "ETLC E2 023"
        },
    ],
    [
        {
            header: "true",
            time: "09:00-09:15"
        },
        {
            team: "Team75",
            time: "09:00-09:15",
            room: "ETLC E1 013"
        },
        {
            team: "Team55",
            time: "09:00-09:15",
            room: "ETLC E1 015"
        },
        {
            team: "Team7",
            time: "09:00-09:15",
            room: "ETLC E1 017"
        },
        {
            team: "Team45",
            time: "09:00-09:15",
            room: "ETLC E1 021"
        },
        {
            team: "Team115",
            time: "09:00-09:15",
            room: "ETLC E2 023"
        },
    ],
    [
        {
            header: "true",
            time: "09:15-09:30"
        },
        {
            team: "Team95",
            time: "09:15-09:30",
            room: "ETLC E1 013"
        },
        {
            team: "Team25",
            time: "09:15-09:30",
            room: "ETLC E1 015"
        },
        {
            team: "Team9",
            time: "09:15-09:30",
            room: "ETLC E1 017"
        },
        {
            team: "Team5",
            time: "09:15-09:30",
            room: "ETLC E1 021"
        },
        {
            team: "Team1",
            time: "09:15-09:30",
            room: "ETLC E2 023"
        },
    ],
    [
        {
            header: "true",
            time: "09:30-09:45"
        },
        {
            team: "Team4",
            time: "09:30-09:45",
            room: "ETLC E1 013"
        },
        {
            team: "Team6",
            time: "09:30-09:45",
            room: "ETLC E1 015"
        },
        {
            team: "Team2",
            time: "09:30-09:45",
            room: "ETLC E1 017"
        },
        {
            team: "Team35",
            time: "09:30-09:45",
            room: "ETLC E1 021"
        },
        {
            team: "Team105",
            time: "09:30-09:45",
            room: "ETLC E2 023"
        },
    ],
    [
        {
            header: "true",
            time: "09:45-10:00"
        },
        {
            team: "Team65",
            time: "09:45-10:00",
            room: "ETLC E1 013"
        },
        {
            team: "Team3",
            time: "09:45-10:00",
            room: "ETLC E1 015"
        },
        {
            team: "Team85",
            time: "09:45-10:00",
            room: "ETLC E1 017"
        },
        {
            team: "Team15",
            time: "09:45-10:00",
            room: "ETLC E1 021"
        },
        {
            team: "Team11",
            time: "09:45-10:00",
            room: "ETLC E2 023"
        },
    ],
    [
        {
            header: "true",
            time: "10:00-10:15"
        },
        {
            team: "Team10",
            time: "10:00-10:15",
            room: "ETLC E1 013"
        },
        {
            team: "Team8",
            time: "10:00-10:15",
            room: "ETLC E1 015"
        },
    ],
    
];

class Schedule extends Component {

    dateHeaderStyle = {
        backgroundColor: '#D02120',
        color: 'white'
    };

    presSchedueHeader = {
        color: '#D02120'
    };

    dateStyle = {
        color: '#D02120'
    };

    renderScheduleItem(item){
        if (item.fullDate){
            return <li style={this.dateHeaderStyle} className="list-group-item" key={item.fullDate}><b>{item.fullDate}</b></li>;
        }
        else if (item.description && item.location){
            return (
                <li className="list-group-item" key={item.title}>
                    <Grid columns={2} divided>
                        <Grid.Column mobile={2} tablet={2} computer={1}>
                            <Icon fitted size="big" name={item.icon}/>
                        </Grid.Column>
                        <Grid.Column mobile={14} tablet={14} computer={15}>
                            <b>{item.title}</b>
                            <p>{item.date}</p>
                            <p>{item.description}</p>
                            <p style={this.dateStyle}>{item.location}</p>
                        </Grid.Column>
                    </Grid>
                </li>
                );
        }
        else if (item.description){
            return (
                <li className="list-group-item" key={item.title}>
                    <Grid columns={2} divided>
                        <Grid.Column mobile={2} tablet={2} computer={1}>
                            <Icon fitted size="big" name={item.icon}/>
                        </Grid.Column>
                        <Grid.Column mobile={14} tablet={14} computer={15}>
                            <b>{item.title}</b>
                            <p>{item.date}</p>
                            <p>{item.description}</p>
                        </Grid.Column>
                    </Grid>
                </li>
                );
        }
        else if (item.location){
            return (
                <li className="list-group-item" key={item.title}>
                    <Grid columns={2} divided>
                        <Grid.Column mobile={3} tablet={3} computer={1}>
                            <Icon fitted size="big" name={item.icon}/>
                        </Grid.Column>
                        <Grid.Column mobile={13} tablet={13} computer={15}>
                            <b>{item.title}</b>
                            <p>{item.date}</p>
                            <p style={this.dateStyle}>{item.location}</p>
                        </Grid.Column>
                    </Grid>
                </li>
                );
        }
        else{
            return (
            <li className="list-group-item" key={item.title}>
                <Grid columns={2} divided>
                    <Grid.Column mobile={3} tablet={3} computer={1}>
                        <Icon fitted size="big" name={item.icon}/>
                    </Grid.Column>
                    <Grid.Column mobile={13} tablet={13} computer={15}>
                        <b>{item.title}</b>
                        <p>{item.date}</p>
                    </Grid.Column>
                </Grid>
            </li>
            );
        }
    }

    // renderPresentationScheduleItem(item){
    //     if (item.header){
    //         return (
    //         <li style={this.dateHeaderStyle} className="list-group-item" key={item.team}>
    //             <Grid columns={3} divided>
    //                 <Grid.Column>
    //                     <h3><b>{item.team}</b></h3>
    //                 </Grid.Column>
    //                 <Grid.Column>
    //                     <h3><b>{item.time}</b></h3>
    //                 </Grid.Column>
    //                 <Grid.Column>
    //                     <h3><b>{item.room}</b></h3>
    //                 </Grid.Column>
    //             </Grid>
    //         </li>
    //         );
    //         }
    //     else{
    //         return (
    //         <li className="list-group-item" key={item.team}>
    //         <Grid columns={3} divided>
    //             <Grid.Column>
    //                 <p>{item.team}</p>
    //             </Grid.Column>
    //             <Grid.Column>
    //                 <p>{item.time}</p>
    //             </Grid.Column>
    //             <Grid.Column>
    //                 <p>{item.room}</p>
    //             </Grid.Column>
    //         </Grid>
    //     </li>
    //         );
    //     }
    // }

    renderPresentationScheduleItem(rows){
        return (
                    <li className="list-group-item">
                    <Grid columns={6} divided>
                        {rows.map(item => this.renderPresentationScheduleItemCol(item))}
                    </Grid>
                </li>
        );
    }

    renderPresentationScheduleItemCol(column){
        if (column.header && column.room){
            return (
                <Grid.Column style={this.presSchedueHeader} >
                    <p><b>{column.room}</b></p>
                </Grid.Column> 
            )
        }
        else if (column.header && column.time){
            return (
                <Grid.Column style={this.presSchedueHeader} >
                    <p><b>{column.time}</b></p>
                </Grid.Column> 
            )
        }
        return (
                <Grid.Column>
                    <p>{column.team}</p>
               </Grid.Column>
        );
    }

    render() {
        return (
            <div>
                <Container>
                    {/* <br/>
                    <h1 style={{textAlign: 'center'}}>Presentation Schedule</h1>
                    <br/>
                    <ul className="list-group"> 
                        {presentationSchedule.map(item => this.renderPresentationScheduleItem(item))}
                    </ul> */}
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