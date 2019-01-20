import React, {Component} from 'react';
import { Grid, Icon } from 'semantic-ui-react';

import { Container } from 'semantic-ui-react'

const PRESENTATION_SCHEDULE_NUM_COLUMNS = 5;

const presentationSchedule = [
    [
        {
        },
        {
            header: "true",
            room: "Banff (DICE 8A-246)"
        },
        {
            header: "true",
            room: "Jasper (8-236)"
        },
        {
            header: "true",
            room: "Lake Louise (DICE 8A-242)"
        },
    ],
    [
        {
            header: "true",
            time: "09:00-09:05"
        },
        {
            team: "balloonpowers",
            time: "09:00-09:05",
            room: "Banff (DICE 8A-246)"
        },
        {
            team: "BotSpotr",
            time: "09:00-09:05",
            room: "Jasper (8-236)"
        },
        {
            team: "WineSuggest",
            time: "09:00-09:05",
            room: "Lake Louise (DICE 8A-242)"
        },
    ],
    [
        {
            header: "true",
            time: "09:05-09:10"
        },
        {
            team: "Make-me-laugh",
            time: "09:05-09:10",
            room: "Banff (DICE 8A-246)"
        },
        {
            team: "Internet Tracker",
            time: "09:05-09:10",
            room: "Jasper (8-236)"
        },
        {
            team: "Search for the Best Garfield Comic",
            time: "09:05-09:10",
            room: "Lake Louise (DICE 8A-242)"
        },
    ],
    [
        {
            header: "true",
            time: "09:10-09:15"
        },
        {
            team: "DreamMeme",
            time: "09:10-09:15",
            room: "Banff (DICE 8A-246)"
        },
        {
            team: "HACKED2019",
            time: "09:10-09:15",
            room: "Jasper (8-236)"
        },
        {
            team: "shouldnt.js",
            time: "09:10-09:15",
            room: "Lake Louise (DICE 8A-242)"
        },
    ],
    [
        {
            header: "true",
            time: "09:15-09:20"
        },
        {
            team: "Feelsbook",
            time: "09:15-09:20",
            room: "Banff (DICE 8A-246)"
        },
        {
            team: "HackED2019",
            time: "09:15-09:20",
            room: "Jasper (8-236)"
        },
        {
            team: "HackED-2019-Not!!EchoSock",
            time: "09:15-09:20",
            room: "Lake Louise (DICE 8A-242)"
        },
    ],
    [
        {
            header: "true",
            time: "09:20-09:25"
        },
        {
            team: "EulerTikz",
            time: "09:20-09:25",
            room: "Banff (DICE 8A-246)"
        },
        {
            team: "uAlberta5Star",
            time: "09:20-09:25",
            room: "Jasper (8-236)"
        },
        {
            team: "Profolio Hack",
            time: "09:20-09:25",
            room: "Lake Louise (DICE 8A-242)"
        },
    ],
    [
        {
            header: "true",
            time: "09:25-09:30"
        },
        {
            team: "Divergence",
            time: "09:25-09:30",
            room: "Banff (DICE 8A-246)"
        },
        {
            team: "EyeMouse",
            time: "09:25-09:30",
            room: "Jasper (8-236)"
        },
        {
            team: "petah-royale",
            time: "09:25-09:30",
            room: "Lake Louise (DICE 8A-242)"
        },
    ],
    [
        {
            header: "true",
            time: "09:30-09:35"
        },
        {
            team: "Rover the Explorer",
            time: "09:30-09:35",
            room: "Banff (DICE 8A-246)"
        },
        {
            team: "MovieBot",
            time: "09:30-09:35",
            room: "Jasper (8-236)"
        },
        {
            team: "One Stop Photoshop",
            time: "09:30-09:35",
            room: "Lake Louise (DICE 8A-242)"
        },
    ],
    [
        {
            header: "true",
            time: "09:35-09:40"
        },
        {
            team: "Beat The Odds",
            time: "09:35-09:40",
            room: "Banff (DICE 8A-246)"
        },
        {
            team: "Boppo",
            time: "09:35-09:40",
            room: "Jasper (8-236)"
        },
        {
            team: "Geographic News Contextualizer",
            time: "09:35-09:40",
            room: "Lake Louise (DICE 8A-242)"
        },
    ],
    [
        {
            header: "true",
            time: "09:40-09:45"
        },
        {
            team: "course prerequisites",
            time: "09:40-09:45",
            room: "Banff (DICE 8A-246)"
        },
        {
            team: "Shade",
            time: "09:40-09:45",
            room: "Jasper (8-236)"
        },
        {
            team: "Student Gradebook",
            time: "09:40-09:45",
            room: "Lake Louise (DICE 8A-242)"
        },
    ],
    [
        {
            header: "true",
            time: "09:45-09:50"
        },
        {
            team: "git-emotional",
            time: "09:45-09:50",
            room: "Banff (DICE 8A-246)"
        },
        {
            team: "ARMageddon",
            time: "09:45-09:50",
            room: "Jasper (8-236)"
        },
        {
            team: "UofA-advisor",
            time: "09:45-09:50",
            room: "Lake Louise (DICE 8A-242)"
        },
    ],
    [
        {
            header: "true",
            time: "09:50-09:55"
        },
        {
            team: "CloudCity",
            time: "09:50-09:55",
            room: "Banff (DICE 8A-246)"
        },
        {
            team: "Room Searcher",
            time: "09:50-09:55",
            room: "Jasper (8-236)"
        },
        {
            team: "Android-App-1",
            time: "09:50-09:55",
            room: "Lake Louise (DICE 8A-242)"
        },
    ],
    [
        {
            header: "true",
            time: "09:55-10:00"
        },
        {
            team: "Space Jump",
            time: "09:55-10:00",
            room: "Banff (DICE 8A-246)"
        },
        {
            team: "Yah-fi-API",
            time: "09:55-10:00",
            room: "Jasper (8-236)"
        },
        {
            team: "Roommates",
            time: "09:55-10:00",
            room: "Lake Louise (DICE 8A-242)"
        },
    ],
    [
        {
            header: "true",
            time: "10:00-10:05"
        },
        {
            team: "Pipe",
            time: "10:00-10:05",
            room: "Banff (DICE 8A-246)"
        },
        {
            team: "Crowd Density Estimator",
            time: "10:00-10:05",
            room: "Jasper (8-236)"
        },
        {
            team: "Tuber",
            time: "10:00-10:05",
            room: "Lake Louise (DICE 8A-242)"
        },
    ],
    [
        {
            header: "true",
            time: "10:05-10:10"
        },
        {
            team: "Gesture Controlled Desktop Robotic Arm",
            time: "10:05-10:10",
            room: "Banff (DICE 8A-246)"
        },
        {
            team: "RapidRenter",
            time: "10:05-10:10",
            room: "Jasper (8-236)"
        },
        {
            team: "Eraser",
            time: "10:05-10:10",
            room: "Lake Louise (DICE 8A-242)"
        },
    ],
    [
        {
            header: "true",
            time: "10:10-10:15"
        },
        {
            team: "MyHealth",
            time: "10:10-10:15",
            room: "Banff (DICE 8A-246)"
        },
        {
            team: "ChemARstry",
            time: "10:10-10:15",
            room: "Jasper (8-236)"
        },
        {
            team: "enigma-shell",
            time: "10:10-10:15",
            room: "Lake Louise (DICE 8A-242)"
        },
    ],
    [
        {
            header: "true",
            time: "10:15-10:20"
        },
        {
            team: "WhatWear",
            time: "10:15-10:20",
            room: "Banff (DICE 8A-246)"
        },
        {
        },
        {
        },
    ]    
];

class PresentationSchedule extends Component {


    presSchedueHeader = {
        color: '#D02120'
    };

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
                    <Grid columns={4} divided>
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
                <Grid id="presentationSchedule" style={{
                    margin: 0,
                    paddingBottom: 40,
                }}
                stackable
                relaxed='very'
                >   
                </Grid>             
                        <Container>
                            <br/>
                            <h1 style={{textAlign: 'center'}}>PRESENTATION SCHEDULE</h1>
                            <p style={{textAlign: 'center'}}>You will have 2 minutes to present, and 2 minutes to answer questions</p>
                            <br/>
                            <ul className="list-group"> 
                                {presentationSchedule.map(item => this.renderPresentationScheduleItem(item))}
                            </ul>

                        </Container>
            </div>
        );
    }
}

export default PresentationSchedule;