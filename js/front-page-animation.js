window.onload = function () {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
        return window.scrollY
    })

    // Add animation bindings to elements

    // 第一頁
    lax.addElements('.page-1-h2', {
        scrollY: {
            
            rotate:[
                [800,1000],
                [0,-45],
            ],
            translateY: [
                [800,1000],
                [0,-200],
            ],
            translateX: [
                [800,1000],
                [0,-200],
            ],
            opacity:[
                [0,200,800,850,1000],
                [0.2,1,1,0.2,0],
            ],
        }
    })
    lax.addElements('.page-1-span', {
        scrollY: {
            
            rotate:[
                [800,1000],
                [0,-45],
            ],
            translateY: [
                [800,1000],
                [0,-200],
            ],
            translateX: [
                [800,1000],
                [0,-200],
            ],
            opacity:[
                [0,200,800,850,1000],
                [0.2,1,1,0.2,0],
            ],
        }
    })
    lax.addElements('.img-earth', {
        scrollY: {
            
            rotate:[
                [0,1000],
                [0,-30],
            ],
            
            opacity:[
                [0,200,800,850,1000],
                [0.2,1,1,0.2,0],
            ],
        }
    })

    // 第二頁
    lax.addElements('.page-2-span', {
        scrollY: {
            translateX:[
                [1800,2000],
                [0,-500],
            ],
            translateY:[
                [800,1000],
                [100,0],
            ],
            opacity:[
                [800,850,1000,1800,1850,2000],
                [0,0.2,1,1,0.2,0],
            ],
        }
    })
    lax.addElements('.img-cell-1', {
        scrollY: {
            translateX: [
                [800,1000,1800,2000],
                [-100,0,0,-100],
            ],

            opacity:[
                [800,850,1000,1800,1850,2000],
                [0,0.2,1,1,0.2,0],
            ],
        }
    })
    lax.addElements('.img-cell-2', {
        scrollY: {
            
            translateX: [
                [800,1000,1800,2000],
                [100,0,0,100],
            ],
            opacity:[
                [800,850,1000,1800,1850,2000],
                [0,0.2,1,1,0.2,0],
            ],
        }
    })
    // 第三頁
    lax.addElements('.page-3-title-box', {
        scrollY: {
            scale:[
                [2800,2850,3000],
                [1,0.5,0],
            ],
            translateX:[
                [1800,1900,2000,2800,2850,3000],
                [1200,750,0,0,500,750],
            ],
            
            opacity:[
                [1800,1850,2000,2800,2850,3000],
                [0,0.2,1,1,0.2,0],
            ],
        }
    })
    lax.addElements('.img-clock', {
        scrollY: {
            scale:[
                [2800,2850,3000],
                [1,0.5,0],
            ],
            translateX:[
                [2800,2850,3000],
                [0,-300,-400],
            ],
            translateY:[
                [1800,1900,2000,2800,2850,3000],
                [1200,750,0,0,-200,-300],
            ],
            opacity:[
                [1800,1850,2000,2800,2850,3000],
                [0,0.2,1,1,0.2,0],
            ],
        }
    })
    // 第四頁
    lax.addElements('.page-4-title-box', {
        scrollY: {
            
            translateX:[
                [2800,2850,3000],
                [1200,1000,0],
            ],
            translateY:[
                [3800,3850,4000],
                [0,-500,-1000]
            ],
            opacity:[
                [2800,2850,3000,3800,3850,4000],
                [0,0.2,1,1,0.2,0],
            ],
        }
    })
    lax.addElements('.img-cell-3', {
        scrollY: {
            translateX:[
                [2800,2850,3000],
                [-700,-500,0],
            ],
            translateY:[
                [2800,2850,3000,3800,3850,4000],
                [-700,-500,0,0,-500,-1000],
            ],
            
            opacity:[
                [2800,2850,3000,3800,3850,4000],
                [0,0.2,1,1,0.2,0],
            ],
        }
    })
    lax.addElements('.img-cell-4', {
        scrollY: {
            translateX:[
                [2800,2850,3000],
                [-1200,-1000,0],
            ],
            translateY:[
                [2800,2850,3000,3800,3850,4000],
                [500,200,0,0,-500,-1000],
            ],
            
            opacity:[
                [2800,2850,3000,3800,3850,4000],
                [0,0.2,1,1,0.2,0],
            ],
        }
    })
    lax.addElements('.img-magnifier', {
        scrollY: {
            scale:[
                [2800,2850,3000],
                [10,4,1],
            ],
            translateX:[
                [2800,2850,3000],
                [-900,-700,0],
            ],
            translateY:[
                [2800,2850,3000,3800,3850,4000],
                [-700,-200,0,0,-500,-1000],
            ],
            opacity:[
                [2800,2850,3000,3800,3850,4000],
                [0,0.2,1,1,0.2,0],
            ],
        }
    })
    lax.addElements('.title-border', {
        scrollY: {
            translateY:[
                [3800,3850,4000],
                [1000,200,0],
            ],
            opacity:[
                [3800,3850,4000],
                [0,0.2,1],
            ],
        }
    })
    lax.addElements('.img-arrow', {
        scrollY: {
            translateY:[
                [3800,3850,4000],
                [1000,200,0],
            ],
            opacity:[
                [3800,3850,4000],
                [0,0.2,1],
            ],
        }
    })
}