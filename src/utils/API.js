import axios from "axios"

export default {
    // ZOMATO API CALL
    getRestaurants(){
            return axios.get('https://developers.zomato.com/api/v2.1/search?query=Chelsea&lat=40.742051&lon=-74.004821',{
                headers: {"user-key": "e745b97163b73bdce477b43f90048026"}
              });

}}
