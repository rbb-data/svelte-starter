/**
 * @typedef {{ status: number, body: { error: { status: number, message: string } } }} Error
 */

// construct an error response
/** @type {(status: number, message: string) => Error} */
const error = (status, message) => ({
  status,
  body: {
    error: {
      status,
      message,
    },
  },
});

export default error;
