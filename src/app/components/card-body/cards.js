import React from 'react';
export class Cards extends React.Component{

        api_card_response = [
        {
            title: 'title 1',
            body: '1- type some minimal text for better look',
            button: ['Developer', 'Security']
        },
        {
            title: 'title 2',
            body: '2- type some minimal text for better look',
            button: ['Networks', 'AI']
            
        }
    ]
    render(){
        return (
            <div className="container">
                <div className="row">
                {this.api_card_response.map((e, key)=>
                    <div className="col-12 col-md-4" key={key}>
                        <div className="card">
                            <img className="card-img-top" src="http://lorempixel.com/400/200/sports/" alt="Card image cap"/>
                            <div className="card-block">
                            <h4 className="card-title">{e.title}</h4>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                            <button onClick={()=> this.props.invokeParent()} className="btn btn-outline-primary">Click</button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        )
    }
}