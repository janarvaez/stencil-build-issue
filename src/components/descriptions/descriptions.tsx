import { Component, h } from '@stencil/core';

@Component({
  tag: 'usp-descriptions',
  shadow: true,
})
export class Descriptions {
  render() {
    return (
        <table cellpadding="0" cellspacing="0">
          <slot />
        </table>
    );
  }
}
