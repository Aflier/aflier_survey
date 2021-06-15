// ONLY EDIT IN 'STIMULUS-BASE' V0.2.1

import { Controller } from "stimulus"
import Rails from '@rails/ujs'

console.log('included save')

export default class extends Controller {
    static targets = ['value', 'state', 'checkOn', 'checkOff', 'toggleOn', 'toggleOff']
    static values = { toggleOnUrl: String, toggleOffUrl: String, onUrl: String, offUrl: String, url: String }

    connect() {
        console.log('Number Saver: connected')
        this.attribute = this.data.get('attribute')
        this.suggest   = this.data.get('suggest')
    }

    changing(event) {
        this.stateTarget.innerHTML = '<i class="fal fa-save text-danger"></i>'
    }

    saveChange(event) {
        let that = this

        event.preventDefault()

        let data = new FormData()
        data.append(this.valueTarget.name, this.valueTarget.value)

        console.log(`Pre ${this.url()}`)

        Rails.ajax({
            type: 'PATCH',
            url: this.url(),
            dataType: 'json',
            data: data,
            success: function (response) {

                that.stateTarget.innerHTML = '<i class="fal fa-save text-success"></i>'
            },
            error: function (response) {
                console.log('Setting could not be saved.')
            }
        })
    }

    checkOn() {
        console.log(this.onUrlValue)
        let that = this

        Rails.ajax({
            type: 'GET',
            url: this.onUrlValue,
            dataType: 'json',
            success: function (response) {
                that.checkOnTarget.hidden  = false
                that.checkOffTarget.hidden = true
            },
            error: function (response) {
                console.log('Setting could not be saved.')
            }
        })
    }

    checkOff() {
        console.log(this.offUrlValue)
        let that = this

        Rails.ajax({
            type: 'GET',
            url: this.offUrlValue,
            dataType: 'json',
            success: function (response) {
                that.checkOnTarget.hidden  = true
                that.checkOffTarget.hidden = false
            },
            error: function (response) {
                console.log('Setting could not be saved.')
            }
        })
    }

    toggleOn() {
        console.log(this.toggleOnUrlValue)
        let that = this

        Rails.ajax({
            type: 'GET',
            url: this.toggleOnUrlValue,
            dataType: 'json',
            success: function (response) {
                that.toggleOnTarget.hidden  = false
                that.toggleOffTarget.hidden = true
            },
            error: function (response) {
                console.log('Setting could not be saved.')
            }
        })
    }

    toggleOff() {
        console.log(this.toggleOffUrlValue)
        let that = this

        Rails.ajax({
            type: 'GET',
            url: this.toggleOffUrlValue,
            dataType: 'json',
            success: function (response) {
                that.toggleOnTarget.hidden  = true
                that.toggleOffTarget.hidden = false
            },
            error: function (response) {
                console.log('Setting could not be saved.')
            }
        })
    }

    url() {
        console.log(`URL for updater: ${this.urlValue}`)

        return this.urlValue
    }
}