/**
 * The CurtisStack Class.
 *
 * author  Curtis Edwards
 * version 1.0
 * since   2024-03-19
 */

export class CurtisStack {

  /*
  * The constructor for the CurtisStack string stack class.
  */
  constructor() {
    self.stackAsList = []
  }

  /*
  * This method pushes a string onto the stack.
  */
  public push(input) {
    self.stackAsList.push(input)
  }

  /*
  * This method returns the stack as a string.
  */
  public get showStack() {
    let values = ""
    for (let counter = 0; counter < self.stackAsList.length; counter++) {
      values = values + self.stackAsList[counter] + ", "
    }
    values = values.substring(0, values.length-2)
    return values
  }

  /*
  * This method pops a string from the stack.
  */
  public pop() {
    let popedItem = ""
    if (self.stackAsList[0]) {
      popedItem = self.stackAsList[self.stackAsList.length - 1]
    } else {
      popedItem = "nothing to remove"
    }
    self.stackAsList.splice(-1)
    return popedItem
  }
}
