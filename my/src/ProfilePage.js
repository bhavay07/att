import React,{useState} from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';
const ProfilePage = () => {
  const location = useLocation();
  const {username,email}=location.state || {};

  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState(username || 'Anmol Goyal');
  const [userEmail, setUserEmail] = useState(email || 'anmolgoyal@gmail.com');
  const [recentActivities, setRecentActivities] = useState([
    'Logged in',
    'Updated Profile',
    'Posted a comment',
    'Liked a Post'
  ]);

  const handleProfilePictureChange = (e) =>{
    const file = e.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
  };

  const handleNameChange =(e)=>{
    setName(e.target.value);
  };


  const handleEmailChange = (e) =>{
    setUserEmail(e.target.value);
  };

  const handleSaveProfile = ()=>{
    toast.success('Pofile updated!');
  };

  return(
    <div className='flex flex-col items-center justify-center min-h-screen '></div>
  )

}

export default ProfilePage