import React from 'react';


const omneComponent = (ikonka, code) => {
    return (
        <div className={'omneContent'}>
            <img src={`url(${ikonka})`} alt="" width={'64px'} height={'64px'}/>
            {code}
        </div>
    );
};

export default omneComponent;
