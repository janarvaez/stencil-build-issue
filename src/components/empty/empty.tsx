import { Component, h, Prop } from '@stencil/core';

@Component({
	tag: 'usp-empty',
	shadow: true,
})
export class Empty {
	/** Text to display underneath the icon */
	@Prop() message: string = 'No data';

	render() {
		return (
			<span class="empty">
				<span class="message">{this.message}</span>
			</span>
		);
	}
}
