/*
*   Sign in page, checks for student email
*   Does not allow sign in with no password
*/

import Form from "./styles/Form";
import Error from "./Error";
import Message from "./styles/Message";
import Link from "next/link";

class Signin extends React.Component {
  state = {
    email: "",
    password: "",
    error: null,
    successMessage: "",
    loading: false
  };
  signin = e => {
    e.preventDefault();
    this.setState({ loading: true });
    if (!this.state.email || !this.state.password) {
      this.setState({
        error: { message: "The email and/or password fields cannot be blank" },
        loading: false
      });
      return;
    }
    // fakes api call time to test ui
    this.setState({ loading: true }, () => {
      setTimeout(
        () =>
          this.setState({
            loading: false,
            email: "",
            password: "",
            successMessage: "Signed in!"
          }),
        2000
      );
    });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      error: null,
      successMessage: ""
    });
  };
  render() {
    const { loading, error } = this.state;
    return (
      <Form onSubmit={this.signin} method="POST">
        <h1>Sign in</h1>
        <Error error={this.state.error} />
        <fieldset aria-busy={loading} disabled={loading}>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <a href="">Forgot password?</a>
          </label>
          <button type="submit">
            Sign
            {loading && "ing"} In
          </button>
          <hr color="black"/>
          <div style={{textAlign: "center"}}>
            <label>
              New to GatorGoods?
            </label>
            <Link
              href={{
              pathname: "/signup"
              }}
             >
              <a>SignUp Now</a>
            </Link>
           </div>
        </fieldset>
        {this.state.successMessage && (
          <Message>{this.state.successMessage}</Message>
        )}
      </Form>
    );
  }
}

export default Signin;
