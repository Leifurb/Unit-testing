module.exports = {
  create(context) {
    return {
      MemberExpression(node) {
        if (node.callee.type === "MemberExpression" && node.callee.object.name === "console" && node.callee.property.name === "log") {
          context.report({
            node: node,
            message: "Use of 'console.log()' is not allowed",
          });
        }
      },
    };
  },
};
