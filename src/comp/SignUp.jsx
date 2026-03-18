import TextField from '@mui/material/TextField';


function SignUp() {
  return (
    <>
    <div className='signup'>
      <h3>SIGN UP</h3>
      <div>
        <p className='ca'>Create Account</p>
        <div>
          <TextField
            id="standard-basic"
            label="Full Name"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
          />
        </div>
        <button>Create Account</button>
        <p>Already have an account? <span>Log In</span></p>
      </div>
    </div>
    </>
  )
}

export default SignUp