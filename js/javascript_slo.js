  // Holly Dependencies Batman, 7 JS Imports plus 2 Css Stylesheets !
var app = angular.module('App',["chart.js", "ngMaterial"]);
app.controller('ctrl', ['$scope', function($scope, $mdDialog) { 
		$scope.Math = window.Math;
		
		$scope.reload = function(){ location.reload(); }	 // for refreshing page	
								
		$scope.getQueryVariable = function(variable)
			{
			   var query = window.location.search.substring(1);
			   var vars = query.split("&");
			   for (var i=0;i<vars.length;i++) {
					   var pair = vars[i].split("=");
					   if(pair[0] == variable){return pair[1];}
			   }
			   return(false);
			}

		addEventListener('load', load, false);

        function load(){
            var div_proMedica = document.getElementById("proMedica");
			var div_not_proMedica = document.getElementById("not_proMedica");
			var button_proMedica = document.getElementById("proMedica_naprej");
			var button_not_proMedica = document.getElementById("not_proMedica_naprej");

			if($scope.getQueryVariable("female") && $scope.getQueryVariable("age") && $scope.getQueryVariable("waist") && $scope.getQueryVariable("physInact") && $scope.getQueryVariable("bSugarHist") && $scope.getQueryVariable("hyperDrugs") && $scope.getQueryVariable("diabFamClose") && $scope.getQueryVariable("diabFamFar"))
				{
				//alert("ProMedica podatki");
					div_proMedica.style.display = 'block';
					div_not_proMedica.style.display = 'none';
					button_proMedica.style.display = 'block';
					button_not_proMedica.style.display = 'none';
					
					$scope.isProMedica = true;
					
					$scope.var_female =  $scope.getQueryVariable("female");
					$scope.var_age =  $scope.getQueryVariable("age");
					$scope.var_waist =  $scope.getQueryVariable("waist");
					$scope.var_physInact =  $scope.getQueryVariable("physInact");
					$scope.var_bSugarHist =  $scope.getQueryVariable("bSugarHist");
					$scope.var_hyperDrugs =  $scope.getQueryVariable("hyperDrugs");
					$scope.var_diabFamClose =  $scope.getQueryVariable("diabFamClose");
					$scope.var_diabFamFar =  $scope.getQueryVariable("diabFamFar");						
			
					$scope.var_waist2 = $scope.var_waist;
					$scope.var_bSugarHist2 = $scope.var_bSugarHist;
					$scope.var_hyperDrugs2 = $scope.var_hyperDrugs;
					$scope.var_physInact2 = $scope.var_physInact;
				
					$scope.var_age_text = $scope.var_age;
					$scope.var_waist_text = $scope.var_waist;
										
					if($scope.var_female ==1){
						$scope.var_female_text = "Ženski";
					}else{
						$scope.var_female_text = "Moški";
					}
					
					if($scope.var_physInact ==1){
						$scope.var_physInact_text = "Ne";
					}else{
						$scope.var_physInact_text = "Da";
					}
					
					if($scope.var_bSugarHist ==1){
						$scope.var_bSugarHist_text = "Da";
					}else{
						$scope.var_bSugarHist_text = "Ne";
					}
					
					if($scope.var_hyperDrugs ==1){
						$scope.var_hyperDrugs_text = "Da";
					}else{
						$scope.var_hyperDrugs_text = "Ne";
					}

					if($scope.var_diabFamClose == true && $scope.var_diabFamFar == true){
						$scope.var_diabFam_text = "Da (bližji in daljni sorodniki)";
					}else if($scope.var_diabFamClose == true && $scope.var_diabFamFar == false) {
						$scope.var_diabFam_text = "Da (starši, bratje, sestre, otroci)";
					}else if($scope.var_diabFamClose == false && $scope.var_diabFamFar == true) {
						$scope.var_diabFam_text = "Da (stari starši, tete, strici, bratranci, sestriène)";
					}else{
						$scope.var_diabFam_text = "Ne";
					}	
				
				
				}else{
					//alert("Ne ProMedica podatki");
					div_proMedica.style.display = 'none';
					div_not_proMedica.style.display = 'block';
					button_proMedica.style.display = 'none';
					button_not_proMedica.style.display = 'block';
					$scope.isProMedica = false;
				}
        }

						
  		$scope.data = {
		  selectedIndex: 0,
		  secondLocked:  true,
		  secondLabel:   "Item Two",
		};
		$scope.next = function() {
					$scope.displayDiabetesOnly = false;
					$scope.graphTitleText =  "PRE-DIABETES";
					$scope.physInact_show = false;
					$scope.hypertensionDrugs_show = true;
					$scope.calculateProb();
					$scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2) ;

		};
		$scope.previous = function() {
			$scope.reload(); // for refreshing page
			$scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
		};

		$scope.manuallyCheck = function(){
			/*$scope.submit_bSugarHist($scope.bSugarHist);
			$scope.submit_age($scope.var_age); 
			$scope.submit_female($scope.var_female);
			$scope.submit_waist($scope.var_waist); 
			$scope.submit_bSugarHist($scope.var_bSugarHist); 
			$scope.submit_physInact($scope.var_physInact); 
			$scope.submit_hyperDrugs($scope.var_hyperDrugs); 
			$scope.submit_diabFamClose($scope.var_diabFamClose); 
			$scope.submit_diabFamFar($scope.var_diabFamFar);*/
		}

		
		
			 $scope.submit_age = function(value) {
				$scope.var_age = value;
				};
			$scope.submit_female = function(value) {
				if(value == "f"){
					$scope.var_female = 1;
				}else{
					$scope.var_female = 0;
				}
				};	
			$scope.submit_waist = function(value) { 
				$scope.var_waist = value;
				$scope.var_waist2=$scope.var_waist ;
				};	
				
			$scope.submit_bSugarHist = function(value) {
				if(value == "Yes"){
					$scope.var_bSugarHist = 1;
				}else{
					$scope.var_bSugarHist = 0
				}
				$scope.var_bSugarHist2 = $scope.var_bSugarHist;
									
				if($scope.var_bSugarHist==0){
					$scope.bloodSugar_show=true;
				}else{
					$scope.bloodSugar_show=false;
				}
			};	
			
			$scope.submit_physInact = function(value) {
				if(value == "Yes"){
					$scope.var_physInact = 0;
				}else{
					$scope.var_physInact = 1;
				}
				$scope.var_physInact2 = $scope.var_physInact;
				};	
				
			$scope.submit_hyperDrugs = function(value) {
				if(value == "Yes"){
					$scope.var_hyperDrugs = 1;

				}else{
					$scope.var_hyperDrugs = 0;
				}
				$scope.var_hyperDrugs2 = $scope.var_hyperDrugs;
		/*		
				if($scope.var_hyperDrugs==0){
					$scope.hypertensionDrugs_show=true;
				}else{
					$scope.hypertensionDrugs_show=false;
				}
*/
				};	
				
				$scope.var_diabFamClose = 0;
				$scope.var_diabFamFar = 0;
				
			$scope.submit_diabFamClose = function(value) {
				if (value == true){
					$scope.var_diabFamClose = 1;
				}else{
					$scope.var_diabFamClose = 0;
				}
				};			
				
				
			$scope.submit_diabFamFar = function(value) {
				if (value == true){
					$scope.var_diabFamFar = 1;
				}else{
					$scope.var_diabFamFar  = 0;
				}
				};

				
				
			$scope.submit_bSugarHist2 = function(value) {
				if(value == "Yes"){
					$scope.var_bSugarHist2 = 1;
				}else{
					$scope.var_bSugarHist2 = 0
				}
				$scope.calculateProb();
			};	
			
			$scope.submit_physInact2 = function(value) {
				if(value == "Yes"){
					$scope.var_physInact2 = 0;
				}else{
					$scope.var_physInact2 = 1;
				}
				$scope.calculateProb();
			};	
			
			$scope.submit_waist2 = function(value) { 
				$scope.var_waist2 = value;
				$scope.calculateProb();
			};	

			$scope.submit_hyperDrugs2 = function(value) {
				if(value == "Yes"){
					$scope.var_hyperDrugs2 = 1;

				}else{
					$scope.var_hyperDrugs2 = 0;
				}
				$scope.calculateProb();
				};	


		$scope.calculateProb = function() {

			
		/*
			Threshold vrednost za T2DM je 0.1259990, 
			za prediabetes (IFG) pa 0.2439808.
		*/
				$scope.prob_diab = [];
				$scope.prob_diab_hyp = [];
				
				$scope.prob_prediab = [];
				$scope.prob_prediab_hyp = [];
				
				$scope.age_label = [];
				
				currentAge = $scope.var_age;
			    for (var i = 0; i <= 20; i=i+1) { // i++ needs to be j++
					$scope.age_label[i] = currentAge.toString();
					
					if($scope.displayDiabetesOnly){
						/*	DIABETES */	
						$scope.T2D = (1/(1+ Math.exp(-(-8.492 + 0.032*currentAge + 0.029*$scope.var_waist - 0.746* $scope.var_female + 0.625 * $scope.var_physInact +2.537* $scope.var_bSugarHist))));
						prob_val = $scope.T2D*100;
						$scope.prob_diab[i] = prob_val;
						
						$scope.T2D_hyp = (1/(1+ Math.exp(-(-8.492 + 0.032*currentAge + 0.029*$scope.var_waist2 - 0.746* $scope.var_female + 0.625 * $scope.var_physInact2 +2.537* $scope.var_bSugarHist2))));
						prob_val_hyp = $scope.T2D_hyp*100;
						$scope.prob_diab_hyp[i] = prob_val_hyp;
						
						//alert($scope.T2D_hyp + " " +$scope.var_waist2+" " +$scope.var_female+" " +$scope.var_physInact2+" " +$scope.var_bSugarHist2);

					}else{
						/* PREDIABETES */
						$scope.IFG = (1/(1+Math.exp(-(-6.483+ 0.04* currentAge + 0.027* $scope.var_waist - 0.777* $scope.var_female + 0.319* $scope.var_hyperDrugs + 2.578* $scope.var_bSugarHist + 0.572* $scope.var_diabFamFar + 0.522* $scope.var_diabFamClose))));		
						//alert($scope.IFG + " " +$scope.var_waist+" " +$scope.var_female+" " +$scope.var_hyperDrugs+" " +$scope.var_bSugarHist+" " +$scope.var_diabFamFar+" " +$scope.var_diabFamClose);
						prob_val_ = $scope.IFG*100;
						$scope.prob_prediab[i] = prob_val_;	
						
						$scope.IFG_hyp = (1/(1+Math.exp(-(-6.483+ 0.04* currentAge + 0.027* $scope.var_waist2 - 0.777* $scope.var_female + 0.319* $scope.var_hyperDrugs2 + 2.578* $scope.var_bSugarHist2 + 0.572* $scope.var_diabFamFar + 0.522* $scope.var_diabFamClose))));		
						prob_val_hyp_ = $scope.IFG_hyp*100;
						$scope.prob_prediab_hyp[i] = prob_val_hyp_;
						//alert($scope.IFG_hyp + " " +$scope.var_waist2+" " +$scope.var_female+" " +$scope.var_hyperDrugs2+" " +$scope.var_bSugarHist2+" " +$scope.var_diabFamFar+" " +$scope.var_diabFamClose);

					}
										
					currentAge++;
				}


/*
			$scope.T2D = (1/(1+ Math.exp(-(-8.492 + 0.032*$scope.var_age + 0.029*$scope.var_waist - 0.746* $scope.var_female + 0.625 * $scope.var_physInact +2.537* $scope.var_bSugarHist))));
*//*
			$scope.IFG = (1/(1+Math.exp(-(-6.483+ 0.04* $scope.var_age + 0.027* $scope.var_waist - 0.777* $scope.var_female + 0.319* $scope.var_hyperDrugs + 2.578* $scope.var_bSugarHist + 0.572* $scope.var_diabFamFar + 0.522* $scope.var_diabFamClose))));		
*/
	

					
				$scope.labels = $scope.age_label;
				 $scope.series = ['Aktualna ogroženost', 'Hipotetièna ogroženost', 'Obmoèje normalne ogroženosti'];
				  
			$scope.data_1 = [];
			if($scope.displayDiabetesOnly){
			
						
		/*
			Threshold vrednost za T2DM je 0.1259990, 
			za prediabetes (IFG) pa 0.2439808.
		*/
				
					if($scope.prob_diab_hyp[20] != null){

						if($scope.prob_diab[20]<= 12.59990 & $scope.prob_diab_hyp[20] <= 12.59990){
							$scope.max_prob_shown = 12.59990;
						}else{
							if($scope.prob_diab[20]	>= $scope.prob_diab_hyp[20]){
								$scope.max_prob_shown =$scope.prob_diab[20];
							}else{
								$scope.max_prob_shown =$scope.prob_diab_hyp[20];
							}
						}
					}
				
				var threshold = [];

				for (var i = 0; i <= 20; i++) {
				   threshold.push(0.1259990*100);
				}
				prob_data = $scope.prob_diab;
				prob_data_hyp = $scope.prob_diab_hyp;
				$scope.data_1 = [ prob_data, prob_data_hyp,threshold  ]; 
				//alert($scope.data_1 );
			}else{
					if($scope.prob_prediab_hyp[20] != null){
						if($scope.prob_prediab[20] <= 24.39808 & $scope.prob_prediab_hyp[20] <= 24.39808) {
							$scope.max_prob_shown = 24.39808;
						}else{
							if($scope.prob_prediab[20]	>= $scope.prob_prediab_hyp[20]){
								$scope.max_prob_shown =$scope.prob_prediab[20];
							}else{
								$scope.max_prob_shown =$scope.prob_prediab_hyp[20];
							}
						}
					}
					
				var threshold = [];

				for (var i = 0; i <= 20; i++) {
				   threshold.push(0.2439808*100);
				}
				prob_data = $scope.prob_prediab;
				prob_data_hyp = $scope.prob_prediab_hyp;
				$scope.data_1 = [ prob_data, prob_data_hyp, threshold];
				//alert($scope.data_1 );
			}

			
				  $scope.datasetOverride = [
					{ 
					yAxisID: 'y-axis-1',		            
					backgroundColor: 'rgba(0, 255, 0, 1)',
					borderColor: 'rgba(0, 255, 0, 1)',
					borderWidth: 4,
					fill: null
					}, { 
					yAxisID: 'y-axis-2', 
					backgroundColor: ' rgba(0, 0, 255, 1)',
					borderColor: ' rgba(0, 0, 255, 1)',
					borderWidth: 4,
					fill: null
					},{ 
					yAxisID: 'y-axis-3', 
					backgroundColor: 'rgba(0, 255, 0, 0.03)',
					borderColor: 'rgba(0, 255, 0, 0.03)',
					borderWidth: 3,
					/*fill: null*/
					}				  
				  
				  /*
				  {    
					label: "Aktualna ogroženost",
					fill: false,
					lineTension: 0.2,
					borderColor: "rgba(255,105,180,0.4)",
					backgroundColor: "rgba(255,105,180,0.3)",
					pointBorderColor: "rgba(255,228,225,1)",
					pointBackgroundColor: "rgba(255,105,180,1)"
				  }
				  */
				  
				  
				  ];
				  $scope.onClick = function(points, evt) {
					console.log(points, evt);
				  };
				  $scope.options = {
					title: {
					  display: true,
					  text: $scope.graphTitleText,
					  fontColor: 'rgba(255,105,180,0.8)',
					  fontSize: 16
					},
					scales: {
					  yAxes: [
					{ticks: {
						  beginAtZero: true,
						  min: 0, max: $scope.max_prob_shown,
						},
					  id: 'y-axis-1',
					  display: true,
					 label: "Aktualna ogroženost",
					  position: 'left',
						scaleLabel:{
						display:true,
						labelString:'Ogroženost'
						}
					},
					{ticks: {
						  beginAtZero: true,
						  min: 0, max: $scope.max_prob_shown,
						},
					  id: 'y-axis-2',
					  display: false,
					  position: 'right'
					},{ticks: {
						  beginAtZero: true,
						  min: 0, max: $scope.max_prob_shown,
						},
					  id: 'y-axis-3',
					  display: false,
					  position: 'right'
					}
					
					  /*
					  {
						ticks: {
						  beginAtZero: false,
						},
						scaleLabel:{
						display:true,
						labelString:'Ogroženost'
						}
					  }*/
					  
					  
					  
					  ],
					  xAxes: [{
						ticks: {
						  beginAtZero: false,
						},
						scaleLabel:{
						display:true,
						labelString:'Starost'
						}
					  }
					  ]
					},
					legend: {display: true}
				  };

		};	
		$scope.submit_GraphDisplay = function(value) {
				
				if(value == "diab"){
					$scope.displayDiabetesOnly = true;
					$scope.physInact_show = true;
					$scope.hypertensionDrugs_show = false;
					$scope.graphTitleText = "NEDIAGNOSTICIRANA SLADKORNA BOLEZEN TIPA 2";
				}else{
					$scope.displayDiabetesOnly = false;
					$scope.physInact_show = false;
					$scope.hypertensionDrugs_show = true;
					$scope.graphTitleText = "PRE-DIABETES";
				}
				$scope.calculateProb();
			};
			
			
			


}]);