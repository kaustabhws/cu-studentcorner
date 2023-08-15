import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);

  const handleDepartmentSelection = (department) => {
    setSelectedDepartment(department);
  };

  const handleSemesterSelection = (semester) => {
    setSelectedSemester(semester);
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Welcome selectedDepartment={selectedDepartment} selectedSemester={selectedSemester} onDepartmentSelect={handleDepartmentSelection} onSemesterSelect={handleSemesterSelection} />}/>
      </Routes>
    </Router>
  );
}

export default App;
