//FROM: https://knowledge.udacity.com/questions/625052
import {isValidURL} from "../src/client/js/nameChecker";
describe("Check if name is included", () => {
  test("Testing the isValidURL() function", () => {
    expect(isValidURL).toBeDefined();
  })
});