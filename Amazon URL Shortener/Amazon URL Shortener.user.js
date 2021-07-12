// ==UserScript==
// @name         Amazon URL Shortener
// @namespace    https://puac.de/
// @version      0.0.1
// @description  Replaces the current Amazon URL with a shorter version.
// @author       Murphy
// @match        https://www.amazon.com/*
// @match        https://www.amazon.de/*
// @match        https://www.amazon.es/*
// @match        https://www.amazon.fr/*
// @match        https://www.amazon.it/*
// @match        https://www.amazon.nl/*
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';
    if(document.location.href.split("/dp/").length !== 1&&document.location.href.split("/dp/")[1].split("/")[1] !== ""){
        var url = "https://"+document.domain+"/dp/"+document.location.href.split("/dp/")[1].split("/")[0]
        if (url === document.location.href) {return}
        else {document.location.replace(url)}
    } else {return}
})();
