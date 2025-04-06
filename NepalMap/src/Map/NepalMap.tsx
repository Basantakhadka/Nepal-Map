import districtMapData, {
	defaultColor,
	defaultProvinceColor,
	getRandomColor,
	ktmBktLat,
} from "../utilts/CommonUtils";

type DistrictMapProps = {
	stroke?: string;
	onMapClick?: (data: any) => void;
	onhover?: (data: any) => void;
	onMouseOut?: () => void;
	provinceColor?: string;
	randomSectorColor?: string;
	color?: string;
	hoverColor?: string;
	sectorClassName?: string;
};

export default function DistrictMap({
	stroke,
	onMapClick,
	onhover,
	onMouseOut,
	provinceColor,
	randomSectorColor,
	color,
	hoverColor,
	sectorClassName,
}: DistrictMapProps) {
	const handleMapClick = (item: any) => {
		if (onMapClick) {
			onMapClick({
				name: item.name,
				province: item.province,
				area: item.area,
				code: item.code,
			});
		}
	};
	const handleMouseOver = (item: any) => {
		if (onhover) {
			onhover({
				name: item.name,
				province: item.province,
				area: item.area,
				code: item.code,
			});
		}
	};
	const handleMouseOut = () => {
		if (onMouseOut) {
			onMouseOut();
		}
	};

	return (
		<svg viewBox="0 0 1026.077 519.136">
			<g transform="translate(-52.379 -15.971)">
				{districtMapData.map((item, index) => {
					const pathColorList = provinceColor || defaultProvinceColor;
					let pathColor =
						pathColorList.length > item.province - 1
							? pathColorList[item.province - 1]
							: defaultProvinceColor[item.province - 1];
					if (color) pathColor = color;
					if (randomSectorColor) pathColor = getRandomColor();

					return (
						<>
							<path
								// title={item.name}
								// className={sectorClassName || ''}
								style={{ cursor: "pointer", fill: pathColor }}
								key={index}
								stroke={stroke || "#000"}
								// strokeWidth={strokeWidth || '1px'}
								d={item.shape}
								onMouseOver={(event: any) => {
									event.target.style.fill = hoverColor || defaultColor;
									handleMouseOver(item);
								}}
								onClick={() => handleMapClick(item)}
								onMouseOut={(event: any) => {
									handleMouseOut();
									event.target.style.fill = pathColor;
								}}
							></path>
							<path style={{ fill: "black" }} d={item.text}></path>
						</>
					);
				})}
				<path d={"M763.602 113.029 L 720.526 371.057"} stroke="#454545"></path>
				<path d={"M796.021 136.918 L 720.526 373.333"} stroke="#454545"></path>
			</g>
			<g transform="matrix(3.271384, 0, 0, 2.677083, -1624.106323, -876.465515)">
				{ktmBktLat.map((item, index) => {
					const pathColorList = provinceColor || defaultProvinceColor;
					let pathColor =
						pathColorList.length > item.province - 1
							? pathColorList[item.province - 1]
							: defaultProvinceColor[item.province - 1];
					if (color) pathColor = color;
					if (randomSectorColor) pathColor = getRandomColor();

					return (
						<>
							<path
								className={sectorClassName || ""}
								style={{ cursor: "pointer", fill: pathColor }}
								key={index}
								stroke={"#000"}
								strokeWidth={"0.3px"}
								d={item.shape}
								onMouseOver={(event: any) => {
									event.target.style.fill = hoverColor || defaultColor;
									handleMouseOver(item);
								}}
								onClick={() => handleMapClick(item)}
								onMouseOut={(event: any) => {
									handleMouseOut();
									event.target.style.fill = pathColor;
								}}
							></path>
							<path style={{ fill: "black" }} d={item.text}></path>
						</>
					);
				})}
			</g>
		</svg>
	);
}
