import React from "react";
import Layout from '@theme/Layout';
import ContactForm from "../components/Contact/ContactForm";
import styles from './index.module.css';
export default function Contact(){
  return (
    <Layout>
     <div className={styles.contactpage}>
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