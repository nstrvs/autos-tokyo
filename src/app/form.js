import { buttonsAnimation } from "./hoverAnimations";

export function employmentStatus() {
  const employmentStatus = document.getElementById("employment-status__select");

  function createDiv(content) {
    var newDiv = document.createElement("div");
    newDiv.id = "employment-status__wrapper";
    newDiv.className = "employment-status__wrapper";
    newDiv.innerHTML = content;
    const container = document.getElementById("employment-status");
    container.appendChild(newDiv);
  }

  employmentStatus.addEventListener("change", function () {
    const wrapper = document.getElementById("employment-status__wrapper");
    if (wrapper) {
      wrapper.remove();
    }

    const selectedValue = this.value;

    switch (selectedValue) {
      case "Employed": {
        let employedContent = `
              <div class="form__text-field-wrapper">
                <input type="text" class="text-field w-input" maxlength="256" name="Employer Job Title *" data-name="Employer Job Title" placeholder="Employer Job Title" id="Employer-Job-Title">
                <div class="date-field w-embed">
                    <input type="tel" class="text-field w-input" name="Employer Phone Number" data-name="Employer Phone Number *" placeholder="Employer Phone Number" id="Employer-Phone-Number">
                </div>
              </div>
              <div class="form__text-field-wrapper">
                <input type="text" class="text-field w-input" maxlength="256" name="Employer Name" data-name="Employer Name" placeholder="Employer Name *" id="Employer-Name" required="">
                <input type="text" class="text-field w-input" maxlength="256" name="Employer Address" data-name="Employer Address" placeholder="Employer Address *" id="Employer-Address" required="">
              </div>
              <div class="form__text-field-wrapper">
                  <input type="text" class="text-field w-input" maxlength="256" name="Job Title" data-name="Job Title" placeholder="Job Title *" id="Job-Title" required="">
                  <div class="date-field w-embed">
                      <input type="number" class="text-field w-input" maxlength="256" name="Monthly Income" data-name="Monthly Income" placeholder="Monthly Income *" id="Monthly-Income" required="">
                  </div>
              </div>
              <div class="form__text-field-wrapper">
                  <select id="Income-Type" name="Income Type" data-name="Income Type" required="" class="select w-select">
                    <option value="Income Type">Income Type *</option>
                    <option value="Disability">Bank statement</option>
                    <option value="Investment Income">PAYSTUB</option>
                    <option value="Investment Income">Cancelled checks</option>
                    <option value="Investment Income">Job letter</option>
                  </select>
                  <div class="form__text-field-caption">
                      <p class="paragraph margin-left margin-top">Start Date *</p>
                      <div class="text-field__wrapper margin-top">
                          <input type="number" class="text-field w-input" maxlength="256" name="Start Date (Months)" data-name="Start Date (Months)" placeholder="MM" id="start-date__months-2" required="">
                          <div class="text-block dash">/</div>
                          <input type="number" class="text-field w-input" maxlength="256" name="Start Date (Years)" data-name="Start Date (Years)" placeholder="YYYY" id="start-date__years-3" required="">
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
                <input type="text" class="text-field w-input" maxlength="256" name="Business Name" data-name="Business Name" placeholder="Business Name *" id="Business-Name" required="">
                <input type="text" class="text-field w-input" maxlength="256" name="Job Title" data-name="Job Title" placeholder="Job Title *" id="Job-Title" required="">
              </div>
              <div class="form__text-field-wrapper">
                <input type="number" class="text-field w-input" maxlength="256" name="Monthly Income" data-name="Monthly Income" placeholder="Monthly Income *" id="Monthly Income" required="">
                <div class="form__text-field-caption">
                      <p class="paragraph margin-left margin-top">Start Date *</p>
                      <div class="text-field__wrapper margin-top">
                          <input type="number" class="text-field w-input" maxlength="256" name="Start Date (Months)" data-name="Start Date (Months)" placeholder="MM" id="start-date__months-2" required="">
                          <div class="text-block dash">/</div>
                          <input type="number" class="text-field w-input" maxlength="256" name="Start Date (Years)" data-name="Start Date (Years)" placeholder="YYYY" id="start-date__years-3" required="">
                      </div>
                  </div>
              </div> 
                `;
        createDiv(selfEmployedContent);
        break;
      }
      case "Unemployed": {
        let unemployedContent = `
              <input type="number" class="text-field w-input" maxlength="256" name="Monthly Income" data-name="Monthly Income" placeholder="Monthly Income *" id="Monthly Income" required="">
                `;
        createDiv(unemployedContent);
        break;
      }
      case "Retired": {
        let retiredContent = `
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
                <div class="form__text-field-caption">
                      <p class="paragraph margin-left margin-top">Retired Since *</p>
                      <div class="text-field__wrapper margin-top">
                          <input type="number" class="text-field w-input" maxlength="256" name="Retired Since (Months)" data-name="Retired Since (Months)" placeholder="MM" id="start-date__months-2" required="">
                          <div class="text-block dash">/</div>
                          <input type="number" class="text-field w-input" maxlength="256" name="Retired Since (Years)" data-name="Retired Since (Years)" placeholder="YYYY" id="start-date__years-3" required="">
                      </div>
                  </div>
              </div>
              <input type="number" class="text-field w-input" maxlength="256" name="Monthly Income" data-name="Monthly Income" placeholder="Monthly Income *" id="Monthly Income" required="">
                `;
        createDiv(retiredContent);
        break;
      }
      case "Other": {
        let otherContent = `
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
                <div class="form__text-field-caption">
                      <p class="paragraph margin-left margin-top">Retired Since *</p>
                      <div class="text-field__wrapper margin-top">
                          <input type="number" class="text-field w-input" maxlength="256" name="Retired Since (Months)" data-name="Retired Since (Months)" placeholder="MM" id="start-date__months-2" required="">
                          <div class="text-block dash">/</div>
                          <input type="number" class="text-field w-input" maxlength="256" name="Retired Since (Years)" data-name="Retired Since (Years)" placeholder="YYYY" id="start-date__years-3" required="">
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

export function addIncome() {
  const addIncomeButton = document.getElementById("add-income");
  let serialNumber = 1;

  function createDiv(content) {
    var newDiv = document.createElement("div");
    newDiv.id = `Income-Source-${serialNumber}`;
    newDiv.className = "form__text-field-wrapper add__income";
    newDiv.innerHTML = content;
    const container = document.getElementById("add-income__section");
    container.appendChild(newDiv);

    // Add an event listener to the remove button
    const removeIncomeButton = document.getElementById(
      `less-income-${serialNumber}`,
    );
    removeIncomeButton.addEventListener("click", function () {
      container.removeChild(newDiv);
    });

    serialNumber++; // Increment the serial number after creating the div
  }

  addIncomeButton.addEventListener("click", function () {
    let content = `
    <div id="less-income-${serialNumber}" class="fontawesome h2 button"></div>
    <div class="form__text-field-wrapper">
      <select id="Income-Source-${serialNumber}" name="Income Source ${serialNumber}" data-name="Income Source ${serialNumber}" required="" class="select w-select">
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
      <input type="number" class="text-field w-input" maxlength="256" name="Monthly Income ${serialNumber}" data-name="Monthly Income ${serialNumber}" placeholder="Monthly Income *" id="Monthly Income-${serialNumber}" required="">
    `;
    createDiv(content);
    buttonsAnimation();
  });
}
