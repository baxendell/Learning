<?php

function spa_rest_api_init() {
	register_rest_field(
		'post',
		'spa_meta',
		['get_callback' => 'spa_get_additional_post_data',
		'update_callback' => null,
		'schema' => null
		]
	);

	register_rest_route('spa/v1', 'menus', [
		'methods' => 'GET',
		'callback' => 'spa_menus_get_all_menus'
		]
	);

	register_rest_route('spa/v1', 'menus/(?P<id>[a-zA-Z(-]+)', [
		'methods' => 'GET',
		'callback' => 'spa_menus_get_menu_data'
		]
	);
}