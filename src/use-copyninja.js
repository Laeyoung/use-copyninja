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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var React = require("react");
var use_clippy_1 = require("use-clippy");
var _ = require('lodash');
// const hasClipboardData = (w: Window): w is ClipboardDataWindow =>
//   Object.prototype.hasOwnProperty.call(w, 'clipboardData');
// 
// const getClipboardData = (w: ClipboardDataWindow | Window): DataTransfer | null => {
//   if (hasClipboardData(w)) {
//     return w.clipboardData;
//   }
//   return null;
// };
var isClipboardApiEnabled = function (navigator) { return (typeof navigator === 'object' &&
    typeof navigator.clipboard === 'object'); };
var useCopyninja = function () {
    var _a = use_clippy_1["default"](), clipboard = _a[0], syncClipboard = _a[1];
    var _b = React.useState([]), copyninja = _b[0], setCopyninja = _b[1];
    React.useEffect(function () {
        console.log('React.useEffect??:', clipboard);
        if (_.isEmpty(clipboard))
            return;
        setCopyninja(__spreadArray(__spreadArray([], copyninja), [clipboard]));
    }, [clipboard]);
    var addCopyninja = React.useCallback(function (text) { return __awaiter(void 0, void 0, void 0, function () {
        var e_1, _err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 1, , 6]);
                    console.log('text:', text);
                    syncClipboard(text);
                    return [3 /*break*/, 6];
                case 1:
                    e_1 = _a.sent();
                    if (!isClipboardApiEnabled(navigator)) return [3 /*break*/, 5];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, navigator.clipboard.writeText(text)];
                case 3:
                    _a.sent();
                    syncClipboard(text);
                    return [3 /*break*/, 5];
                case 4:
                    _err_1 = _a.sent();
                    return [3 /*break*/, 5];
                case 5: return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); }, []);
    return [copyninja, addCopyninja, clipboard];
};
// Required for TypeScript to output a correct .d.ts file.
exports["default"] = useCopyninja;
module.exports = useCopyninja;
module.exports["default"] = useCopyninja;
