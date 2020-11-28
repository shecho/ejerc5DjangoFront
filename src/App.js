import React, { useState, useEffect } from "react";

const App = () => {
  let [student, setStudent] = useState([]);
  useEffect(() => {
    getStudens();
  }, []);
  const getStudens = async () => {
    let url = ``;
    let response = await fetch(url);
    let res = await response.json();
    let studentList = res.results;
    setStudent(studentList);
    console.log(student);
  };

  return (
    <div className="App">
      <div>todos los estudiantes</div>
    </div>
  );
};

export default App;
