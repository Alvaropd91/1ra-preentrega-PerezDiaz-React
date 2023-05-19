import AddIcCallIcon from '@mui/icons-material/AddIcCall';

import React from 'react';

const CartWidget = ({numero}) => {
    return(
        <div>
            
            <p><AddIcCallIcon/> {numero}</p>
        </div>
    )
}

export default CartWidget;