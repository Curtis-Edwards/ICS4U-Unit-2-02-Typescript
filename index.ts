/**
 * This is the standard index.ts starting point.
 *
 * author  Curtis Edwards
 * version 1.0
 * since   2024-03-19
 */
import { CurtisStack } from './CurtisStack'

let fruits = new CurtisStack()
fruits.push("apple")
fruits.push("banana")
fruits.push("cherry")
console.log("fruits: " + fruits.showStack())

let colours = new CurtisStack()
colours.push("red")
colours.push("green")
colours.push("blue")
console.log("colours: " + colours.showStack())

let shapes = new CurtisStack()
shapes.push("square")
shapes.push("triangle")
shapes.push("circle")
console.log("shapes: " + shapes.showStack())

console.log("\nDone.")
