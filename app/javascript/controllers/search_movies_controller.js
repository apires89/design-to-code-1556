import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search-movies"
export default class extends Controller {
  static targets = ["list","input", "form"]
  connect() {
    // console.log("we are connected to search-movies")
    // console.log(this.listTarget)
    // console.log(this.inputTarget)
    // console.log(this.formTarget.action)
  }

  update() {
    // ajax request
    // define url
    const url = `${this.formTarget.action}?query=${this.inputTarget.value}`
    // fetch that url
      fetch(url, {headers: {"Accept": "text/plain"}})
        // then we get a reponse
        .then(response => response.text())
        .then((data) => {
          this.listTarget.outerHTML = data
        })

  }
}
