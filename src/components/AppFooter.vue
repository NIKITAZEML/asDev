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
      width: size(214, 1920);
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
 .footer-info-icon{
     margin-bottom: size(10, 1920);
     width: size(400, 1920);
     display: flex;
     align-items: center;
     justify-content: center;
 }
 .footer-info-icons{
     display: flex;
     flex-direction: column;
     align-items: center;

 }
 .footer-info-icons-link__img{
     width: size(25, 1920);
     height: size(25, 1920);
 }
.footer-info-text{
     display: flex;
     align-items: center;
     img{
         margin-right: size(8, 1920);
     }
}
.footer-info-text__span{
    color: white;
    font-size: size(20, 1920);
    font-weight: 700;
}

</style>