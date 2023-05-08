import { useEffect, useState } from "react";

function App() {
  const [apiResponse, setApiResponse] = useState("Loading");

  useEffect(() => {
    fetch("/api/v1/ping")
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  }, []);
  return (
    <>
      <p>API Response: {apiResponse}</p>
    </>
  );
}

export default App;
