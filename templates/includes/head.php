<?php if(!$pageTitle) { $pageTitle = "[Page title]"; } ?>
<head>
	<meta charset="utf-8">
	<!-- Viewport and stylesheet at the top for better performance -->
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="/css/main.css" />
	<meta http-equiv="x-ua-compatible" content="ie=edge">

	<title><?php if($pageTitle != "home") { echo $pageTitle . " &middot; "; } ?>Harbour | Front-end framework</title>

	<meta name="description" content="Front-end framework" />
	<meta name="robots" content="index, follow">

	<!-- TODO: Seperate map with all modern browser icons -->
	<!-- <link rel="apple-touch-icon" href="/images/apple-touch-icon.png">
	<link rel="shortcut icon" href="/images/favicon.ico"> -->
</head>