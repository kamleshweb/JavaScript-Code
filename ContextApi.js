import {useState, useContext, createContext} from 'react';

const userContext = createContext();

const Component1 = () =>{

    const [user, setUser] = useState("Kamlesh");

    return(
        <>
        <userContext.Provider value={user}>
            <h1>{`Hello ${user}`}</h1>
            <Component2 />
        </userContext.Provider>
        </>
    )
}
const Component2 = () => {

    return(
        <>
        <h1>Hello user Component2</h1>
        <Component3 />
        </>
    )
}
const Component3 = () => {
    const user = useContext(userContext);

    return(
        <>
        <h1>{`Hello ${user} again`}</h1>
        </>
    )
}