<template>
	<main class="contact">
		<h1>Contact</h1>
		<div class="contact_wrap">
			<ul>
				<li>
					<img class="mail icon" src="/images/icon/mail_icon.svg" alt="mail" />
					<h2 class="mail_address">nomnommorn@gmail.com</h2>
				</li>

				<li>
					<a href="https://www.instagram.com/nomnommorn_cr/" target="_blank">
						<img class="ig icon" src="/images/icon/IG_icon.svg" alt="Instagram" />
						<h2 class="ig_account">@nomnommorn_cr</h2>
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/nomnommorn/" target="_blank">
						<img class="ig icon" src="/images/icon/IG_icon.svg" alt="Instagram" />
						<h2 class="ig_account">@nomnommorn</h2>
					</a>
				</li>
				<li>
					<a href="https://x.com/nomnommorn" target="_blank">
						<img class="x icon" src="/images/icon/x_icon.svg" alt="Instagram" />
						<h2 class="x_account">@nomnommorn</h2>
					</a>
				</li>
			</ul>
		</div>
	</main>
</template>

<style lang="scss" scope>
.contact {
    h1 {
        margin: 0 0 20px;
    }
    &_wrap {
        width: 100%;
        margin: 0 auto;
        @media (max-width: $spwidth) {
            margin: 13px auto 0;
        }
        ul {
            text-align: center;
            width: 350px;
            display: block;
            margin: 0 auto;
            list-style: none;
						@media (max-width: $spwidth) {
							width: 100%;
						}
            li {
                margin: 0 auto 120px;
								h2 {
									@media (max-width: $spwidth) {
										font-size: 17px;
									}
								}
                .icon {
                    width: auto;
                    height: 150px;
                    margin: 0 auto;
										@media (max-width: $spwidth) {
											width: 80px;
										}
                }
            }
        }
    }
}
</style>