interface Error {
  status: number;
  body: {
    error: {
      status: number;
      message: string;
    };
  };
}

// construct an error response
const error = (status: number, message: string): Error => ({
  status,
  body: {
    error: {
      status,
      message,
    },
  },
});

export default error;
