"use client";
import styles from "./card.module.css";
import { useState } from "react";

// Make a interface to define props and their types and use them as arguments in the component
interface CardProps {
    titleText: string,
    amountOrRateText: number
}

function Card({ titleText, amountOrRateText }: CardProps) {

    const [marginTop, setMarginTop] = useState("");
    const [title, setTitle] = useState(titleText);

    // Here I may implement the async fetch user details in the dashboard then use the amount/percentage as a
    // argument when this component is called.
    const [amountOrRate, setAmountOrRate] = useState(amountOrRateText);

    function getMarginTop() {
        setMarginTop("35");
    }

    function getTitle() {
        setTitle(titleText);
    }

    function getTotalIncome() {
        setAmountOrRate(amountOrRateText);
    }

    return (
        
        <div className={styles.Card}>
            <p id={styles.titleText} onChange={() => getTitle()}>{title}</p>
            <p id={styles.amount} onChange={() => getTotalIncome()}>${amountOrRate}</p>
            <p id={styles.subText}>This month</p>
            {/*<div className={"px" + marginTop}></div>*/}
        </div>
    );
}

export default Card;