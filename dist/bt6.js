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
function isPrimeWithPromise1(num) {
    return new Promise((resolve, reject) => {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                resolve(false);
                return;
            }
        }
        resolve(true);
    });
}
function isPrimeWithAsyncAwait(n) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield isPrimeWithPromise1(n);
            console.log(result);
        }
        catch (error) {
            console.error(error);
        }
    });
}
isPrimeWithAsyncAwait(4);
