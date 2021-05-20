import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';

function CheckBox({handleCheckboxChange, name, id}) {
    return (
        <div>
            <Checkbox
                
                onChange={(e) => handleCheckboxChange(name,id)}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <span>{name}</span>
        </div>
    )
}

export default CheckBox
