	angular.module('myApp.controllers', []);
	angular.module('myApp.models', []);
	var myApp = angular.module('myApp', ['ui.router', 'myApp.controllers', 'myApp.models']);

	// configure our routes
	myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
		//
		$locationProvider.html5Mode(true);

	  // For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise(function($injector) {
			$injector.invoke(function($state) {
					$state.transitionTo("404", {}, false);
			});
		});
		
		
	  // Now set up the states
	  $stateProvider
	    .state('home', {
	      url: "/",
	      templateUrl: "partials/home.html"
	    })

	    .state('about', {
	      url: "/the-firm",
	      templateUrl: "partials/about.html"
		})
		
		.state('services', {
			url: "/practice-areas",
			templateUrl: "partials/services.html"
		})

		.state('contact', {
			url: "/contact",
			templateUrl: "partials/contact.html"
		})

		.state('corporate-law', {
			url: "/practice-area/corporate-law",
			templateUrl: "partials/corporate-law.html"
		})

		.state('start-up-advisory', {
			url: "/practice-area/start-up-advisory",
			templateUrl: "partials/start-up-advisory.html"
		})

		.state('commercial-law', {
			url: "/practice-area/commercial-law",
			templateUrl: "partials/commercial-law.html"
		})

		.state('dispute-resolution', {
			url: "/practice-area/dispute-resolution",
			templateUrl: "partials/dispute-resolution.html"
		})

		.state('energy-resources-law', {
			url: "/practice-area/energy-resources-law",
			templateUrl: "partials/energy-resources-law.html"
		})

		.state('business-financing', {
			url: "/practice-area/business-financing",
			templateUrl: "partials/business-financing.html"
		})

		.state('company-secretarial-services', {
			url: "/practice-area/company-secretarial-services",
			templateUrl: "partials/company-secretarial-services.html"
		})

		.state('real-estate', {
			url: "/practice-area/real-estate",
			templateUrl: "partials/real-estate.html"
		})

		.state('debt-recovery-and-restructuring', {
			url: "/practice-area/debt-recovery-and-restructuring",
			templateUrl: "partials/debt-recovery-and-restructuring.html"
		})

		.state('sport-law', {
			url: "/practice-area/sport-law",
			templateUrl: "partials/sport-law.html"
		})

		.state('family-law-estate-planning-and-succession', {
			url: "/practice-area/family-law-estate-planning-and-succession",
			templateUrl: "partials/family-law-estate-planning-and-succession.html"
		})

		.state('employment-and-compensation', {
			url: "/practice-area/employment-and-compensation",
			templateUrl: "partials/employment-and-compensation.html"
		})

		.state('banking-and-insurance', {
			url: "/practice-area/banking-and-insurance",
			templateUrl: "partials/banking-and-insurance.html"
		})

		.state('intellectual-property-law', {
			url: "/practice-area/intellectual-property-law",
			templateUrl: "partials/intellectual-property-law.html"
		})

		.state('entertainment-and-media', {
			url: "/practice-area/entertainment-and-media",
			templateUrl: "partials/entertainment-and-media.html"
		})

		.state('immigration', {
			url: "/practice-area/immigration",
			templateUrl: "partials/immigration.html"
		})

		.state('transportation', {
			url: "/practice-area/transportation",
			templateUrl: "partials/transportation.html"
		})

		.state('legal-opinion-and-legislative-drafting', {
			url: "/practice-area/legal-opinion-and-legislative-drafting",
			templateUrl: "partials/legal-opinion-and-legislative-drafting.html"
		})

		.state('taxation', {
			url: "/practice-area/taxation",
			templateUrl: "partials/taxation.html"
		})

		.state('privacy-policy', {
			url: "/privacy-policy",
			templateUrl: "partials/privacy-policy.html"
		})

		.state('moyosore-ogunlewe', {
			url: "/moyosore-ogunlewe",
			templateUrl: "partials/moyosore-ogunlewe.html"
		})

		.state('taiwo-akingbesote', {
			url: "/taiwo-akingbesote",
			templateUrl: "partials/taiwo-akingbesote.html"
		})

		.state('404', {
			templateUrl: 'partials/404.html'
	 })

	});