import { Controller } from "stimulus"
import Rails from "@rails/ujs";
import * as bootstrap from 'bootstrap'

export default class extends Controller {
  static targets = [ "content", "questionSection", "submitBar" ]
  static values = { submitUrl: String }

  connect() {
    console.log('AflierSurvey#connect')
  }

  submit(event) {
    console.log(`AflierSurvey#submit path: ${event.target.name}`)

    let that = this

    // Signal Questionnnaire is being submitted and update submission bar
    Rails.ajax({
      type: 'GET',
      url: event.target.name,
      dataType: 'json',
      success: function (response) {
        that.submitBarTarget.outerHTML = response.html

        if (response.show_required) {
          var myModal = new bootstrap.Modal(document.getElementById('answer-required'), {
            keyboard: false
          })

          myModal.show()
        }
      },
      error: function (response) {
        console.log('Setting could not be saved.')
      }
    })

    // Redraw all sections

    setTimeout(function(){

      that.questionSectionTargets.forEach(function (element, index) {
        console.log(`AflierSurvey#submit - question section path: ${element.dataset.path + ` refresh ${element.dataset.refresh}`}`)

        Rails.ajax({
          type: 'GET',
          url: element.dataset.path,
          dataType: 'json',
          success: function (response) {
            console.log('AflierSurvey#submit - redraw section')
            element.outerHTML = response.html
            console.log('AflierSurvey#submit - redraw section finished')
          },
          error: function (response) {
            console.log('Setting could not be saved.')
          }
        })
      });
    }, 500);
  }

  refresh() {
    let that = this

    setTimeout(function(){

      that.questionSectionTargets.forEach(function (element, index) {
        console.log(`AflierSurvey#submit - question section path: ${element.dataset.path + ` refresh ${element.dataset.refresh}`}`)

        if (element.dataset.refresh === 'yes') {

          Rails.ajax({
            type: 'GET',
            url: element.dataset.path,
            dataType: 'json',
            success: function (response) {
              console.log('AflierSurvey#submit - redraw section')
              element.outerHTML = response.html
              console.log('AflierSurvey#submit - redraw section finished')
            },
            error: function (response) {
              console.log('Setting could not be saved.')
            }
          })

        }
      });
    }, 500);
  }
}
