import React, { useState, useEffect } from 'react';

export default function StanholeTrading() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      title: 'ELECTRICAL & INSTRUMENTATION',
      image: '/assets/elect.jpg',
      items: ['PLC Programming & Scada', 'VSD and Soft Starter', 'Transformer Service', 'Switchgear Services']
    },
    {
      title: 'SUBSTATION WORKS',
      image: '/assets/auto2.jpg',
      items: ['Building New Substations up to 11Kv', 'MCC Refurbishment', 'Installation & Repair MV/LV Cables']
    },
    {
      title: 'MECHANICAL SERVICES',
      image: '/assets/mech.jpg',
      items: ['HVAC Systems', 'Air Conditioning', 'Pumps and Motors', 'Crushers and Feeders']
    },
    {
      title: 'ELECTRIFICATION',
      image: '/assets/elect2.jpg',
      items: ['Rural & Urban Areas', 'Schools, Clinics, Hospitals', 'Prepaid Meters Installation']
    },
    {
      title: 'PLANT MAINTENANCE',
      image: '/assets/plant.jpg',
      items: ['Plant Maintenance & Repairs', 'Electrical COC Certification', 'Generator Installation']
    },
    {
      title: 'NETWORK & AUTOMATION',
      image: '/assets/elect3.jpg',
      items: ['Network Communication', 'Sensors & Flow Meters', 'Vibrating Screens']
    }
  ];

  const clients = [
    { name: 'AFRISAM', logo: '/assets/afri.png' },
    { name: 'OLIFANTSFONTEIN DOLOMITE', logo: '/assets/olifant.png' },
    { name: 'MCA PROJECTS', logo: '/assets/mca.png' },
    { name: 'LIMPOPO ONCOLOGY', logo: '/assets/limpopo.png' },
    { name: 'EDZA HEIGHTS', logo: '/assets/edza.png' },
    { name: 'DEPT OF GAUTENG', logo: '/assets/gauteng.png' }
  ];

  const industries = [
    { name: 'Mining', icon: '⛏️' },
    { name: 'Quarries', icon: '🏔️' },
    { name: 'Cement', icon: '🏗️' },
    { name: 'Ready Mix', icon: '🚛' },
    { name: 'Commercial', icon: '🏢' },
    { name: 'Industrial', icon: '🏭' },
    { name: 'Residential', icon: '🏘️' }
  ];

  const styles = {
    body: {
      margin: 0,
      padding: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      backgroundColor: '#fff'
    },
    nav: {
      backgroundColor: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      position: 'fixed',
      width: '100%',
      top: 0,
      zIndex: 1000
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '80px'
    },
    logo: {
      display: 'flex',
      alignItems: 'center'
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '30px'
    },
    navLink: {
      color: '#111',
      textDecoration: 'none',
      fontWeight: '700',
      fontSize: '14px',
      cursor: 'pointer'
    },
    contactBtn: {
      backgroundColor: '#1a5490',
      color: '#fff',
      padding: '10px 24px',
      border: 'none',
      fontWeight: '700',
      fontSize: '14px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block'
    },
    mobileMenuBtn: {
      display: 'none',
      background: 'none',
      border: 'none',
      fontSize: '24px',
      cursor: 'pointer'
    },
    mobileMenu: {
      display: 'none',
      backgroundColor: '#fff',
      borderTop: '1px solid #e5e5e5',
      padding: '20px'
    },
    main: {
      position: 'relative',
      height: '100vh',
      marginTop: '80px',
      backgroundImage: 'url(/assets/main.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center'
    },
    mainOverlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, rgba(26, 84, 144, 0.9), rgba(26, 84, 144, 0.7))'
    },
    mainContent: {
      position: 'relative',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      color: '#fff',
      zIndex: 1
    },
    mainTitle: {
      fontSize: '64px',
      fontWeight: '900',
      lineHeight: '1.1',
      marginBottom: '30px'
    },
    mainSubtitle: {
      fontSize: '24px',
      fontWeight: '700',
      marginBottom: '20px'
    },
    mainText: {
      fontSize: '18px',
      lineHeight: '1.6',
      marginBottom: '40px',
      maxWidth: '700px'
    },
    heroButtons: {
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap'
    },
    heroBtn: {
      padding: '16px 32px',
      fontSize: '18px',
      fontWeight: '700',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      border: 'none'
    },
    heroBtnPrimary: {
      backgroundColor: '#f59e0b',
      color: '#fff'
    },
    heroBtnSecondary: {
      backgroundColor: 'transparent',
      color: '#fff',
      border: '2px solid #fff'
    },
    blueSection: {
      backgroundColor: '#1a5490',
      padding: '80px 20px',
      textAlign: 'center'
    },
    blueSectionTitle: {
      fontSize: '56px',
      fontWeight: '900',
      color: '#fff',
      marginBottom: '24px',
      margin: '0 0 24px 0'
    },
    blueSectionText: {
      fontSize: '24px',
      color: '#fff',
      fontWeight: '700',
      maxWidth: '900px',
      margin: '0 auto'
    },
    aboutSection: {
      padding: '80px 20px',
      backgroundColor: '#f9fafb'
    },
    aboutContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '60px',
      alignItems: 'center'
    },
    aboutImage: {
      width: '100%',
      height: 'auto',
      boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
    },
    aboutTitle: {
      fontSize: '48px',
      fontWeight: '900',
      marginBottom: '24px',
      lineHeight: '1.1',
      color: '#1a5490'
    },
    aboutText: {
      fontSize: '18px',
      lineHeight: '1.8',
      color: '#374151',
      marginBottom: '24px'
    },
    valuesList: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px',
      marginBottom: '24px'
    },
    valueItem: {
      fontSize: '16px',
      color: '#374151',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    aboutBtn: {
      display: 'inline-block',
      backgroundColor: '#1a5490',
      color: '#fff',
      padding: '16px 32px',
      fontWeight: '700',
      textDecoration: 'none',
      cursor: 'pointer',
      border: 'none'
    },
    servicesSection: {
      padding: '80px 20px',
      backgroundColor: '#1f2937'
    },
    sectionTitle: {
      fontSize: '48px',
      fontWeight: '900',
      color: '#fff',
      textAlign: 'center',
      marginBottom: '60px'
    },
    servicesGrid: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '24px'
    },
    serviceCard: {
      position: 'relative',
      overflow: 'hidden',
      cursor: 'pointer',
      height: '400px',
      backgroundColor: '#fff'
    },
    serviceImage: {
      width: '100%',
      height: '60%',
      objectFit: 'cover',
      transition: 'transform 0.5s'
    },
    serviceContent: {
      padding: '20px',
      backgroundColor: '#fff',
      height: '40%'
    },
    serviceTitle: {
      color: '#1a5490',
      fontSize: '20px',
      fontWeight: '900',
      marginBottom: '12px'
    },
    serviceItems: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    serviceItem: {
      fontSize: '14px',
      color: '#666',
      marginBottom: '6px',
      paddingLeft: '12px',
      position: 'relative'
    },
    industriesSection: {
      padding: '80px 20px',
      backgroundColor: '#f9fafb'
    },
    industriesGrid: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '24px'
    },
    industryCard: {
      backgroundColor: '#fff',
      padding: '32px 24px',
      textAlign: 'center',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      cursor: 'pointer'
    },
    industryIcon: {
      fontSize: '48px',
      marginBottom: '12px'
    },
    industryName: {
      fontSize: '16px',
      fontWeight: '700',
      color: '#1a5490'
    },
    clientsSection: {
      padding: '80px 20px',
      backgroundColor: '#fff'
    },
    clientsSectionTitle: {
      fontSize: '32px',
      fontWeight: '900',
      textAlign: 'center',
      marginBottom: '48px',
      color: '#111'
    },
    clientsGrid: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '32px'
    },
    clientCard: {
      backgroundColor: '#f9fafb',
      padding: '32px',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'box-shadow 0.3s, transform 0.3s',
      cursor: 'pointer'
    },
    clientLogo: {
      maxHeight: '64px',
      width: 'auto',
      opacity: 0.8,
      transition: 'opacity 0.3s'
    },
    statsSection: {
      backgroundColor: '#1a5490',
      padding: '60px 20px'
    },
    statsContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '48px',
      fontWeight: '900',
      color: '#f59e0b',
      marginBottom: '8px'
    },
    statLabel: {
      fontSize: '16px',
      color: '#fff',
      fontWeight: '600'
    },
    footer: {
      backgroundColor: '#1f2937',
      padding: '64px 20px',
      color: '#fff'
    },
    footerContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '48px'
    },
    footerTitle: {
      color: '#f59e0b',
      fontWeight: '900',
      fontSize: '18px',
      marginBottom: '16px'
    },
    footerList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    footerLink: {
      color: '#d1d5db',
      textDecoration: 'none',
      fontWeight: '600',
      display: 'block',
      marginBottom: '8px'
    },
    footerText: {
      color: '#d1d5db',
      marginBottom: '8px',
      lineHeight: '1.6',
      fontSize: '14px'
    },
    bottomBar: {
      backgroundColor: '#111',
      padding: '20px',
      textAlign: 'center'
    },
    bottomBarText: {
      color: '#d1d5db',
      fontSize: '14px',
      margin: 0
    },
    mapContainer: {
      width: '100%',
      height: '450px',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      marginTop: '20px'
    },
    floatingContact: {
      position: 'fixed',
      right: '30px',
      bottom: '30px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      zIndex: 999
    },
    floatingBtn: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: '26px',
      textDecoration: 'none',
      boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
      transition: 'all 0.3s ease',
      border: 'none',
      cursor: 'pointer'
    },
    whatsappBtn: {
      backgroundColor: '#25D366'
    },
    emailBtn: {
      backgroundColor: '#374151'
    },
    phoneBtn: {
      backgroundColor: '#374151'
    },
    scrollTopBtn: {
      backgroundColor: '#1a5490'
    }
  };

  return (
    <div style={styles.body}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>
            <img 
              src="/assets/stanicon.jpg" 
              alt="Stanhole Trading & Projects" 
              style={{ height: '60px', width: 'auto' }}
            />
             <div>
              <div style={{ fontSize: '24px', fontWeight: '900', letterSpacing: '-0.5px', color: '#1e3a5f' }}>STANHOLE</div>
              <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.5px', color: '#666' }}>TRADING & PROJECTS</div>
            </div>
          </div>

          <div style={{ ...styles.navLinks, ...(window.innerWidth < 768 ? { display: 'none' } : {}) }}>
            <a href="#about" style={styles.navLink}>ABOUT</a>
            <a href="#services" style={styles.navLink}>SERVICES</a>
            <a href="#industries" style={styles.navLink}>INDUSTRIES</a>
            <a href="#clients" style={styles.navLink}>CLIENTS</a>
            <a href="#contact" style={styles.contactBtn}>CONTACT US</a>
          </div>

          <button
            style={{ ...styles.mobileMenuBtn, ...(window.innerWidth < 768 ? { display: 'block' } : {}) }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <div style={styles.mobileMenu}>
            <a href="#about" style={{ ...styles.navLink, display: 'block', padding: '12px 0' }}>ABOUT</a>
            <a href="#services" style={{ ...styles.navLink, display: 'block', padding: '12px 0' }}>SERVICES</a>
            <a href="#industries" style={{ ...styles.navLink, display: 'block', padding: '12px 0' }}>INDUSTRIES</a>
            <a href="#clients" style={{ ...styles.navLink, display: 'block', padding: '12px 0' }}>CLIENTS</a>
            <a href="#contact" style={{ ...styles.contactBtn, display: 'block', textAlign: 'center', marginTop: '12px' }}>CONTACT US</a>
          </div>
        )}
      </nav>

      {/* Main Section */}
      <section style={styles.main}>
        <div style={styles.mainOverlay} />
        <div style={styles.mainContent}>
          <h1 style={styles.mainTitle}>
            ELECTRICAL & MECHANICAL<br />
            EXCELLENCE<br />
            SINCE 2014
          </h1>
          <p style={styles.mainSubtitle}>
            100% Black Owned | ISO 9000 Certified
          </p>
          <p style={styles.mainText}>
            Stanhole Trading and Projects specializes in electrical installations, instrumentation, mechanical services, and plant maintenance across South Africa. We deliver quality solutions for mining, industrial, commercial, and residential sectors.
          </p>
          <div style={styles.heroButtons}>
            <a href="#services" style={{ ...styles.heroBtn, ...styles.heroBtnPrimary }}>
              OUR SERVICES
            </a>
            <a href="#contact" style={{ ...styles.heroBtn, ...styles.heroBtnSecondary }}>
              GET A QUOTE
            </a>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section style={styles.blueSection}>
        <h2 style={styles.blueSectionTitle}>
          COMMITTED TO EXCELLENCE
        </h2>
        <p style={styles.blueSectionText}>
          Providing best possible customer satisfaction and exceeding expectations through our professional expertise in electrical and mechanical engineering solutions.
        </p>
      </section>

      {/* About Section */}
      <section id="about" style={styles.aboutSection}>
        <div style={styles.aboutContainer}>
          <div>
            <img 
              src="/assets/about2.jpg"
              alt="Stanhole Projects"
              style={styles.aboutImage}
            />
          </div>
          <div>
            <h2 style={styles.aboutTitle}>
              WHO WE ARE
            </h2>
            <p style={styles.aboutText}>
              Stanhole Trading and Projects (Pty) Ltd is a 100% black-owned South African company specializing in electrical cabling, stringing, earthing, and equipment installation for low, medium, and high voltage systems.
            </p>
            <p style={styles.aboutText}>
              Our experienced staff are qualified to work with electricity and we operate a quality system based on ISO 9000 standards. We provide comprehensive electrical and mechanical solutions from inception to completion.
            </p>
            <h3 style={{ fontSize: '20px', fontWeight: '900', color: '#1a5490', marginBottom: '16px' }}>OUR VALUES</h3>
            <div style={styles.valuesList}>
              <div style={styles.valueItem}>✓ Honesty</div>
              <div style={styles.valueItem}>✓ Respect</div>
              <div style={styles.valueItem}>✓ Trust</div>
              <div style={styles.valueItem}>✓ Client Satisfaction</div>
              <div style={styles.valueItem}>✓ Equal Opportunities</div>
              <div style={styles.valueItem}>✓ Women Empowerment</div>
              <div style={styles.valueItem}>✓ Community Involvement</div>
              <div style={styles.valueItem}>✓ Integrity</div>
            </div>
            <a href="#contact" style={styles.aboutBtn}>
              LEARN MORE
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={styles.statsSection}>
        <div style={styles.statsContainer}>
          <div>
            <div style={styles.statNumber}>10+</div>
            <div style={styles.statLabel}>Years Experience</div>
          </div>
          <div>
            <div style={styles.statNumber}>100+</div>
            <div style={styles.statLabel}>Projects Completed</div>
          </div>
          <div>
            <div style={styles.statNumber}>50+</div>
            <div style={styles.statLabel}>Happy Clients</div>
          </div>
          <div>
            <div style={styles.statNumber}>100%</div>
            <div style={styles.statLabel}>Black Owned</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={styles.servicesSection}>
        <h2 style={styles.sectionTitle}>OUR SERVICES</h2>
        <div style={styles.servicesGrid}>
          {services.map((service, idx) => (
            <div key={idx} style={styles.serviceCard}>
              <img 
                src={service.image}
                alt={service.title}
                style={styles.serviceImage}
              />
              <div style={styles.serviceContent}>
                <h3 style={styles.serviceTitle}>
                  {service.title}
                </h3>
                <ul style={styles.serviceItems}>
                  {service.items.map((item, i) => (
                    <li key={i} style={styles.serviceItem}>
                      <span style={{ position: 'absolute', left: 0, color: '#f59e0b' }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" style={styles.industriesSection}>
        <h2 style={{ ...styles.sectionTitle, color: '#111' }}>INDUSTRIES WE SERVE</h2>
        <div style={styles.industriesGrid}>
          {industries.map((industry, idx) => (
            <div key={idx} style={styles.industryCard}>
              <div style={styles.industryIcon}>{industry.icon}</div>
              <div style={styles.industryName}>{industry.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" style={styles.clientsSection}>
        <h2 style={styles.clientsSectionTitle}>
          TRUSTED BY LEADING COMPANIES
        </h2>
        <div style={styles.clientsGrid}>
          {clients.map((client, idx) => (
            <div key={idx} style={styles.clientCard}>
              <img 
                src={client.logo}
                alt={client.name}
                style={styles.clientLogo}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={styles.footer}>
        <div style={styles.footerContainer}>
          <div>
            <div style={{ marginBottom: '24px' }}>
              <img 
                src="/assets/stanhole.jpg" 
                alt="Stanhole Trading & Projects" 
                style={{ height: '60px', width: 'auto' }}
              />
            </div>
            <p style={styles.footerText}>
              <strong>REG NO:</strong> 2014/078224/07
            </p>
            <p style={styles.footerText}>
              <strong>VAT:</strong> 4800292320
            </p>
            <p style={styles.footerText}>
              100% Black Owned | ISO 9000 Certified
            </p>
          </div>

          <div>
            <h3 style={styles.footerTitle}>QUICK LINKS</h3>
            <ul style={styles.footerList}>
              <li><a href="#about" style={styles.footerLink}>About Us</a></li>
              <li><a href="#services" style={styles.footerLink}>Services</a></li>
              <li><a href="#industries" style={styles.footerLink}>Industries</a></li>
              <li><a href="#clients" style={styles.footerLink}>Clients</a></li>
              <li><a href="#contact" style={styles.footerLink}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 style={styles.footerTitle}>OUR SERVICES</h3>
            <ul style={styles.footerList}>
              <li><a href="#services" style={styles.footerLink}>Electrical & Instrumentation</a></li>
              <li><a href="#services" style={styles.footerLink}>Substation Works</a></li>
              <li><a href="#services" style={styles.footerLink}>Mechanical Services</a></li>
              <li><a href="#services" style={styles.footerLink}>Plant Maintenance</a></li>
              <li><a href="#services" style={styles.footerLink}>Electrification</a></li>
              <li><a href="#services" style={styles.footerLink}>Network & Automation</a></li>
            </ul>
          </div>

          <div>
            <h3 style={styles.footerTitle}>HEAD OFFICE</h3>
            <p style={styles.footerText}>
              61 Bergrivier Drive<br />
              Terenure, Kempton Park<br />
              1619, South Africa
            </p>
            <p style={styles.footerText}>
              <strong>Phone:</strong> 083 736 0290
            </p>
            <p style={styles.footerText}>
              <strong>Email:</strong> info@stanhole.co.za
            </p>
            <div style={{ marginTop: '16px' }}>
              <h4 style={{ ...styles.footerTitle, marginBottom: '8px' }}>BRANCHES</h4>
              <p style={{ ...styles.footerText, fontSize: '13px' }}>
                • Lephalale<br />
                • Polokwane<br />
                • Witbank<br />
                • Pretoria
              </p>
            </div>
          </div>
        </div>

        {/* Full Width Map Section */}
        <div style={{ marginTop: '60px' }}>
          <h3 style={{ ...styles.footerTitle, textAlign: 'center', marginBottom: '30px' }}>FIND US</h3>
          <div style={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.8245193476856!2d28.230698!3d-26.061749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e956f8b5e5e5e5f%3A0x5e5e5e5e5e5e5e5e!2s61%20Bergrivier%20Dr%2C%20Terenure%2C%20Kempton%20Park%2C%201619!5e0!3m2!1sen!2sza!4v1635789456789!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <p style={styles.bottomBarText}>
          © 2024 Stanhole Trading and Projects (Pty) Ltd. All rights reserved. | Director: Stanley Mashita
        </p>
      </div>

      {/* Floating Contact Buttons - MediLink Style */}
      <div style={styles.floatingContact}>
        <a
          href="https://wa.me/27837360290"
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...styles.floatingBtn, ...styles.whatsappBtn }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
          }}
          title="WhatsApp"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
        <a
          href="mailto:info@stanhole.co.za"
          style={{ ...styles.floatingBtn, ...styles.emailBtn }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
          }}
          title="Email"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        </a>
        <a
          href="tel:+27837360290"
          style={{ ...styles.floatingBtn, ...styles.phoneBtn }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
          }}
          title="Call"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
        </a>
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            style={{ ...styles.floatingBtn, ...styles.scrollTopBtn }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
            }}
            title="Scroll to top"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}