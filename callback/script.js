function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Allukachalu", sayBye);

// Async Callback Example
setTimeout(function(){
    console.log("Task finished");
}, 2000);