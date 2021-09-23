import * as React from "react"
import "../css/styles.css"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// data
const links = [
{}
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
    <form id="payment-form">
      <div id="card-element"></div>
      <button id="submit">
        <div class="spinner hidden" id="spinner"></div>
        <span id="button-text">Pay now</span>
      </button>
      <p id="card-error" role="alert"></p>
      <p class="result-message hidden">
        Payment succeeded, see the result in your
        <a href="" target="_blank">Stripe dashboard.</a> Refresh the page to pay again.
      </p>
    </form>
    </main>
  )
}

export default IndexPage
