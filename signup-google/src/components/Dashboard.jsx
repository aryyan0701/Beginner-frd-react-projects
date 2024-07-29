import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase/firebase';
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Dashboard() {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const user = auth.currentUser;

      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setUserDetails(userDoc.data());
          } else {
            toast.error('User details not found.');
            navigate('/signup');
          }
        } catch (error) {
          toast.error('Error fetching user details.');
          console.error('Error fetching user details', error);
        }
      } else {
        toast.error('No user is signed in.');
        navigate('/login');
      }
    };

    fetchUserDetails();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      toast.success('Successfully logged out');
      navigate('/login');
    } catch (error) {
      toast.error('Error logging out');
      console.error('Error logging out', error);
    }
  };

  return (
    <div>
      {userDetails ? (
        <div>
          <h1>Welcome, {userDetails.name}</h1>
          <p>Email: {userDetails.email}</p>
          <button onClick={handleLogout} className="mt-4 p-2 bg-red-500 text-white rounded">
            Logout
          </button>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
}

export default Dashboard;
