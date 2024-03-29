import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import ContactForm from '../components/Contact/ContactForm'
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx("text--center",styles.heroBanner)}>
      <div className="container margin-top--lg">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={clsx("text--center",styles.hero__subtitle)}>{siteConfig.tagline}</p>
      
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className='bottom-padding'>
        <HomepageFeatures />
        <ContactForm />
      </main>
      {/* <Footer /> */}
      <Toaster />
    </Layout>
  );
}
