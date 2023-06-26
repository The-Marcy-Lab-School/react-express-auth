import { useEffect, useState } from "react";
import DoctorContext from "./DoctorContext";
import { handleFetch } from "../utils/fetch-utils";

function DoctorProvider({ children }) {
    const [doctors, setDoctor] = useState([])
    const [filteredObject, setFilteredObject] = useState([]);

    useEffect(() => {
        const doFetch = async () => {
            const data = await handleFetch('/api/pages');
            setDoctor(data);
        }
        doFetch();
    }, [])

    const value = {
        doctors,
        setFilteredObject,
        filteredObject
    }

    return (
        <DoctorContext.Provider value={value}>
            {children}
        </DoctorContext.Provider>
    )
}

export default DoctorProvider