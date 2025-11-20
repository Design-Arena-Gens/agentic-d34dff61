export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.logo}>🇬🇷 GRIECHISCHES GYROS</h1>
          <p style={styles.tagline}>Authentisch • Frisch • Lecker</p>
        </div>
      </header>

      <main style={styles.main}>
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <h2 style={styles.heroTitle}>
              Möchten Sie ein original griechisches Gyros probieren?
            </h2>
            <p style={styles.heroSubtitle}>
              Zögern Sie nicht – kommen Sie direkt rein!
            </p>
            <button style={styles.ctaButton}>
              Jetzt besuchen →
            </button>
          </div>
        </section>

        <section style={styles.features}>
          <div style={styles.featureGrid}>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🥙</div>
              <h3 style={styles.featureTitle}>Original Rezept</h3>
              <p style={styles.featureText}>
                Traditionell nach griechischem Originalrezept zubereitet
              </p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🔥</div>
              <h3 style={styles.featureTitle}>Frisch Gegrillt</h3>
              <p style={styles.featureText}>
                Täglich frisch am Spieß gegrillt mit besten Gewürzen
              </p>
            </div>
            <div style={styles.featureCard}>
              <div style={styles.featureIcon}>🥗</div>
              <h3 style={styles.featureTitle}>Frische Zutaten</h3>
              <p style={styles.featureText}>
                Knackiger Salat, frische Tomaten und hausgemachtes Tzatziki
              </p>
            </div>
          </div>
        </section>

        <section style={styles.menu}>
          <h2 style={styles.sectionTitle}>Unsere Spezialitäten</h2>
          <div style={styles.menuGrid}>
            <div style={styles.menuItem}>
              <h3 style={styles.menuItemName}>Gyros Pita</h3>
              <p style={styles.menuItemDesc}>
                Saftig gegrillt im Fladenbrot mit Salat, Tomaten, Zwiebeln und Tzatziki
              </p>
              <p style={styles.menuItemPrice}>€6.50</p>
            </div>
            <div style={styles.menuItem}>
              <h3 style={styles.menuItemName}>Gyros Teller</h3>
              <p style={styles.menuItemDesc}>
                Mit Pommes, frischem Salat und hausgemachtem Tzatziki
              </p>
              <p style={styles.menuItemPrice}>€9.90</p>
            </div>
            <div style={styles.menuItem}>
              <h3 style={styles.menuItemName}>Gyros Spezial</h3>
              <p style={styles.menuItemDesc}>
                Extra viel Fleisch, doppelt Tzatziki und Feta-Käse
              </p>
              <p style={styles.menuItemPrice}>€11.50</p>
            </div>
            <div style={styles.menuItem}>
              <h3 style={styles.menuItemName}>Souvlaki Spieß</h3>
              <p style={styles.menuItemDesc}>
                Marinierte Fleischspieße mit Reis und Beilagen
              </p>
              <p style={styles.menuItemPrice}>€10.50</p>
            </div>
          </div>
        </section>

        <section style={styles.cta}>
          <h2 style={styles.ctaTitle}>Besuchen Sie uns heute!</h2>
          <p style={styles.ctaText}>
            Erleben Sie den authentischen Geschmack Griechenlands
          </p>
          <div style={styles.ctaInfo}>
            <div style={styles.infoBox}>
              <strong>📍 Adresse</strong>
              <p>Hauptstraße 123<br />12345 Stadt</p>
            </div>
            <div style={styles.infoBox}>
              <strong>🕐 Öffnungszeiten</strong>
              <p>Mo-So: 11:00 - 22:00 Uhr</p>
            </div>
            <div style={styles.infoBox}>
              <strong>📞 Telefon</strong>
              <p>+49 123 456789</p>
            </div>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>© 2024 Griechisches Gyros • Authentisch seit Jahren</p>
      </footer>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  header: {
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '1.5rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  logo: {
    fontSize: '2.5rem',
    margin: '0',
    color: '#333',
    fontWeight: 'bold',
  },
  tagline: {
    margin: '0.5rem 0 0 0',
    fontSize: '1.2rem',
    color: '#666',
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem',
  },
  hero: {
    background: 'white',
    borderRadius: '20px',
    padding: '4rem 2rem',
    textAlign: 'center',
    marginBottom: '3rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  },
  heroContent: {},
  heroTitle: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '1rem',
    lineHeight: '1.3',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    color: '#667eea',
    fontWeight: 'bold',
    marginBottom: '2rem',
  },
  ctaButton: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    border: 'none',
    padding: '1rem 3rem',
    fontSize: '1.2rem',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)',
    transition: 'transform 0.2s',
  },
  features: {
    marginBottom: '3rem',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  featureCard: {
    background: 'white',
    padding: '2rem',
    borderRadius: '15px',
    textAlign: 'center',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
  },
  featureIcon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  featureTitle: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '0.5rem',
  },
  featureText: {
    color: '#666',
    lineHeight: '1.6',
  },
  menu: {
    background: 'white',
    padding: '3rem 2rem',
    borderRadius: '20px',
    marginBottom: '3rem',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    color: '#333',
    marginBottom: '2rem',
  },
  menuGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  menuItem: {
    padding: '1.5rem',
    background: '#f8f9fa',
    borderRadius: '10px',
    border: '2px solid #667eea',
  },
  menuItemName: {
    fontSize: '1.5rem',
    color: '#667eea',
    marginBottom: '0.5rem',
  },
  menuItemDesc: {
    color: '#666',
    marginBottom: '1rem',
    lineHeight: '1.5',
  },
  menuItemPrice: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  cta: {
    background: 'white',
    padding: '3rem 2rem',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
  },
  ctaTitle: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '1rem',
  },
  ctaText: {
    fontSize: '1.3rem',
    color: '#666',
    marginBottom: '2rem',
  },
  ctaInfo: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    marginTop: '2rem',
  },
  infoBox: {
    padding: '1.5rem',
    background: '#f8f9fa',
    borderRadius: '10px',
  },
  footer: {
    background: 'rgba(0,0,0,0.2)',
    color: 'white',
    textAlign: 'center',
    padding: '2rem',
  },
}
