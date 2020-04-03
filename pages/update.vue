<template>
  <v-layout>
    <v-flex class="text-left">
      <form
        class="formView socrataForm commonForm"
        method="POST"
        data-defaultSuccessRedirect="https://data.austintexas.gov/dataset/Update-the-Living-Resource-List/s2pk-gk8n/form_success"
        action="https://data.austintexas.gov/views/s2pk-gk8n/rows.html?method=createForm&successRedirect=https%3A%2F%2Fdata.austintexas.gov%2Fdataset%2FUpdate-the-Living-Resource-List%2Fs2pk-gk8n%2Fform_success"
      >
        <div class="line clearfix text">
          <label
            for="form_field_name"
            title="Name"
          >Name</label>
          <input
            id="form_field_name"
            type="text"
            class="fieldInput"
            name="name"
          >
        </div>
        <div class="line clearfix text">
          <label
            for="form_field_program"
            title="Program"
          >Program</label>
          <input
            id="form_field_program"
            type="text"
            class="fieldInput"
            name="program"
          >
        </div>
        <div class="line clearfix text">
          <label
            for="form_field_description"
            title="Description"
          >Description</label>
          <input
            id="form_field_description"
            type="text"
            class="fieldInput"
            name="description"
          >
        </div>
        <div class="line clearfix text">
          <label
            for="form_field_category"
            title="Category"
          >Category</label>
          <input
            id="form_field_category"
            type="text"
            class="fieldInput"
            name="category"
          >
        </div>
        <div class="line clearfix text">
          <label
            for="form_field_previous_category"
            title="Previous Category"
          >Previous Category</label>
          <input
            id="form_field_previous_category"
            type="text"
            class="fieldInput"
            name="previous_category"
          >
        </div>
        <div class="line clearfix text">
          <label
            for="form_field_address"
            title="Address"
          >Address</label>
          <input
            id="form_field_address"
            type="text"
            class="fieldInput"
            name="address"
          >
        </div>
        <div class="line clearfix text">
          <label
            for="form_field_city"
            title="City"
          >City</label>
          <input
            id="form_field_city"
            type="text"
            class="fieldInput"
            name="city"
          >
        </div>
        <div class="line clearfix text">
          <label
            for="form_field_state"
            title="State"
          >State</label>
          <input
            id="form_field_state"
            type="text"
            class="fieldInput"
            name="state"
          >
        </div>
        <div class="line clearfix text">
          <label
            for="form_field_zipcode"
            title="Zipcode"
          >Zipcode</label>
          <input
            id="form_field_zipcode"
            type="text"
            class="fieldInput"
            name="zipcode"
          >
        </div>
        <div class="line clearfix text">
          <label
            for="form_field_phone"
            title="Phone"
          >Phone</label>
          <input
            id="form_field_phone"
            type="text"
            class="fieldInput"
            name="phone"
          >
        </div>
        <div class="line clearfix text">
          <label
            for="form_field_hours"
            title="Hours"
          >Hours</label>
          <input
            id="form_field_hours"
            type="text"
            class="fieldInput"
            name="hours"
          >
        </div>
        <div class="line clearfix text">
          <label
            for="form_field_program_specifications"
            title="Program Specifications"
          >Program Specifications</label>
          <input
            id="form_field_program_specifications"
            type="text"
            class="fieldInput"
            name="program_specifications"
          >
        </div>
        <div class="line clearfix text">
          <label
            for="form_field_proccess"
            title="Proccess"
          >Proccess</label>
          <input
            id="form_field_proccess"
            type="text"
            class="fieldInput"
            name="proccess"
          >
        </div>
        <div class="line clearfix text">
          <label
            for="form_field_point_of_contact_e_mail"
            title="Point of Contact E-Mail"
          >Point of Contact E-Mail</label>
          <input
            id="form_field_point_of_contact_e_mail"
            type="text"
            class="fieldInput"
            name="point_of_contact_e_mail"
          >
        </div>
        <div class="line clearfix calendar_date">
          <label
            for="form_field_last_updated"
            title="Last Updated"
          >Last Updated</label>
          <div class="fieldContainer dateInput">
            <select
              class="monthInput"
              name="last_updated:month"
            >
              <option value="" />
              <option value="1">
                Jan
              </option>
              <option value="2">
                Feb
              </option>
              <option value="3">
                Mar
              </option>
              <option value="4">
                Apr
              </option>
              <option value="5">
                May
              </option>
              <option value="6">
                Jun
              </option>
              <option value="7">
                Jul
              </option>
              <option value="8">
                Aug
              </option>
              <option value="9">
                Sep
              </option>
              <option value="10">
                Oct
              </option>
              <option value="11">
                Nov
              </option>
              <option value="12">
                Dec
              </option>
            </select>
            <input
              type="text"
              class="dayInput"
              maxlength="2"
              min="1"
              max="31"
              name="last_updated:day"
            >
            <input
              type="text"
              class="yearInput"
              maxlength="4"
              name="last_updated:year"
            >
            <input
              type="text"
              class="hourInput"
              maxlength="2"
              min="1"
              max="12"
              name="last_updated:hour"
            >
            <span class="hourSplit">:</span>
            <input
              type="text"
              class="minuteInput"
              maxlength="2"
              min="0"
              max="59"
              name="last_updated:minute"
            >
            <select
              class="ampmInput"
              name="last_updated:pm"
            >
              <option value="am">
                AM
              </option>
              <option value="pm">
                PM
              </option>
            </select>
          </div>
        </div>
        <div class="submitLine">
          <input
            type="submit"
            value="Submit"
          >
        </div>
        <a
          href="http://www.socrata.com/"
          class="poweredLink"
          target="_blank"
        >Powered by Socrata</a>
      </form>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  // let data = (await $axios.get('https://data.austintexas.gov/resource/k4db-swbf.json`')).data
};
</script>
