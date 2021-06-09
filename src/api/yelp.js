import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ojv_6H_O33sXEuUEgmeLrv4XOPeoZyx8iKitbFvMzcEzESn6hgaEfwrRaCg8soUCfAqizOdtYw_dAhUmhD5ScY6gvgbiD1ItaUIJI6HIAmRXuUFamutjkMjv6mLAYHYx'
    }
})