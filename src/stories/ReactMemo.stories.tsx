import React, {useState} from "react";

export default {
    title: "ReactMemo demo"
}

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const SecretUsers = (props: { users: Array<string> }) => {
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(SecretUsers)

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Ann", "Olga"])

    const addUser = () => {
        const newUsers = [...users, "Sveta " + new Date().getTime()]
        setUsers(newUsers)
    }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <NewMessageCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}



