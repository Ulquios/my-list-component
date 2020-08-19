import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'my-list-component',
  styleUrl: 'my-list-component.css',
  shadow: true,
})

export class MyListComponent {

  @Prop() listName: string;
  @Prop() listData: Array<string>;

  render() {
    return (
      <div class="app-list">
        <div>This is a list of <b>{this.listName}</b></div>
        <ul>
          {this.listData.map((item) =>
            <li>{item}</li>
          )}
        </ul>
      </div>
    );
  }
}
