/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

	import Grid from "./ui/grid";
	import PupupNumbers from "./ui/pupupNumbers";
	
	const grid = new Grid($('#container'));
	const pupupNumbers = new PupupNumbers($("#popupNumbers"));
	grid.build();
	grid.layout();
	grid.bindPup(pupupNumbers);
	
	$("#check").on('click', e => {
	    if(grid.check()){
	        alert("恭喜成功啦~");
	    };
	})
	$("#reset").on('click', e => {
	    grid.reset();
	})
	$("#clear").on('click', e => {
	    grid.clear();
	})
	$("#result").on('click', e => {
	    grid.getResult();
	})
	$("#rebuild").on('click', e => {
	    grid.rebuild();
	})

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map