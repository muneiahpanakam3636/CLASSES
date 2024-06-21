class Account{
    acc_Id;
    acc_name;
    acc_Bal = 0;
    min_bal = 500;
    constructor(id,name,Amount){
        this.acc_Id=id;
        this.acc_name =name;
        this.acc_Bal = Amount;
    }
}
let a1 = new Account();
console.log(a1);



