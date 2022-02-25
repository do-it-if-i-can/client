import { render } from "@testing-library/react";

import { Sample } from "~/components/Sample";

describe("SampleTestコンポーネント", () => {
  it("祝!Jest開通!", () => {
    const { getByText } = render(<Sample />);

    expect(getByText("Next×Jestの設定がとても簡単になった！")).toBeTruthy();
  });
});
