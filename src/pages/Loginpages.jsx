import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Box, Button } from "@mui/material";

export default function Loginpages() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "usergong@mail.com" && password === "qwerty") {
      navigate("/todolist");
    } else {
      alert("invalid password or name");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box height={500} width={500} my={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={4} p={2} sx={{ border: "2px solid grey" }}>
          <h1>Welcome</h1>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} />
          {/* <input value={username} onChange={(e) => setUsername(e.target.value)} /> */}
          <TextField id="outlined-basic" label="Outlined" variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {/* <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> */}
          <Button variant="contained" type="submit" style={{ minWidth: "300px", borderRadius: "20px", minHeight: "50px", backgroundColor: "#29292F" }}>
            Log in
          </Button>
        </Box>
      </form>
    </>
  );
}
