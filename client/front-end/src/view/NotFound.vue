<template>
    <div class="not-found-view ">
        <div class="container-fluid">
            <div class="text">
                <h1>404</h1>
                <h3>Oops! Trang không được tìm thấy</h3>
                <router-link to="/"> <span class="back-home"> Quay lại trang chủ </span></router-link>
            </div>
        </div>
    </div>
</template>

<style>
.not-found-view {
    width: 100%;
    background-color: #cccccc;
    height: 724px;
    position: relative;
}
.text {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
}
.back-home {
    color: #f15e0f;
    font-weight: bold;
}
.back-home:hover {
    color: blue;
    font-size: 20px;
}
</style>