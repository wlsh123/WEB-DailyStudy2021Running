(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MyLibrary"] = factory();
	else
		root["MyLibrary"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: Cannot find module '@babel/core'\nRequire stack:\n- C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\babel-loader\\lib\\index.js\n- C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\loader-runner\\lib\\loadLoader.js\n- C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\loader-runner\\lib\\LoaderRunner.js\n- C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\webpack\\lib\\NormalModule.js\n- C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\webpack\\lib\\NormalModuleFactory.js\n- C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\webpack\\lib\\Compiler.js\n- C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\webpack\\lib\\webpack.js\n- C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\webpack-cli\\bin\\utils\\validate-options.js\n- C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\webpack-cli\\bin\\utils\\convert-argv.js\n- C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\webpack-cli\\bin\\cli.js\n- D:\\VisualStudioCode\\node_global\\node_modules\\webpack-cli\\node_modules\\import-local\\index.js\n- D:\\VisualStudioCode\\node_global\\node_modules\\webpack-cli\\bin\\cli.js\n- D:\\VisualStudioCode\\node_global\\node_modules\\webpack\\bin\\webpack.js\n babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:982:15)\n    at Function.Module._load (internal/modules/cjs/loader.js:864:27)\n    at Module.require (internal/modules/cjs/loader.js:1044:19)\n    at require (C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\v8-compile-cache\\v8-compile-cache.js:161:20)\n    at Object.<anonymous> (C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\babel-loader\\lib\\index.js:10:11)\n    at Module._compile (C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\v8-compile-cache\\v8-compile-cache.js:194:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1178:10)\n    at Module.load (internal/modules/cjs/loader.js:1002:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:901:14)\n    at Module.require (internal/modules/cjs/loader.js:1044:19)\n    at require (C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\v8-compile-cache\\v8-compile-cache.js:161:20)\n    at loadLoader (C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\loader-runner\\lib\\loadLoader.js:18:17)\n    at iteratePitchingLoaders (C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\loader-runner\\lib\\LoaderRunner.js:169:2)\n    at runLoaders (C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\loader-runner\\lib\\LoaderRunner.js:365:2)\n    at NormalModule.doBuild (C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\webpack\\lib\\NormalModule.js:295:3)\n    at NormalModule.build (C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\webpack\\lib\\NormalModule.js:446:15)\n    at Compilation.buildModule (C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\webpack\\lib\\Compilation.js:739:10)\n    at C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\webpack\\lib\\Compilation.js:1111:12\n    at C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\webpack\\lib\\NormalModuleFactory.js:409:6\n    at C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\webpack\\lib\\NormalModuleFactory.js:155:13\n    at AsyncSeriesWaterfallHook.eval [as callAsync] (eval at create (C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\tapable\\lib\\HookCodeFactory.js:33:10), <anonymous>:4:1)\n    at AsyncSeriesWaterfallHook.lazyCompileHook (C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\tapable\\lib\\Hook.js:154:20)\n    at C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\webpack\\lib\\NormalModuleFactory.js:138:29\n    at C:\\Users\\Administrator\\Desktop\\DailyStudying\\react\\demo\\node_modules\\webpack\\lib\\NormalModuleFactory.js:346:9\n    at processTicksAndRejections (internal/process/task_queues.js:79:11)");

/***/ })
/******/ ]);
});