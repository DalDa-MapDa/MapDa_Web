import React, { useState, useEffect } from 'react';
import privacyTermData from '../../data/privacyTerm.json';
import styles from './TermScreenStyles.module.css';

function PrivacyTerm() {
    const [terms, setTerms] = useState([]);

    useEffect(() => {
        setTerms(privacyTermData );
    }, []);

    return (
        <div className={styles.termBody}>
            <br /><br />
            <h1 className={styles.TermPageH1}>맵다(Map:Da) 개인정보처리방침</h1>
            <br />
            <b><a href="mailto:dcd.dalda@gmail.com">메일 보내기</a></b>
            <br /><br />
            <br /><br />
            <h1 className={styles.TermPageH1}>이용약관</h1>
            {terms.map((term, index) => (
                <div key={index} className={styles.content}>
                    <h2 className={styles.TermPageH2}>{term.소제목}</h2>
                    <p>{term.내용}</p>
                </div>
            ))}
        </div>
    );
}

export default PrivacyTerm;
