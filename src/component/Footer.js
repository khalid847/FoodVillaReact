import { useContext } from "react";
import UserContext from "../utilities/UserContext";


export const Footer = () => {
    const {user} = useContext(UserContext);
    return(
    <h4>This Website is Developed by {user.name} and mail id {user.email}</h4>
    )
};