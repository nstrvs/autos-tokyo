import { buttonsAnimation } from "./hoverAnimations";

export function coBuyer() {
  var newDiv = document.createElement("div");
  newDiv.id = "co-buyer__sibling";
  newDiv.className = "co-buyer__sibling";
  newDiv.innerHTML = `
    <div class="co-buyer__wrapper">
      <h2 class="heading-2">Let's get some info from your co‑buyer</h2>
      <div class="form__text-field-wrapper">
        <input type="text" class="text-field w-input" maxlength="256" name="Co-Buyer Name" data-name="Co-Buyer Name" placeholder="Name *" id="co-buyer-name" required="">
        <input type="text" class="text-field w-input" maxlength="256" name="Co-Buyer Last Name" data-name="Co-Buyer Last Name" placeholder="Last Name *" id="co-buyer-last-name" required="">
      </div>
      <div class="form__text-field-wrapper">
        <input type="email" class="text-field w-input" maxlength="256" name="Co-Buyer Email" data-name="Co-Buyer Email" placeholder="Email *" id="co-buyer-email" required="">
        <div class="date-field w-embed">
          <input id="co-buyer-date-of-birth" name="Co-Buyer Date of Birth" data-name="Co-Buyer Date of Birth" type="text" class="form__date" placeholder="Date of Birth *" onfocus="(this.type='date')" onblur="(this.value === '' ? this.type='text' : this.type='date')">
        </div>
      </div>
      <div class="form__text-field-wrapper">
        <div class="form__text-field-caption">
          <input type="text" class="text-field w-input" maxlength="256" name="Co-Buyer Phone" data-name="Co-Buyer Phone" placeholder="Phone *" id="co-buyer-phone" required="">
          <p class="paragraph">Phone number required to pre-qualify and to provide you with updates. <br>You can see our <a href="/utils/terms" target="_blank" class="link">Terms</a>.</p>
        </div>
        <div class="form__text-field-caption">
          <input type="text" class="text-field w-input" maxlength="256" name="Co-Buyer SSN-ITIN" data-name="Co-Buyer SSN-ITIN" placeholder="SSN / ITIN *" id="co-buyer-SSN-ITIN" required="">
          <p class="paragraph">This won't impact your credit score. Please see our <a href="/utils/privacy" target="_blank" class="link">Privacy Policy</a>.</p>
        </div>
      </div>
    </div>
    <div class="co-buyer__wrapper">
      <h2 class="heading-2">Tell us about your co-buyer's home</h2>
      <div class="form__text-field-wrapper">
        <input type="text" class="text-field w-input" maxlength="256" name="Co-Buyer Street-Address" data-name="Co-Buyer Street Address" placeholder="Street Address *" id="co-buyer-street-address" required="">
        <input type="text" class="text-field w-input" maxlength="256" name="Co-Buyer Apartment" data-name="Co-Buyer Apartment" placeholder="Apartment / suite / etc" id="co-buyer-apartment">
      </div>
      <div class="form__text-field-wrapper">
        <input type="text" class="text-field w-input" maxlength="256" name="Co-Buyer City" data-name="Co-Buyer City" placeholder="City *" id="co-buyer-city" required="">
        <select id="co-buyer-state" name="Co-Buyer State" data-name="Co-Buyer State" required="" class="select w-select">
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
        <input type="number" class="text-field w-input" maxlength="256" name="Co-Buyer Zip-Code" data-name="Co-Buyer Zip-Code" placeholder="ZIP Code *" id="co-buyer-zip-code" required="">
        <div class="form__text-field-caption"> 
          <p class="paragraph margin-left margin-top">Move-in-Date *</p><div class="text-field__wrapper margin-top"><input type="number" class="text-field w-input" maxlength="256" name="Co-Buyer Move-in-Date (Months)" data-name="Co-Buyer Move-in-Date (Months)" placeholder="MM" id="co-buyer__move-in-date__months" required=""><div class="text-block dash">/</div><input type="number" class="text-field w-input" maxlength="256" name="Co-Buyer Move-in-Date (Years)" data-name="Co-Buyer Move-in-Date (Years)" placeholder="YYYY" id="co-buyer__move-in-date__years" required=""></div></div>
      </div>
      <div class="form__text-field-wrapper">
        <select id="co-buyer-housing-status" name="Co-Buyer Housing Status" data-name="Co-Buyer Housing Status" required="" class="select w-select">
          <option value="Housing Status">Housing Status *</option>
          <option value="Own or Mortgage">Own or Mortgage</option>
          <option value="Rent or Lease">Rent or Lease</option>
          <option value="Other">Other</option>
        </select>
        <input type="number" class="text-field w-input" maxlength="256" name="Co-Buyer House-Monthly-Payment" data-name="Co-Buyer House-Monthly-Payment" placeholder="Monthly Payment *" id="co-buyer-house-monthly-payment" required="">
      </div>
    </div>
    <div id="co-buyer-employment-status" class="co-buyer__wrapper">
      <h2 class="heading-2">What is your co-buyer employment status?</h2>
      <p class="paragraph">Enter your primary source of income.*</p>
      <select id="co-buyer-employment-status__select" name="Co-Buyer Employment-Status" data-name="Co-Buyer Employment-Status" required="" class="select w-select">
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
        <div class="form__text-field-wrapper add__income">
        <div id="co-buyer-add-income" class="fontawesome h2 button">+</div>
        <div class="add-income__wrapper">
          <h3 class="heading-3">Add additional income *</h3>
          <p class="paragraph">While not required, additional income could increase your chances of pre-qualification.</p>
        </div>
      </div>
    </div>
    `;
  const sibling = document.getElementById("co-buyer__section");
  sibling.parentNode.insertBefore(newDiv, sibling.nextSibling);
}

