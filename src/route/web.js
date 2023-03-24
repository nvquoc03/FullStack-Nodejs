import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

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
    router.get('/api/get-all-users', userController.handleGetAllUsers); //Lấy data từ Database
    router.post('/api/create-new-user', userController.handleCreateNewUser); // Tạo ms user trên Nodejs qua và hiện thị lên React
    router.put('/api/edit-user', userController.handleEditUser); // Sửa user trên Nodejs qua db và hiển thị lên React
    router.delete('/api/delete-user', userController.handleDeleteUser); // Xóa user trên Nodejs qua db và hiển thị React


    return app.use("/", router);
}

module.exports = initWebRoutes;