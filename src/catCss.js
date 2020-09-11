import left1 from './assets/images/pattern-left1.jpg'
import left2 from './assets/images/pattern-left2.jpg'
import right1 from './assets/images/pattern-right1.jpg'
import right2 from './assets/images/pattern-right2.jpg'

const string=`
/*开始画身体*/
.catBody {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 280px;
    height: 252px;
    border: 2px solid black;
    border-radius: 280px 280px 120px 120px / 350px 347px 169px 182px;
    background: rgb(211, 201, 191);
    overflow: hidden;
}

.catBody::after {
    position: absolute;
    content: '';
    display: block;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    background: rgb(244, 173, 107);
    /*transform: translate(-233px, -111px);*/
    right: 50%;
    margin-top: -70px;
}

.catBody::before {
    position: absolute;
    content: '';
    display: block;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    background: rgb(122, 123, 118);
    left: 50%;
    margin-top: -70px;
}

.catBody > div {
    position: absolute;
    height: 80px;
    width: 88px;
    background: rgb(244, 173, 107);
    top: -38px;
    right: 50%;
    margin-right: -40px;
    /*transform: translate(-46px, -11px);*/
    border-radius: 50%;
}

/*画尾巴*/
.tail {
    position: absolute;
    border: 2px solid black;
    width: 74px;
    height: 74px;
    background: white;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    margin-left: 34px;
    margin-top: -145px;
    transform-origin: 50% 100%;
    animation: tail-wave 300ms infinite linear;
}

/*画头*/
.head {
    position: absolute;
    background: white;
    width: 230px;
    height: 202px;
    border: 2px solid black;
    left: 50%;
    top: 50%;
    margin-top: -83px;
    margin-left: -115px;
    /*transform: translate(-50%, -50%);*/
    border-radius: 45% 45% 40% 40%/60% 60% 35% 35%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

/*画眼睛*/
.head .eye > li {
    width: 60px;
    height: 20px;
    border: 2px solid black;
    border-radius: 50% 50% 100% 0% / 100% 100% 0% 0%;
    border-bottom: none;
    overflow: hidden;
}

.eye .leftLid {
    transform: translate(-52px, 54px) rotate(8deg);
}

.eye .rightLid {
    transform: translate(52px, 34px) rotate(-8deg);
}

.eye .leftLid::before {
    content: '';
    display: block;
    border: 2px solid black;
    margin-left: 11px;
    margin-top: 15px;
    width: 38px;
    height: 6px;
    border-color: black transparent transparent transparent;
    border-radius: 50% 50% 0% 0%/100% 100% 0% 0%;
}

.eye .leftLid::after {
    content: '';
    display: block;
    border: 2px solid black;
    margin-left: 21px;
    margin-top: -17px;
    width: 22px;
    height: 36px;
    transform: translateY(-8px);
    background: black;
}

.eye .rightLid::before {
    content: '';
    display: block;
    border: 2px solid black;
    margin-top: 15px;
    margin-left: 11px;
    width: 38px;
    height: 6px;
    border-color: black transparent transparent transparent;
    border-radius: 60% 60% 0% 0%/100% 100% 0% 0%;
}

.eye .rightLid::after {
    content: '';
    display: block;
    border: 2px solid black;
    width: 22px;
    height: 36px;
    margin-left: 16px;
    margin-top: -17px;
    transform: translateY(-8px);
    background: black;
}

/*画耳朵*/
.ear {
    position: absolute;
    border: 2px solid black;
    top: 50%;
    left: 50%;
    border-radius: 3% 97% 85% 15% / 31% 42% 58% 69%;
    border-color: black transparent transparent black;
    background: white;
    width: 80px;
    height: 89px;
    margin-top: -96px;
}

.ear.left {
    margin-left: -104px;
    transform: rotate(6deg);
}

.ear.right {
    margin-left: 24px;
    transform: rotate(-6deg) rotateY(180deg);
    z-index:1;
}

/*画嘴巴*/
.mouse > li {
    position: absolute;
    border: 2px solid black;
    top: 50%;
    left: 50%;
    margin-top: 76px;
    width: 36px;
    height: 15px;
    border-radius: 72% 0% 100% 40%/60% 0% 100% 70%;
    border-color: transparent transparent black black;
}

.mouse .left {
    margin-left: -32px;
    transform: translate(52px, 15px) rotate(-6deg);
}

.mouse .right {
    margin-left: -44px;
}

/*画鼻子*/
.nose > li {
    position: absolute;
    border: 2px solid black;
    width: 16px;
    height: 13px;
    margin-top: 70px;
    border-color: transparent transparent black transparent;
}

.nose .left {
    transform: translate(-86%, -50%) rotate(26deg);
}

.nose .right {
    transform: translate(-38%, -50%) rotate(-26deg) rotateY(180deg);
}

.nose {
    position: absolute;
}

.nose:hover {
    transform-origin: 50% 100%;
    animation: shakeForNose 400ms 2 linear;
}

/* 画出头上的毛色 */
.head::after {
    content: '';
    display: block;
    position: absolute;
    content: '';
    display: block;
    top: 50%;
    left: 50%;
    width: 90px;
    height: 184px;
    background: linear-gradient(90deg,
    rgba(244, 173, 107, 1) 50%,
    rgba(122, 113, 108, 1) 50%);
    border-radius: 52% 45% 56% 60%/65% 60% 40% 40%;
    transform: translate(-51%, -50%) rotate(5deg);
    margin-top: -60px;
    z-index: 5;
}

/*注入灵魂，添加脸上的印记*/
.face > li {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(0.4) translate(-50%, -50%);
    background-repeat: no-repeat;
}

.face .left1 {
    background-image: url('${left1}');
    width: 48px;
    height: 66px;
    margin-left: -100px;
    margin-top: 43px;
}

.face .left2 {
    background-image: url('${left2}');
    width: 34px;
    height: 84px;
    margin-left: -114px;
    margin-top: 0px;
}

.face .right1 {
    background-image: url('${right1}');
    width: 72px;
    height: 56px;
    margin-left: 58px;
    margin-top: 46px;
}

.face .right2 {
    background-image: url('${right2}');
    width: 34px;
    height: 86px;
    margin-left: 89px;
    margin-top: 0px;
}
/*完成！！*/
`
export default string