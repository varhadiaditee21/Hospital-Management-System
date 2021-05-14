import React from 'react';

class FormPatient extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        patient:{
        Id:'',
        Name:'',
        Location:'',
        Date:''
        }
    };
  }

  changeHandler = e => {
    this.setState({
      Id:e.target.value
    });
}
onCreatePatient=()=>{
    console.log(this.state.Id);    
  }

  render(){
      return(
     <div>
        <form>
        <p>
            <label>Patient ID : <input type="text" name="Id"  value={this.state.Id}  onChange={this.changeHandler} ></input></label>
        </p>  
        <p>
	<label>Patient Name : <input type="text" name="Name" 
                                 value={this.state.patient.Name} 
                                onChange={this.changeHandler}></input>
	</label>
</p>
<p>
	<label>Preferred Hospital Location : <input type="text" name="Location" 
                            value={this.state.patient.Location} 
                            onChange={this.changeHandler}></input>
	</label>
</p>
<p>
	<label>Date : <input type="text" name="Date"
							value={this.state.patient.Date} 
                            onChange={this.changeHandler}></input>
	</label>
</p>
        <button onClick={this.onCreatePatient}>Book Appointment</button>
        </form>
    </div>
      )
  }
}

  export default FormPatient;