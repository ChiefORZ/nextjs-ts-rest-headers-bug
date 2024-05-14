import { initContract } from "@ts-rest/core";
import { z } from "zod";

const multipartHeaders = z.object({
	"content-type": z
		.string()
		.refine((val) => val.includes("multipart/form-data"), {
			message: "content-type must be multipart/form-data",
		}),
});

const c = initContract();

export const createDocumentInputSchema = z.object({
	file: z.instanceof(Blob),
	title: z.string(),
});

export const documentSchema = z.object({
	id: z.string(),
	filePath: z.string(),
	title: z.string(),
});

export type Document = z.infer<typeof documentSchema>;

export const documentContract = c.router({
	createDocument: {
		body: createDocumentInputSchema,
		contentType: "multipart/form-data",
		method: "POST",
		path: "/documents",
		responses: {
			201: documentSchema,
		},
		summary: "Create document resource",
	},
});
