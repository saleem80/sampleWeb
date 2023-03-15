import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerColumn">
          <div className="columnTitle">
            Company
            <hr className='columnTitleHR'/>
          </div>
          <div className="columnText">
            <div className="columnTextItem">
              <a href="#">About</a>
            </div>
            <div className="columnTextItem">
              <a href="#">Services</a>
            </div>
            <div className="columnTextItem">
              <a href="#">Community</a>
            </div>
            <div className="columnTextItem">
              <a href="#">Blog</a>
            </div>
          </div>
        </div>
        <div className="footerColumn">
          <div className="columnTitle">
            Resources
            <hr className='columnTitleHR'/>
          </div>
          <div className="columnText">
            <div className="columnTextItem">
              <a href="#">Help</a>
            </div>
            <div className="columnTextItem">
              <a href="#">Terms</a>
            </div>
            <div className="columnTextItem">
              <a href="#">Privacy</a>
            </div>
          </div>
        </div>
        <div className="footerColumn">
          <div className="columnTitle">
            Support
            <hr className='columnTitleHR'/>
          </div>
          <div className="columnText">
            <div className="columnTextItem">
              <a href="#">Quick Search</a>
            </div>
            <div className="columnTextItem">
              <a href="#">Popular Help Topics</a>
            </div>
            <div className="columnTextItem">
              <a href="#">Product FAQs</a>
            </div>
            <div className="columnTextItem">
              <a href="#">Policies</a>
            </div>
          </div>
        </div>
        <div className="footerColumn">
          <div className="columnTitle">
            Contact
            <hr className='columnTitleHR'/>
          </div>
          <div className="columnText">
            <div className="columnTextItem">
              Phone: +1 (123) 456-7890
            </div>
            <div className="columnTextItem">
              Email: <u><a href='#'>support.company@gmail.com</a></u>
            </div>
            <div className="columnTextItem">
              Address: 321 Main Street, <br/>Austin, TX 12345
            </div>
          </div>
        </div>
        <div className="footerColumn">
          <div className="columnTitle">
            Sign Up For Our Newsletter
            <hr className='columnTitleHR'/>
          </div>
          <div className="columnText">
            <span>
              <input type="text" placeholder='Enter email...' className='newsletterEmailInput'/>
              <input type="submit" value="Sign Up" className='newsletterEmailSubmit'/>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
