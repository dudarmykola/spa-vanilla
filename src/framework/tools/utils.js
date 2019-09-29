const wfm = {
  delay(ms = 10000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, ms);
    });
  },

  isUndefined(d) {
    return typeof d === "undefined";
  }
};

export { wfm };
