/// <reference types="@emotion/react/types/css-prop" />
import Column from "@contour/react/column";
import Grid from "@contour/react/grid";
import GridProvider from "@contour/react/provider";
import { PUBLIC_CSS_VARS, pxToRem } from "@contour/utils";
import { css, Global, useTheme } from "@emotion/react";
import { Story } from "@storybook/react";
import React, { FC, HTMLAttributes, HTMLProps } from "react";
import { DebugBox, DebugColumn } from "../helpers";

const Header: FC = ({ children }) => {
	const theme = useTheme();
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
					max-width: ${pxToRem(theme.contour.breakpoints.xl)};
					margin: auto;
					padding: ${pxToRem(theme.contour.gap.xs)} ${pxToRem(theme.contour.margin.xs)};
					${theme.contour.mq.s} {
						padding: ${pxToRem(theme.contour.gap.s)} ${pxToRem(theme.contour.margin.s)};
					}
					${theme.contour.mq.m} {
						padding: ${pxToRem(theme.contour.gap.m)} ${pxToRem(theme.contour.margin.m)};
					}
					${theme.contour.mq.l} {
						padding: ${pxToRem(theme.contour.gap.l)} ${pxToRem(theme.contour.margin.l)};
					}
					${theme.contour.mq.xl} {
						padding: ${pxToRem(theme.contour.gap.xl)}
							${pxToRem(theme.contour.margin.xl)};
					}
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
	const theme = useTheme();
	return (
		<nav
			css={css`
				display: none;
				${theme.contour.mq.m} {
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
	return (
		<GridProvider>
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
				<svg width={24} viewBox="0 0 24 24">
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
				<Column colSpan={{ s: 2, m: 8, l: 10 }}>
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
		</GridProvider>
	);
};

Page.parameters = {
	controls: { hideNoControlsWarning: true },
};

const story = {
	component: () => null,
	title: "Examples/Page",
};

export default story;
