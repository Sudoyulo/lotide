# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @yulokevin/lotide`

**Require it:**

`const _ = require('@yulokevin/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns an array of the first of a given array
* `tail`: returns an array of the tail of a given array
* `middle`: returtns an array of the middle elements of a given array
* `assertArraysEqual`: prints a sentence dependant on if two arrays are equal
* `assertEqual`: returns a bool of if two arguments are equal
* `countLetters,`: returns an object of letter frequency
* `countOnly`: returns a number of the requency of the argument in a list
* `eqArrays`: returns bool if two arrays are equal using recursion
* `eqObjects`: returns bool if two objects are equal
* `findKeys`: returns key name of argument expression (stars = 2)
* `findKeyByValue`: returns name of argument value
* `flatten`: removes nested arrays and returns one flat array
* `letterPositions`: returns an object with letters are key and the position in value
* `map`: rewrites given array to a function (x -> x.length) 
* `takeUntil`: returns an array of given array until the given keyword
* `fwithout`: returns array without list of toberemoved items