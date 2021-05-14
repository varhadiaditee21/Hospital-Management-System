import React from 'react';
// import img1 from '../../assets/f1.jpg';
import './styles.css';

const Card = props => {
    return (

        <div className='card text-center'>
            <div className="overflow">
                <img src={props.imgsrc} alt="Image1" className="card-img-top"/>

            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary"> Hello, this is a card component sample text!!!!</p>
                <a href="#" className="btn btn-outline-success">Go anywhere you like</a>
            </div>
        </div>

    );
}

export default Card;