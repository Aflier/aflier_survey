// Visit The Stimulus Handbook for more details 
// https://stimulusjs.org/handbook/introduction
// 
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"
import Rails from "@rails/ujs";

export default class extends Controller {
  static targets = [ "self" ]

  connect() {
    console.log('SelectOne#connect')
  }

  choice(event) {
    let that = this
    console.log(`path: ${event.params.path}`)


    Rails.ajax({
      type: 'GET',
      url: event.params.path,
      dataType: 'json',
      success: function (response) {
        that.selfTarget.outerHTML = response.html
      },
      error: function (response) { }
    })
  }

}
