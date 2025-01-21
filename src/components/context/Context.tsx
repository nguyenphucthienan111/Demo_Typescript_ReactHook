import { createContext, useState, useContext } from "react";

interface User {
  name: string;
  age: number;
}

interface UserContextType {
  user: User;
  updateUser: (newUserData: Partial<User>) => void;
}

// 1. Create a Context
const UserContext = createContext<UserContextType | undefined>(undefined);

// 2. Create a Provider component
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>({ name: "John Doe", age: 25 });

  const updateUser = (newUserData: Partial<User>) => {
    setUser((prevUser) => ({ ...prevUser, ...newUserData }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

// 3. Component to display user data
export const UserProfile = () => {
  const { user } = useUserContext();
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

// 4. Component to update user data
export const UpdateUser = () => {
  const { user, updateUser } = useUserContext();

  const changeName = () => updateUser({ name: "Jane Smith" });
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
