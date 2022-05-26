window.onload = function () {
    lax.init()

    // Setup mouse move listener
    document.addEventListener('mousemove', function (e) {
        lax.__cursorX = e.clientX
        lax.__cursorY = e.clientY
    }, false)

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
        return window.scrollY
    })
    // Add lax driver for cursorX
    lax.addDriver('cursorX', function () {
        return lax.__cursorX || 0
    })

    // Add lax driver for cursorY
    lax.addDriver('cursorY', function () {
        return lax.__cursorY || 0
    })

    // Add animation bindings to elements

    // 進度條
    lax.addElements('.page-1', {
        scrollY: {


            opacity: [
                [900, 1000],
                [1, 0.2],
            ],
        }
    })
    lax.addElements('.page-2', {
        scrollY: {
            opacity: [
                [900, 1000, 1900, 2000],
                [0.2, 1, 1, 0.2],
            ],
        }
    })
    lax.addElements('.page-3', {
        scrollY: {
            opacity: [
                [1900, 2000, 2900, 3000],
                [0.2, 1, 1, 0.2],
            ],
        }
    })
    lax.addElements('.page-4', {
        scrollY: {
            opacity: [
                [2900, 3000, 3900, 4000],
                [0.2, 1, 1, 0.2],
            ],
        }
    })
    lax.addElements('.page-5', {
        scrollY: {
            opacity: [
                [3900, 4000],
                [0.2, 1],
            ],
        }
    })
    // 第一頁
    lax.addElements('.page-1-h2', {
        scrollY: {


            translateY: [
                [900, 1000],
                [0, -400],
            ],

            opacity: [
                [0, 200, 900, 1000],
                [0.2, 1, 1, 0],
            ],
        }
    })
    lax.addElements('.page-1-span', {
        scrollY: {


            translateY: [
                [900, 1000],
                [0, -400],
            ],

            opacity: [
                [0, 200, 900, 1000],
                [0.2, 1, 1, 0],
            ],
        }
    })
    lax.addElements('.img-earth', {
        scrollY: {

            rotate: [
                [0, 1000],
                [0, -90],
            ],
            translateY: [
                [900, 1000],
                [0, 200],
            ],

            opacity: [
                [0, 200, 900, 1000],
                [0.2, 1, 1, 0],
            ],

        }
    },
        {
            sytle: {
                transition: '20s'
            }
        })

    // 第二頁
    lax.addElements('.page-2-span', {
        scrollY: {
            translateX: [
                [1900, 2000],
                [0, -500],
            ],

            translateY: [
                [900, 1000],
                [100, 0],
            ],
            opacity: [
                [900, 1000, 1900, 2000],
                [0, 1, 1, 0],
            ],
        }
    })
    lax.addElements('.img-cell-1', {
        scrollY: {
            scale: [
                
                [900, 1000,1300,1700, 1900, 2000],
                {
                    568:[0,1,1,1,1,0],
                    1400:[0, 1,0.8,1.2, 1, 0],
                }       
            ],
            opacity: [
                [900, 1000, 1900, 2000],
                [0, 1, 1, 0],
            ],
        },
        cursorX: {
            translateX: [
                [0, 'screenWidth'],
                {
                    568:[0,0],
                    1400:[0, 50],
                }
            ],
        },
        cursorY: {
            translateY: [
                [0, 'screenHeight'],
                {
                    568:[0,0],
                    1400:[0, 50],
                },
                
            ],
        },
    })

    lax.addElements('.img-cell-2', {
        scrollY: {

            scale: [
                [800, 900, 1000,1300,1700, 1900, 2000],
                {
                    568:[0,0,0.5,0.5,0.5,0.5,0],
                    1400:[0,0,1,1.2,0.8, 1, 0]
                },
                
            ],
            opacity: [
                [900, 1000, 1900, 2000],
                [0, 1, 1, 0],
            ],
        },
        cursorX: {
            translateX: [
                [0, 'screenWidth'],
                {
                    568:[0,0],
                    1400:[0, 50],
                },
                
            ],
        },

        cursorY: {
            translateY: [
                [0, 'screenHeight'],
                {
                    568:[0,0],
                    1400:[0, 50],
                }
            ],
        },
    })
    // 第三頁
    lax.addElements('.page-3-title-box', {
        scrollY: {
            scale: [
                [2900, 3000],
                [1, 0],
            ],
            translateX: [
                [1900, 2000, 2900, 3000],
                {
                    568: [-1200, 0, 0, 'screenWidth/5'],
                    1400: [1200, 0, 0, 'screenWidth/5'],
                }

            ],
            transitionY: [
                [2900, 3000],
                {
                    568: [0, '-screenHeight/4']
                }
            ],
            opacity: [
                [1900, 2000, 2900, 3000],
                [0, 1, 1, 0],
            ],
        }
    })
    lax.addElements('.clock-1', {
        scrollY: {scale: [
            [2900, 3000],
            [1, 0],
        ],
        translateX: [
            [2900, 3000],
            {
                568: [0, '-screenWidth/5'],
                1400: [0, '-screenWidth/5'],
            },

        ],
        translateY: [
            [1900, 2000, 2900, 3000],
            {
                568: [-1200, 0, 0, 'screenHeight/4'],
                1400: [1200, 0, 0, '-screenHeight/4'],
            },

        ],
            opacity: [
                [1900, 2000, 2900, 3000],
                [0, 1, 1, 0],
            ],
        }
    })
    lax.addElements('.clock-2', {
        scrollY: {
            scale: [
                [2900, 3000],
                [1, 0],
            ],
            translateX: [
                [2900, 3000],
                {
                    568: [0, '-screenWidth/5'],
                    1400: [0, '-screenWidth/5'],
                },

            ],
            translateY: [
                [1900, 2000, 2900, 3000],
                {
                    568: [-1200, 0, 0, 'screenHeight/4'],
                    1400: [1200, 0, 0, '-screenHeight/4'],
                },

            ],
            opacity: [
                [2199, 2200, 2900, 3000],
                [0, 1, 1, 0],
            ],
        }
    })
    lax.addElements('.clock-3', {
        scrollY: {
            scale: [
                [2900, 3000],
                [1, 0],
            ],
            translateX: [
                [2900, 3000],
                {
                    568: [0, '-screenWidth/5'],
                    1400: [0, '-screenWidth/5'],
                },

            ],
            translateY: [
                [1900, 2000, 2900, 3000],
                {
                    568: [-1200, 0, 0, 'screenHeight/4'],
                    1400: [1200, 0, 0, '-screenHeight/4'],
                },

            ],
            opacity: [
                [2399,2400, 2900, 3000],
                [0, 1, 1, 0],
            ],
        }
    })
    lax.addElements('.clock-4', {
        scrollY: {
            scale: [
                [2900, 3000],
                [1, 0],
            ],
            translateX: [
                [2900, 3000],
                {
                    568: [0, '-screenWidth/5'],
                    1400: [0, '-screenWidth/5'],
                },

            ],
            translateY: [
                [1900, 2000, 2900, 3000],
                {
                    568: [-1200, 0, 0, 'screenHeight/4'],
                    1400: [1200, 0, 0, '-screenHeight/4'],
                },

            ],
            opacity: [
                [2599, 2600, 2900, 3000],
                [0, 1, 1, 0],
            ],
        }
    })
    lax.addElements('.clock-mobile', {
        scrollY: {
            scale: [
                [2900, 3000],
                [1, 0],
            ],
            translateX: [
                [2900, 3000],
                {
                    568: [0, '-screenWidth/5'],
                    1400: [0, '-screenWidth/5'],
                },

            ],
            translateY: [
                [1900, 2000, 2900, 3000],
                {
                    568: [-1200, 0, 0, 'screenHeight/4'],
                    1400: [1200, 0, 0, '-screenHeight/4'],
                },

            ],
            opacity: [
                [1900, 2000, 2900, 3000],
                [0, 1, 1, 0],
            ],
        }
    })
    // 第四頁
    lax.addElements('.page-4-title-box', {
        scrollY: {

            translateX: [
                [2900, 3000],
                [1200, 0],
            ],
            translateY: [
                [3900, 4000],
                [0, -1000]
            ],
            opacity: [
                [2900, 3000, 3900, 4000],
                [0, 1, 1, 0],
            ],
        }
    })
    lax.addElements('.img-cell-3', {
        scrollY: {
            translateX: [
                [2900, 3000],
                [-700, 0],
            ],
            translateY: [
                [2900, 3000, 3900, 4000],
                {
                    568:[-700,0,0,0],
                    1400:[-700, 0, 0, -1000],
                }
                
            ],
            scale: [
                [3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800],
                [1, 1.2, 0.8, 1.2, 0.8, 1.2, 0.8, 1.2, 1],
            ],
            opacity: [
                [2900, 3000, 3900, 4000],
                {
                    568:[0,1,1,0.4],
                    1400:[0, 1, 1, 0],
                }
                
            ],
        }
    })
    lax.addElements('.img-cell-4', {
        scrollY: {
            translateX: [
                [2900, 3000],
                [-1200, 0],
            ],
            translateY: [
                [2900, 3000, 3900, 4000],
                {
                    568:[500,0,0,0],
                    1400:[500, 0, 0, -1000],
                }
                
            ],
            scale: [
                [3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800],
                [1, 0.8, 1.2, 0.8, 1.2, 0.8, 1.2, 0.8, 1],
            ],
            opacity: [
                [2900, 3000, 3900, 4000],
                {
                    568:[0,1,1,0.4],
                    1400:[0, 1, 1, 0],
                }
                
            ],
        }
    })
    lax.addElements('.img-magnifier', {
        scrollY: {
            scale: [
                [2900, 3000],
                [10, 1],
            ],
            rotate: [
                [3000, 3100, 3200, 3300, 3400, 3500, 3600, 3700, 3800],
                [0, 5, 0, -5, 0, 5, 0, -5, 0],
            ],
            translateX: [
                [2900, 3000],
                {
                    568: [-1000, 0],
                    1400: [-2800, 0],
                }
            ],
            translateY: [
                [2900, 3000, 3900, 4000],
                {
                    568: [700, 0, 0, 0],
                    1400: [-500, 0, 0, -1000],
                }
            ],
            opacity: [
                [2900, 3000, 3900, 4000],
                {
                    568:[0,1,1,0.4],
                    1400:[0, 1, 1, 0],
                }
                
            ],
        }
    })
    lax.addElements('.title-border', {
        scrollY: {
            translateY: [
                [3900, 4000,],
                [1000, 0,],
            ],
            opacity: [
                [3900, 4000],
                [0, 1],
            ],
        }
    })
    lax.addElements('.img-arrow', {
        scrollY: {
            translateY: [
                [3900, 4000],
                [1000, 0],
            ],
            opacity: [
                [3900, 4000],
                [0, 1],
            ],
        }
    })
}


window.onscroll = function () {
    console.log("滾動");
    var intElemScrollHeight = document.querySelector('body').scrollHeight;
    console.log(document.documentElement.scrollTop, intElemScrollHeight);
    if (document.documentElement.scrollTop >= (intElemScrollHeight - 969) ) {
      parent.hideIframe()
    }
  }