import "@testing-library/jest-dom/extend-expect";

import { render, fireEvent } from "@testing-library/svelte";

import Button from "./Button.svelte";
import SlotTest from "./SlotTest.svelte";

test("renders slot inside button", () => {
  const { getByText } = render(SlotTest, { props: { Component: Button } });

  expect(getByText("Hello World")).toBeInTheDocument();
});

// Note: This is as an async test as we are using `fireEvent`
test("increments click count on click", async () => {
  const { getByTestId } = render(Button);

  const button = getByTestId("button-test");
  // Using await when firing events is unique to the svelte testing library because
  // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
  await fireEvent.click(button);

  expect(button).toHaveTextContent("1");
});
