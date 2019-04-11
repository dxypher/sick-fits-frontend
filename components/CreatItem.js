import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import Form from './styles/Form'
import formatMoney from '../lib/formatMoney'

export default class CreatItem extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: 0
  }

  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({
      [name]: val
    })
  }

  render() {
    return (
      <Form>
        <fieldset>
          <label htmlFor="title">
            Title
            <input type="text"
                   id='title' 
                   name='title'
                   placeholde='Title'
                   required 
                   value={this.state.title}
                   onChange={this.handleChange}/>
          </label>

          <label htmlFor="price">
            Title
            <input type="number"
                   id='price' 
                   name='price'
                   placeholde='Price'
                   required 
                   value={this.state.price}
                   onChange={this.handleChange}/>
          </label>

          <label htmlFor="description">
            Title
            <textarea
                   id='description' 
                   name='description'
                   placeholde='Enter a description'
                   required 
                   value={this.state.description}
                   onChange={this.handleChange}/>
          </label>

          <button type="submit">Submit</button>
        </fieldset>
      </Form>
    )
  }
}
