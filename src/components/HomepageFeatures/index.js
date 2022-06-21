import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  // {
  //   title: 'Github',
  //   // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
  //   description: (
  //     <>
  //         [![My Skills](https://skillicons.dev/icons?i=js,html,css,wasm)](https://skillicons.dev)
  //     </>
  //   ),
  // },
  // {
  //   title: 'Docker hub',
  //   // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
  //   description: (
  //     <>
  //         <a target="_blank" rel="noopener noreferrer" href="https://github.com/tonycody">GitHub</a>
  //         https://hub.docker.com/u/kubile
  //     </>
  //   ),
  // },
  // {
  //   title: 'Contact Me',
  //   // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       Wechat: a616348105
  //     </>
  //   ),
  // },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
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
