import React, { useState } from 'react';
import axios from 'axios';

const classes = ['Nursery', 'PP1', 'PP2', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
const sections = ['A', 'B', 'C'];

const DisplayStudentInfo = () => {
  const [selectedClass, setSelectedClass] = useState('Nursery');
  const [selectedSection, setSelectedSection] = useState('A');
  const [students, setStudents] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [noStudents, setNoStudents] = useState(false);
  const [message, setMessage] = useState('');
  const [boysCount, setBoysCount] = useState(0);
  const [girlsCount, setGirlsCount] = useState(0);

  const handleSearch = async () => {
    console.log("Search button clicked");
    setShowTable(false);
    setNoStudents(false);
    setMessage('');

    try {
      const response = await axios.get('http://localhost:5000/api/students/getstudents', {
        params: { grade: selectedClass, section: selectedSection },
      });

      console.log(response.data);
      setStudents(response.data);

      if (response.data.length === 0) {
        setNoStudents(true);
        setMessage("No students found for the selected class and section.");
      } else {
        setShowTable(true);
      }

      const boys = response.data.filter(student => student.gender === 'Male').length;
      const girls = response.data.filter(student => student.gender === 'Female').length;

      setBoysCount(boys);
      setGirlsCount(girls);
    } catch (error) {
      console.error('Error fetching students:', error);
      if (error.response && error.response.status === 404) {
        setNoStudents(true);
        setMessage("No students found for the selected class and section.");
      } else {
        setMessage('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 className="text-2xl font-bold text-blue-600 mb-6">Student Information</h2>

      {/* Class Tabs */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '10px' }}>
        {classes.map((cls) => (
          <button
            key={cls}
            onClick={() => setSelectedClass(cls)}
            style={{
              padding: '6px 12px',
              backgroundColor: selectedClass === cls ? '#2563eb' : '#f3f4f6',
              color: selectedClass === cls ? 'white' : 'black',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          >
            {cls}
          </button>
        ))}
      </div>

      {/* Section Tabs and Search Button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => setSelectedSection(sec)}
              style={{
                padding: '6px 12px',
                backgroundColor: selectedSection === sec ? '#2563eb' : '#f3f4f6',
                color: selectedSection === sec ? 'white' : 'black',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            >
              Section {sec}
            </button>
          ))}
        </div>
        <button
          onClick={handleSearch}
          style={{
            padding: '6px 16px',
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Search Students
        </button>
      </div>

      {/* No Students Message */}
      {message && (
        <div style={{ marginTop: '20px', fontSize: '1rem', color: 'red', textAlign: 'center' }}>
          {message}
        </div>
      )}

      {/* Student Table */}
      {showTable && (
        <>
          <table style={{ width: '100%', marginTop: '20px', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#f9fafb', textAlign: 'left' }}>
                <th style={{ padding: '10px', border: '1px solid #e5e7eb' }}>Admission No</th>
                <th style={{ padding: '10px', border: '1px solid #e5e7eb' }}>Class</th>
                <th style={{ padding: '10px', border: '1px solid #e5e7eb' }}>Section</th>
                <th style={{ padding: '10px', border: '1px solid #e5e7eb' }}>Roll No</th>
                <th style={{ padding: '10px', border: '1px solid #e5e7eb' }}>Student Name</th>
                <th style={{ padding: '10px', border: '1px solid #e5e7eb' }}>Parent Name</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}>{student.admissionNumber}</td>
                  <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}>{student.grade}</td>
                  <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}>{student.section}</td>
                  <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}>{student.rollNumber}</td>
                  <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}>
                    {`${student.firstName} ${student.middleName || ''} ${student.lastName}`}
                  </td>
                  <td style={{ padding: '10px', border: '1px solid #e5e7eb' }}>{student.parentName}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Student Stats */}
          <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '20px', marginLeft: '30px' }}>
            <div>Total Students: <input type="text" style={{ width: '50px' }} value={students.length} readOnly /></div>
            <div>Boys: <input type="text" style={{ width: '50px' }} value={boysCount} readOnly /></div>
            <div>Girls: <input type="text" style={{ width: '50px' }} value={girlsCount} readOnly /></div>
          </div>
        </>
      )}
    </div>
  );
};

export default DisplayStudentInfo;
