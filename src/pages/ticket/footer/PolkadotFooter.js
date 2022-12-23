import { Link } from 'react-router-dom';

export default function Footer ({ className }) {
  return (
    <footer
      className={`${className} footer d-flex flex-column flex-md-row px-4 bg-black !static !bottom-0`}>
      <div className="d-flex flex-column flex-sm-row relative">
        <div>
          © {new Date().getFullYear()} All rights reserved.
          <span className="d-none d-sm-inline">&nbsp;&nbsp;·&nbsp;&nbsp;</span>
        </div>
        <div>
          Forked from <a href="https://github.com/hamidra">Hamidra</a>. adapted for New Futures.
          <span className="d-none d-sm-inline">&nbsp;&nbsp;·&nbsp;&nbsp;</span>
        </div>
        <div>
          <span>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </span>
        </div>
      </div>
      <div className="footer-grow flex-grow-1" />
      <div>
        <strong>Questions?</strong>&nbsp;
        <a href="https://new-futures.co/" rel="noreferrer" target="_blank">Visit our support page.</a>
      </div>
    </footer>
  );
}
