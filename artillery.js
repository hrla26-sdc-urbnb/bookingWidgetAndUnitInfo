module.exports = {
  attachRandomUnitId: (requestParams, context, ee, next) => {
    const id = Math.floor(Math.random() * (9999990 - 9000000)) + 9000000;
    context.vars.id = id;
    return next();
  },
};
