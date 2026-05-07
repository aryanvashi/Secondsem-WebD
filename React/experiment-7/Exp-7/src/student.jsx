// function StudentCard(props) {
//     return (
//         <div >
//             <h2>Name: {props.name}</h2>
//             <p>Marks: {props.marks}</p>
//             <p>Grade: {props.grade}</p>
//         </div>
//     );
// }
// export default StudentCard;
import style from "./student.css";
function StudentCard({ name, marks, grade }) {
  return (
    <div className="student-card">
      <h2 className="student-name">Name: {name}</h2>
      <p className="student-marks">Marks: {marks}</p>
      <p className="student-grade">Grade: {grade}</p>
    </div>
  );
}
export default StudentCard;
