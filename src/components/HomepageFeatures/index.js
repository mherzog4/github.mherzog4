import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Software Engineering Bootcamp Graduate',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        I recently graduated from Flatiron School's Software Engineering Bootcamp.
 <br></br>
<br></br>
      During my bootcamp I worked with React, Ruby on Rails, Firebase, and other technologies.
      </>
     
    ),
  },
  {
    title: '2 Years of Sales Development Experience',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      My sales development experience ranges from leading all outbound sales efforts for a small startup to working for Salesforce.
<br></br>
<br></br>
      So far, I have generated roughly $6.3 million dollars of sales pipeline in my sales career and have won awards for my performance as a sales development representative.

      </>
    ),
  },
  {
    title: 'Continuous Learner',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
      <br></br>
        I am currently interviewing with companies and working on contracted jobs as an independent software engineer.
        <br></br>
        <br></br>
        I am looking for full-time employment so feel free to <a href='https://calendly.com/mattherzog/business-chat'><b><u>book a time</u></b></a> to connect, or you can
        <a href="mailto:matt@mattherzog.me?&body=Hey there! 
        
        Thanks for wanting to shoot me over a message.
        
        For employment opportunities I am looking for a role that is in person/hybrid in or near Tampa, Florida or a fully remote position.
        
        Looking forward to chatting with you." target="_blank"><b><u> send me an email</u></b></a> 
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

