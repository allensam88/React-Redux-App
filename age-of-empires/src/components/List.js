import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';
import Card from '../components/Card';

const List = props => {
    
    return (
        <div>
            <h1>Age of Empires | Civilizations List</h1>
            <button onClick={props.getData}>Load Data</button>
            {props.pokemon.map(item => (<Card key={item.id} pokemon={item} />))}
            {props.error && <p classname='error'>{props.error}</p>}
        </div>
    );
}

const mapStateToProps = state => ({
    pokemon: state.pokemon,
    error: state.error
});

export default connect(mapStateToProps, { getData })(List);