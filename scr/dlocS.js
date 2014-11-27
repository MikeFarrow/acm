/*
mf:2013-11-02::Sdloc.js

This is an Angular service that manages local persisted data

It saves data to a local data store after stringifying it

*/

(function() {
	'use strict';

	angular
		.module('app')
		.factory('dLocS', dLocS);

	function dLocS() {

		var CMCnt = 'cmscnt'; //, CAMDC = 'animsgdotcom';
		var dat = {};

		var service = {
			savCnt: savCnt,
			getCnt: getCnt
			// savTpl: savTpl,
			// getTpl: getTpl			
		};
		return service;

		////////////

		// Save some content
		function getCnt(){
			// Check if the data store exists
			if (localStorage.getItem(CMCnt) !== null) {
				// Get data from local store
				return JSON.parse(localStorage[CMCnt]);
			} else {
				// Initialise and save the data
				console.log('xxx No data locally xxx');
			}
		}

		// Save some content
		function savCnt(cnt){
			// Save to local storage
			localStorage[CMCnt] = JSON.stringify(cnt);
		}


		/*
		// Used by play an edit to retrieve an animation file by ID
		this.getAnim = function (iD) {

			// Build the animation name
			cAName = CAMC + padTo3(iD);
			// Check if the data store exists
			if (localStorage.getItem(cAName) !== null) {
				// Get data from local store
				return JSON.parse(localStorage[cAName]);
			} else {
				// Initialise the data
				return initDat();
			}
		};

		// Get the list of animations
		this.getAnims = function () {

			// Check if the data store exists
			if (localStorage.getItem(CAMDC) !== null) {
				// Get data from local store
				oAnims = JSON.parse(localStorage[CAMDC]);
			} else {
				// Initialise and save the data
				oAnims = initFil();
				saveLDat(oAnims, CAMDC)

			}
			return oAnims;
		};

		// Save a list of animations
		this.savDatA = function (oAnims) {
			// Save to local storage 
			saveDatA(oAnims);
		}

		// Save an animation sequence
		this.savDat = function (oAnSeq) {
			// Save to local storage 
			saveDat(oAnSeq);
		}


		// Initialise data method
		this.inDat = function () {
			// Get the initialise data from onject literal
			var oAnSeq = initDat();
			// Save to local storage
			saveDat(oAnSeq);

			return initDat(oAnSeq);
		}
		*/


		// Local function used to build file names
		function padTo3(number) {
			if (number<=999) { number = ("00"+number).slice(-3); }
			return number;
		}



		// Save the animation data
		function saveDatA(oAnims){
			// Save to local storage
			localStorage[CAMDC] = angular.toJson(oAnims);
		}

		// Initialise a list of animations
		function initFil(){

			return {
				 "iLID": 0,
				 "aDAn": []
			}
		}


		// Save the animation data
		function saveLDat(oDat, key){
			// Save to local storage
			localStorage[key] = JSON.stringify(oDat);
		}

		// Save the animation data
		function saveDat(oAnSeq){
			// Save to local storage
			localStorage[cAName] = JSON.stringify(oAnSeq);
		}


		function initDat(){

			return {
				 "iCnt": 0,
				 "iTL": 1000,
				 "iLID": 0,
				 "aDat": []
			}
		}

	}
})();