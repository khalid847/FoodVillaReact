import { createContext, useContext } from "react";

const UserContext = createContext({
    user:{
        name: "Khalid",
        email: "khalid@gmail.com",
    },
});

export default UserContext;