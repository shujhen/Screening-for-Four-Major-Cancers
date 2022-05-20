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

    // 第一頁
    lax.addElements('.page-1-h2', {
        scrollY: {
            
           
            translateY: [
                [900,1000],
                [0,-400],
            ],
            
            opacity:[
                [0,200,900,1000],
                [0.2,1,1,0],
            ],
        }
    })
    lax.addElements('.page-1-span', {
        scrollY: {
            
           
            translateY: [
                [900,1000],
                [0,-400],
            ],
            
            opacity:[
                [0,200,900,1000],
                [0.2,1,1,0],
            ],
        }
    })
    lax.addElements('.img-earth', {
        scrollY: {
            
            rotate:[
                [0,1000],
                [0,-45],
            ],
            translateY: [
                [900,1000],
                [0,200],
            ],
            
            opacity:[
                [0,200,900,1000],
                [0.2,1,1,0],
            ],

        }
    },
    {
        sytle:{
            transition: '20s'
        }
    })

    // 第二頁
    lax.addElements('.page-2-span', {
        scrollY: {
            translateX:[
                [1900,2000],
                [0,-500],
            ],
            
            translateY:[
                [900,1000],
                [100,0],
            ],
            opacity:[
                [900,1000,1900,2000],
                [0,1,1,0],
            ],
        }
    })
    lax.addElements('.img-cell-1', {
        scrollY: {
            translateX: [
                [900,1000,1900,2000],
                [-100,0,0,-100],
            
            ],

            scale:[
                [1000,1100,1200,1300,1400,1500,1600,1700,1800],
                [1,0.8,1.2,0.8,1.2,0.8,1.2,0.8,1],
            ],
            opacity:[
                [900,1000,1900,2000],
                [0,1,1,0],
            ],
        }
    })
    // lax.addElements(".img-cell-1", {
    //     cursorX: {
    //       translateX: [
    //         [0, 'screenWidth'],
    //         [100, -100],
    //       ],
    //     },
    //     cursorY: {
    //       translateY: [
    //         [0, 'screenHeight'],
    //         [100, -100],
    //       ],
    //     },
    // })

    lax.addElements('.img-cell-2', {
        scrollY: {
            
            translateX: [
                [900,1000,1900,2000],
                [100,0,0,100],
            ],
            
            scale:[
                [1000,1100,1200,1300,1400,1500,1600,1700,1800],
                [1,1.1,0.9,1.1,0.9,1.1,0.9,1.1,1],
            ],
            opacity:[
                [900,1000,1900,2000],
                [0,1,1,0],
            ],
        }
    })
    // 第三頁
    lax.addElements('.page-3-title-box', {
        scrollY: {
            scale:[
                [2900,3000],
                [1,0],
            ],
            translateX:[
                [1900,2000,2900,3000],
                {
                    568:[-1200,0,0,'screenWidth/5'],
                    1400:[1200,0,0,'screenWidth/5'],
                }
                
            ],
            transitionY:[
                [2900,3000],
                {
                    568:[0,'-screenHeight/4']
                }
            ],
            opacity:[
                [1900,2000,2900,3000],
                [0,1,1,0],
            ],
        }
    })
    lax.addElements('.img-clock', {
        scrollY: {
            scale:[
                [2900,3000],
                [1,0],
            ],
            translateX:[
                [2900,3000],
                {
                    568:[0,'-screenWidth/5'],
                    1400:[0,'-screenWidth/5'],
                },
                
            ],
            translateY:[
                [1900,2000,2900,3000],
                {   
                    568:[-1200,0,0,'screenHeight/4'],
                    1400:[1200,0,0,'-screenHeight/4'],
                },
                
            ],
            opacity:[
                [1900,2000,2900,3000],
                [0,1,1,0],
            ],
        }
    })
    // 第四頁
    lax.addElements('.page-4-title-box', {
        scrollY: {
            
            translateX:[
                [2900,3000],
                [1200,0],
            ],
            translateY:[
                [3900,4000],
                [0,-1000]
            ],
            opacity:[
                [2900,3000,3900,4000],
                [0,1,1,0],
            ],
        }
    })
    lax.addElements('.img-cell-3', {
        scrollY: {
            translateX:[
                [2900,3000],
                [-700,0],
            ],
            translateY:[
                [2900,3000,3900,4000],
                [-700,0,0,-1000],
            ],
            scale:[
                [3000,3100,3200,3300,3400,3500,3600,3700,3800],
                [1,1.2,0.8,1.2,0.8,1.2,0.8,1.2,1],
            ],
            opacity:[
                [2900,3000,3900,4000],
                [0,1,1,0],
            ],
        }
    })
    lax.addElements('.img-cell-4', {
        scrollY: {
            translateX:[
                [2900,3000],
                [-1200,0],
            ],
            translateY:[
                [2900,3000,3900,4000],
                [500,0,0,-1000],
            ],
            scale:[
                [3000,3100,3200,3300,3400,3500,3600,3700,3800],
                [1,0.8,1.2,0.8,1.2,0.8,1.2,0.8,1],
            ],
            opacity:[
                [2900,3000,3900,4000],
                [0,1,1,0],
            ],
        }
    })
    lax.addElements('.img-magnifier', {
        scrollY: {
            scale:[
                [2900,3000],
                [10,1],
            ],
            rotate:[
                [3000,3100,3200,3300,3400,3500,3600,3700,3800],
                [0,5,0,-5,0,5,0,-5,0],
            ],
            translateX:[
                [2900,3000],
                {
                    568:[-1000,0],
                    1400:[-2800,0],
                }
            ],
            translateY:[
                [2900,3000,3900,4000],
                {
                    568:[700,0,0,-1000],
                    1400:[-500,0,0,-1000],
                }
            ],
            opacity:[
                [2900,3000,3900,4000],
                [0,1,1,0],
            ],
        }
    })
    lax.addElements('.title-border', {
        scrollY: {
            translateY:[
                [3900,4000,5000],
                [1000,0,0],
            ],
            opacity:[
                [3900,4000,5000],
                [0,1,1],
            ],
        }
    })
    lax.addElements('.img-arrow', {
        scrollY: {
            translateY:[
                [3900,4000,5000],
                [1000,0,0],
            ],
            opacity:[
                [3900,4000,5000],
                [0,1,1],
            ],
        }
    })
}

