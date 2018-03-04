export default {
  request: (action) => ({
    type: action
  }),

  success: (action, data = {}) => ({
    type: action,
    payload: data
  }),

  failure: (action, error = {}) => ({
    type: action,
    payload: error
  })
}
