import clinicService from "../services/clinicService"

let createClinic = async (req, res) => {
    try {
        let infor = await clinicService.createClinic(req.body);
        return res.status(200).json(infor)
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error From Server!'
        })
    }
}

// let getAllClinic = async (req, res) => {
//     try {
//         let infor = await ClinicService.getAllClinic();
//         return res.status(200).json(infor)
//     } catch (e) {
//         console.log(e)
//         return res.status(200).json({
//             errCode: -1,
//             errMessage: 'Error From Server!'
//         })
//     }
// }

// let getDetailClinicById = async (req, res) => {
//     try {
//         let infor = await ClinicService.getDetailClinicById(req.query.id, req.query.location);
//         return res.status(200).json(infor)
//     } catch (e) {
//         console.log(e)
//         return res.status(200).json({
//             errCode: -1,
//             errMessage: 'Error From Server!'
//         })
//     }
// }

module.exports = {
    createClinic: createClinic,
    // getAllClinic: getAllClinic,
    // getDetailClinicById: getDetailClinicById
}