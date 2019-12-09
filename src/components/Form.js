import React from 'react'
import ProteinForm from './ProteinForm'
import FillingForm from './FillingForm'
import ToppingForm from './ToppingForm'
import SideForm from './SideForm'

const DEFAULT_STATE = {
  protein: [],
  fillings: [],
  toppings: [],
  sides: []
}

class Form extends React.Component {
  state = {
    ...DEFAULT_STATE
  }

  handleSubmit= (event) =>{ 
    event.preventDefault()
    document.getElementById("order-form").reset()
    this.props.addOrder(this.state)

    this.setState({
      ...DEFAULT_STATE
    })
  }

  handleChange = (event) => {
    const itemType = event.target.name
    const item = event.target.value

    !this.state[`${itemType}`].includes(item) ?
      this.setState({
        [itemType]: this.state[`${itemType}`].concat(item)
      })
    :
      this.setState({
        [itemType]: this.state[`${itemType}`].filter(
          ingr => ingr !== item
        )
      })
  }

  render() {
    return(
      <div className="ui raised container segment">
        <h1 className="ui block header">Order Form</h1>
        <form className="ui form" id="order-form" onSubmit={event => this.handleSubmit(event) }>
          <ProteinForm
            protein={ this.state.protein }
            handleOnChange={ event => this.handleChange(event) }
          />

          <FillingForm
            fillings={ this.state.fillings }
            handleOnChange={event => this.handleChange(event) }
          />

          <ToppingForm
            toppings={ this.state.toppings }
            handleOnChange={event => this.handleChange(event) }
          />

          <SideForm
            sides={ this.state.sides }
            handleOnChange={event => this.handleChange(event) }
          />

          <br />

          <button className="ui blue big button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default Form
