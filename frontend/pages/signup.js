/*
Page for sign up
*/
import Signup from "../components/Signup";
import Grid from "../components/styles/Grid";
import Centered from "../components/styles/Centered";

import ReactGA from 'react-ga';


ReactGA.pageview('/signup');
const SignupPage = () => (
   <Centered>
    <Grid>
      <Signup />
    </Grid>
   </Centered>
);

export default SignupPage;
