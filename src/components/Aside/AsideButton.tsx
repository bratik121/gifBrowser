function AsideButton({
	active,
	toggleState,
}: {
	active: boolean;
	toggleState: () => void;
}) {
	return (
		<div
			className={`aspect-square w-7 flex just items-center ${
				active ? "-translate-x-8" : ""
			} md:hidden transition-all duration-500 ease-in- overflow-hidden`}
			onClick={toggleState}
		>
			<div className={`btn-burger ${active ? "open" : ""} `}></div>
		</div>
	);
}

export default AsideButton;
