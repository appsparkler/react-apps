import { render } from "@testing-library/react";

const App = () => null;

describe("App Snapshots", () => {
  it("should match snapshot", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
