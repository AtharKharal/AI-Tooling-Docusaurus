import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--info', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          {siteConfig.tagline || 'A curated hub for modern AI tooling, developer workflows, and documentation automation.'}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Explore the Docs →
          </Link>
          <Link
            className="button button--outline button--lg margin--left--sm"
            to="https://github.com/atharkharal/ai-tooling-docs-hub"
          >
            GitHub Repo
          </Link>
        </div>
      </div>
    </header>
  );
}

function HeroQuote() {
  return (
    <section className="hero">
      <div className="container padding-vert--md">
        <blockquote className="margin-vert--md">
          <p style={{ fontStyle: 'italic', fontSize: '1.2rem' }}>
            "Documentation is not an afterthought—it's the interface between human reasoning and machine logic."
          </p>
          <footer>— Athar Kharal, PhD</footer>
        </blockquote>
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className="margin-top--lg margin-bottom--xl">
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <h3>⚙️ Toolkits</h3>
            <p>Get hands-on with AI-enabled CLI tools, static site generators, and documentation engines.</p>
          </div>
          <div className="col col--4">
            <h3>📚 Methodologies</h3>
            <p>Learn modern DocOps, Git-based authoring, and content automation strategies.</p>
          </div>
          <div className="col col--4">
            <h3>🧠 Conceptual Clarity</h3>
            <p>Explore the philosophy and architecture of knowledge systems in the AI era.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} – Intelligent Docs for the AI Era`}
      description="A clean, precise, and advanced guide to AI-powered documentation and developer tooling."
    >
      <HomepageHeader />
      <HeroQuote />
      <Highlights />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
