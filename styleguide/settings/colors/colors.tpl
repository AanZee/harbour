{{ > includes/page-start }}

	<div class="layout__section">
		<div class="layout__inner layout__inner--padded-top-0">
			<div class="layout__section">
				<div class="layout__section layout__section--bordered-bottom">
					<div class="layout__inner layout__inner--stretched layout__inner--padded-60 layout__inner--padded-left-right-0">
						<div class="headings">
							<h2 class="headings__title">
								Basic colors
							</h2>
						</div>
					</div>
				</div>
				<div class="layout__section layout__section--spaced-70">
					<div class="layout__inner layout__inner--padded-70">
						<div class="collection collection--grid-50">
							{{ #templateData.baseColors }}
								<div class="collection__item">
									<div class="color-card color-card--{{ modifier }}">
										<div class="color-card__title">
											{{ name }}
										</div>
									</div>
								</div>
							{{ /templateData.baseColors }}
						</div>
					</div>
				</div>
			</div>
			<div class="layout__section">
				<div class="layout__section layout__section--bordered-bottom">
					<div class="layout__inner layout__inner--stretched layout__inner--padded-60 layout__inner--padded-left-right-0">
						<div class="headings">
							<h2 class="headings__title">
								Background colors
							</h2>
						</div>
					</div>
				</div>
				<div class="layout__section layout__section--spaced-70">
					<div class="layout__inner layout__inner--padded-70">
						<div class="collection collection--grid-50">
							{{ #templateData.backgroundColors }}
								<div class="collection__item">
									<div class="color-card color-card--{{ modifier }}">
										<div class="color-card__title">
											{{ name }}
										</div>
									</div>
								</div>
							{{ /templateData.backgroundColors }}
						</div>
					</div>
				</div>
			</div>
			<div class="layout__section">
				<div class="layout__section layout__section--bordered-bottom">
					<div class="layout__inner layout__inner--stretched layout__inner--padded-60 layout__inner--padded-left-right-0">
						<div class="headings">
							<h2 class="headings__title">
								Tints
							</h2>
						</div>
					</div>
				</div>
				{{ #templateData.tints }}
					<div class="layout__section layout__section--spaced-70">
						<div class="layout__inner layout__inner--padded-70">
							<div class="layout__section layout__section--spaced-70">
								<div class="headings">
									<h3 class="headings__subtitle">
										{{ name }}
									</h3>
								</div>
							</div>
							<div class="layout__section layout__section--spaced-70">
								<div class="collection collection--grid-40">
									{{ #modifiers }}
										<div class="collection__item">
											<div class="color-card color-card--90 color-card--{{ modifier }}">
												<div class="color-card__title">
													{{ name }}
												</div>
											</div>
										</div>
									{{ /modifiers }}
								</div>
							</div>
						</div>
					</div>
				{{ /templateData.tints }}
			</div>
		</div>
	</div>

{{ > includes/page-end }}
