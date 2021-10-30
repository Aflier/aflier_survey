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
    console.log('AflierSurvey#submit')

    let that = this

    var myModal = new bootstrap.Modal(document.getElementById('answer-required'), {
      keyboard: false
    })

    myModal.show()

    // Redraw all sections

    this.refresh();

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
