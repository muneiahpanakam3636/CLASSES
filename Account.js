class Account{
    acc_bal =0;
    min_bal =500;
    
    deposit_Amount(amount){
        this.acc_bal = this.acc_bal+amount;
    }
}
let a1 = new Account();
   a1.deposit_Amount(5000);
   a1.deposit_Amount(15);
   
let a2 = new Account();
  a2.deposit_Amount(15000);
  a2.deposit_Amount(50);
  console.log(a1);
  console.log(a2);
