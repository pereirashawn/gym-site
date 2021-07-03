import React,{Component} from 'react';
import {Link} from 'react-router-dom'




class signupForm extends Component {
    constructor(props){
        super(props)

        
        this.state = {
            firstName : "",
            lastName : "",
            DOB : "",
            gender : "",
            number : "",
            email : "",
            checkedTrainer : false,
            passOne : "",
            passTwo : "",
            errorMessage : null
            //errors: {},
        }

        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)

    }


    // Single Event handler instaed on multiple handlers
    handleChange(e){
        const target = e.target
        const name = target.name
        const value = target.value

        this.setState({
            [name] : value
        } , () => {
            if(this.state.passOne !== this.state.passTwo) {
                this.setState({
                    errorMessage : 'Entered passwords do not match'
                })
            } else {
                this.setState({errorMessage : null})
            }
        })
    }

    handleCheckboxChange(){
        this.setState({
            checkedTrainer : !this.state.checkedTrainer
        })
      }


    handleSubmit = async (event) => {
        event.preventDefault()
        //if(this.validate()){
        const newUser = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            DOB : this.state.DOB,
            gender : this.state.gender,
            number : this.state.number,
            email : this.state.email,
            password: this.state.passOne,
            checkedTrainer : this.state.checkedTrainer,
        }
        
        
        const result = await fetch('/api/signup' , {
            method: "POST",
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
          })
          const body = await result.json();
          alert('User created successfully')
          
          console.log(body)

          this.setState({
            firstName : "",
            lastName : "",
            DOB : "",
            gender : "",
            number : "",
            email : "",
            checkedTrainer : false,
            passOne : "",
            passTwo : "",
            errorMessage : null
        })
        
    }

    render() {

        
        return(
            
            <div className='signup-page'>

                <form onSubmit={this.handleSubmit} method="post" >
                    <h1>User Registration</h1>

                    {(this.state.errorMessage === null) ? null : (
                                <h3> Entered passwords do not match</h3>
                            )}

                    <label>Firstname :</label>
                    <input
                     type="text"
                     name ="firstName" 
                     value={this.state.firstName} 
                     onChange={this.handleChange} 
                     placeholder="Enter your first name"/>

                     <br />

                    <label>Lastname :</label> 
                    <input 
                     type="text" 
                     name = "lastName" 
                     value={this.state.lastName} 
                     onChange={this.handleChange} 
                     placeholder= "Enter you last name"/>
                     
                     <br />

                    <label>DOB :</label> 
                    <input 
                     type="date" 
                     name = "DOB" 
                     value={this.state.DOB} 
                     onChange={this.handleChange} 
                     placeholder="Enter DOB"/>
                     
                    <br /> 

                    <label>Gender :</label> 
                    
                    <label>
                        <input
                        name="gender"
                        type="radio"
                        value="male"
                        //checked={this.state.gender === "male"}
                        //onChange={this.handleChange}
                        />
                        Male
                    </label>
                    
                    
                    <label>
                        <input 
                        name="gender"
                        type="radio"
                        value="female"
                        //checked={this.state.gender === "female"}
                        //onChange={this.handleChange}
                        />
                        Female
                    </label>
                    
                    
                    
                    <br/>

                    <label>Phone number :</label> 
                    <input
                     type="number" 
                     name = "number" 
                     value={this.state.number} 
                     onChange={this.handleChange} 
                     placeholder = "Enter your phone number"/>

                    <br/>
                    
                    <label>Email :</label> 
                    <input 
                     type="email" 
                     name = "email" 
                     value={this.state.email} 
                     onChange={this.handleChange} 
                     placeholder="Email ID"/>
                     
                    <br />

                    <label>Password :</label> 
                    <input 
                     type="password" 
                     name = "passOne" 
                     value={this.state.passOne} 
                     onChange={this.handleChange} 
                     placeholder= "Enter password"/>
                     
                     <br />

                     <label>Confirm Password :</label> 
                    <input 
                     type="password" 
                     name = "passTwo" 
                     value={this.state.passTwo} 
                     onChange={this.handleChange} 
                     placeholder= "Confirm Password"/>
                     
                     <br />

                    <label>Require Personal Trainer </label>
                    <input
                        type = "checkbox"
                        value = {this.state.checkedTrainer}
                        //onChange = {this.handleCheckboxChange}
                        //checked = {this.state.checkedTrainer}
                    />
                    
                    <br/>

                    <input type="submit" value="Submit" disabled={this.state.errorMessage === null ? false : true} />   
                </form>                        
            </div>
        )
    }
}


export default signupForm;
