<?php

function spa_enqueue_scripts(){

	wp_enqueue_style('spa_bootstrap', get_template_directory_uri() . '/assets/css/bootstrap.min.css', false);

	wp_enqueue_script('spa_bootstrap', get_template_directory_uri() . '/assets/js/bootstrap.min.js', array('jquery'), false, true);

	wp_enqueue_script('spa_moments', get_template_directory_uri() . '/assets/js/moment.js', array(), false, true);

	wp_enqueue_script('spa_bundle', 'http://www.blakebaxendell.com/wp-content/themes/spa/app/dist/build.js', [], false, true);

	wp_localize_script('spa_bundle','wp_rest_api', [
		'base_url' => home_url('/wp-json/wp/v2/'),
		'spa_url' => home_url('/wp-json/spa/v1/')
	]);
}