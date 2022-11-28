import { useContext, useEffect, useState } from "react"
import { authContext } from "../Context/AuthContext/AuthContext";

const useAdmin = email => {
    const {user}= useContext(authContext)
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (user?.userRole) {
            fetch(`http://localhost:5000/allUsers/${user?.userRole === 'admin'}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false);
                })
}
    }, [user?.userRole])
    return [isAdmin, isAdminLoading]
}

export default useAdmin;