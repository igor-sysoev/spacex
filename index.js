// class sequence {
//   constructor(methods) {
//     this.methods = methods;
//     this.res = 0;
//   }

//   get calculate() {
//     return this.res;
//   }

// }

const add = (x = 0, y = 0) => x + y;

const double = (x = 0) => add(x, x);

const sequence = ({ add, double }) => {
  return {
    result: 0,
    add: function (x, y) {
      this.result += add(x, y);
      return this;
    },
    double: function () {
      this.result = double(this.result);
      return this;
    },
    calculate: function () {
      console.log(this.result);
      return this.result;
    },
  };
};

let s = sequence({ add, double });

s.add(4, 5).add(5).add(4).add(7).double().double().calculate();
