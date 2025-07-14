// src/pages/Register.js
import "./Register.css";

function Register() {
  return (
    <div className="form-container">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
