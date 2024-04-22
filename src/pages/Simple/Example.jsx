import React from 'react';
import './styled.css'
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Example = () => {
    gsap.registerPlugin(useGSAP);
    const container = useRef();

    const { contextSafe } = useGSAP({ scope: container });

    const onEnter = contextSafe(({ currentTarget }) => {
        gsap.to(currentTarget, { rotation: "+=360" });
    });

    // useGSAP(() => {
    //   // gsap code here...
    //   gsap.to(".box", { rotation: "+=360", duration: 3 });

    // }, { scope: container }); // <-- scope is for selector text (optional)

    return (
        <>
            <div ref={container}>
                <h2>useGSAP()</h2>
                <div className="box" onClick={onEnter}>selector</div>
            </div>
        </>
    )
}
