/// <reference types="@emotion/react/types/css-prop" />
import { Column, Grid } from "@contour/react";
import { defaultTheme } from "@contour/theme";
import { pxToRem } from "@contour/utils";
import { css, Global, useTheme } from "@emotion/react";
import { Story } from "@storybook/react";
import React, { FC, HTMLProps } from "react";

import { DebugBox, DebugColumn } from "../helpers";

const Header: FC = ({ children }) => {
	const { contour = defaultTheme.contour } = useTheme();
	return (
		<header
			css={css`
				background: #123456;
				color: white;
			`}
		>
			<div
				css={css`
					display: flex;
					box-sizing: border-box;
					max-width: ${pxToRem(contour.breakpoints.values.xl)};
					margin: auto;
					padding: ${pxToRem(contour.gap.y.xs)} ${pxToRem(contour.margin.x.xs)};
					${contour.breakpoints.keys.slice(1).map(
						key => css`
							${contour.mq[key]} {
								padding: ${pxToRem(contour.gap.y[key])}
									${pxToRem(contour.margin.x[key])};
							}
						`
					)}
				`}
			>
				{children}
			</div>
		</header>
	);
};

const Link: FC<HTMLProps<HTMLAnchorElement>> = ({ children, ...props }) => (
	<a
		{...props}
		rel="noreferrer"
		css={css`
			display: block;
			padding: 1rem;
			color: currentColor;
		`}
	>
		{children}
	</a>
);

const Nav: FC = ({ children }) => {
	const { contour = defaultTheme.contour } = useTheme();
	return (
		<nav
			css={css`
				display: none;
				${contour.mq.m} {
					display: block;
				}
			`}
		>
			{children}
		</nav>
	);
};

const InlineLink: FC<HTMLProps<HTMLAnchorElement>> = ({ children, ...props }) => (
	<a
		{...props}
		rel="noreferrer"
		css={css`
			display: inline-block;
			padding: 1rem;
			color: currentColor;
		`}
	>
		{children}
	</a>
);

export const Page: Story = () => {
	const { contour = defaultTheme.contour } = useTheme();
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
			<Header>
				<svg
					css={css`
						${contour.mq.m} {
							display: none;
						}
					`}
					width={24}
					viewBox="0 0 24 24"
				>
					<path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
				</svg>
				<Nav>
					<InlineLink href="#">About me</InlineLink>
					<InlineLink href="#">Projects</InlineLink>
					<InlineLink href="#">Contact</InlineLink>
				</Nav>
			</Header>
			<Grid as="main">
				<Column as="h1">
					<DebugBox>Hello Contour</DebugBox>
				</Column>
				<Column colSpan={{ m: 4 }}>
					<DebugBox style={{ height: 100 }} />
				</Column>
				<Column colSpan={{ m: 4 }}>
					<DebugBox style={{ height: 100 }} />
				</Column>
				<Column colSpan={{ m: 4 }}>
					<DebugBox style={{ height: 100 }} />
				</Column>
				<Column colSpan={{ m: 4, l: 6 }}>
					<DebugBox style={{ height: 100 }} />
				</Column>
				<Column colSpan={{ m: 4, l: 6 }}>
					<DebugBox style={{ height: 100 }} />
				</Column>
				<Column colSpan={{ s: 2, m: 4, l: 2 }}>
					<DebugBox style={{ height: 100 }} />
				</Column>
				<Column fill>
					<DebugBox style={{ height: 100 }} color="red" />
				</Column>
				<Column colSpan={{ s: 2, m: 4, l: 2 }}>
					<DebugBox style={{ height: 100 }} />
				</Column>
			</Grid>
			<footer
				css={css`
					background: #123456;
					color: white;
				`}
			>
				<Grid colCount={{ xs: 1, s: 1, m: 2, l: 4, xl: 4 }}>
					<DebugColumn colSpan={{ xs: 1 }}>
						<nav>
							<Link href="#">About me</Link>
							<Link href="#">Projects</Link>
							<Link href="#">Contact</Link>
						</nav>
					</DebugColumn>
					<DebugColumn colSpan={{ xs: 1 }}>
						<nav>
							<Link href="#">Link 1</Link>
							<Link href="#">Link 2</Link>
							<Link href="#">Link 3</Link>
						</nav>
					</DebugColumn>
					<DebugColumn colSpan={{ xs: 1 }}>
						<nav>
							<Link href="#">Link 1</Link>
							<Link href="#">Link 2</Link>
							<Link href="#">Link 3</Link>
						</nav>
					</DebugColumn>
					<DebugColumn colSpan={{ xs: 1 }}>
						<nav>
							<Link href="#">Link 1</Link>
							<Link href="#">Link 2</Link>
							<Link href="#">Link 3</Link>
						</nav>
					</DebugColumn>
				</Grid>
			</footer>
		</>
	);
};

Page.parameters = {
	controls: { hideNoControlsWarning: true },
};

const story = {
	component: () => null,
	title: "Examples / Page",
};

export default story;
