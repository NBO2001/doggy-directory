import { render, screen } from "@testing-library/react";
import { RandomInformation } from ".."; 
import { useFacts } from "../../../hooks/useFacts";
import { faker } from '@faker-js/faker';


jest.mock("../../../hooks/useFacts", () => ({
    ...jest.requireActual("../../../hooks/useFacts"),
    useFacts: jest.fn()
}))
  
describe("RandomInformation", () => {

    it("renders correctly with random fact", () => {
        const usefactsMock = useFacts;
        
        const body = faker.person.fullName();
        const dogInfo = [
            {
                id: "4f5a46a3-d38f-4605-bd31-908ca9f7361a",
                type: "fact",
                attributes: {
                    body
                }
            }
        ]

        usefactsMock.mockReturnValue({dogInfo, isPending: false, error: false});

        render(<RandomInformation />);

        expect(screen.getByText(body)).toBeInTheDocument();
    });

    it("displays loading message while fetching data", () => {
        const usefactsMock = useFacts;

        usefactsMock.mockReturnValue({dogInfo: {}, isPending: true, error: false});

        render(<RandomInformation />);

        expect(screen.getByText("Did you know?...")).toBeInTheDocument();

    });

    it("displays error message if fetching data fails", () => {
        const usefactsMock = useFacts;

        usefactsMock.mockReturnValue({dogInfo: {}, isPending: false, error: true});

        render(<RandomInformation />);

        expect(screen.getByText("Error")).toBeInTheDocument();

    });
});
