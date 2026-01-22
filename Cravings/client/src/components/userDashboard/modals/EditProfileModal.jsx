import React, { useState } from "react";

const EditProfileModal = ({ user, setUser, onClose }) => {
  const [fullName, setFullName] = useState(user?.fullName || "");
  const [mobileNumber, setMobileNumber] = useState(user?.mobileNumber || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    // simple mobile validation
    if (mobileNumber.length !== 10) {
      alert("Mobile number must be 10 digits");
      return;
    }

    setUser((prev) => ({
      ...prev,
      fullName,
      mobileNumber,
    }));

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-100">
        {/* w-[92%] max-w-md */}
      <div className="bg-white  w-5xl max-h-[85vh] overflow-y-auto rounded-2xl shadow-xl p-6">    
        
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-5">
          <h2 className="text-lg font-semibold text-(--color-primary)">
            Edit Profile
          </h2>
          <button
            onClick={onClose}
            className="text-xl text-gray-500 hover:text-red-500"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Full Name */}
          <div>
            <label className="text-sm font-medium text-(--color-text)">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter full name"
              className="w-full mt-1 px-3 py-2 border rounded-lg 
              focus:outline-none focus:ring-2 
              focus:ring-(--color-accent)"
              required
            />
          </div>

          {/* Mobile Number */}
          <div>
            <label className="text-sm font-medium text-(--color-text)">
              Mobile Number
            </label>
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) =>
                setMobileNumber(e.target.value.replace(/\D/g, ""))
              }
              maxLength={10}
              placeholder="Enter 10 digit number"
              className="w-full mt-1 px-3 py-2 border rounded-lg 
              focus:outline-none focus:ring-2 
              focus:ring-(--color-accent)"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border 
              text-(--color-primary) 
              hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg font-medium text-white
              bg-(--color-secondary)
              hover:bg-(--color-secondary-hover)"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;












// import React from "react";


// const EditProfileModal = ({ onClose }) => {
//   return (
//     <>
//       <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-100">
//         <div className="bg-white w-5xl max-h-[85vh] overflow-y-auto">
//           <div>EditProfileModal</div>
//           <button onClick={() => onClose()}>X</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EditProfileModal;
