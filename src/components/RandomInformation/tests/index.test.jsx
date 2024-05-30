import { render, screen } from "@testing-library/react";
import { RandomInformation } from ".."; 
import mockFetch from "../../../mocks/mockFetch";

describe("RandomInformation", () => {

    beforeAll(() => {
        jest.spyOn(window, "fetch").mockImplementation(mockFetch);
    });

    afterAll(() => {
        jest.resetAllMocks();
    })

    it("should render correctly", async () => {
        render(<RandomInformation />);

    });
});
