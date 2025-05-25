export default function NotFound() {
  return (
    <main className="not-found" style={styles.main}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.message}>
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <a href="/" style={styles.link}>Go back to Home</a>
    </main>
  );
}

const styles = {
  main: {
    textAlign: 'center',
    padding: '4rem 1rem',
    color: '#fff',
    backgroundColor: '#1c1c1c',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.25rem',
    marginBottom: '2rem',
  },
  link: {
    padding: '0.75rem 1.5rem',
    background: 'linear-gradient(90deg, #f9572a, #ff9b05)',
    borderRadius: '0.5rem',
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background 0.3s ease-in-out',
  }
};
