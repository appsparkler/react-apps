import { render } from "@testing-library/react";
import { InfoItem } from "./InfoItem";
import { EmailSvgIcon } from "../Icons/EmailSvg";

describe("InfoItem Snapshots", () => {
  it("match snapshot", () => {
    const { container } = render(
      <InfoItem Icon={EmailSvgIcon} info={"jhon.smith@gmail.com"} />
    );
    expect(container).toMatchSnapshot();
  });
});
