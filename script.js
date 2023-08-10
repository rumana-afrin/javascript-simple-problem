 
function cubeNumber(number) {
    if(typeof number !== 'number'){
        return "not a number";
    }else{
        let cube
        cube = Math.pow(number, 3)
        return cube;
    }
}
console.log(cubeNumber(2));
 

function matchFinder(string1, string2) {
    if(typeof string1 == 'string' && typeof string2 == 'string'){
        let result = string1.includes(string2);
        return result;
    }else{
        return "the input is not a string"
    }

}

console.log(matchFinder(25, 123));

function sortMaker(arr) {
    if(arr[0] < 0 || arr[1] <0){
        return "Invalid Input";
    }else if (arr[0] == arr[1]){
        return "equal";
    }else{
        result = arr.sort();
        result.reverse();
        return result;
    }
}

let arrayvalue = sortMaker([0,2]);
console.log(arrayvalue);


function findAddress(obj) {
   let street = obj.street;
   let house = obj.house;
   let society = obj.society;
   let address = street + ',' + house + "," + society;
   return address; 
}
let houseAddress = {street: "10", house:"15A", society:"Earth Perfect"}
let output = findAddress(houseAddress);
console.log(output);


function canPay(changeArray, totalDue) {
   if (changeArray.length === 0) {
      return "array is empty";
   }

   var arr1 = changeArray;
   var res = 0;
   for (i = 0; i < arr1.length; i++) {
      res += arr1[i];
   }

   if (res >= totalDue) {
      return true;
   } else {
      return false;
   }
}

retail_amount = [150, 300, 100, 50];
chips_price = 250;

result = canPay(retail_amount, chips_price);

console.log(result);



