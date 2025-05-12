import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import UseLocalStorage from "../customHookes/UseLocalStorage";
import assets from "../assets/assets";

const AccountContext = createContext();

function ContextProvider(props) {
  const [session, setSession] = useState({
    user: {
      user_metadata: {
        name: "EO",
      },
    },
    full_name: "Elvis Omonigho Jonathan",
    email: "ighoelvis8@gmail.com",
    position: "Senior Dev",
    url: assets.user_icon,
  });
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const footerRef = useRef();
  const headerRef = useRef();

  const handleChange = (e, user) => {
    user((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const validateUser = (users, newUser, error) => {
    error(null);
    let currentUser = null;

    users.find((user) => {
      if (user.email === newUser.email) {
        if (user.password === newUser.password) {
          return (currentUser = user);
        } else {
          error(`Incorrect password: ${newUser.password}, try again!`);
          return (currentUser = null);
        }
      } else {
        error(
          `This user with Email: ${newUser.email} have not been reqistered`
        );
        return (currentUser = null);
      }
    });

    if (currentUser === null) return false;
    return currentUser;
  };

  const data = {
    courses,
    setCourses,

    session,
    setSession,

    error,
    setError,

    searchTerm,
    setSearchTerm,

    footerRef,
    headerRef,

    handleChange,
    validateUser,
  };
  return (
    <AccountContext.Provider value={data}>
      {props.children}
    </AccountContext.Provider>
  );
}

export const UseAccountContext = () => {
  const data = useContext(AccountContext);
  if (data === undefined)
    throw new Error(
      "Not available data at the AccountContext, for for any error!!!"
    );
  return data;
};

export default ContextProvider;
