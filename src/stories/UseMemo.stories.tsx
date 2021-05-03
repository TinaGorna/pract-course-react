import React, {useMemo, useState} from "react";

export default {
    title: "useMemo"
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000) {
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }
    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}
