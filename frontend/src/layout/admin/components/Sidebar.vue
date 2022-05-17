<template>
	<header id="sidebar" class="sidebar">
		<h1 class="sidebar__logo">
			<a href="/admin">
				B dot
			</a>
		</h1>
		<nav class="gnb">
			<router-link to="/admin/dashboard">
				<i class="material-icons">home</i>
				HOME
			</router-link>
			<router-link to="/admin/banner">
				<i class="material-icons">apps</i>
				BANNER
			</router-link>
			<router-link to="/admin/portfolio">
				<i class="material-icons">collections</i>
				PORTFOLIO
			</router-link>
			<router-link to="/admin/news">
				<i class="material-icons">library_books</i>
				NEWS
			</router-link>
			<router-link to="/">
				<i class="material-icons">people</i>
				MANAGE
			</router-link>
			<div class="gnb__logout">
				<router-link to="/logout" class="btn-logout">
					LOGOUT
				</router-link>
			</div>
		</nav>
	</header>
</template>