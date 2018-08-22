/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(83);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = dll;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = __webpack_require__(0);
var obb_1 = __webpack_require__(8);
var EntityData_1 = __webpack_require__(10);
var mst = __webpack_require__(3);
var mobx_1 = __webpack_require__(5);
var baseColor = 0x333333;
var foundColor = 0x12C0E3;
var intersectColor = 0x00D66B;
var Entity = /** @class */ (function () {
    function Entity() {
        /**
         * 缓存图形集合.
         *
         * @protected
         * @type {Map<RenderType, THREE.Object3D>}
         * @memberof Entity
         */
        this.m_DrawEntity = new Map();
        this.initData();
    }
    /**
     *
     * @param data 快照数据 用于还原
     */
    Entity.prototype.dataIn = function (data) {
        mst.applySnapshot(this.m_Data, data);
    };
    Entity.prototype.dataOut = function () {
        return mst.getSnapshot(this.m_Data);
    };
    Entity.prototype.Draw = function (renderType) {
        return null;
    };
    Object.defineProperty(Entity.prototype, "objectId", {
        get: function () {
            return this.m_Data.objectId;
        },
        set: function (id) {
            this.m_Data.setObjectId(id);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Entity.prototype, "Size", {
        get: function () {
            return this.m_Data.getSize();
        },
        set: function (v) {
            this.m_Data.setSize(v.x, v.y, v.z);
        },
        enumerable: true,
        configurable: true
    });
    Entity.prototype.initData = function () {
        this.m_Data = EntityData_1.EntityData.create();
    };
    Entity.prototype.erase = function (isErase) {
        this.m_Data.setErase(isErase);
    };
    Entity.prototype.getBox = function () {
        var box = new THREE.Box3();
        // box.setFromObject(this.m_ThreeObj);
        return box;
    };
    Entity.prototype.getStretchPoints = function () {
        return [];
    };
    Entity.prototype.getOBB = function () {
        var obb = new obb_1.OBB();
        var size = this.Size;
        // obb.m_CoordinateSystem.copyForm(this.m_ThreeObj.matrix);
        obb.m_CoordinateSystem.m_Postion.sub(obb.m_CoordinateSystem.m_xAxis.clone().multiplyScalar(size.x * 0.5));
        obb.m_CoordinateSystem.m_Postion.sub(obb.m_CoordinateSystem.m_yAxis.clone().multiplyScalar(size.y * 0.5));
        obb.m_CoordinateSystem.m_Postion.sub(obb.m_CoordinateSystem.m_zAxis.clone().multiplyScalar(size.z * 0.5));
        obb.halfSizes.copy(size);
        return obb;
    };
    Entity.prototype.applyMatrix4 = function (mat) {
        this.m_DrawEntity.forEach(function (e) {
            e.applyMatrix(mat);
        });
    };
    Entity.prototype.setIsSelct = function (bool) {
    };
    return Entity;
}());
exports.Entity = Entity;
var Curve = /** @class */ (function (_super) {
    __extends(Curve, _super);
    function Curve() {
        return _super.call(this) || this;
    }
    return Curve;
}(Entity));
exports.Curve = Curve;
var Line = /** @class */ (function (_super) {
    __extends(Line, _super);
    function Line(startPt, endPt) {
        var _this = _super.call(this) || this;
        var data = _this.m_Data;
        if (startPt) {
            data.setStartPoint(startPt);
            if (endPt)
                data.setEndPoint(endPt);
        }
        return _this;
    }
    Line.prototype.initData = function () {
        this.m_Data = EntityData_1.LineData.create();
    };
    Line.prototype.getData = function () {
        return this.m_Data;
    };
    Line.prototype.Draw = function (renderType) {
        var _this = this;
        if (this.m_DrawEntity.has(renderType)) {
            return this.m_DrawEntity.get(renderType);
        }
        //创建几何体
        var geometry = new THREE.Geometry();
        var sp = this.getData().StartPoint;
        var ep = this.getData().EndPoint;
        geometry.vertices.push(sp);
        geometry.vertices.push(ep);
        //TODO:创建材质..明显重复的
        var material = new THREE.LineBasicMaterial();
        var threeObject = new THREE.Line(geometry, material);
        this.m_DrawEntity.set(renderType, threeObject);
        //事件注入.
        mobx_1.autorun(function () {
            sp.copy(_this.getData().StartPoint);
            ep.copy(_this.getData().EndPoint);
            geometry.verticesNeedUpdate = true;
        });
        return threeObject;
    };
    Line.prototype.GetGripPoints = function () {
        return [this.StartPoint, this.EndPoint];
    };
    Line.prototype.getStretchPoints = function () {
        return [this.StartPoint, this.EndPoint];
    };
    Object.defineProperty(Line.prototype, "StartPoint", {
        get: function () {
            return this.m_Data.StartPoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Line.prototype, "EndPoint", {
        get: function () {
            return this.m_Data.EndPoint;
        },
        enumerable: true,
        configurable: true
    });
    //http://jsfiddle.net/hjx3rLmt/1/
    Line.prototype.setStartPoint = function (pt) {
        this.getData().setStartPoint(pt);
    };
    Line.prototype.setEndPoint = function (pt) {
        this.getData().setEndPoint(pt);
    };
    return Line;
}(Curve));
exports.Line = Line;
var Solid3d = /** @class */ (function (_super) {
    __extends(Solid3d, _super);
    function Solid3d(len, wid, hei) {
        var _this = _super.call(this) || this;
        _this.Size = new THREE.Vector3(len, wid, hei);
        return _this;
    }
    Solid3d.prototype.applyMatrix4 = function (mat) {
        _super.prototype.applyMatrix4.call(this, mat);
        // Entity.prototype.applyMatrix4.call(this,mat)
    };
    Solid3d.prototype.Draw = function (renderType) {
        if (this.m_DrawEntity.has(renderType)) {
            return this.m_DrawEntity.get(renderType);
        }
        var geometry = new THREE.BoxGeometry(this.Size.x, this.Size.y, this.Size.z);
        var mesh = new THREE.Mesh(geometry, new THREE.MeshNormalMaterial);
        this.m_DrawEntity.set(renderType, mesh);
        return mesh;
    };
    return Solid3d;
}(Entity));
exports.Solid3d = Solid3d;
var Point = /** @class */ (function (_super) {
    __extends(Point, _super);
    function Point() {
        var _this = _super.call(this) || this;
        _this.m_Postion = new THREE.Vector3();
        return _this;
    }
    return Point;
}(Entity));
exports.Point = Point;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeJsonPath", function() { return escapeJsonPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unescapeJsonPath", function() { return unescapeJsonPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onAction", function() { return onAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStateTreeNode", function() { return isStateTreeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asReduxStore", function() { return asReduxStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectReduxDevtools", function() { return connectReduxDevtools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildType", function() { return getChildType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMiddleware", function() { return addMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onPatch", function() { return onPatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSnapshot", function() { return onSnapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPatch", function() { return applyPatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revertPatch", function() { return revertPatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordPatches", function() { return recordPatches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyAction", function() { return applyAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordActions", function() { return recordActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "protect", function() { return protect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unprotect", function() { return unprotect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProtected", function() { return isProtected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applySnapshot", function() { return applySnapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSnapshot", function() { return getSnapshot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasParent", function() { return hasParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParent", function() { return getParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoot", function() { return getRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPath", function() { return getPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPathParts", function() { return getPathParts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRoot", function() { return isRoot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvePath", function() { return resolvePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveIdentifier", function() { return resolveIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryResolve", function() { return tryResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRelativePath", function() { return getRelativePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detach", function() { return detach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destroy", function() { return destroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAlive", function() { return isAlive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDisposer", function() { return addDisposer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnv", function() { return getEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walk", function() { return walk; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(5);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};



function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var EMPTY_ARRAY = Object.freeze([]);
function fail(message) {
    if (message === void 0) { message = "Illegal state"; }
    throw new Error("[mobx-state-tree] " + message);
}
function identity(_) {
    return _;
}

function noop() { }
function isArray(val) {
    return !!(Array.isArray(val) || Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["isObservableArray"])(val));
}
function asArray(val) {
    if (!val)
        return EMPTY_ARRAY;
    if (isArray(val))
        return val;
    return [val];
}
function extend(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < b.length; i++) {
        var current = b[i];
        for (var key in current)
            a[key] = current[key];
    }
    return a;
}
function extendKeepGetter(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < b.length; i++) {
        var current = b[i];
        for (var key in current) {
            var descriptor = Object.getOwnPropertyDescriptor(current, key);
            if ("get" in descriptor) {
                Object.defineProperty(a, key, __assign({}, descriptor, { configurable: true }));
                continue;
            }
            a[key] = current[key];
        }
    }
    return a;
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function isMutable(value) {
    return (value !== null &&
        typeof value === "object" &&
        !(value instanceof Date) &&
        !(value instanceof RegExp));
}
function isPrimitive(value) {
    if (value === null || value === undefined)
        return true;
    if (typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean" ||
        value instanceof Date)
        return true;
    return false;
}
function isGeneratorFunction(value) {
    var constructor = value.constructor;
    if (!constructor)
        return false;
    if ("GeneratorFunction" === constructor.name || "GeneratorFunction" === constructor.displayName)
        return true;
    return false;
}
function freeze(value) {
    return isPrimitive(value) ? value : Object.freeze(value);
}
function deepFreeze(value) {
    freeze(value);
    if (isPlainObject(value)) {
        Object.keys(value).forEach(function (propKey) {
            if (!isPrimitive(value[propKey]) &&
                !Object.isFrozen(value[propKey])) {
                deepFreeze(value[propKey]);
            }
        });
    }
    return value;
}
function isSerializable(value) {
    return typeof value !== "function";
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}

function addReadOnlyProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: true,
        writable: false,
        configurable: true,
        value: value
    });
}
function registerEventHandler(handlers, handler) {
    handlers.push(handler);
    return function () {
        var idx = handlers.indexOf(handler);
        if (idx !== -1)
            handlers.splice(idx, 1);
    };
}
var prototypeHasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwnProperty(object, propName) {
    return prototypeHasOwnProperty.call(object, propName);
}
function argsToArray(args) {
    var res = new Array(args.length);
    for (var i = 0; i < args.length; i++)
        res[i] = args[i];
    return res;
}

// https://tools.ietf.org/html/rfc6902
// http://jsonpatch.com/
function invertPatch(patch) {
    if (!("oldValue" in patch))
        fail("Patches without `oldValue` field cannot be inversed");
    switch (patch.op) {
        case "add":
            return {
                op: "remove",
                path: patch.path,
                oldValue: patch.value
            };
        case "remove":
            return {
                op: "add",
                path: patch.path,
                value: patch.oldValue
            };
        case "replace":
            return {
                op: "replace",
                path: patch.path,
                value: patch.oldValue,
                oldValue: patch.value
            };
    }
}
function stripPatch(patch) {
    // strips `oldvalue` information from the patch, so that it becomes a patch conform the json-patch spec
    // this removes the ability to undo the patch
    var clone = __assign({}, patch);
    delete clone.oldValue;
    return clone;
}
/**
 * escape slashes and backslashes
 * http://tools.ietf.org/html/rfc6901
 */
function escapeJsonPath(str) {
    return str.replace(/~/g, "~1").replace(/\//g, "~0");
}
/**
 * unescape slashes and backslashes
 */
function unescapeJsonPath(str) {
    return str.replace(/~0/g, "\\").replace(/~1/g, "~");
}
function joinJsonPath(path) {
    // `/` refers to property with an empty name, while `` refers to root itself!
    if (path.length === 0)
        return "";
    return "/" + path.map(escapeJsonPath).join("/");
}
function splitJsonPath(path) {
    // `/` refers to property with an empty name, while `` refers to root itself!
    var parts = path.split("/").map(unescapeJsonPath);
    // path '/a/b/c' -> a b c
    // path '../../b/c -> .. .. b c
    return parts[0] === "" ? parts.slice(1) : parts;
}

function collectMiddlewareHandlers(node) {
    var handlers = node.middlewares.slice();
    var n = node;
    // Find all middlewares. Optimization: cache this?
    while (n.parent) {
        n = n.parent;
        handlers = handlers.concat(n.middlewares);
    }
    return handlers;
}
function runMiddleWares(node, baseCall, originalFn) {
    var handlers = collectMiddlewareHandlers(node);
    // Short circuit
    if (!handlers.length)
        return originalFn.apply(baseCall.object, baseCall.args);
    function runNextMiddleware(call) {
        var handler = handlers.shift(); // Optimization: counter instead of shift is probably faster
        if (handler)
            return handler(call, runNextMiddleware);
        else
            return originalFn.apply(baseCall.object, baseCall.args);
    }
    return runNextMiddleware(baseCall);
}
function createActionInvoker(name, fn, asyncMode, asyncId) {
    if (asyncMode === void 0) { asyncMode = "none"; }
    if (asyncId === void 0) { asyncId = 0; }
    var action$$1 = Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["action"])(name, fn);
    return function () {
        var node = getStateTreeNode(this);
        node.assertAlive();
        if (node.isRunningAction()) {
            // an action is already running in this tree, invoking this action does not emit a new action
            return action$$1.apply(this, arguments);
        }
        else {
            // outer action, run middlewares and start the action!
            var call = {
                name: name,
                object: node.storedValue,
                args: argsToArray(arguments),
                asyncId: asyncId,
                asyncMode: asyncMode
            };
            var root = node.root;
            root._isRunningAction = true;
            try {
                return runMiddleWares(node, call, action$$1);
            }
            finally {
                root._isRunningAction = false;
            }
        }
    };
}
// TODO: serializeArgument should not throw error, but indicate that the argument is unserializable and toString it or something
function serializeArgument(node, actionName, index, arg) {
    if (isPrimitive(arg))
        return arg;
    if (isStateTreeNode(arg)) {
        var targetNode = getStateTreeNode(arg);
        if (node.root !== targetNode.root)
            throw new Error("Argument " + index + " that was passed to action '" + actionName + "' is a model that is not part of the same state tree. Consider passing a snapshot or some representative ID instead");
        return {
            $ref: node.getRelativePathTo(getStateTreeNode(arg))
        };
    }
    if (typeof arg === "function")
        throw new Error("Argument " + index + " that was passed to action '" + actionName + "' should be a primitive, model object or plain object, received a function");
    if (typeof arg === "object" && !isPlainObject(arg) && !isArray(arg))
        throw new Error("Argument " + index + " that was passed to action '" + actionName + "' should be a primitive, model object or plain object, received a " + (arg &&
            arg.constructor
            ? arg.constructor.name
            : "Complex Object"));
    if (Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["isObservable"])(arg))
        throw new Error("Argument " + index + " that was passed to action '" + actionName + "' should be a primitive, model object or plain object, received an mobx observable.");
    try {
        // Check if serializable, cycle free etc...
        // MWE: there must be a better way....
        JSON.stringify(arg); // or throws
        return arg;
    }
    catch (e) {
        throw new Error("Argument " + index + " that was passed to action '" + actionName + "' is not serializable.");
    }
}
function deserializeArgument(adm, value) {
    if (typeof value === "object") {
        var keys = Object.keys(value);
        if (keys.length === 1 && keys[0] === "$ref")
            return resolvePath(adm.storedValue, value.$ref);
    }
    return value;
}
function applyAction$1(target, action$$1) {
    var resolvedTarget = tryResolve(target, action$$1.path || "");
    if (!resolvedTarget)
        return fail("Invalid action path: " + (action$$1.path || ""));
    var node = getStateTreeNode(resolvedTarget);
    // Reserved functions
    if (action$$1.name === "@APPLY_PATCHES") {
        return applyPatch.call(null, resolvedTarget, action$$1.args[0]);
    }
    if (action$$1.name === "@APPLY_SNAPSHOT") {
        return applySnapshot.call(null, resolvedTarget, action$$1.args[0]);
    }
    if (!(typeof resolvedTarget[action$$1.name] === "function"))
        fail("Action '" + action$$1.name + "' does not exist in '" + node.path + "'");
    return resolvedTarget[action$$1.name].apply(resolvedTarget, action$$1.args ? action$$1.args.map(function (v) { return deserializeArgument(node, v); }) : []);
}
/**
 * Registers a function that will be invoked for each action that is called on the provided model instance, or to any of its children.
 * See [actions](https://github.com/mobxjs/mobx-state-tree#actions) for more details. onAction events are emitted only for the outermost called action in the stack.
 * Action can also be intercepted by middleware using addMiddleware to change the function call before it will be run.
 *
 * @export
 * @param {IStateTreeNode} target
 * @param {(call: ISerializedActionCall) => void} listener
 * @returns {IDisposer}
 */
function onAction(target, listener) {
    if (!isRoot(target))
        console.warn("[mobx-state-tree] Warning: Attaching onAction listeners to non root nodes is dangerous: No events will be emitted for actions initiated higher up in the tree.");
    if (!isProtected(target))
        console.warn("[mobx-state-tree] Warning: Attaching onAction listeners to non protected nodes is dangerous: No events will be emitted for direct modifications without action.");
    return addMiddleware(target, function (rawCall, next) {
        var sourceNode = getStateTreeNode(rawCall.object);
        if (rawCall.asyncMode === "none" || rawCall.asyncMode === "invoke") {
            listener({
                name: rawCall.name,
                path: getStateTreeNode(target).getRelativePathTo(sourceNode),
                args: rawCall.args.map(function (arg, index) {
                    return serializeArgument(sourceNode, rawCall.name, index, arg);
                })
            });
        }
        return next(rawCall);
    });
}

var TypeFlags;
(function (TypeFlags) {
    TypeFlags[TypeFlags["String"] = 1] = "String";
    TypeFlags[TypeFlags["Number"] = 2] = "Number";
    TypeFlags[TypeFlags["Boolean"] = 4] = "Boolean";
    TypeFlags[TypeFlags["Date"] = 8] = "Date";
    TypeFlags[TypeFlags["Literal"] = 16] = "Literal";
    TypeFlags[TypeFlags["Array"] = 32] = "Array";
    TypeFlags[TypeFlags["Map"] = 64] = "Map";
    TypeFlags[TypeFlags["Object"] = 128] = "Object";
    TypeFlags[TypeFlags["Frozen"] = 256] = "Frozen";
    TypeFlags[TypeFlags["Optional"] = 512] = "Optional";
    TypeFlags[TypeFlags["Reference"] = 1024] = "Reference";
    TypeFlags[TypeFlags["Identifier"] = 2048] = "Identifier";
    TypeFlags[TypeFlags["Late"] = 4096] = "Late";
    TypeFlags[TypeFlags["Refinement"] = 8192] = "Refinement";
    TypeFlags[TypeFlags["Union"] = 16384] = "Union";
    TypeFlags[TypeFlags["Null"] = 32768] = "Null";
    TypeFlags[TypeFlags["Undefined"] = 65536] = "Undefined";
})(TypeFlags || (TypeFlags = {}));
function isType(value) {
    return typeof value === "object" && value && value.isType === true;
}
function isPrimitiveType(type) {
    return (isType(type) &&
        (type.flags & (TypeFlags.String | TypeFlags.Number | TypeFlags.Boolean | TypeFlags.Date)) >
            0);
}


function isObjectType(type) {
    return isType(type) && (type.flags & TypeFlags.Object) > 0;
}





function isReferenceType(type) {
    return (type.flags & TypeFlags.Reference) > 0;
}

/**
 * Returns the _actual_ type of the given tree node. (Or throws)
 *
 * @export
 * @param {IStateTreeNode} object
 * @returns {IType<S, T>}
 */
function getType(object) {
    return getStateTreeNode(object).type;
}
/**
 * Returns the _declared_ type of the given sub property of an object, array or map.
 *
 * @example
 * ```typescript
 * const Box = types.model({ x: 0, y: 0 })
 * const box = Box.create()
 *
 * console.log(getChildType(box, "x").name) // 'number'
 * ```
 *
 * @export
 * @param {IStateTreeNode} object
 * @param {string} child
 * @returns {IType<any, any>}
 */
function getChildType(object, child) {
    return getStateTreeNode(object).getChildType(child);
}
/**
 * Middleware can be used to intercept any action is invoked on the subtree where it is attached.
 * If a tree is protected (by default), this means that any mutation of the tree will pass through your middleware.
 *
 * [SandBox example](https://codesandbox.io/s/mQrqy8j73)
 *
 * It is allowed to attach multiple middlewares. The order in which middleware is invoked is inside-out:
 * local middleware is invoked before parent middleware. On the same object, earlier attached middleware is run before later attached middleware.
 *
 * A middleware receives two arguments: 1. the description of the the call, 2: a function to invoke the next middleware in the chain.
 * If `next(call)` is not invoked by your middleware, the action will be aborted and not actually executed.
 * Before passing the call to the next middleware using `next`, feel free to clone and modify the call description
 *
 * A call description looks like:
 *
 * ```
 * {
 *      name: string // name of the action
 *      object: any & IStateTreeNode // the object on which the action was original invoked
 *      args: any[] // the arguments of the action
 *      asyncMode: string
 *      asyncId: number
 * }
 * ```
 *
 * The fields `asyncMode` and `asyncId` are explained in detail in the [asynchronous action](https://github.com/mobxjs/mobx-state-tree/blob/master/docs/async-actions.md#asynchronous-actions-and-middleware) section.
 *
 * An example of a build in middleware is the `onAction` method.
 *
 * @example
 * ```typescript
 * const store = SomeStore.create()
 * const disposer = addMiddleWare(store, (call, next) => {
 *   console.log(`action ${call.name} was invoked`)
 *   next(call) // runs the next middleware (or the intended action if there is no middleware to run left)
 * })
 * ```
 *
 * @export
 * @param {IStateTreeNode} target
 * @param {(action: IRawActionCall, next: (call: IRawActionCall) => any) => any} middleware
 * @returns {IDisposer}
 */
function addMiddleware(target, middleware) {
    var node = getStateTreeNode(target);
    if (!node.isProtectionEnabled)
        console.warn("It is recommended to protect the state tree before attaching action middleware, as otherwise it cannot be guaranteed that all changes are passed through middleware. See `protect`");
    return node.addMiddleWare(middleware);
}
/**
 * Registers a function that will be invoked for each mutation that is applied to the provided model instance, or to any of its children.
 * See [patches](https://github.com/mobxjs/mobx-state-tree#patches) for more details. onPatch events are emitted immediately and will not await the end of a transaction.
 * Patches can be used to deep observe a model tree.
 *
 * @export
 * @param {Object} target the model instance from which to receive patches
 * @param {(patch: IJsonPatch) => void} callback the callback that is invoked for each patch
 * @param {includeOldValue} boolean if oldValue is included in the patches, they can be inverted. However patches will become much bigger and might not be suitable for efficient transport
 * @returns {IDisposer} function to remove the listener
 */
function onPatch(target, callback, includeOldValue) {
    if (includeOldValue === void 0) { includeOldValue = false; }
    return getStateTreeNode(target).onPatch(callback, includeOldValue);
}
/**
 * Registeres a function that is invoked whenever a new snapshot for the given model instance is available.
 * The listener will only be fire at the and of the current MobX (trans)action.
 * See [snapshots](https://github.com/mobxjs/mobx-state-tree#snapshots) for more details.
 *
 * @export
 * @param {Object} target
 * @param {(snapshot: any) => void} callback
 * @returns {IDisposer}
 */
function onSnapshot(target, callback) {
    return getStateTreeNode(target).onSnapshot(callback);
}
/**
 * Applies a JSON-patch to the given model instance or bails out if the patch couldn't be applied
 * See [patches](https://github.com/mobxjs/mobx-state-tree#patches) for more details.
 *
 * Can apply a single past, or an array of patches.
 *
 * @export
 * @param {Object} target
 * @param {IJsonPatch} patch
 * @returns
 */
function applyPatch(target, patch) {
    getStateTreeNode(target).applyPatches(asArray(patch));
}
/**
 * The inverse function of apply patch.
 * Given a patch or set of patches, restores the target to the state before the patches where produced.
 * The inverse patch is computed, and all the patches are applied in reverse order, basically 'rewinding' the target,
 * so that conceptually the following holds for any set of patches:
 *
 * `getSnapshot(x) === getSnapshot(revertPatch(applyPatches(x, patches), patches))`
 *
 * Note: Reverting patches will generate a new set of patches as side effect of applying the patches.
 * Note: only patches that include `oldValue` information are suitable for reverting. Such patches can be generated by passing `true` as second argument when attaching an `onPatch` listener.
 */
function revertPatch(target, patch) {
    var patches = asArray(patch).map(invertPatch);
    patches.reverse(); // inverse apply them in reverse order!
    getStateTreeNode(target).applyPatches(patches);
}
/**
 * Small abstraction around `onPatch` and `applyPatch`, attaches a patch listener to a tree and records all the patches.
 * Returns an recorder object with the following signature:
 *
 * ```typescript
 * export interface IPatchRecorder {
 *      // the recorded patches
 *      patches: IJsonPatch[]
 *      // the same set of recorded patches, but without undo information, making them smaller and compliant with json-patch spec
 *      cleanPatches: IJSonPatch[]
 *      // stop recording patches
 *      stop(target?: IStateTreeNode): any
 *      // apply all the recorded patches on the given target (the original subject if omitted)
 *      replay(target?: IStateTreeNode): any
 *      // reverse apply the recorded patches on the given target  (the original subject if omitted)
 *      // stops the recorder if not already stopped
 *      undo(): void
 * }
 * ```
 *
 * @export
 * @param {IStateTreeNode} subject
 * @returns {IPatchRecorder}
 */
function recordPatches(subject) {
    var recorder = {
        patches: [],
        get cleanPatches() {
            return this.patches.map(stripPatch);
        },
        stop: function () {
            disposer();
        },
        replay: function (target) {
            applyPatch(target || subject, recorder.patches);
        },
        undo: function (target) {
            revertPatch(subject || subject, this.patches);
        }
    };
    var disposer = onPatch(subject, function (patch) {
        recorder.patches.push(patch);
    }, true);
    return recorder;
}
/**
 * Applies an action or a series of actions in a single MobX transaction.
 * Does not return any value
 * Takes an action description as produced by the `onAction` middleware.
 *
 * @export
 * @param {Object} target
 * @param {IActionCall[]} actions
 * @param {IActionCallOptions} [options]
 */
function applyAction(target, actions) {
    Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["runInAction"])(function () {
        asArray(actions).forEach(function (action$$1) { return applyAction$1(target, action$$1); });
    });
}
/**
 * Small abstraction around `onAction` and `applyAction`, attaches an action listener to a tree and records all the actions emitted.
 * Returns an recorder object with the following signature:
 *
 * ```typescript
 * export interface IActionRecorder {
 *      // the recorded actions
 *      actions: ISerializedActionCall[]
 *      // stop recording actions
 *      stop(): any
 *      // apply all the recorded actions on the given object
 *      replay(target: IStateTreeNode): any
 * }
 * ```
 *
 * @export
 * @param {IStateTreeNode} subject
 * @returns {IPatchRecorder}
 */
function recordActions(subject) {
    var recorder = {
        actions: [],
        stop: function () { return disposer(); },
        replay: function (target) {
            applyAction(target, recorder.actions);
        }
    };
    var disposer = onAction(subject, recorder.actions.push.bind(recorder.actions));
    return recorder;
}
/**
 * The inverse of `unprotect`
 *
 * @export
 * @param {IStateTreeNode} target
 *
 */
function protect(target) {
    var node = getStateTreeNode(target);
    if (!node.isRoot)
        fail("`protect` can only be invoked on root nodes");
    node.isProtectionEnabled = true;
}
/**
 * By default it is not allowed to directly modify a model. Models can only be modified through actions.
 * However, in some cases you don't care about the advantages (like replayability, tracability, etc) this yields.
 * For example because you are building a PoC or don't have any middleware attached to your tree.
 *
 * In that case you can disable this protection by calling `unprotect` on the root of your tree.
 *
 * @example
 * const Todo = types.model({
 *     done: false,
 *     toggle() {
 *         this.done = !this.done
 *     }
 * })
 *
 * const todo = new Todo()
 * todo.done = true // OK
 * protect(todo)
 * todo.done = false // throws!
 * todo.toggle() // OK
 */
function unprotect(target) {
    var node = getStateTreeNode(target);
    if (!node.isRoot)
        fail("`unprotect` can only be invoked on root nodes");
    node.isProtectionEnabled = false;
}
/**
 * Returns true if the object is in protected mode, @see protect
 */
function isProtected(target) {
    return getStateTreeNode(target).isProtected;
}
/**
 * Applies a snapshot to a given model instances. Patch and snapshot listeners will be invoked as usual.
 *
 * @export
 * @param {Object} target
 * @param {Object} snapshot
 * @returns
 */
function applySnapshot(target, snapshot) {
    return getStateTreeNode(target).applySnapshot(snapshot);
}
/**
 * Calculates a snapshot from the given model instance. The snapshot will always reflect the latest state but use
 * structural sharing where possible. Doesn't require MobX transactions to be completed.
 *
 * @export
 * @param {Object} target
 * @returns {*}
 */
function getSnapshot(target) {
    return getStateTreeNode(target).snapshot;
}
/**
 * Given a model instance, returns `true` if the object has a parent, that is, is part of another object, map or array
 *
 * @export
 * @param {Object} target
 * @param {number} depth = 1, how far should we look upward?
 * @returns {boolean}
 */
function hasParent(target, depth) {
    if (depth === void 0) { depth = 1; }
    if (depth < 0)
        fail("Invalid depth: " + depth + ", should be >= 1");
    var parent = getStateTreeNode(target).parent;
    while (parent) {
        if (--depth === 0)
            return true;
        parent = parent.parent;
    }
    return false;
}
/**
 * Returns the immediate parent of this object, or null.
 *
 * Note that the immediate parent can be either an object, map or array, and
 * doesn't necessarily refer to the parent model
 *
 * @export
 * @param {Object} target
 * @param {number} depth = 1, how far should we look upward?
 * @returns {*}
 */
function getParent(target, depth) {
    if (depth === void 0) { depth = 1; }
    if (depth < 0)
        fail("Invalid depth: " + depth + ", should be >= 1");
    var d = depth;
    var parent = getStateTreeNode(target).parent;
    while (parent) {
        if (--d === 0)
            return parent.storedValue;
        parent = parent.parent;
    }
    return fail("Failed to find the parent of " + getStateTreeNode(target) + " at depth " + depth);
}
/**
 * Given an object in a model tree, returns the root object of that tree
 *
 * @export
 * @param {Object} target
 * @returns {*}
 */
function getRoot(target) {
    return getStateTreeNode(target).root.storedValue;
}
/**
 * Returns the path of the given object in the model tree
 *
 * @export
 * @param {Object} target
 * @returns {string}
 */
function getPath(target) {
    return getStateTreeNode(target).path;
}
/**
 * Returns the path of the given object as unescaped string array
 *
 * @export
 * @param {Object} target
 * @returns {string[]}
 */
function getPathParts(target) {
    return splitJsonPath(getStateTreeNode(target).path);
}
/**
 * Returns true if the given object is the root of a model tree
 *
 * @export
 * @param {Object} target
 * @returns {boolean}
 */
function isRoot(target) {
    return getStateTreeNode(target).isRoot;
}
/**
 * Resolves a path relatively to a given object.
 * Returns undefined if no value can be found.
 *
 * @export
 * @param {Object} target
 * @param {string} path - escaped json path
 * @returns {*}
 */
function resolvePath(target, path) {
    var node = getStateTreeNode(target).resolve(path);
    return node ? node.value : undefined;
}
/**
 * Resolves a model instance given a root target, the type and the identifier you are searching for.
 * Returns undefined if no value can be found.
 *
 * @export
 * @param {IType<any, any>} type
 * @param {IStateTreeNode} target
 * @param {(string | number)} identifier
 * @returns {*}
 */
function resolveIdentifier(type, target, identifier) {
    if (!isType(type))
        fail("Expected a type as first argument");
    var node = getStateTreeNode(target).root.identifierCache.resolve(type, "" + identifier);
    return node ? node.value : undefined;
}
/**
 *
 *
 * @export
 * @param {Object} target
 * @param {string} path
 * @returns {*}
 */
function tryResolve(target, path) {
    var node = getStateTreeNode(target).resolve(path, false);
    if (node === undefined)
        return undefined;
    return node ? node.value : undefined;
}
/**
 * Given two state tree nodes that are part of the same tree,
 * returns the shortest jsonpath needed to navigate from the one to the other
 *
 * @export
 * @param {IStateTreeNode} base
 * @param {IStateTreeNode} target
 * @returns {string}
 */
function getRelativePath(base, target) {
    return getStateTreeNode(base).getRelativePathTo(getStateTreeNode(target));
}
/**
 * Returns a deep copy of the given state tree node as new tree.
 * Short hand for `snapshot(x) = getType(x).create(getSnapshot(x))`
 *
 * _Tip: clone will create a literal copy, including the same identifiers. To modify identifiers etc during cloning, don't use clone but take a snapshot of the tree, modify it, and create new instance_
 *
 * @export
 * @template T
 * @param {T} source
 * @param {boolean | any} keepEnvironment indicates whether the clone should inherit the same environment (`true`, the default), or not have an environment (`false`). If an object is passed in as second argument, that will act as the environment for the cloned tree.
 * @returns {T}
 */
function clone(source, keepEnvironment) {
    if (keepEnvironment === void 0) { keepEnvironment = true; }
    var node = getStateTreeNode(source);
    return node.type.create(node.snapshot, keepEnvironment === true
        ? node.root._environment
        : keepEnvironment === false ? undefined : keepEnvironment // it's an object or something else
    );
}
/**
 * Removes a model element from the state tree, and let it live on as a new state tree
 */
function detach(thing) {
    getStateTreeNode(thing).detach();
    return thing;
}
/**
 * Removes a model element from the state tree, and mark it as end-of-life; the element should not be used anymore
 */
function destroy(thing) {
    var node = getStateTreeNode(thing);
    if (node.isRoot)
        node.die();
    else
        node.parent.removeChild(node.subpath);
}
/**
 * Returns true if the given state tree node is not killed yet.
 * This means that the node is still a part of a tree, and that `destroy`
 * has not been called. If a node is not alive anymore, the only thing one can do with it
 * is requesting it's last path and snapshot
 *
 * @export
 * @param {IStateTreeNode} thing
 * @returns {boolean}
 */
function isAlive(thing) {
    return getStateTreeNode(thing).isAlive;
}
/**
 * Use this utility to register a function that should be called whenever the
 * targeted state tree node is destroyed. This is a useful alternative to managing
 * cleanup methods yourself using the `beforeDestroy` hook.
 *
 * @example
 * ```javascript
 * const Todo = types.model({
 *   title: types.string
 * }, {
 *   afterCreate() {
 *     const autoSaveDisposer = reaction(
 *       () => getSnapshot(this),
 *       snapshot => sendSnapshotToServerSomehow(snapshot)
 *     )
 *     // stop sending updates to server if this
 *     // instance is destroyed
 *     addDisposer(this, autoSaveDisposer)
 *   }
 * })
 * ```
 *
 * @export
 * @param {IStateTreeNode} target
 * @param {() => void} disposer
 */
function addDisposer(target, disposer) {
    getStateTreeNode(target).addDisposer(disposer);
}
/**
 * Returns the environment of the current state tree. For more info on environments,
 * see [Dependency injection](https://github.com/mobxjs/mobx-state-tree#dependency-injection)
 *
 * @export
 * @param {IStateTreeNode} thing
 * @returns {*}
 */
function getEnv(thing) {
    var node = getStateTreeNode(thing);
    var env = node.root._environment;
    if (!!!env)
        fail("Node '" + node + "' is not part of state tree that was initialized with an environment. Environment can be passed as second argumentt to .create()");
    return env;
}
/**
 * Performs a depth first walk through a tree
 */
function walk(thing, processor) {
    var node = getStateTreeNode(thing);
    // tslint:disable-next-line:no_unused-variable
    node.getChildren().forEach(function (child) {
        if (isStateTreeNode(child.storedValue))
            walk(child.storedValue, processor);
    });
    processor(node.storedValue);
}

var IdentifierCache = (function () {
    function IdentifierCache() {
        this.cache = __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"].map();
    }
    IdentifierCache.prototype.addNodeToCache = function (node) {
        if (node.identifierAttribute) {
            var identifier = node.identifier;
            if (!this.cache.has(identifier)) {
                this.cache.set(identifier, __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"].shallowArray());
            }
            var set = this.cache.get(identifier);
            if (set.indexOf(node) !== -1)
                fail("Already registered");
            set.push(node);
        }
        return this;
    };
    IdentifierCache.prototype.mergeCache = function (node) {
        var _this = this;
        node.identifierCache.cache.values().forEach(function (nodes) {
            return nodes.forEach(function (child) {
                _this.addNodeToCache(child);
            });
        });
    };
    IdentifierCache.prototype.notifyDied = function (node) {
        if (node.identifierAttribute) {
            var set = this.cache.get(node.identifier);
            if (set)
                set.remove(node);
        }
    };
    IdentifierCache.prototype.splitCache = function (node) {
        var res = new IdentifierCache();
        var basePath = node.path;
        this.cache.values().forEach(function (nodes) {
            for (var i = nodes.length - 1; i >= 0; i--) {
                if (nodes[i].path.indexOf(basePath) === 0) {
                    res.addNodeToCache(nodes[i]);
                    nodes.splice(i, 1);
                }
            }
        });
        return res;
    };
    IdentifierCache.prototype.resolve = function (type, identifier) {
        var set = this.cache.get(identifier);
        if (!set)
            return null;
        var matches = set.filter(function (candidate) { return type.isAssignableFrom(candidate.type); });
        switch (matches.length) {
            case 0:
                return null;
            case 1:
                return matches[0];
            default:
                return fail("Cannot resolve a reference to type '" + type.name + "' with id: '" + identifier + "' unambigously, there are multiple candidates: " + matches
                    .map(function (n) { return n.path; })
                    .join(", "));
        }
    };
    return IdentifierCache;
}());

var nextNodeId = 1;
var Node = (function () {
    function Node(type, parent, subpath, environment, storedValue) {
        var _this = this;
        // optimization: these fields make MST memory expensive for primitives. Most can be initialized lazily, or with EMPTY_ARRAY on prototype
        this.nodeId = ++nextNodeId;
        this._parent = null;
        this.subpath = "";
        this.isProtectionEnabled = true;
        this.identifierAttribute = undefined; // not to be modified directly, only through model initialization
        this._environment = undefined;
        this._isRunningAction = false; // only relevant for root
        this._autoUnbox = true; // unboxing is disabled when reading child nodes
        this._isAlive = true; // optimization: use binary flags for all these switches
        this._isDetaching = false;
        this.middlewares = [];
        this.snapshotSubscribers = [];
        this.patchSubscribers = [];
        this.disposers = [];
        this.type = type;
        this._parent = parent;
        this.subpath = subpath;
        this.storedValue = storedValue;
        this._environment = environment;
        this.unbox = this.unbox.bind(this);
        // Optimization: this does not need to be done per instance
        // if some pieces from createActionInvoker are extracted
        this.applyPatches = createActionInvoker("@APPLY_PATCHES", function (patches) {
            patches.forEach(function (patch) {
                var parts = splitJsonPath(patch.path);
                var node = _this.resolvePath(parts.slice(0, -1));
                node.applyPatchLocally(parts[parts.length - 1], patch);
            });
        }).bind(this.storedValue);
        this.applySnapshot = createActionInvoker("@APPLY_SNAPSHOT", function (snapshot) {
            // if the snapshot is the same as the current one, avoid performing a reconcile
            if (snapshot === _this.snapshot)
                return;
            // else, apply it by calling the type logic
            return _this.type.applySnapshot(_this, snapshot);
        }).bind(this.storedValue);
        // optimization: don't keep the snapshot by default alive with a reaction by default
        // in prod mode. This saves lot of GC overhead (important for e.g. React Native)
        // if the feature is not actively used
        // downside; no structural sharing if getSnapshot is called incidently
        var snapshotDisposer = Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["reaction"])(function () { return _this.snapshot; }, function (snapshot) {
            _this.emitSnapshot(snapshot);
        });
        snapshotDisposer.onError(function (e) {
            throw e;
        });
        this.addDisposer(snapshotDisposer);
    }
    Object.defineProperty(Node.prototype, "identifier", {
        get: function () {
            return this.identifierAttribute ? this.storedValue[this.identifierAttribute] : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "path", {
        /*
         * Returnes (escaped) path representation as string
         */
        get: function () {
            if (!this.parent)
                return "";
            return this.parent.path + "/" + escapeJsonPath(this.subpath);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "isRoot", {
        get: function () {
            return this.parent === null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "root", {
        // TODO: make computed
        get: function () {
            // future optimization: store root ref in the node and maintain it
            var p, r = this;
            while ((p = r.parent))
                r = p;
            return r;
        },
        enumerable: true,
        configurable: true
    });
    // TODO: lift logic outside this file
    Node.prototype.getRelativePathTo = function (target) {
        // PRE condition target is (a child of) base!
        if (this.root !== target.root)
            fail("Cannot calculate relative path: objects '" + this + "' and '" + target + "' are not part of the same object tree");
        var baseParts = splitJsonPath(this.path);
        var targetParts = splitJsonPath(target.path);
        var common = 0;
        for (; common < baseParts.length; common++) {
            if (baseParts[common] !== targetParts[common])
                break;
        }
        // TODO: assert that no targetParts paths are "..", "." or ""!
        return (baseParts.slice(common).map(function (_) { return ".."; }).join("/") +
            joinJsonPath(targetParts.slice(common)));
    };
    Node.prototype.resolve = function (path, failIfResolveFails) {
        if (failIfResolveFails === void 0) { failIfResolveFails = true; }
        return this.resolvePath(splitJsonPath(path), failIfResolveFails);
    };
    Node.prototype.resolvePath = function (pathParts, failIfResolveFails) {
        if (failIfResolveFails === void 0) { failIfResolveFails = true; }
        // counter part of getRelativePath
        // note that `../` is not part of the JSON pointer spec, which is actually a prefix format
        // in json pointer: "" = current, "/a", attribute a, "/" is attribute "" etc...
        // so we treat leading ../ apart...
        var current = this;
        for (var i = 0; i < pathParts.length; i++) {
            if (pathParts[i] === "" // '/bla' or 'a//b' splits to empty strings
            )
                current = current.root;
            else if (pathParts[i] === "..")
                current = current.parent;
            else if (pathParts[i] === "." || pathParts[i] === "")
                continue;
            else if (current) {
                current = current.getChildNode(pathParts[i]);
                continue;
            }
            if (!current) {
                if (failIfResolveFails)
                    return fail("Could not resolve '" + pathParts[i] + "' in '" + joinJsonPath(pathParts.slice(0, i - 1)) + "', path of the patch does not resolve");
                else
                    return undefined;
            }
        }
        return current;
    };
    Object.defineProperty(Node.prototype, "value", {
        get: function () {
            if (!this._isAlive)
                return undefined;
            return this.type.getValue(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "isAlive", {
        get: function () {
            return this._isAlive;
        },
        enumerable: true,
        configurable: true
    });
    Node.prototype.die = function () {
        if (this._isDetaching)
            return;
        if (isStateTreeNode(this.storedValue)) {
            walk(this.storedValue, function (child) { return getStateTreeNode(child).aboutToDie(); });
            walk(this.storedValue, function (child) { return getStateTreeNode(child).finalizeDeath(); });
        }
    };
    Node.prototype.aboutToDie = function () {
        this.disposers.splice(0).forEach(function (f) { return f(); });
        this.fireHook("beforeDestroy");
    };
    Node.prototype.finalizeDeath = function () {
        // invariant: not called directly but from "die"
        this.root.identifierCache.notifyDied(this);
        var self = this;
        var oldPath = this.path;
        addReadOnlyProp(this, "snapshot", this.snapshot); // kill the computed prop and just store the last snapshot
        this.patchSubscribers.splice(0);
        this.snapshotSubscribers.splice(0);
        this.patchSubscribers.splice(0);
        this._isAlive = false;
        this._parent = null;
        this.subpath = "";
        // This is quite a hack, once interceptable objects / arrays / maps are extracted from mobx,
        // we could express this in a much nicer way
        Object.defineProperty(this.storedValue, "$mobx", {
            get: function () {
                fail("This object has died and is no longer part of a state tree. It cannot be used anymore. The object (of type '" + self
                    .type
                    .name + "') used to live at '" + oldPath + "'. It is possible to access the last snapshot of this object using 'getSnapshot', or to create a fresh copy using 'clone'. If you want to remove an object from the tree without killing it, use 'detach' instead.");
            }
        });
    };
    Node.prototype.assertAlive = function () {
        if (!this._isAlive)
            fail(this + " cannot be used anymore as it has died; it has been removed from a state tree. If you want to remove an element from a tree and let it live on, use 'detach' or 'clone' the value");
    };
    Object.defineProperty(Node.prototype, "snapshot", {
        get: function () {
            if (!this._isAlive)
                return undefined;
            // advantage of using computed for a snapshot is that nicely respects transactions etc.
            // Optimization: only freeze on dev builds
            return freeze(this.type.getSnapshot(this));
        },
        enumerable: true,
        configurable: true
    });
    Node.prototype.onSnapshot = function (onChange) {
        return registerEventHandler(this.snapshotSubscribers, onChange);
    };
    Node.prototype.emitSnapshot = function (snapshot) {
        this.snapshotSubscribers.forEach(function (f) { return f(snapshot); });
    };
    Node.prototype.applyPatchLocally = function (subpath, patch) {
        this.assertWritable();
        this.type.applyPatchLocally(this, subpath, patch);
    };
    Node.prototype.onPatch = function (onPatch$$1, includeOldValue) {
        return registerEventHandler(this.patchSubscribers, includeOldValue ? onPatch$$1 : function (patch) { return onPatch$$1(stripPatch(patch)); });
    };
    Node.prototype.emitPatch = function (patch, source) {
        if (this.patchSubscribers.length) {
            var localizedPatch_1 = extend({}, patch, {
                path: source.path.substr(this.path.length) + "/" + patch.path // calculate the relative path of the patch
            });
            this.patchSubscribers.forEach(function (f) { return f(localizedPatch_1); });
        }
        if (this.parent)
            this.parent.emitPatch(patch, source);
    };
    Node.prototype.setParent = function (newParent, subpath) {
        if (subpath === void 0) { subpath = null; }
        if (this.parent === newParent && this.subpath === subpath)
            return;
        if (this._parent && newParent && newParent !== this._parent) {
            fail("A node cannot exists twice in the state tree. Failed to add " + this + " to path '" + newParent.path + "/" + subpath + "'.");
        }
        if (!this._parent && newParent && newParent.root === this) {
            fail("A state tree is not allowed to contain itself. Cannot assign " + this + " to path '" + newParent.path + "/" + subpath + "'");
        }
        if (!this._parent && !!this._environment) {
            fail("A state tree that has been initialized with an environment cannot be made part of another state tree.");
        }
        if (this.parent && !newParent) {
            this.die();
        }
        else {
            this.subpath = subpath || "";
            if (newParent && newParent !== this._parent) {
                newParent.root.identifierCache.mergeCache(this);
                this._parent = newParent;
                this.fireHook("afterAttach");
            }
        }
    };
    Node.prototype.addDisposer = function (disposer) {
        this.disposers.unshift(disposer);
    };
    Node.prototype.isRunningAction = function () {
        if (this._isRunningAction)
            return true;
        if (this.isRoot)
            return false;
        return this.parent.isRunningAction();
    };
    Node.prototype.addMiddleWare = function (handler) {
        // TODO: check / warn if not protected?
        return registerEventHandler(this.middlewares, handler);
    };
    Node.prototype.getChildNode = function (subpath) {
        this.assertAlive();
        this._autoUnbox = false;
        var res = this.type.getChildNode(this, subpath);
        this._autoUnbox = true;
        return res;
    };
    Node.prototype.getChildren = function () {
        this.assertAlive();
        this._autoUnbox = false;
        var res = this.type.getChildren(this);
        this._autoUnbox = true;
        return res;
    };
    Node.prototype.getChildType = function (key) {
        return this.type.getChildType(key);
    };
    Object.defineProperty(Node.prototype, "isProtected", {
        get: function () {
            return this.root.isProtectionEnabled;
        },
        enumerable: true,
        configurable: true
    });
    Node.prototype.assertWritable = function () {
        this.assertAlive();
        if (!this.isRunningAction() && this.isProtected) {
            fail("Cannot modify '" + this + "', the object is protected and can only be modified by using an action.");
        }
    };
    Node.prototype.removeChild = function (subpath) {
        this.type.removeChild(this, subpath);
    };
    Node.prototype.detach = function () {
        if (!this._isAlive)
            fail("Error while detaching, node is not alive.");
        if (this.isRoot)
            return;
        else {
            this.fireHook("beforeDetach");
            this._environment = this.root._environment; // make backup of environment
            this._isDetaching = true;
            this.identifierCache = this.root.identifierCache.splitCache(this);
            this.parent.removeChild(this.subpath);
            this._parent = null;
            this.subpath = "";
            this._isDetaching = false;
        }
    };
    Node.prototype.unbox = function (childNode) {
        if (childNode && this._autoUnbox === true)
            return childNode.value;
        return childNode;
    };
    Node.prototype.fireHook = function (name) {
        var fn = this.storedValue && typeof this.storedValue === "object" && this.storedValue[name];
        if (typeof fn === "function")
            fn.apply(this.storedValue);
    };
    Node.prototype.toString = function () {
        var identifier = this.identifier ? "(id: " + this.identifier + ")" : "";
        return this.type.name + "@" + (this.path || "<root>") + identifier + (this.isAlive
            ? ""
            : "[dead]");
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]
    ], Node.prototype, "_parent", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]
    ], Node.prototype, "subpath", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]
    ], Node.prototype, "path", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]
    ], Node.prototype, "value", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]
    ], Node.prototype, "snapshot", null);
    return Node;
}());
/**
 * Returns true if the given value is a node in a state tree.
 * More precisely, that is, if the value is an instance of a
 * `types.model`, `types.array` or `types.map`.
 *
 * @export
 * @param {*} value
 * @returns {value is IStateTreeNode}
 */
function isStateTreeNode(value) {
    return !!(value && value.$treenode);
}
function getStateTreeNode(value) {
    if (isStateTreeNode(value))
        return value.$treenode;
    else
        return fail("Value " + value + " is no MST Node");
}
function canAttachNode(value) {
    return (value &&
        typeof value === "object" &&
        !(value instanceof Date) &&
        !isStateTreeNode(value) &&
        !Object.isFrozen(value));
}
function toJSON() {
    return getStateTreeNode(this).snapshot;
}
function createNode(type, parent, subpath, environment, initialValue, createNewInstance, finalizeNewInstance) {
    if (createNewInstance === void 0) { createNewInstance = identity; }
    if (finalizeNewInstance === void 0) { finalizeNewInstance = noop; }
    if (isStateTreeNode(initialValue)) {
        var targetNode = getStateTreeNode(initialValue);
        if (!targetNode.isRoot)
            fail("Cannot add an object to a state tree if it is already part of the same or another state tree. Tried to assign an object to '" + (parent
                ? parent.path
                : "") + "/" + subpath + "', but it lives already at '" + targetNode.path + "'");
        targetNode.setParent(parent, subpath);
        return targetNode;
    }
    var instance = createNewInstance(initialValue);
    var canAttachTreeNode = canAttachNode(instance);
    // tslint:disable-next-line:no_unused-variable
    var node = new Node(type, parent, subpath, environment, instance);
    if (!parent)
        node.identifierCache = new IdentifierCache();
    if (canAttachTreeNode)
        addHiddenFinalProp(instance, "$treenode", node);
    var sawException = true;
    try {
        if (canAttachTreeNode)
            addReadOnlyProp(instance, "toJSON", toJSON);
        node._isRunningAction = true;
        finalizeNewInstance(node, initialValue);
        node._isRunningAction = false;
        if (parent)
            parent.root.identifierCache.addNodeToCache(node);
        else
            node.identifierCache.addNodeToCache(node);
        node.fireHook("afterCreate");
        if (parent)
            node.fireHook("afterAttach");
        sawException = false;
        return node;
    }
    finally {
        if (sawException) {
            // short-cut to die the instance, to avoid the snapshot computed starting to throw...
            
            node._isAlive = false;
        }
    }
}

// based on: https://github.com/mobxjs/mobx-utils/blob/master/src/async-action.ts
// export function asyncAction<R>(generator: () => IterableIterator<any>): () => Promise<R>
// export function asyncAction<A1>(
//     generator: (a1: A1) => IterableIterator<any>
// ): (a1: A1) => Promise<any> // Ideally we want to have R instead of Any, but cannot specify R without specifying A1 etc... 'any' as result is better then not specifying request args
// export function asyncAction<A1, A2, A3, A4, A5, A6, A7, A8>(
//     generator: (
//         a1: A1,
//         a2: A2,
//         a3: A3,
//         a4: A4,
//         a5: A5,
//         a6: A6,
//         a7: A7,
//         a8: A8
//     ) => IterableIterator<any>
// ): (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7, a8: A8) => Promise<any>
// export function asyncAction<A1, A2, A3, A4, A5, A6, A7>(
//     generator: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7) => IterableIterator<any>
// ): (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7) => Promise<any>
// export function asyncAction<A1, A2, A3, A4, A5, A6>(
//     generator: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6) => IterableIterator<any>
// ): (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6) => Promise<any>
// export function asyncAction<A1, A2, A3, A4, A5>(
//     generator: (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => IterableIterator<any>
// ): (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => Promise<any>
// export function asyncAction<A1, A2, A3, A4>(
//     generator: (a1: A1, a2: A2, a3: A3, a4: A4) => IterableIterator<any>
// ): (a1: A1, a2: A2, a3: A3, a4: A4) => Promise<any>
// export function asyncAction<A1, A2, A3>(
//     generator: (a1: A1, a2: A2, a3: A3) => IterableIterator<any>
// ): (a1: A1, a2: A2, a3: A3) => Promise<any>
// export function asyncAction<A1, A2>(
//     generator: (a1: A1, a2: A2) => IterableIterator<any>
// ): (a1: A1, a2: A2) => Promise<any>
// export function asyncAction<A1>(
//     generator: (a1: A1) => IterableIterator<any>
// ): (a1: A1) => Promise<any>
// TODO: disabled until #273 is resolved
// /**
//  * See [asynchronous actions](https://github.com/mobxjs/mobx-state-tree/blob/master/docs/async-actions.md).
//  *
//  * @export
//  * @alias async
//  * @returns {Promise}
//  */
// export function asyncAction(asyncAction: any): any {
//     if (!isGeneratorFunction(asyncAction))
//         fail(`async expects a generator function (e.g. function* () {...}))`)
//     // async just helps with typings, the real creation of the invoker is done by the ActionProperty type
//     return asyncAction
// }
var generatorId = 0;
function createAsyncActionInvoker(name, generator) {
    // Implementation based on https://github.com/tj/co/blob/master/index.js
    var runId = ++generatorId;
    return function asyncAction() {
        var ctx = this;
        var args = arguments;
        function wrap(fn, mode, arg) {
            createActionInvoker(name, fn, mode, runId).call(ctx, arg);
        }
        return new Promise(function (resolve, reject) {
            var gen;
            createActionInvoker(name, function asyncActionInit() {
                gen = generator.apply(this, arguments);
                onFulfilled(undefined); // kick off the process
            }, "invoke", runId).apply(ctx, args);
            function onFulfilled(res) {
                var ret;
                try {
                    // prettier-ignore
                    wrap(function (r) { ret = gen.next(r); }, "yield", res);
                }
                catch (e) {
                    // prettier-ignore
                    setImmediate(function () {
                        wrap(function (r) { reject(e); }, "throw", e);
                    });
                    return;
                }
                next(ret);
                return;
            }
            function onRejected(err) {
                var ret;
                try {
                    // prettier-ignore
                    wrap(function (r) { ret = gen.throw(r); }, "yieldError", err); // or yieldError?
                }
                catch (e) {
                    // prettier-ignore
                    setImmediate(function () {
                        wrap(function (r) { reject(e); }, "throw", e);
                    });
                    return;
                }
                next(ret);
            }
            function next(ret) {
                if (ret.done) {
                    // prettier-ignore
                    setImmediate(function () {
                        wrap(function (r) { resolve(r); }, "return", ret.value);
                    });
                    return;
                }
                // TODO: support more type of values? See https://github.com/tj/co/blob/249bbdc72da24ae44076afd716349d2089b31c4c/index.js#L100
                if (!ret.value || typeof ret.value.then !== "function")
                    fail("Only promises can be yielded to `async`, got: " + ret);
                return ret.value.then(onFulfilled, onRejected);
            }
        });
    };
}

function prettyPrintValue(value) {
    return typeof value === "function"
        ? "<function" + (value.name ? " " + value.name : "") + ">"
        : isStateTreeNode(value) ? "<" + value + ">" : "`" + JSON.stringify(value) + "`";
}
function toErrorString(error) {
    var value = error.value;
    var type = error.context[error.context.length - 1].type;
    var fullPath = error.context.map(function (_a) {
        var path = _a.path;
        return path;
    }).filter(function (path) { return path.length > 0; }).join("/");
    var pathPrefix = fullPath.length > 0 ? "at path \"/" + fullPath + "\" " : "";
    var currentTypename = isStateTreeNode(value)
        ? "value of type " + getStateTreeNode(value).type.name + ":"
        : isPrimitive(value) ? "value" : "snapshot";
    var isSnapshotCompatible = type && isStateTreeNode(value) && type.is(getStateTreeNode(value).snapshot);
    return ("" + pathPrefix + currentTypename + " " + prettyPrintValue(value) + " is not assignable " + (type
        ? "to type: `" + type.name + "`"
        : "") +
        (error.message ? " (" + error.message + ")" : "") +
        (type
            ? isPrimitiveType(type)
                ? "."
                : ", expected an instance of `" + type.name + "` or a snapshot like `" + type.describe() + "` instead." +
                    (isSnapshotCompatible
                        ? " (Note that a snapshot of the provided value is compatible with the targeted type)"
                        : "")
            : "."));
}

function getContextForPath(context, path, type) {
    return context.concat([{ path: path, type: type }]);
}
function typeCheckSuccess() {
    return EMPTY_ARRAY;
}
function typeCheckFailure(context, value, message) {
    return [{ context: context, value: value, message: message }];
}
function flattenTypeErrors(errors) {
    return errors.reduce(function (a, i) { return a.concat(i); }, []);
}
// TODO; doublecheck: typecheck should only needed to be invoked from: type.create and array / map / value.property will change
function typecheck(type, value) {
    var errors = type.validate(value, [{ path: "", type: type }]);
    if (errors.length > 0) {
        fail("Error while converting " + prettyPrintValue(value) + " to `" + type.name + "`:\n" +
            errors.map(toErrorString).join("\n"));
    }
}

/*
 * A complex type produces a MST node (Node in the state tree)
 */
var ComplexType = (function () {
    function ComplexType(name) {
        this.isType = true;
        this.name = name;
    }
    ComplexType.prototype.create = function (snapshot, environment) {
        if (snapshot === void 0) { snapshot = this.getDefaultSnapshot(); }
        typecheck(this, snapshot);
        return this.instantiate(null, "", environment, snapshot).value;
    };
    ComplexType.prototype.isAssignableFrom = function (type) {
        return type === this;
    };
    ComplexType.prototype.validate = function (value, context) {
        if (isStateTreeNode(value)) {
            return getType(value) === this || this.isAssignableFrom(getType(value))
                ? typeCheckSuccess()
                : typeCheckFailure(context, value);
            // it is tempting to compare snapshots, but in that case we should always clone on assignments...
        }
        return this.isValidSnapshot(value, context);
    };
    ComplexType.prototype.is = function (value) {
        return this.validate(value, [{ path: "", type: this }]).length === 0;
    };
    ComplexType.prototype.reconcile = function (current, newValue) {
        if (current.snapshot === newValue)
            // newValue is the current snapshot of the node, noop
            return current;
        if (isStateTreeNode(newValue) && getStateTreeNode(newValue) === current)
            // the current node is the same as the new one
            return current;
        if (current.type === this &&
            isMutable(newValue) &&
            !isStateTreeNode(newValue) &&
            (!current.identifierAttribute ||
                current.identifier === newValue[current.identifierAttribute])) {
            // the newValue has no node, so can be treated like a snapshot
            // we can reconcile
            current.applySnapshot(newValue);
            return current;
        }
        // current node cannot be recycled in any way
        var parent = current.parent, subpath = current.subpath;
        current.die();
        // attempt to reuse the new one
        if (isStateTreeNode(newValue) && this.isAssignableFrom(getType(newValue))) {
            // newValue is a Node as well, move it here..
            var newNode = getStateTreeNode(newValue);
            newNode.setParent(parent, subpath);
            return newNode;
        }
        // nothing to do, we have to create a new node
        return this.instantiate(parent, subpath, current._environment, newValue);
    };
    Object.defineProperty(ComplexType.prototype, "Type", {
        get: function () {
            return fail("Factory.Type should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.Type`");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComplexType.prototype, "SnapshotType", {
        get: function () {
            return fail("Factory.SnapshotType should not be actually called. It is just a Type signature that can be used at compile time with Typescript, by using `typeof type.SnapshotType`");
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["action"]
    ], ComplexType.prototype, "create", null);
    return ComplexType;
}());
var Type = (function (_super) {
    __extends(Type, _super);
    function Type(name) {
        return _super.call(this, name) || this;
    }
    Type.prototype.getValue = function (node) {
        return node.storedValue;
    };
    Type.prototype.getSnapshot = function (node) {
        return node.storedValue;
    };
    Type.prototype.getDefaultSnapshot = function () {
        return undefined;
    };
    Type.prototype.applySnapshot = function (node, snapshot) {
        fail("Immutable types do not support applying snapshots");
    };
    Type.prototype.applyPatchLocally = function (node, subpath, patch) {
        fail("Immutable types do not support applying patches");
    };
    Type.prototype.getChildren = function (node) {
        return EMPTY_ARRAY;
    };
    Type.prototype.getChildNode = function (node, key) {
        return fail("No child '" + key + "' available in type: " + this.name);
    };
    Type.prototype.getChildType = function (key) {
        return fail("No child '" + key + "' available in type: " + this.name);
    };
    Type.prototype.reconcile = function (current, newValue) {
        // reconcile only if type and value are still the same
        if (current.type === this && current.storedValue === newValue)
            return current;
        var res = this.instantiate(current.parent, current.subpath, current._environment, newValue);
        current.die();
        return res;
    };
    Type.prototype.removeChild = function (node, subpath) {
        return fail("No child '" + subpath + "' available in type: " + this.name);
    };
    return Type;
}(ComplexType));

function mapToString() {
    return getStateTreeNode(this) + "(" + this.size + " items)";
}
function put(value) {
    if (!!!value)
        fail("Map.put cannot be used to set empty values");
    var node;
    if (isStateTreeNode(value)) {
        node = getStateTreeNode(value);
    }
    else if (isMutable(value)) {
        var targetType = getStateTreeNode(this).type
            .subType;
        node = getStateTreeNode(targetType.create(value));
    }
    else {
        return fail("Map.put can only be used to store complex values");
    }
    if (!node.identifierAttribute)
        fail("Map.put can only be used to store complex values that have an identifier type attribute");
    this.set(node.identifier, node.value);
    return this;
}
var MapType = (function (_super) {
    __extends(MapType, _super);
    function MapType(name, subType) {
        var _this = _super.call(this, name) || this;
        _this.shouldAttachNode = true;
        _this.flags = TypeFlags.Map;
        _this.createNewInstance = function () {
            // const identifierAttr = getIdentifierAttribute(this.subType)
            var map = __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"].shallowMap();
            addHiddenFinalProp(map, "put", put);
            addHiddenFinalProp(map, "toString", mapToString);
            return map;
        };
        _this.finalizeNewInstance = function (node, snapshot) {
            var instance = node.storedValue;
            __WEBPACK_IMPORTED_MODULE_0_mobx__["extras"].interceptReads(instance, node.unbox);
            Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["intercept"])(instance, function (c) { return _this.willChange(c); });
            node.applySnapshot(snapshot);
            Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["observe"])(instance, _this.didChange);
        };
        _this.subType = subType;
        return _this;
    }
    MapType.prototype.instantiate = function (parent, subpath, environment, snapshot) {
        return createNode(this, parent, subpath, environment, snapshot, this.createNewInstance, this.finalizeNewInstance);
    };
    MapType.prototype.describe = function () {
        return "Map<string, " + this.subType.describe() + ">";
    };
    MapType.prototype.getChildren = function (node) {
        return node.storedValue.values();
    };
    MapType.prototype.getChildNode = function (node, key) {
        var childNode = node.storedValue.get(key);
        if (!childNode)
            fail("Not a child " + key);
        return childNode;
    };
    MapType.prototype.willChange = function (change) {
        var node = getStateTreeNode(change.object);
        node.assertWritable();
        switch (change.type) {
            case "update":
                {
                    var newValue = change.newValue;
                    var oldValue = change.object.get(change.name);
                    if (newValue === oldValue)
                        return null;
                    typecheck(this.subType, newValue);
                    change.newValue = this.subType.reconcile(node.getChildNode(change.name), change.newValue);
                    this.verifyIdentifier(change.name, change.newValue);
                }
                break;
            case "add":
                {
                    typecheck(this.subType, change.newValue);
                    change.newValue = this.subType.instantiate(node, change.name, undefined, change.newValue);
                    this.verifyIdentifier(change.name, change.newValue);
                }
                break;
            case "delete":
                {
                    if (node.storedValue.has(change.name)) {
                        node.getChildNode(change.name).die();
                    }
                }
                break;
        }
        return change;
    };
    MapType.prototype.verifyIdentifier = function (expected, node) {
        var identifier = node.identifier;
        if (identifier !== null && "" + identifier !== "" + expected)
            fail("A map of objects containing an identifier should always store the object under their own identifier. Trying to store key '" + identifier + "', but expected: '" + expected + "'");
    };
    MapType.prototype.getValue = function (node) {
        return node.storedValue;
    };
    MapType.prototype.getSnapshot = function (node) {
        var res = {};
        node.getChildren().forEach(function (childNode) {
            res[childNode.subpath] = childNode.snapshot;
        });
        return res;
    };
    MapType.prototype.didChange = function (change) {
        var node = getStateTreeNode(change.object);
        switch (change.type) {
            case "update":
                return void node.emitPatch({
                    op: "replace",
                    path: escapeJsonPath(change.name),
                    value: change.newValue.snapshot,
                    oldValue: change.oldValue ? change.oldValue.snapshot : undefined
                }, node);
            case "add":
                return void node.emitPatch({
                    op: "add",
                    path: escapeJsonPath(change.name),
                    value: change.newValue.snapshot,
                    oldValue: undefined
                }, node);
            case "delete":
                return void node.emitPatch({
                    op: "remove",
                    path: escapeJsonPath(change.name),
                    oldValue: change.oldValue.snapshot
                }, node);
        }
    };
    MapType.prototype.applyPatchLocally = function (node, subpath, patch) {
        var target = node.storedValue;
        switch (patch.op) {
            case "add":
            case "replace":
                target.set(subpath, patch.value);
                break;
            case "remove":
                target.delete(subpath);
                break;
        }
    };
    MapType.prototype.applySnapshot = function (node, snapshot) {
        typecheck(this, snapshot);
        var target = node.storedValue;
        var currentKeys = {};
        target.keys().forEach(function (key) {
            currentKeys[key] = false;
        });
        // Don't use target.replace, as it will throw all existing items first
        Object.keys(snapshot).forEach(function (key) {
            target.set(key, snapshot[key]);
            currentKeys[key] = true;
        });
        Object.keys(currentKeys).forEach(function (key) {
            if (currentKeys[key] === false)
                target.delete(key);
        });
    };
    MapType.prototype.getChildType = function (key) {
        return this.subType;
    };
    MapType.prototype.isValidSnapshot = function (value, context) {
        var _this = this;
        if (!isPlainObject(value)) {
            return typeCheckFailure(context, value);
        }
        return flattenTypeErrors(Object.keys(value).map(function (path) {
            return _this.subType.validate(value[path], getContextForPath(context, path, _this.subType));
        }));
    };
    MapType.prototype.getDefaultSnapshot = function () {
        return {};
    };
    MapType.prototype.removeChild = function (node, subpath) {
        
        node.storedValue.delete(subpath);
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["action"]
    ], MapType.prototype, "applySnapshot", null);
    return MapType;
}(ComplexType));
/**
 * Creates a key based collection type who's children are all of a uniform declared type.
 * If the type stored in a map has an identifier, it is mandatory to store the child under that identifier in the map.
 *
 * This type will always produce [observable maps](https://mobx.js.org/refguide/map.html)
 *
 * @example
 * ```javascript
 * const Todo = types.model({
 *   id: types.identifier,
 *   task: types.string
 * })
 *
 * const TodoStore = types.model({
 *   todos: types.map(Todo)
 * })
 *
 * const s = TodoStore.create({ todos: [] })
 * s.todos.set(17, { task: "Grab coffee", id: 17 })
 * s.todos.put({ task: "Grab cookie", id: 18 }) // put will infer key from the identifier
 * console.log(s.todos.get(17)) // prints: "Grab coffee"
 * ```
 * @export
 * @alias types.map
 * @param {IType<S, T>} subtype
 * @returns {IComplexType<S[], IObservableArray<T>>}
 */
function map(subtype) {
    return new MapType("map<string, " + subtype.name + ">", subtype);
}

function arrayToString() {
    return getStateTreeNode(this) + "(" + this.length + " items)";
}
var ArrayType = (function (_super) {
    __extends(ArrayType, _super);
    function ArrayType(name, subType) {
        var _this = _super.call(this, name) || this;
        _this.shouldAttachNode = true;
        _this.flags = TypeFlags.Array;
        _this.createNewInstance = function () {
            var array = __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"].shallowArray();
            addHiddenFinalProp(array, "toString", arrayToString);
            return array;
        };
        _this.finalizeNewInstance = function (node, snapshot) {
            var instance = node.storedValue;
            __WEBPACK_IMPORTED_MODULE_0_mobx__["extras"].getAdministration(instance).dehancer = node.unbox;
            Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["intercept"])(instance, function (change) { return _this.willChange(change); });
            node.applySnapshot(snapshot);
            Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["observe"])(instance, _this.didChange);
        };
        _this.subType = subType;
        return _this;
    }
    ArrayType.prototype.describe = function () {
        return this.subType.describe() + "[]";
    };
    ArrayType.prototype.instantiate = function (parent, subpath, environment, snapshot) {
        return createNode(this, parent, subpath, environment, snapshot, this.createNewInstance, this.finalizeNewInstance);
    };
    ArrayType.prototype.getChildren = function (node) {
        return node.storedValue.peek();
    };
    ArrayType.prototype.getChildNode = function (node, key) {
        var index = parseInt(key, 10);
        if (index < node.storedValue.length)
            return node.storedValue[index];
        return fail("Not a child: " + key);
    };
    ArrayType.prototype.willChange = function (change) {
        var node = getStateTreeNode(change.object);
        node.assertWritable();
        var childNodes = node.getChildren();
        switch (change.type) {
            case "update":
                if (change.newValue === change.object[change.index])
                    return null;
                change.newValue = reconcileArrayChildren(node, this.subType, [childNodes[change.index]], [change.newValue], [change.index])[0];
                break;
            case "splice":
                var index_1 = change.index, removedCount = change.removedCount, added = change.added;
                change.added = reconcileArrayChildren(node, this.subType, childNodes.slice(index_1, index_1 + removedCount), added, added.map(function (_, i) { return index_1 + i; }));
                // update paths of remaining items
                for (var i = index_1 + removedCount; i < childNodes.length; i++) {
                    childNodes[i].setParent(node, "" + (i + added.length - removedCount));
                }
                break;
        }
        return change;
    };
    ArrayType.prototype.getValue = function (node) {
        return node.storedValue;
    };
    ArrayType.prototype.getSnapshot = function (node) {
        return node.getChildren().map(function (childNode) { return childNode.snapshot; });
    };
    ArrayType.prototype.didChange = function (change) {
        var node = getStateTreeNode(change.object);
        switch (change.type) {
            case "update":
                return void node.emitPatch({
                    op: "replace",
                    path: "" + change.index,
                    value: change.newValue.snapshot,
                    oldValue: change.oldValue ? change.oldValue.snapshot : undefined
                }, node);
            case "splice":
                for (var i = change.removedCount - 1; i >= 0; i--)
                    node.emitPatch({
                        op: "remove",
                        path: "" + (change.index + i),
                        oldValue: change.removed[i].snapshot
                    }, node);
                for (var i = 0; i < change.addedCount; i++)
                    node.emitPatch({
                        op: "add",
                        path: "" + (change.index + i),
                        value: node.getChildNode("" + (change.index + i)).snapshot,
                        oldValue: undefined
                    }, node);
                return;
        }
    };
    ArrayType.prototype.applyPatchLocally = function (node, subpath, patch) {
        var target = node.storedValue;
        var index = subpath === "-" ? target.length : parseInt(subpath);
        switch (patch.op) {
            case "replace":
                target[index] = patch.value;
                break;
            case "add":
                target.splice(index, 0, patch.value);
                break;
            case "remove":
                target.splice(index, 1);
                break;
        }
    };
    ArrayType.prototype.applySnapshot = function (node, snapshot) {
        typecheck(this, snapshot);
        var target = node.storedValue;
        target.replace(snapshot);
    };
    ArrayType.prototype.getChildType = function (key) {
        return this.subType;
    };
    ArrayType.prototype.isValidSnapshot = function (value, context) {
        var _this = this;
        if (!isArray(value)) {
            return typeCheckFailure(context, value);
        }
        return flattenTypeErrors(value.map(function (item, index) {
            return _this.subType.validate(item, getContextForPath(context, "" + index, _this.subType));
        }));
    };
    ArrayType.prototype.getDefaultSnapshot = function () {
        return [];
    };
    ArrayType.prototype.removeChild = function (node, subpath) {
        node.storedValue.splice(parseInt(subpath, 10), 1);
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["action"]
    ], ArrayType.prototype, "applySnapshot", null);
    return ArrayType;
}(ComplexType));
/**
 * Creates a index based collection type who's children are all of a uniform declared type.
 *
 * This type will always produce [observable arrays](https://mobx.js.org/refguide/array.html)
 *
 * @example
 * ```javascript
 * const Todo = types.model({
 *   task: types.string
 * })
 *
 * const TodoStore = types.model({
 *   todos: types.array(Todo)
 * })
 *
 * const s = TodoStore.create({ todos: [] })
 * s.todos.push({ task: "Grab coffee" })
 * console.log(s.todos[0]) // prints: "Grab coffee"
 * ```
 * @export
 * @alias types.array
 * @param {IType<S, T>} subtype
 * @returns {IComplexType<S[], IObservableArray<T>>}
 */
function array(subtype) {
    return new ArrayType(subtype.name + "[]", subtype);
}
function reconcileArrayChildren(parent, childType, oldNodes, newValues, newPaths) {
    var res = new Array(newValues.length);
    var nodesToBeKilled = {};
    var oldNodesByIdentifier = {};
    function findReconcilationCandidates(snapshot) {
        for (var attr in oldNodesByIdentifier) {
            var id = snapshot[attr];
            if ((typeof id === "string" || typeof id === "number") &&
                oldNodesByIdentifier[attr][id])
                return oldNodesByIdentifier[attr][id];
        }
        return null;
    }
    // Investigate which values we could reconcile, and mark them all as potentially dead
    oldNodes.forEach(function (oldNode) {
        if (oldNode.identifierAttribute)
            (oldNodesByIdentifier[oldNode.identifierAttribute] ||
                (oldNodesByIdentifier[oldNode.identifierAttribute] = {}))[oldNode.identifier] = oldNode;
        nodesToBeKilled[oldNode.nodeId] = oldNode;
    });
    // Prepare new values, try to reconcile
    newValues.forEach(function (newValue, index) {
        var subPath = "" + newPaths[index];
        if (isStateTreeNode(newValue)) {
            // A tree node...
            var childNode = getStateTreeNode(newValue);
            childNode.assertAlive();
            if (childNode.parent === parent) {
                // Came from this array already
                if (!nodesToBeKilled[childNode.nodeId]) {
                    // this node is owned by this parent, but not in the reconcilable set, so it must be double
                    fail("Cannot add an object to a state tree if it is already part of the same or another state tree. Tried to assign an object to '" + parent.path + "/" + subPath + "', but it lives already at '" + childNode.path + "'");
                }
                nodesToBeKilled[childNode.nodeId] = undefined;
                childNode.setParent(parent, subPath);
                res[index] = childNode; // reuse node
            }
            else {
                // Lives somewhere else (note that instantiate might still reconcile for complex types!)
                res[index] = childType.instantiate(parent, subPath, undefined, newValue);
            }
        }
        else if (isMutable(newValue)) {
            // The snapshot of a tree node, try to reconcile based on id
            var reconcilationCandidate = findReconcilationCandidates(newValue);
            if (reconcilationCandidate) {
                var childNode = childType.reconcile(reconcilationCandidate, newValue);
                nodesToBeKilled[reconcilationCandidate.nodeId] = undefined;
                childNode.setParent(parent, subPath);
                res[index] = childNode;
            }
            else {
                res[index] = childType.instantiate(parent, subPath, undefined, newValue);
            }
        }
        else {
            // create a fresh MST node
            res[index] = childType.instantiate(parent, subPath, undefined, newValue);
        }
    });
    // Kill non reconciled values
    for (var key in nodesToBeKilled)
        if (nodesToBeKilled[key] !== undefined)
            nodesToBeKilled[key].die();
    return res;
}

var CoreType = (function (_super) {
    __extends(CoreType, _super);
    function CoreType(name, flags, checker, initializer) {
        if (initializer === void 0) { initializer = identity; }
        var _this = _super.call(this, name) || this;
        _this.flags = flags;
        _this.checker = checker;
        _this.initializer = initializer;
        return _this;
    }
    CoreType.prototype.describe = function () {
        return this.name;
    };
    CoreType.prototype.instantiate = function (parent, subpath, environment, snapshot) {
        return createNode(this, parent, subpath, environment, snapshot, this.initializer);
    };
    CoreType.prototype.isValidSnapshot = function (value, context) {
        if (isPrimitive(value) && this.checker(value)) {
            return typeCheckSuccess();
        }
        return typeCheckFailure(context, value);
    };
    return CoreType;
}(Type));
/**
 * Creates a type that can only contain a string value.
 * This type is used for string values by default
 *
 * @export
 * @alias types.string
 * @example
 * ```javascript
 * const Person = types.model({
 *   firstName: types.string,
 *   lastName: "Doe"
 * })
 * ```
 */
// tslint:disable-next-line:variable-name
var string = new CoreType("string", TypeFlags.String, function (v) { return typeof v === "string"; });
/**
 * Creates a type that can only contain a numeric value.
 * This type is used for numeric values by default
 *
 * @export
 * @alias types.number
 * @example
 * ```javascript
 * const Vector = types.model({
 *   x: types.number,
 *   y: 0
 * })
 * ```
 */
// tslint:disable-next-line:variable-name
var number = new CoreType("number", TypeFlags.Number, function (v) { return typeof v === "number"; });
/**
 * Creates a type that can only contain a boolean value.
 * This type is used for boolean values by default
 *
 * @export
 * @alias types.boolean
 * @example
 * ```javascript
 * const Thing = types.model({
 *   isCool: types.boolean,
 *   isAwesome: false
 * })
 * ```
 */
// tslint:disable-next-line:variable-name
var boolean = new CoreType("boolean", TypeFlags.Boolean, function (v) { return typeof v === "boolean"; });
/**
 * The type of the value `null`
 *
 * @export
 * @alias types.null
 */
var nullType = new CoreType("null", TypeFlags.Null, function (v) { return v === null; });
/**
 * The type of the value `undefined`
 *
 * @export
 * @alias types.undefined
 */
var undefinedType = new CoreType("undefined", TypeFlags.Undefined, function (v) { return v === undefined; });
/**
 * Creates a type that can only contain a javascript Date value.
 *
 * @export
 * @alias types.Date
 * @example
 * ```javascript
 * const LogLine = types.model({
 *   timestamp: types.Date,
 * })
 *
 * LogLine.create({ timestamp: new Date() })
 * ```
 */
// tslint:disable-next-line:variable-name
var DatePrimitive = new CoreType("Date", TypeFlags.Date, function (v) { return typeof v === "number" || v instanceof Date; }, function (v) { return (v instanceof Date ? v : new Date(v)); });
DatePrimitive.getSnapshot = function (node) {
    return node.storedValue.getTime();
};
function getPrimitiveFactoryFromValue(value) {
    switch (typeof value) {
        case "string":
            return string;
        case "number":
            return number;
        case "boolean":
            return boolean;
        case "object":
            if (value instanceof Date)
                return DatePrimitive;
    }
    return fail("Cannot determine primtive type from value " + value);
}

var IdentifierType = (function (_super) {
    __extends(IdentifierType, _super);
    function IdentifierType(identifierType) {
        var _this = _super.call(this, "identifier(" + identifierType.name + ")") || this;
        _this.identifierType = identifierType;
        _this.flags = TypeFlags.Identifier;
        return _this;
    }
    IdentifierType.prototype.instantiate = function (parent, subpath, environment, snapshot) {
        if (!parent || !isStateTreeNode(parent.storedValue))
            return fail("Identifier types can only be instantiated as direct child of a model type");
        if (parent.identifierAttribute)
            fail("Cannot define property '" + subpath + "' as object identifier, property '" + parent.identifierAttribute + "' is already defined as identifier property");
        parent.identifierAttribute = subpath;
        return createNode(this, parent, subpath, environment, snapshot);
    };
    IdentifierType.prototype.reconcile = function (current, newValue) {
        if (current.storedValue !== newValue)
            return fail("Tried to change identifier from '" + current.storedValue + "' to '" + newValue + "'. Changing identifiers is not allowed.");
        return current;
    };
    IdentifierType.prototype.describe = function () {
        return "identifier(" + this.identifierType.describe() + ")";
    };
    IdentifierType.prototype.isValidSnapshot = function (value, context) {
        if (value === undefined ||
            value === null ||
            typeof value === "string" ||
            typeof value === "number")
            return this.identifierType.validate(value, context);
        return typeCheckFailure(context, value, "References should be a primitive value");
    };
    return IdentifierType;
}(Type));
/**
 * Identifier are used to make references, lifecycle events and reconciling works.
 * Inside a state tree, for each type can exist only one instance for each given identifier.
 * For example there could'nt be 2 instances of user with id 1. If you need more, consider using references.
 * Identifier can be used only as type property of a model.
 * This type accepts as parameter the value type of the identifier field that can be either string or number.
 *
 * @example
 *  const Todo = types.model("Todo", {
 *      id: types.identifier(types.string),
 *      title: types.string
 *  })
 *
 * @export
 * @alias types.identifier
 * @template T
 * @param {IType<T, T>} baseType
 * @returns {IType<T, T>}
 */
function identifier(baseType) {
    if (baseType === void 0) { baseType = string; }
    return new IdentifierType(baseType);
}

var OptionalValue = (function (_super) {
    __extends(OptionalValue, _super);
    function OptionalValue(type, defaultValue) {
        var _this = _super.call(this, type.name) || this;
        _this.type = type;
        _this.defaultValue = defaultValue;
        return _this;
    }
    Object.defineProperty(OptionalValue.prototype, "flags", {
        get: function () {
            return this.type.flags | TypeFlags.Optional;
        },
        enumerable: true,
        configurable: true
    });
    OptionalValue.prototype.describe = function () {
        return this.type.describe() + "?";
    };
    OptionalValue.prototype.instantiate = function (parent, subpath, environment, value) {
        if (typeof value === "undefined") {
            var defaultValue = this.getDefaultValue();
            var defaultSnapshot = isStateTreeNode(defaultValue)
                ? getStateTreeNode(defaultValue).snapshot
                : defaultValue;
            return this.type.instantiate(parent, subpath, environment, defaultSnapshot);
        }
        return this.type.instantiate(parent, subpath, environment, value);
    };
    OptionalValue.prototype.reconcile = function (current, newValue) {
        return this.type.reconcile(current, this.type.is(newValue) ? newValue : this.getDefaultValue());
    };
    OptionalValue.prototype.getDefaultValue = function () {
        var defaultValue = typeof this.defaultValue === "function"
            ? this.defaultValue()
            : this.defaultValue;
        if (typeof this.defaultValue === "function")
            typecheck(this, defaultValue);
        return defaultValue;
    };
    OptionalValue.prototype.isValidSnapshot = function (value, context) {
        // defaulted values can be skipped
        if (value === undefined) {
            return typeCheckSuccess();
        }
        // bounce validation to the sub-type
        return this.type.validate(value, context);
    };
    OptionalValue.prototype.isAssignableFrom = function (type) {
        return this.type.isAssignableFrom(type);
    };
    return OptionalValue;
}(Type));
/**
 * `types.optional` can be used to create a property with a default value.
 * If the given value is not provided in the snapshot, it will default to the provided `defaultValue`.
 * If `defaultValue` is a function, the function will be invoked for every new instance.
 * Applying a snapshot in which the optional value is _not_ present, causes the value to be reset
 *
 * @example
 * ```javascript
 * const Todo = types.model({
 *   title: types.optional(types.string, "Test"),
 *   done: types.optional(types.boolean, false),
 *   created: types.optional(types.Date, () => new Date())
 * })
 *
 * // it is now okay to omit 'created' and 'done'. created will get a freshly generated timestamp
 * const todo = Todo.create({ title: "Get coffee "})
 * ```
 *
 * @export
 * @alias types.optional
 */
function optional(type, defaultValueOrFunction) {
    var defaultValue = typeof defaultValueOrFunction === "function"
        ? defaultValueOrFunction()
        : defaultValueOrFunction;
    var defaultSnapshot = isStateTreeNode(defaultValue)
        ? getStateTreeNode(defaultValue).snapshot
        : defaultValue;
    typecheck(type, defaultSnapshot);
    return new OptionalValue(type, defaultValueOrFunction);
}

var Property = (function () {
    function Property(name) {
        this.name = name;
        // empty
    }
    Property.prototype.initializePrototype = function (prototype) { };
    Property.prototype.initialize = function (targetInstance, snapshot) { };
    Property.prototype.willChange = function (change) {
        return null;
    };
    Property.prototype.didChange = function (change) { };
    Property.prototype.serialize = function (instance, snapshot) { };
    Property.prototype.deserialize = function (instance, snapshot) { };
    return Property;
}());

var ComputedProperty = (function (_super) {
    __extends(ComputedProperty, _super);
    function ComputedProperty(propertyName, getter, setter) {
        var _this = _super.call(this, propertyName) || this;
        _this.getter = getter;
        _this.setter = setter;
        return _this;
    }
    ComputedProperty.prototype.initializePrototype = function (proto) {
        Object.defineProperty(proto, this.name, Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"])(proto, this.name, {
            get: this.getter,
            set: this.setter,
            configurable: true,
            enumerable: false
        }));
    };
    ComputedProperty.prototype.validate = function (snapshot, context) {
        if (this.name in snapshot) {
            return typeCheckFailure(getContextForPath(context, this.name), snapshot[this.name], "Computed properties should not be provided in the snapshot");
        }
        return typeCheckSuccess();
    };
    return ComputedProperty;
}(Property));

var Literal = (function (_super) {
    __extends(Literal, _super);
    function Literal(value) {
        var _this = _super.call(this, "" + value) || this;
        _this.flags = TypeFlags.Literal;
        _this.value = value;
        return _this;
    }
    Literal.prototype.instantiate = function (parent, subpath, environment, snapshot) {
        return createNode(this, parent, subpath, environment, snapshot);
    };
    Literal.prototype.describe = function () {
        return JSON.stringify(this.value);
    };
    Literal.prototype.isValidSnapshot = function (value, context) {
        if (isPrimitive(value) && value === this.value) {
            return typeCheckSuccess();
        }
        return typeCheckFailure(context, value);
    };
    return Literal;
}(Type));
/**
 * The literal type will return a type that will match only the exact given type.
 * The given value must be a primitive, in order to be serialized to a snapshot correctly.
 * You can use literal to match exact strings for example the exact male or female string.
 *
 * @example
 * const Person = types.model({
 *     name: types.string,
 *     gender: types.union(types.literal('male'), types.literal('female'))
 * })
 *
 * @export
 * @alias types.literal
 * @template S
 * @param {S} value The value to use in the strict equal check
 * @returns {ISimpleType<S>}
 */
function literal(value) {
    if (!isPrimitive(value))
        fail("Literal types can be built only on top of primitives");
    return new Literal(value);
}

var undefinedType$1 = literal(undefined);
var ValueProperty = (function (_super) {
    __extends(ValueProperty, _super);
    function ValueProperty(propertyName, type) {
        var _this = _super.call(this, propertyName) || this;
        _this.type = type;
        return _this;
    }
    ValueProperty.prototype.initializePrototype = function (proto) {
        __WEBPACK_IMPORTED_MODULE_0_mobx__["observable"].ref(proto, this.name, {
            value: undefinedType$1.instantiate(null, "", null, undefined)
        }); // TODO: undefined type should not be needed
    };
    ValueProperty.prototype.initialize = function (instance, snapshot) {
        var node = getStateTreeNode(instance);
        instance[this.name] = this.type.instantiate(node, this.name, node._environment, snapshot[this.name]);
        __WEBPACK_IMPORTED_MODULE_0_mobx__["extras"].interceptReads(instance, this.name, node.unbox);
    };
    ValueProperty.prototype.getValueNode = function (targetInstance) {
        var node = targetInstance.$mobx.values[this.name].value; // TODO: blegh!
        if (!node)
            return fail("Node not available for property " + this.name);
        return node;
    };
    ValueProperty.prototype.willChange = function (change) {
        var node = getStateTreeNode(change.object); // TODO: pass node in from object property
        typecheck(this.type, change.newValue);
        change.newValue = this.type.reconcile(node.getChildNode(change.name), change.newValue);
        return change;
    };
    ValueProperty.prototype.didChange = function (change) {
        var node = getStateTreeNode(change.object);
        node.emitPatch({
            op: "replace",
            path: escapeJsonPath(this.name),
            value: change.newValue.snapshot,
            oldValue: change.oldValue ? change.oldValue.snapshot : undefined
        }, node);
    };
    ValueProperty.prototype.serialize = function (instance, snapshot) {
        // TODO: FIXME, make sure the observable ref is used!
        
        __WEBPACK_IMPORTED_MODULE_0_mobx__["extras"].getAtom(instance, this.name).reportObserved();
        snapshot[this.name] = this.getValueNode(instance).snapshot;
    };
    ValueProperty.prototype.deserialize = function (instance, snapshot) {
        instance[this.name] = snapshot[this.name];
    };
    ValueProperty.prototype.validate = function (snapshot, context) {
        return this.type.validate(snapshot[this.name], getContextForPath(context, this.name, this.type));
    };
    return ValueProperty;
}(Property));

var ActionProperty = (function (_super) {
    __extends(ActionProperty, _super);
    function ActionProperty(name, fn) {
        var _this = _super.call(this, name) || this;
        _this.invokeAction = isGeneratorFunction(fn)
            ? createAsyncActionInvoker(name, fn)
            : createActionInvoker(name, fn);
        return _this;
    }
    ActionProperty.prototype.initialize = function (target) {
        addHiddenFinalProp(target, this.name, this.invokeAction.bind(target));
    };
    ActionProperty.prototype.validate = function (snapshot, context) {
        if (this.name in snapshot) {
            return typeCheckFailure(getContextForPath(context, this.name), snapshot[this.name], "Action properties should not be provided in the snapshot");
        }
        return typeCheckSuccess();
    };
    return ActionProperty;
}(Property));

var ViewProperty = (function (_super) {
    __extends(ViewProperty, _super);
    function ViewProperty(name, fn) {
        var _this = _super.call(this, name) || this;
        _this.invokeView = createViewInvoker(name, fn);
        return _this;
    }
    ViewProperty.prototype.initialize = function (target) {
        addHiddenFinalProp(target, this.name, this.invokeView.bind(target));
    };
    ViewProperty.prototype.validate = function (snapshot, context) {
        if (this.name in snapshot) {
            return typeCheckFailure(getContextForPath(context, this.name), snapshot[this.name], "View properties should not be provided in the snapshot");
        }
        return typeCheckSuccess();
    };
    return ViewProperty;
}(Property));
function createViewInvoker(name, fn) {
    return function () {
        var _this = this;
        var args = arguments;
        var adm = getStateTreeNode(this);
        adm.assertAlive();
        return __WEBPACK_IMPORTED_MODULE_0_mobx__["extras"].allowStateChanges(false, function () { return fn.apply(_this, args); });
    };
}

var VolatileProperty = (function (_super) {
    __extends(VolatileProperty, _super);
    function VolatileProperty(propertyName, initialValue) {
        var _this = _super.call(this, propertyName) || this;
        _this.initialValue = initialValue;
        if (initialValue !== null && typeof initialValue === "object")
            return fail("Trying to declare property " + propertyName + " with a non-primitive value. Please provide an initializer function to avoid accidental sharing of local state, like `" + propertyName + ": () => initialValue`");
        return _this;
    }
    VolatileProperty.prototype.initialize = function (instance, snapshot) {
        var v = typeof this.initialValue === "function"
            ? this.initialValue.call(instance, instance)
            : this.initialValue;
        Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["extendObservable"])(instance, (_a = {}, _a[this.name] = v, _a));
        var _a;
    };
    VolatileProperty.prototype.willChange = function (change) {
        return change;
    };
    VolatileProperty.prototype.validate = function (snapshot, context) {
        if (this.name in snapshot) {
            return typeCheckFailure(getContextForPath(context, this.name), snapshot[this.name], "volatile state should not be provided in the snapshot");
        }
        return typeCheckSuccess();
    };
    return VolatileProperty;
}(Property));

var HOOK_NAMES = [
    "preProcessSnapshot",
    "afterCreate",
    "afterAttach",
    "postProcessSnapshot",
    "beforeDetach",
    "beforeDestroy"
];
function objectTypeToString() {
    return getStateTreeNode(this).toString();
}
// TODO: rename to Model
var ObjectType = (function (_super) {
    __extends(ObjectType, _super);
    function ObjectType(name, baseModel, baseState, baseActions) {
        var _this = _super.call(this, name) || this;
        _this.shouldAttachNode = true;
        _this.flags = TypeFlags.Object;
        /*
         * Parsed description of all properties
         */
        _this.props = {};
        _this.createNewInstance = function () {
            var instance = new _this.modelConstructor();
            Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["extendShallowObservable"])(instance, {});
            return instance;
        };
        _this.finalizeNewInstance = function (node, snapshot) {
            var instance = node.storedValue;
            _this.forAllProps(function (prop) { return prop.initialize(instance, snapshot); });
            Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["intercept"])(instance, function (change) { return _this.willChange(change); });
            Object(__WEBPACK_IMPORTED_MODULE_0_mobx__["observe"])(instance, _this.didChange);
        };
        _this.didChange = function (change) {
            _this.props[change.name].didChange(change);
        };
        Object.freeze(baseModel); // make sure nobody messes with it
        Object.freeze(baseActions);
        _this.properties = baseModel;
        _this.state = baseState;
        _this.actions = baseActions;
        if (!/^\w[\w\d_]*$/.test(name))
            fail("Typename should be a valid identifier: " + name);
        // fancy trick to get a named function...., http://stackoverflow.com/questions/5905492/dynamic-function-name-in-javascript
        // Although object.defineProperty on a real function could also be used, that name is not used everywhere, for example when logging an object to the Chrome console, so this works better:
        _this.modelConstructor = new Function("return function " + name + " (){}")();
        _this.modelConstructor.prototype.toString = objectTypeToString;
        _this.parseModelProps();
        _this.forAllProps(function (prop) { return prop.initializePrototype(_this.modelConstructor.prototype); });
        return _this;
    }
    ObjectType.prototype.instantiate = function (parent, subpath, environment, snapshot) {
        return createNode(this, parent, subpath, environment, this.preProcessSnapshot(snapshot), this.createNewInstance, this.finalizeNewInstance);
    };
    ObjectType.prototype.willChange = function (change) {
        var node = getStateTreeNode(change.object);
        node.assertWritable();
        return this.props[change.name].willChange(change);
    };
    ObjectType.prototype.parseModelProps = function () {
        var _a = this, properties = _a.properties, state = _a.state, actions = _a.actions;
        for (var key in properties)
            if (hasOwnProperty(properties, key)) {
                if (HOOK_NAMES.indexOf(key) !== -1)
                    console.warn("Hook '" + key + "' was defined as property. Hooks should be defined as part of the actions");
                var descriptor = Object.getOwnPropertyDescriptor(properties, key);
                if ("get" in descriptor) {
                    this.props[key] = new ComputedProperty(key, descriptor.get, descriptor.set);
                    continue;
                }
                var value = descriptor.value;
                if (value === null || undefined) {
                    fail("The default value of an attribute cannot be null or undefined as the type cannot be inferred. Did you mean `types.maybe(someType)`?");
                }
                else if (isPrimitive(value)) {
                    var baseType = getPrimitiveFactoryFromValue(value);
                    this.props[key] = new ValueProperty(key, optional(baseType, value));
                }
                else if (isType(value)) {
                    this.props[key] = new ValueProperty(key, value);
                }
                else if (typeof value === "function") {
                    this.props[key] = new ViewProperty(key, value);
                }
                else if (typeof value === "object") {
                    fail("In property '" + key + "': base model's should not contain complex values: '" + value + "'");
                }
                else {
                    fail("Unexpected value for property '" + key + "'");
                }
            }
        for (var key in state)
            if (hasOwnProperty(state, key)) {
                if (HOOK_NAMES.indexOf(key) !== -1)
                    console.warn("Hook '" + key + "' was defined as local state. Hooks should be defined as part of the actions");
                var value = state[key];
                if (key in this.properties)
                    fail("Property '" + key + "' was also defined as local state. Local state fields and properties should not collide");
                this.props[key] = new VolatileProperty(key, value);
            }
        for (var key in actions)
            if (hasOwnProperty(actions, key)) {
                var value = actions[key];
                if (key in this.properties)
                    fail("Property '" + key + "' was also defined as action. Actions and properties should not collide");
                if (key in this.state)
                    fail("Property '" + key + "' was also defined as local state. Actions and state should not collide");
                if (typeof value === "function") {
                    this.props[key] = new ActionProperty(key, value);
                }
                else {
                    fail("Unexpected value for action '" + key + "'. Expected function, got " + typeof value);
                }
            }
    };
    ObjectType.prototype.getChildren = function (node) {
        var res = [];
        this.forAllProps(function (prop) {
            if (prop instanceof ValueProperty)
                res.push(prop.getValueNode(node.storedValue));
        });
        return res;
    };
    ObjectType.prototype.getChildNode = function (node, key) {
        if (!(this.props[key] instanceof ValueProperty))
            return fail("Not a value property: " + key);
        return this.props[key].getValueNode(node.storedValue);
    };
    ObjectType.prototype.getValue = function (node) {
        return node.storedValue;
    };
    ObjectType.prototype.getSnapshot = function (node) {
        var res = {};
        this.forAllProps(function (prop) { return prop.serialize(node.storedValue, res); });
        return this.postProcessSnapshot(res);
    };
    ObjectType.prototype.applyPatchLocally = function (node, subpath, patch) {
        if (!(patch.op === "replace" || patch.op === "add"))
            fail("object does not support operation " + patch.op);
        node.storedValue[subpath] = patch.value;
    };
    ObjectType.prototype.applySnapshot = function (node, snapshot) {
        var s = this.preProcessSnapshot(snapshot);
        typecheck(this, s);
        for (var key in this.props)
            this.props[key].deserialize(node.storedValue, s);
    };
    ObjectType.prototype.preProcessSnapshot = function (snapshot) {
        if (typeof this.actions.preProcessSnapshot === "function")
            return this.actions.preProcessSnapshot.call(null, snapshot);
        return snapshot;
    };
    ObjectType.prototype.postProcessSnapshot = function (snapshot) {
        if (typeof this.actions.postProcessSnapshot === "function")
            return this.actions.postProcessSnapshot.call(null, snapshot);
        return snapshot;
    };
    ObjectType.prototype.getChildType = function (key) {
        return this.props[key].type;
    };
    ObjectType.prototype.isValidSnapshot = function (value, context) {
        var _this = this;
        var snapshot = this.preProcessSnapshot(value);
        if (!isPlainObject(snapshot)) {
            return typeCheckFailure(context, snapshot);
        }
        return flattenTypeErrors(Object.keys(this.props).map(function (path) { return _this.props[path].validate(snapshot, context); }));
    };
    ObjectType.prototype.forAllProps = function (fn) {
        var _this = this;
        // optimization: persists keys or loop more efficiently
        Object.keys(this.props).forEach(function (key) { return fn(_this.props[key]); });
    };
    ObjectType.prototype.describe = function () {
        var _this = this;
        // TODO: make proptypes responsible
        // optimization: cache
        return ("{ " +
            Object.keys(this.props)
                .map(function (key) {
                var prop = _this.props[key];
                return prop instanceof ValueProperty ? key + ": " + prop.type.describe() : "";
            })
                .filter(Boolean)
                .join("; ") +
            " }");
    };
    ObjectType.prototype.getDefaultSnapshot = function () {
        return {};
    };
    ObjectType.prototype.removeChild = function (node, subpath) {
        node.storedValue[subpath] = null;
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_mobx__["action"]
    ], ObjectType.prototype, "applySnapshot", null);
    return ObjectType;
}(ComplexType));
/**
 * Creates a new model type by providing a name, properties, volatile state and actions.
 *
 * See the [model type](https://github.com/mobxjs/mobx-state-tree#creating-models) description or the [getting started](https://github.com/mobxjs/mobx-state-tree/blob/master/docs/getting-started.md#getting-started-1) tutorial.
 *
 * @export
 * @alias types.model
 */
function model() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var name = typeof args[0] === "string" ? args.shift() : "AnonymousModel";
    var props = args.shift() || fail("types.model must specify properties");
    var volatileState = (args.length > 1 && args.shift()) || {};
    var actions = args.shift() || {};
    return new ObjectType(name, props, volatileState, actions);
}
/**
 * Composes a new model from one or more existing model types.
 * This method can be invoked in two forms:
 * 1. Given 2 or more model types, the types are composed into a new Type.
 * 2. Given 1 model type, and additionally a set of properties, actions and volatile state, a new type is composed.
 *
 * Overloads:
 *
 * * `compose(...modelTypes)`
 * * `compose(modelType, properties)`
 * * `compose(modelType, properties, actions)`
 * * `compose(modelType, properties, volatileState, actions)`
 *
 * [Example of form 2](https://github.com/mobxjs/mobx-state-tree#simulate-inheritance-by-using-type-composition)
 *
 * @export
 * @alias types.compose
 */
function compose() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var typeName = typeof args[0] === "string" ? args.shift() : "AnonymousModel";
    if (args.every(function (arg) { return isType(arg); })) {
        // compose types
        return args.reduce(function (prev, cur) {
            return compose(typeName, prev, cur.properties, cur.state, cur.actions);
        });
    }
    var baseType = args.shift();
    var props = args.shift() || fail("types.compose must specify properties or `{}`");
    var volatileState = (args.length > 1 && args.shift()) || {};
    var actions = args.shift() || {};
    if (!isObjectType(baseType))
        return fail("Only model types can be composed");
    return model(typeName, extendKeepGetter({}, baseType.properties, props), extendKeepGetter({}, baseType.state, volatileState), extendKeepGetter({}, baseType.actions, actions));
}

var StoredReference = (function () {
    function StoredReference(mode, value) {
        this.mode = mode;
        this.value = value;
        if (mode === "object") {
            if (!isStateTreeNode(value))
                return fail("Can only store references to tree nodes, got: '" + value + "'");
            var targetNode = getStateTreeNode(value);
            if (!targetNode.identifierAttribute)
                return fail("Can only store references with a defined identifier attribute.");
        }
    }
    return StoredReference;
}());
var ReferenceType = (function (_super) {
    __extends(ReferenceType, _super);
    function ReferenceType(targetType) {
        var _this = _super.call(this, "reference(" + targetType.name + ")") || this;
        _this.targetType = targetType;
        _this.flags = TypeFlags.Reference;
        return _this;
    }
    ReferenceType.prototype.describe = function () {
        return this.name;
    };
    ReferenceType.prototype.getValue = function (node) {
        var ref = node.storedValue;
        if (ref.mode === "object")
            return ref.value;
        if (!node.isAlive)
            return undefined;
        // reference was initialized with the identifier of the target
        var target = node.root.identifierCache.resolve(this.targetType, ref.value);
        if (!target)
            return fail("Failed to resolve reference of type " + this.targetType
                .name + ": '" + ref.value + "' (in: " + node.path + ")");
        return target.value;
    };
    ReferenceType.prototype.getSnapshot = function (node) {
        var ref = node.storedValue;
        switch (ref.mode) {
            case "identifier":
                return ref.value;
            case "object":
                return getStateTreeNode(ref.value).identifier;
        }
    };
    ReferenceType.prototype.instantiate = function (parent, subpath, environment, snapshot) {
        var isComplex = isStateTreeNode(snapshot);
        return createNode(this, parent, subpath, environment, new StoredReference(isComplex ? "object" : "identifier", snapshot));
    };
    ReferenceType.prototype.reconcile = function (current, newValue) {
        var targetMode = isStateTreeNode(newValue) ? "object" : "identifier";
        if (isReferenceType(current.type)) {
            var ref = current.storedValue;
            if (targetMode === ref.mode && ref.value === newValue)
                return current;
        }
        var newNode = this.instantiate(current.parent, current.subpath, current._environment, newValue);
        current.die();
        return newNode;
    };
    ReferenceType.prototype.isAssignableFrom = function (type) {
        return this.targetType.isAssignableFrom(type);
    };
    ReferenceType.prototype.isValidSnapshot = function (value, context) {
        return typeof value === "string" || typeof value === "number"
            ? typeCheckSuccess()
            : typeCheckFailure(context, value, "Value '" + prettyPrintValue(value) + "' is not a valid reference. Expected a string or number.");
    };
    return ReferenceType;
}(Type));
/**
 * Creates a reference to another type, which should have defined an identifier.
 * See also the [reference and identifiers](https://github.com/mobxjs/mobx-state-tree#references-and-identifiers) section.
 *
 * @export
 * @alias types.reference
 */
function reference(factory) {
    if (arguments.length === 2 && typeof arguments[1] === "string")
        fail("References with base path are no longer supported. Please remove the base path.");
    return new ReferenceType(factory);
}

var Union = (function (_super) {
    __extends(Union, _super);
    function Union(name, types, dispatcher) {
        var _this = _super.call(this, name) || this;
        _this.dispatcher = null;
        _this.dispatcher = dispatcher;
        _this.types = types;
        return _this;
    }
    Object.defineProperty(Union.prototype, "flags", {
        get: function () {
            var result = TypeFlags.Union;
            this.types.forEach(function (type) {
                result |= type.flags;
            });
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Union.prototype.isAssignableFrom = function (type) {
        return this.types.some(function (subType) { return subType.isAssignableFrom(type); });
    };
    Union.prototype.describe = function () {
        return "(" + this.types.map(function (factory) { return factory.describe(); }).join(" | ") + ")";
    };
    Union.prototype.instantiate = function (parent, subpath, environment, value) {
        return this.determineType(value).instantiate(parent, subpath, environment, value);
    };
    Union.prototype.reconcile = function (current, newValue) {
        return this.determineType(newValue).reconcile(current, newValue);
    };
    Union.prototype.determineType = function (value) {
        // try the dispatcher, if defined
        if (this.dispatcher !== null) {
            return this.dispatcher(value);
        }
        // find the most accomodating type
        var applicableTypes = this.types.filter(function (type) { return type.is(value); });
        if (applicableTypes.length > 1)
            return fail("Ambiguos snapshot " + JSON.stringify(value) + " for union " + this
                .name + ". Please provide a dispatch in the union declaration.");
        return applicableTypes[0];
    };
    Union.prototype.isValidSnapshot = function (value, context) {
        if (this.dispatcher !== null) {
            return this.dispatcher(value).validate(value, context);
        }
        var errors = this.types.map(function (type) { return type.validate(value, context); });
        var applicableTypes = errors.filter(function (errorArray) { return errorArray.length === 0; });
        if (applicableTypes.length > 1) {
            return typeCheckFailure(context, value, "Multiple types are applicable and no dispatch method is defined for the union");
        }
        else if (applicableTypes.length < 1) {
            return typeCheckFailure(context, value, "No type is applicable and no dispatch method is defined for the union").concat(flattenTypeErrors(errors));
        }
        return typeCheckSuccess();
    };
    return Union;
}(Type));
/**
 * types.union(dispatcher?, types...) create a union of multiple types. If the correct type cannot be inferred unambigously from a snapshot, provide a dispatcher function of the form (snapshot) => Type.
 *
 * @export
 * @alias types.union
 * @param {(ITypeDispatcher | IType<any, any>)} dispatchOrType
 * @param {...IType<any, any>[]} otherTypes
 * @returns {IType<any, any>}
 */
function union(dispatchOrType) {
    var otherTypes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherTypes[_i - 1] = arguments[_i];
    }
    var dispatcher = isType(dispatchOrType) ? null : dispatchOrType;
    var types = isType(dispatchOrType) ? otherTypes.concat(dispatchOrType) : otherTypes;
    var name = types.map(function (type) { return type.name; }).join(" | ");
    return new Union(name, types, dispatcher);
}

var Frozen = (function (_super) {
    __extends(Frozen, _super);
    function Frozen() {
        var _this = _super.call(this, "frozen") || this;
        _this.flags = TypeFlags.Frozen;
        return _this;
    }
    Frozen.prototype.describe = function () {
        return "<any immutable value>";
    };
    Frozen.prototype.instantiate = function (parent, subpath, environment, value) {
        // deep freeze the object/array
        return createNode(this, parent, subpath, environment, deepFreeze(value));
    };
    Frozen.prototype.isValidSnapshot = function (value, context) {
        if (!isSerializable(value)) {
            return typeCheckFailure(context, value);
        }
        return typeCheckSuccess();
    };
    return Frozen;
}(Type));
/**
 * Frozen can be used to story any value that is serializable in itself (that is valid JSON).
 * Frozen values need to be immutable or treated as if immutable.
 * Values stored in frozen will snapshotted as-is by MST, and internal changes will not be tracked.
 *
 * This is useful to store complex, but immutable values like vectors etc. It can form a powerful bridge to parts of your application that should be immutable, or that assume data to be immutable.
 *
 * @example
 * ```javascript
 * const GameCharacter = types.model({
 *   name: string,
 *   location: types.frozen
 * })
 *
 * const hero = new GameCharacter({
 *   name: "Mario",
 *   location: { x: 7, y: 4 }
 * })
 *
 * hero.location = { x: 10, y: 2 } // OK
 * hero.location.x = 7 // Not ok!
 * ```
 *
 *
 * @alias types.frozen
 */
var frozen = new Frozen();

var optionalNullType = optional(nullType, null);
/**
 * Maybe will make a type nullable, and also null by default.
 *
 * @export
 * @alias types.maybe
 * @template S
 * @template T
 * @param {IType<S, T>} type The type to make nullable
 * @returns {(IType<S | null | undefined, T | null>)}
 */
function maybe(type) {
    if (type === frozen) {
        fail("Unable to declare `types.maybe(types.frozen)`. Frozen already accepts `null`. Consider using `types.optional(types.frozen, null)` instead.");
    }
    return union(optionalNullType, type);
}

var Refinement = (function (_super) {
    __extends(Refinement, _super);
    function Refinement(name, type, predicate) {
        var _this = _super.call(this, name) || this;
        _this.type = type;
        _this.predicate = predicate;
        return _this;
    }
    Object.defineProperty(Refinement.prototype, "flags", {
        get: function () {
            return this.type.flags | TypeFlags.Refinement;
        },
        enumerable: true,
        configurable: true
    });
    Refinement.prototype.describe = function () {
        return this.name;
    };
    Refinement.prototype.instantiate = function (parent, subpath, environment, value) {
        // create the child type
        var inst = this.type.instantiate(parent, subpath, environment, value);
        return inst;
    };
    Refinement.prototype.isAssignableFrom = function (type) {
        return this.type.isAssignableFrom(type);
    };
    Refinement.prototype.isValidSnapshot = function (value, context) {
        if (this.type.is(value)) {
            var snapshot = isStateTreeNode(value) ? getStateTreeNode(value).snapshot : value;
            if (this.predicate(snapshot)) {
                return typeCheckSuccess();
            }
        }
        return typeCheckFailure(context, value);
    };
    return Refinement;
}(Type));
/**
 * `types.refinement(baseType, (snapshot) => boolean)` creates a type that is more specific then the base type, e.g. `types.refinement(types.string, value => value.length > 5)` to create a type of strings that can only be longer then 5.
 *
 * @export
 * @alias types.refinement
 * @template T
 * @param {string} name
 * @param {IType<T, T>} type
 * @param {(snapshot: T) => boolean} predicate
 * @returns {IType<T, T>}
 */
function refinement(name, type, predicate) {
    return new Refinement(name, type, predicate);
}

var Late = (function (_super) {
    __extends(Late, _super);
    function Late(name, definition) {
        var _this = _super.call(this, name) || this;
        _this._subType = null;
        if (!(typeof definition === "function" && definition.length === 0))
            fail("Invalid late type, expected a function with zero arguments that returns a type, got: " +
                definition);
        _this.definition = definition;
        return _this;
    }
    Object.defineProperty(Late.prototype, "flags", {
        get: function () {
            return this.subType.flags | TypeFlags.Late;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Late.prototype, "subType", {
        get: function () {
            if (this._subType === null) {
                this._subType = this.definition();
            }
            return this._subType;
        },
        enumerable: true,
        configurable: true
    });
    Late.prototype.instantiate = function (parent, subpath, environment, snapshot) {
        return this.subType.instantiate(parent, subpath, environment, snapshot);
    };
    Late.prototype.reconcile = function (current, newValue) {
        return this.subType.reconcile(current, newValue);
    };
    Late.prototype.describe = function () {
        return this.subType.name;
    };
    Late.prototype.isValidSnapshot = function (value, context) {
        return this.subType.validate(value, context);
    };
    Late.prototype.isAssignableFrom = function (type) {
        return this.subType.isAssignableFrom(type);
    };
    return Late;
}(Type));
/**
 * Defines a type that gets implemented later. This is usefull when you have to deal with circular dependencies.
 * Please notice that when defining circular dependencies TypeScript is'nt smart enought to inference them.
 * You need to declare an interface to explicit the return type of the late parameter function.
 *
 * ```typescript
 *  interface INode {
 *       childs: INode[]
 *  }
 *
 *   // TypeScript is'nt smart enough to infer self referencing types.
 *  const Node = types.model({
 *       childs: types.optional(types.array(types.late<any, INode>(() => Node)), [])
 *  })
 * ```
 *
 * @export
 * @alias types.late
 * @template S
 * @template T
 * @param {string} [name] The name to use for the type that will be returned.
 * @param {ILateType<S, T>} type A function that returns the type that will be defined.
 * @returns {IType<S, T>}
 */
function late(nameOrType, maybeType) {
    var name = typeof nameOrType === "string" ? nameOrType : "late(" + nameOrType.toString() + ")";
    var type = typeof nameOrType === "string" ? maybeType : nameOrType;
    return new Late(name, type);
}

/**
 * Can be used to create an string based enumeration.
 * (note: this methods is just sugar for a union of string literals)
 *
 * @example
 * ```javascript
 * const TrafficLight = types.model({
 *   color: types.enum("Color", ["Red", "Orange", "Green"])
 * })
 * ```
 *
 * @export
 * @alias types.enumeration
 * @param {string} name descriptive name of the enumeration (optional)
 * @param {string[]} options possible values this enumeration can have
 * @returns {ISimpleType<string>}
 */
function enumeration(name, options) {
    var realOptions = typeof name === "string" ? options : name;
    var type = union.apply(void 0, realOptions.map(function (option) { return literal("" + option); }));
    if (typeof name === "string")
        type.name = name;
    return type;
}

// tslint:disable-next-line:no_unused-variable
// tslint:disable-next-line:no_unused-variable
// tslint:disable-next-line:no_unused-variable
var types = {
    enumeration: enumeration,
    model: model,
    compose: compose,
    reference: reference,
    union: union,
    optional: optional,
    literal: literal,
    maybe: maybe,
    refinement: refinement,
    string: string,
    boolean: boolean,
    number: number,
    Date: DatePrimitive,
    map: map,
    array: array,
    frozen: frozen,
    identifier: identifier,
    late: late,
    undefined: undefinedType,
    null: nullType
};

/**
 * Creates a tiny proxy around a MST tree that conforms to the redux store api.
 * This makes it possible to use MST inside a redux application.
 *
 * See the [redux-todomvc example](https://github.com/mobxjs/mobx-state-tree/blob/e9e804c8c43e1edde4aabbd52675544e2b3a905b/examples/redux-todomvc/src/index.js#L20) for more details.
 *
 * @export
 * @param {*} model
 * @param {...MiddleWare[]} middlewares
 * @returns {IReduxStore}
 */
function asReduxStore(model) {
    var middlewares = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        middlewares[_i - 1] = arguments[_i];
    }
    if (!isStateTreeNode(model))
        fail("Expected model object");
    var store = {
        getState: function () { return getSnapshot(model); },
        dispatch: function (action$$1) {
            runMiddleWare(action$$1, runners.slice(), function (newAction) {
                return applyAction$1(model, reduxActionToAction(newAction));
            });
        },
        subscribe: function (listener) { return onSnapshot(model, listener); }
    };
    var runners = middlewares.map(function (mw) { return mw(store); });
    return store;
}
function reduxActionToAction(action$$1) {
    var actionArgs = extend({}, action$$1);
    delete actionArgs.type;
    return {
        name: action$$1.type,
        args: [actionArgs]
    };
}
function runMiddleWare(action$$1, runners, next) {
    function n(retVal) {
        var f = runners.shift();
        if (f)
            f(n)(retVal);
        else
            next(retVal);
    }
    n(action$$1);
}
/**
 * Connects a MST tree to the Redux devtools.
 * See this [example](https://github.com/mobxjs/mobx-state-tree/blob/e9e804c8c43e1edde4aabbd52675544e2b3a905b/examples/redux-todomvc/src/index.js#L21) for a setup example.
 *
 * @export
 * @param {*} remoteDevDep
 * @param {*} model
 */
function connectReduxDevtools(remoteDevDep, model) {
    // Connect to the monitor
    var remotedev = remoteDevDep.connectViaExtension();
    var applyingSnapshot = false;
    // Subscribe to change state (if need more than just logging)
    remotedev.subscribe(function (message) {
        // Helper when only time travelling needed
        var state = remoteDevDep.extractState(message);
        if (state) {
            applyingSnapshot = true;
            applySnapshot(model, state);
            applyingSnapshot = false;
        }
    });
    // Send changes to the remote monitor
    onAction(model, function (action$$1) {
        if (applyingSnapshot)
            return;
        var copy = {};
        copy.type = action$$1.name;
        if (action$$1.args)
            action$$1.args.forEach(function (value, index) { return (copy[index] = value); });
        remotedev.send(copy, getSnapshot(model));
    });
}

// Fix some circular deps:



/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(11).setImmediate))

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(85);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extras", function() { return extras; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reaction", function() { return Reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untracked", function() { return untracked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDerivationState", function() { return IDerivationState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Atom", function() { return Atom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAtom", function() { return BaseAtom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStrict", function() { return useStrict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStrictModeEnabled", function() { return isStrictModeEnabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spy", function() { return spy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comparer", function() { return comparer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asReference", function() { return asReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asFlat", function() { return asFlat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asStructure", function() { return asStructure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asMap", function() { return asMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isModifierDescriptor", function() { return isModifierDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableObject", function() { return isObservableObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoxedObservable", function() { return isObservableValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableArray", function() { return isObservableArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMap", function() { return ObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservableMap", function() { return isObservableMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transaction", function() { return transaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return observable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IObservableFactories", function() { return IObservableFactories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObservable", function() { return isObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComputed", function() { return isComputed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendObservable", function() { return extendObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extendShallowObservable", function() { return extendShallowObservable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "observe", function() { return observe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intercept", function() { return intercept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autorun", function() { return autorun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autorunAsync", function() { return autorunAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "when", function() { return when; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reaction", function() { return reaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "action", function() { return action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAction", function() { return isAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runInAction", function() { return runInAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expr", function() { return expr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toJS", function() { return toJS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTransformer", function() { return createTransformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whyRun", function() { return whyRun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArrayLike", function() { return isArrayLike; });
/** MobX - (c) Michel Weststrate 2015, 2016 - MIT Licensed */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

/**
 * Anything that can be used to _store_ state is an Atom in mobx. Atoms have two important jobs
 *
 * 1) detect when they are being _used_ and report this (using reportObserved). This allows mobx to make the connection between running functions and the data they used
 * 2) they should notify mobx whenever they have _changed_. This way mobx can re-run any functions (derivations) that are using this atom.
 */
var BaseAtom = (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function BaseAtom(name) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        this.name = name;
        this.isPendingUnobservation = true; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.observers = [];
        this.observersIndexes = {};
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    BaseAtom.prototype.onBecomeUnobserved = function () {
        // noop
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     */
    BaseAtom.prototype.reportObserved = function () {
        reportObserved(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    BaseAtom.prototype.reportChanged = function () {
        startBatch();
        propagateChanged(this);
        endBatch();
    };
    BaseAtom.prototype.toString = function () {
        return this.name;
    };
    return BaseAtom;
}());
var Atom = (function (_super) {
    __extends(Atom, _super);
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
        if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
        var _this = _super.call(this, name) || this;
        _this.name = name;
        _this.onBecomeObservedHandler = onBecomeObservedHandler;
        _this.onBecomeUnobservedHandler = onBecomeUnobservedHandler;
        _this.isPendingUnobservation = false; // for effective unobserving.
        _this.isBeingTracked = false;
        return _this;
    }
    Atom.prototype.reportObserved = function () {
        startBatch();
        _super.prototype.reportObserved.call(this);
        if (!this.isBeingTracked) {
            this.isBeingTracked = true;
            this.onBecomeObservedHandler();
        }
        endBatch();
        return !!globalState.trackingDerivation;
        // return doesn't really give useful info, because it can be as well calling computed which calls atom (no reactions)
        // also it could not trigger when calculating reaction dependent on Atom because Atom's value was cached by computed called by given reaction.
    };
    Atom.prototype.onBecomeUnobserved = function () {
        this.isBeingTracked = false;
        this.onBecomeUnobservedHandler();
    };
    return Atom;
}(BaseAtom));
var isAtom = createInstanceofPredicate("Atom", BaseAtom);

function hasInterceptors(interceptable) {
    return (interceptable.interceptors && interceptable.interceptors.length > 0);
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        var interceptors = interceptable.interceptors;
        if (interceptors)
            for (var i = 0, l = interceptors.length; i < l; i++) {
                change = interceptors[i](change);
                invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
                if (!change)
                    break;
            }
        return change;
    }
    finally {
        untrackedEnd(prevU);
    }
}

function hasListeners(listenable) {
    return listenable.changeListeners && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd(prevU);
}

function isSpyEnabled() {
    return !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (!globalState.spyListeners.length)
        return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart(event) {
    var change = objectAssign({}, event, { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (change)
        spyReport(objectAssign({}, change, END_EVENT));
    else
        spyReport(END_EVENT);
}
function spy(listener) {
    globalState.spyListeners.push(listener);
    return once(function () {
        var idx = globalState.spyListeners.indexOf(listener);
        if (idx !== -1)
            globalState.spyListeners.splice(idx, 1);
    });
}

function iteratorSymbol() {
    return (typeof Symbol === "function" && Symbol.iterator) || "@@iterator";
}
var IS_ITERATING_MARKER = "__$$iterating";
function arrayAsIterator(array) {
    // returning an array for entries(), values() etc for maps was a mis-interpretation of the specs..,
    // yet it is quite convenient to be able to use the response both as array directly and as iterator
    // it is suboptimal, but alas...
    invariant(array[IS_ITERATING_MARKER] !== true, "Illegal state: cannot recycle array as iterator");
    addHiddenFinalProp(array, IS_ITERATING_MARKER, true);
    var idx = -1;
    addHiddenFinalProp(array, "next", function next() {
        idx++;
        return {
            done: idx >= this.length,
            value: idx < this.length ? this[idx] : undefined
        };
    });
    return array;
}
function declareIterator(prototType, iteratorFactory) {
    addHiddenFinalProp(prototType, iteratorSymbol(), iteratorFactory);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
// Detects bug in safari 9.1.1 (or iOS 9 safari mobile). See #364
var safariPrototypeSetterInheritanceBug = (function () {
    var v = false;
    var p = {};
    Object.defineProperty(p, "0", { set: function () { v = true; } });
    Object.create(p)["0"] = 1;
    return v === false;
})();
/**
 * This array buffer contains two lists of properties, so that all arrays
 * can recycle their property definitions, which significantly improves performance of creating
 * properties on the fly.
 */
var OBSERVABLE_ARRAY_BUFFER_SIZE = 0;
// Typescript workaround to make sure ObservableArray extends Array
var StubArray = (function () {
    function StubArray() {
    }
    return StubArray;
}());
function inherit(ctor, proto) {
    if (typeof Object["setPrototypeOf"] !== "undefined") {
        Object["setPrototypeOf"](ctor.prototype, proto);
    }
    else if (typeof ctor.prototype.__proto__ !== "undefined") {
        ctor.prototype.__proto__ = proto;
    }
    else {
        ctor["prototype"] = proto;
    }
}
inherit(StubArray, Array.prototype);
var ObservableArrayAdministration = (function () {
    function ObservableArrayAdministration(name, enhancer, array, owned) {
        this.array = array;
        this.owned = owned;
        this.values = [];
        this.lastKnownLength = 0;
        this.interceptors = null;
        this.changeListeners = null;
        this.atom = new BaseAtom(name || ("ObservableArray@" + getNextId()));
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
        if (this.dehancer !== undefined)
            return values.map(this.dehancer);
        return values;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.array,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    // adds / removes the necessary numeric properties to this object
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed. Did you use peek() to change it?");
        this.lastKnownLength += delta;
        if (delta > 0 && oldLength + delta + 1 > OBSERVABLE_ARRAY_BUFFER_SIZE)
            reserveArrayBuffer(oldLength + delta + 1);
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = [];
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.array,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.map(function (v) { return _this.enhancer(v, undefined); });
        var lengthDelta = newItems.length - deleteCount;
        this.updateArrayLength(length, lengthDelta); // create or remove new entries
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, [index, deleteCount].concat(newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values.slice(0, index).concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
        var _a;
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
            object: this.array,
            type: "update",
            index: index, newValue: newValue, oldValue: oldValue
        } : null;
        if (notifySpy)
            spyReportStart(change);
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
            object: this.array,
            type: "splice",
            index: index, removed: removed, added: added,
            removedCount: removed.length,
            addedCount: added.length
        } : null;
        if (notifySpy)
            spyReportStart(change);
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    return ObservableArrayAdministration;
}());
var ObservableArray = (function (_super) {
    __extends(ObservableArray, _super);
    function ObservableArray(initialValues, enhancer, name, owned) {
        if (name === void 0) { name = "ObservableArray@" + getNextId(); }
        if (owned === void 0) { owned = false; }
        var _this = _super.call(this) || this;
        var adm = new ObservableArrayAdministration(name, enhancer, _this, owned);
        addHiddenFinalProp(_this, "$mobx", adm);
        if (initialValues && initialValues.length) {
            _this.spliceWithArray(0, 0, initialValues);
        }
        if (safariPrototypeSetterInheritanceBug) {
            // Seems that Safari won't use numeric prototype setter untill any * numeric property is
            // defined on the instance. After that it works fine, even if this property is deleted.
            Object.defineProperty(adm.array, "0", ENTRY_0);
        }
        return _this;
    }
    ObservableArray.prototype.intercept = function (handler) {
        return this.$mobx.intercept(handler);
    };
    ObservableArray.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        return this.$mobx.observe(listener, fireImmediately);
    };
    ObservableArray.prototype.clear = function () {
        return this.splice(0);
    };
    ObservableArray.prototype.concat = function () {
        var arrays = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            arrays[_i] = arguments[_i];
        }
        this.$mobx.atom.reportObserved();
        return Array.prototype.concat.apply(this.peek(), arrays.map(function (a) { return isObservableArray(a) ? a.peek() : a; }));
    };
    ObservableArray.prototype.replace = function (newItems) {
        return this.$mobx.spliceWithArray(0, this.$mobx.values.length, newItems);
    };
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    ObservableArray.prototype.toJS = function () {
        return this.slice();
    };
    ObservableArray.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toJS();
    };
    ObservableArray.prototype.peek = function () {
        this.$mobx.atom.reportObserved();
        return this.$mobx.dehanceValues(this.$mobx.values);
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    ObservableArray.prototype.find = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        var idx = this.findIndex.apply(this, arguments);
        return idx === -1 ? undefined : this.get(idx);
    };
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    ObservableArray.prototype.findIndex = function (predicate, thisArg, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        var items = this.peek(), l = items.length;
        for (var i = fromIndex; i < l; i++)
            if (predicate.call(thisArg, items[i], i, this))
                return i;
        return -1;
    };
    /*
        functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
        since these functions alter the inner structure of the array, the have side effects.
        Because the have side effects, they should not be used in computed function,
        and for that reason the do not call dependencyState.notifyObserved
        */
    ObservableArray.prototype.splice = function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return this.$mobx.spliceWithArray(index);
            case 2:
                return this.$mobx.spliceWithArray(index, deleteCount);
        }
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        return this.$mobx.spliceWithArray(index, deleteCount, newItems);
    };
    ObservableArray.prototype.push = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.pop = function () {
        return this.splice(Math.max(this.$mobx.values.length - 1, 0), 1)[0];
    };
    ObservableArray.prototype.shift = function () {
        return this.splice(0, 1)[0];
    };
    ObservableArray.prototype.unshift = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this.$mobx;
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    };
    ObservableArray.prototype.reverse = function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    };
    ObservableArray.prototype.sort = function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    };
    ObservableArray.prototype.remove = function (value) {
        var idx = this.$mobx.dehanceValues(this.$mobx.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    };
    ObservableArray.prototype.move = function (fromIndex, toIndex) {
        function checkIndex(index) {
            if (index < 0) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is negative");
            }
            var length = this.$mobx.values.length;
            if (index >= length) {
                throw new Error("[mobx.array] Index out of bounds: " + index + " is not smaller than " + length);
            }
        }
        checkIndex.call(this, fromIndex);
        checkIndex.call(this, toIndex);
        if (fromIndex === toIndex) {
            return;
        }
        var oldItems = this.$mobx.values;
        var newItems;
        if (fromIndex < toIndex) {
            newItems = oldItems.slice(0, fromIndex).concat(oldItems.slice(fromIndex + 1, toIndex + 1), [oldItems[fromIndex]], oldItems.slice(toIndex + 1));
        }
        else {
            newItems = oldItems.slice(0, toIndex).concat([oldItems[fromIndex]], oldItems.slice(toIndex, fromIndex), oldItems.slice(fromIndex + 1));
        }
        this.replace(newItems);
    };
    // See #734, in case property accessors are unreliable...
    ObservableArray.prototype.get = function (index) {
        var impl = this.$mobx;
        if (impl) {
            if (index < impl.values.length) {
                impl.atom.reportObserved();
                return impl.dehanceValue(impl.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + impl.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    };
    // See #734, in case property accessors are unreliable...
    ObservableArray.prototype.set = function (index, newValue) {
        var adm = this.$mobx;
        var values = adm.values;
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(adm.atom);
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: this,
                    index: index, newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
        }
    };
    return ObservableArray;
}(StubArray));
declareIterator(ObservableArray.prototype, function () {
    return arrayAsIterator(this.slice());
});
Object.defineProperty(ObservableArray.prototype, "length", {
    enumerable: false,
    configurable: true,
    get: function () {
        return this.$mobx.getArrayLength();
    },
    set: function (newLength) {
        this.$mobx.setArrayLength(newLength);
    }
});
/**
 * Wrap function from prototype
 */
[
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some",
    "toString",
    "toLocaleString"
].forEach(function (funcName) {
    var baseFunc = Array.prototype[funcName];
    invariant(typeof baseFunc === "function", "Base function not defined on Array prototype: '" + funcName + "'");
    addHiddenProp(ObservableArray.prototype, funcName, function () {
        return baseFunc.apply(this.peek(), arguments);
    });
});
/**
 * We don't want those to show up in `for (const key in ar)` ...
 */
makeNonEnumerable(ObservableArray.prototype, [
    "constructor",
    "intercept",
    "observe",
    "clear",
    "concat",
    "get",
    "replace",
    "toJS",
    "toJSON",
    "peek",
    "find",
    "findIndex",
    "splice",
    "spliceWithArray",
    "push",
    "pop",
    "set",
    "shift",
    "unshift",
    "reverse",
    "sort",
    "remove",
    "move",
    "toString",
    "toLocaleString"
]);
// See #364
var ENTRY_0 = createArrayEntryDescriptor(0);
function createArrayEntryDescriptor(index) {
    return {
        enumerable: false,
        configurable: false,
        get: function () {
            // TODO: Check `this`?, see #752?
            return this.get(index);
        },
        set: function (value) {
            this.set(index, value);
        }
    };
}
function createArrayBufferItem(index) {
    Object.defineProperty(ObservableArray.prototype, "" + index, createArrayEntryDescriptor(index));
}
function reserveArrayBuffer(max) {
    for (var index = OBSERVABLE_ARRAY_BUFFER_SIZE; index < max; index++)
        createArrayBufferItem(index);
    OBSERVABLE_ARRAY_BUFFER_SIZE = max;
}
reserveArrayBuffer(1000);
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing.$mobx);
}

var UNCHANGED = {};
var ObservableValue = (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value, enhancer, name, notifySpy) {
        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
        if (notifySpy === void 0) { notifySpy = true; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.hasUnreportedChange = false;
        _this.dehancer = undefined;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled()) {
            // only notify spy if this is a stand-alone observable
            spyReport({ type: "create", object: _this, newValue: _this.value });
        }
        return _this;
    }
    ObservableValue.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy) {
                spyReportStart({
                    type: "update",
                    object: this,
                    newValue: newValue, oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, { object: this, type: "update", newValue: newValue });
            if (!change)
                return UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.value !== newValue
            ? newValue
            : UNCHANGED;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: "update",
                object: this,
                newValue: newValue, oldValue: oldValue
            });
        }
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    return ObservableValue;
}(BaseAtom));
ObservableValue.prototype[primitiveSymbol()] = ObservableValue.prototype.valueOf;
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

var messages = {
    "m001": "It is not allowed to assign new values to @action fields",
    "m002": "`runInAction` expects a function",
    "m003": "`runInAction` expects a function without arguments",
    "m004": "autorun expects a function",
    "m005": "Warning: attempted to pass an action to autorun. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
    "m006": "Warning: attempted to pass an action to autorunAsync. Actions are untracked and will not trigger on state changes. Use `reaction` or wrap only your state modification code in an action.",
    "m007": "reaction only accepts 2 or 3 arguments. If migrating from MobX 2, please provide an options object",
    "m008": "wrapping reaction expression in `asReference` is no longer supported, use options object instead",
    "m009": "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'. It looks like it was used on a property.",
    "m010": "@computed can only be used on getter functions, like: '@computed get myProps() { return ...; }'",
    "m011": "First argument to `computed` should be an expression. If using computed as decorator, don't pass it arguments",
    "m012": "computed takes one or two arguments if used as function",
    "m013": "[mobx.expr] 'expr' should only be used inside other reactive functions.",
    "m014": "extendObservable expected 2 or more arguments",
    "m015": "extendObservable expects an object as first argument",
    "m016": "extendObservable should not be used on maps, use map.merge instead",
    "m017": "all arguments of extendObservable should be objects",
    "m018": "extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540",
    "m019": "[mobx.isObservable] isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.",
    "m020": "modifiers can only be used for individual object properties",
    "m021": "observable expects zero or one arguments",
    "m022": "@observable can not be used on getters, use @computed instead",
    "m023": "Using `transaction` is deprecated, use `runInAction` or `(@)action` instead.",
    "m024": "whyRun() can only be used if a derivation is active, or by passing an computed value / reaction explicitly. If you invoked whyRun from inside a computation; the computation is currently suspended but re-evaluating because somebody requested its value.",
    "m025": "whyRun can only be used on reactions and computed values",
    "m026": "`action` can only be invoked on functions",
    "m028": "It is not allowed to set `useStrict` when a derivation is running",
    "m029": "INTERNAL ERROR only onBecomeUnobserved shouldn't be called twice in a row",
    "m030a": "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: ",
    "m030b": "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ",
    "m031": "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: ",
    "m032": "* This computation is suspended (not in use by any reaction) and won't run automatically.\n	Didn't expect this computation to be suspended at this point?\n	  1. Make sure this computation is used by a reaction (reaction, autorun, observer).\n	  2. Check whether you are using this computation synchronously (in the same stack as they reaction that needs it).",
    "m033": "`observe` doesn't support the fire immediately property for observable maps.",
    "m034": "`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead",
    "m035": "Cannot make the designated object observable; it is not extensible",
    "m036": "It is not possible to get index atoms from arrays",
    "m037": "Hi there! I'm sorry you have just run into an exception.\nIf your debugger ends up here, know that some reaction (like the render() of an observer component, autorun or reaction)\nthrew an exception and that mobx caught it, to avoid that it brings the rest of your application down.\nThe original cause of the exception (the code that caused this reaction to run (again)), is still in the stack.\n\nHowever, more interesting is the actual stack trace of the error itself.\nHopefully the error is an instanceof Error, because in that case you can inspect the original stack of the error from where it was thrown.\nSee `error.stack` property, or press the very subtle \"(...)\" link you see near the console.error message that probably brought you here.\nThat stack is more interesting than the stack of this console.error itself.\n\nIf the exception you see is an exception you created yourself, make sure to use `throw new Error(\"Oops\")` instead of `throw \"Oops\"`,\nbecause the javascript environment will only preserve the original stack trace in the first form.\n\nYou can also make sure the debugger pauses the next time this very same exception is thrown by enabling \"Pause on caught exception\".\n(Note that it might pause on many other, unrelated exception as well).\n\nIf that all doesn't help you out, feel free to open an issue https://github.com/mobxjs/mobx/issues!\n",
    "m038": "Missing items in this list?\n    1. Check whether all used values are properly marked as observable (use isObservable to verify)\n    2. Make sure you didn't dereference values too early. MobX observes props, not primitives. E.g: use 'person.name' instead of 'name' in your computation.\n"
};
function getMessage(id) {
    return messages[id];
}

function createAction(actionName, fn) {
    invariant(typeof fn === "function", getMessage("m026"));
    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
    var res = function () {
        return executeAction(actionName, fn, this, arguments);
    };
    res.originalFn = fn;
    res.isMobxAction = true;
    return res;
}
function executeAction(actionName, fn, scope, args) {
    var runInfo = startAction(actionName, fn, scope, args);
    try {
        return fn.apply(scope, args);
    }
    finally {
        endAction(runInfo);
    }
}
function startAction(actionName, fn, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy) {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart({
            type: "action",
            name: actionName,
            fn: fn,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    return {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        notifySpy: notifySpy,
        startTime: startTime
    };
}
function endAction(runInfo) {
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy)
        spyReportEnd({ time: Date.now() - runInfo.startTime });
}
function useStrict(strict) {
    invariant(globalState.trackingDerivation === null, getMessage("m028"));
    globalState.strictMode = strict;
    globalState.allowStateChanges = !strict;
}
function isStrictModeEnabled() {
    return globalState.strictMode;
}
function allowStateChanges(allowStateChanges, func) {
    // TODO: deprecate / refactor this function in next major
    // Currently only used by `@observer`
    // Proposed change: remove first param, rename to `forbidStateChanges`,
    // require error callback instead of the hardcoded error message now used
    // Use `inAction` instead of allowStateChanges in derivation.ts to check strictMode
    var prev = allowStateChangesStart(allowStateChanges);
    var res;
    try {
        res = func();
    }
    finally {
        allowStateChangesEnd(prev);
    }
    return res;
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}

/**
 * Constructs a decorator, that normalizes the differences between
 * TypeScript and Babel. Mainly caused by the fact that legacy-decorator cannot assign
 * values during instance creation to properties that have a getter setter.
 *
 * - Sigh -
 *
 * Also takes care of the difference between @decorator field and @decorator(args) field, and different forms of values.
 * For performance (cpu and mem) reasons the properties are always defined on the prototype (at least initially).
 * This means that these properties despite being enumerable might not show up in Object.keys() (but they will show up in for...in loops).
 */
function createClassPropertyDecorator(
    /**
     * This function is invoked once, when the property is added to a new instance.
     * When this happens is not strictly determined due to differences in TS and Babel:
     * Typescript: Usually when constructing the new instance
     * Babel, sometimes Typescript: during the first get / set
     * Both: when calling `runLazyInitializers(instance)`
     */
    onInitialize, get, set, enumerable, 
    /**
     * Can this decorator invoked with arguments? e.g. @decorator(args)
     */
    allowCustomArguments) {
    function classPropertyDecorator(target, key, descriptor, customArgs, argLen) {
        if (argLen === void 0) { argLen = 0; }
        invariant(allowCustomArguments || quacksLikeADecorator(arguments), "This function is a decorator, but it wasn't invoked like a decorator");
        if (!descriptor) {
            // typescript (except for getter / setters)
            var newDescriptor = {
                enumerable: enumerable,
                configurable: true,
                get: function () {
                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true)
                        typescriptInitializeProperty(this, key, undefined, onInitialize, customArgs, descriptor);
                    return get.call(this, key);
                },
                set: function (v) {
                    if (!this.__mobxInitializedProps || this.__mobxInitializedProps[key] !== true) {
                        typescriptInitializeProperty(this, key, v, onInitialize, customArgs, descriptor);
                    }
                    else {
                        set.call(this, key, v);
                    }
                }
            };
            if (arguments.length < 3 || arguments.length === 5 && argLen < 3) {
                // Typescript target is ES3, so it won't define property for us
                // or using Reflect.decorate polyfill, which will return no descriptor
                // (see https://github.com/mobxjs/mobx/issues/333)
                Object.defineProperty(target, key, newDescriptor);
            }
            return newDescriptor;
        }
        else {
            // babel and typescript getter / setter props
            if (!hasOwnProperty(target, "__mobxLazyInitializers")) {
                addHiddenProp(target, "__mobxLazyInitializers", (target.__mobxLazyInitializers && target.__mobxLazyInitializers.slice()) || [] // support inheritance
                );
            }
            var value_1 = descriptor.value, initializer_1 = descriptor.initializer;
            target.__mobxLazyInitializers.push(function (instance) {
                onInitialize(instance, key, (initializer_1 ? initializer_1.call(instance) : value_1), customArgs, descriptor);
            });
            return {
                enumerable: enumerable, configurable: true,
                get: function () {
                    if (this.__mobxDidRunLazyInitializers !== true)
                        runLazyInitializers(this);
                    return get.call(this, key);
                },
                set: function (v) {
                    if (this.__mobxDidRunLazyInitializers !== true)
                        runLazyInitializers(this);
                    set.call(this, key, v);
                }
            };
        }
    }
    if (allowCustomArguments) {
        /** If custom arguments are allowed, we should return a function that returns a decorator */
        return function () {
            /** Direct invocation: @decorator bla */
            if (quacksLikeADecorator(arguments))
                return classPropertyDecorator.apply(null, arguments);
            /** Indirect invocation: @decorator(args) bla */
            var outerArgs = arguments;
            var argLen = arguments.length;
            return function (target, key, descriptor) { return classPropertyDecorator(target, key, descriptor, outerArgs, argLen); };
        };
    }
    return classPropertyDecorator;
}
function typescriptInitializeProperty(instance, key, v, onInitialize, customArgs, baseDescriptor) {
    if (!hasOwnProperty(instance, "__mobxInitializedProps"))
        addHiddenProp(instance, "__mobxInitializedProps", {});
    instance.__mobxInitializedProps[key] = true;
    onInitialize(instance, key, v, customArgs, baseDescriptor);
}
function runLazyInitializers(instance) {
    if (instance.__mobxDidRunLazyInitializers === true)
        return;
    if (instance.__mobxLazyInitializers) {
        addHiddenProp(instance, "__mobxDidRunLazyInitializers", true);
        instance.__mobxDidRunLazyInitializers && instance.__mobxLazyInitializers.forEach(function (initializer) { return initializer(instance); });
    }
}
function quacksLikeADecorator(args) {
    return (args.length === 2 || args.length === 3) && typeof args[1] === "string";
}

var actionFieldDecorator = createClassPropertyDecorator(function (target, key, value, args, originalDescriptor) {
    var actionName = (args && args.length === 1) ? args[0] : (value.name || key || "<unnamed action>");
    var wrappedAction = action(actionName, value);
    addHiddenProp(target, key, wrappedAction);
}, function (key) {
    return this[key];
}, function () {
    invariant(false, getMessage("m001"));
}, false, true);
var boundActionDecorator = createClassPropertyDecorator(function (target, key, value) {
    defineBoundAction(target, key, value);
}, function (key) {
    return this[key];
}, function () {
    invariant(false, getMessage("m001"));
}, false, false);
var action = function action(arg1, arg2, arg3, arg4) {
    if (arguments.length === 1 && typeof arg1 === "function")
        return createAction(arg1.name || "<unnamed action>", arg1);
    if (arguments.length === 2 && typeof arg2 === "function")
        return createAction(arg1, arg2);
    if (arguments.length === 1 && typeof arg1 === "string")
        return namedActionDecorator(arg1);
    return namedActionDecorator(arg2).apply(null, arguments);
};
action.bound = function boundAction(arg1, arg2, arg3) {
    if (typeof arg1 === "function") {
        var action_1 = createAction("<not yet bound action>", arg1);
        action_1.autoBind = true;
        return action_1;
    }
    return boundActionDecorator.apply(null, arguments);
};
function namedActionDecorator(name) {
    return function (target, prop, descriptor) {
        if (descriptor && typeof descriptor.value === "function") {
            // TypeScript @action method() { }. Defined on proto before being decorated
            // Don't use the field decorator if we are just decorating a method
            descriptor.value = createAction(name, descriptor.value);
            descriptor.enumerable = false;
            descriptor.configurable = true;
            return descriptor;
        }
        // bound instance methods
        return actionFieldDecorator(name).apply(this, arguments);
    };
}
function runInAction(arg1, arg2, arg3) {
    var actionName = typeof arg1 === "string" ? arg1 : arg1.name || "<unnamed action>";
    var fn = typeof arg1 === "function" ? arg1 : arg2;
    var scope = typeof arg1 === "function" ? arg2 : arg3;
    invariant(typeof fn === "function", getMessage("m002"));
    invariant(fn.length === 0, getMessage("m003"));
    invariant(typeof actionName === "string" && actionName.length > 0, "actions should have valid names, got: '" + actionName + "'");
    return executeAction(actionName, fn, scope, undefined);
}
function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}
function defineBoundAction(target, propertyName, fn) {
    var res = function () {
        return executeAction(propertyName, fn, target, arguments);
    };
    res.isMobxAction = true;
    addHiddenProp(target, propertyName, res);
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    if (typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b)) {
        return true;
    }
    return deepEqual(a, b);
}
function defaultComparer(a, b) {
    if (typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b)) {
        return true;
    }
    return identityComparer(a, b);
}
var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer
};

function autorun(arg1, arg2, arg3) {
    var name, view, scope;
    if (typeof arg1 === "string") {
        name = arg1;
        view = arg2;
        scope = arg3;
    }
    else {
        name = arg1.name || ("Autorun@" + getNextId());
        view = arg1;
        scope = arg2;
    }
    invariant(typeof view === "function", getMessage("m004"));
    invariant(isAction(view) === false, getMessage("m005"));
    if (scope)
        view = view.bind(scope);
    var reaction = new Reaction(name, function () {
        this.track(reactionRunner);
    });
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule();
    return reaction.getDisposer();
}
function when(arg1, arg2, arg3, arg4) {
    var name, predicate, effect, scope;
    if (typeof arg1 === "string") {
        name = arg1;
        predicate = arg2;
        effect = arg3;
        scope = arg4;
    }
    else {
        name = ("When@" + getNextId());
        predicate = arg1;
        effect = arg2;
        scope = arg3;
    }
    var disposer = autorun(name, function (r) {
        if (predicate.call(scope)) {
            r.dispose();
            var prevUntracked = untrackedStart();
            effect.call(scope);
            untrackedEnd(prevUntracked);
        }
    });
    return disposer;
}
function autorunAsync(arg1, arg2, arg3, arg4) {
    var name, func, delay, scope;
    if (typeof arg1 === "string") {
        name = arg1;
        func = arg2;
        delay = arg3;
        scope = arg4;
    }
    else {
        name = arg1.name || ("AutorunAsync@" + getNextId());
        func = arg1;
        delay = arg2;
        scope = arg3;
    }
    invariant(isAction(func) === false, getMessage("m006"));
    if (delay === void 0)
        delay = 1;
    if (scope)
        func = func.bind(scope);
    var isScheduled = false;
    var r = new Reaction(name, function () {
        if (!isScheduled) {
            isScheduled = true;
            setTimeout(function () {
                isScheduled = false;
                if (!r.isDisposed)
                    r.track(reactionRunner);
            }, delay);
        }
    });
    function reactionRunner() { func(r); }
    r.schedule();
    return r.getDisposer();
}
function reaction(expression, effect, arg3) {
    if (arguments.length > 3) {
        fail(getMessage("m007"));
    }
    if (isModifierDescriptor(expression)) {
        fail(getMessage("m008"));
    }
    var opts;
    if (typeof arg3 === "object") {
        opts = arg3;
    }
    else {
        opts = {};
    }
    opts.name = opts.name || expression.name || effect.name || ("Reaction@" + getNextId());
    opts.fireImmediately = arg3 === true || opts.fireImmediately === true;
    opts.delay = opts.delay || 0;
    opts.compareStructural = opts.compareStructural || opts.struct || false;
    // TODO: creates ugly spy events, use `effect = (r) => runInAction(opts.name, () => effect(r))` instead
    effect = action(opts.name, opts.context ? effect.bind(opts.context) : effect);
    if (opts.context) {
        expression = expression.bind(opts.context);
    }
    var firstTime = true;
    var isScheduled = false;
    var value;
    var equals = opts.equals
        ? opts.equals
        : (opts.compareStructural || opts.struct)
            ? comparer.structural
            : comparer.default;
    var r = new Reaction(opts.name, function () {
        if (firstTime || opts.delay < 1) {
            reactionRunner();
        }
        else if (!isScheduled) {
            isScheduled = true;
            setTimeout(function () {
                isScheduled = false;
                reactionRunner();
            }, opts.delay);
        }
    });
    function reactionRunner() {
        if (r.isDisposed)
            return;
        var changed = false;
        r.track(function () {
            var nextValue = expression(r);
            changed = firstTime || !equals(value, nextValue);
            value = nextValue;
        });
        if (firstTime && opts.fireImmediately)
            effect(value, r);
        if (!firstTime && changed === true)
            effect(value, r);
        if (firstTime)
            firstTime = false;
    }
    r.schedule();
    return r.getDisposer();
}

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember result of the computation for duration of a batch, or being observed
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce an new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(derivation, scope, equals, name, setter) {
        this.derivation = derivation;
        this.scope = scope;
        this.equals = equals;
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isPendingUnobservation = false;
        this.observers = [];
        this.observersIndexes = {};
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = new CaughtException(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.name = name || "ComputedValue@" + getNextId();
        if (setter)
            this.setter = createAction(name + "-setter", setter);
    }
    ComputedValue.prototype.onBecomeStale = function () {
        propagateMaybeChanged(this);
    };
    ComputedValue.prototype.onBecomeUnobserved = function () {
        clearObserving(this);
        this.value = undefined;
    };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue.prototype.get = function () {
        invariant(!this.isComputing, "Cycle detected in computation " + this.name, this.derivation);
        if (globalState.inBatch === 0) {
            // This is an minor optimization which could be omitted to simplify the code
            // The computedValue is accessed outside of any mobx stuff. Batch observing should be enough and don't need
            // tracking as it will never be called again inside this batch.
            startBatch();
            if (shouldCompute(this))
                this.value = this.computeValue(false);
            endBatch();
        }
        else {
            reportObserved(this);
            if (shouldCompute(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed(this);
        }
        var result = this.value;
        if (isCaughtException(result))
            throw result.cause;
        return result;
    };
    ComputedValue.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException(res))
            throw res.cause;
        return res;
    };
    ComputedValue.prototype.set = function (value) {
        if (this.setter) {
            invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant(false, "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled()) {
            spyReport({
                object: this.scope,
                type: "compute",
                fn: this.derivation
            });
        }
        var oldValue = this.value;
        var newValue = this.value = this.computeValue(true);
        return (isCaughtException(oldValue) ||
            isCaughtException(newValue) ||
            !this.equals(oldValue, newValue));
    };
    ComputedValue.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope);
        }
        else {
            try {
                res = this.derivation.call(this.scope);
            }
            catch (e) {
                res = new CaughtException(e);
            }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
    };
    
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    
    ComputedValue.prototype.whyRun = function () {
        var isTracking = Boolean(globalState.trackingDerivation);
        var observing = unique(this.isComputing ? this.newObserving : this.observing).map(function (dep) { return dep.name; });
        var observers = unique(getObservers(this).map(function (dep) { return dep.name; }));
        return ("\nWhyRun? computation '" + this.name + "':\n * Running because: " + (isTracking ? "[active] the value of this computation is needed by a reaction" : this.isComputing ? "[get] The value of this computed was requested outside a reaction" : "[idle] not running at the moment") + "\n" +
            (this.dependenciesState === IDerivationState.NOT_TRACKING ? getMessage("m032") :
                " * This computation will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + ((this.isComputing && isTracking) ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n\t" + getMessage("m038") + "\n\n  * If the outcome of this computation changes, the following observers will be re-run:\n    " + joinStrings(observers) + "\n"));
    };
    return ComputedValue;
}());
ComputedValue.prototype[primitiveSymbol()] = ComputedValue.prototype.valueOf;
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);

var ObservableObjectAdministration = (function () {
    function ObservableObjectAdministration(target, name) {
        this.target = target;
        this.name = name;
        this.values = {};
        this.changeListeners = null;
        this.interceptors = null;
    }
    /**
        * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
        * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
        * for callback details
        */
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
        invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableObjectAdministration;
}());
function asObservableObject(target, name) {
    if (isObservableObject(target) && target.hasOwnProperty('$mobx'))
        return target.$mobx;
    invariant(Object.isExtensible(target), getMessage("m035"));
    if (!isPlainObject(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name)
        name = "ObservableObject@" + getNextId();
    var adm = new ObservableObjectAdministration(target, name);
    addHiddenFinalProp(target, "$mobx", adm);
    return adm;
}
function defineObservablePropertyFromDescriptor(adm, propName, descriptor, defaultEnhancer) {
    if (adm.values[propName]) {
        // already observable property
        invariant("value" in descriptor, "The property " + propName + " in " + adm.name + " is already observable, cannot redefine it as computed property");
        adm.target[propName] = descriptor.value; // the property setter will make 'value' reactive if needed.
        return;
    }
    // not yet observable property
    if ("value" in descriptor) {
        // not a computed value
        if (isModifierDescriptor(descriptor.value)) {
            // x : ref(someValue)
            var modifierDescriptor = descriptor.value;
            defineObservableProperty(adm, propName, modifierDescriptor.initialValue, modifierDescriptor.enhancer);
        }
        else if (isAction(descriptor.value) && descriptor.value.autoBind === true) {
            defineBoundAction(adm.target, propName, descriptor.value.originalFn);
        }
        else if (isComputedValue(descriptor.value)) {
            // x: computed(someExpr)
            defineComputedPropertyFromComputedValue(adm, propName, descriptor.value);
        }
        else {
            // x: someValue
            defineObservableProperty(adm, propName, descriptor.value, defaultEnhancer);
        }
    }
    else {
        // get x() { return 3 } set x(v) { }
        defineComputedProperty(adm, propName, descriptor.get, descriptor.set, comparer.default, true);
    }
}
function defineObservableProperty(adm, propName, newValue, enhancer) {
    assertPropertyConfigurable(adm.target, propName);
    if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
            object: adm.target,
            name: propName,
            type: "add",
            newValue: newValue
        });
        if (!change)
            return;
        newValue = change.newValue;
    }
    var observable = adm.values[propName] = new ObservableValue(newValue, enhancer, adm.name + "." + propName, false);
    newValue = observable.value; // observableValue might have changed it
    Object.defineProperty(adm.target, propName, generateObservablePropConfig(propName));
    notifyPropertyAddition(adm, adm.target, propName, newValue);
}
function defineComputedProperty(adm, propName, getter, setter, equals, asInstanceProperty) {
    if (asInstanceProperty)
        assertPropertyConfigurable(adm.target, propName);
    adm.values[propName] = new ComputedValue(getter, adm.target, equals, adm.name + "." + propName, setter);
    if (asInstanceProperty) {
        Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
    }
}
function defineComputedPropertyFromComputedValue(adm, propName, computedValue) {
    var name = adm.name + "." + propName;
    computedValue.name = name;
    if (!computedValue.scope)
        computedValue.scope = adm.target;
    adm.values[propName] = computedValue;
    Object.defineProperty(adm.target, propName, generateComputedPropConfig(propName));
}
var observablePropertyConfigs = {};
var computedPropertyConfigs = {};
function generateObservablePropConfig(propName) {
    return observablePropertyConfigs[propName] || (observablePropertyConfigs[propName] = {
        configurable: true,
        enumerable: true,
        get: function () {
            return this.$mobx.values[propName].get();
        },
        set: function (v) {
            setPropertyValue(this, propName, v);
        }
    });
}
function generateComputedPropConfig(propName) {
    return computedPropertyConfigs[propName] || (computedPropertyConfigs[propName] = {
        configurable: true,
        enumerable: false,
        get: function () {
            return this.$mobx.values[propName].get();
        },
        set: function (v) {
            return this.$mobx.values[propName].set(v);
        }
    });
}
function setPropertyValue(instance, name, newValue) {
    var adm = instance.$mobx;
    var observable = adm.values[name];
    // intercept
    if (hasInterceptors(adm)) {
        var change = interceptChange(adm, {
            type: "update",
            object: instance,
            name: name, newValue: newValue
        });
        if (!change)
            return;
        newValue = change.newValue;
    }
    newValue = observable.prepareNewValue(newValue);
    // notify spy & observers
    if (newValue !== UNCHANGED) {
        var notify = hasListeners(adm);
        var notifySpy = isSpyEnabled();
        var change = notify || notifySpy ? {
            type: "update",
            object: instance,
            oldValue: observable.value,
            name: name, newValue: newValue
        } : null;
        if (notifySpy)
            spyReportStart(change);
        observable.setNewValue(newValue);
        if (notify)
            notifyListeners(adm, change);
        if (notifySpy)
            spyReportEnd();
    }
}
function notifyPropertyAddition(adm, object, name, newValue) {
    var notify = hasListeners(adm);
    var notifySpy = isSpyEnabled();
    var change = notify || notifySpy ? {
        type: "add",
        object: object, name: name, newValue: newValue
    } : null;
    if (notifySpy)
        spyReportStart(change);
    if (notify)
        notifyListeners(adm, change);
    if (notifySpy)
        spyReportEnd();
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
    if (isObject(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        runLazyInitializers(thing);
        return isObservableObjectAdministration(thing.$mobx);
    }
    return false;
}

/**
    * Returns true if the provided value is reactive.
    * @param value object, function or array
    * @param property if property is specified, checks whether value.property is reactive.
    */
function isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableArray(value) || isObservableMap(value))
            throw new Error(getMessage("m019"));
        else if (isObservableObject(value)) {
            var o = value.$mobx;
            return o.values && !!o.values[property];
        }
        return false;
    }
    // For first check, see #701
    return isObservableObject(value) || !!value.$mobx || isAtom(value) || isReaction(value) || isComputedValue(value);
}

function createDecoratorForEnhancer(enhancer) {
    invariant(!!enhancer, ":(");
    return createClassPropertyDecorator(function (target, name, baseValue, _, baseDescriptor) {
        assertPropertyConfigurable(target, name);
        invariant(!baseDescriptor || !baseDescriptor.get, getMessage("m022"));
        var adm = asObservableObject(target, undefined);
        defineObservableProperty(adm, name, baseValue, enhancer);
    }, function (name) {
        var observable = this.$mobx.values[name];
        if (observable === undefined)
            return undefined;
        return observable.get();
    }, function (name, value) {
        setPropertyValue(this, name, value);
    }, true, false);
}

function extendObservable(target) {
    var properties = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        properties[_i - 1] = arguments[_i];
    }
    return extendObservableHelper(target, deepEnhancer, properties);
}
function extendShallowObservable(target) {
    var properties = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        properties[_i - 1] = arguments[_i];
    }
    return extendObservableHelper(target, referenceEnhancer, properties);
}
function extendObservableHelper(target, defaultEnhancer, properties) {
    invariant(arguments.length >= 2, getMessage("m014"));
    invariant(typeof target === "object", getMessage("m015"));
    invariant(!(isObservableMap(target)), getMessage("m016"));
    properties.forEach(function (propSet) {
        invariant(typeof propSet === "object", getMessage("m017"));
        invariant(!isObservable(propSet), getMessage("m018"));
    });
    var adm = asObservableObject(target);
    var definedProps = {};
    // Note could be optimised if properties.length === 1
    for (var i = properties.length - 1; i >= 0; i--) {
        var propSet = properties[i];
        for (var key in propSet)
            if (definedProps[key] !== true && hasOwnProperty(propSet, key)) {
                definedProps[key] = true;
                if (target === propSet && !isPropertyConfigurable(target, key))
                    continue; // see #111, skip non-configurable or non-writable props for `observable(object)`.
                var descriptor = Object.getOwnPropertyDescriptor(propSet, key);
                defineObservablePropertyFromDescriptor(adm, key, descriptor, defaultEnhancer);
            }
    }
    return target;
}

var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var deepStructDecorator = createDecoratorForEnhancer(deepStructEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v) {
    if (v === void 0) { v = undefined; }
    // @observable someProp;
    if (typeof arguments[1] === "string")
        return deepDecorator.apply(null, arguments);
    invariant(arguments.length <= 1, getMessage("m021"));
    invariant(!isModifierDescriptor(v), getMessage("m020"));
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    var res = deepEnhancer(v, undefined, undefined);
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    return observable.box(v);
}
var IObservableFactories = (function () {
    function IObservableFactories() {
    }
    IObservableFactories.prototype.box = function (value, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        return new ObservableValue(value, deepEnhancer, name);
    };
    IObservableFactories.prototype.shallowBox = function (value, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowBox");
        return new ObservableValue(value, referenceEnhancer, name);
    };
    IObservableFactories.prototype.array = function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        return new ObservableArray(initialValues, deepEnhancer, name);
    };
    IObservableFactories.prototype.shallowArray = function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowArray");
        return new ObservableArray(initialValues, referenceEnhancer, name);
    };
    IObservableFactories.prototype.map = function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        return new ObservableMap(initialValues, deepEnhancer, name);
    };
    IObservableFactories.prototype.shallowMap = function (initialValues, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowMap");
        return new ObservableMap(initialValues, referenceEnhancer, name);
    };
    IObservableFactories.prototype.object = function (props, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("object");
        var res = {};
        // convert to observable object
        asObservableObject(res, name);
        // add properties
        extendObservable(res, props);
        return res;
    };
    IObservableFactories.prototype.shallowObject = function (props, name) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("shallowObject");
        var res = {};
        asObservableObject(res, name);
        extendShallowObservable(res, props);
        return res;
    };
    IObservableFactories.prototype.ref = function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(referenceEnhancer, arguments[0]);
        }
        else {
            return refDecorator.apply(null, arguments);
        }
    };
    IObservableFactories.prototype.shallow = function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(shallowEnhancer, arguments[0]);
        }
        else {
            return shallowDecorator.apply(null, arguments);
        }
    };
    IObservableFactories.prototype.deep = function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(deepEnhancer, arguments[0]);
        }
        else {
            return deepDecorator.apply(null, arguments);
        }
    };
    IObservableFactories.prototype.struct = function () {
        if (arguments.length < 2) {
            // although ref creates actually a modifier descriptor, the type of the resultig properties
            // of the object is `T` in the end, when the descriptors are interpreted
            return createModifierDescriptor(deepStructEnhancer, arguments[0]);
        }
        else {
            return deepStructDecorator.apply(null, arguments);
        }
    };
    return IObservableFactories;
}());
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
// ES6 class methods aren't enumerable, can't use Object.keys
Object.getOwnPropertyNames(IObservableFactories.prototype)
    .filter(function (name) { return name !== "constructor"; })
    .forEach(function (name) { return observable[name] = IObservableFactories.prototype[name]; });
observable.deep.struct = observable.struct;
observable.ref.struct = function () {
    if (arguments.length < 2) {
        return createModifierDescriptor(refStructEnhancer, arguments[0]);
    }
    else {
        return refStructDecorator.apply(null, arguments);
    }
};
function incorrectlyUsedAsDecorator(methodName) {
    fail("Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

function isModifierDescriptor(thing) {
    return typeof thing === "object" && thing !== null && thing.isMobxModifierDescriptor === true;
}
function createModifierDescriptor(enhancer, initialValue) {
    invariant(!isModifierDescriptor(initialValue), "Modifiers cannot be nested");
    return {
        isMobxModifierDescriptor: true,
        initialValue: initialValue,
        enhancer: enhancer
    };
}
function deepEnhancer(v, _, name) {
    if (isModifierDescriptor(v))
        fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable.array(v, name);
    if (isPlainObject(v))
        return observable.object(v, name);
    if (isES6Map(v))
        return observable.map(v, name);
    return v;
}
function shallowEnhancer(v, _, name) {
    if (isModifierDescriptor(v))
        fail("You tried to assign a modifier wrapped value to a collection, please define modifiers when creating the collection, not when modifying it");
    if (v === undefined || v === null)
        return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v))
        return v;
    if (Array.isArray(v))
        return observable.shallowArray(v, name);
    if (isPlainObject(v))
        return observable.shallowObject(v, name);
    if (isES6Map(v))
        return observable.shallowMap(v, name);
    return fail("The shallow modifier / decorator can only used in combination with arrays, objects and maps");
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function deepStructEnhancer(v, oldValue, name) {
    // don't confuse structurally compare enhancer with ref enhancer! The latter is probably
    // more suited for immutable objects
    if (deepEqual(v, oldValue))
        return oldValue;
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return new ObservableArray(v, deepStructEnhancer, name);
    if (isES6Map(v))
        return new ObservableMap(v, deepStructEnhancer, name);
    if (isPlainObject(v)) {
        var res = {};
        asObservableObject(res, name);
        extendObservableHelper(res, deepStructEnhancer, [v]);
        return res;
    }
    return v;
}
function refStructEnhancer(v, oldValue, name) {
    if (deepEqual(v, oldValue))
        return oldValue;
    return v;
}

/**
 * @deprecated
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * Deprecated to simplify api; transactions offer no real benefit above actions.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    deprecated(getMessage("m023"));
    return runInTransaction.apply(undefined, arguments);
}
function runInTransaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    return executeAction("", action);
}

var ObservableMapMarker = {};
var ObservableMap = (function () {
    function ObservableMap(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
        this.enhancer = enhancer;
        this.name = name;
        this.$mobx = ObservableMapMarker;
        this._data = Object.create(null);
        this._hasMap = Object.create(null); // hasMap, not hashMap >-).
        this._keys = new ObservableArray(undefined, referenceEnhancer, this.name + ".keys()", true);
        this.interceptors = null;
        this.changeListeners = null;
        this.dehancer = undefined;
        this.merge(initialData);
    }
    ObservableMap.prototype._has = function (key) {
        return typeof this._data[key] !== "undefined";
    };
    ObservableMap.prototype.has = function (key) {
        if (!this.isValidKey(key))
            return false;
        key = "" + key;
        if (this._hasMap[key])
            return this._hasMap[key].get();
        return this._updateHasMapEntry(key, false).get();
    };
    ObservableMap.prototype.set = function (key, value) {
        this.assertValidKey(key);
        key = "" + key;
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        this.assertValidKey(key);
        key = "" + key;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy ? {
                type: "delete",
                object: this,
                oldValue: this._data[key].value,
                name: key
            } : null;
            if (notifySpy)
                spyReportStart(change);
            runInTransaction(function () {
                _this._keys.remove(key);
                _this._updateHasMapEntry(key, false);
                var observable$$1 = _this._data[key];
                observable$$1.setNewValue(undefined);
                _this._data[key] = undefined;
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        // optimization; don't fill the hasMap if we are not observing, or remove entry if there are no observers anymore
        var entry = this._hasMap[key];
        if (entry) {
            entry.setNewValue(value);
        }
        else {
            entry = this._hasMap[key] = new ObservableValue(value, referenceEnhancer, this.name + "." + key + "?", false);
        }
        return entry;
    };
    ObservableMap.prototype._updateValue = function (name, newValue) {
        var observable$$1 = this._data[name];
        newValue = observable$$1.prepareNewValue(newValue);
        if (newValue !== UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy ? {
                type: "update",
                object: this,
                oldValue: observable$$1.value,
                name: name, newValue: newValue
            } : null;
            if (notifySpy)
                spyReportStart(change);
            observable$$1.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy)
                spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (name, newValue) {
        var _this = this;
        runInTransaction(function () {
            var observable$$1 = _this._data[name] = new ObservableValue(newValue, _this.enhancer, _this.name + "." + name, false);
            newValue = observable$$1.value; // value might have been changed
            _this._updateHasMapEntry(name, true);
            _this._keys.push(name);
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy ? {
            type: "add",
            object: this,
            name: name,
            newValue: newValue
        } : null;
        if (notifySpy)
            spyReportStart(change);
        if (notify)
            notifyListeners(this, change);
        if (notifySpy)
            spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        key = "" + key;
        if (this.has(key))
            return this.dehanceValue(this._data[key].get());
        return this.dehanceValue(undefined);
    };
    ObservableMap.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap.prototype.keys = function () {
        return arrayAsIterator(this._keys.slice());
    };
    ObservableMap.prototype.values = function () {
        return arrayAsIterator(this._keys.map(this.get, this));
    };
    ObservableMap.prototype.entries = function () {
        var _this = this;
        return arrayAsIterator(this._keys.map(function (key) { return [key, _this.get(key)]; }));
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var _this = this;
        this.keys().forEach(function (key) { return callback.call(thisArg, _this.get(key), key, _this); });
    };
    /** Merge another object into this object, returns this. */
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap(other)) {
            other = other.toJS();
        }
        runInTransaction(function () {
            if (isPlainObject(other))
                Object.keys(other).forEach(function (key) { return _this.set(key, other[key]); });
            else if (Array.isArray(other))
                other.forEach(function (_a) {
                    var key = _a[0], value = _a[1];
                    return _this.set(key, value);
                });
            else if (isES6Map(other))
                other.forEach(function (value, key) { return _this.set(key, value); });
            else if (other !== null && other !== undefined)
                fail("Cannot initialize map from " + other);
        });
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        runInTransaction(function () {
            untracked(function () {
                _this.keys().forEach(_this.delete, _this);
            });
        });
    };
    ObservableMap.prototype.replace = function (values) {
        var _this = this;
        runInTransaction(function () {
            _this.clear();
            _this.merge(values);
        });
        return this;
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            return this._keys.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values might still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap.prototype.toJS = function () {
        var _this = this;
        var res = {};
        this.keys().forEach(function (key) { return res[key] = _this.get(key); });
        return res;
    };
    ObservableMap.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toJS();
    };
    ObservableMap.prototype.isValidKey = function (key) {
        if (key === null || key === undefined)
            return false;
        if (typeof key === "string" || typeof key === "number" || typeof key === "boolean")
            return true;
        return false;
    };
    ObservableMap.prototype.assertValidKey = function (key) {
        if (!this.isValidKey(key))
            throw new Error("[mobx.map] Invalid key: '" + key + "', only strings, numbers and booleans are accepted as key in observable maps.");
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return this.name + "[{ " + this.keys().map(function (key) { return key + ": " + ("" + _this.get(key)); }).join(", ") + " }]";
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
        invariant(fireImmediately !== true, getMessage("m033"));
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}());
declareIterator(ObservableMap.prototype, function () {
    return this.entries();
});
function map(initialValues) {
    deprecated("`mobx.map` is deprecated, use `new ObservableMap` or `mobx.observable.map` instead");
    return observable.map(initialValues);
}
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
function getGlobal() {
    return typeof window !== 'undefined' ? window : global;
}
function getNextId() {
    return ++globalState.mobxGuid;
}
function fail(message, thing) {
    invariant(false, message, thing);
    throw "X"; // unreachable
}
function invariant(check, message, thing) {
    if (!check)
        throw new Error("[mobx] Invariant failed: " + message + (thing ? " in '" + thing + "'" : ""));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg) {
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func.apply(this, arguments);
    };
}
var noop = function () { };
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function joinStrings(things, limit, separator) {
    if (limit === void 0) { limit = 100; }
    if (separator === void 0) { separator = " - "; }
    if (!things)
        return "";
    var sliced = things.slice(0, limit);
    return "" + sliced.join(separator) + (things.length > limit ? " (... and " + (things.length - limit) + "more)" : "");
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function objectAssign() {
    var res = arguments[0];
    for (var i = 1, l = arguments.length; i < l; i++) {
        var source = arguments[i];
        for (var key in source)
            if (hasOwnProperty(source, key)) {
                res[key] = source[key];
            }
    }
    return res;
}
var prototypeHasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwnProperty(object, propName) {
    return prototypeHasOwnProperty.call(object, propName);
}
function makeNonEnumerable(object, propNames) {
    for (var i = 0; i < propNames.length; i++) {
        addHiddenProp(object, propNames[i], object[propNames[i]]);
    }
}
function addHiddenProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable(object, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable(object, prop) {
    invariant(isPropertyConfigurable(object, prop), "Cannot make property '" + prop + "' observable, it is not configurable and writable in the target object");
}
function getEnumerableKeys(obj) {
    var res = [];
    for (var key in obj)
        res.push(key);
    return res;
}
/**
 * Naive deepEqual. Doesn't check for prototype, non-enumerable or out-of-range properties on arrays.
 * If you have such a case, you probably should use this function but something fancier :).
 */
function deepEqual(a, b) {
    if (a === null && b === null)
        return true;
    if (a === undefined && b === undefined)
        return true;
    if (typeof a !== "object")
        return a === b;
    var aIsArray = isArrayLike(a);
    var aIsMap = isMapLike(a);
    if (aIsArray !== isArrayLike(b)) {
        return false;
    }
    else if (aIsMap !== isMapLike(b)) {
        return false;
    }
    else if (aIsArray) {
        if (a.length !== b.length)
            return false;
        for (var i = a.length - 1; i >= 0; i--)
            if (!deepEqual(a[i], b[i]))
                return false;
        return true;
    }
    else if (aIsMap) {
        if (a.size !== b.size)
            return false;
        var equals_1 = true;
        a.forEach(function (value, key) {
            equals_1 = equals_1 && deepEqual(b.get(key), value);
        });
        return equals_1;
    }
    else if (typeof a === "object" && typeof b === "object") {
        if (a === null || b === null)
            return false;
        if (isMapLike(a) && isMapLike(b)) {
            if (a.size !== b.size)
                return false;
            // Freaking inefficient.... Create PR if you run into this :) Much appreciated!
            return deepEqual(observable.shallowMap(a).entries(), observable.shallowMap(b).entries());
        }
        if (getEnumerableKeys(a).length !== getEnumerableKeys(b).length)
            return false;
        for (var prop in a) {
            if (!(prop in b))
                return false;
            if (!deepEqual(a[prop], b[prop]))
                return false;
        }
        return true;
    }
    return false;
}
function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject(x) && x[propName] === true;
    };
}
/**
 * Returns whether the argument is an array, disregarding observability.
 */
function isArrayLike(x) {
    return Array.isArray(x) || isObservableArray(x);
}
function isMapLike(x) {
    return isES6Map(x) || isObservableMap(x);
}
function isES6Map(thing) {
    if (getGlobal().Map !== undefined && thing instanceof getGlobal().Map)
        return true;
    return false;
}
function primitiveSymbol() {
    return (typeof Symbol === "function" && Symbol.toPrimitive) || "@@toPrimitive";
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? ("" + value) : value;
}

/**
 * These values will persist if global state is reset
 */
var persistentKeys = ["mobxGuid", "resetId", "spyListeners", "strictMode", "runId"];
var MobXGlobals = (function () {
    function MobXGlobals() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         */
        this.version = 5;
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.strictMode = false;
        /**
         * Used by createTransformer to detect that the global state has been reset.
         */
        this.resetId = 0;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
    }
    return MobXGlobals;
}());
var globalState = new MobXGlobals();
var shareGlobalStateCalled = false;
var runInIsolationCalled = false;
var warnedAboutMultipleInstances = false;
{
    var global_1 = getGlobal();
    if (!global_1.__mobxInstanceCount) {
        global_1.__mobxInstanceCount = 1;
    }
    else {
        global_1.__mobxInstanceCount++;
        setTimeout(function () {
            if (!shareGlobalStateCalled && !runInIsolationCalled && !warnedAboutMultipleInstances) {
                warnedAboutMultipleInstances = true;
                console.warn("[mobx] Warning: there are multiple mobx instances active. This might lead to unexpected results. See https://github.com/mobxjs/mobx/issues/1082 for details.");
            }
        });
    }
}
function isolateGlobalState() {
    runInIsolationCalled = true;
    getGlobal().__mobxInstanceCount--;
}
function shareGlobalState() {
    // TODO: remove in 4.0; just use peer dependencies instead.
    deprecated("Using `shareGlobalState` is not recommended, use peer dependencies instead. See https://github.com/mobxjs/mobx/issues/1082 for details.");
    shareGlobalStateCalled = true;
    var global = getGlobal();
    var ownState = globalState;
    /**
     * Backward compatibility check
     */
    if (global.__mobservableTrackingStack || global.__mobservableViewStack)
        throw new Error("[mobx] An incompatible version of mobservable is already loaded.");
    if (global.__mobxGlobal && global.__mobxGlobal.version !== ownState.version)
        throw new Error("[mobx] An incompatible version of mobx is already loaded.");
    if (global.__mobxGlobal)
        globalState = global.__mobxGlobal;
    else
        global.__mobxGlobal = ownState;
}
function getGlobalState() {
    return globalState;
}

/**
 * For testing purposes only; this will break the internal state of existing observables,
 * but can be used to get back at a stable state after throwing errors
 */
function resetGlobalState() {
    globalState.resetId++;
    var defaultGlobals = new MobXGlobals();
    for (var key in defaultGlobals)
        if (persistentKeys.indexOf(key) === -1)
            globalState[key] = defaultGlobals[key];
    globalState.allowStateChanges = !globalState.strictMode;
}

function hasObservers(observable) {
    return observable.observers && observable.observers.length > 0;
}
function getObservers(observable) {
    return observable.observers;
}
function addObserver(observable, node) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    var l = observable.observers.length;
    if (l) {
        observable.observersIndexes[node.__mapid] = l;
    }
    observable.observers[l] = node;
    if (observable.lowestObserverState > node.dependenciesState)
        observable.lowestObserverState = node.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    if (observable.observers.length === 1) {
        // deleting last observer
        observable.observers.length = 0;
        queueForUnobservation(observable);
    }
    else {
        // deleting from _observersIndexes is straight forward, to delete from _observers, let's swap `node` with last element
        var list = observable.observers;
        var map = observable.observersIndexes;
        var filler = list.pop(); // get last element, which should fill the place of `node`, so the array doesn't have holes
        if (filler !== node) {
            var index = map[node.__mapid] || 0; // getting index of `node`. this is the only place we actually use map.
            if (index) {
                map[filler.__mapid] = index;
            }
            else {
                delete map[filler.__mapid];
            }
            list[index] = filler;
        }
        delete map[node.__mapid];
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (!observable.isPendingUnobservation) {
        // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable = list[i];
            observable.isPendingUnobservation = false;
            if (observable.observers.length === 0) {
                observable.onBecomeUnobserved();
                // NOTE: onBecomeUnobserved might push to `pendingUnobservations`
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable.lastAccessedBy) {
            observable.lastAccessedBy = derivation.runId;
            derivation.newObserving[derivation.unboundDepsCount++] = observable;
        }
    }
    else if (observable.observers.length === 0) {
        queueForUnobservation(observable);
    }
}
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.UP_TO_DATE)
            d.onBecomeStale();
        d.dependenciesState = IDerivationState.STALE;
    }
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE)
            observable.lowestObserverState = IDerivationState.UP_TO_DATE;
    }
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    var observers = observable.observers;
    var i = observers.length;
    while (i--) {
        var d = observers[i];
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            d.onBecomeStale();
        }
    }
    // invariantLOS(observable, "maybe end");
}

var IDerivationState;
(function (IDerivationState) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var CaughtException = (function () {
    function CaughtException(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException;
}());
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE: return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE: return true;
        case IDerivationState.POSSIBLY_STALE: {
            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue(obj)) {
                    try {
                        obj.get();
                    }
                    catch (e) {
                        // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                        untrackedEnd(prevUntracked);
                        return true;
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd(prevUntracked);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0(derivation);
            untrackedEnd(prevUntracked);
            return false;
        }
    }
}
function isComputingDerivation() {
    return globalState.trackingDerivation !== null; // filter out actions inside computations
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers$$1 = atom.observers.length > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState.computationDepth > 0 && hasObservers$$1)
        fail(getMessage("m031") + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && hasObservers$$1)
        fail(getMessage(globalState.strictMode ? "m030a" : "m030b") + atom.name);
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    try {
        result = f.call(context);
    }
    catch (e) {
        result = new CaughtException(e);
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    return result;
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = derivation.observing = derivation.newObserving;
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver(dep, derivation);
        }
    }
    // Some new observed derivations might become stale during this derivation computation
    // so say had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked(action) {
    var prev = untrackedStart();
    var res = action();
    untrackedEnd(prev);
    return res;
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

var Reaction = (function () {
    function Reaction(name, onInvalidate) {
        if (name === void 0) { name = "Reaction@" + getNextId(); }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
    }
    Reaction.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch();
            this._isScheduled = false;
            if (shouldCompute(this)) {
                this._isTrackPending = true;
                this.onInvalidate();
                if (this._isTrackPending && isSpyEnabled()) {
                    // onInvalidate didn't trigger track right away..
                    spyReport({
                        object: this,
                        type: "scheduled-reaction"
                    });
                }
            }
            endBatch();
        }
    };
    Reaction.prototype.track = function (fn) {
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify) {
            startTime = Date.now();
            spyReportStart({
                object: this,
                type: "reaction",
                fn: fn
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
        }
        if (isCaughtException(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify) {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    Reaction.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this;
        var messageToUser = getMessage("m037");
        console.error(message || messageToUser /* latter will not be true, make sure uglify doesn't remove */, error);
        /** If debugging brought you here, please, read the above message :-). Tnx! */
        if (isSpyEnabled()) {
            spyReport({
                type: "error",
                message: message,
                error: error,
                object: this
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r.$mobx = this;
        r.onError = registerErrorHandler;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction.prototype.whyRun = function () {
        var observing = unique(this._isRunning ? this.newObserving : this.observing).map(function (dep) { return dep.name; });
        return ("\nWhyRun? reaction '" + this.name + "':\n * Status: [" + (this.isDisposed ? "stopped" : this._isRunning ? "running" : this.isScheduled() ? "scheduled" : "idle") + "]\n * This reaction will re-run if any of the following observables changes:\n    " + joinStrings(observing) + "\n    " + ((this._isRunning) ? " (... or any observable accessed during the remainder of the current run)" : "") + "\n\t" + getMessage("m038") + "\n");
    };
    return Reaction;
}());
function registerErrorHandler(handler) {
    invariant(this && this.$mobx && isReaction(this.$mobx), "Invalid `this`");
    invariant(!this.$mobx.errorHandler, "Only one onErrorHandler can be registered");
    this.$mobx.errorHandler = handler;
}
function onReactionError(handler) {
    globalState.globalReactionErrorHandlers.push(handler);
    return function () {
        var idx = globalState.globalReactionErrorHandlers.indexOf(handler);
        if (idx >= 0)
            globalState.globalReactionErrorHandlers.splice(idx, 1);
    };
}
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations."
                + (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function asReference(value) {
    deprecated("asReference is deprecated, use observable.ref instead");
    return observable.ref(value);
}
function asStructure(value) {
    deprecated("asStructure is deprecated. Use observable.struct, computed.struct or reaction options instead.");
    return observable.struct(value);
}
function asFlat(value) {
    deprecated("asFlat is deprecated, use observable.shallow instead");
    return observable.shallow(value);
}
function asMap(data) {
    deprecated("asMap is deprecated, use observable.map or observable.shallowMap instead");
    return observable.map(data || {});
}

function createComputedDecorator(equals) {
    return createClassPropertyDecorator(function (target, name, _, __, originalDescriptor) {
        invariant(typeof originalDescriptor !== "undefined", getMessage("m009"));
        invariant(typeof originalDescriptor.get === "function", getMessage("m010"));
        var adm = asObservableObject(target, "");
        defineComputedProperty(adm, name, originalDescriptor.get, originalDescriptor.set, equals, false);
    }, function (name) {
        var observable = this.$mobx.values[name];
        if (observable === undefined)
            return undefined;
        return observable.get();
    }, function (name, value) {
        this.$mobx.values[name].set(value);
    }, false, false);
}
var computedDecorator = createComputedDecorator(comparer.default);
var computedStructDecorator = createComputedDecorator(comparer.structural);
/**
 * Decorator for class properties: @computed get value() { return expr; }.
 * For legacy purposes also invokable as ES5 observable created: `computed(() => expr)`;
 */
var computed = (function computed(arg1, arg2, arg3) {
    if (typeof arg2 === "string") {
        return computedDecorator.apply(null, arguments);
    }
    invariant(typeof arg1 === "function", getMessage("m011"));
    invariant(arguments.length < 3, getMessage("m012"));
    var opts = typeof arg2 === "object" ? arg2 : {};
    opts.setter = typeof arg2 === "function" ? arg2 : opts.setter;
    var equals = opts.equals
        ? opts.equals
        : (opts.compareStructural || opts.struct)
            ? comparer.structural
            : comparer.default;
    return new ComputedValue(arg1, opts.context, equals, opts.name || arg1.name || "", opts.setter);
});
computed.struct = computedStructDecorator;
computed.equals = createComputedDecorator;

function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            invariant(property === undefined, getMessage("m036"));
            return thing.$mobx.atom;
        }
        if (isObservableMap(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return getAtom(anyThing._keys);
            var observable = anyThing._data[property] || anyThing._hasMap[property];
            invariant(!!observable, "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
            return observable;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        runLazyInitializers(thing);
        if (property && !thing.$mobx)
            thing[property]; // See #1072 // TODO: remove in 4.0
        if (isObservableObject(thing)) {
            if (!property)
                return fail("please specify a property");
            var observable = thing.$mobx.values[property];
            invariant(!!observable, "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
            return observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction(thing.$mobx)) {
            // disposer function
            return thing.$mobx;
        }
    }
    return fail("Cannot obtain atom from " + thing);
}
function getAdministration(thing, property) {
    invariant(thing, "Expecting some object");
    if (property !== undefined)
        return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
        return thing;
    if (isObservableMap(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    runLazyInitializers(thing);
    if (thing.$mobx)
        return thing.$mobx;
    invariant(false, "Cannot obtain administration from " + thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing))
        named = getAdministration(thing);
    else
        named = getAtom(thing); // valid for arrays as well
    return named.name;
}

function isComputed(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject(value) === false)
            return false;
        var atom = getAtom(value, property);
        return isComputedValue(atom);
    }
    return isComputedValue(value);
}

function observe(thing, propOrCb, cbOrFire, fireImmediately) {
    if (typeof cbOrFire === "function")
        return observeObservableProperty(thing, propOrCb, cbOrFire, fireImmediately);
    else
        return observeObservable(thing, propOrCb, cbOrFire);
}
function observeObservable(thing, listener, fireImmediately) {
    return getAdministration(thing).observe(listener, fireImmediately);
}
function observeObservableProperty(thing, property, listener, fireImmediately) {
    return getAdministration(thing, property).observe(listener, fireImmediately);
}

function intercept(thing, propOrHandler, handler) {
    if (typeof handler === "function")
        return interceptProperty(thing, propOrHandler, handler);
    else
        return interceptInterceptable(thing, propOrHandler);
}
function interceptInterceptable(thing, handler) {
    return getAdministration(thing).intercept(handler);
}
function interceptProperty(thing, property, handler) {
    return getAdministration(thing, property).intercept(handler);
}

/**
    * expr can be used to create temporarily views inside views.
    * This can be improved to improve performance if a value changes often, but usually doesn't affect the outcome of an expression.
    *
    * In the following example the expression prevents that a component is rerender _each time_ the selection changes;
    * instead it will only rerenders when the current todo is (de)selected.
    *
    * reactiveComponent((props) => {
    *     const todo = props.todo;
    *     const isSelected = mobx.expr(() => props.viewState.selection === todo);
    *     return <div className={isSelected ? "todo todo-selected" : "todo"}>{todo.title}</div>
    * });
    *
    */
function expr(expr, scope) {
    if (!isComputingDerivation())
        console.warn(getMessage("m013"));
    // optimization: would be more efficient if the expr itself wouldn't be evaluated first on the next change, but just a 'changed' signal would be fired
    return computed(expr, { context: scope }).get();
}

function toJS(source, detectCycles, __alreadySeen) {
    if (detectCycles === void 0) { detectCycles = true; }
    if (__alreadySeen === void 0) { __alreadySeen = []; }
    // optimization: using ES6 map would be more efficient!
    // optimization: lift this function outside toJS, this makes recursion expensive
    function cache(value) {
        if (detectCycles)
            __alreadySeen.push([source, value]);
        return value;
    }
    if (isObservable(source)) {
        if (detectCycles && __alreadySeen === null)
            __alreadySeen = [];
        if (detectCycles && source !== null && typeof source === "object") {
            for (var i = 0, l = __alreadySeen.length; i < l; i++)
                if (__alreadySeen[i][0] === source)
                    return __alreadySeen[i][1];
        }
        if (isObservableArray(source)) {
            var res = cache([]);
            var toAdd = source.map(function (value) { return toJS(value, detectCycles, __alreadySeen); });
            res.length = toAdd.length;
            for (var i = 0, l = toAdd.length; i < l; i++)
                res[i] = toAdd[i];
            return res;
        }
        if (isObservableObject(source)) {
            var res = cache({});
            for (var key in source)
                res[key] = toJS(source[key], detectCycles, __alreadySeen);
            return res;
        }
        if (isObservableMap(source)) {
            var res_1 = cache({});
            source.forEach(function (value, key) { return res_1[key] = toJS(value, detectCycles, __alreadySeen); });
            return res_1;
        }
        if (isObservableValue(source))
            return toJS(source.get(), detectCycles, __alreadySeen);
    }
    return source;
}

function createTransformer(transformer, onCleanup) {
    invariant(typeof transformer === "function" && transformer.length < 2, "createTransformer expects a function that accepts one argument");
    // Memoizes: object id -> reactive view that applies transformer to the object
    var objectCache = {};
    // If the resetId changes, we will clear the object cache, see #163
    // This construction is used to avoid leaking refs to the objectCache directly
    var resetId = globalState.resetId;
    // Local transformer class specifically for this transformer
    var Transformer = (function (_super) {
        __extends(Transformer, _super);
        function Transformer(sourceIdentifier, sourceObject) {
            var _this = _super.call(this, function () { return transformer(sourceObject); }, undefined, comparer.default, "Transformer-" + transformer.name + "-" + sourceIdentifier, undefined) || this;
            _this.sourceIdentifier = sourceIdentifier;
            _this.sourceObject = sourceObject;
            return _this;
        }
        Transformer.prototype.onBecomeUnobserved = function () {
            var lastValue = this.value;
            _super.prototype.onBecomeUnobserved.call(this);
            delete objectCache[this.sourceIdentifier];
            if (onCleanup)
                onCleanup(lastValue, this.sourceObject);
        };
        return Transformer;
    }(ComputedValue));
    return function (object) {
        if (resetId !== globalState.resetId) {
            objectCache = {};
            resetId = globalState.resetId;
        }
        var identifier = getMemoizationId(object);
        var reactiveTransformer = objectCache[identifier];
        if (reactiveTransformer)
            return reactiveTransformer.get();
        // Not in cache; create a reactive view
        reactiveTransformer = objectCache[identifier] = new Transformer(identifier, object);
        return reactiveTransformer.get();
    };
}
function getMemoizationId(object) {
    if (typeof object === 'string' || typeof object === 'number')
        return object;
    if (object === null || typeof object !== "object")
        throw new Error("[mobx] transform expected some kind of object or primitive value, got: " + object);
    var tid = object.$transformId;
    if (tid === undefined) {
        tid = getNextId();
        addHiddenProp(object, "$transformId", tid);
    }
    return tid;
}

function log(msg) {
    console.log(msg);
    return msg;
}
function whyRun(thing, prop) {
    switch (arguments.length) {
        case 0:
            thing = globalState.trackingDerivation;
            if (!thing)
                return log(getMessage("m024"));
            break;
        case 2:
            thing = getAtom(thing, prop);
            break;
    }
    thing = getAtom(thing);
    if (isComputedValue(thing))
        return log(thing.whyRun());
    else if (isReaction(thing))
        return log(thing.whyRun());
    return fail(getMessage("m025"));
}

function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node) {
    var result = {
        name: node.name
    };
    if (node.observing && node.observing.length > 0)
        result.dependencies = unique(node.observing).map(nodeToDependencyTree);
    return result;
}
function getObserverTree(thing, property) {
    return nodeToObserverTree(getAtom(thing, property));
}
function nodeToObserverTree(node) {
    var result = {
        name: node.name
    };
    if (hasObservers(node))
        result.observers = getObservers(node).map(nodeToObserverTree);
    return result;
}

function interceptReads(thing, propOrHandler, handler) {
    var target;
    if (isObservableMap(thing) || isObservableArray(thing) || isObservableValue(thing)) {
        target = getAdministration(thing);
    }
    else if (isObservableObject(thing)) {
        if (typeof propOrHandler !== "string")
            return fail("InterceptReads can only be used with a specific property, not with an object in general");
        target = getAdministration(thing, propOrHandler);
    }
    else {
        return fail("Expected observable map, object or array as first array");
    }
    if (target.dehancer !== undefined)
        return fail("An intercept reader was already established");
    target.dehancer = typeof propOrHandler === "function" ? propOrHandler : handler;
    return function () {
        target.dehancer = undefined;
    };
}

/**
 * (c) Michel Weststrate 2015 - 2016
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
var extras = {
    allowStateChanges: allowStateChanges,
    deepEqual: deepEqual,
    getAtom: getAtom,
    getDebugName: getDebugName,
    getDependencyTree: getDependencyTree,
    getAdministration: getAdministration,
    getGlobalState: getGlobalState,
    getObserverTree: getObserverTree,
    interceptReads: interceptReads,
    isComputingDerivation: isComputingDerivation,
    isSpyEnabled: isSpyEnabled,
    onReactionError: onReactionError,
    reserveArrayBuffer: reserveArrayBuffer,
    resetGlobalState: resetGlobalState,
    isolateGlobalState: isolateGlobalState,
    shareGlobalState: shareGlobalState,
    spyReport: spyReport,
    spyReportEnd: spyReportEnd,
    spyReportStart: spyReportStart,
    setReactionScheduler: setReactionScheduler
};
var everything = {
    Reaction: Reaction,
    untracked: untracked,
    Atom: Atom, BaseAtom: BaseAtom,
    useStrict: useStrict, isStrictModeEnabled: isStrictModeEnabled,
    spy: spy,
    comparer: comparer,
    asReference: asReference, asFlat: asFlat, asStructure: asStructure, asMap: asMap,
    isModifierDescriptor: isModifierDescriptor,
    isObservableObject: isObservableObject,
    isBoxedObservable: isObservableValue,
    isObservableArray: isObservableArray,
    ObservableMap: ObservableMap, isObservableMap: isObservableMap, map: map,
    transaction: transaction,
    observable: observable,
    computed: computed,
    isObservable: isObservable,
    isComputed: isComputed,
    extendObservable: extendObservable, extendShallowObservable: extendShallowObservable,
    observe: observe,
    intercept: intercept,
    autorun: autorun, autorunAsync: autorunAsync, when: when, reaction: reaction,
    action: action, isAction: isAction, runInAction: runInAction,
    expr: expr,
    toJS: toJS,
    createTransformer: createTransformer,
    whyRun: whyRun,
    isArrayLike: isArrayLike,
    extras: extras,
};
var warnedAboutDefaultExport = false;
var _loop_1 = function (p) {
    var val = everything[p];
    Object.defineProperty(everything, p, {
        get: function () {
            if (!warnedAboutDefaultExport) {
                warnedAboutDefaultExport = true;
                console.warn('Using default export (`import mobx from \'mobx\'`) is deprecated ' +
                    'and won’t work in mobx@4.0.0\n' +
                    'Use `import * as mobx from \'mobx\'` instead');
            }
            return val;
        }
    });
};
for (var p in everything) {
    _loop_1(p);
}
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({ spy: spy, extras: extras });
}

/* harmony default export */ __webpack_exports__["default"] = (everything);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 场景的渲染类型.
 *
 * @export
 * @enum {number}
 */
var RenderType;
(function (RenderType) {
    /**
     * 线框模式
     */
    RenderType[RenderType["Wireframe"] = 1] = "Wireframe";
})(RenderType = exports.RenderType || (exports.RenderType = {}));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var Entity_1 = __webpack_require__(2);
var WebCADView_1 = __webpack_require__(14);
__webpack_require__(28);
var THREE = __webpack_require__(0);
var Enum_1 = __webpack_require__(6);
function createRootElement() {
    var root = document.createElement('div');
    root.id = "viewer";
    root.style.height = "100%";
    document.body.appendChild(root);
    return root;
}
function createContent() {
    var el = document.createElement("div");
    el.style.position = "absolute";
    el.style.top = "0";
    el.style.width = "100%";
    return el;
}
function createBtn(textCtx, parEl, callback) {
    var btn = document.createElement("button");
    btn.textContent = textCtx;
    btn.onclick = callback;
    parEl.appendChild(btn);
}
var bulbLight;
window.onload = function () { return __awaiter(_this, void 0, void 0, function () {
    var el, app, param, hemiLight, content;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                el = createRootElement();
                app = new WebCADView_1.WebCADView(el);
                window.addEventListener("resize", function () {
                    app.m_Viewer.onSize();
                });
                param = parseQuery(window.location.search);
                if (!param.hasOwnProperty("id")) return [3 /*break*/, 2];
                return [4 /*yield*/, app.Load( param["id"] + ".json", "http://ovfprkza3.bkt.clouddn.com/")];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                hemiLight = new THREE.AmbientLight(0xddeeff, 3);
                app.m_Viewer.m_Scene.add(hemiLight);
                app.EdgeShow();
                // app.m_Viewer.m_Scene.add(load())
                app.ZoomAll();
                content = createContent();
                el.appendChild(content);
                createBtn("缩放", content, function () {
                    app.m_Viewer.ZoomAll();
                });
                createBtn("俯视", content, function () {
                    app.ViewToTop();
                    app.m_Viewer.ZoomAll();
                });
                createBtn("前视", content, function () {
                    app.ViewToFont();
                    app.ZoomAll();
                });
                createBtn("西南", content, function () {
                    app.m_Viewer.ViewLookAtVec(new THREE.Vector3(1, 1, -1));
                    app.ZoomAll();
                });
                createBtn("右视", content, function () {
                    app.m_Viewer.ViewLookAtVec(new THREE.Vector3(-1, 0, 0));
                    app.ZoomAll();
                });
                createBtn("实体", content, function () {
                    app.SolidShow();
                    app.m_Viewer.m_bNeedUpdate = true;
                });
                createBtn("线框", content, function () {
                    app.EdgeShow();
                    app.m_Viewer.m_bNeedUpdate = true;
                });
                return [2 /*return*/];
        }
    });
}); };
function load() {
    var loader = new THREE.TextureLoader();
    var texture = loader.load("020.jpg");
    texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping; // CHANGED
    texture.offset.set(0, 1); // CHANGED
    texture.repeat.set(4, 4); // CHANGED
    texture.needsUpdate = true;
    var material = new THREE.MeshStandardMaterial({
        map: texture
    });
    var box = new Entity_1.Solid3d(10, 10, 10);
    var obj = (box.Draw(Enum_1.RenderType.Wireframe));
    // obj.material = material;
    // let move = new THREE.Matrix4();
    // move.makeTranslation(5000, 0, 0);
    // obj.applyMatrix(move);
    return obj;
}
function parseQuery(search) {
    var args = search.substring(1).split('&');
    var argsParsed = {};
    var i, arg, kvp, key, value;
    for (i = 0; i < args.length; i++) {
        arg = args[i];
        if (-1 === arg.indexOf('=')) {
            argsParsed[decodeURIComponent(arg).trim()] = true;
        }
        else {
            kvp = arg.split('=');
            key = decodeURIComponent(kvp[0]).trim();
            value = decodeURIComponent(kvp[1]).trim();
            argsParsed[key] = value;
        }
    }
    return argsParsed;
}
console.log(parseQuery(window.location.search));


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var THREE = __webpack_require__(0);
var CoordinateSystem_1 = __webpack_require__(9);
//https://stackoverflow.com/questions/28499800/oriented-box-intersection-in-threejs
//http://www.cnblogs.com/iamzhanglei/archive/2012/06/07/2539751.html
//https://github.com/Mugen87/yume/blob/master/src/javascript/engine/etc/OBB.js
var OBB = /** @class */ (function () {
    function OBB(postion, size) {
        this.m_CoordinateSystem = postion || new CoordinateSystem_1.CoordinateSystem();
        this.halfSizes = size || new THREE.Vector3();
    }
    OBB.prototype.getCenter = function () {
        var v = this.m_CoordinateSystem.m_Postion.clone();
        v.add(this.m_CoordinateSystem.m_xAxis.clone().multiplyScalar(this.halfSizes.x * 0.5));
        v.add(this.m_CoordinateSystem.m_yAxis.clone().multiplyScalar(this.halfSizes.y * 0.5));
        v.add(this.m_CoordinateSystem.m_zAxis.clone().multiplyScalar(this.halfSizes.y * 0.5));
        return v;
    };
    OBB.prototype.intersectsOBB = function (obb) {
        // assumes the position of each box to be an orthonormal basis
        var pos1 = this.m_CoordinateSystem.getMatrix4();
        var pos2 = obb.m_CoordinateSystem.getMatrix4();
        var center1 = this.getCenter();
        var center2 = obb.getCenter();
        var centerDifference = center1.clone().sub(center2);
        var results = {
            intersects: true,
            resolution: null
        };
        // broad phase
        var maxDiameter1 = this.halfSizes.length();
        var maxDiameter2 = obb.halfSizes.length();
        if (centerDifference.length() > maxDiameter1 + maxDiameter2) {
            results.intersects = false;
            return results;
        }
        // narrow phase
        // get the axis vectors of the first box
        var ax1 = new THREE.Vector3();
        var ay1 = new THREE.Vector3();
        var az1 = new THREE.Vector3();
        this.m_CoordinateSystem.extractBasis(ax1, ay1, az1);
        // get the axis vectors of the second box
        var ax2 = new THREE.Vector3();
        var ay2 = new THREE.Vector3();
        var az2 = new THREE.Vector3();
        obb.m_CoordinateSystem.extractBasis(ax2, ay2, az2);
        // keep them in a list
        var axes = [ax1, ay1, az1, ax2, ay2, az2];
        // get the orientated radii vectors of the first box
        var radX1 = ax1.clone().multiplyScalar(this.halfSizes.x);
        var radY1 = ay1.clone().multiplyScalar(this.halfSizes.y);
        var radZ1 = az1.clone().multiplyScalar(this.halfSizes.z);
        // get the orientated radii vectors of the second box
        var radX2 = ax2.clone().multiplyScalar(obb.halfSizes.x);
        var radY2 = ay2.clone().multiplyScalar(obb.halfSizes.y);
        var radZ2 = az2.clone().multiplyScalar(obb.halfSizes.z);
        var smallestDifference = Infinity;
        // there are 15 axes to check, so loop through all of them until a separation plane is found
        var zeros = new THREE.Vector3();
        for (var i = 0; i < 15; i++) {
            var axis;
            // the first 6 axes are just the axes of each bounding box
            if (i < 6) {
                axis = axes[i];
            }
            else {
                var offset = i - 6;
                var j = Math.floor(offset / 3);
                var k = offset % 3;
                axis = axes[j].clone().cross(axes[k + 3]);
                if (axis.equals(zeros)) {
                    // axes must be collinear, ignore
                    continue;
                }
            }
            // get the projections of the first half box onto the axis
            var projAx1 = Math.abs(radX1.dot(axis));
            var projAy1 = Math.abs(radY1.dot(axis));
            var projAz1 = Math.abs(radZ1.dot(axis));
            // get the projections of the second half box onto the axis
            var projAx2 = Math.abs(radX2.dot(axis));
            var projAy2 = Math.abs(radY2.dot(axis));
            var projAz2 = Math.abs(radZ2.dot(axis));
            // sum the projections
            var projectionBoxesSum = projAx1 + projAy1 + projAz1 + projAx2 + projAy2 + projAz2;
            // get the projection of the center difference onto the axis
            var projectionDifference = Math.abs(centerDifference.dot(axis));
            if (projectionDifference >= projectionBoxesSum * 0.5) {
                // If the projection of the center difference onto the axis is greater
                // than the sum of the box projections, then we found a separating plane!
                // The bounding boxes therefore must not intersect
                results.intersects = false;
                break;
            }
            else {
                // keep track of the difference, the smallest gives the minimum distance
                // and direction to move the boxes such that they no longer intersect
                var difference = projectionBoxesSum - projectionDifference;
                if (difference < smallestDifference) {
                    results.resolution = axis.clone().multiplyScalar(difference);
                    smallestDifference = difference;
                }
            }
        }
        // could not find a separating plane, they must intersect
        return results;
    };
    ;
    return OBB;
}());
exports.OBB = OBB;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var THREE = __webpack_require__(0);
var CoordinateSystem = /** @class */ (function () {
    function CoordinateSystem(postion, xAxis, yAxis, zAxis) {
        this.m_Postion = postion || new THREE.Vector3(0, 0, 0);
        this.m_xAxis = xAxis || new THREE.Vector3(1, 0, 0);
        this.m_yAxis = yAxis || new THREE.Vector3(0, 1, 0);
        this.m_zAxis = zAxis || new THREE.Vector3(0, 0, 1);
    }
    CoordinateSystem.prototype.applyMatrix4 = function (mat4) {
        this.m_Postion.applyMatrix4(mat4);
        this.m_xAxis.applyMatrix4(mat4);
        this.m_yAxis.applyMatrix4(mat4);
        this.m_zAxis.applyMatrix4(mat4);
    };
    CoordinateSystem.prototype.getMatrix4 = function () {
        var m = new THREE.Matrix4();
        m.makeBasis(this.m_xAxis, this.m_yAxis, this.m_zAxis);
        m.setPosition(this.m_Postion);
        return m;
    };
    CoordinateSystem.prototype.copyForm = function (mat4) {
        this.m_Postion.set(mat4.elements[12], mat4.elements[13], mat4.elements[14]);
        mat4.extractBasis(this.m_xAxis, this.m_yAxis, this.m_zAxis);
    };
    CoordinateSystem.prototype.extractBasis = function (xAxisA, yAxisA, zAxisA) {
        xAxisA.copy(this.m_xAxis);
        yAxisA.copy(this.m_yAxis);
        zAxisA.copy(this.m_zAxis);
    };
    CoordinateSystem.prototype.copy = function (cs) {
        this.m_Postion.copy(cs.m_Postion);
        this.m_xAxis.copy(cs.m_xAxis);
        this.m_yAxis.copy(cs.m_yAxis);
        this.m_zAxis.copy(cs.m_zAxis);
        return this;
    };
    CoordinateSystem.prototype.clone = function () {
        var r = new CoordinateSystem();
        return r;
    };
    return CoordinateSystem;
}());
exports.CoordinateSystem = CoordinateSystem;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var mst = __webpack_require__(3);
var THREE = __webpack_require__(0);
var PointData = mst.types.optional(mst.types.array(mst.types.number), [0, 0, 0]);
function toVec3(vec) {
    return new THREE.Vector3(vec[0], vec[1], vec[2]);
}
exports.EntityData = mst.types.model("Entity", {
    size: PointData,
    isErase: false,
    objectId: mst.types.optional(mst.types.number, 0)
}, {
    getSize: function () {
        return toVec3(this.size);
    },
    setSize: function (x, y, z) {
        this.size = [x, y, z];
    },
    setErase: function (isErase) {
        this.isErase = isErase;
    },
    afterCreate: function () {
    },
    setObjectId: function (id) {
        this.objectId = id;
    }
});
exports.CurveData = mst.types.compose("Curve", exports.EntityData, {}, {});
exports.LineData = mst.types.compose("Line", exports.CurveData, {
    startPoint: PointData,
    entPoint: PointData,
    get StartPoint() {
        return toVec3(this.startPoint);
    },
    get EndPoint() {
        return toVec3(this.entPoint);
    }
}, {
    setStartPoint: function (pt) {
        this.startPoint = pt.toArray();
    },
    setEndPoint: function (pt) {
        this.entPoint = pt.toArray();
    },
});
exports.DataBaseData = mst.types.model("Database", {
    /**
     * 图形列表 使用ID存储
     */
    idColl: mst.types.optional(mst.types.array(mst.types.number), []),
    /**
     * 当前图元个数
     */
    curLength: mst.types.optional(mst.types.number, 0)
}, {
    addEntity: function (id) {
        this.idColl.push(id);
    },
    removeEntity: function (id) {
        this.idColl.remove(id);
    },
    allocateId: function () {
        this.curLength++;
        return this.curLength;
    }
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(12);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(13)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(1))(0);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
Object.defineProperty(exports, "__esModule", { value: true });
var Viewer_1 = __webpack_require__(15);
var CameraControls_1 = __webpack_require__(21);
var THREE = __webpack_require__(0);
var FBXLoader_1 = __webpack_require__(23);
var ColorPalette_1 = __webpack_require__(26);
var SetMaterial_1 = __webpack_require__(27);
/**
 *
 * 只允许拥有一个view的实例. 暂时不支持多个view在一个页面.
 *
 * @export
 * @class WebCADView
 */
var WebCADView = /** @class */ (function () {
    /**
     * Creates an instance of WebCADView.
     *
     * 构造函数,提供一个dom节点..
     *
     * @param {HTMLElement} domNode
     * @memberof WebCADView
     */
    function WebCADView(domNode) {
        this.m_EdgeEntitytList = [];
        this.m_SolidEntityList = [];
        window["app"] = this;
        //渲染器
        this.m_Viewer = new Viewer_1.Viewer(domNode);
        //相机控制
        new CameraControls_1.CameraControls(this.m_Viewer, this.m_Viewer.m_Render.domElement);
    }
    WebCADView.prototype.WriteEdge = function (obj, color) {
        var _this = this;
        if (obj.hasOwnProperty("geometry")) {
            var edge = new THREE.EdgesGeometry(obj["geometry"], 1);
            var move = new THREE.Matrix4();
            move.makeTranslation(1500, 0, 0);
            // edge.applyMatrix(move)
            if (!color)
                color = 7;
            var line = new THREE.LineSegments(edge, new THREE.LineBasicMaterial({ color: ColorPalette_1.GetColorFormIndex(color) }));
            line.userData = color;
            this.m_Viewer.m_Scene.add(line);
            this.m_EdgeEntitytList.push(line);
        }
        else {
            obj.children.forEach(function (o) { _this.WriteEdge(o, color); });
        }
    };
    /**
     *
     * 加载场景
     *
     * @param {string} jsonFile
     * @memberof WebCADView
     */
    WebCADView.prototype.Load = function (jsonFile, pathUrl) {
        return __awaiter(this, void 0, void 0, function () {
            var res, _i, _a, element, fbxObj, Material;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.LoadJson(pathUrl + jsonFile)];
                    case 1:
                        res = _b.sent();
                        if (!res.State)
                            return [2 /*return*/];
                        _i = 0, _a = res.Obj["FBXFile"];
                        _b.label = 2;
                    case 2:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        element = _a[_i];
                        return [4 /*yield*/, FBXLoader_1.loadFBX(pathUrl + element.fileName)];
                    case 3:
                        fbxObj = _b.sent();
                        if (fbxObj.State) {
                            Material = ColorPalette_1.GetColorIndex(element.Color);
                            SetMaterial_1.SetMaterial(fbxObj.object, Material);
                            this.m_Viewer.m_Scene.add(fbxObj.object);
                            this.m_SolidEntityList.push(fbxObj.object);
                            fbxObj.object.visible = true;
                            this.WriteEdge(fbxObj.object, element.Color);
                        }
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5:
                        this.m_Viewer.m_bNeedUpdate = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 加载json
     *
     * @param {string} jsonFile
     * @returns {Promise<LoadFileRes>}
     * @memberof WebCADView
     */
    WebCADView.prototype.LoadJson = function (jsonFile) {
        return new Promise(function (res, rej) {
            var loader = new THREE.FileLoader();
            //load a text file a output the result to the console
            loader.load(
            // resource URL
            jsonFile, 
            // Function when resource is loaded
            function (data) {
                try {
                    var obj = JSON.parse(data);
                    res({ State: true, Obj: obj });
                }
                catch (error) {
                    res({ State: false });
                }
            }, 
            // Function called when download progresses
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            }, 
            // Function called when download errors
            function (xhr) {
                console.error('An error happened');
                res({ State: false });
            });
        });
    };
    //缩放到全部
    WebCADView.prototype.ZoomAll = function () {
        this.m_Viewer.ZoomAll();
    };
    //前视图
    WebCADView.prototype.ViewToFont = function () {
        this.m_Viewer.ViewToFont();
    };
    //俯视图
    WebCADView.prototype.ViewToTop = function () {
        this.m_Viewer.ViewToTop();
    };
    //西南等轴视图
    WebCADView.prototype.SolidShow = function () {
        for (var _i = 0, _a = this.m_SolidEntityList; _i < _a.length; _i++) {
            var e = _a[_i];
            e.visible = true;
        }
        for (var _b = 0, _c = this.m_EdgeEntitytList; _b < _c.length; _b++) {
            var e = _c[_b];
            e.material.color = ColorPalette_1.GetColorFormIndex(7);
        }
    };
    WebCADView.prototype.EdgeShow = function () {
        for (var _i = 0, _a = this.m_SolidEntityList; _i < _a.length; _i++) {
            var e = _a[_i];
            e.visible = false;
        }
        for (var _b = 0, _c = this.m_EdgeEntitytList; _b < _c.length; _b++) {
            var e = _c[_b];
            e.material.color = ColorPalette_1.GetColorFormIndex(e.userData);
        }
    };
    return WebCADView;
}());
exports.WebCADView = WebCADView;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Camera_1 = __webpack_require__(16);
var THREE = __webpack_require__(0);
var GripScene_1 = __webpack_require__(17);
var Enum_1 = __webpack_require__(6);
var xaop = __webpack_require__(18);
var GeUtils_1 = __webpack_require__(20);
//
var maxXRo = Math.PI * 0.5;
var minXRo = -maxXRo;
var Viewer = /** @class */ (function () {
    //构造
    function Viewer(canvas) {
        var _this = this;
        this.m_zRo = Math.PI * 0.5;
        this.m_xRo = maxXRo;
        this.m_ViewHeight = 205;
        //目标
        this.m_Target = new THREE.Vector3(0, 0, 0);
        //物体中心
        this.m_LookTarget = new THREE.Vector3(0, 0, 0);
        //观察方向
        this.m_Direction = new THREE.Vector3(0, 0, -1);
        this.m_bNeedUpdate = true;
        this.m_RenderType = Enum_1.RenderType.Wireframe;
        //场景 引用自数据库
        this.m_TempEntity = [];
        this.m_Scene = new THREE.Scene();
        this.m_GripScence = new GripScene_1.GripScene;
        this.onSize = function () {
            _this.m_Render.setSize(_this.m_HtmlElement.clientWidth, _this.m_HtmlElement.clientHeight);
            _this.m_Camera.Update();
            _this.m_bNeedUpdate = true;
        };
        this.Render = function () {
            requestAnimationFrame(_this.Render);
            if (_this.m_Scene != null && _this.m_bNeedUpdate) {
                _this.m_Render.clear();
                _this.m_bNeedUpdate = false;
                _this.m_Render.render(_this.m_Scene, _this.m_Camera.m_CurCamera);
                _this.m_Render.render(_this.m_GripScence, _this.m_Camera.m_CurCamera);
            }
        };
        this.m_HtmlElement = canvas;
        this.initRender();
        this.initCamera();
        //渲染循环
        this.Render();
    }
    /**
     * 绘制临时的图元
     *
     * @param {Entity} e
     * @memberof Viewer
     */
    Viewer.prototype.drawTempEntity = function (e) {
        var obj = e.Draw(this.m_RenderType);
        this.m_TempEntity.push(obj);
        this.m_Scene.add(obj);
    };
    /**
     *
     * 清除所有的临时图元
     *
     * @memberof Viewer
     */
    Viewer.prototype.clearTempEntity = function () {
        var _this = this;
        this.m_TempEntity.forEach(function (e) {
            _this.m_Scene.remove(e);
        });
        this.m_TempEntity = [];
    };
    //TODO: 假设我现在只渲染一个数据层. 不渲染多个.
    Viewer.prototype.renderDatabase = function (db) {
        var _this = this;
        var ens = db.getEntityCollection();
        var removeFunctionList = [];
        var dispose = function () {
            removeFunctionList.forEach(function (f) { return f(); });
        };
        var injectEntity = function (ent) {
            var remove = xaop.begin(ent, ent.erase, function (b) {
                var obj = ent.Draw(this.m_RenderType);
                obj.visible = !b;
                return;
            });
            removeFunctionList.push(remove);
        };
        ens.forEach(function (e) {
            injectEntity(e);
            var obj = e.Draw(_this.m_RenderType);
            _this.m_Scene.add(obj);
        });
        var remove1 = xaop.begin(db, db.appendEntity, function (ent) {
            injectEntity(ent);
            _this.m_Scene.add(ent.Draw(_this.m_RenderType));
        });
        var remove2 = xaop.begin(db, db.removeEntityId, function (id) {
            var ent = db.getEntity(id);
            if (ent)
                _this.m_Scene.remove(ent.Draw(_this.m_RenderType));
        });
        xaop.begin(db, db.addEntityId, function (id) {
            var ent = db.getEntity(id);
            if (ent)
                _this.m_Scene.add(ent.Draw(_this.m_RenderType));
        });
        var remove3 = xaop.begin(db, db.disposeEntity, function (id) {
            var ent = db.getEntity(id);
            if (ent)
                _this.m_Scene.remove(ent.Draw(_this.m_RenderType));
            dispose();
        });
        // removeFunctionList.push(remove1);
        // removeFunctionList.push(remove2);
        // removeFunctionList.push(remove3);
    };
    /**
     *
     * 返回宽高比  W/H 纵横比；屏幕高宽比
     *
     * @returns {number}
     * @memberof Viewer
     */
    Viewer.prototype.getAspectRatio = function () {
        return this.m_HtmlElement.scrollWidth / this.m_HtmlElement.scrollHeight;
    };
    Viewer.prototype.ScreenToWorld = function (pt) {
        pt.x -= this.m_HtmlElement.scrollWidth * 0.5;
        pt.y -= this.m_HtmlElement.scrollHeight * 0.5;
        pt.y *= -1;
        pt.multiplyScalar(this.m_ViewHeight / this.m_HtmlElement.scrollHeight);
        this.m_Camera.m_CurCamera.updateMatrix();
        pt.applyMatrix4(this.m_Camera.m_CurCamera.matrix);
    };
    Viewer.prototype.WorldToScreen = function (pt) {
        this.m_Camera.m_CurCamera.updateMatrix();
        pt.applyMatrix4(this.m_Camera.m_CurCamera.matrixWorldInverse);
        pt.multiplyScalar(this.m_HtmlElement.scrollHeight / this.m_ViewHeight);
        pt.y *= -1;
        pt.x += this.m_HtmlElement.scrollWidth * 0.5;
        pt.y += this.m_HtmlElement.scrollHeight * 0.5;
    };
    //初始化render
    Viewer.prototype.initRender = function () {
        this.m_Render = new THREE.WebGLRenderer({
            antialias: true,
            precision: "highp",
            alpha: true,
            premultipliedAlpha: false,
            stencil: false,
            preserveDrawingBuffer: true,
        });
        //加到画布
        this.m_HtmlElement.appendChild(this.m_Render.domElement);
        this.m_Render.autoClear = false;
        this.m_Render.gammaInput = true;
        this.m_Render.gammaOutput = true;
        this.m_Render.shadowMap.enabled = true;
        this.m_Render.toneMapping = THREE.ReinhardToneMapping;
        this.m_Render.setPixelRatio(window.devicePixelRatio);
        this.m_Render.physicallyCorrectLights = true;
        this.m_Render.toneMappingExposure = Math.pow(1, 5.0); // to allow for very bright scenes.
        //设置设备像素比。 这通常用于HiDPI设备，以防止模糊输出画布。
        this.m_Render.setPixelRatio(window.devicePixelRatio);
        //这里暂时初始化成这个. 未来将分离出 Viewer
        this.m_Render.setSize(this.m_HtmlElement.clientWidth, this.m_HtmlElement.clientHeight);
        //设置它的背景色为黑色
        this.m_Render.setClearColor(0x000000, 1);
    };
    //初始化相机
    Viewer.prototype.initCamera = function () {
        this.m_Camera = new Camera_1.Camera(this);
    };
    Viewer.prototype.Pan = function (v) {
        v.y *= -1;
        v.multiplyScalar(-this.m_ViewHeight / this.m_HtmlElement.scrollHeight);
        v.applyQuaternion(this.m_Camera.m_CurCamera.quaternion);
        this.m_Target.add(v);
        this.m_Camera.Update();
        this.m_bNeedUpdate = true;
    };
    Viewer.prototype.Zoom = function (scale, scaleCenter) {
        this.m_ViewHeight *= scale;
        if (this.m_ViewHeight > 1e6)
            this.m_ViewHeight = 1e6;
        if (scaleCenter != null) {
            this.m_Target.sub(scaleCenter);
            this.m_Target.multiplyScalar(scale);
            this.m_Target.add(scaleCenter);
        }
        this.m_Camera.Update();
        this.m_bNeedUpdate = true;
    };
    /**
     * 更新视角观测目标(物体中心)
     *
     * @memberof Viewer
     */
    Viewer.prototype.UpdateLockTarget = function () {
        var renderList = this.m_Render.renderLists.get(this.m_Scene, this.m_Camera.m_CurCamera);
        var box = GeUtils_1.GeUtils.GetBoxArr(renderList.opaque.map(function (o) {
            return o["object"];
        }));
        if (box) {
            this.m_LookTarget = box.getCenter();
        }
        else {
            this.m_LookTarget = GeUtils_1.GeUtils.cZeroVec;
        }
    };
    /**
     * 传入画布的变换
     *
     * @param {THREE.Vector3} v
     * @param {THREE.Vector3} [target] 目标观察点. 如果给该值,那么旋转时将使用该点将依旧可见 位置不变.
     * @memberof Viewer
     */
    Viewer.prototype.Rotate = function (v, target) {
        var oldX = this.m_xRo;
        this.m_xRo += v.y * 0.003;
        this.m_zRo += v.x * 0.003;
        this.m_xRo = this.m_xRo > maxXRo ? maxXRo : this.m_xRo < minXRo ? minXRo : this.m_xRo;
        var roX = this.m_xRo - oldX;
        //缓存观察点
        if (!target) {
            target = this.m_LookTarget;
        }
        var tempCenter = target.clone();
        this.WorldToScreen(tempCenter);
        this.m_Direction.z = -Math.sin(this.m_xRo);
        var d = Math.abs(Math.cos(this.m_xRo));
        this.m_Direction.x = -Math.cos(this.m_zRo) * d;
        this.m_Direction.y = Math.sin(this.m_zRo) * d;
        this.m_Camera.UpdateDirection();
        this.m_Camera.Update();
        //还原观察点
        this.ScreenToWorld(tempCenter);
        this.m_Target.sub(tempCenter.sub(target));
        this.m_Camera.Update();
        this.m_bNeedUpdate = true;
    };
    //视角控制.
    Viewer.prototype.ViewLookAtVec = function (direction) {
        this.ViewLookAt(direction.x, direction.y, direction.z);
    };
    Viewer.prototype.ViewLookAt = function (x, y, z) {
        this.m_xRo = Math.atan2(-z, Math.sqrt(x * x + y * y));
        if (x == 0 && y == 0) {
            this.m_zRo = Math.PI * 0.5;
        }
        else {
            this.m_zRo = -Math.atan2(-y, -x);
        }
        this.m_Direction.set(x, y, z).normalize();
        this.m_Camera.UpdateDirection();
        this.m_Camera.Update();
        this.m_bNeedUpdate = true;
    };
    Viewer.prototype.ViewToTop = function () {
        this.ViewLookAt(0, 0, -1);
    };
    Viewer.prototype.ViewToFont = function () {
        this.ViewLookAt(0, 1, 0);
    };
    Viewer.prototype.ViewToSwiso = function () {
        this.ViewLookAt(1, 1, -1);
    };
    /**
     *
     * 缩放到指定的范围
     *
     * @param {THREE.Vector3} p1 世界坐标系最小点
     * @param {THREE.Vector3} p2 世界坐标系最大点
     * @memberof Viewer
     */
    Viewer.prototype.ZoomExtensBox = function (p1, p2) {
        this.m_Target.copy(GeUtils_1.GeUtils.midPoint(p1, p2));
        var box3 = new THREE.Box3().setFromPoints([p1, p2]);
        this.ZoomExtensBox3(box3);
    };
    Viewer.prototype.ZoomExtensBox3 = function (box3) {
        if (!box3)
            return;
        this.m_Camera.m_CurCamera.updateMatrixWorld(false);
        //变换到相机坐标系
        box3.applyMatrix4(this.m_Camera.m_CurCamera.matrixWorldInverse);
        //
        box3.getCenter(this.m_Target);
        //世界坐标系
        this.m_Target.applyMatrix4(this.m_Camera.m_CurCamera.matrix);
        //size
        var size = box3.getSize();
        //宽高比
        var aspectRatio = size.x / size.y;
        var viewAspectRatio = this.getAspectRatio();
        //
        if (aspectRatio > viewAspectRatio) {
            this.m_ViewHeight = size.x / viewAspectRatio;
        }
        else {
            this.m_ViewHeight = size.y;
        }
        this.m_Camera.Update();
    };
    Viewer.prototype.ZoomAll = function () {
        this.ZoomExtensBox3(GeUtils_1.GeUtils.GetBox(this.m_Scene, true));
        this.m_bNeedUpdate = true;
    };
    return Viewer;
}());
exports.Viewer = Viewer;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//组合相机.
//这个相机可以随意切换相机.
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = __webpack_require__(0);
//相机类.
//https://www.youtube.com/watch?v=k3adBAnDpos
var Camera = /** @class */ (function () {
    function Camera(view) {
        this.m_ParentViewer = view;
        this.m_CurCamera = new THREE.OrthographicCamera(-2, 2, 2, -2, -500000, 500000);
        this.UpdateDirection();
        this.Update();
    }
    Camera.prototype.Pan = function (v) {
        this.Update();
    };
    /**
     * 更新视图的观察方向. (计算了相机的up方位.)
     *
     * @memberof Camera
     */
    Camera.prototype.UpdateDirection = function () {
        if (this.m_ParentViewer.m_Direction.equals(new THREE.Vector3(0, 0, -1))) {
            this.m_CurCamera.up.set(0, 1, 0);
        }
        else if (this.m_ParentViewer.m_Direction.equals(new THREE.Vector3(0, 0, 1))) {
            this.m_CurCamera.up.set(0, -1, 0);
        }
        else {
            var xv = new THREE.Vector3();
            xv.crossVectors(new THREE.Vector3(0, 0, 1), this.m_ParentViewer.m_Direction);
            var yv = new THREE.Vector3();
            yv.crossVectors(this.m_ParentViewer.m_Direction, xv);
            yv.normalize();
            this.m_CurCamera.up.copy(yv);
        }
    };
    Camera.prototype.Update = function () {
        var viewHeight = this.m_ParentViewer.m_ViewHeight;
        var aspectRatio = this.m_ParentViewer.getAspectRatio();
        if (this.m_CurCamera instanceof THREE.OrthographicCamera) {
            this.m_CurCamera.left = aspectRatio * viewHeight / -2;
            this.m_CurCamera.right = aspectRatio * viewHeight / 2;
            this.m_CurCamera.bottom = viewHeight / -2;
            this.m_CurCamera.top = viewHeight / 2;
            this.m_CurCamera.updateProjectionMatrix();
            this.m_CurCamera.position.copy(this.m_ParentViewer.m_Target);
            this.m_CurCamera.position.sub(this.m_ParentViewer.m_Direction);
            this.m_CurCamera.lookAt(this.m_ParentViewer.m_Target);
        }
    };
    return Camera;
}());
exports.Camera = Camera;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = __webpack_require__(0);
var Entity_1 = __webpack_require__(2);
var GripScene = /** @class */ (function (_super) {
    __extends(GripScene, _super);
    function GripScene() {
        var _this = _super.call(this) || this;
        var line = new Entity_1.Line(new THREE.Vector3(), new THREE.Vector3(100, 10, 0));
        return _this;
    }
    return GripScene;
}(THREE.Scene));
exports.GripScene = GripScene;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = __webpack_require__(19);
exports.iaop = lib_1.iaop;
exports.begin = lib_1.begin;
exports.end = lib_1.end;
//# sourceMappingURL=index.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var aopMap = new Map();
var AopData = (function () {
    function AopData() {
        this.m_Begin = [];
        this.m_Ending = [];
    }
    return AopData;
}());
//全局注入.
function iaop(target, propertyKey, descriptor) {
    var injectFunctionData = new AopData();
    var _oldFunc;
    function call(funcArr, obj) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        funcArr.forEach(function (f) {
            f.call.apply(f, [obj].concat(args));
        });
    }
    var newMethon = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        call.apply(void 0, [injectFunctionData.m_Begin, this].concat(args));
        var res = _oldFunc.call.apply(_oldFunc, [this].concat(args));
        args.push(res);
        call.apply(void 0, [injectFunctionData.m_Ending, this].concat(args));
        return res;
    };
    if (!descriptor) {
        var getter = function () {
            if (typeof _oldFunc == "function")
                return newMethon;
            else {
                console.warn("warning:this is not a function!");
                return _oldFunc;
            }
        };
        var setter = function (newVal) {
            _oldFunc = newVal;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
    else {
        _oldFunc = descriptor.value;
        descriptor.value = newMethon;
    }
    aopMap.set(newMethon, injectFunctionData);
}
exports.iaop = iaop;
;
var InjectType;
(function (InjectType) {
    InjectType["begin"] = "__begin__";
    InjectType["end"] = "__end__";
})(InjectType || (InjectType = {}));
function getInject(injectType) {
    function injectAll(func, injectFunction) {
        if (!aopMap.has(func)) {
            console.warn("不存在的注入.");
            return;
        }
        var data = aopMap.get(func);
        var farr;
        switch (injectType) {
            case InjectType.begin:
                farr = data.m_Begin;
                break;
            case InjectType.end:
                farr = data.m_Ending;
                break;
            default:
                break;
        }
        farr.push(injectFunction);
        return function () {
            var index = farr.indexOf(injectFunction);
            if (index != -1) {
                farr.splice(index, 1);
            }
        };
    }
    function injectObject(obj, func, injectFunction) {
        var name = getFunctionName(obj, func);
        var beginName = getInjectFunctionArrayName(name, injectType);
        initInjectReplace(obj, name);
        var functionArr = initInjectFunctionArray(obj, beginName);
        functionArr.push(injectFunction);
        return function () {
            var index = functionArr.indexOf(injectFunction);
            if (index != -1)
                functionArr.splice(index, 1);
        };
    }
    return function inject() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === 2) {
            return injectAll.call.apply(injectAll, [this].concat(args));
        }
        else if (args.length === 3) {
            return injectObject.call.apply(injectObject, [this].concat(args));
        }
    };
}
exports.begin = getInject(InjectType.begin);
exports.end = getInject(InjectType.end);
function getInjectFunctionArrayName(name, type) {
    return type + name;
}
function initInjectFunctionArray(obj, funcName) {
    if (!obj.hasOwnProperty(funcName)) {
        obj[funcName] = [];
    }
    return obj[funcName];
}
function callFunctionArray(obj, name) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var methonList = obj[name];
    if (methonList) {
        methonList.forEach(function (f) {
            f.call.apply(f, [obj].concat(args));
        });
    }
}
function initInjectReplace(obj, funcName) {
    var key = "__aopinit__" + funcName;
    if (!obj.hasOwnProperty(key)) {
        obj[key] = true;
        var oldFunction_1 = obj[funcName];
        obj[funcName] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var call = function (type) {
                callFunctionArray.apply(void 0, [obj, getInjectFunctionArrayName(funcName, type)].concat(args));
            };
            call(InjectType.begin);
            var res = oldFunction_1.call.apply(oldFunction_1, [obj].concat(args));
            args.push(res);
            call(InjectType.end);
            return res;
        };
    }
}
function getFunctionName(obj, f) {
    for (var key in obj) {
        if (obj[key] == f) {
            return key;
        }
    }
}
//# sourceMappingURL=lib.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var THREE = __webpack_require__(0);
var GeUtils;
(function (GeUtils) {
    GeUtils.cZeroVec = new THREE.Vector3();
    GeUtils.cXAxis = new THREE.Vector3(1, 0, 0);
    GeUtils.cYAxis = new THREE.Vector3(0, 1, 0);
    GeUtils.cZAxis = new THREE.Vector3(0, 0, 1);
    function getLoocAtUpVec(dir) {
        if (dir.equals(GeUtils.cZeroVec)) {
            throw ("zero vector");
        }
        var norm = dir.clone().normalize();
        if (norm.equals(GeUtils.cZAxis)) {
            return new THREE.Vector3(0, 1, 0);
        }
        else if (norm.equals(GeUtils.cZAxis.clone().multiplyScalar(-1))) {
            return new THREE.Vector3(0, -1, 0);
        }
        else {
            var xv = new THREE.Vector3();
            xv.crossVectors(GeUtils.cZAxis, norm);
            var up = new THREE.Vector3();
            up.crossVectors(norm, xv);
            return up;
        }
    }
    GeUtils.getLoocAtUpVec = getLoocAtUpVec;
    function createLookAtMat4(dir) {
        var up = getLoocAtUpVec(dir);
        var mat = new THREE.Matrix4();
        mat.lookAt(GeUtils.cZeroVec, dir, up);
        return mat;
    }
    GeUtils.createLookAtMat4 = createLookAtMat4;
    function isParallelTo(v1, v2) {
        return v1.clone().cross(v2).lengthSq() < 1e-9;
    }
    GeUtils.isParallelTo = isParallelTo;
    function ptToString(v, fractionDigits) {
        if (fractionDigits === void 0) { fractionDigits = 3; }
        return v.toArray().map(function (o) {
            return o.toFixed(fractionDigits);
        }).join(",");
    }
    GeUtils.ptToString = ptToString;
    function midPoint(v1, v2) {
        return v1.clone().add(v2).multiplyScalar(0.5);
    }
    GeUtils.midPoint = midPoint;
    function GetBox(obj, updateMatrix) {
        if (updateMatrix)
            obj.updateMatrixWorld(false);
        if (obj.hasOwnProperty("geometry")) {
            var geom = obj["geometry"];
            geom.computeBoundingBox();
            return geom.boundingBox.applyMatrix4(obj.matrixWorld);
        }
        else if (obj.children.length > 0) {
            var box_1;
            obj.children.forEach(function (element) {
                var box2 = GetBox(element);
                if (box2) {
                    if (box_1) {
                        box_1.union(box2);
                    }
                    else
                        box_1 = box2;
                }
            });
            if (box_1)
                box_1.applyMatrix4(obj.matrixWorld);
            return box_1;
        }
        else
            return null;
    }
    GeUtils.GetBox = GetBox;
    function GetBoxArr(arr) {
        return arr.map(function (o) {
            return GetBox(o);
        }).filter(function (o) {
            return o;
        }).reduce(function (a, b) {
            return a.union(b);
        });
    }
    GeUtils.GetBoxArr = GetBoxArr;
})(GeUtils = exports.GeUtils || (exports.GeUtils = {}));


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//相机控制
var THREE = __webpack_require__(0);
var KeyEnum_1 = __webpack_require__(22);
//控制类型
var CameraControlsEnabled;
(function (CameraControlsEnabled) {
    CameraControlsEnabled[CameraControlsEnabled["Rotate"] = 1] = "Rotate";
    CameraControlsEnabled[CameraControlsEnabled["Zoom"] = 2] = "Zoom";
    CameraControlsEnabled[CameraControlsEnabled["Pan"] = 4] = "Pan";
})(CameraControlsEnabled || (CameraControlsEnabled = {}));
//相机控制状态
var CameraControlState;
(function (CameraControlState) {
    CameraControlState[CameraControlState["Null"] = 0] = "Null";
    CameraControlState[CameraControlState["Pan"] = 1] = "Pan";
    CameraControlState[CameraControlState["Rotate"] = 2] = "Rotate";
    CameraControlState[CameraControlState["Scale"] = 3] = "Scale";
})(CameraControlState || (CameraControlState = {}));
var CameraControls = /** @class */ (function () {
    function CameraControls(viewer, domElement, docWindow) {
        var _this = this;
        //起始点击
        this.m_StartChickPoint = new THREE.Vector3();
        this.m_EndChickPoint = new THREE.Vector3();
        this.m_DollyStart = new THREE.Vector2();
        this.m_DollyEnd = new THREE.Vector2();
        this.m_KeyDown = new Map();
        this.m_MouseDown = new Map();
        //状态
        this.m_State = CameraControlState.Null;
        /**
         * 窗体失去焦点时.
         *
         * @memberof CameraControls
         */
        this.onBlur = function () {
            _this.m_KeyDown.clear();
            _this.m_MouseDown.clear();
        };
        //触屏开始事件
        this.onTouchStart = function (event) {
            _this.m_Viewer.UpdateLockTarget();
            _this.m_StartChickPoint.set(event.touches[0].pageX, event.touches[0].pageY, 0);
            if (event.touches.length < 4) {
                if (event.touches.length == 2) {
                    var dx = event.touches[0].pageX - event.touches[1].pageX;
                    var dy = event.touches[0].pageY - event.touches[1].pageY;
                    var distance = Math.sqrt(dx * dx + dy * dy);
                    _this.m_DollyStart.set(0, distance);
                }
                var touchType = [CameraControlState.Rotate, CameraControlState.Scale, CameraControlState.Pan];
                _this.m_State = touchType[event.touches.length - 1];
            }
        };
        this.onTouchEnd = function (event) {
            _this.m_State = CameraControlState.Null;
        };
        this.onTouchMove = function (event) {
            event.preventDefault();
            event.stopPropagation();
            _this.m_EndChickPoint.set(event.touches[0].pageX, event.touches[0].pageY, 0);
            var vec = _this.m_EndChickPoint.clone().sub(_this.m_StartChickPoint);
            switch (_this.m_State) {
                case CameraControlState.Pan:
                    {
                        _this.m_Viewer.Pan(vec);
                        break;
                    }
                case CameraControlState.Scale:
                    {
                        var dx = event.touches[0].pageX - event.touches[1].pageX;
                        var dy = event.touches[0].pageY - event.touches[1].pageY;
                        var distance = Math.sqrt(dx * dx + dy * dy);
                        _this.m_DollyEnd.set(0, distance);
                        if (distance > _this.m_DollyStart.y) {
                            _this.m_Viewer.Zoom(0.95);
                        }
                        else {
                            _this.m_Viewer.Zoom(1.05);
                        }
                        _this.m_DollyStart.copy(_this.m_DollyEnd);
                        break;
                    }
                case CameraControlState.Rotate:
                    {
                        _this.m_Viewer.Rotate(vec.multiplyScalar(2));
                        break;
                    }
            }
            _this.m_StartChickPoint.copy(_this.m_EndChickPoint);
            _this.m_Viewer.m_bNeedUpdate = true;
        };
        //鼠标    
        this.onMouseDown = function (event) {
            event.preventDefault();
            var key = event.button;
            _this.m_MouseDown.set(key, true);
            _this.m_StartChickPoint.set(event.offsetX, event.offsetY, 0);
            switch (key) {
                case KeyEnum_1.MouseKey.Left:
                    {
                        break;
                    }
                case KeyEnum_1.MouseKey.Middle:
                    {
                        if (_this.m_KeyDown.get("Alt")) {
                            _this.m_State = CameraControlState.Rotate;
                            _this.m_Viewer.UpdateLockTarget();
                        }
                        else {
                            _this.m_State = CameraControlState.Pan;
                        }
                        break;
                    }
                case KeyEnum_1.MouseKey.Right:
                    {
                        break;
                    }
            }
        };
        this.onMouseUp = function (event) {
            event.preventDefault();
            _this.m_State = CameraControlState.Null;
            _this.m_MouseDown.set(event.button, false);
        };
        this.onMouseMove = function (event) {
            event.preventDefault();
            _this.m_EndChickPoint.set(event.offsetX, event.offsetY, 0);
            var changeVec = new THREE.Vector3();
            changeVec.subVectors(_this.m_EndChickPoint, _this.m_StartChickPoint);
            _this.m_StartChickPoint.copy(_this.m_EndChickPoint);
            if (_this.m_KeyDown.get("Alt") && _this.m_State == CameraControlState.Rotate) {
                _this.m_Viewer.Rotate(changeVec);
            }
            switch (_this.m_State) {
                case CameraControlState.Pan:
                    {
                        _this.m_Viewer.Pan(changeVec);
                        break;
                    }
                case CameraControlState.Rotate:
                    {
                        break;
                    }
                case CameraControlState.Scale:
                    {
                        break;
                    }
            }
        };
        /**
         * 鼠标滚轮事件
         *
         * @memberof CameraControls
         */
        this.onMouseWheel = function (event) {
            event.preventDefault();
            event.stopPropagation();
            var pt = new THREE.Vector3();
            pt.set(event.offsetX, event.offsetY, 0);
            _this.m_Viewer.ScreenToWorld(pt);
            if (event.deltaY < 0) {
                _this.m_Viewer.Zoom(0.6, pt);
            }
            else if (event.deltaY > 0) {
                _this.m_Viewer.Zoom(1.4, pt);
            }
        };
        //按键
        this.onKeyDown = function (event) {
            _this.m_KeyDown.set(event.key, true);
        };
        this.onKeyUp = function (event) {
            _this.m_KeyDown.set(event.key, false);
        };
        this.m_Viewer = viewer;
        this.m_domElement = domElement;
        this.RegisterEvent();
    }
    CameraControls.prototype.RegisterEvent = function () {
        if (this.m_domElement) {
            this.m_domElement.addEventListener("mousedown", this.onMouseDown, false);
            this.m_domElement.addEventListener("mousemove", this.onMouseMove, false);
            this.m_domElement.addEventListener("mouseup", this.onMouseUp, false);
            window.addEventListener("keydown", this.onKeyDown, false);
            window.addEventListener("keyup", this.onKeyUp, false);
            this.m_domElement.addEventListener('wheel', this.onMouseWheel, false);
            this.m_domElement.addEventListener('touchstart', this.onTouchStart, false);
            this.m_domElement.addEventListener('touchend', this.onTouchEnd, false);
            this.m_domElement.addEventListener('touchmove', this.onTouchMove, false);
            window.addEventListener("blur", this.onBlur, false);
        }
    };
    return CameraControls;
}());
exports.CameraControls = CameraControls;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//鼠标类型
var MouseKey;
(function (MouseKey) {
    MouseKey[MouseKey["Left"] = 0] = "Left";
    MouseKey[MouseKey["Middle"] = 1] = "Middle";
    MouseKey[MouseKey["Right"] = 2] = "Right";
})(MouseKey = exports.MouseKey || (exports.MouseKey = {}));
var KeyBoard;
(function (KeyBoard) {
    // 数字
    KeyBoard[KeyBoard["Digit1"] = 49] = "Digit1";
    KeyBoard[KeyBoard["Digit2"] = 50] = "Digit2";
    KeyBoard[KeyBoard["Digit3"] = 51] = "Digit3";
    KeyBoard[KeyBoard["Digit4"] = 52] = "Digit4";
    KeyBoard[KeyBoard["Digit5"] = 53] = "Digit5";
    KeyBoard[KeyBoard["Digit6"] = 54] = "Digit6";
    KeyBoard[KeyBoard["Digit7"] = 55] = "Digit7";
    KeyBoard[KeyBoard["Digit8"] = 56] = "Digit8";
    KeyBoard[KeyBoard["Digit9"] = 57] = "Digit9";
    KeyBoard[KeyBoard["Digit0"] = 58] = "Digit0";
    // 字母
    KeyBoard[KeyBoard["KeyA"] = 65] = "KeyA";
    KeyBoard[KeyBoard["KeyB"] = 66] = "KeyB";
    KeyBoard[KeyBoard["KeyC"] = 67] = "KeyC";
    KeyBoard[KeyBoard["KeyD"] = 68] = "KeyD";
    KeyBoard[KeyBoard["KeyE"] = 69] = "KeyE";
    KeyBoard[KeyBoard["KeyF"] = 70] = "KeyF";
    KeyBoard[KeyBoard["KeyG"] = 71] = "KeyG";
    KeyBoard[KeyBoard["KeyH"] = 72] = "KeyH";
    KeyBoard[KeyBoard["KeyI"] = 73] = "KeyI";
    KeyBoard[KeyBoard["KeyJ"] = 74] = "KeyJ";
    KeyBoard[KeyBoard["KeyK"] = 75] = "KeyK";
    KeyBoard[KeyBoard["KeyL"] = 76] = "KeyL";
    KeyBoard[KeyBoard["KeyM"] = 77] = "KeyM";
    KeyBoard[KeyBoard["KeyN"] = 78] = "KeyN";
    KeyBoard[KeyBoard["KeyO"] = 79] = "KeyO";
    KeyBoard[KeyBoard["KeyP"] = 80] = "KeyP";
    KeyBoard[KeyBoard["KeyQ"] = 81] = "KeyQ";
    KeyBoard[KeyBoard["KeyR"] = 82] = "KeyR";
    KeyBoard[KeyBoard["KeyS"] = 83] = "KeyS";
    KeyBoard[KeyBoard["KeyT"] = 84] = "KeyT";
    KeyBoard[KeyBoard["KeyU"] = 85] = "KeyU";
    KeyBoard[KeyBoard["KeyV"] = 86] = "KeyV";
    KeyBoard[KeyBoard["KeyW"] = 87] = "KeyW";
    KeyBoard[KeyBoard["KeyX"] = 88] = "KeyX";
    KeyBoard[KeyBoard["KeyY"] = 89] = "KeyY";
    KeyBoard[KeyBoard["KeyZ"] = 0] = "KeyZ";
    // 符号
    /**
     * 逗号
     */
    KeyBoard[KeyBoard["Comma"] = 188] = "Comma";
    /**
     * 句号
     */
    KeyBoard[KeyBoard["Period"] = 190] = "Period";
    /**
     * 分号
     */
    KeyBoard[KeyBoard["Semicolon"] = 186] = "Semicolon";
    /**
     * 引号
     */
    KeyBoard[KeyBoard["Quote"] = 222] = "Quote";
    /**
     * 左括号
     */
    KeyBoard[KeyBoard["BracketLeft"] = 219] = "BracketLeft";
    /**
     * 右括号
     */
    KeyBoard[KeyBoard["BracketRight"] = 220] = "BracketRight";
    /**
     * 反引号
     */
    KeyBoard[KeyBoard["Backquote"] = 192] = "Backquote";
    /**
     * 反斜杠
     */
    KeyBoard[KeyBoard["Backslash"] = 220] = "Backslash";
    /**
     * 减号
     */
    KeyBoard[KeyBoard["Minus"] = 189] = "Minus";
    /**
     * 等号
     */
    KeyBoard[KeyBoard["Equal"] = 187] = "Equal";
    KeyBoard[KeyBoard["IntlRo"] = 193] = "IntlRo";
    KeyBoard[KeyBoard["IntlYen"] = 255] = "IntlYen";
    // 功能键
    KeyBoard[KeyBoard["Alt"] = 18] = "Alt";
    /**
     * 大写锁定
     */
    KeyBoard[KeyBoard["CapsLock"] = 20] = "CapsLock";
    KeyBoard[KeyBoard["Control"] = 17] = "Control";
    /**
     * win左键
     */
    KeyBoard[KeyBoard["OSLeft"] = 91] = "OSLeft";
    /**
     * win右键
     */
    KeyBoard[KeyBoard["OSRight"] = 92] = "OSRight";
    KeyBoard[KeyBoard["Shift"] = 16] = "Shift";
    KeyBoard[KeyBoard["ContextMenu"] = 93] = "ContextMenu";
    KeyBoard[KeyBoard["Enter"] = 13] = "Enter";
    KeyBoard[KeyBoard["Space"] = 32] = "Space";
    KeyBoard[KeyBoard["Tab"] = 9] = "Tab";
    KeyBoard[KeyBoard["Delete"] = 46] = "Delete";
    KeyBoard[KeyBoard["End"] = 35] = "End";
    KeyBoard[KeyBoard["Home"] = 36] = "Home";
    KeyBoard[KeyBoard["Insert"] = 45] = "Insert";
    KeyBoard[KeyBoard["PageDown"] = 34] = "PageDown";
    KeyBoard[KeyBoard["PageUp"] = 33] = "PageUp";
    KeyBoard[KeyBoard["ArrowDown"] = 40] = "ArrowDown";
    KeyBoard[KeyBoard["ArrowLeft"] = 37] = "ArrowLeft";
    KeyBoard[KeyBoard["ArrowRight"] = 39] = "ArrowRight";
    KeyBoard[KeyBoard["ArrowUp"] = 38] = "ArrowUp";
    KeyBoard[KeyBoard["Escape"] = 27] = "Escape";
    KeyBoard[KeyBoard["PrintScreen"] = 44] = "PrintScreen";
    KeyBoard[KeyBoard["ScrollLock"] = 145] = "ScrollLock";
    KeyBoard[KeyBoard["Pause"] = 19] = "Pause";
    // F数字
    KeyBoard[KeyBoard["F1"] = 112] = "F1";
    KeyBoard[KeyBoard["F2"] = 113] = "F2";
    KeyBoard[KeyBoard["F3"] = 114] = "F3";
    KeyBoard[KeyBoard["F5"] = 116] = "F5";
    KeyBoard[KeyBoard["F6"] = 117] = "F6";
    KeyBoard[KeyBoard["F7"] = 118] = "F7";
    KeyBoard[KeyBoard["F8"] = 119] = "F8";
    KeyBoard[KeyBoard["F9"] = 120] = "F9";
    KeyBoard[KeyBoard["F10"] = 121] = "F10";
    KeyBoard[KeyBoard["F11"] = 122] = "F11";
    KeyBoard[KeyBoard["F12"] = 123] = "F12";
    //数字键盘
    KeyBoard[KeyBoard["NumLock"] = 114] = "NumLock";
    KeyBoard[KeyBoard["Numpad0"] = 96] = "Numpad0";
    KeyBoard[KeyBoard["Numpad1"] = 97] = "Numpad1";
    KeyBoard[KeyBoard["Numpad2"] = 98] = "Numpad2";
    KeyBoard[KeyBoard["Numpad3"] = 99] = "Numpad3";
    KeyBoard[KeyBoard["Numpad4"] = 100] = "Numpad4";
    KeyBoard[KeyBoard["Numpad5"] = 101] = "Numpad5";
    KeyBoard[KeyBoard["Numpad6"] = 102] = "Numpad6";
    KeyBoard[KeyBoard["Numpad7"] = 103] = "Numpad7";
    KeyBoard[KeyBoard["Numpad8"] = 104] = "Numpad8";
    KeyBoard[KeyBoard["Numpad9"] = 105] = "Numpad9";
    KeyBoard[KeyBoard["NumpadAdd"] = 107] = "NumpadAdd";
    KeyBoard[KeyBoard["NumpadDivide"] = 111] = "NumpadDivide";
    KeyBoard[KeyBoard["NumpadEqual"] = 12] = "NumpadEqual";
    KeyBoard[KeyBoard["NumpadMultiply"] = 106] = "NumpadMultiply";
    KeyBoard[KeyBoard["NumpadSubtract"] = 109] = "NumpadSubtract";
})(KeyBoard = exports.KeyBoard || (exports.KeyBoard = {}));


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//最小限度的使用这个模块. 所以提供了一个导出的头文件.
var THREE = __webpack_require__(0);
exports.FBXLoader = __webpack_require__(24);
window["threeZlib"] = __webpack_require__(25);
//加载事件
var onProgress = function (xhr) {
    if (xhr.lengthComputable) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        console.log(Math.round(percentComplete) + '% downloaded');
    }
};
//错误事件
var onError = function (xhr) {
    console.error(xhr);
};
//Loader FBX
function loadFBX(fileName) {
    var manager = new THREE.LoadingManager();
    var loader = new THREE.FBXLoader(manager);
    return new Promise(function (resolve, reject) {
        loader.load(fileName, function (object) {
            resolve({
                State: true,
                object: object
            });
        }, onProgress, function (xhr) {
            console.log('xhr: ', xhr);
            resolve({
                State: false
            });
        });
    });
}
exports.loadFBX = loadFBX;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(THREE) {/**
 * @author Kyle-Larson https://github.com/Kyle-Larson
 * @author Takahiro https://github.com/takahirox
 *
 * Loader loads FBX file and generates Group representing FBX scene.
 * Requires FBX file to be >= 7.0 and in ASCII or to be any version in Binary format.
 *
 * Supports:
 * 	Mesh Generation (Positional Data)
 * 	Normal Data (Per Vertex Drawing Instance)
 *  UV Data (Per Vertex Drawing Instance)
 *  Skinning
 *  Animation
 * 	- Separated Animations based on stacks.
 * 	- Skeletal & Non-Skeletal Animations
 *  NURBS (Open, Closed and Periodic forms)
 *
 * Needs Support:
 * 	Indexed Buffers
 * 	PreRotation support.
 */
( function () {

	/**
	 * Generates a loader for loading FBX files from URL and parsing into
	 * a THREE.Group.
	 * @param {THREE.LoadingManager} manager - Loading Manager for loader to use.
	 */
	THREE.FBXLoader = function ( manager ) {

		this.manager = ( manager !== undefined ) ? manager : THREE.DefaultLoadingManager;

	};

	Object.assign( THREE.FBXLoader.prototype, {

		/**
		 * Loads an ASCII/Binary FBX file from URL and parses into a THREE.Group.
		 * THREE.Group will have an animations property of AnimationClips
		 * of the different animations exported with the FBX.
		 * @param {string} url - URL of the FBX file.
		 * @param {function(THREE.Group):void} onLoad - Callback for when FBX file is loaded and parsed.
		 * @param {function(ProgressEvent):void} onProgress - Callback fired periodically when file is being retrieved from server.
		 * @param {function(Event):void} onError - Callback fired when error occurs (Currently only with retrieving file, not with parsing errors).
		 */
		load: function ( url, onLoad, onProgress, onError ) {

			var self = this;

			var resourceDirectory = THREE.Loader.prototype.extractUrlBase( url );

			var loader = new THREE.FileLoader( this.manager );
			loader.setResponseType( 'arraybuffer' );
			loader.load( url, function ( buffer ) {

				try {
					
					var scene = self.parse( buffer, resourceDirectory );

					onLoad( scene );

				} catch ( error ) {

					window.setTimeout( function () {

						if ( onError ) onError( error );

						self.manager.itemError( url );

					}, 0 );

				}

			}, onProgress, onError );

		},

		/**
		 * Parses an ASCII/Binary FBX file and returns a THREE.Group.
		 * THREE.Group will have an animations property of AnimationClips
		 * of the different animations within the FBX file.
		 * @param {ArrayBuffer} FBXBuffer - Contents of FBX file to parse.
		 * @param {string} resourceDirectory - Directory to load external assets (e.g. textures ) from.
		 * @returns {THREE.Group}
		 */
		parse: function ( FBXBuffer, resourceDirectory ) {

			var FBXTree;

			if ( isFbxFormatBinary( FBXBuffer ) ) {

				FBXTree = new BinaryParser().parse( FBXBuffer );

			} else {

				var FBXText = convertArrayBufferToString( FBXBuffer );

				if ( ! isFbxFormatASCII( FBXText ) ) {

					throw new Error( 'THREE.FBXLoader: Unknown format.' );

				}

				if ( getFbxVersion( FBXText ) < 7000 ) {

					throw new Error( 'THREE.FBXLoader: FBX version not supported, FileVersion: ' + getFbxVersion( FBXText ) );

				}

				FBXTree = new TextParser().parse( FBXText );

			}

			// console.log( FBXTree );

			var connections = parseConnections( FBXTree );
			var images = parseImages( FBXTree );
			var textures = parseTextures( FBXTree, new THREE.TextureLoader( this.manager ).setPath( resourceDirectory ), images, connections );
			var materials = parseMaterials( FBXTree, textures, connections );
			var deformers = parseDeformers( FBXTree, connections );
			var geometryMap = parseGeometries( FBXTree, connections, deformers );
			var sceneGraph = parseScene( FBXTree, connections, deformers, geometryMap, materials );

			return sceneGraph;

		}

	} );

	/**
	 * Parses map of relationships between objects.
	 * @param {{Connections: { properties: { connections: [number, number, string][]}}}} FBXTree
	 * @returns {Map<number, {parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>}
	 */
	function parseConnections( FBXTree ) {

		/**
		 * @type {Map<number, { parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>}
		 */
		var connectionMap = new Map();

		if ( 'Connections' in FBXTree ) {

			/**
			 * @type {[number, number, string][]}
			 */
			var connectionArray = FBXTree.Connections.properties.connections;
			for ( var connectionArrayIndex = 0, connectionArrayLength = connectionArray.length; connectionArrayIndex < connectionArrayLength; ++ connectionArrayIndex ) {

				var connection = connectionArray[ connectionArrayIndex ];

				if ( ! connectionMap.has( connection[ 0 ] ) ) {

					connectionMap.set( connection[ 0 ], {
						parents: [],
						children: []
					} );

				}

				var parentRelationship = { ID: connection[ 1 ], relationship: connection[ 2 ] };
				connectionMap.get( connection[ 0 ] ).parents.push( parentRelationship );

				if ( ! connectionMap.has( connection[ 1 ] ) ) {

					connectionMap.set( connection[ 1 ], {
						parents: [],
						children: []
					} );

				}

				var childRelationship = { ID: connection[ 0 ], relationship: connection[ 2 ] };
				connectionMap.get( connection[ 1 ] ).children.push( childRelationship );

			}

		}

		return connectionMap;

	}

	/**
	 * Parses map of images referenced in FBXTree.
	 * @param {{Objects: {subNodes: {Texture: Object.<string, FBXTextureNode>}}}} FBXTree
	 * @returns {Map<number, string(image blob/data URL)>}
	 */
	function parseImages( FBXTree ) {

		/**
		 * @type {Map<number, string(image blob/data URL)>}
		 */
		var imageMap = new Map();

		if ( 'Video' in FBXTree.Objects.subNodes ) {

			var videoNodes = FBXTree.Objects.subNodes.Video;

			for ( var nodeID in videoNodes ) {

				var videoNode = videoNodes[ nodeID ];

				// raw image data is in videoNode.properties.Content
				if ( 'Content' in videoNode.properties ) {

					var image = parseImage( videoNodes[ nodeID ] );
					imageMap.set( parseInt( nodeID ), image );

				}

			}

		}

		return imageMap;

	}

	/**
	 * @param {videoNode} videoNode - Node to get texture image information from.
	 * @returns {string} - image blob/data URL
	 */
	function parseImage( videoNode ) {

		var content = videoNode.properties.Content;
		var fileName = videoNode.properties.RelativeFilename || videoNode.properties.Filename;
		var extension = fileName.slice( fileName.lastIndexOf( '.' ) + 1 ).toLowerCase();

		var type;

		switch ( extension ) {

			case 'bmp':

				type = 'image/bmp';
				break;

			case 'jpg':

				type = 'image/jpeg';
				break;

			case 'png':

				type = 'image/png';
				break;

			case 'tif':

				type = 'image/tiff';
				break;

			default:

				console.warn( 'FBXLoader: No support image type ' + extension );
				return;

		}

		if ( typeof content === 'string' ) {

			return 'data:' + type + ';base64,' + content;

		} else {

			var array = new Uint8Array( content );
			return window.URL.createObjectURL( new Blob( [ array ], { type: type } ) );

		}

	}

	/**
	 * Parses map of textures referenced in FBXTree.
	 * @param {{Objects: {subNodes: {Texture: Object.<string, FBXTextureNode>}}}} FBXTree
	 * @param {THREE.TextureLoader} loader
	 * @param {Map<number, string(image blob/data URL)>} imageMap
	 * @param {Map<number, {parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>} connections
	 * @returns {Map<number, THREE.Texture>}
	 */
	function parseTextures( FBXTree, loader, imageMap, connections ) {

		/**
		 * @type {Map<number, THREE.Texture>}
		 */
		var textureMap = new Map();

		if ( 'Texture' in FBXTree.Objects.subNodes ) {

			var textureNodes = FBXTree.Objects.subNodes.Texture;
			for ( var nodeID in textureNodes ) {

				var texture = parseTexture( textureNodes[ nodeID ], loader, imageMap, connections );
				textureMap.set( parseInt( nodeID ), texture );

			}

		}

		return textureMap;

	}

	/**
	 * @param {textureNode} textureNode - Node to get texture information from.
	 * @param {THREE.TextureLoader} loader
	 * @param {Map<number, string(image blob/data URL)>} imageMap
	 * @param {Map<number, {parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>} connections
	 * @returns {THREE.Texture}
	 */
	function parseTexture( textureNode, loader, imageMap, connections ) {

		var FBX_ID = textureNode.id;

		var name = textureNode.name;

		var fileName;

		var filePath = textureNode.properties.FileName;
		var relativeFilePath = textureNode.properties.RelativeFilename;

		var children = connections.get( FBX_ID ).children;

		if ( children !== undefined && children.length > 0 && imageMap.has( children[ 0 ].ID ) ) {

			fileName = imageMap.get( children[ 0 ].ID );

		} else if ( relativeFilePath !== undefined && relativeFilePath[ 0 ] !== '/' &&
				relativeFilePath.match( /^[a-zA-Z]:/ ) === null ) {

			// use textureNode.properties.RelativeFilename
			// if it exists and it doesn't seem an absolute path

			fileName = relativeFilePath;

		} else {

			var split = filePath.split( /[\\\/]/ );

			if ( split.length > 0 ) {

				fileName = split[ split.length - 1 ];

			} else {

				fileName = filePath;

			}

		}

		var currentPath = loader.path;

		if ( fileName.indexOf( 'blob:' ) === 0 || fileName.indexOf( 'data:' ) === 0 ) {

			loader.setPath( undefined );

		}

		/**
		 * @type {THREE.Texture}
		 */
		var texture = loader.load( fileName );
		texture.name = name;
		texture.FBX_ID = FBX_ID;

		var wrapModeU = textureNode.properties.WrapModeU;
		var wrapModeV = textureNode.properties.WrapModeV;

		var valueU = wrapModeU !== undefined ? wrapModeU.value : 0;
		var valueV = wrapModeV !== undefined ? wrapModeV.value : 0;

		// http://download.autodesk.com/us/fbx/SDKdocs/FBX_SDK_Help/files/fbxsdkref/class_k_fbx_texture.html#889640e63e2e681259ea81061b85143a
		// 0: repeat(default), 1: clamp

		texture.wrapS = valueU === 0 ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
		texture.wrapT = valueV === 0 ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;

		loader.setPath( currentPath );

		return texture;

	}

	/**
	 * Parses map of Material information.
	 * @param {{Objects: {subNodes: {Material: Object.<number, FBXMaterialNode>}}}} FBXTree
	 * @param {Map<number, THREE.Texture>} textureMap
	 * @param {Map<number, {parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>} connections
	 * @returns {Map<number, THREE.Material>}
	 */
	function parseMaterials( FBXTree, textureMap, connections ) {

		var materialMap = new Map();

		if ( 'Material' in FBXTree.Objects.subNodes ) {

			var materialNodes = FBXTree.Objects.subNodes.Material;
			for ( var nodeID in materialNodes ) {

				var material = parseMaterial( materialNodes[ nodeID ], textureMap, connections );
				materialMap.set( parseInt( nodeID ), material );

			}

		}

		return materialMap;

	}

	/**
	 * Takes information from Material node and returns a generated THREE.Material
	 * @param {FBXMaterialNode} materialNode
	 * @param {Map<number, THREE.Texture>} textureMap
	 * @param {Map<number, {parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>} connections
	 * @returns {THREE.Material}
	 */
	function parseMaterial( materialNode, textureMap, connections ) {

		var FBX_ID = materialNode.id;
		var name = materialNode.attrName;
		var type = materialNode.properties.ShadingModel;

		//Case where FBXs wrap shading model in property object.
		if ( typeof type === 'object' ) {

			type = type.value;

		}

		var children = connections.get( FBX_ID ).children;

		var parameters = parseParameters( materialNode.properties, textureMap, children );

		var material;

		switch ( type.toLowerCase() ) {

			case 'phong':
				material = new THREE.MeshPhongMaterial();
				break;
			case 'lambert':
				material = new THREE.MeshLambertMaterial();
				break;
			default:
				console.warn( 'THREE.FBXLoader: No implementation given for material type %s in FBXLoader.js. Defaulting to basic material.', type );
				material = new THREE.MeshBasicMaterial( { color: 0x3300ff } );
				break;

		}

		material.setValues( parameters );
		material.name = name;

		return material;

	}

	/**
	 * @typedef {{Diffuse: FBXVector3, Specular: FBXVector3, Shininess: FBXValue, Emissive: FBXVector3, EmissiveFactor: FBXValue, Opacity: FBXValue}} FBXMaterialProperties
	 */
	/**
	 * @typedef {{color: THREE.Color=, specular: THREE.Color=, shininess: number=, emissive: THREE.Color=, emissiveIntensity: number=, opacity: number=, transparent: boolean=, map: THREE.Texture=}} THREEMaterialParameterPack
	 */
	/**
	 * @param {FBXMaterialProperties} properties
	 * @param {Map<number, THREE.Texture>} textureMap
	 * @param {{ID: number, relationship: string}[]} childrenRelationships
	 * @returns {THREEMaterialParameterPack}
	 */
	function parseParameters( properties, textureMap, childrenRelationships ) {

		var parameters = {};

		if ( properties.Diffuse ) {

			parameters.color = parseColor( properties.Diffuse );

		}
		if ( properties.Specular ) {

			parameters.specular = parseColor( properties.Specular );

		}
		if ( properties.Shininess ) {

			parameters.shininess = properties.Shininess.value;

		}
		if ( properties.Emissive ) {

			parameters.emissive = parseColor( properties.Emissive );

		}
		if ( properties.EmissiveFactor ) {

			parameters.emissiveIntensity = properties.EmissiveFactor.value;

		}
		if ( properties.Opacity ) {

			parameters.opacity = properties.Opacity.value;

		}
		if ( parameters.opacity < 1.0 ) {

			parameters.transparent = true;

		}

		for ( var childrenRelationshipsIndex = 0, childrenRelationshipsLength = childrenRelationships.length; childrenRelationshipsIndex < childrenRelationshipsLength; ++ childrenRelationshipsIndex ) {

			var relationship = childrenRelationships[ childrenRelationshipsIndex ];

			var type = relationship.relationship;

			switch ( type ) {

				case 'DiffuseColor':
				case ' "DiffuseColor':
					parameters.map = textureMap.get( relationship.ID );
					break;

				case 'Bump':
				case ' "Bump':
					parameters.bumpMap = textureMap.get( relationship.ID );
					break;

				case 'NormalMap':
				case ' "NormalMap':
					parameters.normalMap = textureMap.get( relationship.ID );
					break;

				case 'AmbientColor':
				case 'EmissiveColor':
				case ' "AmbientColor':
				case ' "EmissiveColor':
				default:
					console.warn( 'THREE.FBXLoader: Unknown texture application of type %s, skipping texture.', type );
					break;

			}

		}

		return parameters;

	}

	/**
	 * Generates map of Skeleton-like objects for use later when generating and binding skeletons.
	 * @param {{Objects: {subNodes: {Deformer: Object.<number, FBXSubDeformerNode>}}}} FBXTree
	 * @param {Map<number, {parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>} connections
	 * @returns {Map<number, {map: Map<number, {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}>, array: {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}[], skeleton: THREE.Skeleton|null}>}
	 */
	function parseDeformers( FBXTree, connections ) {

		var deformers = {};

		if ( 'Deformer' in FBXTree.Objects.subNodes ) {

			var DeformerNodes = FBXTree.Objects.subNodes.Deformer;

			for ( var nodeID in DeformerNodes ) {

				var deformerNode = DeformerNodes[ nodeID ];

				if ( deformerNode.attrType === 'Skin' ) {

					var conns = connections.get( parseInt( nodeID ) );
					var skeleton = parseSkeleton( conns, DeformerNodes );
					skeleton.FBX_ID = parseInt( nodeID );

					deformers[ nodeID ] = skeleton;

				}

			}

		}

		return deformers;

	}

	/**
	 * Generates a "Skeleton Representation" of FBX nodes based on an FBX Skin Deformer's connections and an object containing SubDeformer nodes.
	 * @param {{parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}} connections
	 * @param {Object.<number, FBXSubDeformerNode>} DeformerNodes
	 * @returns {{map: Map<number, {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}>, array: {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}[], skeleton: THREE.Skeleton|null}}
	 */
	function parseSkeleton( connections, DeformerNodes ) {

		var subDeformers = {};
		var children = connections.children;

		for ( var i = 0, l = children.length; i < l; ++ i ) {

			var child = children[ i ];

			var subDeformerNode = DeformerNodes[ child.ID ];

			var subDeformer = {
				FBX_ID: child.ID,
				index: i,
				indices: [],
				weights: [],
				transform: parseMatrixArray( subDeformerNode.subNodes.Transform.properties.a ),
				transformLink: parseMatrixArray( subDeformerNode.subNodes.TransformLink.properties.a ),
				linkMode: subDeformerNode.properties.Mode
			};

			if ( 'Indexes' in subDeformerNode.subNodes ) {

				subDeformer.indices = parseIntArray( subDeformerNode.subNodes.Indexes.properties.a );
				subDeformer.weights = parseFloatArray( subDeformerNode.subNodes.Weights.properties.a );

			}

			subDeformers[ child.ID ] = subDeformer;

		}

		return {
			map: subDeformers,
			bones: []
		};

	}

	/**
	 * Generates Buffer geometries from geometry information in FBXTree, and generates map of THREE.BufferGeometries
	 * @param {{Objects: {subNodes: {Geometry: Object.<number, FBXGeometryNode}}}} FBXTree
	 * @param {Map<number, {parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>} connections
	 * @param {Map<number, {map: Map<number, {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}>, array: {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}[], skeleton: THREE.Skeleton|null}>} deformers
	 * @returns {Map<number, THREE.BufferGeometry>}
	 */
	function parseGeometries( FBXTree, connections, deformers ) {

		var geometryMap = new Map();

		if ( 'Geometry' in FBXTree.Objects.subNodes ) {

			var geometryNodes = FBXTree.Objects.subNodes.Geometry;

			for ( var nodeID in geometryNodes ) {

				var relationships = connections.get( parseInt( nodeID ) );
				var geo = parseGeometry( geometryNodes[ nodeID ], relationships, deformers );
				geometryMap.set( parseInt( nodeID ), geo );

			}

		}

		return geometryMap;

	}

	/**
	 * Generates BufferGeometry from FBXGeometryNode.
	 * @param {FBXGeometryNode} geometryNode
	 * @param {{parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}} relationships
	 * @param {Map<number, {map: Map<number, {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}>, array: {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}[]}>} deformers
	 * @returns {THREE.BufferGeometry}
	 */
	function parseGeometry( geometryNode, relationships, deformers ) {

		switch ( geometryNode.attrType ) {

			case 'Mesh':
				return parseMeshGeometry( geometryNode, relationships, deformers );
				break;

			case 'NurbsCurve':
				return parseNurbsGeometry( geometryNode );
				break;

		}

	}

	/**
	 * Specialty function for parsing Mesh based Geometry Nodes.
	 * @param {FBXGeometryNode} geometryNode
	 * @param {{parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}} relationships - Object representing relationships between specific geometry node and other nodes.
	 * @param {Map<number, {map: Map<number, {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}>, array: {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}[]}>} deformers - Map object of deformers and subDeformers by ID.
	 * @returns {THREE.BufferGeometry}
	 */
	function parseMeshGeometry( geometryNode, relationships, deformers ) {

		for ( var i = 0; i < relationships.children.length; ++ i ) {

			var deformer = deformers[ relationships.children[ i ].ID ];
			if ( deformer !== undefined ) break;

		}

		return genGeometry( geometryNode, deformer );

	}

	/**
	 * @param {{map: Map<number, {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}>, array: {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}[]}} deformer - Skeleton representation for geometry instance.
	 * @returns {THREE.BufferGeometry}
	 */
	function genGeometry( geometryNode, deformer ) {

		var geometry = new Geometry();

		var subNodes = geometryNode.subNodes;

		// First, each index is going to be its own vertex.

		var vertexBuffer = parseFloatArray( subNodes.Vertices.properties.a );
		var indexBuffer = parseIntArray( subNodes.PolygonVertexIndex.properties.a );

		if ( subNodes.LayerElementNormal ) {

			var normalInfo = getNormals( subNodes.LayerElementNormal[ 0 ] );

		}

		if ( subNodes.LayerElementUV ) {

			var uvInfo = getUVs( subNodes.LayerElementUV[ 0 ] );

		}

		if ( subNodes.LayerElementColor ) {

			var colorInfo = getColors( subNodes.LayerElementColor[ 0 ] );

		}

		if ( subNodes.LayerElementMaterial ) {

			var materialInfo = getMaterials( subNodes.LayerElementMaterial[ 0 ] );

		}

		var weightTable = {};

		if ( deformer ) {

			var subDeformers = deformer.map;

			for ( var key in subDeformers ) {

				var subDeformer = subDeformers[ key ];
				var indices = subDeformer.indices;

				for ( var j = 0; j < indices.length; j ++ ) {

					var index = indices[ j ];
					var weight = subDeformer.weights[ j ];

					if ( weightTable[ index ] === undefined ) weightTable[ index ] = [];

					weightTable[ index ].push( {
						id: subDeformer.index,
						weight: weight
					} );

				}

			}

		}

		var faceVertexBuffer = [];
		var polygonIndex = 0;
		var displayedWeightsWarning = false;

		for ( var polygonVertexIndex = 0; polygonVertexIndex < indexBuffer.length; polygonVertexIndex ++ ) {

			var vertexIndex = indexBuffer[ polygonVertexIndex ];

			var endOfFace = false;

			if ( vertexIndex < 0 ) {

				vertexIndex = vertexIndex ^ - 1;
				indexBuffer[ polygonVertexIndex ] = vertexIndex;
				endOfFace = true;

			}

			var vertex = new Vertex();
			var weightIndices = [];
			var weights = [];

			vertex.position.fromArray( vertexBuffer, vertexIndex * 3 );

			if ( deformer ) {

				if ( weightTable[ vertexIndex ] !== undefined ) {

					var array = weightTable[ vertexIndex ];

					for ( var j = 0, jl = array.length; j < jl; j ++ ) {

						weights.push( array[ j ].weight );
						weightIndices.push( array[ j ].id );

					}

				}

				if ( weights.length > 4 ) {

					if ( ! displayedWeightsWarning ) {

						console.warn( 'THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights.' );
						displayedWeightsWarning = true;

					}

					var WIndex = [ 0, 0, 0, 0 ];
					var Weight = [ 0, 0, 0, 0 ];

					weights.forEach( function ( weight, weightIndex ) {

						var currentWeight = weight;
						var currentIndex = weightIndices[ weightIndex ];

						Weight.forEach( function ( comparedWeight, comparedWeightIndex, comparedWeightArray ) {

							if ( currentWeight > comparedWeight ) {

								comparedWeightArray[ comparedWeightIndex ] = currentWeight;
								currentWeight = comparedWeight;

								var tmp = WIndex[ comparedWeightIndex ];
								WIndex[ comparedWeightIndex ] = currentIndex;
								currentIndex = tmp;

							}

						} );

					} );

					weightIndices = WIndex;
					weights = Weight;

				}

				for ( var i = weights.length; i < 4; ++ i ) {

					weights[ i ] = 0;
					weightIndices[ i ] = 0;

				}

				vertex.skinWeights.fromArray( weights );
				vertex.skinIndices.fromArray( weightIndices );

			}

			if ( normalInfo ) {

				vertex.normal.fromArray( getData( polygonVertexIndex, polygonIndex, vertexIndex, normalInfo ) );

			}

			if ( uvInfo ) {

				vertex.uv.fromArray( getData( polygonVertexIndex, polygonIndex, vertexIndex, uvInfo ) );

			}

			if ( colorInfo ) {

				vertex.color.fromArray( getData( polygonVertexIndex, polygonIndex, vertexIndex, colorInfo ) );

			}

			faceVertexBuffer.push( vertex );

			if ( endOfFace ) {

				var face = new Face();
				face.genTrianglesFromVertices( faceVertexBuffer );

				if ( materialInfo !== undefined ) {

					var materials = getData( polygonVertexIndex, polygonIndex, vertexIndex, materialInfo );
					face.materialIndex = materials[ 0 ];

				} else {

					// Seems like some models don't have materialInfo(subNodes.LayerElementMaterial).
					// Set 0 in such a case.
					face.materialIndex = 0;

				}

				geometry.faces.push( face );
				faceVertexBuffer = [];
				polygonIndex ++;

				endOfFace = false;

			}

		}

		/**
		 * @type {{vertexBuffer: number[], normalBuffer: number[], uvBuffer: number[], skinIndexBuffer: number[], skinWeightBuffer: number[], materialIndexBuffer: number[]}}
		 */
		var bufferInfo = geometry.flattenToBuffers();

		var geo = new THREE.BufferGeometry();
		geo.name = geometryNode.name;
		geo.addAttribute( 'position', new THREE.Float32BufferAttribute( bufferInfo.vertexBuffer, 3 ) );

		if ( bufferInfo.normalBuffer.length > 0 ) {

			geo.addAttribute( 'normal', new THREE.Float32BufferAttribute( bufferInfo.normalBuffer, 3 ) );

		}
		if ( bufferInfo.uvBuffer.length > 0 ) {

			geo.addAttribute( 'uv', new THREE.Float32BufferAttribute( bufferInfo.uvBuffer, 2 ) );

		}
		if ( subNodes.LayerElementColor ) {

			geo.addAttribute( 'color', new THREE.Float32BufferAttribute( bufferInfo.colorBuffer, 3 ) );

		}

		if ( deformer ) {

			geo.addAttribute( 'skinIndex', new THREE.Float32BufferAttribute( bufferInfo.skinIndexBuffer, 4 ) );

			geo.addAttribute( 'skinWeight', new THREE.Float32BufferAttribute( bufferInfo.skinWeightBuffer, 4 ) );

			geo.FBX_Deformer = deformer;

		}

		// Convert the material indices of each vertex into rendering groups on the geometry.

		var materialIndexBuffer = bufferInfo.materialIndexBuffer;
		var prevMaterialIndex = materialIndexBuffer[ 0 ];
		var startIndex = 0;

		for ( var i = 0; i < materialIndexBuffer.length; ++ i ) {

			if ( materialIndexBuffer[ i ] !== prevMaterialIndex ) {

				geo.addGroup( startIndex, i - startIndex, prevMaterialIndex );

				prevMaterialIndex = materialIndexBuffer[ i ];
				startIndex = i;

			}

		}

		return geo;

	}

	/**
	 * Parses normal information for geometry.
	 * @param {FBXGeometryNode} geometryNode
	 * @returns {{dataSize: number, buffer: number[], indices: number[], mappingType: string, referenceType: string}}
	 */
	function getNormals( NormalNode ) {

		var mappingType = NormalNode.properties.MappingInformationType;
		var referenceType = NormalNode.properties.ReferenceInformationType;
		var buffer = parseFloatArray( NormalNode.subNodes.Normals.properties.a );
		var indexBuffer = [];
		if ( referenceType === 'IndexToDirect' ) {

			if ( 'NormalIndex' in NormalNode.subNodes ) {

				indexBuffer = parseIntArray( NormalNode.subNodes.NormalIndex.properties.a );

			} else if ( 'NormalsIndex' in NormalNode.subNodes ) {

				indexBuffer = parseIntArray( NormalNode.subNodes.NormalsIndex.properties.a );

			}

		}

		return {
			dataSize: 3,
			buffer: buffer,
			indices: indexBuffer,
			mappingType: mappingType,
			referenceType: referenceType
		};

	}

	/**
	 * Parses UV information for geometry.
	 * @param {FBXGeometryNode} geometryNode
	 * @returns {{dataSize: number, buffer: number[], indices: number[], mappingType: string, referenceType: string}}
	 */
	function getUVs( UVNode ) {

		var mappingType = UVNode.properties.MappingInformationType;
		var referenceType = UVNode.properties.ReferenceInformationType;
		var buffer = parseFloatArray( UVNode.subNodes.UV.properties.a );
		var indexBuffer = [];
		if ( referenceType === 'IndexToDirect' ) {

			indexBuffer = parseIntArray( UVNode.subNodes.UVIndex.properties.a );

		}

		return {
			dataSize: 2,
			buffer: buffer,
			indices: indexBuffer,
			mappingType: mappingType,
			referenceType: referenceType
		};

	}

	/**
	 * Parses Vertex Color information for geometry.
	 * @param {FBXGeometryNode} geometryNode
	 * @returns {{dataSize: number, buffer: number[], indices: number[], mappingType: string, referenceType: string}}
	 */
	function getColors( ColorNode ) {

		var mappingType = ColorNode.properties.MappingInformationType;
		var referenceType = ColorNode.properties.ReferenceInformationType;
		var buffer = parseFloatArray( ColorNode.subNodes.Colors.properties.a );
		var indexBuffer = [];
		if ( referenceType === 'IndexToDirect' ) {

			indexBuffer = parseFloatArray( ColorNode.subNodes.ColorIndex.properties.a );

		}

		return {
			dataSize: 4,
			buffer: buffer,
			indices: indexBuffer,
			mappingType: mappingType,
			referenceType: referenceType
		};

	}

	/**
	 * Parses material application information for geometry.
	 * @param {FBXGeometryNode}
	 * @returns {{dataSize: number, buffer: number[], indices: number[], mappingType: string, referenceType: string}}
	 */
	function getMaterials( MaterialNode ) {

		var mappingType = MaterialNode.properties.MappingInformationType;
		var referenceType = MaterialNode.properties.ReferenceInformationType;

		if ( mappingType === 'NoMappingInformation' ) {

			return {
				dataSize: 1,
				buffer: [ 0 ],
				indices: [ 0 ],
				mappingType: 'AllSame',
				referenceType: referenceType
			};

		}

		var materialIndexBuffer = parseIntArray( MaterialNode.subNodes.Materials.properties.a );

		// Since materials are stored as indices, there's a bit of a mismatch between FBX and what
		// we expect.  So we create an intermediate buffer that points to the index in the buffer,
		// for conforming with the other functions we've written for other data.
		var materialIndices = [];

		for ( var materialIndexBufferIndex = 0, materialIndexBufferLength = materialIndexBuffer.length; materialIndexBufferIndex < materialIndexBufferLength; ++ materialIndexBufferIndex ) {

			materialIndices.push( materialIndexBufferIndex );

		}

		return {
			dataSize: 1,
			buffer: materialIndexBuffer,
			indices: materialIndices,
			mappingType: mappingType,
			referenceType: referenceType
		};

	}

	/**
	 * Function uses the infoObject and given indices to return value array of object.
	 * @param {number} polygonVertexIndex - Index of vertex in draw order (which index of the index buffer refers to this vertex).
	 * @param {number} polygonIndex - Index of polygon in geometry.
	 * @param {number} vertexIndex - Index of vertex inside vertex buffer (used because some data refers to old index buffer that we don't use anymore).
	 * @param {{datasize: number, buffer: number[], indices: number[], mappingType: string, referenceType: string}} infoObject - Object containing data and how to access data.
	 * @returns {number[]}
	 */

	var dataArray = [];

	var GetData = {

		ByPolygonVertex: {

			/**
			 * Function uses the infoObject and given indices to return value array of object.
			 * @param {number} polygonVertexIndex - Index of vertex in draw order (which index of the index buffer refers to this vertex).
			 * @param {number} polygonIndex - Index of polygon in geometry.
			 * @param {number} vertexIndex - Index of vertex inside vertex buffer (used because some data refers to old index buffer that we don't use anymore).
			 * @param {{datasize: number, buffer: number[], indices: number[], mappingType: string, referenceType: string}} infoObject - Object containing data and how to access data.
			 * @returns {number[]}
			 */
			Direct: function ( polygonVertexIndex, polygonIndex, vertexIndex, infoObject ) {

				var from = ( polygonVertexIndex * infoObject.dataSize );
				var to = ( polygonVertexIndex * infoObject.dataSize ) + infoObject.dataSize;

				// return infoObject.buffer.slice( from, to );
				return slice( dataArray, infoObject.buffer, from, to );

			},

			/**
			 * Function uses the infoObject and given indices to return value array of object.
			 * @param {number} polygonVertexIndex - Index of vertex in draw order (which index of the index buffer refers to this vertex).
			 * @param {number} polygonIndex - Index of polygon in geometry.
			 * @param {number} vertexIndex - Index of vertex inside vertex buffer (used because some data refers to old index buffer that we don't use anymore).
			 * @param {{datasize: number, buffer: number[], indices: number[], mappingType: string, referenceType: string}} infoObject - Object containing data and how to access data.
			 * @returns {number[]}
			 */
			IndexToDirect: function ( polygonVertexIndex, polygonIndex, vertexIndex, infoObject ) {

				var index = infoObject.indices[ polygonVertexIndex ];
				var from = ( index * infoObject.dataSize );
				var to = ( index * infoObject.dataSize ) + infoObject.dataSize;

				// return infoObject.buffer.slice( from, to );
				return slice( dataArray, infoObject.buffer, from, to );

			}

		},

		ByPolygon: {

			/**
			 * Function uses the infoObject and given indices to return value array of object.
			 * @param {number} polygonVertexIndex - Index of vertex in draw order (which index of the index buffer refers to this vertex).
			 * @param {number} polygonIndex - Index of polygon in geometry.
			 * @param {number} vertexIndex - Index of vertex inside vertex buffer (used because some data refers to old index buffer that we don't use anymore).
			 * @param {{datasize: number, buffer: number[], indices: number[], mappingType: string, referenceType: string}} infoObject - Object containing data and how to access data.
			 * @returns {number[]}
			 */
			Direct: function ( polygonVertexIndex, polygonIndex, vertexIndex, infoObject ) {

				var from = polygonIndex * infoObject.dataSize;
				var to = polygonIndex * infoObject.dataSize + infoObject.dataSize;

				// return infoObject.buffer.slice( from, to );
				return slice( dataArray, infoObject.buffer, from, to );

			},

			/**
			 * Function uses the infoObject and given indices to return value array of object.
			 * @param {number} polygonVertexIndex - Index of vertex in draw order (which index of the index buffer refers to this vertex).
			 * @param {number} polygonIndex - Index of polygon in geometry.
			 * @param {number} vertexIndex - Index of vertex inside vertex buffer (used because some data refers to old index buffer that we don't use anymore).
			 * @param {{datasize: number, buffer: number[], indices: number[], mappingType: string, referenceType: string}} infoObject - Object containing data and how to access data.
			 * @returns {number[]}
			 */
			IndexToDirect: function ( polygonVertexIndex, polygonIndex, vertexIndex, infoObject ) {

				var index = infoObject.indices[ polygonIndex ];
				var from = index * infoObject.dataSize;
				var to = index * infoObject.dataSize + infoObject.dataSize;

				// return infoObject.buffer.slice( from, to );
				return slice( dataArray, infoObject.buffer, from, to );

			}

		},

		ByVertice: {

			Direct: function ( polygonVertexIndex, polygonIndex, vertexIndex, infoObject ) {

				var from = ( vertexIndex * infoObject.dataSize );
				var to = ( vertexIndex * infoObject.dataSize ) + infoObject.dataSize;

				// return infoObject.buffer.slice( from, to );
				return slice( dataArray, infoObject.buffer, from, to );

			}

		},

		AllSame: {

			/**
			 * Function uses the infoObject and given indices to return value array of object.
			 * @param {number} polygonVertexIndex - Index of vertex in draw order (which index of the index buffer refers to this vertex).
			 * @param {number} polygonIndex - Index of polygon in geometry.
			 * @param {number} vertexIndex - Index of vertex inside vertex buffer (used because some data refers to old index buffer that we don't use anymore).
			 * @param {{datasize: number, buffer: number[], indices: number[], mappingType: string, referenceType: string}} infoObject - Object containing data and how to access data.
			 * @returns {number[]}
			 */
			IndexToDirect: function ( polygonVertexIndex, polygonIndex, vertexIndex, infoObject ) {

				var from = infoObject.indices[ 0 ] * infoObject.dataSize;
				var to = infoObject.indices[ 0 ] * infoObject.dataSize + infoObject.dataSize;

				// return infoObject.buffer.slice( from, to );
				return slice( dataArray, infoObject.buffer, from, to );

			}

		}

	};

	function getData( polygonVertexIndex, polygonIndex, vertexIndex, infoObject ) {

		return GetData[ infoObject.mappingType ][ infoObject.referenceType ]( polygonVertexIndex, polygonIndex, vertexIndex, infoObject );

	}

	/**
	 * Specialty function for parsing NurbsCurve based Geometry Nodes.
	 * @param {FBXGeometryNode} geometryNode
	 * @param {{parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}} relationships
	 * @returns {THREE.BufferGeometry}
	 */
	function parseNurbsGeometry( geometryNode ) {

		if ( THREE.NURBSCurve === undefined ) {

			console.error( 'THREE.FBXLoader: The loader relies on THREE.NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry.' );
			return new THREE.BufferGeometry();

		}

		var order = parseInt( geometryNode.properties.Order );

		if ( isNaN( order ) ) {

			console.error( 'THREE.FBXLoader: Invalid Order %s given for geometry ID: %s', geometryNode.properties.Order, geometryNode.id );
			return new THREE.BufferGeometry();

		}

		var degree = order - 1;

		var knots = parseFloatArray( geometryNode.subNodes.KnotVector.properties.a );
		var controlPoints = [];
		var pointsValues = parseFloatArray( geometryNode.subNodes.Points.properties.a );

		for ( var i = 0, l = pointsValues.length; i < l; i += 4 ) {

			controlPoints.push( new THREE.Vector4().fromArray( pointsValues, i ) );

		}

		var startKnot, endKnot;

		if ( geometryNode.properties.Form === 'Closed' ) {

			controlPoints.push( controlPoints[ 0 ] );

		} else if ( geometryNode.properties.Form === 'Periodic' ) {

			startKnot = degree;
			endKnot = knots.length - 1 - startKnot;

			for ( var i = 0; i < degree; ++ i ) {

				controlPoints.push( controlPoints[ i ] );

			}

		}

		var curve = new THREE.NURBSCurve( degree, knots, controlPoints, startKnot, endKnot );
		var vertices = curve.getPoints( controlPoints.length * 7 );

		var positions = new Float32Array( vertices.length * 3 );

		for ( var i = 0, l = vertices.length; i < l; ++ i ) {

			vertices[ i ].toArray( positions, i * 3 );

		}

		var geometry = new THREE.BufferGeometry();
		geometry.addAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );

		return geometry;

	}

	/**
	 * Finally generates Scene graph and Scene graph Objects.
	 * @param {{Objects: {subNodes: {Model: Object.<number, FBXModelNode>}}}} FBXTree
	 * @param {Map<number, {parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>} connections
	 * @param {Map<number, {map: Map<number, {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}>, array: {FBX_ID: number, indices: number[], weights: number[], transform: number[], transformLink: number[], linkMode: string}[], skeleton: THREE.Skeleton|null}>} deformers
	 * @param {Map<number, THREE.BufferGeometry>} geometryMap
	 * @param {Map<number, THREE.Material>} materialMap
	 * @returns {THREE.Group}
	 */
	function parseScene( FBXTree, connections, deformers, geometryMap, materialMap ) {

		var sceneGraph = new THREE.Group();

		var ModelNode = FBXTree.Objects.subNodes.Model;

		/**
		 * @type {Array.<THREE.Object3D>}
		 */
		var modelArray = [];

		/**
		 * @type {Map.<number, THREE.Object3D>}
		 */
		var modelMap = new Map();

		for ( var nodeID in ModelNode ) {

			var id = parseInt( nodeID );
			var node = ModelNode[ nodeID ];
			var conns = connections.get( id );
			var model = null;

			for ( var i = 0; i < conns.parents.length; ++ i ) {

				for ( var FBX_ID in deformers ) {

					var deformer = deformers[ FBX_ID ];
					var subDeformers = deformer.map;
					var subDeformer = subDeformers[ conns.parents[ i ].ID ];

					if ( subDeformer ) {

						var model2 = model;
						model = new THREE.Bone();
						deformer.bones[ subDeformer.index ] = model;

						// seems like we need this not to make non-connected bone, maybe?
						// TODO: confirm
						if ( model2 !== null ) model.add( model2 );

					}

				}

			}

			if ( ! model ) {

				switch ( node.attrType ) {

					case 'Mesh':
						/**
						 * @type {?THREE.BufferGeometry}
						 */
						var geometry = null;

						/**
						 * @type {THREE.MultiMaterial|THREE.Material}
						 */
						var material = null;

						/**
						 * @type {Array.<THREE.Material>}
						 */
						var materials = [];

						for ( var childrenIndex = 0, childrenLength = conns.children.length; childrenIndex < childrenLength; ++ childrenIndex ) {

							var child = conns.children[ childrenIndex ];

							if ( geometryMap.has( child.ID ) ) {

								geometry = geometryMap.get( child.ID );

							}

							if ( materialMap.has( child.ID ) ) {

								materials.push( materialMap.get( child.ID ) );

							}

						}
						if ( materials.length > 1 ) {

							material = materials;

						} else if ( materials.length > 0 ) {

							material = materials[ 0 ];

						} else {

							material = new THREE.MeshBasicMaterial( { color: 0x3300ff } );
							materials.push( material );

						}
						if ( 'color' in geometry.attributes ) {

							for ( var materialIndex = 0, numMaterials = materials.length; materialIndex < numMaterials; ++materialIndex ) {

								materials[ materialIndex ].vertexColors = THREE.VertexColors;

							}

						}
						if ( geometry.FBX_Deformer ) {

							for ( var materialsIndex = 0, materialsLength = materials.length; materialsIndex < materialsLength; ++ materialsIndex ) {

								materials[ materialsIndex ].skinning = true;

							}
							model = new THREE.SkinnedMesh( geometry, material );

						} else {

							model = new THREE.Mesh( geometry, material );

						}
						break;

					case 'NurbsCurve':
						var geometry = null;

						for ( var childrenIndex = 0, childrenLength = conns.children.length; childrenIndex < childrenLength; ++ childrenIndex ) {

							var child = conns.children[ childrenIndex ];

							if ( geometryMap.has( child.ID ) ) {

								geometry = geometryMap.get( child.ID );

							}

						}

						// FBX does not list materials for Nurbs lines, so we'll just put our own in here.
						material = new THREE.LineBasicMaterial( { color: 0x3300ff, linewidth: 5 } );
						model = new THREE.Line( geometry, material );
						break;

					default:
						model = new THREE.Object3D();
						break;

				}

			}

			model.name = node.attrName.replace( /:/, '' ).replace( /_/, '' ).replace( /-/, '' );
			model.FBX_ID = id;

			modelArray.push( model );
			modelMap.set( id, model );

		}

		for ( var modelArrayIndex = 0, modelArrayLength = modelArray.length; modelArrayIndex < modelArrayLength; ++ modelArrayIndex ) {

			var model = modelArray[ modelArrayIndex ];

			var node = ModelNode[ model.FBX_ID ];

			if ( 'Lcl_Translation' in node.properties ) {

				model.position.fromArray( parseFloatArray( node.properties.Lcl_Translation.value ) );

			}

			if ( 'Lcl_Rotation' in node.properties ) {

				var rotation = parseFloatArray( node.properties.Lcl_Rotation.value ).map( degreeToRadian );
				rotation.push( 'ZYX' );
				model.rotation.fromArray( rotation );

			}

			if ( 'Lcl_Scaling' in node.properties ) {

				model.scale.fromArray( parseFloatArray( node.properties.Lcl_Scaling.value ) );

			}

			if ( 'PreRotation' in node.properties ) {

				var preRotations = new THREE.Euler().setFromVector3( parseVector3( node.properties.PreRotation ).multiplyScalar( DEG2RAD ), 'ZYX' );
				preRotations = new THREE.Quaternion().setFromEuler( preRotations );
				var currentRotation = new THREE.Quaternion().setFromEuler( model.rotation );
				preRotations.multiply( currentRotation );
				model.rotation.setFromQuaternion( preRotations, 'ZYX' );

			}

			if ('GeometricTranslation' in node.properties) {

				var array = node.properties.GeometricTranslation.value;
				model.traverse(function (child)
				{

					if (child.geometry) {

						child.geometry.translate(array[0], array[1], array[2]);

					}

				});
			}

			var conns = connections.get( model.FBX_ID );
			for ( var parentIndex = 0; parentIndex < conns.parents.length; parentIndex ++ ) {

				var pIndex = findIndex( modelArray, function ( mod ) {

					return mod.FBX_ID === conns.parents[ parentIndex ].ID;

				} );
				if ( pIndex > - 1 ) {

					modelArray[ pIndex ].add( model );
					break;

				}

			}
			if ( model.parent === null ) {

				sceneGraph.add( model );

			}

		}


		// Now with the bones created, we can update the skeletons and bind them to the skinned meshes.
		sceneGraph.updateMatrixWorld( true );

		// Put skeleton into bind pose.
		var BindPoseNode = FBXTree.Objects.subNodes.Pose;
		for ( var nodeID in BindPoseNode ) {

			if ( BindPoseNode[ nodeID ].attrType === 'BindPose' ) {

				BindPoseNode = BindPoseNode[ nodeID ];
				break;

			}

		}
		if ( BindPoseNode ) {

			var PoseNode = BindPoseNode.subNodes.PoseNode;
			var worldMatrices = new Map();

			for ( var PoseNodeIndex = 0, PoseNodeLength = PoseNode.length; PoseNodeIndex < PoseNodeLength; ++ PoseNodeIndex ) {

				var node = PoseNode[ PoseNodeIndex ];

				var rawMatWrd = parseMatrixArray( node.subNodes.Matrix.properties.a );

				worldMatrices.set( parseInt( node.id ), rawMatWrd );

			}

		}

		for ( var FBX_ID in deformers ) {

			var deformer = deformers[ FBX_ID ];
			var subDeformers = deformer.map;

			for ( var key in subDeformers ) {

				var subDeformer = subDeformers[ key ];
				var subDeformerIndex = subDeformer.index;

				/**
				 * @type {THREE.Bone}
				 */
				var bone = deformer.bones[ subDeformerIndex ];
				if ( ! worldMatrices.has( bone.FBX_ID ) ) {

					break;

				}
				var mat = worldMatrices.get( bone.FBX_ID );
				bone.matrixWorld.copy( mat );

			}

			// Now that skeleton is in bind pose, bind to model.
			deformer.skeleton = new THREE.Skeleton( deformer.bones );

			var conns = connections.get( deformer.FBX_ID );
			var parents = conns.parents;

			for ( var parentsIndex = 0, parentsLength = parents.length; parentsIndex < parentsLength; ++ parentsIndex ) {

				var parent = parents[ parentsIndex ];

				if ( geometryMap.has( parent.ID ) ) {

					var geoID = parent.ID;
					var geoConns = connections.get( geoID );

					for ( var i = 0; i < geoConns.parents.length; ++ i ) {

						if ( modelMap.has( geoConns.parents[ i ].ID ) ) {

							var model = modelMap.get( geoConns.parents[ i ].ID );
							//ASSERT model typeof SkinnedMesh
							model.bind( deformer.skeleton, model.matrixWorld );
							break;

						}

					}

				}

			}

		}

		//Skeleton is now bound, return objects to starting
		//world positions.
		sceneGraph.updateMatrixWorld( true );

		// Silly hack with the animation parsing.  We're gonna pretend the scene graph has a skeleton
		// to attach animations to, since FBXs treat animations as animations for the entire scene,
		// not just for individual objects.
		sceneGraph.skeleton = {
			bones: modelArray
		};

		var animations = parseAnimations( FBXTree, connections, sceneGraph );

		addAnimations( sceneGraph, animations );

		return sceneGraph;

	}

	/**
	 * Parses animation information from FBXTree and generates an AnimationInfoObject.
	 * @param {{Objects: {subNodes: {AnimationCurveNode: any, AnimationCurve: any, AnimationLayer: any, AnimationStack: any}}}} FBXTree
	 * @param {Map<number, {parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>} connections
	 */
	function parseAnimations( FBXTree, connections, sceneGraph ) {

		var rawNodes = FBXTree.Objects.subNodes.AnimationCurveNode;
		var rawCurves = FBXTree.Objects.subNodes.AnimationCurve;
		var rawLayers = FBXTree.Objects.subNodes.AnimationLayer;
		var rawStacks = FBXTree.Objects.subNodes.AnimationStack;

		/**
		 * @type {{
				 curves: Map<number, {
				 T: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					};
				},
				 R: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					};
				},
				 S: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					};
				}
			 }>,
			 layers: Map<number, {
				T: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					},
				},
				R: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					},
				},
				S: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					},
				}
				}[]>,
			 stacks: Map<number, {
				 name: string,
				 layers: {
					T: {
						id: number;
						attr: string;
						internalID: number;
						attrX: boolean;
						attrY: boolean;
						attrZ: boolean;
						containerBoneID: number;
						containerID: number;
						curves: {
							x: {
								version: any;
								id: number;
								internalID: number;
								times: number[];
								values: number[];
								attrFlag: number[];
								attrData: number[];
							};
							y: {
								version: any;
								id: number;
								internalID: number;
								times: number[];
								values: number[];
								attrFlag: number[];
								attrData: number[];
							};
							z: {
								version: any;
								id: number;
								internalID: number;
								times: number[];
								values: number[];
								attrFlag: number[];
								attrData: number[];
							};
						};
					};
					R: {
						id: number;
						attr: string;
						internalID: number;
						attrX: boolean;
						attrY: boolean;
						attrZ: boolean;
						containerBoneID: number;
						containerID: number;
						curves: {
							x: {
								version: any;
								id: number;
								internalID: number;
								times: number[];
								values: number[];
								attrFlag: number[];
								attrData: number[];
							};
							y: {
								version: any;
								id: number;
								internalID: number;
								times: number[];
								values: number[];
								attrFlag: number[];
								attrData: number[];
							};
							z: {
								version: any;
								id: number;
								internalID: number;
								times: number[];
								values: number[];
								attrFlag: number[];
								attrData: number[];
							};
						};
					};
					S: {
						id: number;
						attr: string;
						internalID: number;
						attrX: boolean;
						attrY: boolean;
						attrZ: boolean;
						containerBoneID: number;
						containerID: number;
						curves: {
							x: {
								version: any;
								id: number;
								internalID: number;
								times: number[];
								values: number[];
								attrFlag: number[];
								attrData: number[];
							};
							y: {
								version: any;
								id: number;
								internalID: number;
								times: number[];
								values: number[];
								attrFlag: number[];
								attrData: number[];
							};
							z: {
								version: any;
								id: number;
								internalID: number;
								times: number[];
								values: number[];
								attrFlag: number[];
								attrData: number[];
							};
						};
					};
				}[][],
			 length: number,
			 frames: number }>,
			 length: number,
			 fps: number,
			 frames: number
		 }}
		 */
		var returnObject = {
			curves: new Map(),
			layers: {},
			stacks: {},
			length: 0,
			fps: 30,
			frames: 0
		};

		/**
		 * @type {Array.<{
				id: number;
				attr: string;
				internalID: number;
				attrX: boolean;
				attrY: boolean;
				attrZ: boolean;
				containerBoneID: number;
				containerID: number;
			}>}
		 */
		var animationCurveNodes = [];
		for ( var nodeID in rawNodes ) {

			if ( nodeID.match( /\d+/ ) ) {

				var animationNode = parseAnimationNode( FBXTree, rawNodes[ nodeID ], connections, sceneGraph );
				animationCurveNodes.push( animationNode );

			}

		}

		/**
		 * @type {Map.<number, {
				id: number,
				attr: string,
				internalID: number,
				attrX: boolean,
				attrY: boolean,
				attrZ: boolean,
				containerBoneID: number,
				containerID: number,
				curves: {
					x: {
						version: any,
						id: number,
						internalID: number,
						times: number[],
						values: number[],
						attrFlag: number[],
						attrData: number[],
					},
					y: {
						version: any,
						id: number,
						internalID: number,
						times: number[],
						values: number[],
						attrFlag: number[],
						attrData: number[],
					},
					z: {
						version: any,
						id: number,
						internalID: number,
						times: number[],
						values: number[],
						attrFlag: number[],
						attrData: number[],
					}
				}
			}>}
		 */
		var tmpMap = new Map();
		for ( var animationCurveNodeIndex = 0; animationCurveNodeIndex < animationCurveNodes.length; ++ animationCurveNodeIndex ) {

			if ( animationCurveNodes[ animationCurveNodeIndex ] === null ) {

				continue;

			}
			tmpMap.set( animationCurveNodes[ animationCurveNodeIndex ].id, animationCurveNodes[ animationCurveNodeIndex ] );

		}


		/**
		 * @type {{
				version: any,
				id: number,
				internalID: number,
				times: number[],
				values: number[],
				attrFlag: number[],
				attrData: number[],
			}[]}
		 */
		var animationCurves = [];
		for ( nodeID in rawCurves ) {

			if ( nodeID.match( /\d+/ ) ) {

				var animationCurve = parseAnimationCurve( rawCurves[ nodeID ] );

				// seems like this check would be necessary?
				if ( ! connections.has( animationCurve.id ) ) continue;

				animationCurves.push( animationCurve );

				var firstParentConn = connections.get( animationCurve.id ).parents[ 0 ];
				var firstParentID = firstParentConn.ID;
				var firstParentRelationship = firstParentConn.relationship;
				var axis = '';

				if ( firstParentRelationship.match( /X/ ) ) {

					axis = 'x';

				} else if ( firstParentRelationship.match( /Y/ ) ) {

					axis = 'y';

				} else if ( firstParentRelationship.match( /Z/ ) ) {

					axis = 'z';

				} else {

					continue;

				}

				tmpMap.get( firstParentID ).curves[ axis ] = animationCurve;

			}

		}

		tmpMap.forEach( function ( curveNode ) {

			var id = curveNode.containerBoneID;
			if ( ! returnObject.curves.has( id ) ) {

				returnObject.curves.set( id, { T: null, R: null, S: null } );

			}
			returnObject.curves.get( id )[ curveNode.attr ] = curveNode;
			if ( curveNode.attr === 'R' ) {

				var curves = curveNode.curves;

				// Seems like some FBX files have AnimationCurveNode
				// which doesn't have any connected AnimationCurve.
				// Setting animation parameter for them here.

				if ( curves.x === null ) {

					curves.x = {
						version: null,
						times: [ 0.0 ],
						values: [ 0.0 ]
					};

				}

				if ( curves.y === null ) {

					curves.y = {
						version: null,
						times: [ 0.0 ],
						values: [ 0.0 ]
					};

				}

				if ( curves.z === null ) {

					curves.z = {
						version: null,
						times: [ 0.0 ],
						values: [ 0.0 ]
					};

				}

				curves.x.values = curves.x.values.map( degreeToRadian );
				curves.y.values = curves.y.values.map( degreeToRadian );
				curves.z.values = curves.z.values.map( degreeToRadian );

				if ( curveNode.preRotations !== null ) {

					var preRotations = new THREE.Euler().setFromVector3( curveNode.preRotations, 'ZYX' );
					preRotations = new THREE.Quaternion().setFromEuler( preRotations );
					var frameRotation = new THREE.Euler();
					var frameRotationQuaternion = new THREE.Quaternion();
					for ( var frame = 0; frame < curves.x.times.length; ++ frame ) {

						frameRotation.set( curves.x.values[ frame ], curves.y.values[ frame ], curves.z.values[ frame ], 'ZYX' );
						frameRotationQuaternion.setFromEuler( frameRotation ).premultiply( preRotations );
						frameRotation.setFromQuaternion( frameRotationQuaternion, 'ZYX' );
						curves.x.values[ frame ] = frameRotation.x;
						curves.y.values[ frame ] = frameRotation.y;
						curves.z.values[ frame ] = frameRotation.z;

					}

				}

			}

		} );

		for ( var nodeID in rawLayers ) {

			/**
			 * @type {{
				T: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					},
				},
				R: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					},
				},
				S: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					},
				}
				}[]}
			 */
			var layer = [];
			var children = connections.get( parseInt( nodeID ) ).children;

			for ( var childIndex = 0; childIndex < children.length; childIndex ++ ) {

				// Skip lockInfluenceWeights
				if ( tmpMap.has( children[ childIndex ].ID ) ) {

					var curveNode = tmpMap.get( children[ childIndex ].ID );
					var boneID = curveNode.containerBoneID;
					if ( layer[ boneID ] === undefined ) {

						layer[ boneID ] = {
							T: null,
							R: null,
							S: null
						};

					}

					layer[ boneID ][ curveNode.attr ] = curveNode;

				}

			}

			returnObject.layers[ nodeID ] = layer;

		}

		for ( var nodeID in rawStacks ) {

			var layers = [];
			var children = connections.get( parseInt( nodeID ) ).children;
			var timestamps = { max: 0, min: Number.MAX_VALUE };

			for ( var childIndex = 0; childIndex < children.length; ++ childIndex ) {

				var currentLayer = returnObject.layers[ children[ childIndex ].ID ];

				if ( currentLayer !== undefined ) {

					layers.push( currentLayer );

					for ( var currentLayerIndex = 0, currentLayerLength = currentLayer.length; currentLayerIndex < currentLayerLength; ++ currentLayerIndex ) {

						var layer = currentLayer[ currentLayerIndex ];

						if ( layer ) {

							getCurveNodeMaxMinTimeStamps( layer, timestamps );

						}

					}

				}

			}

			// Do we have an animation clip with actual length?
			if ( timestamps.max > timestamps.min ) {

				returnObject.stacks[ nodeID ] = {
					name: rawStacks[ nodeID ].attrName,
					layers: layers,
					length: timestamps.max - timestamps.min,
					frames: ( timestamps.max - timestamps.min ) * 30
				};

			}

		}

		return returnObject;

	}

	/**
	 * @param {Object} FBXTree
	 * @param {{id: number, attrName: string, properties: Object<string, any>}} animationCurveNode
	 * @param {Map<number, {parents: {ID: number, relationship: string}[], children: {ID: number, relationship: string}[]}>} connections
	 * @param {{skeleton: {bones: {FBX_ID: number}[]}}} sceneGraph
	 */
	function parseAnimationNode( FBXTree, animationCurveNode, connections, sceneGraph ) {

		var rawModels = FBXTree.Objects.subNodes.Model;

		var returnObject = {
			/**
			 * @type {number}
			 */
			id: animationCurveNode.id,

			/**
			 * @type {string}
			 */
			attr: animationCurveNode.attrName,

			/**
			 * @type {number}
			 */
			internalID: animationCurveNode.id,

			/**
			 * @type {boolean}
			 */
			attrX: false,

			/**
			 * @type {boolean}
			 */
			attrY: false,

			/**
			 * @type {boolean}
			 */
			attrZ: false,

			/**
			 * @type {number}
			 */
			containerBoneID: - 1,

			/**
			 * @type {number}
			 */
			containerID: - 1,

			curves: {
				x: null,
				y: null,
				z: null
			},

			/**
			 * @type {number[]}
			 */
			preRotations: null
		};

		if ( returnObject.attr.match( /S|R|T/ ) ) {

			for ( var attributeKey in animationCurveNode.properties ) {

				if ( attributeKey.match( /X/ ) ) {

					returnObject.attrX = true;

				}
				if ( attributeKey.match( /Y/ ) ) {

					returnObject.attrY = true;

				}
				if ( attributeKey.match( /Z/ ) ) {

					returnObject.attrZ = true;

				}

			}

		} else {

			return null;

		}

		var conns = connections.get( returnObject.id );
		var containerIndices = conns.parents;

		for ( var containerIndicesIndex = containerIndices.length - 1; containerIndicesIndex >= 0; -- containerIndicesIndex ) {

			var boneID = findIndex( sceneGraph.skeleton.bones, function ( bone ) {

				return bone.FBX_ID === containerIndices[ containerIndicesIndex ].ID;

			} );
			if ( boneID > - 1 ) {

				returnObject.containerBoneID = boneID;
				returnObject.containerID = containerIndices[ containerIndicesIndex ].ID;
				var model = rawModels[ returnObject.containerID.toString() ];
				if ( 'PreRotation' in model.properties ) {

					returnObject.preRotations = parseVector3( model.properties.PreRotation ).multiplyScalar( Math.PI / 180 );

				}
				break;

			}

		}

		return returnObject;

	}

	/**
	 * @param {{id: number, subNodes: {KeyTime: {properties: {a: string}}, KeyValueFloat: {properties: {a: string}}, KeyAttrFlags: {properties: {a: string}}, KeyAttrDataFloat: {properties: {a: string}}}}} animationCurve
	 */
	function parseAnimationCurve( animationCurve ) {

		return {
			version: null,
			id: animationCurve.id,
			internalID: animationCurve.id,
			times: parseFloatArray( animationCurve.subNodes.KeyTime.properties.a ).map( convertFBXTimeToSeconds ),
			values: parseFloatArray( animationCurve.subNodes.KeyValueFloat.properties.a ),

			attrFlag: parseIntArray( animationCurve.subNodes.KeyAttrFlags.properties.a ),
			attrData: parseFloatArray( animationCurve.subNodes.KeyAttrDataFloat.properties.a )
		};

	}

	/**
	 * Sets the maxTimeStamp and minTimeStamp variables if it has timeStamps that are either larger or smaller
	 * than the max or min respectively.
	 * @param {{
				T: {
						id: number,
						attr: string,
						internalID: number,
						attrX: boolean,
						attrY: boolean,
						attrZ: boolean,
						containerBoneID: number,
						containerID: number,
						curves: {
								x: {
										version: any,
										id: number,
										internalID: number,
										times: number[],
										values: number[],
										attrFlag: number[],
										attrData: number[],
								},
								y: {
										version: any,
										id: number,
										internalID: number,
										times: number[],
										values: number[],
										attrFlag: number[],
										attrData: number[],
								},
								z: {
										version: any,
										id: number,
										internalID: number,
										times: number[],
										values: number[],
										attrFlag: number[],
										attrData: number[],
								},
						},
				},
				R: {
						id: number,
						attr: string,
						internalID: number,
						attrX: boolean,
						attrY: boolean,
						attrZ: boolean,
						containerBoneID: number,
						containerID: number,
						curves: {
								x: {
										version: any,
										id: number,
										internalID: number,
										times: number[],
										values: number[],
										attrFlag: number[],
										attrData: number[],
								},
								y: {
										version: any,
										id: number,
										internalID: number,
										times: number[],
										values: number[],
										attrFlag: number[],
										attrData: number[],
								},
								z: {
										version: any,
										id: number,
										internalID: number,
										times: number[],
										values: number[],
										attrFlag: number[],
										attrData: number[],
								},
						},
				},
				S: {
						id: number,
						attr: string,
						internalID: number,
						attrX: boolean,
						attrY: boolean,
						attrZ: boolean,
						containerBoneID: number,
						containerID: number,
						curves: {
								x: {
										version: any,
										id: number,
										internalID: number,
										times: number[],
										values: number[],
										attrFlag: number[],
										attrData: number[],
								},
								y: {
										version: any,
										id: number,
										internalID: number,
										times: number[],
										values: number[],
										attrFlag: number[],
										attrData: number[],
								},
								z: {
										version: any,
										id: number,
										internalID: number,
										times: number[],
										values: number[],
										attrFlag: number[],
										attrData: number[],
								},
						},
				},
		}} layer
	 */
	function getCurveNodeMaxMinTimeStamps( layer, timestamps ) {

		if ( layer.R ) {

			getCurveMaxMinTimeStamp( layer.R.curves, timestamps );

		}
		if ( layer.S ) {

			getCurveMaxMinTimeStamp( layer.S.curves, timestamps );

		}
		if ( layer.T ) {

			getCurveMaxMinTimeStamp( layer.T.curves, timestamps );

		}

	}

	/**
	 * Sets the maxTimeStamp and minTimeStamp if one of the curve's time stamps
	 * exceeds the maximum or minimum.
	 * @param {{
				x: {
						version: any,
						id: number,
						internalID: number,
						times: number[],
						values: number[],
						attrFlag: number[],
						attrData: number[],
				},
				y: {
						version: any,
						id: number,
						internalID: number,
						times: number[],
						values: number[],
						attrFlag: number[],
						attrData: number[],
				},
				z: {
						version: any,
						id: number,
						internalID: number,
						times: number[],
						values: number[],
						attrFlag: number[],
						attrData: number[],
				}
		}} curve
	 */
	function getCurveMaxMinTimeStamp( curve, timestamps ) {

		if ( curve.x ) {

			getCurveAxisMaxMinTimeStamps( curve.x, timestamps );

		}
		if ( curve.y ) {

			getCurveAxisMaxMinTimeStamps( curve.y, timestamps );

		}
		if ( curve.z ) {

			getCurveAxisMaxMinTimeStamps( curve.z, timestamps );

		}

	}

	/**
	 * Sets the maxTimeStamp and minTimeStamp if one of its timestamps exceeds the maximum or minimum.
	 * @param {{times: number[]}} axis
	 */
	function getCurveAxisMaxMinTimeStamps( axis, timestamps ) {

		timestamps.max = axis.times[ axis.times.length - 1 ] > timestamps.max ? axis.times[ axis.times.length - 1 ] : timestamps.max;
		timestamps.min = axis.times[ 0 ] < timestamps.min ? axis.times[ 0 ] : timestamps.min;

	}

	/**
	 * @param {{
		curves: Map<number, {
			T: {
				id: number;
				attr: string;
				internalID: number;
				attrX: boolean;
				attrY: boolean;
				attrZ: boolean;
				containerBoneID: number;
				containerID: number;
				curves: {
					x: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					y: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					z: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
				};
			};
			R: {
				id: number;
				attr: string;
				internalID: number;
				attrX: boolean;
				attrY: boolean;
				attrZ: boolean;
				containerBoneID: number;
				containerID: number;
				curves: {
					x: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					y: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					z: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
				};
			};
			S: {
				id: number;
				attr: string;
				internalID: number;
				attrX: boolean;
				attrY: boolean;
				attrZ: boolean;
				containerBoneID: number;
				containerID: number;
				curves: {
					x: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					y: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					z: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
				};
			};
		}>;
		layers: Map<number, {
			T: {
				id: number;
				attr: string;
				internalID: number;
				attrX: boolean;
				attrY: boolean;
				attrZ: boolean;
				containerBoneID: number;
				containerID: number;
				curves: {
					x: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					y: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					z: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
				};
			};
			R: {
				id: number;
				attr: string;
				internalID: number;
				attrX: boolean;
				attrY: boolean;
				attrZ: boolean;
				containerBoneID: number;
				containerID: number;
				curves: {
					x: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					y: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					z: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
				};
			};
			S: {
				id: number;
				attr: string;
				internalID: number;
				attrX: boolean;
				attrY: boolean;
				attrZ: boolean;
				containerBoneID: number;
				containerID: number;
				curves: {
					x: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					y: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
					z: {
						version: any;
						id: number;
						internalID: number;
						times: number[];
						values: number[];
						attrFlag: number[];
						attrData: number[];
					};
				};
			};
		}[]>;
		stacks: Map<number, {
			name: string;
			layers: {
				T: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					};
				};
				R: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					};
				};
				S: {
					id: number;
					attr: string;
					internalID: number;
					attrX: boolean;
					attrY: boolean;
					attrZ: boolean;
					containerBoneID: number;
					containerID: number;
					curves: {
						x: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						y: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
						z: {
							version: any;
							id: number;
							internalID: number;
							times: number[];
							values: number[];
							attrFlag: number[];
							attrData: number[];
						};
					};
				};
			}[][];
			length: number;
			frames: number;
		}>;
		length: number;
		fps: number;
		frames: number;
	}} animations,
	 * @param {{skeleton: { bones: THREE.Bone[]}}} group
	 */
	function addAnimations( group, animations ) {

		if ( group.animations === undefined ) {

			group.animations = [];

		}

		var stacks = animations.stacks;

		for ( var key in stacks ) {

			var stack = stacks[ key ];

			/**
			 * @type {{
			 * name: string,
			 * fps: number,
			 * length: number,
			 * hierarchy: Array.<{
			 * 	parent: number,
			 * 	name: string,
			 * 	keys: Array.<{
			 * 		time: number,
			 * 		pos: Array.<number>,
			 * 		rot: Array.<number>,
			 * 		scl: Array.<number>
			 * 	}>
			 * }>
			 * }}
			 */
			var animationData = {
				name: stack.name,
				fps: 30,
				length: stack.length,
				hierarchy: []
			};

			var bones = group.skeleton.bones;

			for ( var bonesIndex = 0, bonesLength = bones.length; bonesIndex < bonesLength; ++ bonesIndex ) {

				var bone = bones[ bonesIndex ];

				var name = bone.name.replace( /.*:/, '' );
				var parentIndex = findIndex( bones, function ( parentBone ) {

					return bone.parent === parentBone;

				} );
				animationData.hierarchy.push( { parent: parentIndex, name: name, keys: [] } );

			}

			for ( var frame = 0; frame <= stack.frames; frame ++ ) {

				for ( var bonesIndex = 0, bonesLength = bones.length; bonesIndex < bonesLength; ++ bonesIndex ) {

					var bone = bones[ bonesIndex ];
					var boneIndex = bonesIndex;

					var animationNode = stack.layers[ 0 ][ boneIndex ];

					for ( var hierarchyIndex = 0, hierarchyLength = animationData.hierarchy.length; hierarchyIndex < hierarchyLength; ++ hierarchyIndex ) {

						var node = animationData.hierarchy[ hierarchyIndex ];

						if ( node.name === bone.name ) {

							node.keys.push( generateKey( animations, animationNode, bone, frame ) );

						}

					}

				}

			}

			group.animations.push( THREE.AnimationClip.parseAnimation( animationData, bones ) );

		}

	}

	var euler = new THREE.Euler();
	var quaternion = new THREE.Quaternion();

	/**
	 * @param {THREE.Bone} bone
	 */
	function generateKey( animations, animationNode, bone, frame ) {

		var key = {
			time: frame / animations.fps,
			pos: bone.position.toArray(),
			rot: bone.quaternion.toArray(),
			scl: bone.scale.toArray()
		};

		if ( animationNode === undefined ) return key;

		try {

			if ( hasCurve( animationNode, 'T' ) && hasKeyOnFrame( animationNode.T, frame ) ) {

				key.pos = [ animationNode.T.curves.x.values[ frame ], animationNode.T.curves.y.values[ frame ], animationNode.T.curves.z.values[ frame ] ];

			}

			if ( hasCurve( animationNode, 'R' ) && hasKeyOnFrame( animationNode.R, frame ) ) {

				var rotationX = animationNode.R.curves.x.values[ frame ];
				var rotationY = animationNode.R.curves.y.values[ frame ];
				var rotationZ = animationNode.R.curves.z.values[ frame ];

				quaternion.setFromEuler( euler.set( rotationX, rotationY, rotationZ, 'ZYX' ) );
				key.rot = quaternion.toArray();

			}

			if ( hasCurve( animationNode, 'S' ) && hasKeyOnFrame( animationNode.S, frame ) ) {

				key.scl = [ animationNode.S.curves.x.values[ frame ], animationNode.S.curves.y.values[ frame ], animationNode.S.curves.z.values[ frame ] ];

			}

		} catch ( error ) {

			// Curve is not fully plotted.
			console.log( 'THREE.FBXLoader: ', bone );
			console.log( 'THREE.FBXLoader: ', error );

		}

		return key;

	}

	var AXES = [ 'x', 'y', 'z' ];

	function hasCurve( animationNode, attribute ) {

		if ( animationNode === undefined ) {

			return false;

		}

		var attributeNode = animationNode[ attribute ];

		if ( ! attributeNode ) {

			return false;

		}

		return AXES.every( function ( key ) {

			return attributeNode.curves[ key ] !== null;

		} );

	}

	function hasKeyOnFrame( attributeNode, frame ) {

		return AXES.every( function ( key ) {

			return isKeyExistOnFrame( attributeNode.curves[ key ], frame );

		} );

	}

	function isKeyExistOnFrame( curve, frame ) {

		return curve.values[ frame ] !== undefined;

	}

	/**
	 * An instance of a Vertex with data for drawing vertices to the screen.
	 * @constructor
	 */
	function Vertex() {

		/**
		 * Position of the vertex.
		 * @type {THREE.Vector3}
		 */
		this.position = new THREE.Vector3();

		/**
		 * Normal of the vertex
		 * @type {THREE.Vector3}
		 */
		this.normal = new THREE.Vector3();

		/**
		 * UV coordinates of the vertex.
		 * @type {THREE.Vector2}
		 */
		this.uv = new THREE.Vector2();

		/**
		 * Color of the vertex
		 * @type {THREE.Vector3}
		 */
		this.color = new THREE.Vector3();

		/**
		 * Indices of the bones vertex is influenced by.
		 * @type {THREE.Vector4}
		 */
		this.skinIndices = new THREE.Vector4( 0, 0, 0, 0 );

		/**
		 * Weights that each bone influences the vertex.
		 * @type {THREE.Vector4}
		 */
		this.skinWeights = new THREE.Vector4( 0, 0, 0, 0 );

	}

	Object.assign( Vertex.prototype, {

		copy: function ( target ) {

			var returnVar = target || new Vertex();

			returnVar.position.copy( this.position );
			returnVar.normal.copy( this.normal );
			returnVar.uv.copy( this.uv );
			returnVar.skinIndices.copy( this.skinIndices );
			returnVar.skinWeights.copy( this.skinWeights );

			return returnVar;

		},

		flattenToBuffers: function ( vertexBuffer, normalBuffer, uvBuffer, colorBuffer, skinIndexBuffer, skinWeightBuffer ) {

			this.position.toArray( vertexBuffer, vertexBuffer.length );
			this.normal.toArray( normalBuffer, normalBuffer.length );
			this.uv.toArray( uvBuffer, uvBuffer.length );
			this.color.toArray( colorBuffer, colorBuffer.length );
			this.skinIndices.toArray( skinIndexBuffer, skinIndexBuffer.length );
			this.skinWeights.toArray( skinWeightBuffer, skinWeightBuffer.length );

		}

	} );

	/**
	 * @constructor
	 */
	function Triangle() {

		/**
		 * @type {{position: THREE.Vector3, normal: THREE.Vector3, uv: THREE.Vector2, skinIndices: THREE.Vector4, skinWeights: THREE.Vector4}[]}
		 */
		this.vertices = [];

	}

	Object.assign( Triangle.prototype, {

		copy: function ( target ) {

			var returnVar = target || new Triangle();

			for ( var i = 0; i < this.vertices.length; ++ i ) {

				 this.vertices[ i ].copy( returnVar.vertices[ i ] );

			}

			return returnVar;

		},

		flattenToBuffers: function ( vertexBuffer, normalBuffer, uvBuffer, colorBuffer, skinIndexBuffer, skinWeightBuffer ) {

			var vertices = this.vertices;

			for ( var i = 0, l = vertices.length; i < l; ++ i ) {

				vertices[ i ].flattenToBuffers( vertexBuffer, normalBuffer, uvBuffer, colorBuffer, skinIndexBuffer, skinWeightBuffer );

			}

		}

	} );

	/**
	 * @constructor
	 */
	function Face() {

		/**
		 * @type {{vertices: {position: THREE.Vector3, normal: THREE.Vector3, uv: THREE.Vector2, skinIndices: THREE.Vector4, skinWeights: THREE.Vector4}[]}[]}
		 */
		this.triangles = [];
		this.materialIndex = 0;

	}

	Object.assign( Face.prototype, {

		copy: function ( target ) {

			var returnVar = target || new Face();

			for ( var i = 0; i < this.triangles.length; ++ i ) {

				this.triangles[ i ].copy( returnVar.triangles[ i ] );

			}

			returnVar.materialIndex = this.materialIndex;

			return returnVar;

		},

		genTrianglesFromVertices: function ( vertexArray ) {

			for ( var i = 2; i < vertexArray.length; ++ i ) {

				var triangle = new Triangle();
				triangle.vertices[ 0 ] = vertexArray[ 0 ];
				triangle.vertices[ 1 ] = vertexArray[ i - 1 ];
				triangle.vertices[ 2 ] = vertexArray[ i ];
				this.triangles.push( triangle );

			}

		},

		flattenToBuffers: function ( vertexBuffer, normalBuffer, uvBuffer, colorBuffer, skinIndexBuffer, skinWeightBuffer, materialIndexBuffer ) {

			var triangles = this.triangles;
			var materialIndex = this.materialIndex;

			for ( var i = 0, l = triangles.length; i < l; ++ i ) {

				triangles[ i ].flattenToBuffers( vertexBuffer, normalBuffer, uvBuffer, colorBuffer, skinIndexBuffer, skinWeightBuffer );
				append( materialIndexBuffer, [ materialIndex, materialIndex, materialIndex ] );

			}

		}

	} );

	/**
	 * @constructor
	 */
	function Geometry() {

		/**
		 * @type {{triangles: {vertices: {position: THREE.Vector3, normal: THREE.Vector3, uv: THREE.Vector2, skinIndices: THREE.Vector4, skinWeights: THREE.Vector4}[]}[], materialIndex: number}[]}
		 */
		this.faces = [];

		/**
		 * @type {{}|THREE.Skeleton}
		 */
		this.skeleton = null;

	}

	Object.assign( Geometry.prototype, {

		/**
		 * @returns	{{vertexBuffer: number[], normalBuffer: number[], uvBuffer: number[], skinIndexBuffer: number[], skinWeightBuffer: number[], materialIndexBuffer: number[]}}
		 */
		flattenToBuffers: function () {

			var vertexBuffer = [];
			var normalBuffer = [];
			var uvBuffer = [];
			var colorBuffer = [];
			var skinIndexBuffer = [];
			var skinWeightBuffer = [];

			var materialIndexBuffer = [];

			var faces = this.faces;

			for ( var i = 0, l = faces.length; i < l; ++ i ) {

				faces[ i ].flattenToBuffers( vertexBuffer, normalBuffer, uvBuffer, colorBuffer, skinIndexBuffer, skinWeightBuffer, materialIndexBuffer );

			}

			return {
				vertexBuffer: vertexBuffer,
				normalBuffer: normalBuffer,
				uvBuffer: uvBuffer,
				colorBuffer: colorBuffer,
				skinIndexBuffer: skinIndexBuffer,
				skinWeightBuffer: skinWeightBuffer,
				materialIndexBuffer: materialIndexBuffer
			};

		}

	} );

	function TextParser() {}

	Object.assign( TextParser.prototype, {

		getPrevNode: function () {

			return this.nodeStack[ this.currentIndent - 2 ];

		},

		getCurrentNode: function () {

			return this.nodeStack[ this.currentIndent - 1 ];

		},

		getCurrentProp: function () {

			return this.currentProp;

		},

		pushStack: function ( node ) {

			this.nodeStack.push( node );
			this.currentIndent += 1;

		},

		popStack: function () {

			this.nodeStack.pop();
			this.currentIndent -= 1;

		},

		setCurrentProp: function ( val, name ) {

			this.currentProp = val;
			this.currentPropName = name;

		},

		// ----------parse ---------------------------------------------------
		parse: function ( text ) {

			this.currentIndent = 0;
			this.allNodes = new FBXTree();
			this.nodeStack = [];
			this.currentProp = [];
			this.currentPropName = '';

			var split = text.split( '\n' );

			for ( var lineNum = 0, lineLength = split.length; lineNum < lineLength; lineNum ++ ) {

				var l = split[ lineNum ];

				// skip comment line
				if ( l.match( /^[\s\t]*;/ ) ) {

					continue;

				}

				// skip empty line
				if ( l.match( /^[\s\t]*$/ ) ) {

					continue;

				}

				// beginning of node
				var beginningOfNodeExp = new RegExp( '^\\t{' + this.currentIndent + '}(\\w+):(.*){', '' );
				var match = l.match( beginningOfNodeExp );

				if ( match ) {

					var nodeName = match[ 1 ].trim().replace( /^"/, '' ).replace( /"$/, '' );
					var nodeAttrs = match[ 2 ].split( ',' );

					for ( var i = 0, l = nodeAttrs.length; i < l; i ++ ) {
						nodeAttrs[ i ] = nodeAttrs[ i ].trim().replace( /^"/, '' ).replace( /"$/, '' );
					}

					this.parseNodeBegin( l, nodeName, nodeAttrs || null );
					continue;

				}

				// node's property
				var propExp = new RegExp( '^\\t{' + ( this.currentIndent ) + '}(\\w+):[\\s\\t\\r\\n](.*)' );
				var match = l.match( propExp );

				if ( match ) {

					var propName = match[ 1 ].replace( /^"/, '' ).replace( /"$/, '' ).trim();
					var propValue = match[ 2 ].replace( /^"/, '' ).replace( /"$/, '' ).trim();

					// for special case: base64 image data follows "Content: ," line
					//	Content: ,
					//	 "iVB..."
					if ( propName === 'Content' && propValue === ',' ) {

						propValue = split[ ++ lineNum ].replace( /"/g, '' ).trim();

					}

					this.parseNodeProperty( l, propName, propValue );
					continue;

				}

				// end of node
				var endOfNodeExp = new RegExp( '^\\t{' + ( this.currentIndent - 1 ) + '}}' );

				if ( l.match( endOfNodeExp ) ) {

					this.nodeEnd();
					continue;

				}

				// for special case,
				//
				//	  Vertices: *8670 {
				//		  a: 0.0356229953467846,13.9599733352661,-0.399196773.....(snip)
				// -0.0612030513584614,13.960485458374,-0.409748703241348,-0.10.....
				// 0.12490539252758,13.7450733184814,-0.454119384288788,0.09272.....
				// 0.0836158767342567,13.5432004928589,-0.435397416353226,0.028.....
				//
				// these case the lines must contiue with previous line
				if ( l.match( /^[^\s\t}]/ ) ) {

					this.parseNodePropertyContinued( l );

				}

			}

			return this.allNodes;

		},

		parseNodeBegin: function ( line, nodeName, nodeAttrs ) {

			// var nodeName = match[1];
			var node = { 'name': nodeName, properties: {}, 'subNodes': {} };
			var attrs = this.parseNodeAttr( nodeAttrs );
			var currentNode = this.getCurrentNode();

			// a top node
			if ( this.currentIndent === 0 ) {

				this.allNodes.add( nodeName, node );

			} else {

				// a subnode

				// already exists subnode, then append it
				if ( nodeName in currentNode.subNodes ) {

					var tmp = currentNode.subNodes[ nodeName ];

					// console.log( "duped entry found\nkey: " + nodeName + "\nvalue: " + propValue );
					if ( this.isFlattenNode( currentNode.subNodes[ nodeName ] ) ) {


						if ( attrs.id === '' ) {

							currentNode.subNodes[ nodeName ] = [];
							currentNode.subNodes[ nodeName ].push( tmp );

						} else {

							currentNode.subNodes[ nodeName ] = {};
							currentNode.subNodes[ nodeName ][ tmp.id ] = tmp;

						}

					}

					if ( attrs.id === '' ) {

						currentNode.subNodes[ nodeName ].push( node );

					} else {

						currentNode.subNodes[ nodeName ][ attrs.id ] = node;

					}

				} else if ( typeof attrs.id === 'number' || attrs.id.match( /^\d+$/ ) ) {

					currentNode.subNodes[ nodeName ] = {};
					currentNode.subNodes[ nodeName ][ attrs.id ] = node;

				} else {

					currentNode.subNodes[ nodeName ] = node;

				}

			}

			// for this		  ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
			// NodeAttribute: 1001463072, "NodeAttribute::", "LimbNode" {
			if ( nodeAttrs ) {

				node.id = attrs.id;
				node.attrName = attrs.name;
				node.attrType = attrs.type;

			}

			this.pushStack( node );

		},

		parseNodeAttr: function ( attrs ) {

			var id = attrs[ 0 ];

			if ( attrs[ 0 ] !== '' ) {

				id = parseInt( attrs[ 0 ] );

				if ( isNaN( id ) ) {

					// PolygonVertexIndex: *16380 {
					id = attrs[ 0 ];

				}

			}

			var name = '', type = '';

			if ( attrs.length > 1 ) {

				name = attrs[ 1 ].replace( /^(\w+)::/, '' );
				type = attrs[ 2 ];

			}

			return { id: id, name: name, type: type };

		},

		parseNodeProperty: function ( line, propName, propValue ) {

			var currentNode = this.getCurrentNode();
			var parentName = currentNode.name;

			// special case parent node's is like "Properties70"
			// these children nodes must treat with careful
			if ( parentName !== undefined ) {

				var propMatch = parentName.match( /Properties(\d)+/ );
				if ( propMatch ) {

					this.parseNodeSpecialProperty( line, propName, propValue );
					return;

				}

			}

			// special case Connections
			if ( propName === 'C' ) {

				var connProps = propValue.split( ',' ).slice( 1 );
				var from = parseInt( connProps[ 0 ] );
				var to = parseInt( connProps[ 1 ] );

				var rest = propValue.split( ',' ).slice( 3 );

				propName = 'connections';
				propValue = [ from, to ];
				append( propValue, rest );

				if ( currentNode.properties[ propName ] === undefined ) {

					currentNode.properties[ propName ] = [];

				}

			}

			// special case Connections
			if ( propName === 'Node' ) {

				var id = parseInt( propValue );
				currentNode.properties.id = id;
				currentNode.id = id;

			}

			// already exists in properties, then append this
			if ( propName in currentNode.properties ) {

				// console.log( "duped entry found\nkey: " + propName + "\nvalue: " + propValue );
				if ( Array.isArray( currentNode.properties[ propName ] ) ) {

					currentNode.properties[ propName ].push( propValue );

				} else {

					currentNode.properties[ propName ] += propValue;

				}

			} else {

				// console.log( propName + ":  " + propValue );
				if ( Array.isArray( currentNode.properties[ propName ] ) ) {

					currentNode.properties[ propName ].push( propValue );

				} else {

					currentNode.properties[ propName ] = propValue;

				}

			}

			this.setCurrentProp( currentNode.properties, propName );

		},

		// TODO:
		parseNodePropertyContinued: function ( line ) {

			this.currentProp[ this.currentPropName ] += line;

		},

		parseNodeSpecialProperty: function ( line, propName, propValue ) {

			// split this
			// P: "Lcl Scaling", "Lcl Scaling", "", "A",1,1,1
			// into array like below
			// ["Lcl Scaling", "Lcl Scaling", "", "A", "1,1,1" ]
			var props = propValue.split( '",' );

			for ( var i = 0, l = props.length; i < l; i ++ ) {
				props[ i ] = props[ i ].trim().replace( /^\"/, '' ).replace( /\s/, '_' );
			}

			var innerPropName = props[ 0 ];
			var innerPropType1 = props[ 1 ];
			var innerPropType2 = props[ 2 ];
			var innerPropFlag = props[ 3 ];
			var innerPropValue = props[ 4 ];

			/*
			if ( innerPropValue === undefined ) {
				innerPropValue = props[3];
			}
			*/

			// cast value in its type
			switch ( innerPropType1 ) {

				case 'int':
					innerPropValue = parseInt( innerPropValue );
					break;

				case 'double':
					innerPropValue = parseFloat( innerPropValue );
					break;

				case 'ColorRGB':
				case 'Vector3D':
					innerPropValue = parseFloatArray( innerPropValue );
					break;

			}

			// CAUTION: these props must append to parent's parent
			this.getPrevNode().properties[ innerPropName ] = {

				'type': innerPropType1,
				'type2': innerPropType2,
				'flag': innerPropFlag,
				'value': innerPropValue

			};

			this.setCurrentProp( this.getPrevNode().properties, innerPropName );

		},

		nodeEnd: function () {

			this.popStack();

		},

		/* ---------------------------------------------------------------- */
		/*		util													  */
		isFlattenNode: function ( node ) {

			return ( 'subNodes' in node && 'properties' in node ) ? true : false;

		}

	} );

	// Binary format specification:
	//   https://code.blender.org/2013/08/fbx-binary-file-format-specification/
	//   https://wiki.rogiken.org/specifications/file-format/fbx/ (more detail but Japanese)
	function BinaryParser() {}

	Object.assign( BinaryParser.prototype, {

		/**
		 * Parses binary data and builds FBXTree as much compatible as possible with the one built by TextParser.
		 * @param {ArrayBuffer} buffer
		 * @returns {THREE.FBXTree}
		 */
		parse: function ( buffer ) {

			var reader = new BinaryReader( buffer );
			reader.skip( 23 ); // skip magic 23 bytes

			var version = reader.getUint32();

			console.log( 'THREE.FBXLoader: FBX binary version: ' + version );

			var allNodes = new FBXTree();

			while ( ! this.endOfContent( reader ) ) {

				var node = this.parseNode( reader, version );
				if( node ===null)
				{
					console.log("break")
					break;
				}
				allNodes.add(node.name, node);
			}
			
			return allNodes;

		},

		/**
		 * Checks if reader has reached the end of content.
		 * @param {BinaryReader} reader
		 * @returns {boolean}
		 */
		endOfContent: function( reader ) {

			// footer size: 160bytes + 16-byte alignment padding
			// - 16bytes: magic
			// - padding til 16-byte alignment (at least 1byte?)
			//   (seems like some exporters embed fixed 15 or 16bytes?)
			// - 4bytes: magic
			// - 4bytes: version
			// - 120bytes: zero
			// - 16bytes: magic
			if ( reader.size() % 16 === 0 ) {

				return ( ( reader.getOffset() + 160 + 16 ) & ~0xf ) >= reader.size();

			} else {

				return reader.getOffset() + 160 + 16 >= reader.size();

			}

		},

		/**
		 * Parses Node as much compatible as possible with the one parsed by TextParser
		 * TODO: could be optimized more?
		 * @param {BinaryReader} reader
		 * @param {number} version
		 * @returns {Object} - Returns an Object as node, or null if NULL-record.
		 */
		parseNode: function ( reader, version ) {

			// The first three data sizes depends on version.
			var endOffset = ( version >= 7500 ) ? reader.getUint64() : reader.getUint32();
			var numProperties = ( version >= 7500 ) ? reader.getUint64() : reader.getUint32();
			var propertyListLen = ( version >= 7500 ) ? reader.getUint64() : reader.getUint32();
			var nameLen = reader.getUint8();
			var name = reader.getString( nameLen );

			// Regards this node as NULL-record if endOffset is zero
			if ( endOffset === 0 ) return null;

			var propertyList = [];

			for ( var i = 0; i < numProperties; i ++ ) {

				propertyList.push( this.parseProperty( reader ) );

			}

			// Regards the first three elements in propertyList as id, attrName, and attrType
			var id = propertyList.length > 0 ? propertyList[ 0 ] : '';
			var attrName = propertyList.length > 1 ? propertyList[ 1 ] : '';
			var attrType = propertyList.length > 2 ? propertyList[ 2 ] : '';

			var subNodes = {};
			var properties = {};

			var isSingleProperty = false;

			// if this node represents just a single property
			// like (name, 0) set or (name2, [0, 1, 2]) set of {name: 0, name2: [0, 1, 2]}
			if ( numProperties === 1 && reader.getOffset() === endOffset ) {

				isSingleProperty = true;

			}

			while ( endOffset > reader.getOffset() ) {

				var node = this.parseNode( reader, version );

				if ( node === null ) continue;

				// special case: child node is single property
				if ( node.singleProperty === true ) {

					var value = node.propertyList[ 0 ];

					if ( Array.isArray( value ) ) {

						// node represents
						//	Vertices: *3 {
						//		a: 0.01, 0.02, 0.03
						//	}
						// of text format here.

						node.properties[ node.name ] = node.propertyList[ 0 ];
						subNodes[ node.name ] = node;

						// Later phase expects single property array is in node.properties.a as String.
						// TODO: optimize
						node.properties.a = value.toString();

					} else {

						// node represents
						// 	Version: 100
						// of text format here.

						properties[ node.name ] = value;

					}

					continue;

				}

				// special case: connections
				if ( name === 'Connections' && node.name === 'C' ) {

					var array = [];

					// node.propertyList would be like
					// ["OO", 111264976, 144038752, "d|x"] (?, from, to, additional values)
					for ( var i = 1, il = node.propertyList.length; i < il; i ++ ) {

						array[ i - 1 ] = node.propertyList[ i ];

					}

					if ( properties.connections === undefined ) {

						properties.connections = [];

					}

					properties.connections.push( array );

					continue;

				}

				// special case: child node is Properties\d+
				if ( node.name.match( /^Properties\d+$/ ) ) {

					// move child node's properties to this node.

					var keys = Object.keys( node.properties );

					for ( var i = 0, il = keys.length; i < il; i ++ ) {

						var key = keys[ i ];
						properties[ key ] = node.properties[ key ];

					}

					continue;

				}

				// special case: properties
				if ( name.match( /^Properties\d+$/ ) && node.name === 'P' ) {

					var innerPropName = node.propertyList[ 0 ];
					var innerPropType1 = node.propertyList[ 1 ];
					var innerPropType2 = node.propertyList[ 2 ];
					var innerPropFlag = node.propertyList[ 3 ];
					var innerPropValue;

					if ( innerPropName.indexOf( 'Lcl ' ) === 0 ) innerPropName = innerPropName.replace( 'Lcl ', 'Lcl_' );
					if ( innerPropType1.indexOf( 'Lcl ' ) === 0 ) innerPropType1 = innerPropType1.replace( 'Lcl ', 'Lcl_' );

					if ( innerPropType1 === 'ColorRGB' || innerPropType1 === 'Vector' ||
						 innerPropType1 === 'Vector3D' || innerPropType1.indexOf( 'Lcl_' ) === 0 ) {

						innerPropValue = [
							node.propertyList[ 4 ],
							node.propertyList[ 5 ],
							node.propertyList[ 6 ]
						];

					} else {

						innerPropValue = node.propertyList[ 4 ];

					}

					if ( innerPropType1.indexOf( 'Lcl_' ) === 0 ) {

						innerPropValue = innerPropValue.toString();

					}

					// this will be copied to parent. see above.
					properties[ innerPropName ] = {

						'type': innerPropType1,
						'type2': innerPropType2,
						'flag': innerPropFlag,
						'value': innerPropValue

					};

					continue;

				}

				// standard case
				// follows TextParser's manner.
				if ( subNodes[ node.name ] === undefined ) {

					if ( typeof node.id === 'number' ) {

						subNodes[ node.name ] = {};
						subNodes[ node.name ][ node.id ] = node;

					} else {

						subNodes[ node.name ] = node;

					}

				} else {

					if ( node.id === '' ) {

						if ( ! Array.isArray( subNodes[ node.name ] ) ) {

							subNodes[ node.name ] = [ subNodes[ node.name ] ];

						}

						subNodes[ node.name ].push( node );

					} else {

						if ( subNodes[ node.name ][ node.id ] === undefined ) {

							subNodes[ node.name ][ node.id ] = node;

						} else {

							// conflict id. irregular?

							if ( ! Array.isArray( subNodes[ node.name ][ node.id ] ) ) {

								subNodes[ node.name ][ node.id ] = [ subNodes[ node.name ][ node.id ] ];

							}

							subNodes[ node.name ][ node.id ].push( node );

						}

					}

				}

			}

			return {

				singleProperty: isSingleProperty,
				id: id,
				attrName: attrName,
				attrType: attrType,
				name: name,
				properties: properties,
				propertyList: propertyList, // raw property list, would be used by parent
				subNodes: subNodes

			};

		},

		parseProperty: function ( reader ) {

			var type = reader.getChar();

			switch ( type ) {

				case 'F':
					return reader.getFloat32();

				case 'D':
					return reader.getFloat64();

				case 'L':
					return reader.getInt64();

				case 'I':
					return reader.getInt32();

				case 'Y':
					return reader.getInt16();

				case 'C':
					return reader.getBoolean();

				case 'f':
				case 'd':
				case 'l':
				case 'i':
				case 'b':

					var arrayLength = reader.getUint32();
					var encoding = reader.getUint32(); // 0: non-compressed, 1: compressed
					var compressedLength = reader.getUint32();

					if ( encoding === 0 ) {

						switch ( type ) {

							case 'f':
								return reader.getFloat32Array( arrayLength );

							case 'd':
								return reader.getFloat64Array( arrayLength );

							case 'l':
								return reader.getInt64Array( arrayLength );

							case 'i':
								return reader.getInt32Array( arrayLength );

							case 'b':
								return reader.getBooleanArray( arrayLength );

						}

					}

					if ( window.Zlib === undefined ) {

						// throw new Error( 'THREE.FBXLoader: External library Inflate.min.js required, obtain or import from https://github.com/imaya/zlib.js' );

					}

					var inflate = new threeZlib.Zlib.Inflate( new Uint8Array( reader.getArrayBuffer( compressedLength ) ) );
					var reader2 = new BinaryReader( inflate.decompress().buffer );

					switch ( type ) {

						case 'f':
							return reader2.getFloat32Array( arrayLength );

						case 'd':
							return reader2.getFloat64Array( arrayLength );

						case 'l':
							return reader2.getInt64Array( arrayLength );

						case 'i':
							return reader2.getInt32Array( arrayLength );

						case 'b':
							return reader2.getBooleanArray( arrayLength );

					}

				case 'S':
					var length = reader.getUint32();
					return reader.getString( length );

				case 'R':
					var length = reader.getUint32();
					return reader.getArrayBuffer( length );

				default:
					throw new Error( 'THREE.FBXLoader: Unknown property type ' + type );

			}

		}

	} );


	function BinaryReader( buffer, littleEndian ) {

		this.dv = new DataView( buffer );
		this.offset = 0;
		this.littleEndian = ( littleEndian !== undefined ) ? littleEndian : true;

	}

	Object.assign( BinaryReader.prototype, {

		getOffset: function () {

			return this.offset;

		},

		size: function () {

			return this.dv.buffer.byteLength;

		},

		skip: function ( length ) {

			this.offset += length;

		},

		// seems like true/false representation depends on exporter.
		//   true: 1 or 'Y'(=0x59), false: 0 or 'T'(=0x54)
		// then sees LSB.
		getBoolean: function () {

			return ( this.getUint8() & 1 ) === 1;

		},

		getBooleanArray: function ( size ) {

			var a = [];

			for ( var i = 0; i < size; i ++ ) {

				a.push( this.getBoolean() );

			}

			return a;

		},

		getInt8: function () {

			var value = this.dv.getInt8( this.offset );
			this.offset += 1;
			return value;

		},

		getInt8Array: function ( size ) {

			var a = [];

			for ( var i = 0; i < size; i ++ ) {

				a.push( this.getInt8() );

			}

			return a;

		},

		getUint8: function () {

			var value = this.dv.getUint8( this.offset );
			this.offset += 1;
			return value;

		},

		getUint8Array: function ( size ) {

			var a = [];

			for ( var i = 0; i < size; i ++ ) {

				a.push( this.getUint8() );

			}

			return a;

		},

		getInt16: function () {

			var value = this.dv.getInt16( this.offset, this.littleEndian );
			this.offset += 2;
			return value;

		},

		getInt16Array: function ( size ) {

			var a = [];

			for ( var i = 0; i < size; i ++ ) {

				a.push( this.getInt16() );

			}

			return a;

		},

		getUint16: function () {

			var value = this.dv.getUint16( this.offset, this.littleEndian );
			this.offset += 2;
			return value;

		},

		getUint16Array: function ( size ) {

			var a = [];

			for ( var i = 0; i < size; i ++ ) {

				a.push( this.getUint16() );

			}

			return a;

		},

		getInt32: function () {

			var value = this.dv.getInt32( this.offset, this.littleEndian );
			this.offset += 4;
			return value;

		},

		getInt32Array: function ( size ) {

			var a = [];

			for ( var i = 0; i < size; i ++ ) {

				a.push( this.getInt32() );

			}

			return a;

		},

		getUint32: function () {

			var value = this.dv.getUint32( this.offset, this.littleEndian );
			this.offset += 4;
			return value;

		},

		getUint32Array: function ( size ) {

			var a = [];

			for ( var i = 0; i < size; i ++ ) {

				a.push( this.getUint32() );

			}

			return a;

		},

		// JavaScript doesn't support 64-bit integer so attempting to calculate by ourselves.
		// 1 << 32 will return 1 so using multiply operation instead here.
		// There'd be a possibility that this method returns wrong value if the value
		// is out of the range between Number.MAX_SAFE_INTEGER and Number.MIN_SAFE_INTEGER.
		// TODO: safely handle 64-bit integer
		getInt64: function () {

			var low, high;

			if ( this.littleEndian ) {

				low = this.getUint32();
				high = this.getUint32();

			} else {

				high = this.getUint32();
				low = this.getUint32();

			}

			// calculate negative value
			if ( high & 0x80000000 ) {

				high = ~high & 0xFFFFFFFF;
				low = ~low & 0xFFFFFFFF;

				if ( low === 0xFFFFFFFF ) high = ( high + 1 ) & 0xFFFFFFFF;

				low = ( low + 1 ) & 0xFFFFFFFF;

				return - ( high * 0x100000000 + low );

			}

			return high * 0x100000000 + low;

		},

		getInt64Array: function ( size ) {

			var a = [];

			for ( var i = 0; i < size; i ++ ) {

				a.push( this.getInt64() );

			}

			return a;

		},

		// Note: see getInt64() comment
		getUint64: function () {

			var low, high;

			if ( this.littleEndian ) {

				low = this.getUint32();
				high = this.getUint32();

			} else {

				high = this.getUint32();
				low = this.getUint32();

			}

			return high * 0x100000000 + low;

		},

		getUint64Array: function ( size ) {

			var a = [];

			for ( var i = 0; i < size; i ++ ) {

				a.push( this.getUint64() );

			}

			return a;

		},

		getFloat32: function () {

			var value = this.dv.getFloat32( this.offset, this.littleEndian );
			this.offset += 4;
			return value;

		},

		getFloat32Array: function ( size ) {

			var a = [];

			for ( var i = 0; i < size; i ++ ) {

				a.push( this.getFloat32() );

			}

			return a;

		},

		getFloat64: function () {

			var value = this.dv.getFloat64( this.offset, this.littleEndian );
			this.offset += 8;
			return value;

		},

		getFloat64Array: function ( size ) {

			var a = [];

			for ( var i = 0; i < size; i ++ ) {

				a.push( this.getFloat64() );

			}

			return a;

		},

		getArrayBuffer: function ( size ) {

			var value = this.dv.buffer.slice( this.offset, this.offset + size );
			this.offset += size;
			return value;

		},

		getChar: function () {

			return String.fromCharCode( this.getUint8() );

		},

		getString: function ( size ) {

			var s = '';

			while ( size > 0 ) {

				var value = this.getUint8();
				size--;

				if ( value === 0 ) break;

				s += String.fromCharCode( value );

			}

			this.skip( size );

			return s;

		}

	} );


	function FBXTree() {}

	Object.assign( FBXTree.prototype, {

		add: function ( key, val ) {

			this[ key ] = val;

		},

		searchConnectionParent: function ( id ) {

			if ( this.__cache_search_connection_parent === undefined ) {

				this.__cache_search_connection_parent = [];

			}

			if ( this.__cache_search_connection_parent[ id ] !== undefined ) {

				return this.__cache_search_connection_parent[ id ];

			} else {

				this.__cache_search_connection_parent[ id ] = [];

			}

			var conns = this.Connections.properties.connections;

			var results = [];
			for ( var i = 0; i < conns.length; ++ i ) {

				if ( conns[ i ][ 0 ] == id ) {

					// 0 means scene root
					var res = conns[ i ][ 1 ] === 0 ? - 1 : conns[ i ][ 1 ];
					results.push( res );

				}

			}

			if ( results.length > 0 ) {

				append( this.__cache_search_connection_parent[ id ], results );
				return results;

			} else {

				this.__cache_search_connection_parent[ id ] = [ - 1 ];
				return [ - 1 ];

			}

		},

		searchConnectionChildren: function ( id ) {

			if ( this.__cache_search_connection_children === undefined ) {

				this.__cache_search_connection_children = [];

			}

			if ( this.__cache_search_connection_children[ id ] !== undefined ) {

				return this.__cache_search_connection_children[ id ];

			} else {

				this.__cache_search_connection_children[ id ] = [];

			}

			var conns = this.Connections.properties.connections;

			var res = [];
			for ( var i = 0; i < conns.length; ++ i ) {

				if ( conns[ i ][ 1 ] == id ) {

					// 0 means scene root
					res.push( conns[ i ][ 0 ] === 0 ? - 1 : conns[ i ][ 0 ] );
					// there may more than one kid, then search to the end

				}

			}

			if ( res.length > 0 ) {

				append( this.__cache_search_connection_children[ id ], res );
				return res;

			} else {

				this.__cache_search_connection_children[ id ] = [ ];
				return [ ];

			}

		},

		searchConnectionType: function ( id, to ) {

			var key = id + ',' + to; // TODO: to hash
			if ( this.__cache_search_connection_type === undefined ) {

				this.__cache_search_connection_type = {};

			}

			if ( this.__cache_search_connection_type[ key ] !== undefined ) {

				return this.__cache_search_connection_type[ key ];

			} else {

				this.__cache_search_connection_type[ key ] = '';

			}

			var conns = this.Connections.properties.connections;

			for ( var i = 0; i < conns.length; ++ i ) {

				if ( conns[ i ][ 0 ] == id && conns[ i ][ 1 ] == to ) {

					// 0 means scene root
					this.__cache_search_connection_type[ key ] = conns[ i ][ 2 ];
					return conns[ i ][ 2 ];

				}

			}

			this.__cache_search_connection_type[ id ] = null;
			return null;

		}

	} );


	/**
	 * @param {ArrayBuffer} buffer
	 * @returns {boolean}
	 */
	function isFbxFormatBinary( buffer ) {

		var CORRECT = 'Kaydara FBX Binary  \0';

		return buffer.byteLength >= CORRECT.length && CORRECT === convertArrayBufferToString( buffer, 0, CORRECT.length );

	}

	/**
	 * @returns {boolean}
	 */
	function isFbxFormatASCII( text ) {

		var CORRECT = [ 'K', 'a', 'y', 'd', 'a', 'r', 'a', '\\', 'F', 'B', 'X', '\\', 'B', 'i', 'n', 'a', 'r', 'y', '\\', '\\' ];

		var cursor = 0;

		function read( offset ) {

			var result = text[ offset - 1 ];
			text = text.slice( cursor + offset );
			cursor ++;
			return result;

		}

		for ( var i = 0; i < CORRECT.length; ++ i ) {

			var num = read( 1 );
			if ( num === CORRECT[ i ] ) {

				return false;

			}

		}

		return true;

	}

	/**
	 * @returns {number}
	 */
	function getFbxVersion( text ) {

		var versionRegExp = /FBXVersion: (\d+)/;
		var match = text.match( versionRegExp );
		if ( match ) {

			var version = parseInt( match[ 1 ] );
			return version;

		}
		throw new Error( 'THREE.FBXLoader: Cannot find the version number for the file given.' );

	}

	/**
	 * Converts FBX ticks into real time seconds.
	 * @param {number} time - FBX tick timestamp to convert.
	 * @returns {number} - FBX tick in real world time.
	 */
	function convertFBXTimeToSeconds( time ) {

		// Constant is FBX ticks per second.
		return time / 46186158000;

	}

	/**
	 * Parses comma separated list of float numbers and returns them in an array.
	 * @example
	 * // Returns [ 5.6, 9.4, 2.5, 1.4 ]
	 * parseFloatArray( "5.6,9.4,2.5,1.4" )
	 * @returns {number[]}
	 */
	function parseFloatArray( string ) {

		var array = string.split( ',' );

		for ( var i = 0, l = array.length; i < l; i ++ ) {

			array[ i ] = parseFloat( array[ i ] );

		}

		return array;

	}

	/**
	 * Parses comma separated list of int numbers and returns them in an array.
	 * @example
	 * // Returns [ 5, 8, 2, 3 ]
	 * parseFloatArray( "5,8,2,3" )
	 * @returns {number[]}
	 */
	function parseIntArray( string ) {

		var array = string.split( ',' );

		for ( var i = 0, l = array.length; i < l; i ++ ) {

			array[ i ] = parseInt( array[ i ] );

		}

		return array;

	}

	/**
	 * Parses Vector3 property from FBXTree.  Property is given as .value.x, .value.y, etc.
	 * @param {FBXVector3} property - Property to parse as Vector3.
	 * @returns {THREE.Vector3}
	 */
	function parseVector3( property ) {

		return new THREE.Vector3().fromArray( property.value );

	}

	/**
	 * Parses Color property from FBXTree.  Property is given as .value.x, .value.y, etc.
	 * @param {FBXVector3} property - Property to parse as Color.
	 * @returns {THREE.Color}
	 */
	function parseColor( property ) {

		return new THREE.Color().fromArray( property.value );

	}

	function parseMatrixArray( floatString ) {

		return new THREE.Matrix4().fromArray( parseFloatArray( floatString ) );

	}

	/**
	 * Converts ArrayBuffer to String.
	 * @param {ArrayBuffer} buffer
	 * @param {number} from
	 * @param {number} to
	 * @returns {String}
	 */
	function convertArrayBufferToString( buffer, from, to ) {

		if ( from === undefined ) from = 0;
		if ( to === undefined ) to = buffer.byteLength;

		var array = new Uint8Array( buffer, from, to );

		if ( window.TextDecoder !== undefined ) {

			return new TextDecoder().decode( array );

		}

		var s = '';

		for ( var i = 0, il = array.length; i < il; i ++ ) {

			s += String.fromCharCode( array[ i ] );

		}

		return s;

	}

	/**
	 * Converts number from degrees into radians.
	 * @param {number} value
	 * @returns {number}
	 */
	function degreeToRadian( value ) {

		return value * DEG2RAD;

	}

	var DEG2RAD = Math.PI / 180;

	//

	function findIndex( array, func ) {

		for ( var i = 0, l = array.length; i < l; i ++ ) {

			if ( func( array[ i ] ) ) return i;

		}

		return -1;

	}

	function append( a, b ) {

		for ( var i = 0, j = a.length, l = b.length; i < l; i ++, j ++ ) {

			a[ j ] = b[ i ];

		}

	}

	function slice( a, b, from, to ) {

		for ( var i = from, j = 0; i < to; i ++, j ++ ) {

			a[ j ] = b[ i ];

		}

		return a;

	}

} )();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 25 */
/***/ (function(module, exports) {

/** @license zlib.js 2012 - imaya [ https://github.com/imaya/zlib.js ] The MIT License */(function() {'use strict';var m=this;function q(c,d){var a=c.split("."),b=m;!(a[0]in b)&&b.execScript&&b.execScript("var "+a[0]);for(var e;a.length&&(e=a.shift());)!a.length&&void 0!==d?b[e]=d:b=b[e]?b[e]:b[e]={}};var s="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Uint32Array&&"undefined"!==typeof DataView;function t(c){var d=c.length,a=0,b=Number.POSITIVE_INFINITY,e,f,g,h,k,l,p,n,r,K;for(n=0;n<d;++n)c[n]>a&&(a=c[n]),c[n]<b&&(b=c[n]);e=1<<a;f=new (s?Uint32Array:Array)(e);g=1;h=0;for(k=2;g<=a;){for(n=0;n<d;++n)if(c[n]===g){l=0;p=h;for(r=0;r<g;++r)l=l<<1|p&1,p>>=1;K=g<<16|n;for(r=l;r<e;r+=k)f[r]=K;++h}++g;h<<=1;k<<=1}return[f,a,b]};function u(c,d){this.g=[];this.h=32768;this.d=this.f=this.a=this.l=0;this.input=s?new Uint8Array(c):c;this.m=!1;this.i=v;this.s=!1;if(d||!(d={}))d.index&&(this.a=d.index),d.bufferSize&&(this.h=d.bufferSize),d.bufferType&&(this.i=d.bufferType),d.resize&&(this.s=d.resize);switch(this.i){case w:this.b=32768;this.c=new (s?Uint8Array:Array)(32768+this.h+258);break;case v:this.b=0;this.c=new (s?Uint8Array:Array)(this.h);this.e=this.A;this.n=this.w;this.j=this.z;break;default:throw Error("invalid inflate mode");
}}var w=0,v=1,x={u:w,t:v};
u.prototype.k=function(){for(;!this.m;){var c=y(this,3);c&1&&(this.m=!0);c>>>=1;switch(c){case 0:var d=this.input,a=this.a,b=this.c,e=this.b,f=d.length,g=void 0,h=void 0,k=b.length,l=void 0;this.d=this.f=0;if(a+1>=f)throw Error("invalid uncompressed block header: LEN");g=d[a++]|d[a++]<<8;if(a+1>=f)throw Error("invalid uncompressed block header: NLEN");h=d[a++]|d[a++]<<8;if(g===~h)throw Error("invalid uncompressed block header: length verify");if(a+g>d.length)throw Error("input buffer is broken");switch(this.i){case w:for(;e+
g>b.length;){l=k-e;g-=l;if(s)b.set(d.subarray(a,a+l),e),e+=l,a+=l;else for(;l--;)b[e++]=d[a++];this.b=e;b=this.e();e=this.b}break;case v:for(;e+g>b.length;)b=this.e({p:2});break;default:throw Error("invalid inflate mode");}if(s)b.set(d.subarray(a,a+g),e),e+=g,a+=g;else for(;g--;)b[e++]=d[a++];this.a=a;this.b=e;this.c=b;break;case 1:this.j(z,A);break;case 2:B(this);break;default:throw Error("unknown BTYPE: "+c);}}return this.n()};
var C=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],D=s?new Uint16Array(C):C,E=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,258,258],F=s?new Uint16Array(E):E,G=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0],H=s?new Uint8Array(G):G,I=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],J=s?new Uint16Array(I):I,L=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,
13],M=s?new Uint8Array(L):L,N=new (s?Uint8Array:Array)(288),O,P;O=0;for(P=N.length;O<P;++O)N[O]=143>=O?8:255>=O?9:279>=O?7:8;var z=t(N),Q=new (s?Uint8Array:Array)(30),R,S;R=0;for(S=Q.length;R<S;++R)Q[R]=5;var A=t(Q);function y(c,d){for(var a=c.f,b=c.d,e=c.input,f=c.a,g=e.length,h;b<d;){if(f>=g)throw Error("input buffer is broken");a|=e[f++]<<b;b+=8}h=a&(1<<d)-1;c.f=a>>>d;c.d=b-d;c.a=f;return h}
function T(c,d){for(var a=c.f,b=c.d,e=c.input,f=c.a,g=e.length,h=d[0],k=d[1],l,p;b<k&&!(f>=g);)a|=e[f++]<<b,b+=8;l=h[a&(1<<k)-1];p=l>>>16;c.f=a>>p;c.d=b-p;c.a=f;return l&65535}
function B(c){function d(a,c,b){var d,e=this.q,f,g;for(g=0;g<a;)switch(d=T(this,c),d){case 16:for(f=3+y(this,2);f--;)b[g++]=e;break;case 17:for(f=3+y(this,3);f--;)b[g++]=0;e=0;break;case 18:for(f=11+y(this,7);f--;)b[g++]=0;e=0;break;default:e=b[g++]=d}this.q=e;return b}var a=y(c,5)+257,b=y(c,5)+1,e=y(c,4)+4,f=new (s?Uint8Array:Array)(D.length),g,h,k,l;for(l=0;l<e;++l)f[D[l]]=y(c,3);if(!s){l=e;for(e=f.length;l<e;++l)f[D[l]]=0}g=t(f);h=new (s?Uint8Array:Array)(a);k=new (s?Uint8Array:Array)(b);c.q=0;
c.j(t(d.call(c,a,g,h)),t(d.call(c,b,g,k)))}u.prototype.j=function(c,d){var a=this.c,b=this.b;this.o=c;for(var e=a.length-258,f,g,h,k;256!==(f=T(this,c));)if(256>f)b>=e&&(this.b=b,a=this.e(),b=this.b),a[b++]=f;else{g=f-257;k=F[g];0<H[g]&&(k+=y(this,H[g]));f=T(this,d);h=J[f];0<M[f]&&(h+=y(this,M[f]));b>=e&&(this.b=b,a=this.e(),b=this.b);for(;k--;)a[b]=a[b++-h]}for(;8<=this.d;)this.d-=8,this.a--;this.b=b};
u.prototype.z=function(c,d){var a=this.c,b=this.b;this.o=c;for(var e=a.length,f,g,h,k;256!==(f=T(this,c));)if(256>f)b>=e&&(a=this.e(),e=a.length),a[b++]=f;else{g=f-257;k=F[g];0<H[g]&&(k+=y(this,H[g]));f=T(this,d);h=J[f];0<M[f]&&(h+=y(this,M[f]));b+k>e&&(a=this.e(),e=a.length);for(;k--;)a[b]=a[b++-h]}for(;8<=this.d;)this.d-=8,this.a--;this.b=b};
u.prototype.e=function(){var c=new (s?Uint8Array:Array)(this.b-32768),d=this.b-32768,a,b,e=this.c;if(s)c.set(e.subarray(32768,c.length));else{a=0;for(b=c.length;a<b;++a)c[a]=e[a+32768]}this.g.push(c);this.l+=c.length;if(s)e.set(e.subarray(d,d+32768));else for(a=0;32768>a;++a)e[a]=e[d+a];this.b=32768;return e};
u.prototype.A=function(c){var d,a=this.input.length/this.a+1|0,b,e,f,g=this.input,h=this.c;c&&("number"===typeof c.p&&(a=c.p),"number"===typeof c.v&&(a+=c.v));2>a?(b=(g.length-this.a)/this.o[2],f=258*(b/2)|0,e=f<h.length?h.length+f:h.length<<1):e=h.length*a;s?(d=new Uint8Array(e),d.set(h)):d=h;return this.c=d};
u.prototype.n=function(){var c=0,d=this.c,a=this.g,b,e=new (s?Uint8Array:Array)(this.l+(this.b-32768)),f,g,h,k;if(0===a.length)return s?this.c.subarray(32768,this.b):this.c.slice(32768,this.b);f=0;for(g=a.length;f<g;++f){b=a[f];h=0;for(k=b.length;h<k;++h)e[c++]=b[h]}f=32768;for(g=this.b;f<g;++f)e[c++]=d[f];this.g=[];return this.buffer=e};
u.prototype.w=function(){var c,d=this.b;s?this.s?(c=new Uint8Array(d),c.set(this.c.subarray(0,d))):c=this.c.subarray(0,d):(this.c.length>d&&(this.c.length=d),c=this.c);return this.buffer=c};function U(c,d){var a,b;this.input=c;this.a=0;if(d||!(d={}))d.index&&(this.a=d.index),d.verify&&(this.B=d.verify);a=c[this.a++];b=c[this.a++];switch(a&15){case V:this.method=V;break;default:throw Error("unsupported compression method");}if(0!==((a<<8)+b)%31)throw Error("invalid fcheck flag:"+((a<<8)+b)%31);if(b&32)throw Error("fdict flag is not supported");this.r=new u(c,{index:this.a,bufferSize:d.bufferSize,bufferType:d.bufferType,resize:d.resize})}
U.prototype.k=function(){var c=this.input,d,a;d=this.r.k();this.a=this.r.a;if(this.B){a=(c[this.a++]<<24|c[this.a++]<<16|c[this.a++]<<8|c[this.a++])>>>0;var b=d;if("string"===typeof b){var e=b.split(""),f,g;f=0;for(g=e.length;f<g;f++)e[f]=(e[f].charCodeAt(0)&255)>>>0;b=e}for(var h=1,k=0,l=b.length,p,n=0;0<l;){p=1024<l?1024:l;l-=p;do h+=b[n++],k+=h;while(--p);h%=65521;k%=65521}if(a!==(k<<16|h)>>>0)throw Error("invalid adler-32 checksum");}return d};var V=8;q("Zlib.Inflate",U);q("Zlib.Inflate.prototype.decompress",U.prototype.k);var W={ADAPTIVE:x.t,BLOCK:x.u},X,Y,Z,$;if(Object.keys)X=Object.keys(W);else for(Y in X=[],Z=0,W)X[Z++]=Y;Z=0;for($=X.length;Z<$;++Z)Y=X[Z],q("Zlib.Inflate.BufferType."+Y,W[Y]);}).call(this);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var THREE = __webpack_require__(0);
exports.ColorPalette = [
    [255, 0, 0, 255],
    //[255, 255, 255, 255],//----- 0 - ByBlock - White
    [255, 0, 0, 255],
    [255, 255, 0, 255],
    [0, 255, 0, 255],
    [0, 255, 255, 255],
    [0, 0, 255, 255],
    [255, 0, 255, 255],
    // [255, 0, 0, 255],    //----- 7 - More red Red
    // [255, 0, 0, 255],    //----- 8 - More red Red
    // [255, 0, 0, 255],    //----- 9 - More red Red
    [255, 255, 255, 255],
    [255, 255, 255, 255],
    [255, 255, 255, 255],
    [255, 0, 0, 255],
    [255, 127, 127, 255],
    [165, 0, 0, 255],
    [165, 82, 82, 255],
    [127, 0, 0, 255],
    [127, 63, 63, 255],
    [76, 0, 0, 255],
    [76, 38, 38, 255],
    [38, 0, 0, 255],
    [38, 19, 19, 255],
    [255, 63, 0, 255],
    [255, 159, 127, 255],
    [165, 41, 0, 255],
    [165, 103, 82, 255],
    [127, 31, 0, 255],
    [127, 79, 63, 255],
    [76, 19, 0, 255],
    [76, 47, 38, 255],
    [38, 9, 0, 255],
    [38, 23, 19, 255],
    [255, 127, 0, 255],
    [255, 191, 127, 255],
    [165, 82, 0, 255],
    [165, 124, 82, 255],
    [127, 63, 0, 255],
    [127, 95, 63, 255],
    [76, 38, 0, 255],
    [76, 57, 38, 255],
    [38, 19, 0, 255],
    [38, 28, 19, 255],
    [255, 191, 0, 255],
    [255, 223, 127, 255],
    [165, 124, 0, 255],
    [165, 145, 82, 255],
    [127, 95, 0, 255],
    [127, 111, 63, 255],
    [76, 57, 0, 255],
    [76, 66, 38, 255],
    [38, 28, 0, 255],
    [38, 33, 19, 255],
    [255, 255, 0, 255],
    [255, 255, 127, 255],
    [165, 165, 0, 255],
    [165, 165, 82, 255],
    [127, 127, 0, 255],
    [127, 127, 63, 255],
    [76, 76, 0, 255],
    [76, 76, 38, 255],
    [38, 38, 0, 255],
    [38, 38, 19, 255],
    [191, 255, 0, 255],
    [223, 255, 127, 255],
    [124, 165, 0, 255],
    [145, 165, 82, 255],
    [95, 127, 0, 255],
    [111, 127, 63, 255],
    [57, 76, 0, 255],
    [66, 76, 38, 255],
    [28, 38, 0, 255],
    [33, 38, 19, 255],
    [127, 255, 0, 255],
    [191, 255, 127, 255],
    [82, 165, 0, 255],
    [124, 165, 82, 255],
    [63, 127, 0, 255],
    [95, 127, 63, 255],
    [38, 76, 0, 255],
    [57, 76, 38, 255],
    [19, 38, 0, 255],
    [28, 38, 19, 255],
    [63, 255, 0, 255],
    [159, 255, 127, 255],
    [41, 165, 0, 255],
    [103, 165, 82, 255],
    [31, 127, 0, 255],
    [79, 127, 63, 255],
    [19, 76, 0, 255],
    [47, 76, 38, 255],
    [9, 38, 0, 255],
    [23, 38, 19, 255],
    [0, 255, 0, 255],
    [127, 255, 127, 255],
    [0, 165, 0, 255],
    [82, 165, 82, 255],
    [0, 127, 0, 255],
    [63, 127, 63, 255],
    [0, 76, 0, 255],
    [38, 76, 38, 255],
    [0, 38, 0, 255],
    [19, 38, 19, 255],
    [0, 255, 63, 255],
    [127, 255, 159, 255],
    [0, 165, 41, 255],
    [82, 165, 103, 255],
    [0, 127, 31, 255],
    [63, 127, 79, 255],
    [0, 76, 19, 255],
    [38, 76, 47, 255],
    [0, 38, 9, 255],
    [19, 38, 23, 255],
    [0, 255, 127, 255],
    [127, 255, 191, 255],
    [0, 165, 82, 255],
    [82, 165, 124, 255],
    [0, 127, 63, 255],
    [63, 127, 95, 255],
    [0, 76, 38, 255],
    [38, 76, 57, 255],
    [0, 38, 19, 255],
    [19, 38, 28, 255],
    [0, 255, 191, 255],
    [127, 255, 223, 255],
    [0, 165, 124, 255],
    [82, 165, 145, 255],
    [0, 127, 95, 255],
    [63, 127, 111, 255],
    [0, 76, 57, 255],
    [38, 76, 66, 255],
    [0, 38, 28, 255],
    [19, 38, 33, 255],
    [0, 255, 255, 255],
    [127, 255, 255, 255],
    [0, 165, 165, 255],
    [82, 165, 165, 255],
    [0, 127, 127, 255],
    [63, 127, 127, 255],
    [0, 76, 76, 255],
    [38, 76, 76, 255],
    [0, 38, 38, 255],
    [19, 38, 38, 255],
    [0, 191, 255, 255],
    [127, 223, 255, 255],
    [0, 124, 165, 255],
    [82, 145, 165, 255],
    [0, 95, 127, 255],
    [63, 111, 127, 255],
    [0, 57, 76, 255],
    [38, 66, 76, 255],
    [0, 28, 38, 255],
    [19, 33, 38, 255],
    [0, 127, 255, 255],
    [127, 191, 255, 255],
    [0, 82, 165, 255],
    [82, 124, 165, 255],
    [0, 63, 127, 255],
    [63, 95, 127, 255],
    [0, 38, 76, 255],
    [38, 57, 76, 255],
    [0, 19, 38, 255],
    [19, 28, 38, 255],
    [0, 63, 255, 255],
    [127, 159, 255, 255],
    [0, 41, 165, 255],
    [82, 103, 165, 255],
    [0, 31, 127, 255],
    [63, 79, 127, 255],
    [0, 19, 76, 255],
    [38, 47, 76, 255],
    [0, 9, 38, 255],
    [19, 23, 38, 255],
    [0, 0, 255, 255],
    [127, 127, 255, 255],
    [0, 0, 165, 255],
    [82, 82, 165, 255],
    [0, 0, 127, 255],
    [63, 63, 127, 255],
    [0, 0, 76, 255],
    [38, 38, 76, 255],
    [0, 0, 38, 255],
    [19, 19, 38, 255],
    [63, 0, 255, 255],
    [159, 127, 255, 255],
    [41, 0, 165, 255],
    [103, 82, 165, 255],
    [31, 0, 127, 255],
    [79, 63, 127, 255],
    [19, 0, 76, 255],
    [47, 38, 76, 255],
    [9, 0, 38, 255],
    [23, 19, 38, 255],
    [127, 0, 255, 255],
    [191, 127, 255, 255],
    [82, 0, 165, 255],
    [124, 82, 165, 255],
    [63, 0, 127, 255],
    [95, 63, 127, 255],
    [38, 0, 76, 255],
    [57, 38, 76, 255],
    [19, 0, 38, 255],
    [28, 19, 38, 255],
    [191, 0, 255, 255],
    [223, 127, 255, 255],
    [124, 0, 165, 255],
    [145, 82, 165, 255],
    [95, 0, 127, 255],
    [111, 63, 127, 255],
    [57, 0, 76, 255],
    [66, 38, 76, 255],
    [28, 0, 38, 255],
    [33, 19, 38, 255],
    [255, 0, 255, 255],
    [255, 127, 255, 255],
    [165, 0, 165, 255],
    [165, 82, 165, 255],
    [127, 0, 127, 255],
    [127, 63, 127, 255],
    [76, 0, 76, 255],
    [76, 38, 76, 255],
    [38, 0, 38, 255],
    [38, 19, 38, 255],
    [255, 0, 191, 255],
    [255, 127, 223, 255],
    [165, 0, 124, 255],
    [165, 82, 145, 255],
    [127, 0, 95, 255],
    [127, 63, 111, 255],
    [76, 0, 57, 255],
    [76, 38, 66, 255],
    [38, 0, 28, 255],
    [38, 19, 33, 255],
    [255, 0, 127, 255],
    [255, 127, 191, 255],
    [165, 0, 82, 255],
    [165, 82, 124, 255],
    [127, 0, 63, 255],
    [127, 63, 95, 255],
    [76, 0, 38, 255],
    [76, 38, 57, 255],
    [38, 0, 19, 255],
    [38, 19, 28, 255],
    [255, 0, 63, 255],
    [255, 127, 159, 255],
    [165, 0, 41, 255],
    [165, 82, 103, 255],
    [127, 0, 31, 255],
    [127, 63, 79, 255],
    [76, 0, 19, 255],
    [76, 38, 47, 255],
    [38, 0, 9, 255],
    [38, 19, 23, 255],
    [84, 84, 84, 255],
    [118, 118, 118, 255],
    [152, 152, 152, 255],
    [186, 186, 186, 255],
    [220, 220, 220, 255],
    [255, 255, 255, 255],
    [255, 255, 255, 255] //----- ByLayer - White
];
var colorMatBuff = new Map();
function GetColorIndex(index) {
    if (colorMatBuff.has(index)) {
        return colorMatBuff.get(index);
    }
    var colorRgb = exports.ColorPalette[index];
    var colorx = new THREE.Color(colorRgb[0], colorRgb[1], colorRgb[2]);
    console.log(colorx.getHex());
    var mat = new THREE.MeshStandardMaterial({
        color: colorx,
        side: THREE.DoubleSide,
        roughness: 0.7,
        bumpScale: 0.2,
        metalness: 0.8
    });
    colorMatBuff.set(index, mat);
    return mat;
}
exports.GetColorIndex = GetColorIndex;
function GetColorFormIndex(index) {
    var colorRgb = exports.ColorPalette[index];
    var colorx = new THREE.Color(colorRgb[0], colorRgb[1], colorRgb[2]);
    return colorx;
}
exports.GetColorFormIndex = GetColorFormIndex;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function SetMaterial(obj, material) {
    if (obj.hasOwnProperty("material")) {
        obj["material"] = material;
        obj.castShadow = true;
        obj.receiveShadow = true;
    }
    else if (obj.children.length > 0) {
        obj.children.forEach(function (o) {
            SetMaterial(o, material);
        });
    }
}
exports.SetMaterial = SetMaterial;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(31)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js??ref--3-2!./style.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/less-loader/dist/cjs.js??ref--3-2!./style.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(undefined);
// imports


// module
exports.push([module.i, "body {\n  font-family: sans-serif;\n  font-size: 11px;\n  overflow: hidden;\n}\nhtml,\nbody {\n  background: gray;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\n.helvetica {\n  font-family: 'Helvetica Neue Light', HelveticaNeue-Light, 'Helvetica Neue', Helvetica, sans-serif;\n}\n.mono {\n  font-family: Monaco, monospace;\n}\n.sans-serif {\n  font-family: sans-serif;\n}\n.logo {\n  color: #bbb;\n  font-size: 16px;\n  padding: 8px 0 0 10px;\n  cursor: alias;\n}\n.logo sup {\n  font-size: 9px;\n  font-style: italic;\n}\n.panel {\n  background: #444;\n  border: 0px solid black;\n}\n.b-top {\n  border-top-width: 1px;\n}\n.b-bot {\n  border-bottom-width: 1px;\n}\n.b-left {\n  border-left-width: 1px;\n}\n.b-right {\n  border-right-width: 5px;\n  border-color: #222222;\n}\n.btn:hover {\n  background-color: #808080;\n  border-color: #ccc;\n}\n.btn {\n  border: 1px solid #808080;\n  background: #606060 no-repeat center;\n  border-radius: 4px;\n  color: white;\n  vertical-align: top;\n}\n#dock {\n  color: #fff;\n}\n.dock-btn {\n  padding: 1px 5px 1px 5px;\n  border: 0 solid black;\n  background: #606060 no-repeat center;\n  border-radius: 4px;\n  cursor: pointer;\n  margin: 1px 4px 1px 4px;\n}\n.dock-btn:hover {\n  background-color: #808080;\n}\n.dock-btn .txt {\n  padding-left: 5px;\n}\n.selected {\n  background-color: #333;\n  color: #ccc;\n}\n.sbtn {\n  min-width: 20px;\n  height: 20px;\n  line-height: 1.1;\n  border-color: #999;\n  padding: 1px 3px;\n  font-size: 14px;\n}\n.rbtn {\n  width: 37px;\n  height: 37px;\n  margin: 2px 6px;\n  font-size: 22px;\n  line-height: 1.1;\n}\n.tbtn {\n  width: 31px;\n  height: 31px;\n  margin: 2px 2px;\n  font-size: 20px;\n  padding: 0;\n}\n.tlist {\n  list-style-type: none;\n  padding: 0px;\n  margin: 0;\n  color: #fff;\n  font-size: 13px;\n}\n.tlist li {\n  border-bottom: 1px solid #777;\n  padding: 2px 3px 2px  15px;\n  cursor: pointer;\n}\n.tlist li:hover {\n  background: #222;\n}\n.tool-caption {\n  font-weight: bold;\n  color: #fff;\n  padding: 2px 0 2px 3px;\n  background: #333;\n  user-select: none;\n}\n.no-top-border {\n  border-top: 0;\n}\n.tool-caption .btn {\n  width: 14px;\n  height: 14px;\n  font-size: 10px;\n  line-height: 11px;\n  margin-top: -1px;\n}\n.tool-caption .fa {\n  font-size: 11px;\n}\n.tool-caption .txt {\n  padding-right: 3px;\n}\n.tlist .btn {\n  font-size: 11px;\n  border: 0;\n}\n.tlist .rm {\n  visibility: hidden;\n  padding: 0 5px 0 5px;\n}\n.tlist li:hover .rm {\n  visibility: visible;\n}\n.scroll {\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.scroll::-webkit-scrollbar {\n  width: 15px;\n}\n.scroll::-webkit-scrollbar-track {\n  background: white;\n}\n.scroll::-webkit-scrollbar-thumb {\n  background: steelblue;\n}\n.scroll::-webkit-scrollbar-thumb:hover {\n  background: royalblue;\n}\n.win {\n  position: absolute;\n  min-width: 100px;\n  min-height: 20px;\n  background: #666;\n  border: 5px solid #444444;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n}\n.win .content {\n  font-family: sans-serif;\n  color: #fff;\n  padding: 7px;\n  height: calc(100% - 19px);\n}\n.win .tool-caption {\n  cursor: default;\n  height: 15px;\n}\n.win .tool-caption .rm {\n  border: 0;\n  border-radius: 0px;\n  color: white;\n  font-size: 16px;\n  height: 17px;\n  padding-left: 5px;\n}\n.sep {\n  margin-right: 13px;\n}\n.pseudo-btn:hover {\n  background-color: #808080;\n}\n.pseudo-btn {\n  background-color: #606060;\n  color: white;\n  width: 18px;\n  text-align: center;\n  cursor: pointer;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.pseudo-btn a {\n  color: white;\n  text-decoration: none;\n}\n#layerSelection label {\n  color: #fff;\n}\n#layersList {\n  background-color: #ddd;\n  margin: 10px;\n}\n.tc-ctrl {\n  border-left: 0;\n}\n.tc-ctrl input[type=text],\n.tc-ctrl select {\n  color: #fff;\n}\n#commands {\n  font-family: Monaco, monospace;\n}\n#commands .content {\n  color: #C4E1A4;\n  font-size: 11px;\n}\n.terminal-output-area {\n  height: calc(100% - 30px);\n  display: flex;\n  flex-direction: column;\n}\n.terminal-output {\n  flex: 1;\n}\n.terminal-pusher {\n  height: 100%;\n}\n.terminal-input {\n  height: 30px;\n}\n.terminal-input input {\n  color: #C4E1A4;\n  background: inherit;\n  outline: none;\n  border: 0;\n  margin-top: 4px;\n  padding: 3px;\n  width: 100%;\n  box-sizing: border-box;\n  padding-left: 0;\n}\n.terminal-input input::-webkit-input-placeholder {\n  color: #777777;\n  font-style: italic;\n}\n.terminal-commandText {\n  color: #777777;\n}\n.autocomplete-area {\n  font-style: italic;\n}\ninput[type=checkbox],\ninput[type=radio] {\n  vertical-align: middle;\n}\n#status {\n  font-family: 'Helvetica Neue Light', HelveticaNeue-Light, 'Helvetica Neue', Helvetica, sans-serif;\n  color: #fff;\n  font-size: 11px;\n  padding-top: 4px;\n}\n#status .coordinates-info {\n  font-style: italic;\n  color: #fff;\n}\n.status-item {\n  padding-right: 5px;\n  padding-left: 5px;\n  float: right;\n  color: #bbb;\n}\n#viewer-container .tool-hint {\n  font-family: 'Helvetica Neue Light', HelveticaNeue-Light, 'Helvetica Neue', Helvetica, sans-serif;\n  color: #000;\n  font-size: 11px;\n  cursor: default;\n  pointer-events: none;\n}\n", ""]);

// exports


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(32);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 32 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
