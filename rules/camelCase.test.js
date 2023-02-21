import {test} from "vitest";
import rule from "./camelCase";
import { RuleTester } from "eslint";



test("camel case", () => {
    const ruleTester = new RuleTester();
    ruleTester.run("camelcase test", rule, {
        valid: ["function rightFunctionName() {}", "function testTestFunctionName() {}", "function functionNameWithNumbers123() {}"],
        invalid: [
          {
            code: "function TestFunctionName() {}",
            errors: [{
              message: "Function name 'TestFunctionName' should be in camelCase.",
              type: "Identifier"
            }]
          },
          {
            code: "function functionName_With_Underscores() {}",
            errors: [{
              message: "Function name 'functionName_With_Underscores' should be in camelCase.",
              type: "Identifier"
            }]
          },
        ]
      });      
})
