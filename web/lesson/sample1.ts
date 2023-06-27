class User {
  constructor(public userName: string, public userAddress: string) {
    console.log("constructor");
  }
  getInfo() :string {
    return "名前 : " + this.userName + "住所 : " + this.userAddress;
  }
};

var user = new User('田中', "東京都");
var str = user.getInfo();
console.log(str);