# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @Be-Rude/lotide`

**Require it:**

`const _ = require('@Be-Rude/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the head of an array and asserts it against the expected output.
* `tail(...)`: returns the tail of an array and assert it's length against the expected array length.
* `middle(...)`: returns the middle value(s) of an array and asserts against the expected value(s).
* `eqArrays(...)`: Takes in 2 arrays and asserts them to determine if they are equal.
* `assertEqual(...)`: Take in 2 values and asserts the to determine if they are strictly equal.
* `assertArraysEqual(...)`: Calls `eqArrays` with 2 arrays as arguments, then asserts the result against the expected output.