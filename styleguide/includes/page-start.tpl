<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="initial-scale=1.0, maximum-scale=1, width=device-width, user-scalable=no">
		<title>Harbour Styleguide &middot; {{ pageTitle }}</title>
		<link rel="stylesheet" href="/css/index.css">
	</head>
	<body>
		<section class="page">
			<header class="page__header">
				<div class="layout">
					<div class="layout__section">
						<div class="layout__inner layout__inner--padded-top-bottom-60 layout__inner--padded-left-right-90">
							<div class="headings">
								<a class="headings__title"
									href="/"
								>
									Harbo<span style="text-decoration: line-through;">u</span>r
								</a>
							</div>
						</div>
					</div>
				</div>
			</header>
			<main class="page__main">
				<div class="layout">
					<div class="layout__section layout__section--dark">
						<div class="layout__inner layout__inner--padded-90">
							<div class="layout__columns">
								<div class="layout__column layout__column--two-thirds">
									<div class="headings headings--diap">
										<div class="headings__headline">
											{{ pageTitle }}
										</div>
									</div>
								</div>
								<div class="layout__column layout__column--one-third">
									<div class="layout__section layout__section--right-aligning layout__section--vertical-centering">
										<div class="popover popover--left-bottom popover--scaled">
											<input class="popover__status"
												type="checkbox"
												id="styleguide-menu"
												aria-hidden="true"
											>
											<div class="popover__action">
												<label class="button button--outline button--90"
													for="styleguide-menu">Hamburger</label>
											</div>
											<section class="popover__body">
												<header class="popover__header">
													<h1 class="popover__title"></h1>
													<label class="popover__close-action"
														for="styleguide-menu"
													>
														Close
													</label>
												</header>
												<div class="popover__main">
													<div class="menu menu--padding">
														{{ #routes }}
															<a class="menu__item"
																href="/{{ category }}/{{ slug }}"
															>
																{{ name }}
															</a>
														{{ /routes }}
													</div>
												</div>
											</section>
											<label class="popover__backdrop"
												for="styleguide-menu"
											>
												Close
											</label>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
