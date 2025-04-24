import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Iter "mo:base/Iter";
import Time "mo:base/Time";
import Int "mo:base/Int";
import Float "mo:base/Float";

actor Token{
    let owner: Principal = Principal.fromText("frbm3-mprrb-rnnpe-52yvg-otkxr-xijhl-akgmb-7wxvl-7trn2-44egt-fqe");
    let totalSupply : Nat = 1000000000;
    let symbol: Text = "DSHIP";

    // Who owns how much -> hashmap

    // var balances : HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
    private stable var balanceEntries : [(Principal, Nat)] = [];


    // hashmap cant have stable associated with it 
    private var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);

    // balances.put(owner, totalSupply);

    public query func balanceOf(who: Principal) : async Nat {

        let balance : Nat = switch (balances.get(who)) {
            case null 0;
            case (?result) result;
        };
    

        return balance;

    };
    


    public query func getSymbol() : async Text {

            return symbol;


        };

    // public shared(msg) func payOut() : async Text {
    //     // Debug.print(debug_show(msg.caller));
    //     if (balances.get(msg.caller) == null){
    //         let amount = 100;
    //         balances.put(msg.caller, amount);
    //         return "Success!";

    //     } else{
    //         return "Already Claimed!";
    //     }
        


    // };

        // public shared(msg) func payOut() : async Text {
        //     Debug.print(debug_show(msg.caller));
        //     if(balances.get(msg.caller) == null){
        //         let amount = 100;
        //         let result = await transfer(msg.caller, amount);
        //         return result;
        //     } else {
        //         return "Already Claimed"
        //     }
        // };

        public shared(msg) func payOut() : async Text {
            Debug.print(debug_show(msg.caller));

            switch (balances.get(msg.caller)) {
                case (null) {
                    let amount = 10;
                    let result = await transfer(msg.caller, amount);
                    
                    // Update balance after successful transfer
                    balances.put(msg.caller, amount);
                    
                    return result;
                };
                case (_) {
                    return "Already Claimed" ;
                };
            };
        };




        // Message caller is the principal id of the from account
        public shared(msg) func transfer(to: Principal, amount: Nat) : async Text{
            Debug.print(debug_show(msg.caller));
            let fromBalance = await balanceOf(msg.caller);
            if (fromBalance > amount){
                let newFrontBalance : Nat = fromBalance - amount;
                balances.put(msg.caller, newFrontBalance);

                let toBalance = await balanceOf(to);
                let newToBalance = toBalance + amount;
                balances.put(to, newToBalance);


                return "success";
            }else{
                return "Insufficient Funds";
            }

        };

        system func preupgrade() {
            balanceEntries:= Iter.toArray(balances.entries());
            };

        system func postupgrade(){
            balances := HashMap.fromIter<Principal, Nat>(balanceEntries.vals(), 1, Principal.equal, Principal.hash);

            if (balances.size() < 1) {
                balances.put(owner, totalSupply);
            }

            };

    stable var currentValue : Float = 300;
  // Debug.print(debug_show(currentValue));
  currentValue:= 300;
  Debug.print(debug_show(currentValue));
  let id = 123456789123;
  // Debug.print(debug_show(currentValue));
  // Debug.print("Hello");
  // Debug.print(debug_show(id));

  stable var startTime = Time.now();
  // startTime := Time.now();
  Debug.print(debug_show(startTime));



  //   public func function_name(arugument_name1: datatype,...){
  //   currentValue += amount;
  //   Debug.print(debug_show(currentValue));
  // };
  

  public func topUp(amount: Float){
    currentValue += amount;
    Debug.print(debug_show(currentValue));
    // return : Text "success";
  };

  public func withdraw(amount:Float){

    let tempValue:Float = currentValue - amount;

    if (tempValue >= 0){
       currentValue -= amount;
       Debug.print(debug_show(currentValue));
    }else{
      Debug.print("Amount too large, currentValue is less than zero");
    }
    //  currentValue -= amount;
    //  Debug.print(debug_show(currentValue));

  };


  public query func checkBalance(): async Float{
    return currentValue;
  };


  //   public func topUp(){
  //   currentValue +=1;
  //   Debug.print(debug_show(currentValue));
  // };
  

  public func compound(){
    let currentTime = Time.now();
    let timeElapsedNS= currentTime - startTime;
    let timeElapsedS = timeElapsedNS/1000000000;
    currentValue := currentValue * (1.00000000158 **Float.fromInt(timeElapsedS));
    startTime := currentTime;
  };

        


            // return "success";





};

// actor dBank{
//   stable var currentValue : Float = 300;
//   // Debug.print(debug_show(currentValue));
//   currentValue:= 300;
//   Debug.print(debug_show(currentValue));
//   let id = 123456789123;
//   // Debug.print(debug_show(currentValue));
//   // Debug.print("Hello");
//   // Debug.print(debug_show(id));

//   stable var startTime = Time.now();
//   // startTime := Time.now();
//   Debug.print(debug_show(startTime));



//   //   public func function_name(arugument_name1: datatype,...){
//   //   currentValue += amount;
//   //   Debug.print(debug_show(currentValue));
//   // };
  

//   public func topUp(amount: Float){
//     currentValue += amount;
//     Debug.print(debug_show(currentValue));
//     // return : Text "success";
//   };

//   public func withdraw(amount:Float){

//     let tempValue:Float = currentValue - amount;

//     if (tempValue >= 0){
//        currentValue -= amount;
//        Debug.print(debug_show(currentValue));
//     }else{
//       Debug.print("Amount too large, currentValue is less than zero");
//     }
//     //  currentValue -= amount;
//     //  Debug.print(debug_show(currentValue));

//   };


//   public query func checkBalance(): async Float{
//     return currentValue;
//   };


//   //   public func topUp(){
//   //   currentValue +=1;
//   //   Debug.print(debug_show(currentValue));
//   // };
  

//   public func compound(){
//     let currentTime = Time.now();
//     let timeElapsedNS= currentTime - startTime;
//     let timeElapsedS = timeElapsedNS/1000000000;
//     currentValue := currentValue * (1.00000000158 **Float.fromInt(timeElapsedS));
//     startTime := currentTime;


//   };
// }



    







