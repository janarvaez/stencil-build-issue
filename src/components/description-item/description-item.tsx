import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'usp-description-item',
  shadow: true,
})
export class DescriptionItem {
  /** Text shown as header or title for the table */
  @Prop() header: string | HTMLElement;
  @Prop() align: 'top' | 'middle' | 'bottom' = 'top';

  render() {
    return [
      <th style={{ verticalAlign: this.align }}>{this.header}</th>,
      <td>
        <slot />
      </td>,
    ];
  }
}
