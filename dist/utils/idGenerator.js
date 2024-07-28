"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getId = void 0;
const idGenerator = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
};
const getId = () => {
    return `${idGenerator()}-${idGenerator()}-${idGenerator()}-${idGenerator()}-${idGenerator()}-${idGenerator()}`;
};
exports.getId = getId;
