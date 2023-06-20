import { useEffect, useState } from "react";
import DoctorContext from "./DoctorContext";
import { handleFetch } from "../utils/fetch-utils";

function DoctorProvider({ children }) {
    const [doctors, setDoctor] = useState([])

    useEffect(() => {
        const doFetch = async () => {
            const data = await handleFetch('http://127.0.0.1:3000/api/pages');
            console.log(data);
            setDoctor(data);
        }
        doFetch();
    }, [])

    const value = {
        doctors
    }

    return (
        <DoctorContext.Provider value={value}>
            {children}
        </DoctorContext.Provider>
    )
}

export default DoctorProvider