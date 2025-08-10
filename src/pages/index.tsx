import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

// New Components for the Bento Grid Layout

/**
 * Card component for the grid. A versatile component for different content types.
 * @param {{
 *   children: ReactNode,
 *   className?: string,
 *   isPrimary?: boolean
 * }} props
 */
function Card({ children, className = '', isPrimary = false }) {
  const cardClasses = [
    styles.card,
    isPrimary ? styles.primaryCard : '',
    className,
  ].join(' ');

  return <div className={cardClasses}>{children}</div>;
}

/**
 * Main welcome card with the site title, tagline, and primary action button.
 */
function PrimaryCard() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Card isPrimary={true} className={styles.primaryCardContent}>
      <h1 className={styles.mainTitle}>{siteConfig.title}</h1>
      <p className={styles.mainTagline}>
        {siteConfig.tagline || 'A curated hub for modern AI tooling, developer workflows, and documentation automation.'}
      </p>
      <div className={styles.buttons}>
        <Link className={styles.button} to="/docs/intro">
          Get Started →
        </Link>
      </div>
    </Card>
  );
}

/**
 * Card for featuring key concepts like Toolkits, Methodologies, etc.
 * @param {{ title: string, content: string }} props
 */
function FeatureCard({ title, content }) {
  return (
    <Card className={styles.featureCard}>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureContent}>{content}</p>
    </Card>
  );
}

/**
 * A card dedicated to a prominent quote.
 */
function QuoteCard() {
  return (
    <Card className={styles.quoteCard}>
      <blockquote>
        <p>"Documentation is not an afterthought—it's the interface between human reasoning and machine logic."</p>
        <footer>— Athar Kharal, PhD</footer>
      </blockquote>
    </Card>
  );
}

/**
 * A simple, bold card for linking to an external resource like GitHub.
 * @param {{ href: string, label: string }} props
 */
function LinkCard({ href, label }) {
  return (
    <Link to={href} className={styles.linkCard}>
      <Card>
        <div className={styles.linkCardContent}>
          <span>{label}</span>
          <span className={styles.arrow}>↗</span>
        </div>
      </Card>
    </Link>
  );
}

/**
 * The main grid container for the new homepage layout.
 */
function HeroGrid() {
  return (
    <div className={styles.heroGrid}>
      <PrimaryCard />
      <FeatureCard title="⚙️ Toolkits" content="Get hands-on with AI-enabled CLI tools, static site generators, and documentation engines." />
      <FeatureCard title="📚 Methodologies" content="Learn modern DocOps, Git-based authoring, and content automation strategies." />
      <QuoteCard />
      <LinkCard href="https://github.com/atharkharal/ai-tooling-docs-hub" label="GitHub Repo" />
      <FeatureCard title="🧠 Conceptual Clarity" content="Explore the philosophy and architecture of knowledge systems in the AI era." />
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}: Intelligent Docs for the AI Era`}
      description="A clean, precise, and advanced guide to AI-powered documentation and developer tooling."
    >
      <main className={styles.mainContainer}>
        <HeroGrid />
        {/* HomepageFeatures can be kept if you have other content, or removed if the grid is sufficient */}
        <div className={styles.featuresSection}>
            <HomepageFeatures />
        </div>
      </main>
    </Layout>
  );
}