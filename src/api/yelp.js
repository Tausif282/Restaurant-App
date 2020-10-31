import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer DnXkt7jDss0HID6aM1GgvsoRMuGwVS0XcClonqc_KoYgWCqqert7ssuLV_Jere226D6zdA1hLiRnZWMQW3uVz7noijiIzm6-igGl3sC8LhS1lojTCvtegZQWbB-bX3Yx",
  },
});
