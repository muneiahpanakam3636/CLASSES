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

}
let a1 = new Account(101,"rahul",5000);
let a2 = new Account(102,"priya",6000);
console.log(a1);
console.log(a2);