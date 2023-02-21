module.exports = {
  create(context) {
    return {
      FunctionDeclaration(node) {
        if (node.id.name !== undefined && !(/^[a-z]+([A-Z][a-z0-9]+)*$/.test(node.id.name))) {
          context.report({
            node: node.id,
            message: "Function name '{{name}}' should be in camelCase.",
            data: {
              name: node.id.name
            }
          });
        }
      }
    };
}
};

