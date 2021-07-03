import React from 'react'
import bootstrap from 'bootstrap'



function FormError({msg}) {

        return(
            <div class ="alert alert-danger">
                {msg}
            </div>
        )
}

export default FormError;