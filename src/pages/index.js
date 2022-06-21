import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import logo from '@site/static/img/头像.jpg'
import {css} from '@emotion/css'

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx(styles.heroBanner)}>
            <div className="container">
                <img src={logo} style={{width: 280, borderRadius: '50%'}}/>
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <a href="https://github.com/tonycody" target="_blank">
                    <img src="https://skillicons.dev/icons?i=github"/>
                </a>
                &nbsp;
                <a href="https://hub.docker.com/u/kubile" target="_blank">
                    <img src="https://skillicons.dev/icons?i=docker"/>
                </a>
                &nbsp;
                <a href="https://www.yuque.com/bom" target="_blank">
                    <img src="https://skillicons.dev/icons?i=figma" alt="语雀"/>
                </a>
                &nbsp;
                <a href="https://javalearning.cn/" target="_blank">
                    <img src="https://skillicons.dev/icons?i=java" alt="Java"/>
                </a>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            // title={`${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
            <main>
                <HomepageFeatures/>
            </main>
        </Layout>
    );
}
