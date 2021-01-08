<?php

$router->group(['prefix' => 'api'],function() use ($router){
	$router->get('portfolio',['uses'=>'PortfolioController@index']);
	$router->post('contact',['uses'=>'ContactController@insert']);
});

// $router->get('/', function () use ($router) {
//     return $router->app->version();
// });
