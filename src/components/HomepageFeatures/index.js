import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Custom AI Solutions',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Tailored generative AI strategies that fit your unique business needs. Our team works
        closely with you to develop and implement custom AI models that enhance your product offerings
        and operational efficiency.
      </>
    ),
  },
  {
    title: 'AI Integration Support',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Seamless integration of AI technologies into your existing systems. From planning to execution, we provide
        comprehensive support to ensure your business leverages the full potential of generative AI, enhancing
        user experience and automating processes.
      </>
    ),
  },
  {
    title: 'Innovative AI Training',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Equip your team with the knowledge and skills to utilize generative AI technologies. Our workshops
        and training sessions are designed to empower your team with the latest AI advancements, fostering
        innovation and creativity.
      </>
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
