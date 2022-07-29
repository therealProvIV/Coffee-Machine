let water1 = 400;
let milk1 = 540;
let beans1 = 120;
let cups1 = 9;
let money1 = 550;
function remaining() {
  console.log(`The coffee machine has:
${water1} ml of water
${milk1} ml of milk
${beans1} g of coffee beans
${cups1} disposable cups
$${money1} of money
`)
};
function fill () {
    let wateradd = prompt("Write how many ml of water you want to add:");
    water1 += Number(wateradd);
    let milkadd = prompt("Write how many ml of milk you want to add:");
    milk1 += Number(milkadd);
    let beansadd = prompt("Write how many grams of coffee beans you want to add:");
    beans1 += Number(beansadd);
    let cupsadd = prompt("Write how many disposable coffee cups you want to add:");
    cups1 += Number(cupsadd);
    console.log(`The coffee machine has:
${water1} ml of water
${milk1} ml of milk
${beans1} g of coffee beans
${cups1} disposable cups
$${money1} of money
`);
};
function buy () {
    let purchase = prompt("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back -- to main menu");
    switch (purchase) {
      case "1":
        if (water1 >= 250) {
          if (beans1 >= 16) {
            if (cups1 >= 1) {
             console.log("I have enough resources, making you a coffee!");
                                water1 -= 250;
                                beans1 -= 16;
                                money1 += 4;
                                cups1 -= 1; 
            } else {
              console.log("Sorry, not enough cups!");
            };
          } else {
            console.log("Sorry, not enough beans!");
          };
        } else {
          console.log("Sorry, not enough water!");
        };
        break;
      case "2":
        if (water1 >= 350) {
          if (milk1 >= 75) {
            if (beans1 >= 20) {
              if (cups1 >= 1) {
               console.log("I have enough resources, making you a coffee!");
                                    water1 -= 350;
                                    milk1 -= 75;
                                    beans1 -= 20;
                                    money1 += 7;
                                    cups1 -= 1; 
              } else {
                console.log("Sorry, not enough cups!");
              };
            } else {
              console.log("Sorry, not enough beans!");
            };
          } else {
            console.log("Sorry, not enough milk!");
          };
        } else {
          console.log("Sorry, not enough water!");
        };
        break;
      case "3":
        if (water1 >= 200) {
          if (milk1 >= 100) {
            if (beans1 >= 12) {
              if (cups1 >= 1) {
               console.log("I have enough resources, making you a coffee!");
                                    water1 -= 200;
                                    milk1 -= 100;
                                    beans1 -= 12;
                                    money1 += 6;
                                    cups1 -= 1;
              } else {
                console.log("Sorry, not enough cups!");
              };
            } else {
              console.log("Sorry, not enough beans!");
            };
          } else {
            console.log("Sorry, not enough milk!");
          };
        } else {
          console.log("Sorry, not enough water!");
        };
        break;
      case "back":
        break;
};
};
function take () {
    console.log(`I gave you $${money1}
The coffee machine has:
${water1} ml of water
${milk1} ml of milk
${beans1} g of coffee beans
${cups1} disposable cups
$0 of money`);
money1 = 0;
};
while ((answer = prompt("Write action (buy, fill, take, remaining, exit):")) !== "exit") {
switch (answer) {
  case "fill":
    fill();
    break;
  case "buy":
    buy();
    break;
  case "take":
    take();
    break;
    case "remaining":
    remaining();
    break;
};
  continue;
}; 
