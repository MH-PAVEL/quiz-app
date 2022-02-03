import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import UseAnswers from '../../Hooks/useAnswers';
import Analysis from '../Analysis';
import Summary from '../Summary';

const Result = () => {
    // const { id } = useParams();
    // const { state } = useLocation();
    // const { qna } = state;
    const { state } = useLocation();
    const { qna } = state;
    const { id } = useParams();
    const { loading, err, ans } = UseAnswers(id);
    return (
        <>
            {loading && <div>Loading...</div>}
            {err && <div>Error....</div>}
            {ans && ans.length > 0 && (
                <>
                    <Summary />
                    <Analysis />
                </>
            )}

        </>
    );
};

export default Result;