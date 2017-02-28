// var react = require('react');
import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/header/header';
import { Container } from './components/container/container';
import { Cards } from './components/card-body/cards'
import { ScreenD } from './components/screen-D/screend'
class App extends React.Component{
    initialTitle = 1;
    updateTitle(){
        this.title +=3;
        console.log(this.title);
    }


    parentInvoke(){
        alert('invoking parent component');
    }
    render(){
        let buttonList = ['button 1', 'button 1']
        return (
        <div>
            <Header name={'bootstrap'} initialTitle={this.initialTitle} />
            <ScreenD />
            <br/>
        </div>
        )
    }
}

render(<App/>, document.getElementById('app'))

            // <Container />
            // <Cards invokeParent={this.parentInvoke} />