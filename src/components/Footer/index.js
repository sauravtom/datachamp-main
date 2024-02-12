import ContactForm from '../Contact/ContactForm';

export default function Footer() {

  return (
    <>
    <ContactForm />
    <footer className='endFooter'>
      <p className=''>© 2024 Datachamp AI Solutions. All rights reserved.</p>
      <div className=''>
        <a href='docs/intro'>Tutorial</a>
        <a href='/blog'>Blog</a>
      </div>
  </footer>
  </>
  );
}