export function removeDiv() {
  const coBuyerContent = document.getElementById("co-buyer__sibling");
  if (coBuyerContent) {
    coBuyerContent.remove();
  }
}

export function coBuyerEmploymentStatus() {
  const coBuyerEmploymentStatus = document.getElementById(
    "co-buyer-employment-status__select",
  );

  function createDiv(content) {
    var newDiv = document.createElement("div");
    newDiv.id = "co-buyer-employment-status__wrapper";
    newDiv.className = "co-buyer-employment-status__wrapper";
    newDiv.innerHTML = content;
    const container = document.getElementById("co-buyer-employment-status");
    container.appendChild(newDiv);
  }

  coBuyerEmploymentStatus.addEventListener("change", function () {
    const wrapper = document.getElementById(
      "co-buyer-employment-status__wrapper",
    );
    if (wrapper) {
      wrapper.remove();
    }

    const selectedValue = this.value;

    switch (selectedValue) {
      case "Employed": {
        let employedContent = `
          <div class="form__text-field-wrapper">
            <input type="text" class="text-field w-input" maxlength="256" name="Co-Buyer Employer Job Title *" data-name="Co-Buyer Employer Job Title" placeholder="Employer Job Title" id="Co-Buyer-Employer-Job-Title">
            <div class="date-field w-embed">
                <input type="tel" class="text-field w-input" name="Co-Buyer Employer Phone Number" data-name="Co-Buyer Employer Phone Number *" placeholder="Employer Phone Number" id="Co-Buyer-Employer-Phone-Number">
            </div>
          </div>
          <div class="form__text-field-wrapper">
            <input type="text" class="text-field w-input" maxlength="256" name="Co-Buyer Employer Name" data-name="Co-Buyer Employer Name" placeholder="Employer Name *" id="Co-Buyer-Employer-Name" required="">
            <input type="text" class="text-field w-input" maxlength="256" name="Co-Buyer Employer Address" data-name="Co-Buyer Employer Address" placeholder="Employer Address *" id="Co-Buyer-Employer-Address" required="">
          </div>
          <div class="form__text-field-wrapper">
            <input type="text" class="text-field w-input" maxlength="256" name="Co-Buyer Job Title" data-name="Co-Buyer Job Title" placeholder="Job Title *" id="Co-Buyer-Job-Title" required="">
            <div class="date-field w-embed">
                <input type="number" class="text-field w-input" maxlength="256" name="Co-Buyer Monthly Income" data-name=Co-Buyer "Monthly Income" placeholder="Monthly Income *" id="Co-Buyer-Monthly-Income" required="">
            </div>
          </div>
          <div class="form__text-field-wrapper">
            <select id="Co-Buyer-Income-Type" name="Co-Buyer Income Type" data-name="Co-Buyer Income Type" required="" class="select w-select">
              <option value="Income Type">Income Type *</option>
              <option value="Disability">Bank statement</option>
              <option value="Investment Income">PAYSTUB</option>
              <option value="Investment Income">Cancelled checks</option>
              <option value="Investment Income">Job letter</option>
            </select>
            <div class="form__text-field-caption">
              <p class="paragraph margin-left margin-top">Start Date *</p>
              <div class="text-field__wrapper margin-top">
                  <input type="number" class="text-field w-input" maxlength="256" name="Co-Buyer Start Date (Months)" data-name="Co-Buyer Start Date (Months)" placeholder="MM" id="Co-Buyer-start-date__months-2" required="">
                  <div class="text-block dash">/</div>
                  <input type="number" class="text-field w-input" maxlength="256" name="Co-Buyer Start Date (Years)" data-name="Co-Buyer Start Date (Years)" placeholder="YYYY" id="Co-Buyer-start-date__years-3" required="">
              </div>
            </div>
            </div>
                    `;
        createDiv(employedContent);
        break;
      }
      case "Self-Employed": {
        let selfEmployedContent = `
                <div class="form__text-field-wrapper">
                  <input type="text" class="text-field w-input" maxlength="256" name="Co-Buyer Business Name" data-name="Co-Buyer Business Name" placeholder="Business Name *" id="co-buyer-Business-Name" required="">
                  <input type="text" class="text-field w-input" maxlength="256" name="Co-Buyer Job Title" data-name="Co-Buyer Job Title" placeholder="Job Title *" id="co-buyer-Job-Title" required="">
                </div>
                <div class="form__text-field-wrapper">
                  <input type="number" class="text-field w-input" maxlength="256" name="Co-Buyer Monthly Income" data-name="Co-Buyer Monthly Income" placeholder="Monthly Income *" id="co-buyer-monthly-income" required="">
                  <div class="form__text-field-caption">
                        <p class="paragraph margin-left margin-top">Start Date *</p>
                        <div class="text-field__wrapper margin-top">
                            <input type="number" class="text-field w-input" maxlength="256" name="Co-Buyer Start Date (Months)" data-name="Co-Buyer Start Date (Months)" placeholder="MM" id="start-date__months-2" required="">
                            <div class="text-block dash">/</div>
                            <input type="number" class="text-field w-input" maxlength="256" name="Co-Buyer Start Date (Years)" data-name="Co-Buyer Start Date (Years)" placeholder="YYYY" id="co-buyer-start-date__years" required="">
                        </div>
                    </div>
                </div> 
                  `;
        createDiv(selfEmployedContent);
        break;
      }
      case "Unemployed": {
        let unemployedContent = `
                <input type="number" class="text-field w-input" maxlength="256" name="Monthly Income" data-name="Monthly Income" placeholder="Monthly Income *" id="co-buyer-monthly-income" required="">
                  `;
        createDiv(unemployedContent);
        break;
      }
      case "Retired": {
        let retiredContent = `
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
                  <div class="form__text-field-caption">
                        <p class="paragraph margin-left margin-top">Retired Since *</p>
                        <div class="text-field__wrapper margin-top">
                            <input type="number" class="text-field w-input" maxlength="256" name="Co-Buyer Retired Since (Months)" data-name="Co-Buyer Retired Since (Months)" placeholder="MM" id="start-date__months-2" required="">
                            <div class="text-block dash">/</div>
                            <input type="number" class="text-field w-input" maxlength="256" name="Co-Buyer Retired Since (Years)" data-name="Co-Buyer Retired Since (Years)" placeholder="YYYY" id="co-buyer-start-date__years" required="">
                        </div>
                    </div>
                </div>
                <input type="number" class="text-field w-input" maxlength="256" name="Monthly Income" data-name="Monthly Income" placeholder="Monthly Income *" id="co-buyer-monthly-income" required="">
                  `;
        createDiv(retiredContent);
        break;
      }
      case "Other": {
        let otherContent = `
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
                  <div class="form__text-field-caption">
                        <p class="paragraph margin-left margin-top">Retired Since *</p>
                        <div class="text-field__wrapper margin-top">
                            <input type="number" class="text-field w-input" maxlength="256" name="Co-Buyer Retired Since (Months)" data-name="Co-Buyer Retired Since (Months)" placeholder="MM" id="start-date__months-2" required="">
                            <div class="text-block dash">/</div>
                            <input type="number" class="text-field w-input" maxlength="256" name="Co-Buyer Retired Since (Years)" data-name="Co-Buyer Retired Since (Years)" placeholder="YYYY" id="co-buyer-start-date__years" required="">
                        </div>
                    </div>
                </div>
                  `;
        createDiv(otherContent);
        break;
      }
    }
  });
}

