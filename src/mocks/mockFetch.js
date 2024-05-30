const breedsListResponse = {
    message: {
        boxer: [],
        cattledog: [],
        dalmatian: [],
        husky: [],
    },
};

const dogImagesResponse = {
    message: [
        "https://images.dog.ceo/breeds/cattledog-australian/IMG_1042.jpg ",
        "https://images.dog.ceo/breeds/cattledog-australian/IMG_5177.jpg",
    ],
};

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

export default async function mockFetch(url) {
    switch (url) {
        case "https://dog.ceo/api/breeds/list/all": {
            return {
                ok: true,
                status: 200,
                json: async () => breedsListResponse,
            };
        }
        case "https://dog.ceo/api/breed/husky/images" :
        case "https://dog.ceo/api/breed/cattledog/images": {
            return {
                ok: true,
                status: 200,
                json: async () => dogImagesResponse,
            };
        }
        case "https://dogapi.dog/api/v2/facts":
            return {
                ok: true,
                status: 200,
                json: async () => factsReponse
            }
        default: {
            throw new Error(`Unhandled request: ${url}`);
        }
    }
}