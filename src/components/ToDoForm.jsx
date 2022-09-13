import React from "react";
import { FormControl, TextField, Container, Button } from "@mui/material";

export const ToDoForm = () => {
  return (
    <div>
      <Container maxWidth="md">
        <FormControl fullWidth>
          <TextField
            id="standard-basic"
            label="Input your tasks here"
            // variant="standard"
            fullWidth
            required
          />
          <Button variant="contained" sx={{ marginTop: "10px" }} type="submit">
            Add task
          </Button>
        </FormControl>
      </Container>
    </div>
  );
};
