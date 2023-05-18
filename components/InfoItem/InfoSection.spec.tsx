import { cleanup, render } from "@testing-library/react";
import { stringResources } from "@/values/strings";
import { screen } from "@testing-library/react";
import { InfoSection } from "./InfoSection";

afterEach(cleanup);

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
