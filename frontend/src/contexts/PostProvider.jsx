import { useEffect, useState } from "react";
import DoctorContext from "./DoctorContext";
import { handleFetch } from "../utils/fetch-utils";

function DoctorProvider({ children }) {
    const [doctors, setDoctor] = useState([])
    const [filteredObject, setFilteredObject] = useState([]);
console.log(filteredObject)

    useEffect(() => {
        const doFetch = async () => {
            const data = await handleFetch('/api/pages');
            console.log(data);
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