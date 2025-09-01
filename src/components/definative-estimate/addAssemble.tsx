
import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Stack,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddAssembly: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      {/* Title */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Add Assembly
      </Typography>

      <Box component="form" sx={{ mt: 3 }}>
        {/* Name */}
        <TextField
          label="Assembly Name"
          name="name"
          fullWidth
          required
          sx={{ mb: 3 }}
        />

        {/* Description */}
        <TextField
          label="Description"
          name="description"
          fullWidth
          required
          multiline
          rows={2}
          sx={{ mb: 3 }}
        />

        {/* Price */}
        <TextField
          label="Price"
          name="price"
          type="number"
          fullWidth
          required
          sx={{ mb: 3 }}
        />

        {/* Premium */}
        <TextField
          label="Premium"
          name="premium"
          type="number"
          fullWidth
          required
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
              minWidth: 120,
            }}
            onClick={() => navigate("/projects-definative-estimate/cost-sheet")}
          >
            ADD
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
              "&:hover": { bgcolor: theme.palette.secondary.dark },
              minWidth: 120,
            }}
            onClick={() => navigate("/projects-definative-estimate/cost-sheet")}
          >
            CANCEL
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default AddAssembly;
