import { render } from "@testing-library/react";
import { PhoneSvgIcon } from "./PhoneSvg";

describe("PhoneSvg Snapshots", () => {
  it("should match snapshot", () => {
    const { container } = render(<PhoneSvgIcon />);
    expect(container).toMatchSnapshot();
  });
});
