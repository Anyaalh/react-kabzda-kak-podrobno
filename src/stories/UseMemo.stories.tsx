import React, {useMemo, useState} from "react";

export default {
    title: "UseMemo demo"
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(()=> {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while(fake < 100000000){
                fake++
                const fakeValue = Math.random()
            }
            resultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const SecretUsers = (props: { users: Array<string> }) => {
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(SecretUsers)

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Ann", "Olga"])

    const newArray =  useMemo(()=> {
        return users.filter(u=> u.indexOf("n") > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, "Svelana " + new Date().getTime()]
        setUsers(newUsers)
    }


    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => addUser()}>+</button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}