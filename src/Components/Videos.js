import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from "react-router-dom";
import useVideosList from '../Hooks/useVideosList';
import Video from './Video';


const Videos = () => {
    const [page, setPage] = useState(1);
    const { loading, err, videos, hasMore } = useVideosList(page);

    return (
        <div>
            {videos.length > 0 && (
                <InfiniteScroll dataLength={videos.length} hasMore={hasMore} next={() => setPage(page + 8)}>
                    {videos.map((video) => video.noq > 0 ? (
                        <Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID} >
                            <Video noq={video.noq} title={video.title} id={video.youtubeID} />
                        </Link>) : (
                        <Video noq={video.noq} title={video.title} id={video.youtubeID} key={video.youtubeID} />
                    )
                    )};
                </InfiniteScroll>)
            };

            {!loading && videos.length === 0 && <div>NO DATA FOUND!!</div>}
            {err && <div>THERE WAS AN ERROR!!</div>}
            {loading && <div>Loading.....</div>}
        </div >
    );
};

export default Videos;