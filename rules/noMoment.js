module.exports = {
    create: function(context) {
        return {
          ImportDeclaration(node) {
            const moduleName = node.source.value;
            if (moduleName === "moment") {
              context.report({
                node: node,
                message: "Importing 'moment' library is not allowed."
              });
            }
        }
    }
  }
};
