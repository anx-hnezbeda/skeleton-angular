/**
 * Angular dependencies
 */
import 'rxjs';
import 'reflect-metadata';
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';

/**
 * Angular
 */
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';

import '@angularclass/hmr';

/**
 * Moment.js
 */
import * as moment from 'moment';
window['moment'] = moment; // install globally

import 'moment/locale/de';

/**
 * jQuery and jQuery based libraries
 */
import * as jQuery from 'jquery';
window['jQuery'] = window['$'] = jQuery; // install globally

import 'selectize';
