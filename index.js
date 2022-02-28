// Code your solution in this file!

const hq = 42;

function distanceFromHqInBlocks(blocks){
     if (blocks > hq){
         return blocks - hq;
     } else {
         return hq - blocks;
     }
}

function distanceFromHqInFeet (blocks){
   let feet = distanceFromHqInBlocks(blocks) * 264;
     return feet;
}

function distanceTravelledInFeet (start, destination) {
        if (destination > start){
            return (destination - start) * 264;
        } else {
            return (start - destination) * 264;
        }   
}

function calculatesFarePrice (start, destination) {
       let distance = distanceTravelledInFeet(start, destination)
    if (distance < 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02;
    } else if (distance < 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
}