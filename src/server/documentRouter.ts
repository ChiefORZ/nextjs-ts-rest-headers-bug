import { documentContract } from "@/contracts/documentContract";
import { createNextRoute } from "@ts-rest/next";

export const documentRouter = createNextRoute(documentContract, {
	createDocument: async (args) => {
		const { body } = args;
		// do something with the body here
		return {
			body: {
				id: "123",
				filePath: "path/to/file",
				title: body.title,
			},
			status: 201,
		};
	},
});
