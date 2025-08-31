import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddStudentModal from "../Components/AddStudentModal";

const ViewStudents = () => {
  const courseList = [
    "Web Development",
    "Graphic Designing",
    "Forex Trading",
    "Digital Marketing",
    "Data Science",
    "Spoken English",
    "UI/UX Designing",
    "Python Programming",
  ];

  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("View All");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [batchQuery, setBatchQuery] = useState("");
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showSingleDeleteDialog, setShowSingleDeleteDialog] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);

  useEffect(() => {
    handleViewAll();
  }, []);

  const handleViewAll = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/students");
      setStudents(res.data);
      setFilteredStudents(res.data);
      setSelectedCourse("View All");
    } catch (err) {
      toast.error("Failed to fetch students.");
    }
  };

  const handleFilter = (e) => {
    const course = e.target.value;
    setSelectedCourse(course);

    if (course === "View All") {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter(
        (s) => s.courseName?.toLowerCase() === course.toLowerCase()
      );
      setFilteredStudents(filtered);
    }
  };

  const handleBatchSearch = () => {
  const query = batchQuery.trim().toLowerCase();

  if (!query) {
    toast.warning("Please enter a batch to search.");
    return;
  }

  // Check if the query contains a negative number
  const negativeMatch = query.match(/-\d+/);
  if (negativeMatch) {
    toast.error("Please enter a positive number for batch.");
    return;
  }

  // Extract any numeric part from query
  const numericPart = parseInt(query.replace(/\D/g, ""), 10);

  const result = students.filter((s) => {
    const studentBatch = s.batch?.toString().toLowerCase();
    const studentBatchNum = parseInt(studentBatch.replace(/\D/g, ""), 10);

    return (
      studentBatch?.includes(query) ||
      (!isNaN(numericPart) && !isNaN(studentBatchNum) && studentBatchNum === numericPart)
    );
  });

  setFilteredStudents(result);
  setSelectedCourse(`Batch: ${batchQuery}`);
};


  const handleEdit = (student) => {
    setEditingStudent(student);
    setIsAddModalOpen(true);
  };

  const confirmSingleDelete = (student) => {
    setStudentToDelete(student);
    setShowSingleDeleteDialog(true);
  };

  const handleSingleDeleteConfirmed = async () => {
    if (!studentToDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/students/${studentToDelete._id}`);
      handleViewAll();
      toast.success("Student deleted!");
    } catch {
      toast.error("Failed to delete student.");
    } finally {
      setShowSingleDeleteDialog(false);
      setStudentToDelete(null);
    }
  };

  const handleDeleteAllConfirmed = async () => {
    try {
      await axios.delete("http://localhost:5000/api/students");
      handleViewAll();
      toast.success("All students deleted!");
    } catch {
      toast.error("Failed to delete all students.");
    } finally {
      setShowDeleteDialog(false);
    }
  };

  return (
    <div className="px-4 py-8 max-w-screen-xl mx-auto">
      <ToastContainer />

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <h2 className="text-2xl font-bold text-red-600">Student Management</h2>
        <div className="flex flex-wrap gap-3 items-center">
          <select
            value={selectedCourse}
            onChange={handleFilter}
            className="border border-gray-300 px-4 py-2 rounded shadow"
          >
            <option value="View All">View All</option>
            {courseList.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
          {selectedCourse !== "View All" && (
            <button
              onClick={handleViewAll}
              className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 text-sm"
            >
              Reset
            </button>
          )}

          <input
            type="text"
            placeholder="Search by batch"
            value={batchQuery}
            onChange={(e) => setBatchQuery(e.target.value)}
            className="px-4 py-2 border rounded"
          />
          <button
            onClick={handleBatchSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Search
          </button>
        </div>
      </div>

      {selectedCourse !== "View All" && (
        <h3 className="text-lg font-semibold text-blue-600 mb-1">
          Showing Results for: {selectedCourse}
        </h3>
      )}

      <div className="mb-4">
        <p className="text-lg font-semibold text-green-700">
          Total Students: {filteredStudents.length}
        </p>
      </div>

      {filteredStudents.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border shadow-md rounded-lg">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="px-4 py-2 border">#</th>
                <th className="px-4 py-2 border">Profile</th>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Phone</th>
                <th className="px-4 py-2 border">Batch</th>
                <th className="px-4 py-2 border">Course</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={student._id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2 border">{index + 1}</td>
                  <td className="px-4 py-2 border">
                    <img
                      src={`http://localhost:5000/uploads/${student.profilePic}`}
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-4 py-2 border">{student.studentName}</td>
                  <td className="px-4 py-2 border">{student.phone1}</td>
                  <td className="px-4 py-2 border">{student.batch}</td>
                  <td className="px-4 py-2 border">{student.courseName}</td>
                  <td className="px-4 py-2 border space-x-2">
                    <button
                      onClick={() => handleEdit(student)}
                      className="text-yellow-600 hover:text-yellow-800"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => confirmSingleDelete(student)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10 text-lg">
          No students found.
        </p>
      )}

      {filteredStudents.length > 0 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowDeleteDialog(true)}
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700"
          >
            Delete All Students
          </button>
        </div>
      )}

      {/* DELETE ALL DIALOG */}
      {showDeleteDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center size-12 rounded-full bg-red-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="size-6 text-red-600"
                >
                  <path
                    d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Confirm Deletion</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Are you sure you want to delete all students? This action cannot be undone.
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={handleDeleteAllConfirmed}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete All
              </button>
              <button
                onClick={() => setShowDeleteDialog(false)}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE SINGLE STUDENT DIALOG */}
      {showSingleDeleteDialog && studentToDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <h3 className="text-lg font-semibold text-gray-900">Confirm Deletion</h3>
            <p className="mt-2 text-sm text-gray-600">
              Are you sure you want to delete{" "}
              <span className="font-medium text-red-600">{studentToDelete.studentName}</span>?
              This action cannot be undone.
            </p>
            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={handleSingleDeleteConfirmed}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
              <button
                onClick={() => {
                  setShowSingleDeleteDialog(false);
                  setStudentToDelete(null);
                }}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <AddStudentModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false);
          setEditingStudent(null);
          handleViewAll();
        }}
        studentData={editingStudent}
      />
    </div>
  );
};

export default ViewStudents;
