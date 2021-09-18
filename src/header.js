import React from 'react';

const Header = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 me-md-auto font-weight-normal fs-2">Formik Practice</h5>
        <nav className="my-2 my-md-0 me-md-3">
          <a className="p-2 text-dark text-decoration-none" href="/">Form One</a><span disabled>|</span>
          <a className="p-2 text-dark text-decoration-none" href="/formtwo">Form Two</a><span disabled>|</span>
          <a className="p-2 text-dark text-decoration-none" href="/formthree">Form Three</a>
        </nav>
      </div>
    );

}

export default Header;