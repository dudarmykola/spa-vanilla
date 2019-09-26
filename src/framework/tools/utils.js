const wfm = {
  delay(ms = 10000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  }
};

export { wfm };
