/* eslint-disable no-undef */
import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartModal from "../../src/components/CartModal";
import * as rrd from "react-router-dom";
import { testData } from "../testData";

beforeEach(() => {
  // Vitest which uses jsdom currently doesn't support
  // the HTMLDialogElement with its functions so for now I had to mock them
  // https://github.com/jsdom/jsdom/issues/3294
  HTMLDialogElement.prototype.show = vi.fn();
  HTMLDialogElement.prototype.showModal = vi.fn();
  HTMLDialogElement.prototype.close = vi.fn();
});

describe("CartModal", () => {
  vi.mock("react-router-dom");
  const mockSetCart = vi.fn();
  rrd.useOutletContext.mockReturnValue({
    basket: new Map(),
    setBasket: () => mockSetCart,
  });

  it("Matches Snapshot", () => {
    const opened = false;
    const onClick = vi.fn();

    const container = render(
      <CartModal modalIsOpen={opened} closeModalHandler={onClick} />
    );

    expect(container).toMatchSnapshot();
  });

  it("Displays cart is empty when no items in shopping cart", () => {
    const opened = false;
    const onClick = vi.fn();

    render(<CartModal modalIsOpen={opened} closeModalHandler={onClick} />);
    expect(screen.getByText("Shopping Cart is empty")).toBeInTheDocument();
  });

  it("Call onClick when pressing close button", async () => {
    const user = userEvent.setup();
    const opened = true;
    const onClick = vi.fn();

    render(<CartModal modalIsOpen={opened} closeModalHandler={onClick} />);
    // cause the modal isn't being shown due to jsdom not supporting
    // HTMLDialogElement yet, resulting in the modal staying hidden
    // hidden: true has to be set so getByRole can find the button
    const closeBtn = screen.getByRole("button", {
      name: /close/i,
      hidden: true,
    });
    await user.click(closeBtn);

    expect(onClick).toHaveBeenCalled();
  });

  it("Render 2 basket items with correct total price and checkout button", async () => {
    const opened = true;
    const onClick = vi.fn();
    rrd.useOutletContext.mockReturnValue({
      basket: testData,
      setBasket: () => vi.fn(),
    });

    render(<CartModal modalIsOpen={opened} closeModalHandler={onClick} />);
    const cartItemOne = screen.getByRole("heading", {
      name: /chainsaw man/i,
      hidden: true,
    });
    const cartItemTwo = screen.getByRole("heading", {
      name: /attack on titan/i,
      hidden: true,
    });
    const totalPrice = screen.getByText("14€");
    const checkoutBtn = screen.getByRole("button", {
      name: /checkout/i,
      hidden: true,
    });

    expect(totalPrice).toBeInTheDocument();
    expect(checkoutBtn).toBeInTheDocument();
    expect(cartItemOne).toBeInTheDocument();
    expect(cartItemTwo).toBeInTheDocument();

    screen.debug();
  });
});
