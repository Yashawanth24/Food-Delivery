const Contact = () => {
    return (
      <div style={{
        maxWidth: '28rem',
        margin: '0 auto',
        marginTop: '2rem',
        padding: '1.5rem',
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{
          fontSize: '1.875rem',
          lineHeight: '2.25rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>Contact Us</h1>
        <form style={{
          marginTop: '1rem'
        }}>
          <div>
            <input 
              type="text" 
              style={{
                width: '100%',
                border: '1px solid #d1d5db',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                outline: 'none',
                marginBottom: '2rem'
              }} 
              placeholder="Name"
              onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #3498db'}
              onBlur={(e) => e.target.style.boxShadow = ''}
            />
          </div>
          <div>
            <input 
              type="text" 
              style={{
                width: '100%',
                border: '1px solid #d1d5db',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                outline: 'none',
                marginBottom: '2rem' 
              }} 
              placeholder="Message"
              onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px #3498db'}
              onBlur={(e) => e.target.style.boxShadow = ''}
            />
          </div>
          <div style={{
            textAlign: 'center'
          }}>
            <button 
              type="submit" 
              style={{
                width: '100%',
                backgroundColor: '#3498db',
                color: 'white',
                fontWeight: 'bold',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                cursor: 'pointer'
              }} 
              onMouseOver={(e) => e.target.style.backgroundColor = '#2980b9'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#3498db'}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
  
  export default Contact;