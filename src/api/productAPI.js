import { api } from "./configs/axiosConfigs"
import { defineCancelApiObject } from "./configs/axiosUtils"

export const EsnekAPI = {
    get: async function (name, cancel = false) {
        const response = await api.request({
            url: `/GetInstallments`,
            method: "POST",
            mode: "cors",
            data:JSON.stringify({
                "MERCHANT": "codead.com.tr",
                "MERCHANT_KEY": "xmRzaOKj6+rf6Fn/cxXgVUwiRO4pkKDVfaHaPE7bGfNICVHPS9YlNg=="
              }),
            //signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
        })

        return response.data
    },
    getPaginated: async function ({ limit, offset }, cancel = false) {
        const response = await api.request({
            url: "/GetInstallments",
            method: "POST",
            mode: "cors",
            params: {
                limit: limit,
                offset: offset,
            },
            data:JSON.stringify({
                "MERCHANT": "codead.com.tr",
                "MERCHANT_KEY": "xmRzaOKj6+rf6Fn/cxXgVUwiRO4pkKDVfaHaPE7bGfNICVHPS9YlNg=="
              }),
            signal: cancel ? cancelApiObject[this.getPaginated.name].handleRequestCancellation().signal : undefined,
        })

        return response.data.results
    },
}

// defining the cancel API object for ProductAPI
const cancelApiObject = defineCancelApiObject(EsnekAPI)