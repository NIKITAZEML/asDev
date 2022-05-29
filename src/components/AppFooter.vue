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
       max-height: 200px;
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
    .header-logo{
      width: size(180, 750);
      height: size(30, 750);
      margin-bottom: size(15, 750);
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
         width: size(20, 750);
         height: size(16, 750);
         margin-right: size(8, 750);
     }
}
.footer{
    flex-direction: column;
}
footer{
    padding-top: size(60, 750);
    padding-bottom: size(60, 750);
    height: 1000px;
}
.footer-info-text__span{
    color: white;
    font-size: size(11, 750);
    line-height: size(16, 750);
    font-weight: 700;
}
.container {
    width: 90vw;
}

    }
    @media (max-width: 486px){
    .header-logo{
      width: size(180, 468);
      height: size(30, 468);
      margin-bottom: size(15, 468);
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
         width: size(20, 468);
         height: size(16, 468);
         margin-right: size(8, 468);
     }
}
.footer{
    flex-direction: column;
}
footer{
    padding-top: size(60, 468);
    padding-bottom: size(60, 468);
    height: 1000px;
}
.footer-info-text__span{
    color: white;
    font-size: size(11, 468);
    line-height: size(16, 468);
    font-weight: 700;
}
.container {
    width: 90vw;
}

    }
</style>