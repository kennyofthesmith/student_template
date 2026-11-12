
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import Admonition from '@theme/Admonition';
 
const PAPER_URL = '/paper/zombie';
 
const takeaways = [
  'Zombie are real. All the biological evidence points to their existence.',
  'Our survey indicates that some Isla Vista residents are ill-prepared to face a Zombie apocalypse.',
  'Isla Vista needs to increase the purchase of small munitions and build a perimeter wall to protect our residents.',
];
 
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <main className={styles.page}>
        <Link to={PAPER_URL} className={styles.titleLink}>
          <h1 className={styles.title}>
            Defending our Home: Preparing Isla Vista for the Incoming Zombie Hordes
          </h1>
        </Link>
 
        <div className="byline">
          <span><bold>Kenneth Smith</bold><br/>UC  Santa Barbara</span>
          <span><bold>J. M. Forester</bold><br/>Zombie Biology Institute</span>
          <span><bold>Jim McHiggleteeth</bold><br/>Zombie Biology Institute</span>
        </div><br />
        <Admonition type="note" title="Key Takeaways">
          <ul>
            {takeaways.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Admonition>
 
        <Link to={PAPER_URL} className={styles.readMore}>
          Read the full working paper →
        </Link>
      </main>
    </Layout>
  );
}
