
const Debounce = () => {

    const handleChange = () => {
        console.log("API is calling...");
    }

    const debounce = (fn, delay) => {
        let timer;
        return function (...args){
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        }
    }

    return(
        <>
        <input type = 'text' onChange={debounce(handleChange, 2000)}/>
        </>
    )
}
export default Debounce;