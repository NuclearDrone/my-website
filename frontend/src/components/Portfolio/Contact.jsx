import React /*, { useState } */ from 'react'
// import contact from '../../services/contact'

const Contact = () => {
  // Revisit this code when nodemailer is fixed.
  //
  // const initState = {
  //   name: '',
  //   email: '',
  //   topic: '',
  //   message: ''
  // }
  // const [state, setState] = useState(initState)
  // const [error, setError] = useState('')
  // const [success, setSuccess] = useState('')
  // const handleChange = (event) => {
  //   setState({
  //     ...state,
  //     [event.target.name]: event.target.value
  //   })
  // }
  // const handleSubmit = async (event) => {
  //   event.preventDefault()
  //   try {
  //     if (Object.values(state).some(x => x === '')) {
  //       throw new Error('All fields are required.')
  //     }
  //     const res = await contact(state)
  //     if (res.accepted !== undefined) {
  //       setState(initState)
  //       setSuccess('Thank you for your message! Expect a reply in a few days.')
  //       setTimeout(() => {
  //         setSuccess('')
  //       }, 5000)
  //     } else {
  //       throw res
  //     }
  //   } catch (e) {
  //     console.log(e)
  //     setError(e.message)
  //     setTimeout(() => {
  //       setError('')
  //     }, 5000)
  //   }
  // }
  return (
    <div className='portfolio-item'>
      <h1 className='title'>CONTACT</h1>
      <div className='contact'>
        {/* <div>
          <span>Name: </span>
          <input type='text' name='name' value={state.name} onChange={handleChange} />
          <span>Email: </span>
          <input type='text' name='email' value={state.email} onChange={handleChange} />
          <span>Topic: </span>
          <input type='text' name='topic' value={state.topic} onChange={handleChange} />
          <span>Message: </span>
          <textarea type='text' name='message' value={state.message} onChange={handleChange} />
          {error && (
            <span className='notification' id='error'>{error}</span>
          )}
          {success && (
            <span className='notification' id='success'>{success}</span>
          )}
          <button onClick={handleSubmit}>Submit</button>
        </div> */}
        <span>By email: contact@mickeenberg.com</span>
      </div>
    </div>
  )
}

export default Contact
