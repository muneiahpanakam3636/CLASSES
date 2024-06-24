class Account{
    acc_name;
    acc_email;
    acc_addr;
    constructor(name,email,addr){
        this.acc_name = name;
        this.acc_email = email;
        this.acc_addr = addr
        // console.log("account class - constructor")
    }
}
class SA extends Account{
    acc_id;
    acc_bal=0;
    min_bal=500
    constructor(id,name,email,amount,addr){
        super(name,email,addr)
        this.acc_id = id
        this.acc_bal = amount;
    //     console.log("SA class - constructor")
    }
    deposite_amount(){
        
    }
    get_bal(){
        return this.acc_bal-this.min_bal;
        
    }
    
}
let SA1 = new SA(101,"rahul","rahul@gmail",5000,"wayanad");
console.log(SA1);
 
    