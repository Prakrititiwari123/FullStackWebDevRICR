import React, { useState } from "react";
import { useAuth } from "../../context/authContext";
import EditProfileModal from "./modals/EditProfileModal";

const UserProfile = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { user,setUser } = useAuth();

  return (
    <>
      <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-10">
        <div>
          <span className="text-lg opacity-70 text-(--color-primary)">
            Name : 
          </span>
          <span className="font-semibold text-lg text-(--color-text)"> { user.fullName}</span>
        </div>
        <div>
          <span className="text-lg opacity-70 text-(--color-primary)">Email : </span>
          <span className="font-semibold text-lg text-(--color-text)">{user.email}</span>
        </div>
        <div>
          <span className="text-lg opacity-70 text-(--color-primary)">Phone:</span>
          <span className="font-semibold text-lg text-(--color-text)">{user.mobileNumber}</span>
        </div>

        <button
          className="ml-auto border px-6 py-2 rounded-full bg-amber-400 hover:bg-amber-500"
          onClick={() => setIsEditProfileModalOpen(true)}
        >
          Edit Profile
        </button>
      </div>

      {isEditProfileModalOpen && (
        <EditProfileModal
          user={user}
          setUser={setUser}
          onClose={() => setIsEditProfileModalOpen(false)}
        />
      )}
    </>
  );
};

export default UserProfile;
