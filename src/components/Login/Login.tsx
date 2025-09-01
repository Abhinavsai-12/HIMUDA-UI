// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Box,
//   Button,
//   Paper,
//   TextField,
//   Typography,
//   InputAdornment,
//   IconButton,
// } from '@mui/material';
// import PersonIcon from '@mui/icons-material/Person';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const sampleEmail = '';
//   const samplePassword = '';

//   const handleLogin = () => {
//     if (email === sampleEmail && password === samplePassword) {
//       localStorage.setItem('isLoggedIn', 'true');
//       navigate('/');
//     } else {
//       setError('Invalid email or password');
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword((prev) => !prev);
//   };

//   return (
//     <Box
//       sx={{
//         background: '#fff',
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Paper elevation={8} sx={{ p: 4, borderRadius: 4, width: 400 }}>
//         <Box display="flex" justifyContent="center" mb={2}>
//           <img
//             src="/logo.png"
//             alt="Himuda Logo"
//             style={{ height: 100, width: 100, objectFit: 'contain' }}
//           />
//         </Box>

//         <TextField
//           fullWidth
//           label="Username or Email"
//           variant="outlined"
//           margin="normal"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <PersonIcon />
//               </InputAdornment>
//             ),
//           }}
//         />

//         <TextField
//           fullWidth
//           label="Password"
//           type={showPassword ? 'text' : 'password'}
//           variant="outlined"
//           margin="normal"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton onClick={togglePasswordVisibility} edge="end">
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />

//         {error && (
//           <Typography color="error" variant="body2" mt={1}>
//             {error}
//           </Typography>
//         )}

//         <Button
//           fullWidth
//           variant="contained"
//           sx={{ mt: 3, backgroundColor: 'primary.main' }}
//           onClick={handleLogin}
//         >
//           Login
//         </Button>
//       </Paper>
//     </Box>
//   );
// };

// export default Login;


// src/pages/Login.tsx
import React, { useState } from 'react';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
  Link,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const sampleUsername = '';
  const samplePassword = '';

  const handleLogin = () => {
    if (username === sampleUsername && password === samplePassword) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: 'auto',
        backgroundColor: 'background.default',
      }}
    >
      {/* Left Pane */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#f5f5f5',
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box sx={{ maxWidth: 500, mx: 'auto' }}>
          <Box display="flex" justifyContent="center" mb={3}>
            <img
              src="/loginlogo.png"
              alt="Himuda Logo"
              style={{ width: 275, height: 250 }}
            />
          </Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            ESTIMATION TOOL
          </Typography>
          <Typography variant="h6" gutterBottom fontWeight="medium">
            Intelligent Project Estimation
          </Typography>
          <ul style={{ paddingLeft: 20 }}>
            <li>
              <Typography>
                Build & Optimize Custom Rate Schedules with Real-Time Analysis
              </Typography>
            </li>
            <li>
              <Typography>
                Streamline Project Workflows & Centralize All Documentation
              </Typography>
            </li>
            <li>
              <Typography>
                Generate Professional Cost Reports & Detailed Quantity Sheets
              </Typography>
            </li>
          </ul>
        </Box>
      </Box>

      {/* Right Pane */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: 'secondary.main',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 4,
            borderRadius: 3,
            width: '100%',
            maxWidth: 400,
            backgroundColor: '#ffffff',
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: 'primary.main', fontWeight: 'bold' }}
          >
            Log in
          </Typography>

          <TextField
            fullWidth
            label="Username"
            variant="outlined"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          />

          {error && (
            <Typography color="error" variant="body2" mt={1}>
              {error}
            </Typography>
          )}

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={1}
          >
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Remember Me"
            />
            <Link href="#" underline="hover" color="primary">
              Forgot Password?
            </Link>
          </Box>

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3 }}
            onClick={handleLogin}
          >
            Log in
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default Login;
