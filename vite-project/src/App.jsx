// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//        <p>This is my first react project.</p>
//        <Cse12 />
//     </div>
//   );
// }
// //2nd component
// function Cse12(){
//   return (
//     <div className="Cse12">
//   <h2>Welcome to CSE12</h2>
//   <p>This is the second component.</p>
// </div>
//   );
// }
// export default App;

import Student from "./Student";

function App() {
  return (
    <div className="App">
      <h1>Student Information</h1>
      <Student name="John Doe" course="Computer Science" marks={85} />
      <Student name="Jane Smith" course="Mathematics" marks={92} />
      <Student name="Alice Johnson" course="Physics" marks={78} />
    </div>
  );
}