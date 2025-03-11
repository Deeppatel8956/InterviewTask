import React, { useState, useEffect } from 'react'
import { auth, db } from '../auth/Firebase'
import { doc } from 'firebase/firestore'
import { getDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'
const Profile = () => {
  const [userDetails, setUserDetails] = useState(null)

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      let docref = doc(db, "User", user.uid)
      let dosnap = await getDoc(docref)
      if (dosnap.exists()) {
        setUserDetails(dosnap.data())
      }
    })
  }
  useEffect(() => {
    fetchUserData();
  }, []);

  console.log("userDetails..............");
  console.log(userDetails)
  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <div>
      {userDetails ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={userDetails.photo}
              width={"40%"}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <h3>Welcome {userDetails.firstname} 🙏🙏</h3>
          <div>
            <p>{userDetails.firstame}</p>
            <p>Email: {userDetails.email}</p>
            <p>First Name: {userDetails.firstname}</p>
            {/* <p>Last Name: {userDetails.lastName}</p> */}
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Profile