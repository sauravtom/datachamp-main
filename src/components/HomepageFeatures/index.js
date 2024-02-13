import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.scss";
import {
  AppleIcon,
  LockIcon,
  MergeIcon,
  SearchIcon,
  SettingsIcon,
} from "../../../public/icons";

const FeatureList = [
  {
    title: "AI Strategy",
    Svg: AppleIcon,
    description: (
      <>
        We help you develop a robust AI strategy that aligns with your business
        goals and maximizes ROI.
      </>
    ),
  },
  {
    title: "Data Integration",
    Svg: MergeIcon,
    description: (
      <>
        Our data integration services ensure your AI solutions are seamlessly
        integrated with your existing systems.
      </>
    ),
  },
  {
    title: "Custom AI Models",
    Svg: SettingsIcon,
    description: (
      <>
        We build custom AI models tailored to your unique business needs and
        challenges.
      </>
    ),
  },
  {
    title: "Data Mining",
    Svg: SearchIcon,
    description: (
      <>
        Our data mining techniques uncover hidden patterns and insights in your
        data to drive decision making.
      </>
    ),
  },
  {
    title: "Data Security",
    Svg: LockIcon,
    description: (
      <>
        We prioritize data security, ensuring your sensitive information is
        always protected.
      </>
    ),
  },
  {
    title: "AI Training & Support",
    Svg: MergeIcon,
    description: (
      <>
        We provide comprehensive training and ongoing support to ensure you get
        the most out of your AI solutions.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4", styles.bottomPadding)}>
      <div className="text--center">
        <Svg className={"featureSvg"} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p className={"subtitle"}>{description}</p>
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
