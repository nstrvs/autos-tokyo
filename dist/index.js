!function(){let e=document.getElementById("employment-status__select");function t(e){var t=document.createElement("div");t.id="employment-status__wrapper",t.className="employment-status__wrapper",t.innerHTML=e;let n=document.getElementById("employment-status");n.appendChild(t)}e.addEventListener("change",function(){let e=document.getElementById("employment-status__wrapper");e&&e.remove();let n=this.value;switch(n){case"Employed":t(`
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
                `)}})}(),function(){let e=document.getElementById("add-income"),t=0;e.addEventListener("click",function(){!function(e){var n=document.createElement("div");n.id=`Income-Source-${t}`,n.className="form__text-field-wrapper",n.innerHTML=e;let o=document.getElementById("add-income__section");o.appendChild(n);let i=document.getElementById(`less-income-${t}`);i.addEventListener("click",function(){o.removeChild(n)}),t++}(`
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
    `)})}(),function(){function e(e){var t=document.getElementById("yes"),n=document.getElementById("no");"yes"===e.target.id&&t.checked&&(n.checked=!1),"no"===e.target.id&&n.checked&&(t.checked=!1)}document.getElementById("yes").addEventListener("click",e),document.getElementById("no").addEventListener("click",e)}();
//# sourceMappingURL=index.js.map
