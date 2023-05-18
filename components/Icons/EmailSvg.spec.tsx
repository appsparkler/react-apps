import { EmailSvgIcon } from "./EmailSvg";
import { render } from "@testing-library/react";

describe("EmailSvgIcon Snapshots", () => {
  it("should match snapshot", () => {
    const { container } = render(<EmailSvgIcon />);
    expect(container).toMatchSnapshot();
  });
});
