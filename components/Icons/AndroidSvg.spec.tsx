import { render } from "@testing-library/react";
import { AndroidSvg } from "./AndroidSvg";

describe("AndroidSvg Snapshots", () => {
  it("should match snapshot", () => {
    const { container } = render(<AndroidSvg />);
    expect(container).toMatchSnapshot();
  });
});