export function coBuyerAddIncome() {
  const coBuyerAddIncomeButton = document.getElementById("co-buyer-add-income");
  let serialNumber = 1;
  function createDiv(content) {
    var newDiv = document.createElement("div");
    newDiv.id = `income-source-${serialNumber}`;
    newDiv.className = "form__text-field-wrapper add__income";
    newDiv.innerHTML = content;
    const container = document.getElementById("co-buyer-add-income__section");
    container.appendChild(newDiv);
    // Add an event listener to the remove button
    const removeIncomeButton = document.getElementById(
      `co-buyer-less-income-${serialNumber}`,
    );
    removeIncomeButton.addEventListener("click", function () {
      container.removeChild(newDiv);
    });
    serialNumber++; // Increment the serial number after creating the div
  }
  coBuyerAddIncomeButton.addEventListener("click", function () {
    let content = `
    <div id="co-buyer-less-income-${serialNumber}" class="fontawesome h2 button"></div>
    <div class="form__text-field-wrapper">
      <select id="co-buyer-income-source-${serialNumber}" name="Co-Buyer Income Source ${serialNumber}" data-name="Co-Buyer Income Source ${serialNumber}" required="" class="select w-select">
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
      <input type="number" class="text-field w-input" maxlength="256" name="Co-Buyer Monthly Income ${serialNumber}" data-name="Co-Buyer Monthly Income ${serialNumber}" placeholder="Monthly Income *" id="co-buyer-monthly-income-${serialNumber}" required="">
    `;
    createDiv(content);
    buttonsAnimation();
  });
}
