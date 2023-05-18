import { render } from "@testing-library/react";
import { ReactSvg } from "./ReactSvg";

describe("ReactSVG Snapshot Tests", () => {
  it("should match snapshot", () => {
    const { container } = render(<ReactSvg />);
    expect(container).toMatchSnapshot();
  });
});
