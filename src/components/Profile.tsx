import React from "react";
import { IUser } from "../interfaces/user";
import { getUser } from '../store/user';
import Navbar from './shared/Navbar';

const Profile = () => {

  const user: IUser = getUser();

  return (
    <div className="h-screen w-full bg-slate-700">
      <div className="rounded-md px-16 py-5 backdrop-blur-md max-sm:px-8">
      <Navbar parent='profile' />
        <div className="bg-gray-800 rounded-md text-white">
          <div className="items-center justify-center rounded-xl px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
            <div className="w-fit mx-auto">
              <img src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe" alt="Profile Pic" className="rounded-full w-28" />
            </div>
            <div className="flex justify-center text-xl mt-5">Hi, { user.username }!</div>
            <div className="flex justify-center text-xs mt-5">Section in development...</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Profile;