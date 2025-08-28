// src/pages/AssembliesAdd.tsx
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
import theme from "@/theme"; // ✅ Import theme

const unitOptions = [
  "lump sum (LS)",
  "number (Nos.)",
  "metre (m)",
  "square metre (sqm)",
  "cubic metre (cum)",
  "kilogram (kg)",
  "hour (hr)",
  "Mandays",
];

const AssembliesAdd: React.FC = () => {
  const [unit, setUnit] = React.useState("");
  const navigate = useNavigate();

  return (
    <Paper
      elevation={3}
      sx={{ p: 4, bgcolor: theme.palette.background.default }}
    >

      {/* Title */}
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        color={theme.palette.text.primary}
      >
        Add Assemblies
      </Typography>

      <Box component="form" sx={{ mt: 3 }}>
        {/* Row 1: Name + Unit */}
        <Stack direction="row" spacing={2} mb={3}>
          <TextField label="Name" name="name" fullWidth required />
          <FormControl fullWidth>
            <InputLabel id="unit-label">Unit</InputLabel>
            <Select
              labelId="unit-label"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              {unitOptions.map((u, idx) => (
                <MenuItem key={idx} value={u}>
                  {u}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>

        {/* Description */}
        <TextField
          label="Description"
          name="description"
          fullWidth
          multiline
          rows={2}
          sx={{ mb: 3 }}
        />

        {/* Remarks */}
        <TextField
          label="Remarks"
          name="remarks"
          fullWidth
          multiline
          rows={2}
          sx={{ mb: 3 }}
        />

        {/* Action Buttons */}
        <Stack direction="row" spacing={2} mt={3}>
          <Button
            variant="contained"
            onClick={() => navigate("/assemblies")}
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:hover": { bgcolor: theme.palette.secondary.main },
              minWidth: 120,
            }}
          >
            ADD
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate("/assemblies")}
            sx={{
              bgcolor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
              "&:hover": { bgcolor: theme.palette.primary.main },
              minWidth: 120,
            }}
          >
            CANCEL
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default AssembliesAdd;
