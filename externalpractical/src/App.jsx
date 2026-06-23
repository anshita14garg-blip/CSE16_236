import { useState } from "react";
import "./App.css";

function App() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [si, setSi] = useState(null);

  const calculateSI = () => {
    const interest = (principal * rate * time) / 100;
    setSi(interest);
  };

  return (
    <div className="container">
      <h2>Simple Interest Calculator</h2>

      <input
        type="number"
        placeholder="Principal Amount"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
      />

      <input
        type="number"
        placeholder="Rate (%)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />

      <input
        type="number"
        placeholder="Time (Years)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />

      <button onClick={calculateSI}>Calculate</button>

      {si !== null && <h3>Simple Interest = ₹{si}</h3>}
    </div>
  );
}

export default App;