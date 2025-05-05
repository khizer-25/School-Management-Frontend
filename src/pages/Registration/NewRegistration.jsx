import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const StudentRegistrationForm = () => {
  const [photoPreview, setPhotoPreview] = useState(null);

  const formik = useFormik({
    initialValues: {
      firstName: '', middleName: '', lastName: '',
      dob: '', gender: '', bloodGroup: '',
      grade: '', section: '', academicYear: '', rollNumber: '', admissionNumber: '',totalFees: '',
      parentName: '', relationship: '', phone: '', email: '', address: '',
      studentPhoto: null, birthCertificate: null, previousMarksheet: null, transferCertificate: null,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      dob: Yup.string().required('Date of Birth is required'),
      gender: Yup.string().required('Gender is required'),
      bloodGroup: Yup.string().required('Blood Group is required'),
      grade: Yup.string().required('Grade is required'),
      section: Yup.string().required('Section is required'),
      academicYear: Yup.string().required('Academic Year is required'),
      rollNumber: Yup.string().required('Roll Number is required'),
      totalFees: Yup.number().typeError('Total Fees must be a number').required('Total Fees is required'),

      admissionNumber: Yup.string().required('Admission Number is required'),
      parentName: Yup.string().required('Parent/Guardian name is required'),
      relationship: Yup.string().required('Relationship is required'),
      phone: Yup.string().required('Phone number is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      address: Yup.string().required('Address is required'),
    }),
    onSubmit: async (values) => {
      const formData = new FormData();

      // Append form fields
      formData.append('firstName', values.firstName);
      formData.append('middleName', values.middleName);
      formData.append('lastName', values.lastName);
      formData.append('dateOfBirth', values.dob);
      formData.append('gender', values.gender);
      formData.append('bloodGroup', values.bloodGroup);
      formData.append('grade', values.grade);
      formData.append('section', values.section);
      formData.append('academicYear', values.academicYear);
      formData.append('admissionNumber', values.admissionNumber);
      formData.append('rollNumber', values.rollNumber);
      formData.append('totalFees', values.totalFees);
      formData.append('parentName', values.parentName);
      formData.append('relationship', values.relationship);
      formData.append('phoneNumber', values.phone);
      formData.append('emailAddress', values.email);
      formData.append('address', values.address);

      // Append files
      if (values.studentPhoto) formData.append('studentPhoto', values.studentPhoto);
      if (values.birthCertificate) formData.append('birthCertificate', values.birthCertificate);
      if (values.previousMarksheet) formData.append('previousMarksheet', values.previousMarksheet);
      if (values.transferCertificate) formData.append('transferCertificate', values.transferCertificate);

      try {
        const response = await axios.post('http://localhost:5000/api/Newregistration/register', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response.data);
        alert('Student Registered Successfully!');

        // Reset form
        formik.resetForm();
        setTimeout(() => {
          formik.setFieldValue('studentPhoto', null);
          formik.setFieldValue('birthCertificate', null);
          formik.setFieldValue('previousMarksheet', null);
          formik.setFieldValue('transferCertificate', null);
        }, 0);
        setPhotoPreview(null);
      } catch (error) {
        console.error(error);
        alert('Failed to register student!');
      }
    },
  });

  const inputClass = "border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400";

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const form = e.target.form;
      const index = Array.prototype.indexOf.call(form, e.target);
      form.elements[index + 1]?.focus();
    }
  };

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white p-6 rounded shadow max-w-6xl mx-auto space-y-6">
      <h2 className="text-2xl text-blue-600 font-bold mb-4">Student Registration</h2>

      {/* Personal Info */}
      <div>
        <h3 className="font-semibold mb-2">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <input type="text" placeholder="First name" {...formik.getFieldProps('firstName')} className={inputClass} onKeyDown={handleEnterKey} />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
            )}
          </div>

          <div>
            <input type="text" placeholder="Middle name" {...formik.getFieldProps('middleName')} className={inputClass} onKeyDown={handleEnterKey} />
          </div>

          <div>
            <input type="text" placeholder="Last name" {...formik.getFieldProps('lastName')} className={inputClass} onKeyDown={handleEnterKey} />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
            )}
          </div>

          <div>
            <input type="date" {...formik.getFieldProps('dob')} className={inputClass} onKeyDown={handleEnterKey} />
            {formik.touched.dob && formik.errors.dob && (
              <div className="text-red-500 text-sm">{formik.errors.dob}</div>
            )}
          </div>

          <div>
            <select {...formik.getFieldProps('gender')} className={inputClass} onKeyDown={handleEnterKey}>
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            {formik.touched.gender && formik.errors.gender && (
              <div className="text-red-500 text-sm">{formik.errors.gender}</div>
            )}
          </div>

          <div>
            <select {...formik.getFieldProps('bloodGroup')} className={inputClass} onKeyDown={handleEnterKey}>
              <option value="">Select blood group</option>
              <option>A+</option><option>B+</option><option>O+</option><option>AB+</option>
            </select>
            {formik.touched.bloodGroup && formik.errors.bloodGroup && (
              <div className="text-red-500 text-sm">{formik.errors.bloodGroup}</div>
            )}
          </div>
        </div>
      </div>

      {/* Academic Info */}
      <div>
        <h3 className="font-semibold mb-2">Academic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
          <select {...formik.getFieldProps('grade')} className={inputClass} onKeyDown={handleEnterKey}>
          <option value="">Select class</option>
          <option value="Nursery">Nursery</option>
          <option value="PP1">PP1</option>
          <option value="PP2">PP2</option>
              {['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'].map((roman, index) => (
          <option key={index} value={roman}>{`Class ${roman}`}</option>
              ))}
          </select>

            {formik.touched.grade && formik.errors.grade && (
              <div className="text-red-500 text-sm">{formik.errors.grade}</div>
            )}
          </div>

          <div>
            <select {...formik.getFieldProps('section')} className={inputClass} onKeyDown={handleEnterKey}>
              <option value="">Select section</option>
              <option>A</option><option>B</option><option>C</option>
            </select>
            {formik.touched.section && formik.errors.section && (
              <div className="text-red-500 text-sm">{formik.errors.section}</div>
            )}
          </div>

          <div>
            <select {...formik.getFieldProps('academicYear')} className={inputClass} onKeyDown={handleEnterKey}>
              <option value="">Select academic year</option>
              {['2024-2025', '2025-2026', '2026-2027', '2027-2028', '2028-2029'].map((year, index) => (
                <option key={index} value={year}>{year}</option>
              ))}
            </select>
            {formik.touched.academicYear && formik.errors.academicYear && (
              <div className="text-red-500 text-sm">{formik.errors.academicYear}</div>
            )}
          </div>

          <div>
            <input type="text" placeholder="Admission Number" {...formik.getFieldProps('admissionNumber')} className={inputClass} onKeyDown={handleEnterKey} />
            {formik.touched.admissionNumber && formik.errors.admissionNumber && (
              <div className="text-red-500 text-sm">{formik.errors.admissionNumber}</div>
            )}
          </div>

          <div>
            <input type="text" placeholder="Roll number" {...formik.getFieldProps('rollNumber')} className={inputClass} onKeyDown={handleEnterKey} />
            {formik.touched.rollNumber && formik.errors.rollNumber && (
              <div className="text-red-500 text-sm">{formik.errors.rollNumber}</div>
            )}
          </div>

          <div>
          <input type="text" placeholder="Total Fees"{...formik.getFieldProps('totalFees')} className={inputClass} onKeyDown={handleEnterKey}/>
          {formik.touched.totalFees && formik.errors.totalFees && (
          <div className="text-red-500 text-sm">{formik.errors.totalFees}</div>
      )}
