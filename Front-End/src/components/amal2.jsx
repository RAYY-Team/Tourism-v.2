import React from 'react';

const Map =({place})=>(
    <div>
        <iframe
            style={{
                padding : '20px',
                float : 'right'
            }}
            width="500"
            height="700"
            id="gmap_canvas"
            src={`https://maps.google.com/maps?q=${place}%20amman&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
        ></iframe>
    </div>
)
export default Map;