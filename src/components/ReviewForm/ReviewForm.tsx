// import React, { useState } from "react";

// const ReviewForm: React.FC<{
//   onSubmit: (formData: { name: string; review: string }) => void;
// }> = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({ name: "", review: "" });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Perform any validation or additional logic before submitting if needed
//     onSubmit(formData);
//     // Optionally, clear the form fields after submission
//     setFormData({ name: "", review: "" });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto my-4">
//       <div className="mb-4">
//         <label
//           htmlFor="name"
//           className="block text-gray-700 text-sm font-bold mb-2"
//         >
//           Your Name:
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="border border-gray-300 rounded p-2 w-full"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label
//           htmlFor="review"
//           className="block text-gray-700 text-sm font-bold mb-2"
//         >
//           Your Review/Description:
//         </label>
//         <textarea
//           id="review"
//           name="review"
//           value={formData.review}
//           onChange={handleChange}
//           className="border border-gray-300 rounded p-2 w-full h-40"
//           required
//         />
//       </div>
//       <button
//         type="submit"
//         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//       >
//         Submit Review
//       </button>
//     </form>
//   );
// };

// export default ReviewForm;

export {};
