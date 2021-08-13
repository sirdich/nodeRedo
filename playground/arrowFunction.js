// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x;
// };

// const square = (x) => x * x;

// console.log(square(3));

const eventOb = {
  name: 'Birthday Party',
  guestList: ['Andrew', 'Jen', 'Nicholas'],
  printGuestList() {
    console.log('guest list for ' + this.name);
    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending the ' + this.name);
    });
  },
};

eventOb.printGuestList();
