import { useState } from "react";
import AllUsersContext from "./all-users-context";

export default function AllUsersContextProvider({children}) {
    const [users, setUsers] = useState([])

    const context = { users, setUsers}

    return (
        <>
       <AllUsersContext.Provider value={context}>
            {children}
       </AllUsersContext.Provider>
        </>
    )
}