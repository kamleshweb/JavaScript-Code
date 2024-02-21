const isMomHappy = false;

function MomGift(){
    return new Promise(function(resolve, reject){
        if(isMomHappy){
            let phone = {
                name:"iPhone",
                price: 80000
            }
            resolve(phone);
        }else{
            reject(new Error("Have you seen your score card"));
        }
    })
}
let surprize = MomGift();
surprize.then((successresponse) => {
    console.log(successresponse);
})
.catch((failureresponse) => {
    console.log(failureresponse);
})