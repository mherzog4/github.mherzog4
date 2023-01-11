import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

const FeatureList = [
  {
    title: 'Software Engineer @ Zealogics',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        I joined the team at Zealogics as a software engineer in january 2023.
 <br></br>
<br></br>
      </>
     
    ),
  },
  {
    title: 'Software Engineering Bootcamp Graduate',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        I graduated from Flatiron School's Software Engineering Bootcamp.
 <br></br>
<br></br>

      </>
     
     ),
    },
    {
      title: '2 Years of Sales Development Experience',
      Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
      description: (
        <>
        My sales development experience ranges from leading all outbound sales efforts for a small startup to working @ Salesforce.
  <br></br>
  <br></br>
  
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
        <h3>{title}</h3>
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

