import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";


const UseQuestions = (videoID) => {
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        async function fetchQuestions() {
            // database relation
            const db = getDatabase();
            const questionRef = ref(db, "quiz/" + videoID + "/questions");
            const questionQuery = query(questionRef, orderByKey());

            try {
                setErr(false);
                setLoading(true);
                //req database
                const snapshot = await get(questionQuery);
                setLoading(false);

                if (snapshot.exists()) {
                    setQuestions((prevQuestions) => {
                        return [...prevQuestions, ...Object.values(snapshot.val())]
                    });
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setErr(true);
            }
        }

        fetchQuestions();
    }, [videoID]);

    return {
        loading,
        err,
        questions,
    }
};

export default UseQuestions;