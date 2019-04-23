import React, {Component} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Navbar from './Terserah';
import Card from './RecepieReviewCard';

class App extends Component {
    constructor() {
        super();
        this.state = {
            hotels : [
                {title : 'Hotel 1',date: '28 Januari 2019',description: 'Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet'},
                {title : 'Hotel 2',date: '21 Januari 2019',description: 'Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet'},
                {title : 'Hotel 3',date: '22 Januari 2018',description: 'Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet'},
                {title : 'Hotel 4',date: '10 Februari 2019',description: 'Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet Lorem ipsum sit dolor amet'},
            ]
        };
    }

    render() {
        return (
            <div>
                <Navbar/>
                <br/><br/>
                {this.state.hotels.map((data,key) => {
                    return (
                        <Card key={key} title={data.title} date={data.date} description={data.description}/>
                    )
                })}
            </div>
        );
    }
}

export default App;
