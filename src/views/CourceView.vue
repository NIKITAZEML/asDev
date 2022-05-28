<template>
    <div class="wrapper">
        <div class="container">
            <div class="cource">
                <div class="cource-title">
                    <span class="cource-title__text">Курс валют</span>
                    <span class="cource-title__score">Счёт в рублях: 2102342 ₽</span>
                </div>
                <div class="cource-search">
                    <div class="search__input">
                        <lable for="search"><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_103_260)">
                                <path d="M20.8077 19.8729L14.4312 13.4574C15.6196 12.034 16.3359 10.2027 16.3359 8.2031C16.3359 3.67268 12.6632 -1.90735e-05 8.13281 -1.90735e-05C3.60239 -1.90735e-05 -0.0703125 3.67268 -0.0703125 8.2031C-0.0703125 12.7335 3.60239 16.4062 8.13281 16.4062C10.1911 16.4062 12.0713 15.6463 13.5118 14.3935L19.8794 20.8011C20.1356 21.0574 20.5514 21.0574 20.8076 20.8011C21.0636 20.5449 21.0636 20.1295 20.8076 19.8729H20.8077ZM8.13281 15.1046C4.32131 15.1046 1.23136 12.0146 1.23136 8.2031C1.23136 4.3916 4.32131 1.30165 8.13281 1.30165C11.9443 1.30165 15.0343 4.3916 15.0343 8.2031C15.0343 12.0146 11.9443 15.1046 8.13281 15.1046Z" fill="#6622A6"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_103_260">
                                    <rect width="21" height="21" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg></lable>
                        <input id="search" type="search">
                    </div>
                        <div class="cource-search__button">Найти</div>
                </div>
                <div class="cource-category">
                    <span>Сортировка по:</span>
                    <vue-custom-select
                        v-model="selectedOption"
                        :data-array="dataArray"
                        placeholder="Выбрать поле">
                    </vue-custom-select>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import vueCustomSelect from 'vue-custom-select/src/CustomSelect.vue';

    export default {
        components: {
            vueCustomSelect,
        },
        data () {
            return {
                selectedOption: '',
                dataArray: [
                    {text: 'Нет сортировки', value: 'Any'},
                    {text: 'Названию', value: 'Any'},
                    {text: 'Цене', value: 'Any'},
                ]
            }
        }
    };
</script>

<style scoped lang="scss">
    @import "src/assets/styles/fonts";

    .wrapper{
        display: flex;
        flex:1 0;
        margin-top: size(50, 1920);
    }
    .cource-title{
        margin-bottom: size(50, 1920);
    }

    .container{
        width: size(1440, 1920);
        margin: 0 auto;
    }

    .cource-title{
        display: flex;
        justify-content: space-between;
        .cource-title__text{
            font-weight: 600;
            font-size: size(30, 1920);
            line-height: size(35, 1920);
            color: #FFFFFF;
        }
        .cource-title__score{
            font-weight: 600;
            font-size: size(20, 1920);
            line-height: size(23, 1920);
            color: #FFFFFF;
        }
    }

    .cource-search{

        width: size(326, 1920);
        height: size(42, 1920);

    }

    .search__input{
        input{
            width: size(326, 1920);
            height: size(42, 1920);
            z-index: 1;
        }
        lable{
            position: absolute;
            z-index: 2;
            margin-left: size(290, 1920);
            margin-top: size(8, 1920);
            svg{
                width: size(21, 1920);
                height: size(21, 1920);
            }
        }
    }

    .custom-select{
        width: size(300, 1920) !important;
    }



</style>