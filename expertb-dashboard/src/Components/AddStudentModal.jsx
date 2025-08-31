// components/AddStudentModal.jsx
import React from 'react';
import AddStudent from '../pages/AddStudent';

const AddStudentModal = ({ isOpen, onClose, studentData }) => {
  if (!isOpen) return null;

  const handleSuccess = () => {
    onClose(); // ✅ Close the modal after successful add/update
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
      <div className="bg-white max-h-[90vh] overflow-y-auto rounded-lg w-full max-w-6xl relative p-6 shadow-xl border border-red-400">
        {/* ✅ Close button removed as requested */}
        <AddStudent studentData={studentData} onSuccess={handleSuccess} />
      </div>
    </div>
  );
};

export default AddStudentModal;
