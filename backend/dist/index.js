"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./routes/index");
const constants_1 = require("./core/utils/constants");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const db_1 = require("./core/db/db");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : constants_1.DEFAULT_PORT;
app.use(express_1.default.json({ limit: constants_1.REQ_BODY_SIZE_LIMIT }));
app.use((0, cors_1.default)({ credentials: true, origin: true }));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
(0, index_1.routes)(app);
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`🚀 TODO app backend server has been launched on http://localhost:${port}`);
    yield (0, db_1.connectDB)();
    db_1.sequelize.sync({ force: false }).then(() => {
        console.log("✅ Synced database successfully...");
    });
}));
