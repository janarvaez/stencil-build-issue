import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'usp-alert',
  shadow: true,
})
export class Alert {
  /** Determines the style of the message box */
  @Prop() type: 'error' | 'info' | 'warning' = 'info';

  render() {
    return (
      <div class={`alert ${this.type}`}>
        <div class="icon">icon-goes-here</div>
        <div class="content">hello
          <slot />
        </div>
      </div>
    );
  }
}
