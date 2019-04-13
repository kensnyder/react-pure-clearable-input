import React from 'react';
import './ClearableInput.css';

export function ClearableInput({ searchIcon, onUpdate, ...props }) {
	// render
	return (
		<div className="Component ClearableInput">
			<input onChange={emitChange} {...props} />
			{props.value && (
				<div role="img" className="overlay clear" onClick={clear}>
					&times;
				</div>
			)}
			{searchIcon && !props.value && (
				<div role="img" className="overlay magnifier">
					🔍
				</div>
			)}
		</div>
	);

	function emitChange(event) {
		onUpdate(event.target.value);
	}

	// define methods
	function clear() {
		onUpdate('');
	}
}
