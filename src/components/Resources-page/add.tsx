// src/pages/ResourcesAdd.tsx
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

const typeOptions = [
  "lump sum (LS)",
  "number (Nos.)",
  "metre (m)",
  "square metre (sqm)",
];

const ResourcesAdd: React.FC = () => {
  const [type, setType] = React.useState("");
  const navigate = useNavigate();

  return (
    <Paper elevation={3} sx={{ p: 4 }}>

      {/* Title */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Add Resources
      </Typography>

      <Box component="form" sx={{ mt: 3 }}>
        {/* Row 1: Name + Type */}
        <Stack direction="row" spacing={2} mb={3}>
          <TextField label="Name" name="name" fullWidth required />
          <FormControl fullWidth>
            <InputLabel id="type-label">Type</InputLabel>
            <Select
              labelId="type-label"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              {typeOptions.map((t, idx) => (
                <MenuItem key={idx} value={t}>
                  {t}
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

        {/* Row 2: Unit + Price */}
        <Stack direction="row" spacing={2} mb={3}>
          <TextField label="Unit" name="unit" fullWidth />
          <TextField label="Price" name="price" fullWidth />
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

        {/* Action Buttons */}
        <Stack direction="row" spacing={2} mt={3}>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#082b48",
              color: "#fff",
              "&:hover": { bgcolor: "#0b3c66" },
            }}
            onClick={() => navigate("/resources")}
          >
            ADD
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#007bff",
              color: "#fff",
              "&:hover": { bgcolor: "#0069d9" },
            }}
            onClick={() => navigate("/resources")}
          >
            CANCEL
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default ResourcesAdd;
