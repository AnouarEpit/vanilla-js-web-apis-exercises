"use strict";

window.onload = function () {
  var footerDiv = document.querySelector("footer > div");
  var canvasItems = footerDiv.children;
  footerDiv.style.display = "flex";
  footerDiv.style.justifyContent = "center";
  var colorOrderMap = {
    "rgb(255, 165, 0)": 1,
    "rgb(128, 0, 128)": 2,
    "rgb(0, 0, 0)": 3,
    "rgb(128, 128, 0)": 4
  };
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = canvasItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      var bgColor = window.getComputedStyle(item).backgroundColor;
      var order = colorOrderMap[bgColor];

      if (order !== undefined) {
        item.style.order = order;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};