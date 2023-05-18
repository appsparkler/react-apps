import { Box } from "@mui/material";
import { cleanup, render } from "@testing-library/react";
import { InfoItem } from "./InfoItem";
import { PhoneSvgIcon } from "../Icons/PhoneSvg";
import { stringResources } from "@/values/strings";
import { ShareSvgIcon } from "../Icons/ShareSvg";
import { EmailSvgIcon } from "../Icons/EmailSvg";
import { screen } from "@testing-library/react";

afterEach(cleanup);

const InfoSection = () => (
  <Box display={"flex"} flexDirection={"column"}>
    <InfoItem Icon={PhoneSvgIcon} info={stringResources.mobile} />
    <InfoItem Icon={EmailSvgIcon} info={stringResources.email} />
    <InfoItem Icon={ShareSvgIcon} info={stringResources.social} />
  </Box>
);

describe("InfoSection Snapshots", () => {
  it("should match snapshot", () => {
    const { container } = render(<InfoSection />);
    expect(container).toMatchSnapshot();
  });
});

describe("InfoSection functional tests", () => {
  it("should render name, email and mobile number", () => {
    render(<InfoSection />);
    expect(screen.getByText(stringResources.email)).toBeVisible();
    expect(screen.getByText(stringResources.mobile)).toBeVisible();
    expect(screen.getByText(stringResources.social)).toBeVisible();
  });
});
