import { createContext, ReactNode, useState, useContext } from "react";

interface User {
  name: string;
  age: number;
}

interface UserContextType {
  user: User;
  updateUser: (newUserData: Partial<User>) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User>({ name: "FPT University", age: 25 });

  const updateUser = (newUserData: Partial<User>) => {
    setUser((prevUser) => ({ ...prevUser, ...newUserData }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export const UserProfile = () => {
  const { user } = useUserContext();

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>User Profile</h3>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export const UpdateUser = () => {
  const { user, updateUser } = useUserContext();

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