// src/pages/BiddersAdd.tsx
import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import theme from "@/theme"; // ✅ Import global theme

const BiddersAdd: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      {/* Title */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Add Bidder
      </Typography>

      <Box component="form" sx={{ mt: 3 }}>
        {/* Row 1: Name + Number */}
        <Stack direction="row" spacing={2} mb={3}>
          <TextField label="Name" name="name" fullWidth required />
          <TextField label="Number" name="number" fullWidth required />
        </Stack>

        {/* Row 2: Description + Email */}
        <Stack direction="row" spacing={2} mb={3}>
          <TextField label="Description" name="description" fullWidth />
          <TextField label="Email" name="email" fullWidth />
        </Stack>

        {/* Row 3: Address + Website */}
        <Stack direction="row" spacing={2} mb={3}>
          <TextField label="Address" name="address" fullWidth />
          <TextField label="Website" name="website" fullWidth />
        </Stack>

        {/* Remarks */}
        <TextField
          label="Remarks"
          name="remarks"
          fullWidth
          multiline
          rows={3}
          sx={{ mb: 3 }}
        />

        {/* Action Buttons */}
        <Stack direction="row" spacing={2} mt={3}>
          <Button
            variant="contained"
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:hover": { bgcolor: theme.palette.primary.dark },
            }}
            onClick={() => navigate("/bidders")}
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
            onClick={() => navigate("/bidders")}
          >
            CANCEL
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default BiddersAdd;
