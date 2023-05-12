import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";
import patientController from "../controllers/patientController";
import specialtyController from "../controllers/specialtyController";
import clinicController from "../controllers/clinicController"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);

    router.get("/crud", homeController.getCRUD); // Tạo
    router.post("/post-crud", homeController.postCRUD); // Trang khi tạo xong
    router.get('/get-crud', homeController.displayGetCRUD); // Hiện thị
    router.get('/edit-crud', homeController.getEditCRUD); // Sửa
    router.post('/put-crud', homeController.putCRUD); // Trang khi sửa xog
    router.get('/delete-crud', homeController.deleteCRUD); // Xóa

    router.post('/api/login', userController.handleLogin); // đăng nhập kết nối đến Database
    router.get('/api/get-all-users', userController.handleGetAllUsers); //Lấy data từ Database và hiển thị lên React
    router.post('/api/create-new-user', userController.handleCreateNewUser); // Tạo ms user trên Nodejs qua db và hiện thị lên React
    router.put('/api/edit-user', userController.handleEditUser); // Sửa user trên Nodejs qua db và hiển thị lên React
    router.delete('/api/delete-user', userController.handleDeleteUser); // Xóa user trên Nodejs qua db và hiển thị React
    router.get('/api/allcode', userController.getAllCode);

    router.get('/api/top-doctor-home', doctorController.getTopDoctorHome);
    router.get('/api/get-all-doctors', doctorController.getAllDoctors);
    router.post('/api/save-infor-doctor', doctorController.postInforDoctor)
    router.get('/api/get-detail-doctor-by-id', doctorController.getDetailDoctorById);
    router.post('/api/bulk-create-schedule', doctorController.bulkCreateSchedule);
    router.get('/api/get-schedule-doctor-by-date', doctorController.getScheduleByDate);
    router.get('/api/get-extra-infor-doctor-by-id', doctorController.getExtraInforDoctorById);
    router.get('/api/get-profile-doctor-by-id', doctorController.getProfileDoctorById);

    router.post('/api/patient-book-appointment', patientController.postBookAppointment);
    router.post('/api/verify-book-appointment', patientController.postVerifyBookAppointment);

    router.post('/api/create-new-specialty', specialtyController.createSpecialty);
    router.get('/api/get-all-specialties', specialtyController.getAllSpecialty);
    router.get('/api/get-detail-specialty-by-id', specialtyController.getDetailSpecialtyById);

    router.post('/api/create-new-clinic', clinicController.createClinic);
    router.get('/api/get-all-clinics', clinicController.getAllClinic);
    router.get('/api/get-detail-clinic-by-id', clinicController.getDetailClinicById);



    return app.use("/", router);
}

module.exports = initWebRoutes;