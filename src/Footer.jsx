import logo from './PS0_746661b01c04-mobile.jpg';
const Footer = () => {
  return (
    <footer className="footer" id='contact'>
      <div className="footer-news">
        <h1>Be the First to Receive the Latest News</h1>
      </div>
      <div className="footer-content">
        <div className="footer-section">
          <a href="/home" className="logo-link">
            <img src={logo} alt="PS6 Logo" className="icon" />
            <h2 className='h2'>PS6</h2>
          </a>
        </div>
        <div className="footer-section">
          <h3>Navigation</h3>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Social</h3>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://youtube.com">YouTube</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li><a href="mailto:info@mysite.com">info@mysite.com</a></li>
            <li><a href="tel:+1234567890">Tel: 123-456-7890</a></li>
            <li><a href="/">500 Terry Francois St.</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
