import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from "firebase/database";
import { useEffect, useState } from "react";


const UseVideosList = (page) => {
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(false);
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        async function fetchVideos() {
            // database relation
            const db = getDatabase();
            const videosRef = ref(db, "videos");
            const videoQuery = query(videosRef, orderByKey(), startAt("" + page), limitToFirst(8));

            try {
                setErr(false);
                setLoading(true);
                //req database
                const snapshot = await get(videoQuery);
                setLoading(false);

                if (snapshot.exists()) {
                    setVideos((prevVideos) => {
                        return [...prevVideos, ...Object.values(snapshot.val())]
                    });
                } else {
                    setHasMore(false);
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setErr(true);
            }
        }

        fetchVideos();
    }, [page]);

    return {
        loading,
        err,
        videos,
        hasMore,
    }
};

export default UseVideosList;