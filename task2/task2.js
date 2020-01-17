const atm = (num) => {
    let sum = num;
    let fiveThousand = null;
    let thousand = null;
    let fiveHundred = null;
    let hundred = null;
    if(sum % 100 === 0) {
      fiveThousand = parseInt(sum/5000);
      sum = sum % 5000;
      thousand = parseInt(sum/1000); 
      sum = sum % 1000;
      fiveHundred = parseInt(sum/500);
      sum = sum % 500;
      hundred = parseInt(sum/100);
      sum = sum % 100;
      console.log(`fiveThousand ${fiveThousand}\nthousand ${thousand}\nfiveHundred ${fiveHundred}\nhundred ${hundred} `)
  }

    
}
atm(124800)