import { render, screen } from "@testing-library/react";
import { RandomInformation } from ".."; 

const factsReponse = {
    data: [
        {
            id: "4f5a46a3-d38f-4605-bd31-908ca9f7361a",
            type: "fact",
            attributes: {
                body: "Dogs can be trained to detect cancer and alert their owner."
            }
        }
    ]
};

const mockFetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(factsReponse),
    })
);
  
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
