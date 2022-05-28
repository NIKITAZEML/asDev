<template>
    <footer>
        <div class="container">
            <div class="footer">
                <img src="../assets/images/logo.png" class="header-logo">
                        <span class="footer-info-text__span">Разработка команды AsDev© Хакатон 2022</span>
                    <div class="footer-info-text">
                         <img src="@/assets/images/icons/File.svg" alt="">
                         <span class="footer-info-text__span">Политика обработки персональных данных</span>
                    </div>
            </div>
        </div>
    </footer>
</template>


<style lang="scss" scoped>
  @import "src/assets/styles/fonts.scss";
  footer{
      min-height: size(150, 1920);
      display: flex;
      align-items: center;
      margin: 0;
      background-color: #000031;
       align-items: center;
  }
  .footer{
      display: flex;
        align-items: center;
        justify-content: space-between;
  }
  .header-logo{
      width: size(217, 1920);
      height: size(36.36, 1920);
  }
 .container{
     width: size(1440, 1920);
     margin: 0 auto;
 }

 .footer-info{
     display: flex;
     align-items: center;
     justify-content: space-between;
 }

.footer-info-text{
     display: flex;
     align-items: center;
     img{
         width: size(16, 1920);
         height: size(16, 1920);
         margin-right: size(8, 1920);
     }
}
.footer-info-text__span{
    color: white;
    font-size: size(11, 1920);
    line-height: size(16, 1920);
    font-weight: 700;
}
@media (max-width: 750px){
    footer {
    min-height: 7.8125vw;
    display: flex;
    align-items: center;
    margin: 0;
    background-color: #000031;
    align-items: center;
    position: absolute;
    width: 100%;
    bottom: 0;
}
}
</style>