// components/AddStudent.jsx
// ✅ Updated version with proper field updates and modal closing
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import jsPDF from 'jspdf';
import 'react-toastify/dist/ReactToastify.css';

const courseOptions = [
  "Web Development", "Graphic Designing", "Forex Trading", "Digital Marketing",
  "Data Science", "Spoken English", "UI/UX Designing", "Python Programming"
];

export default function AddStudent({ studentData = null, onSuccess }) {
  const [formData, setFormData] = useState({
    studentName: '', fatherName: '', birthDate: '', gender: '', division: '',
    district: '', address: '', phone1: '', phone2: '', email: '', courseDuration: '',
    occupation: '', status: '', courseName: '', admissionFee: '', courseFee: '',
    certificateCharges: '', batch: '', installment: '', discount: '', total: '', image: null,
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (studentData) {
      setFormData((prev) => ({
        ...prev,
        ...studentData,
        image: null,
      }));
    }
  }, [studentData]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectCourse = (course) => {
    setFormData((prev) => ({ ...prev, courseName: course }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      for (let key in formData) {
        data.append(key, formData[key]);
      }

      if (studentData && studentData._id) {
        await axios.put(`http://localhost:5000/api/students/${studentData._id}`, data);
        toast.success("Student updated successfully!");
      } else {
        await axios.post('http://localhost:5000/api/students', data);
        toast.success("Student added successfully!");
      }

      if (onSuccess) onSuccess(); // ✅ Auto-close modal

      setFormData({
        studentName: '', fatherName: '', birthDate: '', gender: '', division: '',
        district: '', address: '', phone1: '', phone2: '', email: '', courseDuration: '',
        occupation: '', status: '', courseName: '', admissionFee: '', courseFee: '',
        certificateCharges: '', batch: '', installment: '', discount: '', total: '', image: null,
      });

    } catch (err) {
      console.error(err);
      toast.error("Failed to submit student.");
    }
  };

  const handleDownloadPDF = () => {
    const pdf = new jsPDF();
    let y = 10;

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(18);
    pdf.setTextColor(178, 34, 34);
    pdf.text("Admission Form - Expert B", 10, y);
    y += 10;

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(12);
    pdf.setTextColor(0);

    const addField = (label, value) => {
      if (y > 270) {
        pdf.addPage();
        y = 10;
      }
      pdf.text(`${label}:`, 10, y);
      pdf.text(value || "-", 60, y);
      y += 8;
    };

    addField("Student Name", formData.studentName);
    addField("Father Name", formData.fatherName);
    addField("Date of Birth", formData.birthDate);
    addField("Gender", formData.gender);
    addField("Status", formData.status);
    addField("Occupation", formData.occupation);
    addField("Division", formData.division);
    addField("District", formData.district);
    addField("Address", formData.address);
    addField("Phone Number", formData.phone1);
    addField("Alternate Number", formData.phone2);
    addField("Email", formData.email);
    addField("Course Name", formData.courseName);
    addField("Course Duration", formData.courseDuration);
    addField("Batch", formData.batch);
    addField("Installment", formData.installment);
    addField("Admission Fee", formData.admissionFee);
    addField("Course Fee", formData.courseFee);
    addField("Certificate Charges", formData.certificateCharges);
    addField("Discount", formData.discount);
    addField("Total", formData.total);

    if (formData.image) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imgData = e.target.result;
        pdf.addImage(imgData, "JPEG", 140, 10, 50, 50);
        pdf.save(`${formData.studentName || "student"}_form.pdf`);
      };
      reader.readAsDataURL(formData.image);
    } else {
      pdf.save(`${formData.studentName || "student"}_form.pdf`);
    }
  };

  return (
    <div className="relative min-h-screen bg-white text-red-600 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto shadow-xl rounded-xl p-4 sm:p-6 bg-white relative z-10">
        <div className="relative z-10 flex flex-col md:flex-row justify-between mb-6 md:mb-8 gap-6">
          <h1 className="text-2xl md:text-3xl font-bold">
            {studentData ? 'Update Student' : 'Admission Form'}
          </h1>
          <div className="flex flex-col items-center border-2 border-dashed border-red-300 rounded-lg p-4 w-full sm:w-60 bg-white z-10">
            <div className="w-24 h-24 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center mb-2">
              {formData.image ? (
                <img src={URL.createObjectURL(formData.image)} alt="Preview" className="object-cover w-full h-full" />
              ) : (
                <span className="text-xs text-gray-500">No Image</span>
              )}
            </div>
            <label className="text-sm font-medium mb-1">Choose Profile Pic</label>
            <input type="file" name="image" accept="image/*" onChange={handleChange} className="text-xs" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="studentName" value={formData.studentName} placeholder="Student Name" onChange={handleChange} className="input" />
          <input name="fatherName" value={formData.fatherName} placeholder="Father Name" onChange={handleChange} className="input" />
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} className="input" />
          <div className="flex items-center gap-4 border px-4 py-2 rounded-md">
            <label className="text-sm">Gender:</label>
            <label><input type="radio" name="gender" value="Male" onChange={handleChange} checked={formData.gender === 'Male'} /> Male</label>
            <label><input type="radio" name="gender" value="Female" onChange={handleChange} checked={formData.gender === 'Female'} /> Female</label>
          </div>

          <input name="division" value={formData.division} placeholder="Division" onChange={handleChange} className="input" />
          <input name="district" value={formData.district} placeholder="District" onChange={handleChange} className="input" />
          <input name="address" value={formData.address} placeholder="Address" onChange={handleChange} className="input" />
          <input name="phone1" value={formData.phone1} placeholder="Phone Number" onChange={handleChange} className="input" />
          <input name="phone2" value={formData.phone2} placeholder="Alternate Number" onChange={handleChange} className="input" />
          <input name="email" type="email" value={formData.email} placeholder="Email Address" onChange={handleChange} className="input" />
          <input name="courseDuration" value={formData.courseDuration} placeholder="Course Duration" onChange={handleChange} className="input" />
          <input name="occupation" value={formData.occupation} placeholder="Occupation" onChange={handleChange} className="input" />

          <div className="flex items-center gap-4 border px-4 py-2 rounded-md">
            <label className="text-sm">Status:</label>
            <label><input type="radio" name="status" value="Single" onChange={handleChange} checked={formData.status === 'Single'} /> Single</label>
            <label><input type="radio" name="status" value="Married" onChange={handleChange} checked={formData.status === 'Married'} /> Married</label>
          </div>

          <div className="relative col-span-1 md:col-span-2">
            <button type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="input text-left">
              {formData.courseName || 'Select Course'}
            </button>
            {isDropdownOpen && (
              <ul className="dropdown absolute z-30 w-full mt-1 bg-white border rounded-md max-h-64 overflow-y-auto shadow-lg">
                {courseOptions.map((course) => (
                  <li key={course} onClick={() => handleSelectCourse(course)} className="px-4 py-2 cursor-pointer hover:bg-red-100">
                    {course}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <input name="admissionFee" value={formData.admissionFee} placeholder="Admission Fee" type="number" onChange={handleChange} className="input" />
          <input name="courseFee" value={formData.courseFee} placeholder="Course Fee" type="number" onChange={handleChange} className="input" />
          <input name="certificateCharges" value={formData.certificateCharges} placeholder="Certificate Charges" type="number" onChange={handleChange} className="input" />
          <input name="batch" value={formData.batch} placeholder="Batch" onChange={handleChange} className="input" />
          <input name="installment" value={formData.installment} placeholder="Installment" type="number" onChange={handleChange} className="input" />
          <input name="discount" value={formData.discount} placeholder="Discount" type="number" onChange={handleChange} className="input" />
          <input name="total" value={formData.total} placeholder="Total" type="number" onChange={handleChange} className="input" />

          <button type="submit" className="bg-red-600 text-white py-2 rounded-md col-span-1 md:col-span-2 hover:bg-red-700">
            {studentData ? 'Update' : 'Submit'}
          </button>
        </form>
      </div>

      <div className="max-w-6xl mx-auto mt-4 flex justify-center">
        <button onClick={handleDownloadPDF} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
          Download as PDF
        </button>
      </div>

      <ToastContainer position="top-center" />

      <style>{`
        .input {
          padding: 0.5rem 1rem;
          border: 1px solid #ccc;
          border-radius: 0.375rem;
          outline: none;
          background: white;
          color: #b91c1c;
          width: 100%;
        }
        .input:focus {
          border-color: #b91c1c;
          box-shadow: 0 0 0 1px #b91c1c;
        }
        ::placeholder {
          color: #b91c1c;
        }
      `}</style>
    </div>
  );
}
