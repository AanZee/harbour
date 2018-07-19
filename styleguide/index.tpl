{{ > includes/page-start }}

	<div class="layout">
		<div class="layout__section">
			<div class="layout__inner">
				<div class="layout__section">
					<div class="menu">
						{{ #routes }}
							<a class="menu__item"
								href="{{ category }}/{{ slug }}"
							>
								{{ name }}
							</a>
						{{ /routes }}
					</div>
				</div>
			</div>
		</div>
	</div>

{{ > includes/page-end }}
