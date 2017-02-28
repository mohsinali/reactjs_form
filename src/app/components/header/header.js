import React from 'react';

export class Header extends React.Component{
    
    header_style = {
        heading: {
            margin: '0 auto'
        },
        backbutton: {
          'font-size': '22px' 
        }
    }

    constructor(props){
        super();
        this.state = {
            title: props.initialTitle
        }
    }

    updateTitle(){
        this.setState({
            title: this.state.title+3
        })
    }
    render(){
        console.log(`user props: `,this.props);
        return (
            <nav className="navbar bg-faded navbar-inverse bg-inverse">
                <div className="navbar-brand row">
                    <span className={this.header_style.backbutton}>Back</span>
                    <p className="text-center" style={this.header_style.heading}>Data Confirmation</p>
                </div>
            </nav>
        )
    }
}

Header.props = {
    title: React.PropTypes.number,
    name: React.PropTypes.string
}
