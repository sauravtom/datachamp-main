import ContactForm from '../Contact/ContactForm';

export default function Footer() {

  return (
    <>
    <ContactForm />
    <footer className={"endFooter"}>
      <p>© 2024 Datachamp AI Solutions. All rights reserved.</p>
      <div>
        <a href='docs/intro'>Tutorial</a>
        <a href='/blog'>Blog</a>
      </div>
  </footer>
  </>
  );
}
