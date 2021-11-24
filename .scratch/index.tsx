/// <reference types="@emotion/react/types/css-prop" />
import { css, Global, keyframes } from "@emotion/react";
import React, { FC } from "react";
import Column from "../packages/react/src/column";
import BreakoutColumn from "../packages/react/src/column/components/breakout";
import Grid from "../packages/react/src/grid";
import GridProvider from "../packages/react/src/provider";
import Row from "../packages/react/src/row";
import useViewport from "../packages/hooks/src/viewport";
import defaultTheme from "../packages/theme/src/theme";

import { ColumnProps, NoStrategy, Theme } from "@contour/utils/types";

const marchingAnts = keyframes`
	from {
		background-position: 0 0, 100% 0, 100% 100%, 0 100%;
	}
	to {
		background-position: calc(var(--dash-width) * 2) 0, 100% calc(var(--dash-width) * 2), calc(100% - var(--dash-width) * 2) 100%, 0 calc(100% - var(--dash-width) * 2);
	}
`;

const debugBox = css`
	display: flex;
	align-content: center;
	align-items: center;
	justify-content: center;
	position: relative;
	min-height: 2em;
	&::before {
		content: "";
		position: absolute;
		inset: 0;
		background-image: linear-gradient(to right, var(--color) 50%, transparent 50%),
			linear-gradient(to bottom, var(--color) 50%, transparent 50%),
			linear-gradient(to left, var(--color) 50%, transparent 50%),
			linear-gradient(to top, var(--color) 50%, transparent 50%);
		background-position: 0 0, 100% 0, 100% 100%, 0 100%;
		background-size: calc(var(--dash-width) * 2) var(--stroke-width),
			var(--stroke-width) calc(var(--dash-width) * 2),
			calc(var(--dash-width) * 2) var(--stroke-width),
			var(--stroke-width) calc(var(--dash-width) * 2);
		background-repeat: repeat-x, repeat-y, repeat-x, repeat-y;
		animation: ${marchingAnts} 1s linear infinite;
		pointer-events: none;
	}
`;

const DebugColumn: FC<
	NoStrategy<ColumnProps> & { color?: string; strokeWidth?: string; dashWidth?: string }
> = ({ color = "hsla(0,0%,0%, 1)", dashWidth = "8px", strokeWidth = "1px", ...props }) => (
	<Column
		css={css`
			--color: ${color};
			--dash-width: ${dashWidth};
			--stroke-width: ${strokeWidth};
			${debugBox};
		`}
		{...props}
	/>
);

const DebugBox: FC<{ color?: string; strokeWidth?: string; dashWidth?: string }> = ({
	color = "hsla(0,0%,0%, 1)",
	dashWidth = "8px",
	strokeWidth = "1px",
	...props
}) => (
	<div
		css={css`
			--color: ${color};
			--dash-width: ${dashWidth};
			--stroke-width: ${strokeWidth};
			${debugBox};
		`}
		{...props}
	/>
);

const ColorBox: FC<{ color?: string }> = ({ color = "hsla(0,0%,0%, 1)", ...props }) => (
	<div
		css={css`
			flex: 1;
			background: ${color};
		`}
		{...props}
	/>
);

const getColumnWidth = (theme: Theme) =>
	(theme.contour.breakpoints.xl - theme.contour.margin.xl * 2) / theme.contour.colCount.xl;

const getColumnsWidth = (theme: Theme, colSpan: number, gap = 0) =>
	colSpan * getColumnWidth(theme) - (theme.contour.gap.xl / 2) * gap;

const Rainbow = ({ length }: { length: number }) => (
	<>
		{Array.from({ length }).map((_, index) => (
			<DebugColumn
				key={index}
				colSpan={{ s: 2 }}
				strokeWidth="2px"
				dashWidth="20px"
				color={`hsl(${(360 / length) * index}, 100%, 50%)`}
			/>
		))}
	</>
);

