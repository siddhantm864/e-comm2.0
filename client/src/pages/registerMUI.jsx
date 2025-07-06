import {
  Box,
  Container,
  TextField,
  InputAdornment,
  MenuItem,
  Menu,
} from "@mui/material";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const gender = [
  {
    value: "male",
    label: "male",
  },
  {
    value: "female",
    label: "female",
  },
  {
    value: "cannot say",
  },
];

const RegisterMUI = () => {
  const verfiyEmail = {};

  const verfiyOTP = {};

  return (
    <Box
    sx={{
      width: 400,  
      mx: "auto",
      my: 6,
      p: 4,
      borderRadius: 2,
      boxShadow: 3,
      backgroundColor: "background.paper",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
    >
      <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
        <h2 style={{ margin: 0 }}>Register</h2>
      </Box>
      <Box
        component="form"
        sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="username"
          variant="outlined"
          size="small"
        />
        <TextField
          required
          id="outlined-required"
          label="email"
          variant="outlined"
          size="small"
        />
        <button className="verifyEmail" onClick={verfiyEmail}>
          Verify
        </button>
        <TextField
          label="phone"
          variant="outlined"
          fullWidth
          size="large"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <i className="material-icons">Phone</i>
              </InputAdornment>
            ),
          }}
        />
        <button className="verifyPhone" onClick={verfiyOTP}>
          Verify
        </button>
        <TextField
          id="outlined-select-gender"
          select
          label="Gender"
          defaultValue="Gender"
          helperText="Please select your Gender"
          variant="filled"
        >
          {gender.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <i className="material-icons">Confirm</i>
              </InputAdornment>
            ),
          }}
        />
        {/* <FormItem>
          <FormLabel>One-Time Password</FormLabel>
          <FormControl>
            <InputOTP maxLength={6} {...field}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </FormControl>
          <FormDescription>
            Please enter the one-time password sent to your phone.
          </FormDescription>
          <FormMessage />
        </FormItem> */}

        <button variant="contained" color="primary" fullWidth>
          Register
        </button>
      </Box>
    </Box>
  );
};

export default RegisterMUI;
