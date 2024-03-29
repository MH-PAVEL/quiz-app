import React from 'react';
import Answers from "../Components/Answers";
import classes from "../styles/Questions.module.css";

const Questions = () => {
    return (
        <div className={classes.question}>
            <div className={classes.qtitle}>
                <span className="material-icons-outlined"> help_outline </span>
                Here goes the question from Learn with Sumit?
            </div>
            <Answers />
        </div>
    );
};

export default Questions;