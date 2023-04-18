constForm = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    return (
      <Form onSubmit={onSubmit}>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <Form.Control
          type="text"
          placeholder="Role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
        
      </Form>
    );
  };