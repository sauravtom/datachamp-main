import React from "react";
import Layout from '@theme/Layout';
import ContactForm from "../components/Contact/ContactForm";
import styles from './index.module.css';
import Footer from "../components/Footer";
export default function Contact(){
  return (
    <Layout>
     <div className={styles.contactpage}>
        <ContactForm />
      </div>
      <Footer />
    </Layout>
  );
};