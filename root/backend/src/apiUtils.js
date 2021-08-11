/**
 * Wrapper function that is catches all errors and passes them to express error handles
 * by calling the next()
 * @param {function} fn async function
 * @param {(req, res, next) => void} args
 * @returns Promise<void>
 */
export const errorWrapper = (fn) => (...args) => fn(...args).catch((e) => args[2](e));
