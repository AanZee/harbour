<?php
	$route = parse_url(substr($_SERVER["REQUEST_URI"], 1))["path"];

	if (is_file($route)) {
		if(substr($route, -4) == ".php") {
			require "templates/".$route;
			exit;
		}
		return false;
	} else {
		if ($route) {
			require "templates/".$route;
		} else {
			require "templates/index.php";
		}
	}
?>