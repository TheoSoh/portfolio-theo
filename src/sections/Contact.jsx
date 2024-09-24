import { useState } from 'react';
import axios from 'axios';
import InputField from '../components/InputField.jsx'
import TextAreaField from '../components/TextAreaField.jsx'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submit action
    setIsSubmitting(true); // Optional: to show a loading state

    try {
      // Make the POST request to the API Gateway endpoint
      const response = await axios.post('https://upgf4n2hfg.execute-api.eu-north-1.amazonaws.com/prod/send-email', formData)
      
      setResponseMessage('Message sent successfully!')
      console.log('Email sent successfully:', response.data)
    } catch (error) {
      setResponseMessage('Failed to send message.')
      console.error('Error sending email:', error)
    } finally {
      setIsSubmitting(false); // Stop the loading state
    }
  }

  return (
    <section className='flex flex-col w-full gap-9'>
      <h1>Feel free to send me a message below...</h1>
      <form 
      onSubmit={handleSubmit}
      className='flex flex-col w-full lg:w-2/3 min-w-fit bg-gray border rounded-md p-8 gap-6'
      >
        <h2 className='font-mono font-semibold'>Send me a message!</h2>
        <InputField 
        label="Name:"
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChange}
        placeholder={'Theo Sohlman'}
        />
        <InputField 
        label='Email:'
        type='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        placeholder='theo.sohlman@gmail.com'
        />
        <TextAreaField 
        label='Message:'
        name='message'
        value={formData.message}
        onChange={handleChange}
        placeholder='Hello there...'
        />
        <div className='flex flex-wrap gap-6'>
          <button 
          type='submit'
          disabled={isSubmitting}
          className='bg-green w-fit px-6 border rounded-md 
          hover:bg-gradient-to-t from-light-green to-green'
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
          {responseMessage && <p className='font-semibold'>{responseMessage}</p>}
        </div>
      </form>
    </section>
  )
}
/*re_dv9MPXCk_La9hjB5f2Hpb3eEyiaSv1gqQ*/
export default Contact