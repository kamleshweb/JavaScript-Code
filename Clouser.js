function Add(){
    let a = 10;
    function Inner(){
        let b = 20;
        let c = a + b;
        console.log(c);
    }
    Inner();
}
Add();