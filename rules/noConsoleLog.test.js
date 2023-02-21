import { test } from "vitest";
import rule from "./noConsoleLog";
import { RuleTester } from "eslint";

test("no console.log", () => {
  var ruleTester = new RuleTester();
  ruleTester.run("no-console-log", rule, {
    valid: ["var foo = b", "function test() {}"],
    invalid: [
      {
        code: 'console.log("foo")',
        errors: [
          {
            message: "Use of 'console.log()' is not allowed",
          },
        ],
        code: "console.log()",
        errors: [
          {
            message: "Use of 'console.log()' is not allowed",
          },
        ]
      },
    ],
  });
});
