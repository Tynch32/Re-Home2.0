
<div class="col-7 col-md-6">
				<form action="/search" method="GET" class="search-form">
					<input type="text" name="keywords" placeholder="Buscar productos, marcas y más" class="search-form_input">
					<button type="submit" class="search-form_button"><i class="fas fa-search"></i></button>
				</form>
			</div>

Hernan Escudero00:45


<!DOCTYPE html>
<html lang="es">
<!-- Include Head -->
<%- include('partials/head', {title: 'Resultados de tu búsqueda'}) %>
<body>
	<!-- Header -->
	<%- include('partials/headerNavbar') %>
	<!-- /Header -->
	
	<!-- Banner -->
	<div class="banner"></div>
	<!-- /Banner -->

	<!-- todos los productos -->
	<div class="container products-wrapper">
		<div class="row">
			<div class="col-12">
				<h2 class="products-title">Resultados de la búsqueda: <%= keywords%></h2>
			</div>
			<% if (results.length) { %>
				<% results.forEach(product => { %>
					<div class="col-12 col-sm-6 col-lg-3">
						<%- include{'partials/productCard',{
							...product,
							toThousand
						}} %>
					</div>
			<% }) %>
			
			<% }else{ %>
				

			<div class="col-12">
				<h2 class="products-title" style="color: tomato;">No hay productos que coincidan con esa búsqueda</h2>
			</div>
			<% } %>
		</div>
	</div>
	<!-- /todos los productos -->

	<!-- footer -->
	<%- include('partials/footer') %>
	<!-- /footer
Hernan Escudero00:47
</body>	
</html>
---------------------------------------
<header class="main-header">
	<div class="container">
		<div class="row align-items-center">
			<div class="col-5 col-md-2">
				<a href="/" class="main-header_home-link">
					<img src="/images/logo-mercado-liebre.svg">
				</a>
			</div>

			<div class="col-7 col-md-6">
				<form action="/search" method="GET" class="search-form">
					<input type="text" name="keywords" placeholder="Buscar productos, marcas y más" class="search-form_input">
					<button type="submit" class="search-form_button">
Hernan Escudero00:48
<i class="fas fa-search"></i></button>
				</form>
			</div>

			<div class="col-12 col-md-4">
				<a href="#" class="main-header_credit-link">
					<i class="fas fa-hand-holding-usd"></i>
					Comprá en cuotas y sin tarjeta de crédito
				</a>
			</div>
		</div>

		<button class="btn-toggle-navbar">
			<i class="fas fa-bars"></i>
		</button>

		<nav class="main-navbar">
			<ul class="left-navbar">
				<li><a href="/products">Todos los productos</a></li>
				<li><a href="#">Ofertas</a></li>
<li><a href="#">Tiendas Oficiales</a></li>
				<li><a href="/products/create">Vender</a></li>
				<li><a href="#">Ayuda</a></li>
			</ul>

			<ul class="right-navbar">
				<li><a href="#">Creá tu cuenta <i class="far fa-address-card"></i></a></li>
				<li><a href="#">Ingresá <i class="fas fa-sign-in-alt"></i></a></li>
				<li><a href="#">Mis compras <i class="fas fa-shopping-basket"></i></a></li>
			</ul>
		</nav>
	</div>
</header>