import React from 'react';
import zxcvbn from 'zxcvbn';

const passwordStrength = ({validity : {minChar , number , specialChar}}) => {

    return (
        <>
           <div className="password-meter text-left mb-4">
               <p >
                   Password must contain : 
               </p>
               <ul className="text-muted">
                   <PasswordReq isValid={minChar} text="Minimun 8 characters" />
                   <PasswordReq isValid={number} text="Atleast one number" />
                   <PasswordReq isValid={specialChar} text="Atleast 1 special character" />
               </ul>
           </div>
        </>
    )
}

const PasswordReq = ({isValid , text}) => {
    const pwdReq = isValid ? "text-success" : isValid!== null ? "text-danger" : ""

    return (
        <li className={pwdReq}>{text}</li>
    )
}

export default passwordStrength
