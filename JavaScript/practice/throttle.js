function throttle(fn, delay) {
    let shouldWait = false;

    return function (...args) {

        if (shouldWait) {
            return;
        }

        fn(...args);

        shouldWait = true;

        setTimeout(() => {
            shouldWait = false;
        }, delay);

    };
}
function search(text) {
    console.log("Searching:", text);
}

const throttleSearch = throttle(search, 2000);

throttleSearch("r");
throttleSearch("re");
throttleSearch("rea");
throttleSearch("reac");
throttleSearch("react");

// Throttling is a technique that limits how often a 
// function can execute. Once the function runs, it 
// cannot run again until the specified time interval 
// has passed.

//for rate limiting because it limits how many user can 
// request can be made within specific time period.