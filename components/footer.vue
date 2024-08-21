<template>
    <div id="frame_r"></div>
    <div id="frame_l"></div>
    <div id="frame_btm"></div>
    <footer>
        <div id="footer">
            <p>Copyright © asaco All Rights Reserved.</p>
        </div>
    </footer>
  </template>

<style lang="scss" scope>
  #frame_r {
  position: fixed;
  width: 50px;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 10;
  background-color: $mizuiro01;
}
#frame_l {
  position: fixed;
  width: 50px;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: $mizuiro01;
}
#frame_btm {
  position: fixed;
  width: 100%;
  border-bottom: 30px solid $mizuiro01;
  top: calc(100% - 30px);
  left: 0;
  z-index: 12;
}
#corner_TR {
  position: fixed;
  top: calc(178px - 17px);
  right: calc(42px - 17px);
  width: 140px;
  height: 140px;
  background-image: url(/images/rect.png);
  background-repeat:  no-repeat;
  background-position: right top; 
  background-size: contain;
  z-index: 11;
  @media (max-width: 600px) {
    top: calc(133px - 17px);
  }
}

#corner_BR {
  position: fixed;
  bottom: calc(23px - 17px);
  right: 26px;
  width: 140px;
  height: 140px;
  background-image: url(/images/rect.png);
  background-repeat: no-repeat;
  background-position: right top;
  background-size: contain;
  transform: rotate(90deg);
  z-index: 11;
}
</style>