"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (allowed) => {
    return (req, res, next) => {
        console.log(req.headers);
        next();
    };
};
