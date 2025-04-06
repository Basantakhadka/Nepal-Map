import DistrictMap from "./Map/NepalMap";

function App() {
	return (
		<DistrictMap
			stroke="#000"
			// strokeWidth={1}
			provinceColor=""
			randomSectorColor=""
			onMapClick={(data: any) => console.log(data)}
			onhover={(data: any) => console.log(data)}
			onMouseOut={() => {}}
		/>
	);
}

export default App;
