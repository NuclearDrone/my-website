import React /*, { useState } */ from 'react'
// import contact from '../../services/contact'

const Contact = () => {
  // const [state, setState] = useState({
  //   name: '',
  //   email: '',
  //   topic: '',
  //   message: ''
  // })
  // const [error, setError] = useState('')
  // const handleChange = (event) => {
  //   setState({
  //     ...state,
  //     [event.target.name]: event.target.value
  //   })

  // }
  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   try {
  //     if(Object.values(state).some(x => x === '')) {
  //       throw new Error('All fields are required.')
  //     }
  //     const info = {
  //       values: {
  //         email: state.email,
  //         message: `${state.name} ${state.topic} ${state.message}`
  //       },
  //       isSubmitting: false,
  //       isError: false
  //     }
  //     await contact(info.values)
  //   } catch(e) {
  //     console.log(e)
  //     setError(e.message)
  //     setTimeout(() => {
  //       setError('')
  //     }, 5000);
  //   }
  // }
  return (
    <div className='portfolio-item'>
      <h1 className='title'>CONTACT</h1>
      <div className='contact'>
        <div>
          <span>Contact me at <a href='mailto:contact@mickeenberg.com'>contact@mickeenberg.com</a></span>
        </div>
        {/* <div>
          <span>Name: </span>
          <input type="text" name='name' value={state.name} onChange={handleChange}/>
          <span>Email: </span>
          <input type="text" name='email' value={state.email} onChange={handleChange}/>
          <span>Topic: </span>
          <input type="text" name='topic' value={state.topic} onChange={handleChange}/>
          <span>Message: </span>
          <textarea type="text" name='message' value={state.message} onChange={handleChange}/>
          {error && (
            <span className='error'>{error}</span>
          )}
          <button onClick={handleSubmit}>Submit</button>
        </div> */}
      </div>
    </div>
  )
}

export default Contact
