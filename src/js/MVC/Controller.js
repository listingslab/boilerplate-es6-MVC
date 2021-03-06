/**
 * Boilerplate ES6 Sass App
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/osl-3.0.php
 *
 * @category   Listingslab
 * @package    boilerplate-es6-sass
 * @copyright  Copyright (c) 2017 Listingslab (https://github.com/listingslab/boilerplate-es6-sass)
 * @license    https://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author     Chris Dorward <listingslab@gmail.com>
 *
 * src/js/Controller.js
 * Handles anything to do with user interaction
 *
 */

export default class Controller {
  constructor(main) {
    this.main = main;
    this.shortName = 'c';
    //console.log($('#input-submit-email'));
    // Should only be triggered on first page loa
    // console.log ('set submit function for email field');
    this.focusField('email');

  }

  setDependents(dependents) {
    for (let i=0; i<dependents.length; i++){
      this[dependents[i].shortName] = dependents[i];
    }
  }

  focusField (fieldId){
    // console.log('field id is....')
    $(`#${fieldId}`).focus();
  }

  setButtonActions() {
    // console.log('setButtonActions');
    // button.onclick = function (){
    //   alert ('click');
    // }

    $('#input-submit-button').click(function() {
        console.log ('submitted');
    });

    $('#email').focus();

  }

}
