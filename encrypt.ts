import { createHash } from "https://deno.land/std@0.116.0/hash/mod.ts";
import * as inputManager from "https://deno.land/x/input@2.0.3/index.ts";

const algos = [
  "md2",
  "md4",
  "md5",
  "ripemd160",
  "ripemd320",
  "sha1",
  "sha224",
  "sha256",
  "sha384",
  "sha512",
  "sha3-224",
  "sha3-256",
  "sha3-384",
  "sha3-512",
  "keccak224",
  "keccak256",
  "keccak384",
  "keccak512",
  "blake3",
] as const;

type algoTypes = typeof algos[number];
console.log(`The supported algorithms are :- \n${algos.join(", ")}`);

const inp = new inputManager.default();

const choiceString = await inp.question("Enter the algorithm to use");
const algoOfChoice = choiceString as algoTypes;

const string = await inp.question("Enter the string to encode");

const encoded = createHash(algoOfChoice).update(string);
console.clear();
console.log(`The encoded string is :- \n${encoded.toString()}`);
