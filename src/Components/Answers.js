import React from 'react';
import classes from "../styles/Answers.module.css";
import CheckBox from './CheckBox';

const Answers = ({ options = [], handleAnsChange }) => {
    return (
        <div className={classes.answers}>
            {options.map((option, index) => (
                <CheckBox className={classes.answer} text={option.title}
                    value={index} checked={option.checked} onChange={(e) => handleAnsChange(e, index)} />
            ))}
        </div>
    )
};

export default Answers;