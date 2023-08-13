var e,t;!function(){let e=document.getElementById("employment-status__select");function t(e){var t=document.createElement("div");t.id="employment-status__wrapper",t.className="employment-status__wrapper",t.innerHTML=e;let o=document.getElementById("employment-status");o.appendChild(t)}e.addEventListener("change",function(){let e=document.getElementById("employment-status__wrapper");e&&e.remove();let o=this.value;switch(o){case"Employed":t(`
              <div class="form__text-field-wrapper">
                <input type="text" class="text-field w-input" maxlength="256" name="Employer Name" data-name="Employer Name" placeholder="Employer Name *" id="Employer-Name" required="">
                <div class="date-field w-embed"><input id="start-date" name="start-date" type="text" class="form__date" placeholder="Start Date *" onfocus="(this.type='date')" onblur="(this.value === '' ? this.type='text' : this.type='date')"></div></div> 
                `);break;case"Self-Employed":t(`
              <div class="form__text-field-wrapper">
                <input type="text" class="text-field w-input" maxlength="256" name="Business Name" data-name="Business Name" placeholder="Business Name *" id="Business-Name" required="">
                <input type="text" class="text-field w-input" maxlength="256" name="Job Title" data-name="Job Title" placeholder="Job Title *" id="Job-Title" required="">
              </div>
              <div class="form__text-field-wrapper">
                <input type="number" class="text-field w-input" maxlength="256" name="Annual Income" data-name="Annual Income" placeholder="Annual Income *" id="Annual-Income" required="">
                <div class="date-field w-embed">
                  <input id="start-date" name="start-date" type="text" class="form__date" placeholder="Start Date *" onfocus="(this.type='date')" onblur="(this.value === '' ? this.type='text' : this.type='date')">
                </div>
              </div> 
                `);break;case"Unemployed":t(`
              <input type="number" class="text-field w-input" maxlength="256" name="Annual Income" data-name="Annual Income" placeholder="Annual Income *" id="Annual-Income" required="">
                `);break;case"Retired":t(`
              <div class="form__text-field-wrapper">
                <select id="Income-Source" name="Income Source" data-name="Income Source" required="" class="select w-select">
                  <option value="Income Source">Income Source *</option>
                  <option value="Disability">Disability</option>
                  <option value="Investment Income">Investment Income </option>
                  <option value="Public Assistance">Public Assistance</option>
                  <option value="Rental Income">Rental Income</option>
                  <option value="Retired with Pension">Retired with Pension</option>
                  <option value="Social Security">Social Security</option>
                  <option value="Spousal Support">Spousal Support</option>
                </select>
                <div class="date-field w-embed">
                  <input id="retired-since" name="retired-since" type="text" class="form__date" placeholder="Retired Since *" onfocus="(this.type='date')" onblur="(this.value === '' ? this.type='text' : this.type='date')">
                </div>
              </div>
              <input type="number" class="text-field w-input" maxlength="256" name="Annual Income" data-name="Annual Income" placeholder="Annual Income *" id="Annual-Income" required="">
                `);break;case"Other":t(`
              <div class="form__text-field-wrapper">
                <select id="Income-Source" name="Income Source" data-name="Income Source" required="" class="select w-select">
                  <option value="Income Source">Income Source *</option>
                  <option value="Child Support">Child Support</option>
                  <option value="Disability">Disability</option>
                  <option value="Investment Income">Investment Income </option>
                  <option value="Public Assistance">Public Assistance</option>
                  <option value="Rental Income">Rental Income</option>
                  <option value="Retired with Pension">Retired with Pension</option>
                  <option value="Social Security">Social Security</option>
                  <option value="Spousal Support">Spousal Support</option>
                  <option value="Unemployment Insurance">Unemployment Insurance</option>
                </select>
                <div class="date-field w-embed">
                  <input id="retired-since" name="retired-since" type="text" class="form__date" placeholder="Retired Since *" onfocus="(this.type='date')" onblur="(this.value === '' ? this.type='text' : this.type='date')">
                </div>
              </div>
                `)}})}(),function(){let e=document.getElementById("add-income"),t=0;e.addEventListener("click",function(){!function(e){var o=document.createElement("div");o.id=`Income-Source-${t}`,o.className="form__text-field-wrapper",o.innerHTML=e;let n=document.getElementById("add-income__section");n.appendChild(o);let i=document.getElementById(`less-income-${t}`);i.addEventListener("click",function(){n.removeChild(o)}),t++}(`
    <div id="less-income-${t}" class="fontawesome h2 button"></div>
    <div class="form__text-field-wrapper">
      <select id="Income-Source-${t}" name="Income Source" data-name="Income Source" required="" class="select w-select">
        <option value="Income Source">Income Source *</option>
        <option value="Child Support">Child Support</option>
        <option value="Disability">Disability</option>
        <option value="Investment Income">Investment Income </option>
        <option value="Public Assistance">Public Assistance</option>
        <option value="Rental Income">Rental Income</option>
        <option value="Retired with Pension">Retired with Pension</option>
        <option value="Social Security">Social Security</option>
        <option value="Spousal Support">Spousal Support</option>
        <option value="Unemployment Insurance">Unemployment Insurance</option>
      </select>
      <input type="number" class="text-field w-input" maxlength="256" name="Annual Income" data-name="Annual Income" placeholder="Annual Income *" id="Annual-Income-${t}" required="">
    `)})}(),e=document.getElementById("yes"),t=document.getElementById("no"),e.addEventListener("change",function(){this.checked&&(function(){var e=document.createElement("div");e.id="co-buyer__sibling",e.className="co-buyer__sibling",e.innerHTML=`
    <div class="co-buyer__wrapper">
      <h2 class="heading-2">Let's get some info from your co‑buyer</h2>
      <div class="form__text-field-wrapper">
        <input type="text" class="text-field w-input" maxlength="256" name="name" data-name="Name" placeholder="Name *" id="co-buyer-Name" required="">
        <input type="text" class="text-field w-input" maxlength="256" name="Last-Name" data-name="Last Name" placeholder="Last Name *" id="co-buyer-Last-Name" required="">
      </div>
      <div class="form__text-field-wrapper">
        <input type="email" class="text-field w-input" maxlength="256" name="Email" data-name="Email" placeholder="Email *" id="co-buyer-Email" required="">
        <div class="date-field w-embed">
          <input id="co-buyer-date-of-birth" name="date-of-birth" type="text" class="form__date" placeholder="Date of Birth *" onfocus="(this.type='date')" onblur="(this.value === '' ? this.type='text' : this.type='date')">
        </div>
      </div>
      <div class="form__text-field-wrapper">
        <div class="form__text-field-caption">
          <input type="text" class="text-field w-input" maxlength="256" name="Phone" data-name="Phone" placeholder="Phone *" id="co-buyer-Phone" required="">
          <p class="paragraph">Phone number required to pre-qualify and to provide you with updates. <br>You can see our <a href="/utils/terms" target="_blank" class="link">Terms</a>.</p>
        </div>
        <div class="form__text-field-caption">
          <input type="text" class="text-field w-input" maxlength="256" name="SSN-ITIN-2" data-name="SSN ITIN 2" placeholder="SSN / ITIN *" id="co-buyer-SSN-ITIN" required="">
          <p class="paragraph">This won't impact your credit score. Please see our <a href="/utils/privacy" target="_blank" class="link">Privacy Policy</a>.</p>
        </div>
      </div>
    </div>
    <div class="co-buyer__wrapper">
      <h2 class="heading-2">Tell us about your co-buyer's home</h2>
      <div class="form__text-field-wrapper">
        <input type="text" class="text-field w-input" maxlength="256" name="Street-Address" data-name="Street Address" placeholder="Street Address *" id="co-buyer-Street-Address" required="">
        <input type="text" class="text-field w-input" maxlength="256" name="Apartment" data-name="Apartment" placeholder="Apartment / suite / etc" id="co-buyer-Apartment">
      </div>
      <div class="form__text-field-wrapper">
        <input type="text" class="text-field w-input" maxlength="256" name="City" data-name="City" placeholder="City *" id="co-buyer-City" required="">
        <select id="co-buyer-State" name="State" data-name="State" required="" class="select w-select">
          <option value="State">State *</option>
          <option value="Alabama">Alabama</option>
          <option value="Alaska">Alaska</option>
          <option value="Arizona">Arizona</option>
          <option value="Arkansas">Arkansas</option>
          <option value="California">California</option>
          <option value="Colorado">Colorado</option>
          <option value="Connecticut">Connecticut</option>
          <option value="Delaware">Delaware</option>
          <option value="Florida">Florida</option>
          <option value="Georgia">Georgia</option>
          <option value="Hawaii">Hawaii</option>
          <option value="Idaho">Idaho</option>
          <option value="Illinois">Illinois</option>
          <option value="Indiana">Indiana</option>
          <option value="Iowa">Iowa</option>
          <option value="Kansas">Kansas</option>
          <option value="Kentucky">Kentucky</option>
          <option value="Lousiana">Lousiana</option>
          <option value="Maine">Maine</option>
          <option value="Maryland">Maryland</option>
          <option value="Massachusetts">Massachusetts</option>
          <option value="Michigan">Michigan</option>
          <option value="Minnesota">Minnesota</option>
          <option value="Mississippi">Mississippi</option>
          <option value="Missouri">Missouri</option>
          <option value="Montana">Montana</option>
          <option value="Nebraska">Nebraska</option>
          <option value="Nevada">Nevada</option>
          <option value="New Hampshire">New Hampshire</option>
          <option value="New Jersey">New Jersey</option>
          <option value="New Mexico">New Mexico</option>
          <option value="New York">New York</option>
          <option value="North Carolina">North Carolina</option>
          <option value="North Dakota">North Dakota</option>
          <option value="Ohio">Ohio</option>
          <option value="Oklahoma">Oklahoma</option>
          <option value="Oregon">Oregon</option>
          <option value="Pennsylvania">Pennsylvania</option>
          <option value="Rhode Island">Rhode Island</option>
          <option value="South Carolina">South Carolina</option>
          <option value="South Dakota">South Dakota</option>
          <option value="Tennessee">Tennessee</option>
          <option value="Texas">Texas</option>
          <option value="Utah">Utah</option>
          <option value="Vermont">Vermont</option>
          <option value="Virginia">Virginia</option>
          <option value="Washington">Washington</option>
          <option value="West Virginia">West Virginia</option>
          <option value="Wisconsin">Wisconsin</option>
          <option value="Wyoming">Wyoming</option>
        </select>
      </div>
      <div class="form__text-field-wrapper">
        <input type="number" class="text-field w-input" maxlength="256" name="Zip-Code" data-name="Zip Code" placeholder="ZIP Code *" id="co-buyer-Zip-Code" required="">
        <div class="date-field w-embed">
          <input id="co-buyer-move-in-date" name="move-in-date" type="text" class="form__date" placeholder="Move-In Date *" onfocus="(this.type='date')" onblur="(this.value === '' ? this.type='text' : this.type='date')">
        </div>
      </div>
      <div class="form__text-field-wrapper">
        <select id="co-buyer-Housing-Status" name="Housing-Status" data-name="Housing Status" required="" class="select w-select">
          <option value="Housing Status">Housing Status *</option>
          <option value="Own or Mortgage">Own or Mortgage</option>
          <option value="Rent or Lease">Rent or Lease</option>
          <option value="Other">Other</option>
        </select>
        <input type="number" class="text-field w-input" maxlength="256" name="House-Monthly-Payment" data-name="House Monthly Payment" placeholder="Monthly Payment *" id="co-buyer-House-Monthly-Payment" required="">
      </div>
    </div>
    <div id="co-buyer-employment-status" class="co-buyer__wrapper">
      <h2 class="heading-2">What is your employment status?</h2>
      <p class="paragraph">Enter your primary source of income.*</p>
      <select id="co-buyer-employment-status__select" name="Employment-Status" data-name="Employment Status" required="" class="select w-select">
        <option value="Employment Status">Employment Status *</option>
        <option value="Employed">Employed</option>
        <option value="Self-Employed">Self-Employed</option>
        <option value="Unemployed">Unemployed</option>
        <option value="Retired">Retired</option>
        <option value="Other">Other</option>
      </select>
      <div id="co-buyer-employment-status__wrapper" class="employment-status__wrapper"></div>
      </div>
      <div id="co-buyer-add-income__section" class="co-buyer__wrapper">
        <h2 class="heading-2">Would you like to add any additional income? (optional)</h2>
        <div class="spacer-2"></div>
        <div class="form__text-field-wrapper">
        <div id="co-buyer-add-income" class="fontawesome h2 button">+</div>
        <div class="add-income__wrapper">
          <h3 class="heading-3">Add additional income *</h3>
          <p class="paragraph">While not required, additional income could increase your chances of pre-qualification.</p>
        </div>
      </div>
    </div>
    `;let t=document.getElementById("co-buyer__section");t.parentNode.insertBefore(e,t.nextSibling)}(),function(){let e=document.getElementById("co-buyer-employment-status__select");function t(e){var t=document.createElement("div");t.id="co-buyer-employment-status__wrapper",t.className="co-buyer-employment-status__wrapper",t.innerHTML=e;let o=document.getElementById("co-buyer-employment-status");o.appendChild(t)}e.addEventListener("change",function(){let e=document.getElementById("co-buyer-employment-status__wrapper");e&&e.remove();let o=this.value;switch(o){case"Employed":t(`
                <div class="form__text-field-wrapper">
                  <input type="text" class="text-field w-input" maxlength="256" name="Employer Name" data-name="Employer Name" placeholder="Employer Name *" id="co-buyer-Employer-Name" required="">
                  <div class="date-field w-embed"><input id="co-buyer-start-date" name="start-date" type="text" class="form__date" placeholder="Start Date *" onfocus="(this.type='date')" onblur="(this.value === '' ? this.type='text' : this.type='date')"></div></div> 
                  `);break;case"Self-Employed":t(`
                <div class="form__text-field-wrapper">
                  <input type="text" class="text-field w-input" maxlength="256" name="Business Name" data-name="Business Name" placeholder="Business Name *" id="co-buyer-Business-Name" required="">
                  <input type="text" class="text-field w-input" maxlength="256" name="Job Title" data-name="Job Title" placeholder="Job Title *" id="co-buyer-Job-Title" required="">
                </div>
                <div class="form__text-field-wrapper">
                  <input type="number" class="text-field w-input" maxlength="256" name="Annual Income" data-name="Annual Income" placeholder="Annual Income *" id="co-buyer-Annual-Income" required="">
                  <div class="date-field w-embed">
                    <input id="co-buyer-start-date" name="start-date" type="text" class="form__date" placeholder="Start Date *" onfocus="(this.type='date')" onblur="(this.value === '' ? this.type='text' : this.type='date')">
                  </div>
                </div> 
                  `);break;case"Unemployed":t(`
                <input type="number" class="text-field w-input" maxlength="256" name="Annual Income" data-name="Annual Income" placeholder="Annual Income *" id="co-buyer-Annual-Income" required="">
                  `);break;case"Retired":t(`
                <div class="form__text-field-wrapper">
                  <select id="co-buyer-Income-Source" name="Income Source" data-name="Income Source" required="" class="select w-select">
                    <option value="Income Source">Income Source *</option>
                    <option value="Disability">Disability</option>
                    <option value="Investment Income">Investment Income </option>
                    <option value="Public Assistance">Public Assistance</option>
                    <option value="Rental Income">Rental Income</option>
                    <option value="Retired with Pension">Retired with Pension</option>
                    <option value="Social Security">Social Security</option>
                    <option value="Spousal Support">Spousal Support</option>
                  </select>
                  <div class="date-field w-embed">
                    <input id="co-buyer-retired-since" name="retired-since" type="text" class="form__date" placeholder="Retired Since *" onfocus="(this.type='date')" onblur="(this.value === '' ? this.type='text' : this.type='date')">
                  </div>
                </div>
                <input type="number" class="text-field w-input" maxlength="256" name="Annual Income" data-name="Annual Income" placeholder="Annual Income *" id="co-buyer-Annual-Income" required="">
                  `);break;case"Other":t(`
                <div class="form__text-field-wrapper">
                  <select id="co-buyer-Income-Source" name="Income Source" data-name="Income Source" required="" class="select w-select">
                    <option value="Income Source">Income Source *</option>
                    <option value="Child Support">Child Support</option>
                    <option value="Disability">Disability</option>
                    <option value="Investment Income">Investment Income </option>
                    <option value="Public Assistance">Public Assistance</option>
                    <option value="Rental Income">Rental Income</option>
                    <option value="Retired with Pension">Retired with Pension</option>
                    <option value="Social Security">Social Security</option>
                    <option value="Spousal Support">Spousal Support</option>
                    <option value="Unemployment Insurance">Unemployment Insurance</option>
                  </select>
                  <div class="date-field w-embed">
                    <input id="co-buyer-retired-since" name="retired-since" type="text" class="form__date" placeholder="Retired Since *" onfocus="(this.type='date')" onblur="(this.value === '' ? this.type='text' : this.type='date')">
                  </div>
                </div>
                  `)}})}(),function(){let e=document.getElementById("add-income"),t=0;e.addEventListener("click",function(){!function(e){var o=document.createElement("div");o.id=`Income-Source-${t}`,o.className="form__text-field-wrapper",o.innerHTML=e;let n=document.getElementById("add-income__section");n.appendChild(o);let i=document.getElementById(`less-income-${t}`);i.addEventListener("click",function(){n.removeChild(o)}),t++}(`
    <div id="co-buyer-less-income-${t}" class="fontawesome h2 button"></div>
    <div class="form__text-field-wrapper">
      <select id="co-buyer-Income-Source-${t}" name="Income Source" data-name="Income Source" required="" class="select w-select">
        <option value="Income Source">Income Source *</option>
        <option value="Child Support">Child Support</option>
        <option value="Disability">Disability</option>
        <option value="Investment Income">Investment Income </option>
        <option value="Public Assistance">Public Assistance</option>
        <option value="Rental Income">Rental Income</option>
        <option value="Retired with Pension">Retired with Pension</option>
        <option value="Social Security">Social Security</option>
        <option value="Spousal Support">Spousal Support</option>
        <option value="Unemployment Insurance">Unemployment Insurance</option>
      </select>
      <input type="number" class="text-field w-input" maxlength="256" name="Annual Income" data-name="Annual Income" placeholder="Annual Income *" id="co-buyer-Annual-Income-${t}" required="">
    `)})}())}),t.addEventListener("change",function(){this.checked&&function(){let e=document.getElementById("co-buyer__sibling");e&&e.remove()}()});
//# sourceMappingURL=index.js.map
