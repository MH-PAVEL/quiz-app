import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import React, { useEffect, useReducer, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from "../../Contexts/AuthContext";
import UseQuestions from '../../Hooks/useQuestions';
import Answers from '../Answers';
import MiniPlayer from '../MiniPlayer';
import Progress from '../Progress';

const initialState = null;
const reducer = (state, action) => {
    switch (action.type) {
        case "questions":
            action.value.forEach(question => {
                question.options.forEach(option => {
                    option.checked = false;
                })
            });
            return action.value;
        case "answer":
            const questions = _.cloneDeep(state);
            questions[action.questionID].options[action.optionIndex].checked = action.value;
            return questions;
        default:
            return state;
    }
};
const Quiz = () => {
    const { id } = useParams();
    const { loading, err, questions } = UseQuestions(id);
    const [currentQuestions, setCurrentQuestions] = useState(0);
    const [qna, dispatch] = useReducer(reducer, initialState);
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch({
            type: "questions",
            value: questions,
        })
    }, [questions]);
    function handleAnsChange(e, index) {
        dispatch({
            type: "answer",
            questionID: currentQuestions,
            optionIndex: index,
            value: e.target.checked,
        })
    }

    // handle when user clicks on the next question button to see the next questions
    function nextQuestion() {
        if (currentQuestions + 1 < questions.length) {
            setCurrentQuestions((prevCurrentQuestion => prevCurrentQuestion + 1))
        }
    }

    // handle when user clicks on the previous question button to see the previous questions
    function prevQuestion() {
        if (currentQuestions >= 1 && currentQuestions <= questions.length) {
            setCurrentQuestions((prevQuestion => prevQuestion - 1))
        }
    }

    // submit quiz

    async function submit() {
        const { uid } = currentUser;
        const db = getDatabase();
        const resultRef = ref(db, `result/${uid}`);
        await set(resultRef, {
            [id]: qna,
        })

        navigate(`/result/${id}`, {
            state: {
                qna
            }
        });
    };
    // calculate percentage

    const percentage = questions.length > 0 ? ((currentQuestions + 1) / questions.length * 100) : 0;
    return (
        <>
            {loading && <div>Loading...</div>}
            {err && <div>Error....</div>}
            {!loading && !err && qna && qna.length > 0 && (
                <>
                    <h1>{qna[currentQuestions].title}</h1>
                    <h4>Question can have multiple answers</h4>
                    <Answers options={qna[currentQuestions].options} handleAnsChange={handleAnsChange} />
                    <Progress percentage={percentage} next={nextQuestion} prev={prevQuestion} submit={submit} />
                    <MiniPlayer />
                </>
            )}

        </>
    );
};

export default Quiz;