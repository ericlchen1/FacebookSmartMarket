import React, { Component } from 'react';
import ExtendableList from './ExtendableList.js';

function Popup() {

    return (
        <div style={styles.main}>
            <b>Regex Patterns</b>
            <ExtendableList></ExtendableList>
        </div>
    )
}

const styles = {
    main: {
        width: '250px',
        height: '200px'
    }
}

export default Popup;