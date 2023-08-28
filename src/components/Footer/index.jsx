import "./footer.css";

const Footer = () => {
    return (

    
            <footer>
                    <div className="footer-subscribe">
                        <h3>Subscribe to get important updates</h3>
                        <form action="#">
                            <input type="email" placeholder="your email" />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                    <div className="footer-social">
                        <h3>follow us</h3>
                        <div className="footer-social--icons">
                            
                        </div>

                        <div className="footer-bottom--section">
                            <p>
                                @{new Date().getFullYear()} Sulaiman Shah. All Right Reserved
                            </p>
                        </div>
                    
                    </div>
                
            </footer>
       
    )
}

export default Footer;