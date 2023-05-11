import db from "../models";


let createClinic = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.clinicName || !data.address
                || !data.imageBase64
                || !data.descriptionHTML || !data.descriptionMarkdown) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter!'
                })

            } else {
                await db.Clinic.create({
                    name: data.clinicName,
                    address: data.address,
                    image: data.imageBase64,
                    descriptionHTML: data.descriptionHTML,
                    descriptionMarkdown: data.descriptionMarkdown
                })

                resolve({
                    errCode: 0,
                    errMessage: 'Create Clinic Succeeds!'
                })
            }

        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createClinic: createClinic
}