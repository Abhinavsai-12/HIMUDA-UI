// src/pages/CostBooksAdd.tsx
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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import theme from "@/theme"; // ✅ Import theme directly

const editPriceOptions = ["Assemblies", "Resources"];

const CostBooksAdd: React.FC = () => {
  const [editPrice, setEditPrice] = React.useState("");
  const navigate = useNavigate();

  return (
    <Paper elevation={3} sx={{ p: 4, bgcolor: theme.palette.background.default }}>
      {/* Title */}
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        color={theme.palette.text.primary}
      >
        Add Costbook
      </Typography>

      <Box component="form" sx={{ mt: 3 }}>
        {/* Row 1: Name */}
        <TextField
          label="Name"
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
          multiline
          rows={2}
          sx={{ mb: 3 }}
        />

        {/* Edit Price Dropdown */}
        <FormControl fullWidth sx={{ mb: 3 }}>
          <InputLabel id="editPrice-label">Edit Price</InputLabel>
          <Select
            labelId="editPrice-label"
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
          >
            {editPriceOptions.map((opt, idx) => (
              <MenuItem key={idx} value={opt}>
                {opt}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2} mt={3}>
          <Button
            variant="contained"
            onClick={() => navigate("/cost-books")}
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:hover": { bgcolor: theme.palette.secondary.main },
            }}
          >
            ADD
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate("/cost-books")}
            sx={{
              bgcolor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
              "&:hover": { bgcolor: theme.palette.primary.main },
            }}
          >
            CANCEL
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default CostBooksAdd;
