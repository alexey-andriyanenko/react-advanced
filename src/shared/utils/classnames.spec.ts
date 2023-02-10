import { classnames } from "shared/utils/classnames";

describe("classnames", () => {
  it("works", () => {
    const args: Array<string | Record<string, unknown> | undefined> = [
      "container",
      undefined,
      {
        active: true,
        disabled: false,
      },
    ];

    const result = classnames(...args);

    expect(result).toBe("container active");
  });
});
