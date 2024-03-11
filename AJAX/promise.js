// promise
/**
 * Pending
 * Fulfilled
 * Rejected
 */

const promise = new Promise(
    function(resolve, reject) {
        let machineCoffee = true
        if(machineCoffee){
            return resolve('A cup coffee')
        }
        return reject('nothing')
    }
)

//promise chain
// promise
//     .then(function(data){
//         console.log(data);
//         return data
//     })
//     .then(function(data){
//         console.log(`${data} milk`);
//     })
//     .catch(function(error){
//         console.log(error);
//     })
//     .finally(function(){
//         console.log("Done");
//     })
async function service(){
    let data = await promise
    console.log(data);
}

service()