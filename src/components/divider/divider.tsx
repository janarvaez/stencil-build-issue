import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'usp-divider',
  shadow: true,
})
export class Divider {
  private DEFAULT_VERTICAL_SPACE = 24;
  private DEFAULT_HORIZONTAL_SPACE = 0;

  /** Sets the spacing around the element */
  @Prop() spacing: [number, number?, number?, number?] = [
    this.DEFAULT_VERTICAL_SPACE,
    this.DEFAULT_HORIZONTAL_SPACE,
  ];

  private get marginTop(): number {
    return this.spacing?.[0] ?? this.DEFAULT_VERTICAL_SPACE;
  }

  private get marginRight(): number {
    return this.spacing?.[1] ?? this.DEFAULT_HORIZONTAL_SPACE;
  }

  private get marginBottom(): number {
    return this.spacing?.[2] ?? this.marginTop;
  }

  private get marginLeft(): number {
    return this.spacing?.[3] ?? this.marginRight;
  }

  render() {
    return (
      <hr
        style={{
          marginTop: this.marginTop + 'px',
          marginRight: this.marginRight + 'px',
          marginBottom: this.marginBottom + 'px',
          marginLeft: this.marginLeft + 'px',
        }}
      />
    );
  }
}
