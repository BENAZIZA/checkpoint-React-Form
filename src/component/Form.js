import React,{Component} from 'react';
import './style.css'

class Form extends Component{

	
	render(){
		return(
			<form className="formStyle">
          <h1 style={{textAlign : "center",color:"red"}}>Form</h1>
          <div className="form-group">
    <label for="InputEmail">Email address</label>
    <input type="email" className="form-control" id="InputEmail" placeholder="name@example.com" />
  </div>
  <div className="form-group">
    <label for="Inputusername">Username</label>
    <input type="email" className="form-control" id="Inputusername" />
  </div>
  <div className="form-group">
    <label for="InputComment">Comment</label>
    <input type="email" className="form-control" id="InputComment" />
  </div>
    <button type="submit" className="btn btn-primary btn-block">Submit</button>


      </form>
	  


			)
  


	}

}
export default Form;