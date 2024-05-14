import { documentContract } from "@/contracts/documentContract";
import { documentRouter } from "@/server/documentRouter";
import { createNextRoute, createNextRouter } from "@ts-rest/next";

const router = createNextRoute(documentContract, documentRouter);

export default createNextRouter(documentContract, router);
