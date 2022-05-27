<template>
    <footer>
        <div class="container">
            <div class="footer">
                <div class="footer-info">
                <img src="../assets/images/logo.png" class="header-logo">
                    <div class="footer-info-icons">
                         <div class="footer-info-icon">
                             <a href="#" class="footer-info-icons-link"><img class="footer-info-icons-link__img" src="@/assets/images/icons/gitlab.svg" alt=""></a>
                             <a href="#" class="footer-info-icons-link"><img class="footer-info-icons-link__img" src="@/assets/images/icons/telegram.svg" alt=""></a>
                             <a href="#" class="footer-info-icons-link"><img class="footer-info-icons-link__img" src="@/assets/images/icons/github.svg" alt=""></a>
                             <a href="#" class="footer-info-icons-link"><img class="footer-info-icons-link__img" src="@/assets/images/icons/figma.svg" alt=""></a>
                             <a href="#" class="footer-info-icons-link"><img class="footer-info-icons-link__img" src="@/assets/images/icons/trello.svg" alt=""></a>
                         </div>
                        <span class="footer-info-text__span">Разработка команды AsDev</span>
                        <span class="footer-info-text__span">Company Registration No. : 2658020</span>    
                    </div>
                    <div class="footer-info-text">
                         <span class="footer-info-text__span">Политика использования</span>
                         <span class="footer-info-text__span">Условия безопасности</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>


<style lang="scss" scoped>
  @import "src/assets/styles/fonts.scss";
  footer{
  height: size(171, 1920);
  display: flex;
    align-items: center;
    margin: 0;
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
 .footer-info-icons{
     display: flex;
     flex-direction: column;
     align-items: center;
     margin-bottom: size(10, 1920);
 }
 .footer-info-icons-link__img{
      width: size(25, 1920);
        height: size(25, 1920);
 }
.footer-info-text{
     display: flex;
     flex-direction: column;
     align-items: flex-end;
}
.footer-info-text__span{
    color: white;
      font-size: size(20, 1920);
    font-weight: 700;
}
.footer-info-text__span:not(:last-child){
    margin-bottom: size(5, 1920);
}
.footer-info-icons-link:not(:last-child){
   margin-right: size(10, 1920);
}


@media (max-width:750px){
    .footer-info{
        flex-direction: column;
    }
    .header-logo{
        margin-bottom: size(10, 750);
    }
    footer{
         height: size(100, 750);
    }
    .footer-info-icons{
        margin-bottom: size(10, 750);
    }
    .footer-info-text__span{
    color: white;
      font-size: size(10, 750);
    font-weight: 700;
}
    .footer-info-text{
     display: flex;
     flex-direction: column;
     align-items: center;
}
}
</style>