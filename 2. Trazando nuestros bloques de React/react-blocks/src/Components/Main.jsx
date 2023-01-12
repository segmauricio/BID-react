import React, { Component } from 'react';
import Advertisement from './Advertisement';
import SubContents from './SubContents';
import './components.css';
    
class Main extends Component {
    render() {
        return(
            <div className='main'>
                <div className='container-top'>
                    <SubContents/>
                    <SubContents/>
                    <SubContents/>
                </div>
                <div className='footer'>
                    <Advertisement/>
                </div>
            </div>
        );
    }
}

export default Main;
