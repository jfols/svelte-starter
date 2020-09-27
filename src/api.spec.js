import { getData } from "./api.js";

test("returns data", () => {
  const data = getData();

  data.forEach((dataObject) => {
    expect(dataObject).toEqual(
      expect.objectContaining({ someData: expect.any(String) })
    );
  });
});
