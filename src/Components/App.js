import { Container } from "react-bootstrap";
import Clock from "./Clock";

function App() {
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundColor: "#2E3440",
        color: "#D8DEE9",
      }}
      fluid
    >
      <div style={{ minWidth: "500px" }}>
        <Clock />
      </div>
      <small style={{ marginTop: "10px", color: "#5E81AC" }}>
        Designed and coded by
        <span style={{ color: "#BF616A" }}> Taylor Li</span>
      </small>
    </Container>
  );
}

export default App;
