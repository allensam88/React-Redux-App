import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';
import Card from '../components/Card';

const List = props => {
    
    return (
        <div>
            <h1>Trivia Questions!</h1>
            <button onClick={props.getData}>Load Questions</button>
            {props.data.map((item, index) => (<Card key={index} data={item} />))}
            {props.error && <p classname='error'>{props.error}</p>}
        </div>
    );
}

const mapStateToProps = state => ({
    data: state.data,
    error: state.error
});

export default connect(mapStateToProps, { getData })(List);