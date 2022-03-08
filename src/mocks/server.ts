import { setupServer } from "msw/node";

import { handlers } from "./handlers";

// handlersを元にモックサーバを作成
export const server = setupServer(...handlers);
