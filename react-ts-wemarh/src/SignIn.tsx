import * as React from 'react';
import { login } from './api';

export default function SignIn() {
  const [userName, setUserName] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  return (
    <div>
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form>
            <div className="text-center mb-3">
              <h2>Sign in </h2>
            </div>

            <div className="form-outline mb-4">
              <label className="form-label">Email or username</label>
              <input
                type="email"
                id="loginName"
                className="form-control"
                value={userName}
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              />
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                id="loginPassword"
                className="form-control"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <label className="form-label">Password</label>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-block mb-4"
              onClick={() => {
                login(userName, password);
              }}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
