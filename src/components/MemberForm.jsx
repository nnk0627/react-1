// src/components/MemberForm.jsx
import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";

const MemberForm = ({ onSubmit, memberToEdit }) => {
  const [member, setMember] = useState({ name: "", email: "" });

  useEffect(() => {
    if (memberToEdit) {
      setMember(memberToEdit);
    }
  }, [memberToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMember((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(member);
    setMember({ name: "", email: "" });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <TextField
        name="name"
        label="Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={member.name}
        onChange={handleChange}
      />
      <TextField
        name="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={member.email}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary">
        {memberToEdit ? "Update" : "Add"}
      </Button>
    </Box>
  );
};

export default MemberForm;
