import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    setResult(""); // no result while the user is typing
  };

  const handleCheck = (e) => {
    e.preventDefault();
    const trimmed = value.trim();
    const n = Number(trimmed);

    if (trimmed === "" || Number.isNaN(n) || !Number.isInteger(n)) {
      setResult("Not a valid number!");
    } else if (n % 2 === 0) {
      setResult(`The number ${n} is even!`);
    } else {
      setResult(`Oops, ${n} is odd!`);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 py-4">
      <div className="card shadow-sm border-0 checker-card">
        <div className="card-body p-4 text-center">
          <h1 className="title mb-3">Even or Odd Checker</h1>

          <form onSubmit={handleCheck}>
            <input
              type="text"
              name="number"
              className="form-control form-control-sm number-input mb-2"
              placeholder="Enter a number"
              value={value}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary btn-sm w-100 btn-check-num">
              Check
            </button>
          </form>

          {result && <p className="result mt-3 mb-0">{result}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