</div>

        </div>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="font-semibold mb-2">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input type="text" placeholder="Parent/Guardian Name" {...formik.getFieldProps('parentName')} className={inputClass} onKeyDown={handleEnterKey} />
            {formik.touched.parentName && formik.errors.parentName && (
              <div className="text-red-500 text-sm">{formik.errors.parentName}</div>
            )}
          </div>

          <div>
            <select {...formik.getFieldProps('relationship')} className={inputClass} onKeyDown={handleEnterKey}>
              <option value="">Select relationship</option><option>Father</option><option>Mother</option><option>Guardian</option>
            </select>
            {formik.touched.relationship && formik.errors.relationship && (
              <div className="text-red-500 text-sm">{formik.errors.relationship}</div>
            )}
          </div>

          <div>
            <input type="text" placeholder="Phone number" {...formik.getFieldProps('phone')} className={inputClass} onKeyDown={handleEnterKey} />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-500 text-sm">{formik.errors.phone}</div>
            )}
          </div>

          <div>
            <input type="email" placeholder="Email address" {...formik.getFieldProps('email')} className={inputClass} onKeyDown={handleEnterKey} />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>
        </div>

        <div className="mt-4">
          <textarea placeholder="Address" {...formik.getFieldProps('address')} className={inputClass} rows="3" onKeyDown={handleEnterKey} />
          {formik.touched.address && formik.errors.address && (
            <div className="text-red-500 text-sm">{formik.errors.address}</div>
          )}
        </div>
      </div>

      {/* Documents */}
      <div>
        <h3 className="font-semibold mb-2">Documents & Photos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>Student Photo</label>
            <input 
              type="file" 
              onChange={e => {
                formik.setFieldValue('studentPhoto', e.currentTarget.files[0]);
                setPhotoPreview(URL.createObjectURL(e.currentTarget.files[0]));
              }} 
              className={inputClass} 
            />
            {photoPreview && <img src={photoPreview} alt="Preview" className="mt-2 h-24 w-24 object-cover rounded-full" />}
          </div>

          <div>
            <label>Birth Certificate</label>
            <input type="file" onChange={e => formik.setFieldValue('birthCertificate', e.currentTarget.files[0])} className={inputClass} />
          </div>

          <div>
            <label>Previous Marksheet</label>
            <input type="file" onChange={e => formik.setFieldValue('previousMarksheet', e.currentTarget.files[0])} className={inputClass} />
          </div>

          <div>
            <label>Transfer Certificate</label>
            <input type="file" onChange={e => formik.setFieldValue('transferCertificate', e.currentTarget.files[0])} className={inputClass} />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Register Student
        </button>
      </div>
    </form>
  );
};

export default StudentRegistrationForm;
