import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ulq-list',
  styleUrl: 'ulq-list.css',
  shadow: true,
})

export class UlqList {

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
