import db from "../models";

let createSpecialty = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.specialtyName || !data.imageBase64
                || !data.descriptionHTML || !data.descriptionMarkdown) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing required parameter!'
                })

            } else {
                await db.Specialty.create({
                    name: data.specialtyName,
                    image: data.imageBase64,
                    descriptionHTML: data.descriptionHTML,
                    descriptionMarkdown: data.descriptionMarkdown
                })

                resolve({
                    errCode: 0,
                    errMessage: 'Create Specialty Succeeds!'
                })
            }

        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    createSpecialty: createSpecialty
}