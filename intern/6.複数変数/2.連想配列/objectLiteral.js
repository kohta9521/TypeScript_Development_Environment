"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var personalData = {
    name: "Tomoko",
    age: 19,
    height: 155.4,
    weight: 53.1
};
console.log("".concat(personalData.name, "\u3055\u3093\u306E\u60C5\u5831"));
for (var key in personalData) {
    console.log("".concat(key, "\u306E\u5024: ").concat(personalData[key]));
}
