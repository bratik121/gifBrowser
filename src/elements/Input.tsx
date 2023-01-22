import "./elements.css";

function Input(props: any) {
	return (
		<div className="inputBox">
			<input
				type="text"
				required
				className=""
				id="input"
				ref={props.refe}
				onKeyUp={(e) => {
					if (e.key === "Enter") {
						props.searchGif();
					}
				}}
				onChange={(e) => {
					props.setInput(e.target.value);
				}}
			/>
			<span className="">{props.tittle}</span>
			<i></i>
		</div>
	);
}

export default Input;
