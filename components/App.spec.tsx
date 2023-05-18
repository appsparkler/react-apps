import { cleanup, render } from "@testing-library/react";
import { App } from "./App";

afterEach(cleanup);

describe("App Snapshots", () => {
  it("should match snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});

describe("App Functional Tests", () => {
  render(<App />);
});
