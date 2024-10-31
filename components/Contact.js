import { useState } from 'react';
import { contact } from '../data/portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${contact.email}?subject=${formData.name}&body=${formData.message}`;
  };

  return (
    <section
      className='section contact center animate__animated animate__fadeIn animate__delay-5s'
      id='contact'
    >
      <h2 className='section__title'>Contact</h2>
      
      {/* İstediğin metni buraya ekliyoruz */}
      <p className='contact__message'>
        Please contact me directly at <a href="mailto:utkucengiz00@gmail.com">altundassbaran@gmail.com </a> 
        or through this form.
      </p>

      <form className='contact__form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Your Email'
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name='message'
          placeholder='Your Message'
          rows='5'
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type='submit' className='btn btn--outline'>
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
