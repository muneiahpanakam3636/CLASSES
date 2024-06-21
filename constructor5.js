class Account{
    acc_Id;
    acc_name;
    acc_Bal = 0;
    min_bal = 500;
    constructor(id,name,Amount){
        this.acc_Id=id;
        this.acc_name=name;
        this.acc_Bal= Amount;
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
    get_Bal(){
        return this.acc_Bal -this.min_bal 
    }

}
let a1 = new Account(101,"rahul",5000);
let a2 = new Account(102,"priya",6000);
console.log(a1);
console.log(a2);

a1.deposite_Amount(50000);
a1.deposite_Amount(50);
console.log(a1);

a1.withdrawl_Amount(2000);
a1.withdrawl_Amount(50);
console.log(a1);

console.log("********************");

console.log(a1.get_Bal());


