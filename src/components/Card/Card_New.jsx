import React, { Component } from 'react';
import Card from './Card';
import img1 from '../../assets/f1.jpg';
import img2 from '../../assets/f2.jpg';
import img3 from '../../assets/f3.jpg';
import img4 from '../../assets/f4.jpg';
import './styles.css';

class CardNew extends Component{
    render(){
        return(
            <div className="body">
                <button onClick={()=> this.props.history.push('/patient')}>Book Appointment</button>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4"><Card imgsrc={img1} title="Friends Image 1"/></div>
                    <div className="col-md-4"><Card imgsrc={img2} title="Friends Image 2"/></div>
                    <div className="col-md-4"><Card imgsrc={img3} title="Friends Image 3"/></div>
                    <div className="col-md-4"><Card imgsrc={img4} title="Friends Image 4"/></div>
                    <div className="col-md-4"><Card imgsrc={img1} title="Friends Image 1"/></div>
                    <div className="col-md-4"><Card imgsrc={img2} title="Friends Image 2"/></div>
                    <div className="col-md-4"><Card imgsrc={img3} title="Friends Image 3"/></div>
                    <div className="col-md-4"><Card imgsrc={img4} title="Friends Image 4"/></div>
                </div>
            </div>
            </div>
        )
    }
}

export default CardNew;