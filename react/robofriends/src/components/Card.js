import React from 'react';

const Card = ({id, name, email}) => {
    return(
        <div className='bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5'>
            {/* <img alt='robots' scr={`https://robohash.org/${props.id}?200x200`} /> */}
            <p className="f1">{id}</p>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;