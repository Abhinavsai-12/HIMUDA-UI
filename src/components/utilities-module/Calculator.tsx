import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  IconButton,
  useTheme,
} from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";

const Calculator: React.FC = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState("");
  const theme = useTheme();

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBack = () => {
    setInput(input.slice(0, -1));
  };

  const handleEqual = () => {
    try {
      const result = eval(input); // ⚠️ only for demo
      setHistory((prev) => prev + input + " = " + result + "\n");
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const handleHistory = () => {
    setInput(history);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        width: 400, // Increased width
        margin: "20px auto",
        textAlign: "center",
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Calculator
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gap={1.5}
        sx={{ mb: 2 }}
      >
        {/* Input box (span 3 cols) + Back button */}
        <TextField
          value={input}
          variant="outlined"
          fullWidth
          sx={{
            gridColumn: "1 / span 3",
            bgcolor: theme.palette.background.default,
          }}
        />
        <IconButton
          onClick={handleBack}
          sx={{
            bgcolor: theme.palette.error.main,
            color: "#fff",
            "&:hover": { bgcolor: theme.palette.error.dark },
          }}
        >
          <BackspaceIcon />
        </IconButton>

        {/* Number buttons */}
        <Button
          onClick={() => handleClick("7")}
          sx={{
            bgcolor: theme.palette.primary.main,
            color: "#fff",
            fontSize: 20,
            height: 60,
            "&:hover": { bgcolor: theme.palette.primary.dark },
          }}
        >
          7
        </Button>
        <Button
          onClick={() => handleClick("8")}
          sx={{
            bgcolor: theme.palette.primary.main,
            color: "#fff",
            fontSize: 20,
            height: 60,
          }}
        >
          8
        </Button>
        <Button
          onClick={() => handleClick("9")}
          sx={{
            bgcolor: theme.palette.primary.main,
            color: "#fff",
            fontSize: 20,
            height: 60,
          }}
        >
          9
        </Button>
        <Button
          onClick={() => handleClick("/")}
          sx={{
            bgcolor: theme.palette.secondary.main,
            color: "#fff",
            fontSize: 20,
            height: 60,
          }}
        >
          /
        </Button>

        <Button
          onClick={() => handleClick("4")}
          sx={{
            bgcolor: theme.palette.primary.main,
            color: "#fff",
            fontSize: 20,
            height: 60,
          }}
        >
          4
        </Button>
        <Button
          onClick={() => handleClick("5")}
          sx={{
            bgcolor: theme.palette.primary.main,
            color: "#fff",
            fontSize: 20,
            height: 60,
          }}
        >
          5
        </Button>
        <Button
          onClick={() => handleClick("6")}
          sx={{
            bgcolor: theme.palette.primary.main,
            color: "#fff",
            fontSize: 20,
            height: 60,
          }}
        >
          6
        </Button>
        <Button
          onClick={() => handleClick("*")}
          sx={{
            bgcolor: theme.palette.secondary.main,
            color: "#fff",
            fontSize: 20,
            height: 60,
          }}
        >
          *
        </Button>

        <Button
          onClick={() => handleClick("1")}
          sx={{
            bgcolor: theme.palette.primary.main,
            color: "#fff",
            fontSize: 20,
            height: 60,
          }}
        >
          1
        </Button>
        <Button
          onClick={() => handleClick("2")}
          sx={{
            bgcolor: theme.palette.primary.main,
            color: "#fff",
            fontSize: 20,
            height: 60,
          }}
        >
          2
        </Button>
        <Button
          onClick={() => handleClick("3")}
          sx={{
            bgcolor: theme.palette.primary.main,
            color: "#fff",
            fontSize: 20,
            height: 60,
          }}
        >
          3
        </Button>
        <Button
          onClick={() => handleClick("+")}
          sx={{
            bgcolor: theme.palette.secondary.main,
            color: "#fff",
            fontSize: 20,
            height: 60,
          }}
        >
          +
        </Button>

        <Button
          onClick={() => handleClick(".")}
          sx={{
            bgcolor: theme.palette.secondary.main,
            color: "#fff",
            fontSize: 20,
            height: 60,
          }}
        >
          .
        </Button>
        <Button
          onClick={() => handleClick("0")}
          sx={{
            bgcolor: theme.palette.primary.main,
            color: "#fff",
            fontSize: 20,
            height: 60,
          }}
        >
          0
        </Button>
        <Button
          onClick={handleEqual}
          sx={{
            bgcolor: theme.palette.success.main,
            color: "#fff",
            fontSize: 20,
            height: 60,
            "&:hover": { bgcolor: theme.palette.success.dark },
          }}
        >
          =
        </Button>
        <Button
          onClick={() => handleClick("-")}
          sx={{
            bgcolor: theme.palette.secondary.main,
            color: "#fff",
            fontSize: 20,
            height: 60,
          }}
        >
          -
        </Button>

        {/* History & Clear spanning 2 cols each */}
        <Button
          onClick={handleHistory}
          sx={{
            gridColumn: "1 / span 2",
            bgcolor: theme.palette.info.main,
            color: "#fff",
            fontSize: 18,
            height: 60,
          }}
        >
          History
        </Button>
        <Button
          onClick={handleClear}
          sx={{
            gridColumn: "3 / span 2",
            bgcolor: theme.palette.error.main,
            color: "#fff",
            fontSize: 18,
            height: 60,
            "&:hover": { bgcolor: theme.palette.error.dark },
          }}
        >
          Clear
        </Button>
      </Box>
    </Paper>
  );
};

export default Calculator;
