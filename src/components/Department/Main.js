import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import Csit1 from './Dept/Csit/Csit1';
import Csit2 from './Dept/Csit/Csit2';
import Phy1 from './Dept/Phy/Phy1';

export default function Main({ onDepartmentSelect, onSemesterSelect }) {
  const [showDepartments, setShowDepartments] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);

  const handleButtonClick = (department) => {
    onDepartmentSelect(department);
    setActiveButton(department === activeButton ? null : department);
    setSelectedDepartment(department === activeButton ? null : getEditedDepartment(department));
    setSelectedSemester(null); // Reset the selected semester when department changes
  };

  const handleSemesterClick = (semester) => {
    onSemesterSelect(semester);
    setSelectedSemester(semester);
  };

  const handleGoBack = () => {
    setShowDepartments(false);
    setSelectedSemester('');
    setSelectedDepartment(prevSelectedDepartment => {
      // Use the previous selectedDepartment value as the fallback if it exists
      return prevSelectedDepartment || selectedDepartment;
    });
  };

  const getEditedDepartment = (department) => {
    switch (department) {
      case 'Csit':
        return 'CS&IT';
      case 'Phy':
        return 'Physics';
      case 'Chem':
        return 'Chemistry';
      case 'Bio':
        return 'Biology';
      case 'Biotech':
        return 'BioTechnology';
      case 'Zoo':
        return 'Zoology';
      default:
        return department;
    }
  };

  const concatenatedValue = selectedDepartment && selectedSemester ? `${selectedDepartment}${selectedSemester}` : '';

  const renderDropdownMenu = (department) => {
    if (department === activeButton) {
      return (
        <div className="dropdown-menu">
          <div className="dropdown-row">
            <button className="linkBtn" onClick={() => handleSemesterClick('1st Sem')}>
              1st Sem
            </button>
            <button className="linkBtn" onClick={() => handleSemesterClick('2nd Sem')}>
              2nd Sem
            </button>
            <button className="linkBtn" onClick={() => handleSemesterClick('3rd Sem')}>
              3rd Sem
            </button>
          </div>
          <div className="dropdown-row">
            <button className="linkBtn" onClick={() => handleSemesterClick('4th Sem')}>
              4th Sem
            </button>
            <button className="linkBtn" onClick={() => handleSemesterClick('5th Sem')}>
              5th Sem
            </button>
            <button className="linkBtn" onClick={() => handleSemesterClick('6th Sem')}>
              6th Sem
            </button>
          </div>
        </div>
      );
    }
    return null;
  };

  const renderContent = () => {
    if (concatenatedValue === 'CS&IT1st Sem') {
      return <Csit1 />;
    }
    if (concatenatedValue === 'CS&IT2nd Sem') {
      return <Csit2 />;
    }
    if (concatenatedValue === 'Phy1st Sem') {
      return <Phy1 />;
    }
    // Add more conditions for other components if needed
    return null;
  };

  const renderSelectedInfo = () => {
    if (selectedDepartment && selectedSemester) {
      return (
        <>
          <div className="selected-info">
            Selected Department: {selectedDepartment}
            <br />
            Selected Semester: {selectedSemester}
          </div>
          <div>
            <button className='Btns' onClick={handleGoBack}>
              <div className='sign'>
                <svg viewBox='0 0 512 512'>
                  <polygon points='352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256' />
                </svg>
              </div>
              <div className='text'>Go back</div>
            </button>
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className="mainWrapper">
      <div className="w3-col m6 w3-center card-wrapper">
        <div className="card">
          <div className="links">
            <h3>SELECT Department</h3>
            {renderSelectedInfo()}
            <hr />
            {concatenatedValue ? null : (
              <>
                <button className='linkBtn' onClick={() => handleButtonClick('Csit')}>
                  CS&IT
                </button>
                {renderDropdownMenu('Csit')}
                <button className='linkBtn' onClick={() => handleButtonClick('Phy')}>Physics</button>
                {renderDropdownMenu('Phy')}
                <button className='linkBtn' onClick={() => handleButtonClick('Chem')}>Chemistry</button>
                {renderDropdownMenu('Chem')}
                <button className='linkBtn' onClick={() => handleButtonClick('Bio')}>Biology</button>
                {renderDropdownMenu('Bio')}
                <button className='linkBtn' onClick={() => handleButtonClick('Biotech')}>BioTechnology</button>
                {renderDropdownMenu('Biotech')}
                <button className='linkBtn' onClick={() => handleButtonClick('Zoo')}>Zoology</button>
                {renderDropdownMenu('Zoo')}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="subWrapper">{renderContent()}</div>
    </div>
  );
}
