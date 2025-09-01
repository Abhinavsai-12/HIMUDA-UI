import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const UnitConverter: React.FC = () => {
  return (
    <Paper elevation={3} sx={{ p: 4, minHeight: "80vh" }}>
      

      {/* Title */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Unit converter
      </Typography>

      {/* Body (empty for now) */}
      <Box sx={{ mt: 4 }}>
        {/* You can place calculator UI here later */}
      </Box>
    </Paper>
  );
};

export default UnitConverter;
