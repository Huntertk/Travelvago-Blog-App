import '../../styles/footer.scss';

const Footer = () => {
  return (
        <section className='footerMainSection'>
    <div className="footerMainContainer">
        <div className="footerSubConatiner">
            <div className="logoContainer">
                <img src="/assets/images/tgvlogo.png" alt="Travelvago" />
            </div>
            <p>Travelvago Sdn Bhd is a Malaysian-based travel agency. The company operates as both a Destination Management Company (DMC) and an Online Travel Agency.</p>
            <div className="socailIcons">
                <a href="https://www.instagram.com/jomtravellocal/?hl=en" target='__blank'>
                    <svg className='instagram'  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                      </svg>
                      
                </a>
                <a href="https://www.facebook.com/travelvagoasia/" target='__blank'>
                    <svg className='facebook' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd"/>
                      </svg>
                </a>
                
            </div>
            
        </div>
        <div className="footerSubConatiner">
            <p className='footerTitle'>Quick Links</p>
            <div className="linksContainer">
                <a href="/terms-condition">Terms & Condition</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/help-center">Help Center</a>
                <a href="/company-details">Company Details</a>
            </div>
        </div>
        <div className="footerSubConatiner">
            <p className='footerTitle'>Need Help</p>
            <div className="contactDetailsContainer">
                <p className='contactTitle'>For General Enquiries</p>
                <p>+60356124646</p>
            </div>
            <div className="contactDetailsContainer">
                <p className='contactTitle'>For Ticketing Enquiries</p>
                <p>+6017-3078194</p>
            </div>
            <div className="contactDetailsContainer">
                <p className='contactTitle'>Email us at</p>
                <p className='email'>support@malaysiaexperience.com</p>
            </div>
        </div>
    </div>
    <div className="copyRightMainContainer">
        <p>Copyright © {new Date(Date.now()).getFullYear()} Travelvago</p>
    </div>
</section>
  )
}

export default Footer