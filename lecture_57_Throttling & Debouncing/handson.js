// Throtalling function 


function throttle(fn, delay){
    let lastcall =0;

    return function (...args){
    const now =Date.now()
    if (now -lastcall<delay){
        return;
    }
    lastcall=now
    return fn(...args)
};
}

function sendChatMessage(message){
    console.log (`sending Message`, message)

}
const sendChatMessageWithslowerMode= throttle(sendChatMessage,2000);

sendChatMessageWithslowerMode("hi");
sendChatMessageWithslowerMode("hello");
sendChatMessageWithslowerMode("hello ji");
sendChatMessageWithslowerMode("hello ji mam");
sendChatMessageWithslowerMode("hello ji mam how are you");


// function throttle(fn ,delay){
//     let isAllowed =true;

//     return function(){
//         if (!isAllowed) true;
//         fn ();
//         isAllowed =false;
//         setTimeout(()=>{
//             isAllowed=true;
//         },delay);
//     };

// }
// const throttledScroll=throttle(handleScroll,3000)




// debouncing function 


function debounce(fn ,delay){
    let timerId;

    return function (...args){
    
    clearInterval(timerId)// clear the last call
    timerId=setTimeout(()=>{
        fn(...args)

    },delay)

    };

}

const search= (query)=>{
    console.log(`searching for `,query);
    
};

const searchWithDebounce= debounce(search,2000);

searchWithDebounce("ha")
searchWithDebounce("har")
searchWithDebounce("hard")
searchWithDebounce("hard j")
searchWithDebounce("hard js")
searchWithDebounce("hard js questions")