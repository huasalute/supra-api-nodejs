const ErrorWrapper = require('../util/ErrorWrapper')

module.exports.actionRunner = (action) => {
  __typecheck(action, 'Function', true)

  return (req, res, next) => {
    __typecheck(req, 'Object', true)
    __typecheck(res, 'Object', true)
    __typecheck(next, 'Function', true)

    if (!action.hasOwnProperty('run')) {
      throw new ErrorWrapper({ message: `'run' method not declared in invoked '${action.name}' action`, status: 500 })
    }
    return action.run(req, res, next)
  }
}
