import React, { useEffect, useState } from 'react';
import './Welcome.css'
import Main from '../Department/Main';

const Welcome = ({ selectedDepartment, selectedSemester, onDepartmentSelect, onSemesterSelect }) => {
    const [words, setWords] = useState(['Welcome to Student Corner', 'Find your needs here', 'Made with Love ❤️']);
    const [colors, setColors] = useState(['tomato', 'rebeccapurple', 'lightblue']);
    const [visible, setVisible] = useState(true);
    const [letterCount, setLetterCount] = useState(1);
    const [x, setX] = useState(1);
    const [waiting, setWaiting] = useState(false);

    useEffect(() => {
        const interval1 = setInterval(() => {
            if (letterCount === 0 && waiting === false) {
                setWaiting(true);
                setWords(prevWords => {
                    const usedWord = prevWords.shift();
                    prevWords.push(usedWord);
                    return [...prevWords];
                });
                setColors(prevColors => {
                    const usedColor = prevColors.shift();
                    prevColors.push(usedColor);
                    return [...prevColors];
                });
                setX(1);
                setLetterCount(prevLetterCount => prevLetterCount + x);
                setWaiting(false);
            } else if (letterCount === words[0].length + 1 && waiting === false) {
                setWaiting(true);
                setTimeout(() => {
                    setX(-1);
                    setLetterCount(prevLetterCount => prevLetterCount + x);
                    setWaiting(false);
                }, 500);
            } else if (waiting === false) {
                setLetterCount(prevLetterCount => prevLetterCount + x);
            }
        }, 80);

        const interval2 = setInterval(() => {
            setVisible(prevVisible => !prevVisible);
        }, 400);

        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
        };
    }, [letterCount, waiting, words, x]);

    return (
        <>
            <div className='container'>
                <span id="text" style={{ color: colors[0] }}>{words[0].substring(0, letterCount)}</span>
                <div className={visible ? 'console-underscore' : 'console-underscore hidden'} id="console">&#95;</div>
            </div>
            <div className='header'>
                Previous year question papers
            </div>
            <div className='content'>
            <Main
          selectedDepartment={selectedDepartment}
          selectedSemester={selectedSemester}
          onDepartmentSelect={onDepartmentSelect}
          onSemesterSelect={onSemesterSelect}
        />
            </div>
        </>
    );
};

export default Welcome;
