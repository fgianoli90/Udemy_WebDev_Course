//jshint esversion:6

const superheroes= require("superheroes");
const supervillains= require("supervillains");

let mysuperheroName1=superheroes.random();
let mysuperheroName2=superheroes.random();
let mysupervillainName=supervillains.random();

console.log("who will triumph in the ultimate battle between GOOD and EVIL: ", mysuperheroName1,mysuperheroName2, " vs ", mysupervillainName)

