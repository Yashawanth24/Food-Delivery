const AboutUs = () => {
    return (
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: '2rem',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          lineHeight: '3rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>About Us</h1>
        <p style={{
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
          marginBottom: '2rem'
        }}>
          Welcome to OrderFood, your one-stop online food ordering platform! We're a team of food enthusiasts who are passionate about bringing people and food together.
        </p>
        <p style={{
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
          marginBottom: '2rem'
        }}>
          OrderFood is a Bengaluru-based online food ordering platform that connects customers with local restaurants and food establishments. Our mission is to provide a seamless and convenient way for customers to order their favorite food from the comfort of their own homes.
        </p>
        
        <h2 style={{
          fontSize: '1.5rem',
          lineHeight: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>Get in Touch</h2>
        <p style={{
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
          marginBottom: '2rem'
        }}>
          Address: <br />
          OrderFood, <br />
          No. 123, ABC Building, <br />
          Bengaluru, Karnataka 560001
        </p>
        <p style={{
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
          marginBottom: '2rem'
        }}>
          Email: <a href="mailto:Orderfood@gmail.com" style={{
            textDecoration: 'none',
            color: '#3498db'
          }}>Orderfood@gmail.com</a>
        </p>
        <p style={{
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
          marginBottom: '2rem'
        }}>
          Phone: <a href="tel:1234567910" style={{
            textDecoration: 'none',
            color: '#3498db'
          }}>1234567910</a>
        </p>
      </div>
    );
  }
  
  export default AboutUs;