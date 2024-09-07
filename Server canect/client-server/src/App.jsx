import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch(
      "https://demoserver-f08osd3ya-md-sakibs-projects-0c3367a4.vercel.app/booking"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <p style={{ backgroundColor: "red", fontSize: "500px" }}>sk</p>
    </div>
  );
}

export default App;
