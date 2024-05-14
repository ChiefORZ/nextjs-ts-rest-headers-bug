import { documentContract } from "@/contracts/documentContract";
import { initQueryClient } from "@ts-rest/react-query";

export const documentController = initQueryClient(documentContract, {
	baseUrl: "/api",
});
