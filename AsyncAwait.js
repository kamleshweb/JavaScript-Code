async function fetchData(){
    let data = await fetch("URL");
    console.log(data);
}
fetchData();