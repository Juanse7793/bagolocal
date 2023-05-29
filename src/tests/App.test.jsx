import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { TableOnePage } from "../pages/TableOnePage";
import { TableTwoPage } from "../pages/TableTwoPage";

describe("Home", () => {
  test("renders Home component", () => {
    render(<Home />);
  });

  test("renders cumpleañeros del mes text", () => {
    render(<Home />);
    expect(screen.getByText("Cumpleañeros del mes")).toBeDefined();
  });
});

describe("Table one", () => {
  test("renders Table one component", () => {
    render(<TableOnePage />);
  });

  test("renders table one country column", () => {
    render(<TableOnePage />);
    expect(screen.getByText("Country")).toBeDefined();
  });
});

describe("Table two", () => {
  test("renders Table two component", () => {
    render(<TableTwoPage />);
  });

  test("renders table two Activity column", () => {
    render(<TableTwoPage />);
    expect(screen.getByText("Activity")).toBeDefined();
  });
});
