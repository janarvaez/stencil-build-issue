import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'usp-list',
  shadow: true,
})
export class List {
  /** Sets different styles if this is a sublist (a list inside another list) */
  @Prop() sublist: boolean = false;

  render() {
    return <ul class={this.sublist ? 'sublist' : undefined}><slot /><li>hello</li></ul>;
  }
}
