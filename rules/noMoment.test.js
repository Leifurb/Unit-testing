import { test } from "vitest";
import rule from "./noMoment";
import { RuleTester } from "eslint";

test("no use of moment library", () => {
  var ruleTester = new RuleTester();
  ruleTester.run("noMoment", rule, {
    valid: ["var myDate = new Date();"],
    invalid: [
      {
        code: 'var moment = require("moment");',
        errors: [
          {
            message: "Importing 'moment' library is not allowed.",
          },
        ],
        code: "moment()",
        errors: [
          {
            message: "Importing 'moment' library is not allowed.",
          },
        ],
      },
    ],
  });
})