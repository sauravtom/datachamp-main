import React from "react";
import ContactForm from "../../components/Contact/ContactForm";
import Layout from "@theme/Layout";
import styles from '../../components/Footer/styles.module.scss';

const index = () => {
  return (
    <Layout>
      <div className="contact-page">
        <ContactForm />
      </div>
      <footer className={styles.endFooter}>
                <p className=''>© 2024 Datachamp AI Solutions. All rights reserved.</p>
                <div className=''>
                    <a href='docs/intro'>Tutorial</a>
                    <a href='/blog'>Blog</a>
                </div>
            </footer>
    </Layout>
  );
};

export default index;