const App = () => {
	useViewport();
	return (
		<>
			<Global
				styles={css`
					body {
						margin: 0;
					}
				`}
			/>
			<GridProvider theme={defaultTheme}>
				<Grid>
					<Column as="h2">Contour</Column>
					<Column as="h3">The only grid system you'll ever need</Column>
					<Column as="p">
						Contour is built on css variables and therefore allows a lightweight
						implementation with seemingly endless posibilities.
					</Column>
					<Column as="h3">
						Using <code>Column</code>
					</Column>
					<DebugColumn />
					<Column as="h3">
						Using <code>colSpan</code>
					</Column>
					<DebugColumn colSpan={{ s: 1 }} />
					<DebugColumn colSpan={{ s: 1 }} />
					<DebugColumn colSpan={{ s: 2 }} />
					<Column as="h3">
						Using <code>strategy="flex"</code>
					</Column>
					<Column>
						<Row>
							<DebugColumn colSpan={{ s: 1 }} />
							<DebugColumn colSpan={{ s: 1 }} />
							<DebugColumn colSpan={{ s: 2 }} />
							<Rainbow length={3} />
						</Row>
					</Column>
					<Column as="h3">
						Using <code>strategy="grid"</code>
					</Column>
					<Column>
						<Row strategy="grid">
							<DebugColumn colSpan={{ s: 1 }} />
							<DebugColumn colSpan={{ s: 1 }} />
							<DebugColumn colSpan={{ s: 2 }} />
							<Rainbow length={3} />
						</Row>
						<Row strategy="grid">
							<DebugBox />
							<DebugBox />
							<DebugBox />
							<DebugBox />
							<DebugBox />
							<DebugBox />
							<DebugBox />
						</Row>
					</Column>
					<Column as="h3">
						Using <code>colCount</code> for Compound grids
					</Column>
					<Column>
						<Row strategy="grid" colCount={{ xs: 1, s: 3, m: 5, l: 7, xl: 7 }}>
							<DebugColumn colSpan={{ s: 1 }} />
							<DebugColumn colSpan={{ s: 1 }} />
							<DebugColumn colSpan={{ s: 2 }} />
						</Row>
						<Row colCount={{ xs: 1, s: 3, m: 5, l: 7, xl: 7 }}>
							<DebugColumn colSpan={{ s: 1 }} />
							<DebugColumn colSpan={{ s: 1 }} />
							<DebugColumn colSpan={{ s: 2 }} />
						</Row>
					</Column>
					<Column as="h3">
						Using <code>colStart</code> to push columns
					</Column>
					<Column>
						<Row strategy="grid">
							<DebugColumn
								colSpan={{ xs: 1 }}
								colStart={{ xs: 2, s: 2, m: 2, l: 2, xl: 2 }}
							>
								1
							</DebugColumn>
							<DebugColumn colSpan={{ xs: 1 }} colStart={{ s: 4, m: 4, l: 4, xl: 4 }}>
								2
							</DebugColumn>
							<DebugColumn colSpan={{ xs: 1 }} colStart={{ s: 3, m: 3, l: 3, xl: 3 }}>
								3
							</DebugColumn>
							<DebugColumn colSpan={{ xs: 1 }} colStart={{ s: 1, m: 1, l: 1, xl: 1 }}>
								4
							</DebugColumn>
						</Row>
					</Column>
					<Column as="h3">
						Using <code>justify</code>
					</Column>
					<Column>
						<Row justify="start">
							<DebugColumn colSpan={{ xs: 1 }} />
						</Row>
						<Row justify="center">
							<DebugColumn colSpan={{ xs: 1 }} />
						</Row>
						<Row justify="end">
							<DebugColumn colSpan={{ xs: 1 }} />
						</Row>
					</Column>
					<Column as="h3">
						Using <code>align</code>
					</Column>
					<Column>
						<Row align="start">
							<DebugColumn colSpan={{ xs: 1 }} />
							<DebugColumn colSpan={{ xs: 1 }} style={{ height: 200 }} />
							<DebugColumn colSpan={{ xs: 1, m: 2, l: 6 }} style={{ height: 100 }} />
							<DebugColumn colSpan={{ xs: 1 }} />
						</Row>
						<Row align="center">
							<DebugColumn colSpan={{ xs: 1 }} />
							<DebugColumn colSpan={{ xs: 1 }} style={{ height: 200 }} />
							<DebugColumn colSpan={{ xs: 1, m: 2, l: 6 }} style={{ height: 100 }} />
							<DebugColumn colSpan={{ xs: 1 }} />
						</Row>
						<Row align="end">
							<DebugColumn colSpan={{ xs: 1 }} />
							<DebugColumn colSpan={{ xs: 1 }} style={{ height: 200 }} />
							<DebugColumn colSpan={{ xs: 1, m: 2, l: 6 }} style={{ height: 100 }} />
							<DebugColumn colSpan={{ xs: 1 }} />
						</Row>
					</Column>
					<Column as="h3">
						Using <code>order</code> to sort columns
					</Column>
					<Column>
						<Row>
							<DebugColumn colSpan={{ s: 1 }}>1</DebugColumn>
							<DebugColumn
								colSpan={{ xs: 1 }}
								order={{ xs: -1, s: -1, m: -1, l: -1, xl: -1 }}
							>
								2
							</DebugColumn>
							<DebugColumn
								colSpan={{ xs: 1 }}
								order={{ xs: -1, s: -1, m: -1, l: -1, xl: -1 }}
							>
								3
							</DebugColumn>
							<DebugColumn
								colSpan={{ xs: 1 }}
								order={{ xs: -2, s: -2, m: -2, l: -2, xl: -2 }}
							>
								4
							</DebugColumn>
						</Row>
						<Row strategy="grid">
							<DebugColumn colSpan={{ s: 1 }}>1</DebugColumn>
							<DebugColumn
								colSpan={{ xs: 1 }}
								order={{ xs: -1, s: -1, m: -1, l: -1, xl: -1 }}
							>
								2
							</DebugColumn>
							<DebugColumn
								colSpan={{ xs: 1 }}
								order={{ xs: -1, s: -1, m: -1, l: -1, xl: -1 }}
							>
								3
							</DebugColumn>
							<DebugColumn
								colSpan={{ xs: 1 }}
								order={{ xs: -2, s: -2, m: -2, l: -2, xl: -2 }}
							>
								4
							</DebugColumn>
						</Row>
					</Column>
					<Column as="h3">Break out of the grid</Column>
					<BreakoutColumn left={{ l: 1, xl: 1 }} right={{ l: 1, xl: 1 }}>
						<DebugBox strokeWidth="2px" dashWidth="20px" color="#ab21ed">
							Left + Right
						</DebugBox>
					</BreakoutColumn>
					<BreakoutColumn left={{ l: 1, xl: 1 }}>
						<DebugBox strokeWidth="2px" dashWidth="20px" color="#ab21ed">
							Left
						</DebugBox>
					</BreakoutColumn>
					<Column />
					<BreakoutColumn right={{ l: 1, xl: 1 }}>
						<DebugBox strokeWidth="2px" dashWidth="20px" color="#ab21ed">
							Right
						</DebugBox>
					</BreakoutColumn>
					<DebugColumn />
					<DebugColumn />
					<DebugColumn colSpan={{ l: 4, xl: 4 }} />
					<DebugColumn colSpan={{ l: 4, xl: 4 }} />
					<DebugColumn colSpan={{ l: 4, xl: 4 }} />

					<BreakoutColumn left={{ xl: 1 }} colSpan={{ l: 4, xl: 4 }}>
						<DebugBox strokeWidth="2px" dashWidth="20px" color="#ab21ed" />
					</BreakoutColumn>
					<DebugColumn colSpan={{ l: 4, xl: 4 }} />
					<BreakoutColumn right={{ xl: 1 }} colSpan={{ l: 4, xl: 4 }}>
						<DebugBox strokeWidth="2px" dashWidth="20px" color="#ab21ed" />
					</BreakoutColumn>
					<DebugColumn colSpan={{ l: 4, xl: 4 }} />
					<DebugColumn colSpan={{ l: 4, xl: 4 }} />
					<DebugColumn colSpan={{ l: 4, xl: 4 }} />

					<Column as="h2">
						Cum era mori, omnes poetaes fallere altus, brevis aonideses.
					</Column>
					<Column>
						<Row>
							<BreakoutColumn
								flex
								justify="center"
								left={{ xs: 1, s: 1, m: 1, l: 1, xl: 1 }}
								right={{ xs: 1, s: 1, m: 1, l: 1, xl: 1 }}
							>
								<img
									src="https://source.unsplash.com/g5kIy_K8k68"
									alt="random image"
									css={theme =>
										css({
											width: "100%",
											display: "block",
											[theme.contour.mq.l]: {
												maxWidth: getColumnsWidth(theme, 16),
											},
										})
									}
								/>
							</BreakoutColumn>
						</Row>
						<Row align="center">
							<Column flex justify="center" as="h2">
								Domesticus, velox particulas una visum de fidelis, secundus barcas.
							</Column>
							<Column colSpan={{ l: 6 }} order={{ xs: 1, s: 1, m: 1 }}>
								<h3>
									Cum era mori, omnes poetaes fallere altus, brevis aonideses.
								</h3>
								<p>
									Compaters peregrinationes! Cum fluctui credere, omnes tuses
									transferre grandis, superbus lanistaes. Cum scutum potus, omnes
									torquises aperto fatalis, salvus omniaes. Cum habitio manducare,
									omnes humani generises gratia gratis, clemens paluses. Clemens,
									teres genetrixs cito imitari de bassus, alter capio. Cum
									clabulare cadunt, omnes tuses contactus mirabilis, altus
									demolitionees. Hercle, index emeritis!, abaculus! Cum galatae
									favere, omnes elogiumes pugna alter, bassus frondatores.
								</p>
							</Column>
							<BreakoutColumn
								flex
								justify="start"
								right={{ l: 1, xl: 1 }}
								colSpan={{ l: 6 }}
							>
								<img
									src="https://source.unsplash.com/BxuC77ENQHQ/1600x900"
									alt="random image"
									css={theme =>
										css({
											width: "100%",
											display: "block",
											[theme.contour.mq.l]: {
												maxWidth: getColumnsWidth(theme, 6, 1),
											},
										})
									}
								/>
							</BreakoutColumn>
						</Row>
						<Row align="center">
							<BreakoutColumn
								flex
								justify="end"
								left={{ xs: 1, s: 1, m: 1, l: 1, xl: 1 }}
								right={{ xs: 1, s: 1, m: 1 }}
								colSpan={{ l: 8 }}
							>
								<img
									src="https://source.unsplash.com/5LrLJl07xqQ/1600x900"
									alt="random image"
									css={theme =>
										css({
											width: "100%",
											display: "block",
											[theme.contour.mq.l]: {
												maxWidth: getColumnsWidth(theme, 10, 1),
											},
										})
									}
								/>
							</BreakoutColumn>
							<Column colSpan={{ l: 4 }} order={{ xs: 1, s: 1, m: 1 }}>
								<h3>
									Emeritis, castus advenas callide fallere de flavum, talis decor.
								</h3>
								<p>
									Teres elevatus interdum experientias resistentia est. Teres,
									primus tatas aegre contactus de alter, mirabilis luna. Cum domus
									velum, omnes caesiumes prensionem germanus, regius frondatores.
									Cum domina observare, omnes calceuses locus velox, peritus
									decores. Cum luba potus, omnes abactuses locus clemens,
									camerarius accolaes. brevis fluctus patienter acquireres
									fraticinida est.
								</p>
							</Column>
						</Row>
					</Column>
				</Grid>
			</GridProvider>
		</>
	);
};
export default App;
