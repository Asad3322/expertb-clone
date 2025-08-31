import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EnrollNow = () => {
  const { courseTitle } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    email: "",
    contact: "",
    address: "",
    course: "",
    reference: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    if (courseTitle) {
      setFormData((prev) => ({
        ...prev,
        course: decodeURIComponent(courseTitle),
      }));
    }
  }, [courseTitle]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });

    // Validation (same as your original)
    if (!/^[A-Za-z ]+$/.test(formData.name.trim())) {
      setMessage({ text: "Name should only contain letters.", type: "error" });
      return;
    }
    if (!/^\d{11}$/.test(formData.contact)) {
      setMessage({
        text: "Contact number must be exactly 11 digits.",
        type: "error",
      });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setMessage({ text: "Invalid email format.", type: "error" });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage({
          text: "🎉 Application submitted successfully!",
          type: "success",
        });
        setFormData({
          name: "",
          fatherName: "",
          email: "",
          contact: "",
          address: "",
          course: "",
          reference: "",
        });
      } else {
        setMessage({ text: data.error || "Something went wrong", type: "error" });
      }
    } catch (err) {
      console.error(err);
      setMessage({ text: "Server error. Please try again later.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#ED1C24]">
          Admission Open
        </h2>

        {message.text && (
          <div
            className={`mb-4 p-3 rounded-md text-center ${
              message.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {message.text}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#ED1C24] focus:outline-none"
            />
          </div>

          {/* Father Name */}
          <div>
            <label htmlFor="fatherName" className="block font-medium mb-1">
              Father Name
            </label>
            <input
              type="text"
              id="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              placeholder="Enter your father's name"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#ED1C24] focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#ED1C24] focus:outline-none"
            />
          </div>

          {/* Contact */}
          <div>
            <label htmlFor="contact" className="block font-medium mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter your contact number"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#ED1C24] focus:outline-none"
            />
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className="block font-medium mb-1">
              Address
            </label>
            <textarea
              id="address"
              rows="3"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#ED1C24] focus:outline-none"
            ></textarea>
          </div>

          {/* Course */}
          <div>
            <label htmlFor="course" className="block font-medium mb-1">
              Courses (Select One)
            </label>
            <select
              id="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#ED1C24] focus:outline-none"
            >
              <option value="">Choose a course</option>
              <option value="Web Design & Development Course for Beginners">
                Web Design & Development Course for Beginners
              </option>
              <option value="Graphics Design Course for Beginners">
                Graphics Design Course for Beginners
              </option>
              <option value="Digital Marketing Course for Beginners">
                Digital Marketing Course for Beginners
              </option>
              <option value="E-commerce Development Course for Beginners">
                E-commerce Development Course for Beginners
              </option>
              <option value="Forex Trading Course for Beginners">
                Forex Trading Course for Beginners
              </option>
              <option value="Amazon Web Services (AWS) Training Course">
                Amazon Web Services (AWS) Training Course
              </option>
              <option value="Search Engine Optimization (S.E.O) Course">
                Search Engine Optimization (S.E.O) Course
              </option>
              <option value="Advanced Excel Training Course for Beginners">
                Advanced Excel Training Course for Beginners
              </option>
              <option value="Advanced Freelancing Training Course">
                Advanced Freelancing Training Course
              </option>
            </select>
          </div>

          {/* Reference */}
          <div>
            <label htmlFor="reference" className="block font-medium mb-1">
              Reference
            </label>
            <input
              type="text"
              id="reference"
              value={formData.reference}
              onChange={handleChange}
              placeholder="How did you hear about us?"
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#ED1C24] focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-[#ED1C24] text-white font-medium py-2 px-4 rounded-md transition duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-red-700"
            }`}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnrollNow;
