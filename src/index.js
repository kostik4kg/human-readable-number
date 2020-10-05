module.exports = function toReadable (number) {
   let numbers= ['zero','one','two','three','four','five','six','seven','eight','nine','ten',
       'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let nambDecimal = ['.','.','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let numbHangrd = 'hundred';
    if(typeof(number) === 'number'){
        if(number < 20){
            return numbers[number];
        }
        else if(number/100 ===1){
            return "one hundred";
        }
        else if((number > 19) && (number < 101) && (number % 10 === 0)){
            return nambDecimal[parseInt(number.toString()[0])];
        }
        else if(number >20 && number < 100){
            return nambDecimal[(Math.floor(number / 10))] + ' ' +  numbers[parseInt(number.toString()[1])];
        }
        else if ((number > 100 && number < 120) || (number > 900 && number < 920) || (number > 800 && number < 820) || (number > 700 && number < 720) || (number > 600 && number < 620) || (number > 500 && number < 520) || (number > 400 && number < 420) || (number > 300 && number < 320) || (number > 200 && number < 220)) {
            return numbers[Math.floor(number / 100)] + ' ' + numbHangrd + ' ' + numbers[parseInt(number.toString()[1] + number.toString()[2])];
        }
        else if ((number > 99 && number < 1000) && number % 10 === 0 && number % 100 !== 0 ) {
            return numbers[Math.floor(number / 100)] + ' ' + numbHangrd + ' ' + nambDecimal[parseInt(Math.floor(number / 10).toString()[1])];
        }
        else if ((number > 120 && number < 1000) && number % 100 === 0) {
            return numbers[Math.floor(number / 100)] + ' ' + numbHangrd;
        }
        else if (number > 120 && number < 1000) {
            return numbers[Math.floor(number / 100)] + ' ' + numbHangrd + ' ' + nambDecimal[parseInt(Math.floor(number / 10).toString()[1])] + ' ' + numbers[parseInt(number.toString()[2])];
        }
    }
}
