import React ,{useState} from 'react'


const Contact = (props) => {

    const Click = () =>{
		
		props.showalert("Converted to Uppercase","success");
	}

    const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const click = (e)=>{
		e.preventDefault();
		setName('')
		setEmail('')
		setMessage('')
		alert("Submit Successfully !!")
    
    
  }
  return (
    <div className="container mt-5">
     <h2 class="h1-responsive font-weight-bold text-center my-4"style= {{color: props.mode ==='dark'?'white':'#042743'}}>Contact us</h2>
     <p class="text-center w-responsive mx-auto mb-5" style= {{color: props.mode ==='dark'?'white':'#042743'}}>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>
      <form onSubmit={click}>
        <div className="mb-3">
          <label className="form-label" style= {{color: props.mode ==='dark'?'white':'#042743'}} htmlFor="name">
            Name
          </label>
          <input value={name} onChange={(e) =>setName(e.target.value)} placeholder="Enter your name" id="name" name="name" className="form-control" style={{backgroundColor:props.mode==='dark'?'#28282B':'white',color:props.mode==='dark'?'white':'black'}} type="text"  required />
        </div>
        <div className="mb-3">
          <label className="form-label" style= {{color: props.mode ==='dark'?'white':'#042743'}} htmlFor="email">
            Email
          </label>
          <input  placeholder="abc@gmail.com" value={email} onChange={(e) =>setEmail(e.target.value)}type="email" id="email" name="email" className="form-control" style={{backgroundColor:props.mode==='dark'?'#28282B':'white',color:props.mode==='dark'?'white':'black'}}  required />
        </div>
        <div className="mb-3">
          <label className="form-label"  style= {{color: props.mode ==='dark'?'white':'#042743'}} htmlFor="message">
            Message
          </label>
          <textarea id="message" value={message} onChange={(e) =>setMessage(e.target.value)} placeholder="Type your message here" name="message" rows="5" style={{backgroundColor:props.mode==='dark'?'#28282B':'white',color:props.mode==='dark'?'white':'black'}} className="form-control"  required />
        </div>
        <div className='text-center '>
        <button type="submit" className=" btn btn-block my-2 btn-lg btn-rounded btn-outline-primary"  style={{color:props.mode==='dark'?'white':'black'}}>
          Send
        </button>
        </div>
        
      </form>
    </div>
  )
}

export default Contact