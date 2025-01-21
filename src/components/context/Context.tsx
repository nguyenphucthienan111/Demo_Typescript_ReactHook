import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

// 2. Create a Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "FPT University", age: 25 });

  const updateUser = (newUserData) => {
    setUser((prevUser) => ({ ...prevUser, ...newUserData }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 3. Component to display user data
export const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

// 4. Component to update user data
export const UpdateUser = () => {
    const { user, updateUser } = useContext(UserContext);
  
    const changeName = () => updateUser({ name: "FPT Software Academy" });
    const incrementAge = () => updateUser({ age: user.age + 1 });
  
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={changeName}>Change Name</button>
        <button onClick={incrementAge} style={{ marginLeft: "10px" }}>
          Increment Age
        </button>
      </div>
    );
  };