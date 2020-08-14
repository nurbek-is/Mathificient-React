import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';

function PlayButton() {
    return (
       <fragment>
        <br></br>
        <Link className="btn btn-primary" to="/play">Play!</Link>
        </fragment>
    )
}

export default PlayButton;