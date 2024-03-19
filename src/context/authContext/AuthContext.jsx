import { createContext, useState, useContext } from "react";

const AuthContext = createContext();
const baseUrl = "https://bargainfox-dev.concettoprojects.com/api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginAction = async (data) => {
    try {
      const response = await fetch(`${baseUrl}/send-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (res) {
        setUser(data);
        return;
      }
    } catch (error) {
      console.log("login error", error);
    }
  };
  return (
    <AuthContext.Provider value={{ loginAction }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
