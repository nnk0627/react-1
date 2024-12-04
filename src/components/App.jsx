// src/components/App.jsx
import React, { useState } from "react";
import MemberForm from "./MemberForm";
import MemberTable from "./MemberTable";
import { Container, Typography } from "@mui/material";

const App = () => {
  const [members, setMembers] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState(null);

  const handleAddOrUpdateMember = (member) => {
    if (memberToEdit) {
      setMembers((prev) =>
        prev.map((m) => (m.email === memberToEdit.email ? member : m))
      );
      setMemberToEdit(null);
    } else {
      setMembers((prev) => [...prev, member]);
    }
  };

  const handleEdit = (member) => {
    setMemberToEdit(member);
  };

  const handleDelete = (member) => {
    setMembers((prev) => prev.filter((m) => m.email !== member.email));
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Member Management
      </Typography>
      <MemberForm
        onSubmit={handleAddOrUpdateMember}
        memberToEdit={memberToEdit}
      />
      <MemberTable
        members={members}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </Container>
  );
};

export default App;
