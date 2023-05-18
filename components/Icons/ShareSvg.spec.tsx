import { render } from "@testing-library/react";
import { ShareSvgIcon } from "./ShareSvg";

describe("ShareSvg Snapshots", () => {
  it("should match snapshot", () => {
    const { container } = render(<ShareSvgIcon />);
    expect(container).toMatchSnapshot();
  });
});
