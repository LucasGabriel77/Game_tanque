class Objeto{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }

    desenhaObjeto(){
        des.fillStyle = 'blue'
        des.fillRect(this.x, this.y, this.w, this.h)
    }

    desenha_img(){
        let img = new Image()
        img.src = this.a
        des.drawImage(img,this.x,this.y,this.w,this.h)
    }

    colid(objeto) {
        if((this.x < objeto.x + objeto.w)&&
            (this.x + this.w > objeto.x)&&
            (this.y < objeto.y + objeto.h)&&
            (this.y + this.h > objeto.y)){
            return true       
        }else{
            return false
        }
    }
}
class Tanque extends Objeto{
    dirX = 0
    dirY = 0
    pts = 0
    vida = 5
    frame = 1
    tempo = 0

    atualiza_tanque(){
        this.x += this.dirX
        this.y += this.dirY
        
        if(this.x <0){
            this.x = 0
        }
        else if(this.x > 260){
            this.x = 260
        }
        if(this.y <= 120){
            this.y = 120
        }
        else if(this.y >=300){
            this.y = 300
        }
    } 

    pontos(objeto){
        if(this.y > objeto.y){
            return true
        }
    }
    
    colid(objeto){
        if((this.x < objeto.x + objeto.w)&&
        (this.x + this.w > objeto.x)&&
        (this.y < objeto.y + objeto.h)&&
        (this.y + this.h > objeto.y)){
            return true
        }else{
            false
        }
    }
}

class Inimigos extends Objeto{
    vel = 1

    mov(){
        this.x -= this.vel
        if(tanque.pts >= 50){
            this.vel = 1.5
            this.x -= this.vel  
        }
        if(tanque.pts >= 100){
            this.vel = 2
            this.x -= this.vel  
        }
        if(tanque.pts >= 150){
            this.vel = 2.5
            this.x -= this.vel  
        }
        if(tanque.pts >= 200){
            this.vel = 3
            this.x -= this.vel  
        }
    }
}
class Tiro extends Objeto{
    des_tiro(){
        //  des.fillStyle = 'black'
        // des.fillRect(this.x, this.y, this.w, this.h)
        let img = new Image()
        img.src = this.a
        des.drawImage(img,this.x,this.y,this.w,this.h)
    }

    mov(){
        this.x += 5
    }
}
class Text {
    desenhaTexto (text,x,y,cor,font){
    des.fillStyle = cor
    des.lineWidth = '5'
    des.font = font
    des.fillText(text,x,y) 
    } 
}
