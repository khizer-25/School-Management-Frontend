import React, { useState } from "react";

function IDCardGenerator() {
  const [student, setStudent] = useState({
    name: "",
    fatherName: "",
    studentClass: "",
    rollNo: "",
    gender: "",
    dob: "",
    address: "",
    phone: "",
    photo: null,
    logo: null,
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo" || name === "logo") {
      setStudent({ ...student, [name]: URL.createObjectURL(files[0]) });
    } else {
      setStudent({ ...student, [name]: value });
    }
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  const handlePrint = () => {
    const printContents = document.getElementById("idCard").innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            #idCard, #idCard * {
              visibility: visible;
            }
            #idCard {
              position: absolute;
              left: 0;
              top: 0;
            }
          }
        `}
      </style>

      <div className={`grid md:grid-cols-2 gap-8 ${!showPreview ? "md:grid-cols-1" : ""}`}>
        {/* Form Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-6 text-blue-600">Student Details</h2>
          <div className="space-y-4">
            <input type="text" name="name" placeholder="Student Name" value={student.name} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
            <input type="text" name="fatherName" placeholder="Father Name" value={student.fatherName} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
            <input type="text" name="studentClass" placeholder="Class" value={student.studentClass} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
            <input type="text" name="rollNo"placeholder="Roll Number" value={student.rollNo} onChange={handleChange} className="w-full px-4 py-2 border rounded" />

            <select name="gender" value={student.gender} onChange={handleChange} className="w-full px-4 py-2 border rounded text-gray-700">
              <option value="" disabled hidden>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <input type="date" name="dob" value={student.dob} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
            <textarea name="address" placeholder="Address" value={student.address} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
            <input type="text" name="phone" placeholder="Phone Number" value={student.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded" />
            
            <label className="block">
              <span className="text-gray-700">Student Photo</span>
              <input type="file" name="photo" accept="image/*" onChange={handleChange} className="w-full mt-1 px-4 py-2 border rounded cursor-pointer" />
            </label>

            <label className="block">
              <span className="text-gray-700">School Logo</span>
              <input type="file" name="logo" accept="image/*" onChange={handleChange} className="w-full mt-1 px-4 py-2 border rounded cursor-pointer" />
            </label>
          </div>
        </div>

        {/* Preview Section */}
        {showPreview && (
          <div
          id="idCard"
          className="bg-white border border-gray-300 rounded shadow flex flex-col justify-between text-center mx-auto"
          style={{ width: "324px", height: "450px", padding: "16px" }}
        >
          {/* Main Content: Logo + Photo + Details */}
          <div className="flex flex-col items-center">
            {student.logo && (
              <img
                src={student.logo}
                alt="School Logo"
                className="h-16 object-contain mb-6" // <- Added mb-6 (about 2 lines of space)
              />
            )}
          <div></div>
            <div className="w-26 h-29 bg-gray-200 flex items-center justify-center overflow-hidden rounded border border-gray-400">
  {student.photo ? (
    <img
      src={student.photo}
      alt="Student"
      className="w-full h-full object-cover"
    />
  ) : (
    <span className="text-gray-500 text-xs">Photo</span>
  )}
</div>

           
        
            <div className="text-xs text-left w-full space-y-1.5">
  <p><strong>Name:</strong> <span className="pl-1">{student.name}</span></p>
  <p><strong>Father:</strong> <span className="pl-1">{student.fatherName}</span></p>
  <p><strong>Class:</strong> <span className="pl-1">{student.studentClass}</span></p>
  <p><strong>Roll No:</strong> <span className="pl-1">{student.rollNo}</span></p>
  <p><strong>Gender:</strong> <span className="pl-1">{student.gender}</span></p>
  <p><strong>DOB:</strong> <span className="pl-1">{student.dob}</span></p>
  <p><strong>Address:</strong> <span className="pl-1">{student.address}</span></p>
  <p><strong>Phone:</strong> <span className="pl-1">{student.phone}</span></p>
</div>

          </div>
        
          {/* Footer Section: Fixed to bottom */}
          <div className="mt-4 text-[10px] text-gray-700 leading-tight text-center">
            #20-4-159, Syed Ali Chabutra, Shah Ali Banda Road, Hyderabad-65.<br />
            Contact: 8686463718, 8008553468
          </div>
        </div>
        
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-between items-center gap-4 mt-8">
        <button onClick={togglePreview} className="bg-blue-100 text-blue-700 px-6 py-2 rounded hover:bg-blue-200">
          {showPreview ? "Hide Preview" : "Show Preview"}
        </button>
        <button onClick={handlePrint} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Print
        </button>
      </div>
    </div>
  );
}

export default IDCardGenerator;
