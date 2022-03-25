// Copyright (c) 2022 Stella S All rights reserved
//
// Created by: Stella S
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of triangle.
 */
function calculate () {
  // input
  const base = parseInt(document.getElementById('base-of-triangle').value)
  const height = parseInt(document.getElementById('height-of-triangle').value)
  
  // process
  const area = base * height/2
  const perimeter = (base * height)/2
  
  // output
  document.getElementById('area').innerHTML = 'The area of the triangle is: ' + area + ' cm²'
}