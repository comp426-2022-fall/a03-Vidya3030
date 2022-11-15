#! /usr/bin/env node

import { roll } from "/lib/roll.js"
import minimist from "minimist";

const args = minimist(process.aegv.slice(2));

const sides = args.sides;
const dice = args.dice;
const rolls = args.rolls;

console.log(roll(sides, dice, rolls));