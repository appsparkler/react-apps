import { render, screen } from "@testing-library/react";
import { HeroSection } from "./HeroSection";
import { stringResources } from "@/values/strings";

describe("HeroSection Snapshots", () => {
  it("should match snapshots", () => {
    const { container } = render(<HeroSection />);
    expect(container).toMatchSnapshot();
  });
});

describe("HeroSection Functional Tests", () => {
  it("should render name and title", () => {
    render(<HeroSection />);
    expect(screen.getByText(stringResources.name)).toBeVisible();
    expect(screen.getByText(stringResources.title)).toBeVisible();
    expect(screen.getByLabelText("android logo")).toBeVisible();
    expect(screen.getByLabelText("react logo")).toBeVisible();
  });
});
