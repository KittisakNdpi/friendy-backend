"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
// import lib
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: `.env.${process.env.NODE_ENV}` });
const SERVER = (0, express_1.default)();
const HOST_NAME = (_a = process.env.HOST_NAME) !== null && _a !== void 0 ? _a : '';
const PORT = Number((_b = process.env.PORT) !== null && _b !== void 0 ? _b : '');
SERVER.use(body_parser_1.default.json());
SERVER.use(body_parser_1.default.urlencoded({ extended: true }));
SERVER.get('/', (req, res) => res.send('Express + TypeScript SERVER'));
SERVER.listen(PORT, HOST_NAME, () => {
    console.log(__dirname);
    console.log(`server is running at http://${HOST_NAME}:${PORT}`);
});
