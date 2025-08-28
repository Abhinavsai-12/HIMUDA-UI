// src/pages/UsersAdd.tsx
import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Stack,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Role options
const roleOptions = ["admin", "employee"];

const UsersAdd: React.FC = () => {
  const [role, setRole] = React.useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Paper elevation={3} sx={{ p: 4 }}>

      {/* Title */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Add Users
      </Typography>

      <Box component="form" sx={{ mt: 3 }}>
        {/* Row 1: Name + EMP Code */}
        <Stack direction="row" spacing={2} mb={3}>
          <TextField label="Name" name="name" fullWidth required />
          <TextField label="EMP Code" name="empCode" fullWidth required />
        </Stack>

        {/* Remarks */}
        <TextField
          label="Remarks"
          name="remarks"
          fullWidth
          multiline
          rows={2}
          sx={{ mb: 3 }}
        />

        {/* Role Dropdown */}
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel id="role-label">Role</InputLabel>
          <Select
            labelId="role-label"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            {roleOptions.map((r, idx) => (
              <MenuItem key={idx} value={r}>
                {r}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2} mt={3}>
          <Button
            variant="contained"
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:hover": { bgcolor: theme.palette.primary.dark },
            }}
            onClick={() => navigate("/users")}
          >
            ADD
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
              "&:hover": { bgcolor: theme.palette.secondary.dark },
            }}
            onClick={() => navigate("/users")}
          >
            CANCEL
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default UsersAdd;
