<template>
	<div id="login" class="login">
		<div class="login__wrap">
			<div class="login__box">
				<h1 class="login__title">
					<img src="@/assets/admin/images/logo.png" alt="B DOT Creative">
				</h1>
				<div class="login__inner">
					<ul class="login__list">
						<li>
							<input type="text" class="ipt ipt--login" placeholder="ID">
						</li>
						<li>
							<input type="text" class="ipt ipt--login" placeholder="PASSWORD">
						</li>
					</ul>
					<div class="login__button">
						<button type="button" class="btn-login">
							LOGIN
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	@import "@/assets/admin/css/common.scss";
</style>