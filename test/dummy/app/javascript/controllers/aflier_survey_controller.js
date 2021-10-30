import { Controller } from "stimulus"
import Rails from "@rails/ujs";
import * as bootstrap from 'bootstrap'

export default class extends Controller {
  static targets = [ "content", "questionSection", "submitBar" ]
  static values = { submitUrl: String }

  connect() {
    console.log('Questionnaire#connect')
  }

  submit(event) {
    console.log('Questionnaire#submit')

    let that = this


    var myModal = new bootstrap.Modal(document.getElementById('answer-required'), {
      keyboard: false
    })

    myModal.show()

    // Redraw all sections

    this.questionSectionTargets.forEach(function (element, index) {
      console.log(`Questionnaire#submit - question section path: ${element.dataset.path}`)

      Rails.ajax({
        type: 'GET',
        url: element.dataset.path,
        dataType: 'json',
        success: function (response) {
          console.log('Questionnaire#submit - redraw section')
          element.outerHTML = response.html
          console.log('Questionnaire#submit - redraw section')
        },
        error: function (response) {
          console.log('Setting could not be saved.')
        }
      })
    });

  }
}
