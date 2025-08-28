// src/pages/DocumentAdd.tsx
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
import theme from "@/theme"; // ✅ Import your theme

const DocumentAdd: React.FC = () => {
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
        Upload File
      </Typography>

      <Box component="form" sx={{ mt: 3 }}>
        {/* File Upload */}
        <Stack direction="row" spacing={2} mb={3} alignItems="center">
          <Typography sx={{ minWidth: 120 }} color={theme.palette.text.primary}>
            File Name :
          </Typography>
          <input type="file" name="file" />
        </Stack>

        {/* Comments */}
        <Stack direction="row" spacing={2} mb={3} alignItems="center">
          <Typography sx={{ minWidth: 120 }} color={theme.palette.text.primary}>
            Comments :
          </Typography>
          <TextField
            name="comments"
            fullWidth
            multiline
            rows={2}
            placeholder="Enter comments"
          />
        </Stack>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2} mt={3}>
          <Button
            variant="contained"
            sx={{
              bgcolor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:hover": { bgcolor: theme.palette.secondary.main },
              minWidth: 120,
            }}
            onClick={() => navigate("/documents")}
          >
            UPLOAD
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText,
              "&:hover": { bgcolor: theme.palette.primary.main },
              minWidth: 120,
            }}
            onClick={() => navigate("/documents")}
          >
            CANCEL
          </Button>
        </Stack>
      </Box>
    </Paper>
  );
};

export default DocumentAdd;
