// import OAnimation from "../components/o";
import Spinner from "../components/Spinner";

const ContactPane = () => {
  return (
    <>
      <div className="ContactPane" id="pane-contact">
        {/* <OAnimation /> */}
        <ul className="no-list contact-list pane-content">
          <li>
            <h2>Find Us</h2>
            <p>
              1 Thomas Cir NW, Suite 700
              <br />
              Washington, DC
            </p>
            <p>
              Phone
              <br />
              <a
                href="tel:+1(202) 430-5584"
                target="_blank"
                rel="noopener noreferrer"
              >
                +1 (202) 430-5584
              </a>
            </p>
          </li>

          <li>
            <h2>New Business</h2>
            <p>
              Jared Schwartz
              <br />
              <a
                href="mailto:jared@weareoutright.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                jared@weareoutright.com
              </a>
            </p>
          </li>

          <li>
            <h2>Careers</h2>
            <p>
              <a
                href="https://careers.jobscore.com/careers/outright1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check out our openings
              </a>
            </p>
          </li>

          <li>
            <h2>Social</h2>
            <p>
              {/* Uncomment if you want to add more social links */}
              {/* <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a><br />
          <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a><br /> */}
              <a
                href="https://www.linkedin.com/company/weareoutright"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <br />
              <a
                href="https://www.instagram.com/weareoutright/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
          </li>

          <li className="mobile-only">
            <a href="/terms" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            <br />
            &copy; Outright 2023
            <br />
            {/* <a
              href="https://www.designrush.com/agency/logo-branding/washington-dc"
              target="_blank"
              rel="noopener noreferrer"
            >
              DesignRush
            </a> */}
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactPane;
