import { render } from "@testing-library/react";

import { SampleTest } from "~/components/SampleTest";

describe("SampleTestコンポーネント", () => {
  it("祝!Jest開通!", () => {
    const { getByText } = render(<SampleTest />);

    expect(getByText("Next×Jestの設定がとても簡単になった！")).toBeTruthy();
  });
});
