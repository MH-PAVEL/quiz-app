import React from 'react';
import Button from '../Components/Button';
import classes from "../styles/Progress.module.css";
const Progress = ({ percentage, next, prev, submit }) => {
    return (
        <div className={classes.progressBar}>
            <div className={classes.backButton} onClick={prev}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className={classes.rangeArea}>
                <div className={classes.tooltip}>{percentage}% Cimplete!</div>
                <div className={classes.rangeBody}>
                    <div className={classes.progress} style={{ width: `${percentage}%` }}></div>
                </div>
            </div>

            <Button className={classes.next} onClick={percentage === 100 ? submit : next}>
                <span>Next Question</span>
                <span className="material-icons-outlined"> arrow_forward </span>
            </Button>

        </div>
    );
};

export default Progress;