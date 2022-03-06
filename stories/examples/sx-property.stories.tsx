/// <reference types="@emotion/react/types/css-prop" />
import { Grid, Row } from "@contour/react";

import { css, Global } from "@emotion/react";
import { Story } from "@storybook/react";
import React from "react";

import { DebugBox, DebugColumn } from "../helpers";

export const SXProperty: Story = () => {
	return (
		<>
			<Global
				styles={css`
					body,
					.sb-show-main.sb-main-padded {
						margin: 0;
						padding: 0;
					}

					* {
						box-sizing: border-box;
					}
				`}
			/>
			<Grid
				as={DebugBox}
				sx={{
					my: { xs: 1, s: 2, m: 3, l: 4, xl: 4 },
					pb: 10,
					color: {
						xs: "white",
						s: "black",
						m: "white",
						l: "black",
						xl: "white",
					},
					bgColor: { xs: "red", s: "yellow", m: "blue", l: "orange", xl: "purple" },
				}}
			>
				<DebugColumn sx={{ py: 2, bgColor: "#ccc", color: "black" }}>
					<p>Let's get fancy</p>
					<Row as={DebugBox} sx={{ py: 2, bgColor: "#777", color: "black" }}>
						<DebugColumn sx={{ py: 2, bgColor: "#eee", color: "black" }}>
							<Row as={DebugBox} sx={{ py: 2, bgColor: "#333", color: "white" }}>
								<DebugColumn
									sx={{
										py: 3,
										pl: { xs: 1, s: 2, m: 3, l: 4, xl: 4 },
										color: {
											xs: "white",
											s: "black",
											m: "white",
											l: "black",
											xl: "white",
										},
										bgColor: {
											xs: "red",
											s: "yellow",
											m: "blue",
											l: "orange",
											xl: "purple",
										},
										h1: {
											background: "white",
											color: "darkblue",
											py: {
												l: 10,
												xl: 10,
											},
											my: 0,
										},
										p: {
											background: "yellow",
											color: "darkblue",
											py: {
												l: 3,
												xl: 3,
											},
											mx: 5,
											my: 0,
										},
									}}
								>
									<h1>The SX Property</h1>
									<p>So powerful</p>
								</DebugColumn>
							</Row>
						</DebugColumn>
					</Row>
				</DebugColumn>
				<DebugColumn as="section" sx={{ py: 3 }}>
					<h2>Hiding columns</h2>

					<Row as={DebugBox}>
						<DebugColumn
							sx={{
								display: { l: "none" },
								color: { l: "white" },
								backgroundColor: { l: "green" },
							}}
						>
							Hidden on l and up
						</DebugColumn>
						<DebugColumn
							sx={{
								display: { s: "none", l: "block" },
								color: { l: "white" },
								backgroundColor: { l: "blue" },
							}}
						>
							Hidden on s and m
						</DebugColumn>
						<DebugColumn
							colSpan={{ xs: 2 }}
							sx={{
								display: { s: "none", l: "block" },
								color: "black",
								backgroundColor: "yellow",
							}}
						>
							Hidden on s and m
						</DebugColumn>
						<DebugColumn
							colSpan={{ xs: 2 }}
							sx={{
								order: -1,
								display: { s: "none", l: "block" },
								color: "white",
								backgroundColor: "green",
							}}
						>
							Hidden on s and m
						</DebugColumn>
					</Row>
				</DebugColumn>
			</Grid>
		</>
	);
};

SXProperty.parameters = {
	controls: { hideNoControlsWarning: true },
};

const story = {
	component: () => null,
	title: "Examples/SX Property",
};

export default story;
