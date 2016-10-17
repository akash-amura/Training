String.prototype.getHumanReadableFormat = function (){

  var ones = [ "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine" ];
  var teens =[ "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen" ];
  var tens = [ "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety" ];
  var thousandsGroups = [ "", " Thousand", " Million", " Billion" ];

  var friendlyInteger = function fi(n,leftDigits,thousands){
    if(n == 0){
      return leftDigits;
    }

    var friendlyInt = leftDigits;
    if(friendlyInt.length > 0){
      friendlyInt += " ";
    }

    if(n < 10){
      friendlyInt += ones[n];
    }else if(n < 20){
      friendlyInt += teens[n - 10];
    }else if(n < 100){
      friendlyInt += fi(n%10,tens[parseInt(n/10)-2],0);
    }else if(n < 1000){
      friendlyInt += fi(n%100,(ones[parseInt(n/100)]+" Hundred"),0);
    }else{
      friendlyInt += fi(n%1000,fi(parseInt(n/1000),"",thousands+1),0);
      if(n % 1000 == 0){
        return friendlyInt;
      }
    }
    return friendlyInt + thousandsGroups[thousands];
  }
  return friendlyInteger(parseInt(this.toString()),"",0);
};

function execute(){
  input = document.getElementById('input').value;
  document.getElementById('output').innerHTML = input.getHumanReadableFormat();
}
