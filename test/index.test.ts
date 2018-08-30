import repeat from "../src";

describe("index", () => {
  test(
    "repeat",
    async done => {
      const result = await repeat(
        async end => {
          try {
            const res = 200;
            if (res === 200) {
              end("ok");
            }
          } catch (e) {
            // Do nothing. repeat.
          }
        },
        {
          delay: 1000,
          maxCount: 300,
        },
      );

      expect(result).toEqual("ok");

      done();
    },
    50000,
  );
});
