import * as React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">
          <h2>Logo</h2>
        </a>
        <form className="d-flex" role="search">
          <button className="btn btn-primary" type="submit">
            Logout
          </button>
        </form>
      </div>
    </nav>
  );
}
