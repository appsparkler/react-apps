import { getGraidentTextStyle } from "./getGraidentTextStyle";

describe("getGradientTextStyles", () => {
  it("should get gradient text styles", () => {
    expect(getGraidentTextStyle("red", "blue")).toEqual({
      background: "linear-gradient(to right, red, blue)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    });
  });
});
