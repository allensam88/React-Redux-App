import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';
import Card from '../components/Card';

const List = props => {
    useEffect(() => {
        props.getData();
    }, []);


    return (
        <div>
            <h1 className='title'>Trivia Questions!</h1>
            <div className='list'>
                {props.data.map((item, index) => (<Card key={index} data={item} />))}
            </div>
            {props.error && <p classname='error'>{props.error}</p>}
        </div>
    );
}

const mapStateToProps = state => ({
    data: state.data,
    error: state.error
});

export default connect(mapStateToProps, { getData })(List);