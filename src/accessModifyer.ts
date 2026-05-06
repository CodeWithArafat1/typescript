class BankAccount {
  readonly userId: number;
  userName: string;
  private userBlance: number;

  constructor(userId: number, userName: string, userBlance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBlance = userBlance;
  }

  addBlance(ammount: number) {
    this.userBlance += ammount;
  }
}

const nillAccount = new BankAccount(11, "Nill", 20);
nillAccount.addBlance(400);
nillAccount.addBlance(100);

console.log(nillAccount);
