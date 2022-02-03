import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";


const UseAns = (videoID) => {
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(false);
    const [ans, setAns] = useState([]);

    useEffect(() => {
        async function fetchAns() {
            // database relation
            const db = getDatabase();
            const ansRef = ref(db, "answers/" + videoID + "/questions");
            const ansQuery = query(ansRef, orderByKey());

            try {
                setErr(false);
                setLoading(true);
                //req database
                const snapshot = await get(ansQuery);
                setLoading(false);

                if (snapshot.exists()) {
                    setAns((prevAns) => {
                        return [...prevAns, ...Object.values(snapshot.val())]
                    });
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setErr(true);
            }
        }

        fetchAns();
    }, [videoID]);

    return {
        loading,
        err,
        ans,
    }
};

export default UseAns;