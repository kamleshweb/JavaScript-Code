import {useState, useEffect} from 'react';
import axios from 'axios';

const FetchData = () => {
    const [data, setData] = useState([]);

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async() => {
        try{
            const response = await axios.get("URL");
            setData(response);
        }catch(error){
            console.error(error);
        }
    }
    
    return(
        <>
        <h1>Display Data Here</h1>
        {data.map((item) => {
            return (
                <h2>{item.name}</h2>
            )
        })}
        </>
    )
}
export default FetchData;


