// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #

let hash ="";

for (let i = 1; i <= 4; i++) {
    hash += "#";
    console.log(hash); 
}

for (let i = 3; i >= 1; i--) {
    hash ="";
    for (let y = 1; y <= i; y++) {
        hash += "#";
    }
    console.log(hash);
}