const args = process.argv;

// args is an array of command line arguments passed to the Node.js process. The first element is the path to the Node.js executable, and the second element is the path to the JavaScript file being executed. Any additional elements are the command line arguments passed to the script
// which are accessed in entire file through the args variable

for (let i = 2; i < args.length; i++) {
    console.log(`Argument ${i}: ${args[i]}`);
}

// To run this script, you can use the command line and pass arguments like this:
// node app.js arg1 arg2 arg3
// process is the global object in Node.js that provides information about the current process.
// process fucntions such as process.argv, process.env, process.exit(), process.cwd(), process.nextTick(), process.on(), process.stdout, process.stderr, etc. are used to interact with the current process and its environment.
