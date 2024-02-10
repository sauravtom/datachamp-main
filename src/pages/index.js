import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast'

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('', styles.heroTitle)}>
          {siteConfig.title}
        </Heading>
        <p className={clsx('', styles.hero__subtitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {/* <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Prompt Engineering   Handbook 
          </Link> */} 
        </div>
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
      <main>
        <HomepageFeatures />
      </main>
      <Footer />
      <Toaster />
    </Layout>
  );
}
