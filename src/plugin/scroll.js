
    import Vue from "vue";
    import vuescroll from "vuescroll";

    Vue.use(vuescroll, {
        ops: {
            vuescroll: {
                mode: "native"
            },
            rail: {
                size: "10px",
                background: "rgba(0, 0, 0, .05)",
                opacity: 1
            },
            scrollPanel: {
                scrollingX: false
            },  
            bar: {
                size: "10px",
                /** 当不做任何操作时滚动条自动消失的时间 */
                showDelay: 500,
                /** Specify bar's border-radius, or the border-radius of rail and bar will be equal to the rail's size. default -> false **/
                specifyBorderRadius: false,
                /** 是否只在滚动的时候现实滚动条 */
                onlyShowBarOnScroll: false,
                /** 是否保持显示 */
                keepShow: false,
                /** 滚动条颜色, default -> #00a650 */
                background: "rgba(0, 0, 0, .4)",
                /** 滚动条透明度, default -> 1  */
                opacity: 1,
                /** Styles when you hover scrollbar, it will merge into the current style */
                hoverStyle: false
            },
            scrollButton: {
                enable: false,
                background: '#fcfcfc',
                opacity: 1,
                step: 180,
                mousedownStep: 30
            }
        },
        name: "v-scroll"
    });