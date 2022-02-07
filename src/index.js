module.exports = function toReadable (number) {
    let numDecOne = ["zero","one","two","three","four","five","six","seven","eight","nine"];
    let numDecTwo = ["ten", "eleven", "twelve" ,"thirteen", "fourteen", "fifteen", "sixteen", "seventeen","eighteen", "nineteen"];
    let decThree =  ["twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    const arrInt = String(number).split("").map((el) => {return Number(el);});
    if(arrInt.length == 1){
        return numDecOne[arrInt[0]];

    }else if((arrInt.length == 2) && (arrInt[0] == 1)){
        return numDecTwo[arrInt[1]];
    }
    else if((arrInt.length == 2) && (arrInt[1] == 0)){
        return decThree[arrInt[0]-2];
    }else if((arrInt.length == 2) && (arrInt[1] != 0)){
        return decThree[arrInt[0]-2] + " " + numDecOne[arrInt[1]];
    }else if(arrInt.length == 3){
        let endNum = Number(arrInt[1].toString() + arrInt[2].toString());
        if (endNum == 0){
            return toReadable(arrInt[0]) + " "+ "hundred";
        }else{
            return toReadable(arrInt[0]) + " "+ "hundred" + " " + toReadable(endNum);
        }
        // let ret = ((arrInt[2] && arrInt[1])) == 0 ? toReadable(arrInt[0]) + " "+ "hundred" : toReadable(arrInt[0]) + " "+ "hundred" + " " + toReadable(endNum);
    }

}

