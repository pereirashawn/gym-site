import React,
        {useState}
        from 'react'
import {Link} from 'react-router-dom'
import './Signup.css'
import FormError from '../components/FormError'
import PasswordStrength from '../components/PasswordStrength'
import {useHistory} from 'react-router-dom'


const isNumberRegx = /\d/;
const specialCharacterRegx = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;


function Signup() {

    let history = useHistory();

    const [FN,setFN] = useState('')
    const [LN,setLN] = useState('')
    const [email,setEmail] = useState('');
    const [DOB,setDOB] = useState('')
    const [Phone,setPhone] = useState('')
    const [Gender,setGender] = useState('')
    const [password,setPassword] = useState('');
    const [passwordTwo,setPasswordTwo] = useState('')
    const [Trainer,setTrainer] = useState(false)
    const [ErrorMsg,setErrorMsg] = useState(null)
    const [passwordValidity, setPasswordValidity] = useState({
        minChar : null,
        number : null,
        specialChar : null
    })

    const handleCheckboxChange = () => {
        if(Trainer) {
            setTrainer(false)
        } else {
            setTrainer(true)
        }
    }

    const onChangePassword = password => {
        setPassword(password)
        setPasswordValidity({
            minChar : password.length >=8 ? true : false,
            number : isNumberRegx.test(password) ? true : false,
            specialChar : specialCharacterRegx.test(password) ? true : false
        })


    }

    const validateDetails = async (e) => {

       e.preventDefault();

       let valid = validate();

      /* 
      console.log(`--------------------------------`)
       console.log(`returned value = ${valid}`)
       console.log(`FN : ${FN}`)
       console.log(`LN : ${LN}`)
       console.log(`email : ${email}`)
       console.log(`p1 : ${password}`)
       console.log(`p2 : ${passwordTwo}`)
       console.log(`DOB : ${DOB}`)
       console.log(`phone : ${Phone}`)
       console.log(`gender : ${Gender}`)

       console.log(`MSG = ${ErrorMsg}`)

       */

       if(valid) {

        setErrorMsg(null)

        let newUser = {
            firstName : FN,
            lastName : LN,
            email,
            DOB,
            Phone,
            Gender,
            password,
            Trainer,
            email_authenticated : false,
        }
        
        console.log('NO ERROR')

        try{
            const result = await fetch('/api/signup' , {
                method: "POST",
                headers: {
                  'Content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
              })
              let body = await result.json();
              
              
              //body = JSON.stringify(body)

              if(result.ok) {
                alert(`${body.message}`)
                console.log('code 200 !!')
                history.push("/");
              }else{
                alert(`${body.message}`)
              }
              
              
        
        }
        catch(err){
            console.log(`ERROR : ${err}`)
        }
    
            }
        }

    const validate = () => {

    let isValid = true;
    
    if(password !== passwordTwo) {
        
        isValid = false;
        setErrorMsg("Entered passwords do not match")
        
        return isValid;
    }

    if(passwordValidity.minChar !== true || passwordValidity.number !== true || passwordValidity.specialChar !== true )
    {
        isValid = false;
        setErrorMsg('Password does not meet specified requirements')

        return isValid;
    }
    

    if(!FN) {
        isValid = false;
        setErrorMsg('Please enter your first name')

        return isValid;

    
    }

    if (typeof FN !== "undefined") {
        const re = /^[A-Za-z]{3,15}$/;
        //console.log(`test for FN : ${re.test(FN)}`)
        if(FN.length < 3 || !re.test(FN)){
            isValid = false;
            setErrorMsg('Please enter a valid first name');

            return isValid;
        }
    
    }


    if(!LN) {
        isValid = false;
        setErrorMsg('Please enter your last name')

        return isValid; 
    }

    if (typeof LN !== "undefined") {
        const re = /^[a-zA-Z]{3,15}$/;
        //console.log(`test for LN : ${re.test(LN)}`)
        if(LN.length < 3 || !re.test(LN)){
            isValid = false;
            setErrorMsg('Please enter a valid last name');
            
            return isValid;
        }
    
    }

    if (!email) {
        isValid = false;
        setErrorMsg('Please enter your Email Address.');

        return isValid;
    }

    if (typeof email !== "undefined") {
        
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(email)) {
        isValid = false;
        setErrorMsg('Please enter valid email address.');

        }

        return isValid;
    }

    if (!password || !passwordTwo) {
        isValid = false;
        setErrorMsg('Please enter passwords.');

        return isValid;
    }

    

    

    


    return isValid
    }

       
    return (
        <>

            <div className='signup-page'>
                <Link to='/' className='signup-logo'>
                    BeFit <i className="fas fa-dumbbell"></i>
                </Link>

                <div className='signup-container'>
                    <h1>SIGNUP</h1>
                    <form onSubmit={validateDetails} method='post'>

                        {/* DISPLAY ERROR MESSAGE IF ANY */}

                        {(ErrorMsg === null) ? null : (
                                <FormError msg={ErrorMsg}/>
                        )}
                        

                        <h5>First Name</h5>
                        <input 
                            type='text' required
                            value={FN}
                            onChange={e => setFN(e.target.value)}
                            >
                        </input>

                        <h5>Last Name</h5>
                        <input
                            type='text' required
                            value={LN}
                            onChange = {e => setLN(e.target.value)}
                            >
                        </input>

                        <h5>Email Address</h5>
                        <input
                            type='email' required
                            value={email}
                            onChange  = {e => setEmail(e.target.value)}
                            >
                        </input>

                        <h5>Date of Birth</h5>
                        <input
                            type='date' required
                            value={DOB}
                            onChange = {e => setDOB(e.target.value)}
                            >
                        </input>

                        <h5>Phone</h5>
                        <input
                            type='text' required
                            value={Phone}
                            onChange = {e => setPhone(e.target.value)}
                            >
                        </input>

                        <label className='gender'>
                        <input className='gender-input'
                            name='gender'
                            type='radio'
                            value='male'
                            
                            onChange={e => setGender('male')}
                            />
                            Male
                        </label>

                        <label className='gender'>
                        <input className='gender-input'
                            name='gender'
                            type='radio'
                            value='female'
                            
                            onChange={e=> setGender('female')}
                            />
                            Female
                        </label>

                        <h5>Password</h5>
                        <input
                            type='password' required
                            value={password}
                            onChange = {e => onChangePassword(e.target.value)}
                            >
                        </input>

                        <PasswordStrength validity={passwordValidity}/>

                        <h5>Confirm Password</h5>
                        <input
                            type='password' required
                            value={passwordTwo}
                            onChange = {e => setPasswordTwo(e.target.value)}
                            >
                        </input>

                        <label className='check'>
                            Personal Trainer
                            <input className='trainer-input'
                                type='checkbox'
                                value={Trainer}
                                
                                onChange={handleCheckboxChange}
                                >
                            </input>
                            
                        </label>
                        
                        <br/>

                        <button 
                            type='submit'
                            className='signup-button'
                            //disabled={ErrorMsg === null ? false : true}
                        >
                                SIGNUP
                        </button>

                        <p>
                            Already have an account?  <Link to='/login' className='login-link'>Login</Link>
                        </p>
                    
                    </form>
                </div>

            </div>

        </>
    )
}

export default Signup
