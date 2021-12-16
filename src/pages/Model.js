import React, {Component} from "react";

export default class Model extends Component{
    render(){
        let modelStyle ={
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.8)'
        }
        return(
            <div className="modal show fade" style={modelStyle}>
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-header">
                            
                            <h5 className="modal-title">{this.props.title}</h5>
                            
                        </div>
                        <div className="modal-body">
                            <img src={this.props.img} className="img-fluid" /> 
                            
                            
                        </div>
                        <div className="modal-body">
                            <iframe>{this.props.tutor}</iframe>                           
                            <p>{this.props.desc}</p>
                        </div>
                    <button type="button" class="btn btn-danger" onClick={this.props.hide}>CLOSE TUTORIAL</button>
                    
                    </div>
                </div>
            </div>
        )
    }
}