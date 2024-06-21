class Account{
    acc_Id;
    acc_name;
    acc_Bal=0;
    min_bal = 500;
    constructor(id,name,Amount){
        this.acc_Id = id;
        this.acc_name = name;
        this.acc_Bal = Amount;


    }
    open_Account(){
        console.log("account opened successfully");
    }
    deposite_Amount(amount){
        this.acc_Bal = this.acc_Bal+amount
    }
    withdrawl_Amount(amount){
        this.acc_Bal = this.acc_Bal-amount
    }
    get_bal(){
        return this.acc_Bal-this.min_bal
    }
}
 let a1 =new Account(101,"muni",5000);
 let a2 = new Account(102,"keerthi",6000);
console.log(a1);

a1.deposite_Amount(10000);
a1.deposite_Amount(10);
console.log(a1);

a1.withdrawl_Amount(1000);
a1.withdrawl_Amount(10);
console.log(a1);

console.log("**********");

console.log(a1.get_bal());

console.log(a1.get_bal());

console.log(a1.get_bal());

