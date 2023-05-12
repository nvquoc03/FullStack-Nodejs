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

let getAllClinic = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Clinic.findAll({
            });
            if (data && data.length > 0) {
                data.map(item => {
                    item.image = new Buffer(item.image, 'base64').toString('binary'); //HTML chỉ hiểu đc String, lưu ở DataBase là binanary
                    return item;
                })
            }
            resolve({
                errCode: 0,
                errMessage: 'OK!',
                data
            })
        } catch (e) {
            reject(e)
        }
    })
}

let getDetailClinicById = (inputId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!inputId) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing required parameter!"
                })
            } else {
                let data = await db.Clinic.findOne({
                    where: {
                        id: inputId
                    },
                    attributes: ['name', 'address', 'descriptionHTML', 'descriptionMarkdown']
                })

                if (data) {
                    let doctorClinic = [];
                    doctorClinic = await db.Doctor_Infor.findAll({
                        where: {
                            clinicId: inputId
                        },
                        attributes: ['doctorId']
                    })


                    data.doctorClinic = doctorClinic

                } else data = {}
                resolve({
                    errCode: 0,
                    errMessage: "OK!",
                    data
                })

            }

        } catch (e) {
            reject(e)
        }
    })
}


module.exports = {
    createClinic: createClinic,
    getAllClinic: getAllClinic,
    getDetailClinicById: getDetailClinicById
}