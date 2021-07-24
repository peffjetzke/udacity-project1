//FROM: https://knowledge.udacity.com/questions/625052
import { handleSubmit } from "../src/client/js/formHandler"; //"../src/client/js/formHandler";
describe("Testing the submit functionality", () => {
  test("Testing the handleSubmit() function", () => {
    expect(handleSubmit).toBeDefined();
  })
});