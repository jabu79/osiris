$(document).ready(function() {
	
	var url = "https://randomuser.me/api/?result=1";
	var myHtml = "";
	//Call get data function
	getRandomData(url);
	
	//Random data function
	function getRandomData(url) {
		fetch(url)
		.then((response) => (response.json()))
		.then(function(data) {
			data.results.forEach( person => {
				myHtml = `
				<div class="l-container-fluid">
      <div class="l-row">
        <div class="l-col">
          <div class="u-padding--v-sm">
            <div class="l-row  u-grid-justify--center custom-top">
              <div class="l-col-6">
                <div class="u-padding--v-sm border-radius">
                  <div class="top-grey"></div>
                  <div class="white-column">
                  	<div class="absolute">
                        <div class="u-grid-justify--center"><img src="${person.picture.large}" class="rounded" alt="${person.name.first}" /></div>
                        <div class="person-first-title u-text--centered">My name is</div>
                        <div class="person-second-title u-text--centered" id="personal_info">${person.name.first} ${person.name.last}</div>
						<!-- Email address -->
						<div class="person-second-title u-text--centered" id="email_address">${person.email}</div>
						<!-- Date of Birth -->
						<div class="person-second-title u-text--centered" id="dob">${person.dob.date}</div>
						<!-- Address -->
						<div class="person-second-title u-text--centered" id="address">${person.location.street} - ${person.location.city}</div>
						<!-- Phone -->
						<div class="person-second-title u-text--centered" id="phone">${person.phone}</div>
						<!-- Password -->
						<div class="person-second-title u-text--centered" id="password">${person.login.password}</div>
                        <ul>
							<li id="name-data"><img src="styles/assets/icons/svg/misc/user.svg" /></li>
							
							<li id="email-data"><img src="styles/assets/icons/svg/misc/email.svg" /></li>
							
							<li id="dob-data"><img src="styles/assets/icons/svg/misc/calendar.svg" /></li>
							
							<li id="address-data"><img src="styles/assets/icons/svg/misc/map-location.svg" /></li>
							
							<li id="phone-data"><img src="styles/assets/icons/svg/misc/call.svg" /></li>
							
							<li id="password-data"><img src="styles/assets/icons/svg/misc/locked.svg" /></li>

                        </ul>
                        <div class="clearfix"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
				`;
				
			});
			
			//Display the results returned from API into HTML pge
			$("#output").append(myHtml);
			
			//Hover state/event to display users information 
			$( "#name-data" ).mouseover(function() {
				$(".person-first-title").html("My name is");
				$("#personal_info").show();
				$("#email_address").hide();
				$("#dob").hide();
				$("#address").hide();
				$("#phone").hide();
				$("#password").hide();
			});
			$( "#email-data" ).mouseover(function() {
				$(".person-first-title").html("My email address is");
				$("#email_address").show();
				$("#personal_info").hide();
				$("#dob").hide();
				$("#address").hide();
				$("#phone").hide();
				$("#password").hide();
			});
			$( "#dob-data" ).mouseover(function() {
				$(".person-first-title").html("My birthday is");
				$("#dob").show();
				$("#email_address").hide();
				$("#personal_info").hide();
				$("#address").hide();
				$("#phone").hide();
				$("#password").hide();
			});
			$( "#address-data" ).mouseover(function() {
				$(".person-first-title").html("My address is");
				$("#address").show();
				$("#email_address").hide();
				$("#personal_info").hide();
				$("#dob").hide();
				$("#phone").hide();
				$("#password").hide();
			});
			$( "#phone-data" ).mouseover(function() {
				$(".person-first-title").html("My phone number is");
				$("#phone").show();
				$("#address").hide();
				$("#email_address").hide();
				$("#personal_info").hide();
				$("#dob").hide();
				$("#password").hide();
			});
			$( "#password-data" ).mouseover(function() {
				$(".person-first-title").html("My password is");
				$("#password").show();
				$("#address").hide();
				$("#email_address").hide();
				$("#personal_info").hide();
				$("#dob").hide();
				$("#phone").hide();
			});
			//console.log(data);
		});
	}
});