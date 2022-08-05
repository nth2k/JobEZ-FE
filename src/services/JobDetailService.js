import axios from "axios";

const Base_URL = "http://localhost:8080";

class JobDetail {
  getJobById() {
    return axios.get(Base_URL + "/posting/");
  }

  titleCase(str) {
    let splitStr = str.toLowerCase().split(" ");
    for (let i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
  }

  formatProvince(provinces) {
    let provinceDestructuring = "";
    for (let ele of provinces) {
      provinceDestructuring = provinceDestructuring
        .concat(ele.name)
        .concat(", ");
    }
    return provinceDestructuring.slice(0, provinceDestructuring.length - 2);
  }

  formatCity(cities) {
    let cityDestructuring = "";
    for (let ele of cities) {
      cityDestructuring = cityDestructuring.concat(ele.name).concat(", ");
    }
    return cityDestructuring.slice(0, cityDestructuring.length - 2);
  }

  formatStreet(streets) {
    let streetDestructuring = "";
    streets.forEach(
      (street) =>
        (streetDestructuring = streetDestructuring.concat(street).concat(", "))
    );
    return streetDestructuring.slice(0, streetDestructuring.length - 2);
  }
  descriptionFormat(description) {
    return description.split("-");
  }

  jobRequiredFormat(jobRequired) {
    return jobRequired.split("-");
  }

  benefitsFormat(benefits) {
    return benefits.split("-");
  }

  filesFormat(profileIncluded) {
    return profileIncluded.split("-");
  }
}

export default new JobDetail();
