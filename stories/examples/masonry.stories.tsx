/// <reference types="@emotion/react/types/css-prop" />
import { Column, Grid } from "@contour/react";
import { Story } from "@storybook/react";
import React from "react";
import { v4 } from "uuid";
import { DebugBox } from "../helpers";

const items = Array.from({ length: 50 }, () => ({
	id: v4(),
	height: Math.round(Math.random() * 300) + 50,
}));

export const Masonry: Story = () => {
	return (
		<>
			<div style={{ maxWidth: 600, margin: "auto", padding: "1em", background: "yellow" }}>
				<p>
					<strong>Warning:</strong> This feature is only implemented in Firefox, and can
					be enabled by setting the flag{" "}
					<code>layout.css.grid-template-masonry-value.enabled</code> to <code>true</code>{" "}
					in <code>about:config</code>, in order to allow testing and providing of
					feedback.
				</p>
			</div>
			<Grid strategy="grid" style={{ gridTemplateRows: "masonry" }}>
				{items.map((item, index) => {
					const positionedItem = 12;
					return (
						<Column
							key={item.id}
							colSpan={{ s: 2, m: 4 }}
							style={index === positionedItem ? { gridColumn: "3 / 5" } : undefined}
						>
							<DebugBox
								style={{ height: item.height, padding: "1rem" }}
								strokeWidth="2px"
								color={index === positionedItem ? "red" : "blue"}
							>
								{index + 1}
								{index === positionedItem && " (positioned)"}
							</DebugBox>
						</Column>
					);
				})}
			</Grid>
		</>
	);
};

Masonry.parameters = {
	controls: { hideNoControlsWarning: true },
};

const story = {
	component: () => null,
	title: "Examples / Masonry",
};

export default story;
