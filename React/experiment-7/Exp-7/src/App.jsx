// import StudentCard from "./student";
// function App() {
//   return (
//     <div>
//       <h1>Student Card</h1>
//       <StudentCard name="John Doe" marks={85} grade="A" />
//       <StudentCard name="Jane Smith" marks={78} grade="B" />
//       <StudentCard name="Alice Johnson" marks={92} grade="A+" />
//     </div>
//   );
// }

// export default App;
import React from "react";
import { useState } from "react";
function App() {
  const [isOn, setIsOn] = useState(false);
  return (
    <div style={{ textAlign:'center', marginTop: '20'}}>
      <h1>Toggle Button</h1>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>
    </div>
  );
}
export default App;