;(function (window){
    function shieldAnimation (element,percentage1,percentage2,color1,color2,img) {
        this.color1 = color1
        this.color2 = color2
        this.img = img
        this.DOM = this.render(element)
        this.DOM.appendChild(this.creatImg()) 
        this.DOM.appendChild(this.creatBig(percentage1)) 
        this.DOM.appendChild(this.creatSmall(percentage2)) 
    }
    shieldAnimation.prototype.render=function(element){
        var dom = document.querySelector(element)
        return dom    
    }
    shieldAnimation.prototype.util = {
        creatE : function (element){
            var dom = document.createElement(element)
            return dom
        }
    }
    shieldAnimation.prototype.creatBig = function (percentage1){
        var divBox = this.util.creatE('div')
        var divBox2 = this.util.creatE('div')
        // var divBox3 = this.util.creatE('div')
        var divBox4 = this.util.creatE('div')
        var divBox41 = this.util.creatE('div')
        var divBox42 = this.util.creatE('div')
        var hide1 = this.util.creatE('div')
        var hide = this.util.creatE('div')
        divBox2.style.backgroundColor = this.color1
        divBox41.style.backgroundColor = this.color2
        divBox42.style.backgroundColor = this.color2
        divBox.className = 'big_dunpai'
        divBox2.className = 'box2'
        // divBox3.className = 'box3'
        divBox4.className = 'box4'
        divBox41.className = 'box41'
        divBox42.className = 'box42'
        hide1.className = 'hide1'
        hide.className = 'hide'
        divBox.appendChild(divBox2)
        // divBox.appendChild(divBox3)
        divBox.appendChild(divBox4)
        divBox41.appendChild(hide1)
        divBox42.appendChild(hide)
        divBox4.appendChild(divBox41)
        divBox4.appendChild(divBox42)
        var pTage = Math.round(Number(percentage1))
        if(pTage>100){
            pTage = 100
        }
       if(pTage<=50){
           console.log(pTage)
        hide.style.animation = 'circleProgressLoad_hide_'+pTage+' 5s linear forwards'
       }
       if(pTage >50) {
           var pTage1 = 50
           var pTage2 = pTage - 50
           hide.style.animation = 'circleProgressLoad_hide_'+pTage1+' 5s linear forwards'
           hide1.style.animation = 'circleProgressLoad_hide1_'+pTage2+' 5s linear forwards'
       }
        return divBox
    }
    shieldAnimation.prototype.creatSmall = function (percentage2){
        var divBox = this.util.creatE('div')
        var divBox2 = this.util.creatE('div')
        // var divBox3 = this.util.creatE('div')
        var divBox4 = this.util.creatE('div')
        var divBox41 = this.util.creatE('div')
        var divBox42 = this.util.creatE('div')
        var hide1 = this.util.creatE('div')
        var hide = this.util.creatE('div')
        divBox2.style.backgroundColor = 'rgba(224, 154, 3, 0.5)'
        divBox41.style.backgroundColor = 'rgba(224, 154, 3, 1)'
        divBox42.style.backgroundColor = 'rgba(224, 154, 3, 1)'
        divBox.className = 'small_dunpai'
        divBox2.className = 'box2_1'
        // divBox3.className = 'box3_1'
        divBox4.className = 'box4_1'
        divBox41.className = 'box41_1'
        divBox42.className = 'box42_1'
        hide1.className = 'hide1_1'
        hide.className = 'hide_1'
        divBox.appendChild(divBox2)
        // divBox.appendChild(divBox3)
        divBox.appendChild(divBox4)
        divBox41.appendChild(hide1)
        divBox42.appendChild(hide)
        divBox4.appendChild(divBox41)
        divBox4.appendChild(divBox42)
        var pTage = Math.round(Number(percentage2))
        if(pTage>100){
            pTage = 100
        }
       if(pTage<=50){
           console.log(pTage)
        hide.style.animation = 'circleProgressLoad_hide_'+pTage+' 5s linear forwards'
       }
       if(pTage >50) {
           var pTage1 = 50
           var pTage2 = pTage - 50
           hide.style.animation = 'circleProgressLoad_hide_'+pTage1+' 5s linear forwards'
           hide1.style.animation = 'circleProgressLoad_hide1_'+pTage2+' 5s linear forwards'
       }
        return divBox
    }
    shieldAnimation.prototype.creatImg = function (){
        var divBox = this.util.creatE('img')
        divBox.className = 'img'
        divBox.setAttribute('src','./images/'+this.img+'.png')
        divBox.style.height = '100%'
        divBox.style.width = '100%'
        return divBox
    }
    window.shieldAnimation  = shieldAnimation
})(window)