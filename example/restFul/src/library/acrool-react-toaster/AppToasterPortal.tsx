
import {ToasterPortal} from '@acrool/react-toaster';
import React from 'react';

const AppToasterPortal = () => {
    return (
        <ToasterPortal
            defaultTimeout={2500}
            position={{vertical: 'bottom', horizontal: 'right'}}
        />
    );
};

export default AppToasterPortal;
