import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  private fruitsList = [
    'Banana',
    'Apple',
    'Kiwi'
  ]

  render() {
    return (
      <div>
        <ulq-list listName={'Fruits'} listData={this.fruitsList}/>
      </div>
    )
  }
}
