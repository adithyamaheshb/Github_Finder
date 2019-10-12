import React, { Fragment } from 'react'

const Spinner = () => {
    return (
        <Fragment>
            <img src="https://media.giphy.com/media/VseXvvxwowwCc/giphy.gif" alt="Loading"
                style={{ display: 'block', margin: 'auto', width: '200px', height: '200px'}} />
        </Fragment>
    );
}

export default Spinner
