import React, { useState } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Profile= () => {
  
  const [isDropdownOpen, setDropdownOpen] = useState(false);
    
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };
const navigate = useNavigate();
  const toLogin = () => {
    navigate('/login');
  };

  const toUserProfile = () => {
    // Navigate to the user's profile page
    // Replace '/profile' with the actual URL for the user's profile page
    
    setDropdownOpen(false); // Close the dropdown after navigation
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="text-white focus:outline-none"
          onClick={toggleDropdown}
        >
          {/* Add your profile icon or avatar here */}
          <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className=" text-4xl text-[#31A097]"><FaUserCircle /></span>
                    </div>
        </button>
      </div>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toUserProfile}
              role="menuitem"
            >
              Your Blogs
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toLogin}
              role="menuitem"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
