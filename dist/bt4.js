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
function sumWithPromise1(arr) {
    return new Promise((resolve, reject) => {
        const sum = arr.reduce((acc, num) => acc + num, 0);
        resolve(sum);
    });
}
function sumWithAsyncAwait(arr) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield sumWithPromise1(arr);
            console.log(result);
        }
        catch (error) {
            console.error(error);
        }
    });
}
sumWithAsyncAwait([1, 2, 3, 4, 5, 6, 7]);
