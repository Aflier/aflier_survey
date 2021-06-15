// ONLY EDIT IN STIMULUS-BASE 1.7.0

import { Controller } from "stimulus"
import Rails from '@rails/ujs'

export default class extends Controller {
  static targets = [ "submit", "content" ]

  connect() {
    console.log('Connected: SuperTable')
    this.filter_url = this.data.get('filter-url')
  }

  showFilterBox(event) {
    console.log('#showFilterBox')
    this.filterboxTarget.hidden = false
  }


  closeFilterBox(event) {
    this.filterboxTarget.hidden = true
  }

  preventSubmit(event) {
    console.log('Prevent Submit')
    event.preventDefault()
  }

  filterChosen(event) {
    console.log(`#filterChosen name='${event.target.name}'`)
    console.log(`#filterChosen value='${event.target.value}'`)

    let that = this
    Rails.ajax({
      type: 'GET',
      url: event.target.name,
      dataType: 'json',
      success: function (response) {
        that.contentTarget.innerHTML = response.html
      },
      error: function (response) {
        console.log('filter failed')
      }
    })
  }

  submitForm(event) {
    let that = this

    console.log('Submit Form so Prevent')
    event.preventDefault()
    // Rails.fire(this.submitTarget, 'submit')

    let data = new FormData(this.submitTarget)
    data.append("commit", event.target.value)

    Rails.ajax({
      type: "post",
      url: this.data.get('create-url'),
      data: data,
      success: function (response) {
        if (response.error) {
          that.errorTarget.innerHTML = response.error
        } else {
          if (response.replace_body) {
            that.contentTarget.innerHTML = response.html
          } else {
            that.contentTarget.innerHTML = that.contentTarget.innerHTML + response.html
          }
          that.submitTarget.outerHTML = response.form
        }
      },
      error: function (response) { console.log('Submit: Failed.')}
    })

    // Redraw the table

  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // data actions for Filtering                                                                                     //
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  clear(event) {
    console.log('supertable#clear')

    let url = this.filter_url + '?field=' + event.target.closest("button").name +'&by='
    console.log(`>> url = ${url}`)

    let that = this
    Rails.ajax({
      type: 'GET',
      url: url,
      dataType: 'json',
      success: function (response) {
        that.contentTarget.innerHTML = response.html
      },
      error: function (response) {
        console.log('filter failed')
      }
    })
  }

  filterClicked(event) {
    console.log('Supertable#filterClicked')

    let that = this
    let url = this.filter_url + '?field=' + event.target.name + '&by=' + event.target.value

    setTimeout(
        function()
        {
          event.target.classList.add('bg-success')
        }, 200);


    that.contentTarget.innerHTML = '<div class="text-center"><i class="fas fa-spinner fa-pulse fa-fw fa-10x"></i></div>'
    this.startFilterTimer(url)
  }

  filterChanged(event) {
    let that = this
    let url = this.filter_url + '?field=' + event.target.name + '&by=' + event.target.value

    that.contentTarget.innerHTML = '<tr><td>searching...</td></tr>'
    this.startFilterTimer(url)
  }

  buttonClicked(event) {
    let that = this
    console.log('key pressed')
    let url = this.filter_url + '?field=' + event.target.closest("button").name + '&by=' + event.target.closest("button").value
    console.log('Path: ' + url )

    Rails.ajax({
      type: 'GET',
      url: url,
      dataType: 'json',
      success: function (response) {
        that.contentTarget.innerHTML = response.html
      },
      error: function (response) {
        console.log('filter failed')
      }
    })

  }

  toggleOn(event) {
    let that = this
    console.log('key pressed')

    let url = this.filter_url + '?field=' + event.target.closest("button").name + '&by=' + event.target.closest("button").value
    console.log(`URL: ${url}`)

    Rails.ajax({
      type: 'GET',
      url: url,
      dataType: 'json',
      success: function (response) {
        that.contentTarget.innerHTML = response.html
      },
      error: function (response) {
        console.log('filter failed')
      }
    })
  }

  toggleOff(event) {
    let that = this
    let url = this.filter_url + '?field=' + event.target.closest("button").name + '&by=' + event.target.closest("button").value
    console.log(`URL: ${url}`)

    Rails.ajax({
      type: 'GET',
      url: url,
      dataType: 'json',
      success: function (response) {
        that.contentTarget.innerHTML = response.html
      },
      error: function (response) {
        console.log('filter failed')
      }
    })
  }

  startFilterTimer(url) {
    let that = this

    if (this.filterTimer) {
      clearTimeout(this.filterTimer)
    }

    this.filterTimer = setTimeout(
        function()
        {
          Rails.ajax({
            type: 'GET',
            url: url,
            dataType: 'json',
            success: function (response) {
              that.contentTarget.innerHTML = response.html
            },
            error: function (response) {
              console.log('filter failed')
            }
          })
        }, 2000);
  }
}
